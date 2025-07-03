/**
 * Footer/Contact Section Component
 * 
 * The final section of the portfolio that serves as both footer and contact area.
 * Features:
 * - Checkered background grid effect matching the hero section
 * - Contact call-to-action with email link
 * - Social media links with hover effects
 * - Responsive layout with proper spacing
 * - Copyright and attribution information
 */

import { FaEnvelope } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

/**
 * Footer Component
 * 
 * Renders the contact/footer section with background effects and social links.
 * Provides multiple ways for visitors to get in touch and connect.
 * 
 * @returns {JSX.Element} The complete footer/contact section
 */
const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-[50px] relative" id="contact">
      {/* 
       * Background Grid Effect
       * Replicates the same checkered pattern from the hero section
       * Creates visual consistency across the portfolio
       */}
      <div
        className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      >
        {/* 
         * Radial Gradient Overlay
         * Creates the faded effect from center to edges
         * Prevents the grid from overwhelming the content
         */}
        <div
          className="absolute pointer-events-none inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* 
       * Main Content Container
       * Positioned above the background with proper z-index
       * Centers all content for optimal visual hierarchy
       */}
      <div className="relative z-10">
      <div className="flex flex-col items-center">
          {/* 
           * Contact Heading
           * Engaging call-to-action with purple accent words
           * Responsive width constraint for optimal readability
           */}
        <h1 className="heading lg:max-w-[45vw]">
            Got a <span className="text-purple">cool</span> idea or something <span className="text-purple">exciting</span> in mind?
        </h1>
          
          {/* 
           * Contact Description
           * Encouraging message with responsive spacing
           * Uses apostrophe entity for proper HTML encoding
           */}
          <p className="text-white-200 md:mt-10 my-2 text-center">
            Always up to build something cool so reach out today and let&apos;s turn ideas into working code!     
          </p>
          
          {/* 
           * Email Contact Button
           * Direct mailto link with custom MagicButton styling
           * Envelope icon for clear visual communication
           */}
          <a href="mailto:raysagnik@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
      </div>
        
        {/* 
         * Bottom Section Container
         * Flexbox layout that adapts orientation based on screen size
         * Balanced distribution of copyright and social links
         */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          {/* 
           * Copyright/Attribution Text
           * Personal branding with heart emoji for warmth
           * Responsive typography for different screen sizes
           */}
        <p className="md:text-base text-sm md:font-normal font-light">
            Made with ❤️ by Sagnik Ray
        </p>

          {/* 
           * Social Media Links Container
           * Responsive gap spacing for optimal touch targets
           * Maps over socialMedia data for maintainability
           */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
              <a
              key={info.id}
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all duration-300"
            >
                {/* Social media platform icon with consistent sizing */}
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;