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
                    <div className="flex gap-4 items-center">
                        <a className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary transition-all transform hover:scale-110 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]" href="https://www.instagram.com/thehogwartsclasses?igsh=NHI0dXJvenVmY2Vk" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.244.156 3.8.527 2.63 1.697 1.46 2.868 1.089 4.316 1.005 6.126.046 7.405.033 7.813.033 11.072s.013 3.667.072 4.947c.084 1.81.455 3.258 1.625 4.428 1.17 1.17 2.618 1.54 4.428 1.625 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.81-.084 3.258-.455 4.428-1.625 1.17-1.17 1.54-2.618 1.625-4.428.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.084-1.81-.455-3.258-1.625-4.428C19.827.527 18.379.156 16.57.072 15.29.014 14.882 0 11.623 0h.377zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary transition-all transform hover:scale-110 hover:border-[#0088cc] hover:text-[#0088cc] hover:shadow-[0_0_15px_rgba(0,136,204,0.3)]" href="https://t.me/thehogwartsclasses" target="_blank" rel="noopener noreferrer" title="Telegram">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <a href="https://www.instagram.com/thehogwartsclasses?igsh=NHI0dXJvenVmY2Vk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-pink-600 transition-colors cursor-pointer group">
                                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-pink-500 transition-colors group-hover:scale-110 transform" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.244.156 3.8.527 2.63 1.697 1.46 2.868 1.089 4.316 1.005 6.126.046 7.405.033 7.813.033 11.072s.013 3.667.072 4.947c.084 1.81.455 3.258 1.625 4.428 1.17 1.17 2.618 1.54 4.428 1.625 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.81-.084 3.258-.455 4.428-1.625 1.17-1.17 1.54-2.618 1.625-4.428.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.084-1.81-.455-3.258-1.625-4.428C19.827.527 18.379.156 16.57.072 15.29.014 14.882 0 11.623 0h.377zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/thehogwartsclasses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-[#0088cc] transition-colors cursor-pointer group">
                                <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-[#0088cc] transition-colors group-hover:scale-110 transform" viewBox="0 0 24 24">
                                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                                </svg>
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
