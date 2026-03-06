import React from 'react';

const Courses = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-dark" id="courses">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-primary dark:text-white">Our Enchanted Courses</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Tailored programs designed to transform your academic journey into a success story.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Course Card 1 */}
                    <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-accent">
                        <div className="w-full h-48 rounded-xl bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALejzNuIBtbHb2rEm2d6V8ElZBw0xuQlYJ8karMDgcUfZtfzauMQuE4g9oP3k4ah2febExsCvv7CuX5vM_mCB6wufb1OhAOK7eA4VbyN95mjYEyKKphgtvjvew2AMnb7jX8PT7HWpVd2xEfMSAZbEfe7BPHd7Pc1R-zg0S0tcSBjGf2AnDg1gl5E_jLEVk_4jjMh7dTnTicO6l2ZZbK_eOAdTo5pZx0WfQnPZw8oGcV-v_H5NKgFtTvV50-UtSzPu4vJBfIphLcLE')" }}>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">9th &amp; 10th Grade</h3>
                            <p className="text-slate-600">Vibrant foundations for school toppers. Building the core logic required for future competitive exams.</p>
                        </div>
                        <button className="mt-auto w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Explore Curriculum</button>
                    </div>
                    {/* Course Card 2 */}
                    <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-primary">
                        <div className="w-full h-48 rounded-xl bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3stERNxiUI2P4-HVHB0mMQlnXuy5DEd-Hn8hHrXV5oPx576yw45pJ0_Y7NWikmvNv9JBHx11prOthPc6EKe0JDxdtfHbCCpLIeeTmo06yCSSS34BaO7_X0OU1U3qqynAP-B1sHoSI9iFKB24Mf6mbZw0QlIt96O_-Q2Ar2TM3Q6mQJv0NHWpnxiuUp0_nrnmBvVd_fm3gQEe3aT0eSTTadWz0TyiljTAR85eWm5z3r-SsvPnCRw4Zxc_s9IkKtWL0YLmHQ8x7bBw')" }}>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">11th &amp; 12th Grade</h3>
                            <p className="text-slate-600">Conceptual mastery for board excellence. In-depth analysis of Physics, Chemistry, and Advanced Mathematics.</p>
                        </div>
                        <button className="mt-auto w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Explore Curriculum</button>
                    </div>
                    {/* Course Card 3 */}
                    <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-slate-900">
                        <div className="w-full h-48 rounded-xl bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9OMha9C0XX5z0agAdD1acsr4GQSNlufGbtcbRN50_tKoLaLi0wLZpB0UCClAY3ndU7wYgtXDHIAfpULH4wrvNLpbHbN2OMuY8IALQxggqYDZCJMTFw3lXoiLwpgj23BfaRhEDwo0hYidJHXPDBOgbSvZFJYVb6ZK3mgePAg1Mw92LuMLdMJyP5lBod_BnUievna92ASVDwSZfV8CxGX0PSYBxddvj3kgx80_IB3rQ8x62HHGeHYHTx-I9_udYxsnKE3j-AaQtpkM')" }}>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">CA Foundation</h3>
                            <p className="text-slate-600">Sleek &amp; professional coaching for future CAs. Focused training on mercantile law and accounting principles.</p>
                        </div>
                        <button className="mt-auto w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Explore Curriculum</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
