export enum MimeType {
  JPG = 'image/jpeg',
  MP4 = 'video/mp4',
  QUICKTIME = 'video/quicktime',
  HEIC = 'image/heif',
  PNG = 'image/png'
}

export const VideoTypes = [MimeType.QUICKTIME, MimeType.MP4];

export const ImageTypes = [MimeType.HEIC, MimeType.JPG, MimeType.PNG];