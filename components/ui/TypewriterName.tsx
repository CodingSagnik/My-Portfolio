/**
 * Multi-Language Typewriter Animation Component
 * 
 * This component creates an engaging typewriter effect that cycles through
 * the name "Sagnik" in different languages:
 * - English: "Sagnik!"
 * - Bengali: "সাগ্নিক!"
 * - Hindi: "साग्निक!"
 * - Spanish: "¡Sagnik!"
 * 
 * Features:
 * - Smooth typing and deleting animations
 * - Pause between complete words for readability
 * - Infinite cycling through all languages
 * - Customizable styling via className prop
 * - Animated cursor indicator
 */

"use client";
import React, { useState, useEffect } from 'react';

/**
 * TypewriterName Component
 * 
 * Renders an animated typewriter effect cycling through multilingual names.
 * Uses React hooks for state management and setTimeout for timing control.
 * 
 * @param {string} className - Optional CSS classes for styling
 * @returns {JSX.Element} Animated text with typewriter effect
 */
const TypewriterName = ({ className = "" }: { className?: string }) => {
  // Array of name variants in different languages
  const names = [
    "Sagnik!", // English - Clear and direct
    "সাগ্নিক!", // Bengali - Native script representation
    "साग्निक!", // Hindi - Devanagari script
    "¡Sagnik!" // Spanish - With inverted exclamation for cultural authenticity
  ];

  // State management for animation control
  const [currentNameIndex, setCurrentNameIndex] = useState(0); // Index of current name being displayed
  const [currentText, setCurrentText] = useState(""); // Currently displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're in deletion phase
  const [isPaused, setIsPaused] = useState(false); // Whether we're pausing between words

  /**
   * Main animation logic using useEffect
   * Handles the timing and state transitions for the typewriter effect
   */
  useEffect(() => {
    const currentName = names[currentNameIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        // Pause phase: Complete word displayed, prepare for deletion
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deletion phase: Remove characters one by one
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Deletion complete: Move to next name and start typing
          setIsDeleting(false);
          setCurrentNameIndex((prev) => (prev + 1) % names.length);
        }
      } else {
        // Typing phase: Add characters one by one
        if (currentText.length < currentName.length) {
          setCurrentText(currentName.slice(0, currentText.length + 1));
        } else {
          // Typing complete: Pause before starting deletion
          setIsPaused(true);
        }
      }
    }, isDeleting ? 100 : isPaused ? 2000 : 150); // Dynamic timing: faster deletion, 2s pause, moderate typing

    // Cleanup timeout on unmount or dependency change
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentNameIndex, names]);

  return (
    <span className={`${className} relative font-bold`}>
      {/* Current text being displayed */}
      {currentText}
      {/* Animated cursor with pulsing effect */}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterName; 