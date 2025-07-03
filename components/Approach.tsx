/**
 * Development Approach Section Component
 * 
 * This component showcases the development methodology using interactive cards
 * with canvas reveal effects. Each phase represents a step in the development process:
 * 
 * Phase 1: Planning & Architecture - Strategic thinking and system design
 * Phase 2: Code, Iterate, Repeat - Implementation and refinement cycles  
 * Phase 3: Test & Launch - Quality assurance and deployment
 * 
 * Features:
 * - Interactive hover effects with canvas animations
 * - Responsive card layout with consistent spacing
 * - Animated phase buttons with custom styling
 * - Smooth transitions and motion effects
 */

"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

/**
 * Approach Component
 * 
 * Renders the development approach section with three interactive cards
 * representing different phases of the development process.
 * 
 * @returns {JSX.Element} The complete approach methodology section
 */
const Approach = () => {
  return (
    <section className="w-full pt-10 pb-20">
        {/* Section Heading */}
        <h1 className="heading">My<span className="text-purple"> approach</span></h1>
        
        {/* 
         * Cards Container
         * Responsive flexbox layout that stacks on mobile and spreads on desktop
         * Controlled spacing and alignment for optimal visual balance
         */}
        <div className="my-12 flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* 
           * Phase 1: Planning & Architecture
           * Emerald theme with moderate animation speed
           * Focuses on strategic thinking and system design
           */}
        <Card 
              title="Planning & Architecture" 
            icon={<AceternityIcon order="Phase 1"/>}
              description="I begin by breaking down the problem, identifying key features, and outlining the structure. I cover everything from database models to user flow. This is where logic meets vision."
            >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
          
          {/* 
           * Phase 2: Code, Iterate, Repeat
           * Pink theme with faster animation and custom colors
           * Represents the implementation and refinement cycles
           */}
        <Card 
              title="Code, Iterate, Repeat" 
            icon={<AceternityIcon order="Phase 2"/>}
              description="With a clear roadmap, I jump into the build phase. Whether it's backend logic or frontend components, I iterate fast, debug smart, and polish until it clicks."
            >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2.5}
          />
        </Card>
          
          {/* 
           * Phase 3: Test & Launch
           * Sky blue theme with larger dots and custom color
           * Represents quality assurance and deployment phase
           */}
        <Card 
              title="Test & Launch" 
            icon={<AceternityIcon order="Phase 3"/>}
              description="After thorough testing and performance adjustments, it's time to ship. I ensure every part works as it should, being smooth, responsive, and ready for production."
            >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
            dotSize={3.8}
          />
        </Card>
      </div>
    </section>
  );
}

/**
 * Card Component
 * 
 * Individual approach card with hover-triggered canvas reveal effect.
 * Handles state management for hover interactions and smooth animations.
 * 
 * @param {string} title - The card title/phase name
 * @param {React.ReactNode} icon - The phase icon/button component
 * @param {React.ReactNode} children - Canvas reveal effect component
 * @param {string} description - Detailed description of the phase
 * @returns {JSX.Element} Interactive card with hover effects
 */
const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  // State management for hover interactions
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      {/* Corner Icons - Decorative plus icons in each corner */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* 
       * Canvas Reveal Animation
       * Triggers on hover to show the background canvas effect
       * Uses Framer Motion for smooth opacity transitions
       */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
       * Card Content Container
       * Manages the layout and animations of text and icon elements
       * Proper z-index layering for content above canvas
       */}
      <div className="relative z-20">
        {/* 
         * Phase Icon Container
         * Centers the icon and handles hover animations
         * Transitions position and opacity on hover
         */}
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        
        {/* 
         * Phase Title
         * Hidden by default, appears on hover with upward animation
         * Large, bold text for maximum impact
         */}
        <h2 className="dark:text-white text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        
        {/* 
         * Phase Description
         * Detailed explanation that appears on hover
         * Custom color styling for consistency with design system
         */}
        <h2 className="dark:text-white text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-semibold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
        style={{
            color: "#e4ecff",
        }}>
          {description}
        </h2>
      </div>
    </div>
  );
};

/**
 * AceternityIcon Component
 * 
 * Custom phase button with animated gradient border effect.
 * Uses CSS custom properties and animations for the magic spin effect.
 * 
 * @param {string} order - The phase label (e.g., "Phase 1")
 * @returns {JSX.Element} Animated phase button
 */
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex items-center justify-center">
        <button 
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          style={{
            // CSS custom property for the animated gradient
            '--magic-gradient': 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
            isolation: 'isolate'
          } as React.CSSProperties}
        >
            {/* 
             * Animated Gradient Border
             * Continuously rotates to create the "magic" effect
             * Uses CSS animations with proper performance optimizations
             */}
            <span 
              className="absolute inset-[-1000%] animate-magic-spin" 
              style={{
                background: 'var(--magic-gradient)',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            />
            
            {/* 
             * Button Content
             * Dark background with proper z-index layering
             * Bold typography for phase labeling
             */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold relative z-[1]">
            {order}
            </span>
        </button>
    </div>
  );
};

/**
 * Icon Component
 * 
 * Simple SVG plus icon used for decorative corner elements.
 * Consistent styling with proper accessibility attributes.
 * 
 * @param {string} className - CSS classes for styling
 * @param {object} rest - Additional props passed to SVG element
 * @returns {JSX.Element} Plus icon SVG
 */
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
