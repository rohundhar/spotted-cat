import type { ImageMetadata } from "./ImageMetadata";
import type { MimeType } from "./MimeType";

export interface Media { 

  // Extract from drive file
  _id: string;
  gDriveId: string;
  gDriveFilename: string;
  mimeType: MimeType;
  thumbnailLink: string;
  webContentLink: string;

  // Extract custom from various functions
  fileMetadata?: ImageMetadata;
  tags: string[];
  
}
