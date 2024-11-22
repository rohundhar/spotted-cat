import { FetchMethod, generateApiCall, RequestContentType } from "@/api/api";
import type { ServerResponse } from "@/api/types";
import type { Folder } from "@/models/Folder";
import type { Media } from "@/models/Media";
import { string } from "zod";

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


export const fetchAllMedia = async (token: string | null): ServerResponse<{results: Media[]}> => {

  return generateApiCall({
    path: "/home/all",
    method: FetchMethod.GET,
    contentType: RequestContentType.JSON,
    accessToken: token
  })
}


export const fetchAllUserFolders = async (token: string | null): ServerResponse<{results: Folder[]}> => {
  return generateApiCall({
    path: "/folders",
    method: FetchMethod.GET,
    contentType: RequestContentType.JSON,
    accessToken: token
  })
}

export const addNewUserFolder = async ({ token, name, color }: {token: string | null, name: string, color: string}): ServerResponse<any> => {

  return generateApiCall({
    path: "/folders/create",
    method: FetchMethod.POST,
    contentType: RequestContentType.JSON,
    accessToken: token,
    args: {
      name,
      color,
    }
  })
}

export const deleteUserFolder = async ({ token, folderId }: {token: string | null, folderId: string}): ServerResponse<any>=> {

  return generateApiCall({
    path: "/folders/delete",
    method: FetchMethod.POST,
    contentType: RequestContentType.JSON,
    accessToken: token,
    args: {
      folderId
    }
  })
}

export const addMediaToFolder = async ({ token, folderId, mediaIds }: {token: string | null, folderId: string, mediaIds: string[]}): ServerResponse<any> => {

  return generateApiCall({
    path: "/folders/add-media",
    method: FetchMethod.POST,
    contentType: RequestContentType.JSON,
    accessToken: token,
    args: {
      folderId,
      mediaIds
    }
  })
}