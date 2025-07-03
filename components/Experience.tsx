/**
 * Work Experience Section Component
 * 
 * This component showcases professional work experience in an interactive format.
 * Features:
 * - Animated moving borders around each experience card
 * - Responsive grid layout that adapts to screen sizes
 * - Consistent card styling with company logos
 * - Hierarchical information display (title, company, date, description)
 * - Special sizing for company logos (Internshala gets smaller treatment)
 */

import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

/**
 * Experience Component
 * 
 * Renders the professional experience section with animated border cards.
 * Each experience card contains structured information about roles and responsibilities.
 * 
 * @returns {JSX.Element} The complete work experience section
 */
const Experience = () => {
  return (
    <div className="-pt-40 pb-20" id="experience">
      {/* Section Heading */}
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      {/* 
       * Experience Grid Container
       * Responsive grid that stacks on mobile and spreads on larger screens
       * Controlled spacing for optimal visual hierarchy
       */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* 
         * Experience Cards Mapping
         * Each card is wrapped in a MovingBorders component for animation
         */}
        {workExperience.map((card) => (
          <Button
            key={card.id}
            // Random animation duration for organic feel (10-20 seconds)
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // Gradient background for visual depth
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* 
             * Card Content Container
             * Flexible layout that adapts orientation based on screen size
             * Responsive padding for different breakpoints
             */}
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* 
               * Company Logo
               * Special handling for different logo sizes
               * Internshala logo gets smaller treatment for visual balance
               */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className={`${
                  card.id === 2 
                    ? "lg:w-24 md:w-16 w-12 object-contain"  // Smaller for Internshala
                    : "lg:w-32 md:w-20 w-16"                // Standard size for others
                }`}
              />
              
              {/* 
               * Experience Information Container
               * Hierarchical text display with responsive typography
               * Consistent spacing using margin utilities
               */}
              <div className="lg:ms-5">
                {/* Job Title - Largest text with bold weight */}
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                
                {/* Company Name - Prominent but secondary to title */}
                <p className="text-start text-white-100 mt-2 font-semibold text-lg md:text-xl">
                  {card.organisation}
                </p>
                
                {/* Employment Duration - Smaller, informational text */}
                <p className="text-start text-white-100 mt-1 font-medium text-sm md:text-base">
                  {card.date}
                </p>
                
                {/* Role Description - Detailed explanation of responsibilities */}
                <p className="text-start text-white-100 mt-1 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;