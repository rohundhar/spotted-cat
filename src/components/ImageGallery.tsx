import { useMemo, useState, memo } from "react";
import { FixedSizeList } from 'react-window';
import type { Media } from "@/models/Media"
import { useFileService } from "@/providers/FileServiceProvider";
import Lightbox, { useLightboxState } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";
import { 
  Pagination,
  PaginationContent, 
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "./ui/pagination";
import { Checkbox } from "./ui/checkbox";
import { getContentUrl } from "@/providers/helper";
import { ImageTypes, VideoTypes } from "@/models/MimeType";


const NO_ACTION = false;

const ImageItem = memo((props: Media & { 
  handleSelect: (id: string, selected:boolean) => void, 
  handleClickImage: () => void,
  style?: any, 
  selected: boolean 
}) => {



  const { _id , webContentLink, gDriveId, thumbnailLink, handleSelect, handleClickImage, style, selected, mimeType } = props;


  const [testSelected, onTestSelected] = useState(false);

  const { mediaToFolderTags } = useFileService();

  const folderTags = useMemo(() => mediaToFolderTags[_id], [mediaToFolderTags, _id]);

  const handleSelectionClick = () => {
    if (NO_ACTION) {
      console.log('handle selection')
    } else {
        handleSelect(_id, !selected);
        onTestSelected(!testSelected);
    }
  };

  return <>
        <div 
        className={`bg-white rounded-lg h-[160px] shadow-md w-full border-[1px] ${ImageTypes.includes(mimeType) ? 'border-green-300' : 'border-red-300'} ${testSelected ? '' : 'border-black'}`} // Visual feedback for selection
        style={style}
        >
          <Image 
            width={300}
            height={300}
            className='w-full h-[85%] object-cover cursor-pointer thumbnail rounded-t-lg'
            src={thumbnailLink}
            onClick={handleClickImage}
            alt={`test-${gDriveId}`}
          />
          <div onClick={handleSelectionClick} className={`flex-row flex`}>
            <Checkbox className={`m-1`} checked={testSelected} />
            <div className={`color-dots items-center`}>
              {folderTags && folderTags.length > 0 ? <>
                {folderTags.map((tag) => {
                  return <div key={`color-tag-${gDriveId}-${tag.name}`} style={{
                    backgroundColor: tag.color
                  }} className="color-dot" />
                })}
              </> : <></>}
            </div>
          </div>
          
      </div>
  </>

});


const PaginationBar = (props: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void
}): JSX.Element => {

  const { currentPage, totalPages, onPageChange} = props;
  return <>
    <Pagination>
      <PaginationContent>
        {
          currentPage > 1 ? <>
        <PaginationItem>
            <PaginationPrevious onClick={() => onPageChange(currentPage - 1)}/>
        </PaginationItem>
          </> : <></>
        }
        <PaginationItem >
          <PaginationLink isActive>
            {currentPage}
          </PaginationLink>

        </PaginationItem>

        {
          currentPage < totalPages ? <>
        <PaginationItem>
            <PaginationNext onClick={() => onPageChange(currentPage + 1)}/>
        </PaginationItem>
          </> : <></>
        }
        
        </PaginationContent>

    </Pagination>
  </>
}


const FullImageGallery = () => {

  const { media, selectedMedia, onSelect } = useFileService();;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);


  const itemsPerPage = 300; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerRow = 4; // Number of items per row
  const itemWidth = 250; // Adjust as needed


  const startPageIndex = (currentPage - 1)* itemsPerPage;
  const endPageIndex = Math.min(startPageIndex + itemsPerPage, media.length);
  const currentMedia = media.slice(startPageIndex, endPageIndex);

  const totalPages = Math.ceil(media.length / itemsPerPage);

  const slides = useMemo(() => {
    return currentMedia.map((image) => ({
      src: getContentUrl(image),  // Use the contentLink for the lightbox
      width: 1200,
      height: 800,
    }));
  }, [currentMedia]);

  const handleImageClick = (index: number) => {
    if (NO_ACTION) {
      console.log('open lightbox');
    } else {
      setLightboxOpen(true);
      setLightboxIndex(index);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const allCacheURLS = currentMedia.map((media) => getContentUrl(media));
  // console.log(JSON.stringify(allCacheURLS));


  const handleSelect = (id: string, isSelected: boolean) => {
    onSelect(id, isSelected);
  };

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const startIndex = index * itemsPerRow;
    const endIndex = Math.min(startIndex + itemsPerRow, media.length); // Handle last row

    return (
      <div 
       style={style}
       className={`flex mb-4`} 
       key={`image-gallery-row-${index}`}
       > 
        {currentMedia.slice(startIndex, endIndex).map((image, i) => (
          <ImageItem
            {...image}
            key={image.gDriveId} 
            selected={selectedMedia.has(image._id)} 
            handleSelect={handleSelect}
            handleClickImage={() => handleImageClick(index * itemsPerRow + i)}
            style={{ width: itemWidth, marginRight: '10px' }} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-4">
      <div 
       className={`grid grid-cols-4 gap-4`} 
       > 
        {currentMedia.map((image, i) => (
          <ImageItem
            {...image}
            key={image.gDriveId} 
            selected={selectedMedia.has(image._id)} 
            handleSelect={handleSelect}
            handleClickImage={() => handleImageClick(i)}
          />
        ))}
      </div>
{/* 
      <FixedSizeList
        height={1000}
        width="100%"
        itemSize={140} // Height of each row
        itemCount={Math.ceil(currentMedia.length / itemsPerRow)} // Calculate number of rows
      >
        {Row}
      </FixedSizeList> */}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        carousel={{ finite: false }}
        render={{
          slide: ({ slide, offset, rect} ) => {
            const { currentIndex } = useLightboxState();
            // console.log('Render Slide', currentIndex, currentMedia[currentIndex], slide);
            const current = currentMedia[currentIndex];
            if (current && ImageTypes.includes(current.mimeType)) {
              return <img src={slide.src} alt={slide.src} style={{ width: '80%', height: 'auto' }} />;
            } else if (current && VideoTypes.includes(current.mimeType)) {
              return <video src={slide.src} controls style={{ width: '100%', height: 'auto' }} />;
            } else {
              return <></>;
            }
          }
        }}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]} // Add any desired plugins
      />
      <PaginationBar 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export const LazyImageGallery = FullImageGallery;