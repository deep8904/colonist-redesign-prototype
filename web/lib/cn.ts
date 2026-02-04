import { clsx, type ClassValue } from "clsx";

// Simple classNames utility
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
