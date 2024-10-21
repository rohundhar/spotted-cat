"use client"; // This is crucial for using client-side React features

import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { TestMedia } from "@/libs/TestData";
import type { Media } from "@/models/Media";

// Folder Component
const FolderItem = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]) as any[]; // Store dropped items

  const handleDragEnd = (event: any) => {
    console.log('Handle drag end');
    const { active, over } = event;

    if (over && over.id === name) { // Check if dropped over this folder
      setItems((items: any[]) => {
        if (!items.includes(active.id)) { // Prevent duplicates
          setCount(count + 1);
          return [...items, active.id];
        }
        return items;
      });
    }
  };

  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    modifiers={[restrictToVerticalAxis]} // Optional: restrict to vertical axis
  >
    <li className="bg-gray-200 p-2 rounded-md flex justify-between items-center">
      <span>{name} ({count})</span>
      <button className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">Delete</button>

        <div data-testid="droppable-area" >
        </div>
    </li>
    </DndContext>

  );
};

export const FolderGallery = () => {
  const folderItems = [
    { name: 'Big Cats' },
    { name: 'Room Posters' },
    { name: 'Share With Friends' },
  ];

  return (
    <ul>
      {folderItems.map((folder) => (
        <FolderItem key={folder.name} name={folder.name} />
      ))}
    </ul>
  );
};


// Image Component
const ImageItem = ({ thumbnailLink, gDriveId }: Media) => {
  return (
    <SortableContext items={[gDriveId]} strategy={rectSortingStrategy}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={thumbnailLink}
          alt="Media Item"
          className="w-full h-32 object-cover cursor-grab thumbnail" // Added cursor for better UX
          data-testid="draggable-image"
        />
      </div>
    </SortableContext>
  );
};

export const ImageGallery = (): JSX.Element => {
  const medias = TestMedia;

  return (
    <DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]}>
      <div id="results" className="grid-container">
        {medias.map((media) => (
          <ImageItem key={media.gDriveId} {...media} />
        ))}
      </div>
    </DndContext>
  );
};
