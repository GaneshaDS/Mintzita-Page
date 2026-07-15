import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ href, variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'bg-brand-primary text-brand-dark hover:bg-brand-accent shadow-sm',
    secondary: 'bg-brand-surface text-brand-light hover:bg-brand-gray border border-brand-wood',
    outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark'
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-10 text-lg'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
