import React from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'green' | 'indigo' | 'red';

interface FancyButtonProps {
  icon: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<Variant, string> = {
  default: `
    border-white/20 hover:border-white/40 
    bg-gradient-to-tr from-white/10 to-white/5 
    hover:bg-gradient-to-tr hover:from-white/20 hover:to-white/10 
    hover:shadow-white/30`,
  green: `
    border-green-500/30 hover:border-green-500/60 
    bg-gradient-to-tr from-green-500/10 to-green-500/5 
    hover:bg-gradient-to-tr hover:from-green-500/20 hover:to-green-500/10 
    hover:shadow-green-500/40`,
  indigo: `
    border-indigo-500/30 hover:border-indigo-500/60 
    bg-gradient-to-tr from-indigo-500/10 to-indigo-500/5 
    hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:to-indigo-500/10 
    hover:shadow-indigo-500/40`,
  red: `
    border-red-500/30 hover:border-red-500/60 
    bg-gradient-to-tr from-red-500/10 to-red-500/5 
    hover:bg-gradient-to-tr hover:from-red-500/20 hover:to-red-500/10 
    hover:shadow-red-500/40`,
};

const glowGradientClasses: Record<Variant, string> = {
  default: 'via-white/20',
  green: 'via-green-400/30',
  indigo: 'via-indigo-400/30',
  red: 'via-red-400/30',
};

const FancyButton: React.FC<FancyButtonProps> = ({
  icon,
  variant = 'default',
  onClick,
  className = '',
  ariaLabel = 'Fancy Button',
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        'p-5 rounded-full backdrop-blur-lg shadow-lg transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden',
        'hover:scale-110 active:scale-95 hover:rotate-2 active:rotate-0 hover:shadow-2xl',
        variantClasses[variant],
        className
      )}
    >
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out',
          glowGradientClasses[variant]
        )}
      />
      <div className="relative z-10">{icon}</div>
    </button>
  );
};

export default FancyButton; 