import type { Folder } from "@/models/Folder";
import { useFileService } from "@/providers/FileServiceProvider";

interface FolderItemProps {
  folder: Folder;
  onSelect?: (folder: Folder) => void
}


export const FolderGallery = (): JSX.Element => {

  const { folders } = useFileService();

  return <div className="gap-2">
   {folders.map( folder => <FolderItem key={folder.name} folder={folder}/>)}
  </div>
}


export const FolderItem = (props: FolderItemProps): JSX.Element => {

  const { folder: { name, files, color }, onSelect } = props;
  const { selectedMedia, addSelectedMediaToFolder } = useFileService();

  const noMediaSelected =  selectedMedia.size === 0;

  const handleClickFolder = () => {
    if (onSelect) {
      onSelect(props.folder)
    }
  }

  return <>
     <div
        onClick={handleClickFolder} 
        style={{
        backgroundColor: color
      }} className={`p-2 rounded-md flex justify-between items-center `}>
        <span>{name} ({files.length})</span>
        {noMediaSelected ?
          <></> :  
          <button onClick={() => addSelectedMediaToFolder(name)} className="bg-purple-400 text-white px-2 py-1 rounded-md text-sm">Add</button>}
         
      </div>
  </>

}