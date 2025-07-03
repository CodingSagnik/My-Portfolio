/**
 * About Section - Bento Grid Layout
 * 
 * This component renders the "About Me" section using a modern bento grid layout.
 * It dynamically maps over gridItems data to create an interactive showcase
 * of skills, personality, and technical capabilities.
 * 
 * Features:
 * - Responsive grid layout that adapts to screen sizes
 * - Interactive cards with hover effects
 * - Mixed content types (text, images, animations)
 * - Accessible section with proper anchor linking
 */

import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

/**
 * Grid Component
 * 
 * Renders the about section using a bento grid layout pattern.
 * Each grid item is dynamically generated from the gridItems data array,
 * ensuring easy content management and consistency.
 * 
 * @returns {JSX.Element} The complete about section with bento grid
 */
const Grid = () => {
  return (
    <section id="about" className="pt-20">
      {/* 
       * BentoGrid Container
       * Handles the responsive grid layout and spacing
       * Automatically arranges children based on their className properties
       */}
      <BentoGrid>
        {/* 
         * Dynamic Grid Items
         * Maps over the gridItems array to render each card
         * Each item receives its configuration via props
         */}
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}  // Controls grid positioning and sizing
            img={item.img}              // Primary image/icon
            imgClassName={item.imgClassName}    // Image styling
            titleClassName={item.titleClassName} // Title positioning
            spareImg={item.spareImg}    // Secondary/background image
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid