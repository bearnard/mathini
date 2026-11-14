import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

/** Hex values (not theme tokens) so contrast never depends on @theme generation. */
const variants = {
    primary:
        'bg-[#f68535] text-white hover:bg-[#e06a20] shadow-md border-transparent',
    secondary:
        'bg-white text-slate-800 hover:bg-slate-50 border-slate-300 shadow-sm',
    outline:
        'bg-white text-[#3285bc] border-[#3285bc]/70 hover:bg-[#3285bc]/10',
    ghost:
        'bg-transparent text-slate-700 hover:bg-slate-100 border-transparent shadow-none',
    danger:
        'bg-[#f97665] text-white hover:bg-[#e86555] border-transparent shadow-sm',
    success:
        'bg-[#60a763] text-white hover:bg-[#4f8f52] border-transparent shadow-sm',
};

const sizes = {
    sm: 'min-h-9 px-3 py-1.5 text-sm',
    md: 'min-h-11 px-6 py-2 text-base',
    lg: 'min-h-14 px-8 py-2.5 text-lg',
    icon: 'h-11 w-11 p-0 flex items-center justify-center',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                className={cn(
                    'inline-flex items-center justify-center text-center whitespace-normal break-words rounded-xl font-bold border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3285bc] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children as React.ReactNode}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
