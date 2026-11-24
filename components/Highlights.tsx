import React from 'react';
import { ShieldCheck, Award, Users, Stethoscope } from 'lucide-react';
import Container from './Container';

const highlights = [
    {
        icon: <ShieldCheck className="w-6 h-6 sm:w-10 sm:h-10 text-medical-600" />,
        title: "Safe & Effective",
        description: "Pure Ayurvedic treatments with Effective & long-term results."
    },
    {
        icon: <Award className="w-6 h-6 sm:w-10 sm:h-10 text-ayurveda-600" />,
        title: "25+ Years Experience",
        description: "Decades of clinical expertise in male sexual health and fertility disorders."
    },
    // {
    //     icon: <Users className="w-6 h-6 sm:w-10 sm:h-10 text-medical-600" />,
    //     title: "50,000+ Happy Patients",
    //     description: "A legacy of trust and successful treatments across South India."
    // },
    {
        icon: <Stethoscope className="w-6 h-6 sm:w-10 sm:h-10 text-ayurveda-600" />,
        title: "Advanced Therapies",
        description: "Integrated approach combining ancient wisdom with modern diagnostic insights."
    }
];

const Highlights = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile: gap-4; Desktop: gap-8 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            /* Glass-feel: bg-white/80 backdrop-blur-sm; mobile p-4 rounded-2xl; hover:shadow-md */
                            className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl md:rounded-3xl border border-medical-100/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Mobile: w-10 h-10; Desktop: w-16 h-16 */}
                            <div className="mb-3 md:mb-6 bg-white w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                {item.icon}
                            </div>
                            {/* Mobile: text-base font-semibold; Desktop: text-xl font-bold */}
                            <h3 className="text-base md:text-xl font-semibold md:font-bold text-gray-900 mb-1.5 md:mb-3">{item.title}</h3>
                            {/* Mobile: text-xs; Desktop: text-sm */}
                            <p className="text-gray-500 leading-relaxed text-base md:text-[17px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlights;
