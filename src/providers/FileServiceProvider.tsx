"use client";
import { TestFolders, TestMedia } from '@/libs/TestData';
import type { Folder } from '@/models/Folder';
import type { Media } from '@/models/Media';
import { useAuth, useClerk } from '@clerk/nextjs';
import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import { fetchAllMedia, fetchQueryResults, getMediasById, mergeMedia } from './helper';
import { addMediaToFolder, addNewUserFolder, fetchAllUserFolders } from './folderHelper';


export type FolderTag = Pick<Folder, "name" | "color">;


interface FileServiceProviderProps {
  children: ReactNode;
}

interface FileServiceContext {
 selectedMedia: Set<string>;
 folders: Folder[];
 media: Media[];

 mediaToFolderTags: Record<string, FolderTag[]>;

 setQuery: (query: string) => void;
 addNewFolder: (props: { name: string, color: string }) => Promise<void>;
 addSelectedMediaToFolder: (name: string) => Promise<void>;
 onSelect: (id: string, isSelected: boolean) => void;
}

const InitialContext: FileServiceContext = {
  selectedMedia: new Set(),
  mediaToFolderTags: {},
  onSelect: () => {},
  setQuery: () => {},
  addNewFolder: async() => {},
  addSelectedMediaToFolder: async () => {},
  folders: [],
  media: []
};

const FileServiceContext = createContext<FileServiceContext>(InitialContext);
 
export const FileServiceProvider: React.FC<FileServiceProviderProps> = ({  children }) => {

  const [selectedMedia, setSelectedMedia] = useState<Set<string>>(new Set());
  const [folders, setFolders] = useState<Folder[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [sortedMedia, setSortedMedia] = useState<Media[]>([]);
  const [query, setQuery] = useState('');
  const [mediaMap, setMediaMap] = useState<Map<string, Media>>(new Map());
  const [mediaToFolderTags, setMediaToFolderTags] = useState({} as Record<string, FolderTag[]>);
  const [queryResults, setQueryResults] = useState<string[]>([])

  const { user: clerkUser } = useClerk();
  const { getToken } = useAuth();

  useEffect(() => {
    if (queryResults.length === 0) {
      setSortedMedia(media);
    } else {
      const prioritizedMedia = queryResults.map(id => mediaMap.get(id)) as Media[];
      const remainingMedia = media.filter(media => !queryResults.includes(media._id));
  
      const combinedList = [...prioritizedMedia, ...remainingMedia];

      setSortedMedia(combinedList);
    }
  }, [queryResults]);


  const fetchQueryResult = useCallback(async () => {
    if (query !== '') {
      console.log('Fetching the query results for ', query);
      const response = await fetchQueryResults(query);
      if (response.success) {
        console.log(response.data.results);
        setQueryResults(response.data.results);
      }
    } else {
      setSortedMedia(media);
    }
  }, [query]);

  useEffect(() => {
    fetchQueryResult();
  }, [query])

  const fetchFolders = useCallback(async () => {
    const token = await getToken();
    const response = await fetchAllUserFolders(token);
    if (response.success) {
      setFolders(response.data.results)
      console.log('Folders', response.data.results);
    }
  }, [clerkUser]);

  useEffect(() => {
    const updateMediaMap = async () => {
      const map = new Map();
      for (const file of media) {
        if (!map.has(file._id)) {
          map.set(file._id, file);
        }
      }
      setMediaMap(map);
    }

    updateMediaMap();
  }, [media]);
  
  useEffect(() => {
    
    const fetchMedia = async () => {
      const token = await getToken();
      const response = await fetchAllMedia(token);
      if (response.success) {
        setMedia(response.data.results);
        setSortedMedia(response.data.results);
      }
    }

    if (media.length === 0) {
      fetchMedia();

    }
  }, [clerkUser]);

  useEffect(() => {
    fetchFolders();
  }, [clerkUser])

  useEffect(() => {

    const updateMediaFolderTags = () => {
      const mapping: Record<string, FolderTag[]> = {};

      for (const folder of folders) {
        const { color, name, files } = folder;
        for (const fileId of files) {
          if (!mapping[fileId]) {
            mapping[fileId] = [];
          } 
          mapping[fileId]?.push({
            color,
            name
          })
        }
      }
      setMediaToFolderTags(mapping);
    }

    updateMediaFolderTags();
  }, [folders, mediaMap])

  const onSelect = (id: string, isSelected: boolean) => {
    setSelectedMedia((prevSelected) => {
      const newSelected = new Set(prevSelected); 
      if (isSelected) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      return newSelected;
    });
  };

  const addSelectedMediaToFolder = useCallback(async (name: string) => {
    const folder = folders.find((folder) => folder.name === name);
    if (folder) {
      const token = await getToken();

      const mediaIds = [...selectedMedia];

      const response = await addMediaToFolder({ folderId: folder._id, mediaIds, token });
      if (response.success) {
        fetchFolders();
      }
    }
  }, [clerkUser, selectedMedia]);

  const addNewFolder =  useCallback(async (props: { name: string, color: string }) => {
    const { name, color } = props;

    const token = await getToken();
  

    const response = await addNewUserFolder({token, name, color});
    if (response.success) {
      fetchFolders();
    }
  }, [clerkUser]);



  return (
    <FileServiceContext.Provider value={{
      selectedMedia,
       onSelect, 
       addNewFolder,
       mediaToFolderTags,
       folders, 
       setQuery,
       media: sortedMedia,
       addSelectedMediaToFolder
       }}>
      {children}
    </FileServiceContext.Provider>
  );
};

export const useFileService = () => {
  return useContext(FileServiceContext);
};