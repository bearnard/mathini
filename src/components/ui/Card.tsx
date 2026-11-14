import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLMotionProps<"div"> {
    variant?: 'default' | 'interactive';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, onClick, onKeyDown, ...props }, ref) => {
        const interactive = variant === 'interactive' || typeof onClick === 'function';

        const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
            onKeyDown?.(e);
            if (!onClick || e.defaultPrevented) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                (onClick as (ev: React.SyntheticEvent) => void)(e);
            }
        };

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                role={interactive && onClick ? 'button' : undefined}
                tabIndex={interactive && onClick ? 0 : undefined}
                onClick={onClick}
                onKeyDown={handleKeyDown}
                className={cn(
                    'bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden',
                    interactive &&
                        'hover:shadow-md hover:border-brand-blue/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';

export default Card;
