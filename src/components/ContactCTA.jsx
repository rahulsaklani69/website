import React, { useState } from 'react';

const ContactCTA = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        const form = e.target;
        const formData = new FormData(form);

        try {
            await fetch('https://script.google.com/macros/s/AKfycbwLxWQa22i0F0Dz17uN_G2Cg9dC-Oye7-MFiV7Uu4azYmuAAJ1s6s_C3gabnfPrQdSV/exec', {
                method: 'POST',
                body: formData
            });
            setStatus('Enquiry Sent Successfully!');
            form.reset();
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error submitting form', error);
            setStatus('Error sending enquiry. Please try again.');
        }
    };
    return (
        <section id="enquiry" className="py-24 bg-background-light dark:bg-slate-900">
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

                            <div className="mt-8">
                                <p className="text-sm text-slate-300 font-semibold mb-3">Connect with us directly:</p>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/thehogwartsclasses?igsh=NHI0dXJvenVmY2Vk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-transparent transition-all transform hover:scale-110">
                                        <span className="material-symbols-outlined text-2xl">camera_alt</span>
                                    </a>
                                    <a href="https://t.me/thehogwartsclasses" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-transparent transition-all transform hover:scale-110">
                                        <span className="material-symbols-outlined text-2xl">send</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-12">
                            * We value your privacy. Your contact details are safe with us and will only be used for academic communication.
                        </div>
                    </div>
                    <div className="md:col-span-3 p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                <input name="FullName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Harry Potter" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Class / Program</label>
                                <select name="ClassProgram" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all">
                                    <option value="">Select your class</option>
                                    <option value="9th Grade">9th Grade</option>
                                    <option value="10th Grade">10th Grade</option>
                                    <option value="11th Grade">11th Grade</option>
                                    <option value="12th Grade">12th Grade</option>
                                    <option value="CA Foundation">CA Foundation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                                <input name="PhoneNumber" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91 00000 00000" type="tel" />
                            </div>
                            <button disabled={status === 'Submitting...'} className="w-full bg-accent hover:bg-yellow-500 text-primary font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all text-lg disabled:opacity-75" type="submit">
                                {status === 'Submitting...' ? 'Sending...' : 'Send Enquiry'}
                            </button>
                            {status === 'Enquiry Sent Successfully!' && <p className="text-green-600 font-bold text-center mt-2">{status}</p>}
                            {status === 'Error sending enquiry. Please try again.' && <p className="text-red-600 font-bold text-center mt-2">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
