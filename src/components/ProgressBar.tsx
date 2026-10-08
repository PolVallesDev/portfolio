import React from 'react';

interface ProgressBarProps {
  progress: number;
  isComplete: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, isComplete }) => {
  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-cinnabar z-50 transition-all duration-150"
      style={{
        width: `${progress}%`,
        opacity: isComplete ? 0 : 1,
        transition: isComplete ? 'opacity 0.4s ease, width 0.15s ease' : 'width 0.15s ease',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};
