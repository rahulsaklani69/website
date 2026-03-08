import React, { useState } from 'react';

const coursesData = [
    {
        id: 1,
        title: "9th & 10th Grade",
        shortDesc: "Vibrant foundations for school toppers. Building the core logic required for future competitive exams.",
        bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALejzNuIBtbHb2rEm2d6V8ElZBw0xuQlYJ8karMDgcUfZtfzauMQuE4g9oP3k4ah2febExsCvv7CuX5vM_mCB6wufb1OhAOK7eA4VbyN95mjYEyKKphgtvjvew2AMnb7jX8PT7HWpVd2xEfMSAZbEfe7BPHd7Pc1R-zg0S0tcSBjGf2AnDg1gl5E_jLEVk_4jjMh7dTnTicO6l2ZZbK_eOAdTo5pZx0WfQnPZw8oGcV-v_H5NKgFtTvV50-UtSzPu4vJBfIphLcLE')",
        borderColor: "border-accent",
        syllabus: (
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div><span className="font-bold text-slate-800 dark:text-white">9th Grade:</span> Maths: Number Systems to Statistics | Science: Matter to Food Resources.</div>
                <div><span className="font-bold text-slate-800 dark:text-white">10th Grade:</span> Maths: Real Numbers to Probability | Science: Chemical Reactions to Environment.</div>
            </div>
        )
    },
    {
        id: 2,
        title: "11th & 12th Grade",
        shortDesc: "Conceptual mastery for board excellence. In-depth analysis of Physics, Chemistry, and Advanced Mathematics.",
        bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3stERNxiUI2P4-HVHB0mMQlnXuy5DEd-Hn8hHrXV5oPx576yw45pJ0_Y7NWikmvNv9JBHx11prOthPc6EKe0JDxdtfHbCCpLIeeTmo06yCSSS34BaO7_X0OU1U3qqynAP-B1sHoSI9iFKB24Mf6mbZw0QlIt96O_-Q2Ar2TM3Q6mQJv0NHWpnxiuUp0_nrnmBvVd_fm3gQEe3aT0eSTTadWz0TyiljTAR85eWm5z3r-SsvPnCRw4Zxc_s9IkKtWL0YLmHQ8x7bBw')",
        borderColor: "border-primary",
        syllabus: (
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div><span className="font-bold text-slate-800 dark:text-white">Syllabus:</span> Full NCERT Mathematics chapters.</div>
            </div>
        )
    },
    {
        id: 3,
        title: "CA Foundation",
        shortDesc: "Sleek & professional coaching for future CAs. Focused training on mercantile law and accounting principles.",
        bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9OMha9C0XX5z0agAdD1acsr4GQSNlufGbtcbRN50_tKoLaLi0wLZpB0UCClAY3ndU7wYgtXDHIAfpULH4wrvNLpbHbN2OMuY8IALQxggqYDZCJMTFw3lXoiLwpgj23BfaRhEDwo0hYidJHXPDBOgbSvZFJYVb6ZK3mgePAg1Mw92LuMLdMJyP5lBod_BnUievna92ASVDwSZfV8CxGX0PSYBxddvj3kgx80_IB3rQ8x62HHGeHYHTx-I9_udYxsnKE3j-AaQtpkM')",
        borderColor: "border-slate-900",
        syllabus: (
            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div><span className="font-bold text-slate-800 dark:text-white">Syllabus:</span> Only Quantitative Aptitude (Business Maths, Logical Reasoning, and Statistics).</div>
            </div>
        )
    }
];

const Courses = () => {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 bg-white dark:bg-background-dark" id="courses">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold text-primary dark:text-white">Our Enchanted Courses</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Tailored programs designed to transform your academic journey into a success story.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <div key={course.id} className={`glass-card rounded-2xl p-8 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-all border-t-4 ${course.borderColor}`}>
                            <div className="w-full h-48 rounded-xl bg-center bg-cover" style={{ backgroundImage: course.bgImage }}></div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{course.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{course.shortDesc}</p>

                                {openId === course.id && course.syllabus}
                            </div>
                            <button
                                onClick={() => toggleAccordion(course.id)}
                                className="mt-auto w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all flex justify-center items-center gap-2"
                            >
                                <span>{openId === course.id ? 'Hide Syllabus' : 'View Syllabus'}</span>
                                <span className={`material-symbols-outlined transition-transform ${openId === course.id ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
