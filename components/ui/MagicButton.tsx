/**
 * Magic Button Component with Animated Gradient Border
 * 
 * A reusable button component featuring a spinning gradient border animation.
 * This component is used throughout the portfolio for call-to-action elements
 * like "Show my work", "Let's get in touch", and phase indicators.
 * 
 * Features:
 * - Animated conic gradient border that continuously rotates
 * - Flexible icon positioning (left or right)
 * - Responsive design with consistent sizing
 * - Custom click handler support
 * - Hardware-accelerated animations for smooth performance
 * - Customizable styling via additional CSS classes
 */

import React from 'react'

/**
 * MagicButton Component
 * 
 * Creates an interactive button with a spinning gradient border effect.
 * The animation uses CSS custom properties and transforms for optimal performance.
 * 
 * @param {string} title - The button text content
 * @param {React.ReactNode} icon - Icon element to display alongside text
 * @param {string} position - Icon position ('left' or 'right')
 * @param {function} handleClick - Optional click event handler
 * @param {string} otherClasses - Additional CSS classes for customization
 * @returns {JSX.Element} Animated button with gradient border
 */
const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; 
    icon: React.ReactNode; 
    position: string; 
    handleClick?: () => void; 
    otherClasses?: string;
}) => {
  return (
    <button 
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" 
      onClick={handleClick}
      style={{
        // CSS custom property for the animated gradient
        // Creates a purple-to-blue conic gradient that will be animated
        '--magic-gradient': 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
        isolation: 'isolate' // Creates new stacking context for proper layering
      } as React.CSSProperties}
    >
        {/* 
         * Animated Gradient Border Layer
         * This span creates the spinning border effect by rotating a large gradient
         * The inset value creates the border appearance when overlaid with content
         */}
        <span 
          className="absolute inset-[-1000%] animate-magic-spin" 
          style={{
            background: 'var(--magic-gradient)',
            willChange: 'transform',      // Optimizes animation performance
            backfaceVisibility: 'hidden'  // Prevents rendering artifacts during animation
          }}
        />
        
        {/* 
         * Button Content Layer
         * Contains the actual button text and icon with proper z-index layering
         * Dark background ensures contrast against the animated border
         */}
        <span 
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 relative z-[1] ${otherClasses}`}
        >
            {/* Conditional icon positioning based on position prop */}
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton