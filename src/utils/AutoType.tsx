'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AutoTypeProps {
  phrases: string[];
  typingSpeed?: number;   // Seconds per character
  deletingSpeed?: number; // Seconds per character
  delayBetween?: number;  // Delay before erasing or switching phrases
}

export const AutoType = ({
  phrases,
  typingSpeed = 0.06,
  deletingSpeed = 0.03,
  delayBetween = 2,
}: AutoTypeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = useMotionValue(0);
  const currentPhrase = phrases[currentIndex];
  
  // Slice the phrase dynamically based on the motion value count
  const displayText = useTransform(count, (latest) =>
    currentPhrase.slice(0, Math.round(latest))
  );

  useEffect(() => {
    let isCancelled = false;

    const sequence = async () => {
      // 1. Type forward
      const typeAnimation = animate(count, currentPhrase.length, {
        type: "tween",
        duration: currentPhrase.length * typingSpeed,
        ease: "linear",
      });
      await typeAnimation;
      if (isCancelled) return;

      // 2. Pause on completed phrase
      await new Promise((resolve) => setTimeout(resolve, delayBetween * 1000));
      if (isCancelled) return;

      // 3. Backspace/Delete text
      const deleteAnimation = animate(count, 0, {
        type: "tween",
        duration: currentPhrase.length * deletingSpeed,
        ease: "linear",
      });
      await deleteAnimation;
      if (isCancelled) return;

      // 4. Pause briefly before next phrase cycles
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (isCancelled) return;

      // Move to next index loop
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    };

    sequence();

    return () => {
      isCancelled = true;
      count.set(0);
    };
  }, [currentIndex, currentPhrase, count, typingSpeed, deletingSpeed, delayBetween, phrases.length]);

  return (
    <span className="inline-flex items-center">
      <motion.span>{displayText}</motion.span>
      {/* Blinking terminal cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="inline-block ml-1 w-[3px] h-[1em] bg-[#F49200] align-middle"
      />
    </span>
  );
};