/**
 * Recent Projects Showcase Component
 * 
 * This component displays featured projects in an interactive 3D pin layout.
 * Each project card includes:
 * - 3D hover effects via PinContainer
 * - Project screenshots and descriptions
 * - Technology stack icons
 * - Live site links with proper accessibility
 * - Responsive design for all screen sizes
 */

"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaGlobe } from 'react-icons/fa'

/**
 * RecentProjects Component
 * 
 * Renders a showcase of featured projects using 3D animated cards.
 * Each project is interactive and links to the live deployment.
 * 
 * @returns {JSX.Element} The complete projects showcase section
 */
const RecentProjects = () => {
  return (
    <div className='pt-28 pb-20' id='projects'>
        {/* Section Heading */}
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>
                recent projects
            </span>
        </h1>
        
        {/* 
         * Projects Grid Container
         * Uses flexbox for responsive layout with controlled spacing
         * Negative margin compensates for internal spacing
         */}
        <div className='flex flex-wrap items-center justify-center p-0 gap-x-24 gap-y-0 -mt-6'>
            {/* 
             * Project Cards Mapping
             * Destructures project data for cleaner code
             * Each card is wrapped in a 3D pin container for hover effects
             */}
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    {/* 
                     * 3D Pin Container
                     * Creates the interactive hover effect
                     * Links to live project URL with proper accessibility
                     */}
                    <PinContainer title={link} href={link}>
                        {/* 
                         * Project Image Container
                         * Features layered background and project screenshot
                         * Responsive sizing with overflow control
                         */}
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            {/* Background layer with consistent styling */}
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="background pattern"/>
                            </div>
                            
                            {/* 
                             * Project Screenshot
                             * Positioned absolutely for layering effect
                             * Responsive sizing with proper aspect ratio
                             */}
                            <img 
                              src={img} 
                              alt={title}
                              className="z-10 absolute bottom-0 w-10/12 h-10/12 object-contain" 
                            />
                        </div>
                        
                        {/* 
                         * Project Title
                         * Responsive font sizing with text clamping
                         * Ensures consistent layout across different title lengths
                         */}
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        {/* 
                         * Project Description
                         * Limited to 2 lines with ellipsis overflow
                         * Responsive typography for different screen sizes
                         */}
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        {/* 
                         * Bottom Section: Tech Stack and Live Link
                         * Flexbox layout with space-between for optimal distribution
                         */}
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            {/* 
                             * Technology Stack Icons
                             * Overlapping circular containers for visual appeal
                             * Responsive sizing with consistent spacing
                             */}
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div 
                                      key={icon} 
                                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
                                      style={{transform: `translateX(-${5 * index * 2}px)`}} // Creates overlapping effect
                                    >
                                        <img src={icon} alt="technology icon" className='p-2'/>
                                    </div>
                                ))}
                            </div>

                            {/* 
                             * Live Site Link Indicator
                             * Visual cue for clickable project with icon
                             * Properly aligned with consistent styling
                             */}
                            <div className='flex justify-center items-center'>
                                <p className='flex items-center lg:text-xl md:text-xs text-sm text-purple'>
                                    Check Live Site
                                    <FaGlobe className='ms-3' color='#CBACF9'/>
                                </p>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects