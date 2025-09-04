import { useEffect } from 'react';

/**
 * Custom hook for preloading images to improve performance
 * Preloads images in the background to reduce loading times
 */
export const useImagePreloader = (images: string[]) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Start preloading after component mount
    const timer = setTimeout(preloadImages, 100);
    
    return () => clearTimeout(timer);
  }, [images]);
};