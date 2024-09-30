"use client";

import { useMedia } from "react-use";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebarStore } from "@/hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const [isMouting, setIsMounting] = useState(false);
  const isOpen = useMobileSidebarStore((state) => state.isOpen);
  const onClose = useMobileSidebarStore((state) => state.onClose);
  const onOpen = useMobileSidebarStore((state) => state.onOpen);

  const isSmallScreen = useMedia("(max-width: 768px)", false);

  useEffect(() => {
    if (!isSmallScreen && isOpen) {
      onClose();
    }
  }, [isSmallScreen, isOpen, onClose]);

  useEffect(() => {
    setIsMounting(true);
  }, []);

  if (!isMouting) {
    return null;
  }

  return (
    <>
      <Button onClick={onOpen} variant="ghost" className="md:hidden pr-4">
        <Menu />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 bg-white">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};
