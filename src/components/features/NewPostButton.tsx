import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import PostForm from "./PostForm";
import { X } from "lucide-react";

type NewPostButtonProps = {
  submitCallback: () => void;
  dialogOpen: boolean;
  closeDialog: () => void;
  openDialog: () => void;
};

export default function NewPostButton({
  dialogOpen,
  closeDialog,
  openDialog,
  submitCallback,
}: NewPostButtonProps) {
  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={openDialog}>
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={closeDialog}
        onEscapeKeyDown={closeDialog}
      >
        <DialogClose
          onClick={closeDialog}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <PostForm submitCallback={submitCallback} />
      </DialogContent>
    </Dialog>
  );
}
