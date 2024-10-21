import type { Folder } from "@/models/Folder";
import type { Media } from "@/models/Media";
import { MimeType } from "@/models/MimeType";


const ElephantPhoto: Media = {
  gDriveFilename: 'filename.jpg',
  gDriveId: '123',
  tags: [],
  mimeType: MimeType.JPG,
  thumbnailLink: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=170&h=128&q=60",
  webContentLink: undefined,
  fileMetadata: {}
};

const GiraffePhoto: Media = {
  gDriveFilename: 'filename2.jpg',
  gDriveId: '234',
  tags: [],
  mimeType: MimeType.JPG,
  thumbnailLink: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=170&h=128&q=60",
  webContentLink: undefined,
  fileMetadata: {},
  
}
export const TestMedia: Media[] = [
  ElephantPhoto,
  GiraffePhoto
];

export const TestFolders: Folder[] = [
  {
    name: 'Big Cats',
    color: '#FF3636',
    userId: '123',
    files: [ElephantPhoto]
  },
  {
    name: 'Friends Powerpoint',
    color: '#36FFD4',
    userId: '345',
    files: [GiraffePhoto]
  }
]