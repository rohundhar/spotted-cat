import type { Media } from "@/models/Media"
import { useFileService } from "@/providers/FileServiceProvider";
import Image from "next/image";



export const ImageGallery = (): JSX.Element => {
  const { media } = useFileService();;

  return (
      <div id="results" className="grid-container">
        {media.map((media) => (
          <ImageItem
            key={media.gDriveId}
            {...media}
          />
        ))}
      </div>
  );
};


const ImageItem = (props: Media) => {

  const { gDriveId,thumbnailLink } = props;

  const { selectedMedia, onSelect, mediaToFolderTags } = useFileService();


  const selected = selectedMedia[gDriveId];

  const folderTags = mediaToFolderTags[gDriveId];


  const handleImageClick = () => {
    console.log('CLICK IMAGE');
    onSelect(gDriveId, !selected);
  };

  return <>
        <div 
        className={`bg-white rounded-lg shadow-md overflow-hidden ${selected ? 'border-2 border-blue-500' : ''}`} // Visual feedback for selection
        onClick={handleImageClick}
        >

          <Image 
      
          width={300}
          height={300}
          style={{ pointerEvents: 'none' }} // Prevent image from interfering with clicks

          src={thumbnailLink} 
          alt="Lion" 
          className="w-full h-32 object-cover cursor-pointer thumbnail"/>  
          <div className="color-dots">
            {folderTags && folderTags.length > 0 ? <>
              {folderTags.map((tag) => {
                return <div key={`color-tag-${gDriveId}-${tag.name}`} style={{
                  backgroundColor: tag.color
                }} className="color-dot" />
              })}
            </> : <></>}
          </div>
      </div>
  </>

}