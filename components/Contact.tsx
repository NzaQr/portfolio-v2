"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Socials from "./ui/socials";

export default function Contact() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <div className="flex flex-col items-center text-center mt-5">
        <h2 className="text-xl font-bold">Reach out</h2>
        <p className="text-muted-foreground mb-4">Connect with me!</p>
        <div className="flex gap-6">
          <Socials />
        </div>
      </div>
    );
  }

  return (
    <Card className="mb-5 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader>
        <CardTitle>Reach out</CardTitle>
        <CardDescription className="text-muted-foreground">
          Connect with me!
        </CardDescription>
        <div className="flex gap-6 pt-2">
          <Socials />
        </div>
      </CardHeader>
    </Card>
  );
}
