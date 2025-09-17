"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, ShoppingCart, FileText } from "lucide-react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
    if (!isMobile || !cardRef.current) return;

    const handleScroll = () => {
      if (!cardRef.current || !contentRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();

      const isAtBottom = contentRect.bottom <= window.innerHeight - 200;

      if (isAtBottom && !isExpanded) {
        setIsExpanded(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, isExpanded]);

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
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="group relative overflow-hidden border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="absolute top-4 right-4 flex items-center justify-center"></div>
            <CardHeader className="pb-3">
              <div className="flex gap-1 items-center">
                <div className="flex justify-center p-2">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">
                    Financial Management Tool{"  "}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Working on a real-time financial tool with automated workflows
                and scalable architecture
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">TanStack/Query</Badge>
                <Badge variant="outline">Zustand</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex gap-1 items-center">
                <div className="flex justify-center p-2">
                  <ShoppingCart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">Delivery Apps</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Multi-platform delivery applications with real-time tracking and
                payments
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Apollo Client</Badge>
                <Badge variant="outline">Apple/Google Auth and Payments</Badge>
                <Badge variant="outline">Firebase</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex gap-1 items-center">
                <div className="flex justify-center p-2">
                  <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">
                    Security Camera Monitoring
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Highway security monitoring app with interactive maps and
                geolocation
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Google Maps API</Badge>
                <Badge variant="outline">Geolocation</Badge>
                <Badge variant="outline">Performance</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardHeader className="pb-3">
              <div className="flex gap-1 items-center">
                <div className="flex justify-center p-2">
                  <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">Landing Pages</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of landing pages with focus on accessibility and UX
                improvements
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Accessibility</Badge>
                <Badge variant="outline">UI/UX</Badge>
                <Badge variant="outline">Performance</Badge>
              </div>
            </CardContent>
          </Card>
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
                Check my resume
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
