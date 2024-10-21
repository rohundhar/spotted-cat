import type { Media } from "./Media";

export interface Folder {
  userId: string;
  name: string;
  color: string;
  files: Media[];
}