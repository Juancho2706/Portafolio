'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-accent/30 rounded-full pointer-events-none z-50 blur-md"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
            }}
        >
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg transform scale-150" />
        </motion.div>
    );
};

export default Cursor;
