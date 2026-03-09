import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fade out after 1.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 1500);

        // Remove from DOM entirely after 2 seconds
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-background-dark flex items-center justify-center transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="w-24 h-24 bg-primary flex justify-center items-center text-accent font-bold text-6xl rounded-lg animate-golden-pulse">
                H
            </div>
        </div>
    );
};

export default Preloader;
