"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function UploadButton() {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
