'use client';
import { FolderActions } from '@/components/FolderActions';
import { FolderGallery } from '@/components/FolderGallery';
import { ImageGallery } from '@/components/ImageGallery';
// import { ImageGallery, FolderGallery } from '@/components/TestDrag';
import {  useClerk } from '@clerk/nextjs';


const Home = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' }); // Redirect to /sign-in after logout
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex mb-8">
            <div className="w-3/4 pr-4">
                <input type="text" id="search" placeholder="Search for photos and videos" className="w-full p-4 rounded-lg shadow-md text-lg mb-4"/>
                <ImageGallery/>
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
