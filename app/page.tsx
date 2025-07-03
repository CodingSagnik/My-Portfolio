/**
 * Home Page Component - Portfolio Website Main Page
 * 
 * This is the main landing page that orchestrates all portfolio sections.
 * It provides a comprehensive showcase of skills, projects, and experience
 * in a modern, interactive layout with smooth animations and responsive design.
 * 
 * Page Structure:
 * - Hero: Dynamic introduction with typewriter effect and animated background
 * - Navigation: Floating navigation bar for smooth section transitions  
 * - About: Bento grid layout showcasing skills and technologies
 * - Projects: Recent work displayed in interactive 3D cards
 * - Testimonials: Client feedback in an infinite scrolling carousel
 * - Experience: Professional timeline with animated borders
 * - Approach: Development methodology with canvas reveal effects
 * - Footer: Contact information and social media links
 * 
 * Key Features:
 * - Fully responsive design optimized for all device sizes
 * - Dark theme with purple accent colors for modern aesthetic
 * - Interactive animations and hover effects throughout
 * - Optimized performance with lazy loading and code splitting
 * - SEO-friendly structure with proper heading hierarchy
 * - Accessibility features including keyboard navigation
 */

// Component imports for main page sections
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

// Data import for navigation configuration
import { navItems } from "@/data";

/**
 * Home Page Component
 * 
 * Renders the complete portfolio website with all sections.
 * Each section is wrapped in semantic HTML elements for proper
 * document structure and accessibility.
 * 
 * The layout uses CSS Grid and Flexbox for responsive positioning,
 * with careful attention to spacing and visual hierarchy.
 * 
 * @returns The complete home page with all portfolio sections
 */
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Maximum width container for consistent layout across screen sizes */}
      <div className="max-w-7xl w-full">
        
        {/* Floating Navigation Bar */}
        {/* Provides smooth scrolling navigation to different sections */}
        <FloatingNav navItems={navItems} />
        
        {/* Hero Section */}
        {/* Main landing area with animated background, spotlight effects, and typewriter introduction */}
        <Hero />
        
        {/* About Section */}
        {/* Bento grid layout showcasing skills, technologies, and personal information */}
        <Grid />
        
        {/* Recent Projects Section */}
        {/* Interactive 3D cards displaying portfolio projects with hover effects */}
        <RecentProjects />
        
        {/* Testimonials Section */}
        {/* Infinite scrolling carousel of client feedback and recommendations */}
        <Clients />
        
        {/* Work Experience Section */}
        {/* Professional timeline with animated borders and company information */}
        <Experience />
        
        {/* Development Approach Section */}
        {/* Methodology explanation with canvas reveal effects and interactive cards */}
        <Approach />
        
        {/* Footer/Contact Section */}
        {/* Contact form, social media links, and additional portfolio information */}
        <Footer />
      </div>
    </main>
  );
}
