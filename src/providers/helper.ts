import { FetchMethod, generateApiCall, RequestContentType } from "@/api/api";
import type { ServerResponse } from "@/api/types";
import type { Media } from "@/models/Media";
import { ImageTypes } from "@/models/MimeType";

export const getMediasById = (medias: Media[]): Record<string, Media> => {
  const mediaById: Record<string, Media> = {};

  for (const media of medias) {
    mediaById[media.gDriveId] = media;
  }
  return mediaById;
}

export const mergeMedia = (list1: Media[], list2: Media[]): Media[] => {

  const merged: Media[] = [];
  const gDriveIds = new Set<string>(); // Use a Set to track unique gDriveIds

  for (const item of list1) {
      if (!gDriveIds.has(item.gDriveId)) {
          merged.push(item);
          gDriveIds.add(item.gDriveId);
      }
  }

  for (const item of list2) {
      if (!gDriveIds.has(item.gDriveId)) {
          merged.push(item);
          gDriveIds.add(item.gDriveId);
      }
  }

  return merged;
}

export const getContentUrl = (file: Media) => {
  const { gDriveId: fileId } = file;
  const type = ImageTypes.includes(file.mimeType) ? 'image' : 'video';
  const proxyUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/proxy/image?gDriveId=${fileId}&type=${type}`;
  return proxyUrl
}

export const fetchAllMedia = async (token: string | null): ServerResponse<{results: Media[]}> => {

  return generateApiCall({
    path: "/home/all",
    method: FetchMethod.GET,
    contentType: RequestContentType.JSON,
    accessToken: token
  })
}

export const fetchQueryResults = async (query: string): ServerResponse<{results: string[]}> => {
  return generateApiCall({
    path: '/home/query',
    method: FetchMethod.GET,
    contentType: RequestContentType.JSON,
    accessToken: null,
    args: {
      query
    }
  })
}
