"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Calendar, Mail, SquareArrowOutUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EmailDrawer() {
  const [copied, setCopied] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("naz.quiroga@gmail.com");
    setCopied(true);
  };

  if (isMobile) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="transition-transform hover:scale-110"
            aria-label="Open Contact Options"
          >
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mx-auto w-full max-w-sm">
            <DialogHeader className="mb-5">
              <DialogTitle className="text-2xl font-bold">
                Contact Me
              </DialogTitle>
              <DialogDescription>
                Choose your preferred way to connect.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 p-4">
              <Button
                variant="default"
                className="w-full transition-all hover:translate-y-[-2px]"
                onClick={() => {
                  handleCopyEmail();
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                {copied ? "Copied to clipboard!" : "Click to copy my email"}
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full transition-all hover:translate-y-[-2px]"
              >
                <a
                  href="https://calendly.com/naz-quiroga/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Set up a 30min meeting
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full transition-all hover:translate-y-[-2px]"
              >
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                  Check out my resume
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          className="transition-transform hover:scale-110"
          aria-label="Open Contact Options"
        >
          <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">Contact Me</DrawerTitle>
            <DrawerDescription>
              Choose your preferred way to connect.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-3 p-4">
            <Button
              variant="default"
              className="w-full transition-all hover:translate-y-[-2px]"
              onClick={() => {
                handleCopyEmail();
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              {copied ? "Copied to clipboard!" : "Click to copy my email"}
            </Button>
            <Button
              asChild
              variant="default"
              className="w-full transition-all hover:translate-y-[-2px]"
            >
              <a
                href="https://calendly.com/naz-quiroga/30min"
                target="_blank"
                rel="noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Set up a 30min meeting
              </a>
            </Button>
            <Button
              asChild
              variant="default"
              className="w-full transition-all hover:translate-y-[-2px]"
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                Check out my resume
              </a>
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full transition-all hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
