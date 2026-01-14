"use client";

import { useState, useEffect, useRef } from "react";
import About from "@/components/About";
import { ThemeToggle } from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Socials from "@/components/ui/socials";

export default function HomeContent() {
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;

      const projectsRect = projectsRef.current.getBoundingClientRect();
      const shouldShowButton = projectsRect.top <= window.innerHeight - 1000;

      setShowResumeButton(shouldShowButton);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-screen-lg">
      <header className="text-center mb-12">
        <div className="flex justify-between items-center">
          <div className="top-4 left-4">
            <h1 className="text font-bold">Nazareno Quiroga</h1>
          </div>
          <div className="top-4 right-4 flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Socials />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <footer className="text-center mt-12 text-sm text-gray-500">
        Nazareno Quiroga - 2025
      </footer>

      {!isMobile && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
            showResumeButton
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <Button
            variant="outline"
            onClick={handleResumeClick}
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <FileText className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Check out my resume</span>
          </Button>
        </div>
      )}
    </div>
  );
}
