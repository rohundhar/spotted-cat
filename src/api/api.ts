/**
 * @module Api
 *
 * This module is going to handle all API calls to the simplehabit server and make
 * specific endpoint calls available to the rest of the application
 *
 */

import urlFormat from 'url';
import { ParsedUrlQueryInput } from 'querystring';
import { guessTimezone } from '@/lib/timeDate';


export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
}

export enum RequestContentType {
  JSON = 'application/json',
  FORM = 'application/x-www-form-urlencoded;charset=UTF-8',
}

/** This is the object we'll pass to the function that generates the API calls
 *
 * Note: the reason why path is optional is because that will be specified when the
 * call is created, but we still want to be able to declare default options without a path
 */
type ApiOptions<Arguments> = {
  method: FetchMethod;
  path: string;
  args?: Arguments;
  contentType?: RequestContentType;
  baseURL?: string;
  accessToken: string | null;
  maxRetries?: number;
};

const defaultApiOptions = {
  method: FetchMethod.GET,
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  maxRetries: 1,
};

/**
 * @function generateApiCall Higher order function that returns a function which makes a fetch
 * to an endpoint when options are supplied
 * @param apiOptions - see declaration above
 * @returns - function that allows client to make an API call
 */
function generateApiCall<T extends Record<string, any>>(apiOptions: ApiOptions<T>) {
  const options = { ...defaultApiOptions, ...apiOptions };

  async function apiCall(args?: T) {
    const { baseURL, path, maxRetries } = options;

    console.log('API CALL', baseURL, path, options);
    // Support either passed explicitly to options or in the args
    const token = options.accessToken;

    let url = baseURL + path;
    let attempts = 0;
    const headers: HeadersInit = {};
    let body: Optional<BodyInit>;
    const params: Optional<ParsedUrlQueryInput> = args;

    /** Send token if available */
    if (token) {
      headers[`authorization`] = `Bearer ${token}`;
    } else {
      console.warn('Attempting to make authenticated API call without token.');
    }

    // Always send the timezone of the user in the header. We pass in 'true' because
    // we don't want to cache the guess, in case the user is travelling somehow
    headers['time-zone'] = guessTimezone() as string;

    /** Format parameters based on fetch method */
    if (options.method === FetchMethod.GET) {
      url += urlFormat.format({ query: params });
    } else if (options.method === FetchMethod.POST || options.method === FetchMethod.PATCH) {
      // add content-type application/x-www-form-urlencoded
      body = params as Optional<BodyInit>;
      headers['content-type'] =
        options.contentType === RequestContentType.JSON ? RequestContentType.JSON : RequestContentType.FORM;
    }

    if (options.contentType === RequestContentType.JSON) body = JSON.stringify(body);

    while (attempts < maxRetries) {
      attempts += 1;
      try {
        const res = await fetch(url, {
          headers,
          method: options.method,
          body,
        });

        if (!res.ok) {
          const errorResponse = await res.json();
          throw new Error(`HTTP error! status: ${res.status}, message: ${errorResponse.message}`);
        }

        const responseJson = await res.json();
        return responseJson;
      } catch (error) {
        if (attempts >= maxRetries) {
          throw error; // Re-throw the last error if max retries reached
        }
        // @ts-ignore
        console.warn(`Attempt ${attempts} failed: ${error.message}. Retrying...`);
      }
    }
  }

  return apiCall(options.args);
}


export {
  generateApiCall
};
