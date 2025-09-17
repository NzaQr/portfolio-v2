"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <p className="text-muted-foreground mt-4">
        Hi! I&apos;m <span className="font-bold">Nazareno</span>. A software
        developer from Argentina.
      </p>
      <p className="text-muted-foreground ">
        Currently building apps and websites with passion at{" "}
        <Link href="https://bewise.com.es" target="_blank">
          <span className="text-muted-foreground cursor-pointer group hover:text-[#FF81A3] transition-colors duration-300 hover:font-bold">
            Bewise{" "}
            <ArrowUpRight className="inline-block w-3 h-3 mb-4 -ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </p>
    </>
  );
}
