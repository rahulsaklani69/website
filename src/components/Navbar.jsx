import React from 'react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex justify-center items-center text-accent font-bold text-2xl rounded-sm">
                        H
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                        THE HOGWARTS <span className="text-accent">CLASSES</span>
                    </h1>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#home">Home</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#courses">Courses</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#speciality">Speciality</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#enquiry">Enquiry</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#about">About Us</a>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="#about" className="bg-accent hover:bg-yellow-500 text-primary px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-accent/20">
                        Join the Magic
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
