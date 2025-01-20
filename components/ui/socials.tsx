"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import EmailDrawer from "./email-drawer";

export default function Socials() {
  return (
    <>
      <Link
        href="https://github.com/NzaQr"
        target="_blank"
        className="transition-transform hover:scale-110"
        aria-label="GitHub Profile"
      >
        <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
      </Link>
      <Link
        href="https://linkedin.com/in/nazarenoquiroga"
        target="_blank"
        className="transition-transform hover:scale-110"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
      </Link>
      <EmailDrawer />
    </>
  );
}
