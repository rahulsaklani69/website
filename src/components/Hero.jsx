import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden pt-20 pb-32 magical-glow">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                        Excellence in Education
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] text-primary dark:text-white">
                        Unlock the Magic of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mathematical &amp; Scientific</span> Excellence!
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        Master complex concepts with our expert faculty. Join the premier coaching institute designed specifically for school toppers and aspiring Chartered Accountants.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#about" className="bg-accent hover:bg-yellow-500 text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-accent/30 flex items-center justify-center gap-2 hover:-translate-y-1">
                            Book a Free Demo Class
                            <span className="material-symbols-outlined">bolt</span>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-2">
                        <img
                            alt="Students studying in a modern classroom"
                            className="w-full h-[500px] object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm1FRE80gX2P5Bl5gd_Tu3bClh9g0dd05NHk0DzSSklvDjNVSzQ_XAlb0gu6IzVWv9r_mw6fo1JByQPTrQgcJfUTqgk2JSAjaNwXNRnJ0X8pEzPJ0MQImmvE2kDVVpj6yhcko-hYog8mNVL0tVpuVms-62Xh2aLEcoB_KkUkXfleR_55C2GNfUZZ0KEPu61MKjixWiZDIjIbKWiGfoRcJMZXLIfZanW_azFQKMUtUhTFJ_U2f8BCYCQCBafDQxZRFewUIBMXiFU9c"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
