import React from 'react';

const ContactCTA = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white dark:bg-background-dark rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5">
                    <div className="md:col-span-2 bg-primary p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Begin Your Journey</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">Ready to transform your academic performance? Fill out the form to secure your free demo session.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-accent">
                                    <span className="material-symbols-outlined">description</span>
                                    <span className="text-sm font-semibold">Free solved papers for 10th &amp; 12th</span>
                                </div>
                                <div className="flex items-center gap-4 text-accent">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span className="text-sm font-semibold">Personalized counseling session</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-12">
                            * We value your privacy. Your contact details are safe with us and will only be used for academic communication.
                        </div>
                    </div>
                    <div className="md:col-span-3 p-12">
                        <form action="#" className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Harry Potter" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Class / Program</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all">
                                    <option>Select your class</option>
                                    <option>9th Grade</option>
                                    <option>10th Grade</option>
                                    <option>11th Grade</option>
                                    <option>12th Grade</option>
                                    <option>CA Foundation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91 00000 00000" type="tel" />
                            </div>
                            <button className="w-full bg-accent hover:bg-yellow-500 text-primary font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all text-lg" type="submit">
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
