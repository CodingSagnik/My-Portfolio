/**
 * Class Name Utility Function
 * 
 * A utility function that combines and optimizes CSS class names using clsx and tailwind-merge.
 * This is essential for Tailwind CSS projects where class conflicts need to be resolved
 * and conditional classes need to be handled elegantly.
 * 
 * Key Benefits:
 * - Resolves Tailwind CSS class conflicts (e.g., 'p-4 p-2' becomes 'p-2')
 * - Handles conditional class application with clsx
 * - Removes duplicate classes automatically
 * - Optimizes the final className string
 * 
 * Usage Examples:
 * cn('text-white', 'bg-black') // 'text-white bg-black'
 * cn('p-4', 'p-2') // 'p-2' (tailwind-merge resolves conflict)
 * cn('text-white', condition && 'bg-black') // conditional classes
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and optimizes CSS class names
 * 
 * Uses clsx for conditional class handling and tailwind-merge for
 * resolving Tailwind CSS class conflicts and duplicates.
 * 
 * @param {...ClassValue[]} inputs - Variable number of class values
 * @returns {string} Optimized and merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
