/**
 * Hero Section Component
 * 
 * The main landing section that creates the first impression with:
 * - Dynamic spotlight effects for visual appeal
 * - Animated grid background with gradient overlay
 * - Multi-language typewriter name animation
 * - Call-to-action button linking to GitHub
 * - Responsive text scaling and layout
 */

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import TypewriterName from './ui/TypewriterName'
import { FaLocationArrow } from 'react-icons/fa'

/**
 * Hero Component
 * 
 * Creates an immersive introduction section with animated elements
 * and responsive design that works across all device sizes.
 * 
 * @returns {JSX.Element} The complete hero section
 */
const hero = () => {
  return (
    <div className="pb-20 pt-36">
        {/* Spotlight Effects - Creates dynamic lighting animations */}
        <div>
            {/* Main spotlight - positioned top-left, white color for primary focus */}
            <Spotlight className='-top-40 -left-0 md:-left-32 md:-top-20 h-screen' fill='white'/>
            
            {/* Secondary spotlight - positioned top-right, purple accent */}
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            
            {/* Tertiary spotlight - positioned mid-left, blue accent for depth */}
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        {/* 
         * Animated Grid Background
         * Creates a subtle checkered pattern that fades from center outward
         * Uses different opacity for light/dark modes
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center" 
      >
          {/* 
           * Radial Gradient Overlay
           * Creates a faded effect from center to edges using CSS mask
           * Ensures the grid pattern doesn't overpower the content
           */}
          <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

        {/* 
         * Main Content Container
         * Positioned above the background with proper z-index
         * Responsive width and centered layout
         */}
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            
            {/* Tagline - Small introductory text */}
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-150">
            Building powerful digital products from front to back
          </h2>

            {/* 
             * Main Heading with Text Generation Effect
             * Uses a custom component that animates text appearance word by word
             * Responsive font sizing across different breakpoints
             */}
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words="Turning bold ideas into intuitive experiences" 
            />

            {/* 
             * Introduction Paragraph with Typewriter Name
             * Features a multi-language animated name component
             * Responsive text sizing and spacing
             */}
          <p className='text-center md:tracking-wider md:mt-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I'm <TypewriterName className="text-purple" /> I build experiences that feel as good as they look
          </p>

            {/* 
             * Call-to-Action Button
             * Links to GitHub profile with proper security attributes
             * Uses custom MagicButton component with hover effects
             */}
          <a 
          href="https://github.com/CodingSagnik"
          target="_blank"
              rel="noopener noreferrer"
            >
            <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
            />
          </a>
        </div>
      </div>     
    </div>
  )
}

export default hero