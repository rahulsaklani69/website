import React from 'react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary dark:text-accent">
                        <span className="material-symbols-outlined text-4xl">school</span>
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                        THE HOGWARTS <span className="text-accent">CLASSES</span>
                    </h1>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#courses">Courses</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#features">Features</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#about">About</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="bg-accent hover:bg-yellow-500 text-primary px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-accent/20">
                        Join the Magic
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
