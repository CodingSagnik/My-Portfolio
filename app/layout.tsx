/**
 * Root Layout Component for Portfolio Website
 * 
 * This is the main layout component that wraps all pages in the application.
 * It provides global styles, metadata, and the theme provider for the entire site.
 * 
 * Key Features:
 * - Next.js 14 App Router layout
 * - Global CSS styles and font loading
 * - Comprehensive SEO metadata with Open Graph and Twitter Cards
 * - Favicon configuration for multiple formats and devices
 * - Theme provider setup for consistent styling
 * - Viewport and accessibility optimizations
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

// Load Inter font with Latin subset for optimal performance
const inter = Inter({ subsets: ["latin"] });

/**
 * Comprehensive metadata configuration for SEO and social sharing
 * 
 * This metadata ensures proper indexing by search engines and
 * attractive previews when shared on social media platforms.
 */
export const metadata: Metadata = {
  // Basic metadata
  title: "Sagnik's Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio - Showcasing cutting-edge web development skills with Next.js, React, and advanced animations",
  
  // Enhanced metadata for better SEO
  keywords: ["portfolio", "web developer", "Next.js", "React", "TypeScript", "Full Stack Developer", "JavaScript", "Modern Web Development"],
  authors: [{ name: "Sagnik Ray" }],
  creator: "Sagnik Ray",
  publisher: "Sagnik Ray",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagnik-portfolio.vercel.app", // Update with actual domain
    title: "Sagnik's Portfolio - Modern Web Developer",
    description: "Explore my portfolio showcasing modern web development projects built with Next.js, React, and cutting-edge technologies",
    siteName: "Sagnik's Portfolio",
    images: [
      {
        url: "/og-image.png", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Sagnik's Portfolio - Modern Web Developer",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Sagnik's Portfolio - Modern Web Developer",
    description: "Explore my portfolio showcasing modern web development projects",
    creator: "@your_twitter_handle", // Update with actual Twitter handle
    images: ["/og-image.png"],
  },
  
  // Favicon configuration for multiple formats and devices
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  
  // Web app manifest for PWA features
  manifest: "/site.webmanifest",
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification for search engines (add when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

/**
 * Root Layout Component
 * 
 * Provides the base HTML structure and theme provider for all pages.
 * The layout includes proper language settings, responsive viewport,
 * and the theme provider for consistent styling across the application.
 * 
 * @param children - The page content to be rendered within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
