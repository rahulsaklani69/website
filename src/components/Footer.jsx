import React from 'react';

const Footer = () => {
    return (
        <footer id="about" className="bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-primary flex justify-center items-center text-accent font-bold text-2xl rounded-sm">
                            H
                        </div>
                        <h2 className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100">HOGWARTS <span className="text-accent">CLASSES</span></h2>
                    </div>
                    <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                        The Hogwarts Classes is the premier destination for students who dare to dream big and work hard for academic excellence in sciences and commerce.
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="https://www.instagram.com/thehogwartsclasses?igsh=NHI0dXJvenVmY2Vk" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-xl">camera_alt</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="https://t.me/thehogwartsclasses" target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined text-xl">send</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <a href="https://www.instagram.com/thehogwartsclasses?igsh=NHI0dXJvenVmY2Vk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">camera_alt</span>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/thehogwartsclasses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">send</span>
                                Telegram
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-slate-500 font-medium">
                        <li><a className="hover:text-primary cursor-pointer">All Courses</a></li>
                        <li><a className="hover:text-primary cursor-pointer">Success Stories</a></li>
                        <li><a className="hover:text-primary cursor-pointer">Contact Us</a></li>
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
                            +91 9720961056
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">mail</span>
                            thehogwartsclass@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-sm">
                © 2024 The Hogwarts Classes. All Rights Reserved. Education for a better future.
            </div>
        </footer >
    );
};

export default Footer;
