import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {

        const variants = {
            primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md border-transparent',
            secondary: 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-sm',
            outline: 'bg-transparent text-indigo-600 border-indigo-200 hover:bg-indigo-50',
            ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 border-transparent shadow-none',
            danger: 'bg-red-50 text-red-600 hover:bg-red-100 border-red-200',
            success: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-200',
        };

        const sizes = {
            sm: 'h-9 px-3 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
            icon: 'h-11 w-11 p-0 flex items-center justify-center',
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: disabled ? 1 : 1.02 }}
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-bold border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
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
