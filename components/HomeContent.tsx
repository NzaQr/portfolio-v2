"use client";

import { useEffect, useState } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import { ThemeToggle } from "@/components/ThemeToggle";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function HomeContent() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 max-w-screen-lg">
      <header className="text-center mb-12">
        <div className="flex justify-between items-center">
          <div className="top-4 left-4">
            <h1 className="text font-bold">nzqr.dev</h1>
          </div>
          <div className="top-4 right-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <About />
      <div className="flex mt-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 flex mr-0 md:mr-5 mb-5 md:mb-0">
            <Experience />
          </div>

          <div className="w-full md:w-1/4 flex flex-col">
            {isMobile ? (
              <>
                <TechStack />
                <Contact />
              </>
            ) : (
              <>
                <Contact />
                <TechStack />
              </>
            )}
          </div>
        </div>
      </div>
      <Projects />
      <footer className="text-center mt-12 text-sm text-gray-500">
        Nazareno Quiroga - 2025
      </footer>
    </div>
  );
}
