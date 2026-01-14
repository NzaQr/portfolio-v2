"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Smartphone } from "lucide-react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    const handleScroll = () => {
      if (!cardRef.current || !contentRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const isAtBottom = contentRect.bottom <= window.innerHeight - 200;

      if (isMobile) {
        if (isAtBottom && !isExpanded) {
          setIsExpanded(true);
        }
      } else {
        if (!showResumeButton) {
          const shouldShowButton =
            contentRect.bottom <= window.innerHeight - 450;
          setShowResumeButton(shouldShowButton);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isExpanded, showResumeButton]);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <Card
      ref={cardRef}
      className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5"
    >
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div ref={contentRef} className="space-y-8">
          <p className="text-sm text-muted-foreground mb-6">
            Development of web and mobile applications, with focus on
            performance, scalability, and user experience.
          </p>

          <div className="group relative">
            <div className="flex gap-4">
              <div className="flex items-center justify-center p-2 relative shrink-0 self-start">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-gray-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </div>
              <div className="flex-1">
                <div className="flex items-center h-9">
                  <h3 className="text-lg font-semibold">Web / Frontend</h3>
                </div>
                <div className="mb-2"></div>
                <ul className="text-sm text-muted-foreground mb-4 space-y-2 list-disc list-inside">
                  <li>
                    Development of web apps with React and Next.js for business
                    platforms and landing pages.
                  </li>
                  <li>
                    Focus on structure, state management, and data fetching
                    using TypeScript, TanStack Query, and Zustand.
                  </li>
                  <li>Optimization of performance, UX, and accessibility.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">TanStack Query</Badge>
                  <Badge variant="outline">Zustand</Badge>
                </div>
              </div>
            </div>
            <div className="mt-6 border-b border-dashed border-gray-300 dark:border-gray-600"></div>
          </div>

          <div className="group relative">
            <div className="flex gap-4">
              <div className="flex items-center justify-center p-2 shrink-0 self-start">
                <Smartphone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center h-9">
                  <h3 className="text-lg font-semibold">Mobile</h3>
                </div>
                <div className="mb-2"></div>
                <ul className="text-sm text-muted-foreground mb-4 space-y-2 list-disc list-inside">
                  <li>
                    Development and maintenance of mobile applications with
                    React Native.
                  </li>
                  <li>
                    Integration of payments (Stripe), authentication (Apple /
                    Google), and map services (Google Maps).
                  </li>
                  <li>
                    Publication and maintenance on App Store and Play Store.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">Apple/Google Auth</Badge>
                  <Badge variant="outline">Google Maps</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobile && (
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-32 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex justify-center">
              <Button variant="outline" onClick={handleResumeClick} size="lg">
                <FileText className="h-5 w-5" />
                Check out my resume
              </Button>
            </div>
          </div>
        )}
      </CardContent>

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
    </Card>
  );
}
