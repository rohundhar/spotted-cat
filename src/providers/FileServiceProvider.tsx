"use client";
import { TestFolders, TestMedia } from '@/libs/TestData';
import type { Folder } from '@/models/Folder';
import type { Media } from '@/models/Media';
import { useClerk } from '@clerk/nextjs';
import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';


type FolderTag = Pick<Folder, "name" | "color">;


interface FileServiceProviderProps {
  children: ReactNode;
}

interface FileServiceContext {
 selectedMedia: Record<string, boolean>;
 folders: Folder[];
 media: Media[];

 mediaToFolderTags: Record<string, FolderTag[]>;

 addNewFolder: (props: { name: string, color: string }) => Promise<void>;
 addSelectedMediaToFolder: (name: string) => Promise<void>;
 onSelect: (id: string, isSelected: boolean) => void;
}

const InitialContext: FileServiceContext = {
  selectedMedia: {},
  mediaToFolderTags: {},
  onSelect: () => {},
  addNewFolder: async() => {},
  addSelectedMediaToFolder: async () => {},
  folders: [],
  media: []
};


const getMediasById = (medias: Media[]): Record<string, Media> => {
  const mediaById: Record<string, Media> = {};

  for (const media of medias) {
    mediaById[media.gDriveId] = media;
  }
  return mediaById;
}

const mergeMedia = (list1: Media[], list2: Media[]): Media[] => {

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

const FileServiceContext = createContext<FileServiceContext>(InitialContext);


export const FileServiceProvider: React.FC<FileServiceProviderProps> = ({  children }) => {

  const [selectedMedia, setSelectedMedia] = useState({});
  const [folders, setFolders] = useState<Folder[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [mediaToFolderTags, setMediaToFolderTags] = useState({} as Record<string, FolderTag[]>);


  const { user: clerkUser } = useClerk();

  useEffect(() => {
    setMedia(TestMedia);
  }, []);

  useEffect(() => {
    setFolders(TestFolders);

  }, [])

  useEffect(() => {

    const mapping: Record<string, FolderTag[]> = {};

    for (const folder of folders) {
      const { color, name, files } = folder;
      for (const file of files) {
        if (!mapping[file.gDriveId]) {
          mapping[file.gDriveId] = [];
        } 
        mapping[file.gDriveId]?.push({
          color,
          name
        })
      }
    }

    setMediaToFolderTags(mapping);
  }, [folders])

  const onSelect = (id: string, isSelected: boolean ) => {
    setSelectedMedia((prev) => {
      return {
        ...prev,
        [id]: isSelected
      }
    })
  }

  const getSelectedMedia = useCallback(() => {

    const mediaIds: string[] = [];
    for (const [key, value] of Object.entries(selectedMedia)) {
      if (value === true) {
        mediaIds.push(key);
      }
    }

    const populatedMedia = getMediasById(media);

    const selected: Media[] = [];


    for (const id of mediaIds) {
      if (populatedMedia[id]) {
        selected.push(populatedMedia[id]);
      }
    }

    return selected;


  }, [selectedMedia, media])

  const addSelectedMediaToFolder = async (name: string) => {
    const folder = folders.find((folder) => folder.name === name);
    if (folder) {
      const mediaToBeAdded = getSelectedMedia();
      setFolders((prev) => {

        const current = prev.find(folder => folder.name === name);
        const rest = prev.filter(folder => folder.name !== name);

        if (current) {
          current.files = mergeMedia(current.files, mediaToBeAdded);
          return [...rest, current]
        }
        
        return [...prev]
      })
    }
  }

  const addNewFolder =  useCallback(async (props: { name: string, color: string }) => {
    const { name, color } = props;
    setFolders((prev) => {
      return [...prev, { name, color, files: [], userId: clerkUser?.id || '' }]
    })
  }, [clerkUser]);


  return (
    <FileServiceContext.Provider value={{
      selectedMedia,
       onSelect, 
       addNewFolder,
       mediaToFolderTags,
       folders, 
       media,
       addSelectedMediaToFolder
       }}>
      {children}
    </FileServiceContext.Provider>
  );
};

export const useFileService = () => {
  return useContext(FileServiceContext);
};