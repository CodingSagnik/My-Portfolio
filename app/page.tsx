/**
 * Main Landing Page Component
 * 
 * This is the home page of Sagnik's portfolio website built with Next.js 14.
 * It orchestrates all the major sections in a cohesive layout:
 * - Hero section with animated introduction
 * - Grid/About section with interactive cards
 * - Recent projects showcase
 * - Client testimonials
 * - Work experience timeline
 * - Development approach methodology
 * - Contact footer
 */

import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

/**
 * Home Page Component
 * 
 * The main entry point that renders the complete portfolio experience.
 * Uses a centered layout with responsive padding and controlled max-width
 * for optimal viewing across all device sizes.
 * 
 * @returns {JSX.Element} The complete home page layout
 */
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      {/* Main content container with responsive max-width */}
      <div className="max-w-7xl w-full">
        {/* Floating navigation that appears on scroll */}
        <FloatingNav navItems={navItems} />
        
        {/* Hero section - First impression with animated intro */}
        <Hero />
        
        {/* Grid section - Interactive "About Me" bento grid layout */}
        <Grid />
        
        {/* Projects showcase - Featured development work */}
        <RecentProjects />
        
        {/* Client testimonials - Social proof and recommendations */}
        <Clients />
        
        {/* Professional experience timeline */}
        <Experience />
        
        {/* Development methodology and approach */}
        <Approach />
        
        {/* Contact information and social links */}
        <Footer />
      </div>
    </main>
  );
}
