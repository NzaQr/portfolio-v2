import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ExperimentalBadgeColors = [
  "rgba(239, 68, 68, 1)",
  "rgba(249, 115, 22, 1)",
  "rgba(234, 179, 8, 1)",
  "rgba(34, 197, 94, 1)",
  "rgba(59, 130, 246, 1)",
  "rgba(168, 85, 247, 1)",
];
