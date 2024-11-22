'use client';
import { FolderActions } from '@/components/FolderActions';
import { FolderGallery, FolderItem } from '@/components/FolderGallery';
// import { ImageGallery, QueryImageGallery } from '@/components/ImageGallery';
import { Folder } from '@/models/Folder';
import { useFileService } from '@/providers/FileServiceProvider';
import { useState } from 'react';


const ManageFolders = () => {

  const { folders } = useFileService();
  const [folder, setFolder] = useState(undefined as Optional<Folder>)

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex mb-8">
            <div className='w-full'>
                {folders.map((folder) => {
                  return <>
                    <FolderItem folder={folder} onSelect={setFolder}/>
                  </>
                })}           
            </div>
        </div>
    </div>
    <div className="container mx-auto px-4 py-8">
        <div className="flex mb-8">
        <div className='w-full'>
              {folder ? <>
                {/* <ImageGallery media={folder.files} /> */}
              </> : <>
              <div>Click a folder to see its contents</div>
              </>}
            </div>
        </div>
    </div>
    </>
  );
};

export default ManageFolders;
