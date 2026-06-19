import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// This function is used to combine class names in a way that handles conditional classes and merges Tailwind CSS classes correctly. It takes any number of arguments, which can be strings, objects, or arrays, and returns a single string of class names. The `clsx` function is used to handle conditional classes, while `twMerge` ensures that Tailwind CSS classes are merged properly without duplicates.