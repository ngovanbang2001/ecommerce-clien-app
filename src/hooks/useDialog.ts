import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
  }

  return {
    isOpen,
    handleOpenDialog,
    handleCloseDialog
  }
}

export default useDialog;