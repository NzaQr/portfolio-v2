"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Experience() {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-start">
        <div className="relative flex flex-col items-start">
          <div className="relative z-10 flex flex-col items-start mb-10">
            <div className="flex items-center">
              <div className="md:group-hover:scale-150 transition-all duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <h3 className="text-lg font-semibold ml-2 flex items-center">
                React Native Developer <span className="ml-2"></span>
                <p className="text-xs text-muted-foreground">current</p>
              </h3>
            </div>
            <div className="text-muted-foreground ml-5">
              Developed and maintained a delivery app, enhancing user experience
              and order management by leveraging technologies such as Firebase
              for real-time data storage and analytics, Stripe for secure
              payment processing, and authentication with Apple and Google.
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-start mb-10">
            <div className="flex items-center">
              <div className="bg-background w-3 h-3 rounded-full text-white flex items-center justify-center border border-gray-500"></div>
              <h3 className="text-lg font-semibold ml-2 flex items-center">
                React Native Developer{" "}
              </h3>
            </div>
            <div className="text-muted-foreground ml-5">
              Developed and maintained a real-time security camera monitoring
              app, integrating interactive and precise maps with the Google Maps
              API.
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-start mb-10">
            <div className="flex items-center">
              <div className="bg-background w-3 h-3 rounded-full text-white flex items-center justify-center border border-gray-500"></div>
              <h3 className="text-lg font-semibold ml-2 flex items-center">
                React Developer{" "}
              </h3>
            </div>
            <div className="text-muted-foreground ml-5">
              I was part of the redesign and maintenance of the landing page for{" "}
              <Link href="https://bewise.com.es" target="_blank">
                <span className="text-muted-foreground cursor-pointer group hover:text-[#6742F0] transition-colors duration-300 hover:font-bold">
                  Fauna{" "}
                  <ArrowUpRight className="inline-block w-3 h-3 mb-4 -ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
