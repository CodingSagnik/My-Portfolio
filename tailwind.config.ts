/**
 * Tailwind CSS Configuration for Portfolio Website
 * 
 * This configuration extends Tailwind CSS with custom design tokens, animations,
 * and utility classes specifically tailored for the portfolio's visual design.
 * 
 * Key Features:
 * - Custom color palette for dark theme aesthetic
 * - Complex animations for interactive elements
 * - Custom background utilities for grid and dot patterns
 * - CSS variables integration for dynamic theming
 * - Responsive container configuration
 */

import type { Config } from "tailwindcss";

// External utilities for generating SVG data URIs and color manipulation
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  // Dark mode configuration using class-based strategy
  darkMode: ["class"],
  
  // Content paths for Tailwind to scan for class usage
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  
  prefix: "", // No prefix for utility classes
  
  theme: {
    // Container configuration for responsive layouts
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px", // Max width for very large screens
      },
    },
    
    extend: {
      // Custom color palette designed for dark theme portfolio
      colors: {
        // Black variations for backgrounds and surfaces
        black: {
          DEFAULT: "#000",
          100: "#000319",      // Deep dark blue-black for main backgrounds
          200: "rgba(17, 25, 40, 0.75)", // Semi-transparent dark for overlays
          300: "rgba(255, 255, 255, 0.125)", // Very subtle white overlay
        },
        
        // White variations for text and highlights
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",     // Muted white with slight blue tint
          200: "#C1C2D3",     // Secondary muted white
        },
        
        // Accent colors for the portfolio theme
        blue: {
          "100": "#E4ECFF",   // Light blue for subtle accents
        },
        purple: "#CBACF9",    // Primary purple accent color
        
        // Standard design system colors (for potential light mode)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Custom border radius values using CSS variables
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      // Custom keyframe animations for interactive effects
      keyframes: {
        // Accordion animations for expandable content
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        // Spotlight effect for hero section lighting
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        
        // Shimmer effect for loading states and highlights
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        
        // Complex movement animations for background elements
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        
        // Infinite scroll animation for moving cards
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      
      // Animation class definitions using the keyframes above
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        
        // Background element animations with varying speeds for organic feel
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        
        // Configurable scroll animation with CSS variables
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        
        // Magic button border animation
        "magic-spin": "spin 2s linear infinite",
      },
    },
  },
  
  // Plugin configuration for extended functionality
  plugins: [
    require("tailwindcss-animate"), // Additional animation utilities
    addVariablesForColors,          // Custom function to add CSS variables for all colors
    
    // Custom utility generator for background patterns
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          // Grid background utility - creates SVG grid patterns
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          
          // Small grid background utility - creates tighter grid patterns
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          
          // Dot pattern background utility - creates subtle dot patterns
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { 
          values: flattenColorPalette(theme("backgroundColor")), 
          type: "color" 
        }
      );
    },
  ],
} satisfies Config;

/**
 * Utility function to add CSS variables for all color values
 * 
 * This enables dynamic theming and easier color access in CSS.
 * Converts all Tailwind colors to CSS custom properties.
 * 
 * @param {object} params - Tailwind plugin parameters
 * @param {function} params.addBase - Function to add base styles
 * @param {function} params.theme - Function to access theme values
 */
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add all color variables to the :root selector
  addBase({
    ":root": newVars,
  });
}

export default config;