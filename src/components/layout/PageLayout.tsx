import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface PageLayoutProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    icon?: React.ReactNode;
}

const PageLayout = ({ children, title, subtitle, className, icon }: PageLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-slate-50 p-4 md:p-8 pb-24">
            <div className={cn("max-w-4xl mx-auto", className)}>
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        {icon && (
                            <div className="inline-flex p-3 rounded-2xl bg-white shadow-sm border border-slate-100 mb-4 text-indigo-600">
                                {icon}
                            </div>
                        )}
                        {title && <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 tracking-tight">{title}</h1>}
                        {subtitle && <p className="text-slate-500 text-lg font-medium">{subtitle}</p>}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default PageLayout;
