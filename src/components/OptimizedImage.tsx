import React, { useState } from 'react';
import LoadingSpinner from './ui/LoadingSpinner';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

/**
 * Optimized image component with loading states and lazy loading
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onLoad 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Immagine non disponibile</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <LoadingSpinner size="md" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;