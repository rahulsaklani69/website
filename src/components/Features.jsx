import React from 'react';

const Features = () => {
    return (
        <section className="py-24 bg-primary text-white" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                        </div>
                        <h3 className="text-xl font-bold">Expert Wizards</h3>
                        <p className="text-slate-300">Learn from the most experienced faculty who have mentored thousands of successful students over decades.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">magic_button</span>
                        </div>
                        <h3 className="text-xl font-bold">Modern Spells</h3>
                        <p className="text-slate-300">Utilizing the latest digital tools, interactive simulations, and personalized learning dashboards for better retention.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">person_search</span>
                        </div>
                        <h3 className="text-xl font-bold">Personal Mentorship</h3>
                        <p className="text-slate-300">One-on-one guidance sessions to bridge learning gaps and ensure no student is left behind in their journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
