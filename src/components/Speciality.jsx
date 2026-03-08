import React from 'react';

const specialities = [
    { title: "Regular Mock Tests", icon: "quiz", desc: "Rigorous testing to ensure exam readiness and time management." },
    { title: "Deep Concept Clarity", icon: "lightbulb", desc: "Building strong fundamentals over rote memorization." },
    { title: "Time-Saving Short Tricks", icon: "timer", desc: "Smart techniques to solve complex problems in seconds." },
    { title: "1-on-1 Doubt Solving", icon: "people", desc: "Personalized attention to resolve individual learning blocks." },
    { title: "Exam-Oriented Approach", icon: "school", desc: "Syllabus tracking mapped strictly to past year trends." }
];

const Speciality = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-primary dark:text-white">Our Speciality</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Why students choose The Hogwarts Classes for academic brilliance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialities.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{item.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speciality;
