import { useFileService } from "@/providers/FileServiceProvider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "./ui/button";


export const FolderActions = (): JSX.Element => {

  const { addNewFolder } = useFileService();
  const [folderName, setFolderName] = useState('');
  const [open, setOpen] = useState(false);

  const [color, setColor] = useState("#FFFFFF");

  return <>
	<Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger>
      {/* <Button> */}
        Add New Folder
      {/* </Button> */}
      </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogDescription>
     
        </DialogDescription>
        
        <Input onChange={(event) => setFolderName(event.target.value)} value={folderName} type="text" placeholder="folder name"/>
        <HexColorPicker color={color} onChange={setColor} />
      </DialogHeader>
      <DialogFooter>
      <Button onClick={() =>  {
        addNewFolder({ name: folderName, color })
        setOpen(false);
      }
      }> Create Folder </Button>
    </DialogFooter>
    </DialogContent>
  </Dialog>
  </>
}

