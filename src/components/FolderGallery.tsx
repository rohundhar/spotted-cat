import type { Folder } from "@/models/Folder";
import { useFileService } from "@/providers/FileServiceProvider";

interface FolderItemProps {
  folder: Folder;
}


export const FolderGallery = (): JSX.Element => {

  const { folders } = useFileService();

  return <div className="gap-2">
   {folders.map( folder => <FolderItem key={folder.name} folder={folder}/>)}
  </div>
}


const FolderItem = (props: FolderItemProps): JSX.Element => {

  const { folder: { name, files, color } } = props;
  const { selectedMedia, addSelectedMediaToFolder } = useFileService();

  const noMediaSelected =  Object.values(selectedMedia).filter(val => val === true).length === 0;


  return <>
      <div style={{
        backgroundColor: color
      }} className={`p-2 rounded-md flex justify-between items-center `}>
        <span>{name} ({files.length})</span>
        {noMediaSelected ?
          <></> :  
          <button onClick={() => addSelectedMediaToFolder(name)} className="bg-purple-400 text-white px-2 py-1 rounded-md text-sm">Add</button>}
         
      </div>
  </>

}