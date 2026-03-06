import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-3xl text-primary">school</span>
                        <h2 className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100">HOGWARTS <span className="text-accent">CLASSES</span></h2>
                    </div>
                    <p className="text-slate-500 max-w-sm leading-relaxed">
                        The Hogwarts Classes is the premier destination for students who dare to dream big and work hard for academic excellence in sciences and commerce.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                            <span className="material-symbols-outlined text-xl">alternate_email</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li><a className="hover:text-primary" href="#">Home</a></li>
                        <li><a className="hover:text-primary" href="#">All Courses</a></li>
                        <li><a className="hover:text-primary" href="#">Success Stories</a></li>
                        <li><a className="hover:text-primary" href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Contact</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">location_on</span>Old sunrise school, near sitapur fatak, Sitapur Jwalapur Haridwar 249407
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">call</span>
                            +91 970961056
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">mail</span>
                            admissions@hogwartsclasses.edu
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-sm">
                © 2024 The Hogwarts Classes. All Rights Reserved. Education for a better future.
            </div>
        </footer>
    );
};

export default Footer;
