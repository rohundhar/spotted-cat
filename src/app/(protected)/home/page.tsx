'use client';
import { useCallback, useState, type SyntheticEvent } from 'react';

import { FolderActions } from '@/components/FolderActions';
import { FolderGallery } from '@/components/FolderGallery';
import { LazyImageGallery } from '@/components/ImageGallery';
import { Input } from '@/components/ui/input';
import { useFileService } from '@/providers/FileServiceProvider';
// import { ImageGallery, FolderGallery } from '@/components/TestDrag';
import {  useClerk } from '@clerk/nextjs';
import { debounce } from 'lodash';


const Home = () => {
  const { signOut } = useClerk();

  const { setQuery } = useFileService();

  const [input, setInput] = useState('');

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' }); // Redirect to /sign-in after logout
  };


  const debouncedSearch = useCallback(debounce((value) => {
    console.log('Debounced');
    setQuery(value);
  }, 1000),[])

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInput(value);
    debouncedSearch(value);
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex mb-8">
            <div className="w-3/4 pr-4">
                <Input 
                  type="text" 
                  id="search" 
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Search for photos and videos" 
                  className="w-full p-4 rounded-lg shadow-md text-lg mb-4"
                />
                <LazyImageGallery/>
            </div>
            <div className="w-1/4 rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold mb-4">My Folders</h2>
                <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign Out
                </button>
                <FolderActions/>
                <FolderGallery/>
            </div>
        </div>
    </div>

    </>
  );
};

export default Home;
