import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Reusable loading spinner component
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border border-gray-300 border-t-gray-600',
    md: 'w-8 h-8 border-2 border-gray-300 border-t-gray-600',
    lg: 'w-12 h-12 border-2 border-gray-300 border-t-gray-600'
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full animate-spin ${className}`} />
  );
};

export default LoadingSpinner;