import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-darker disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-brand-gradient text-white font-semibold shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:shadow-[0_0_30px_rgba(108,99,255,0.45)] hover:brightness-110",
    secondary: "bg-brand-surface text-white hover:bg-brand-gray border border-white/10",
    outline: "border border-brand-gray bg-transparent hover:border-brand-accent/60 hover:bg-brand-surface text-white",
    ghost: "bg-transparent hover:bg-brand-surface text-white",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-8 text-lg font-semibold",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
