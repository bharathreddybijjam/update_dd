import React from 'react';
import Image from 'next/image';
import Container from './Container';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const credentials = [
        "MD in Ayurveda",
        "MS in Sexuality & Sexual Counselling",
        "Specialization in Male Sexual Disorders & fertility problems",
        "25+ Years of Clinical Experience",
        // "South India's Renowned Sexologist",
        "Expert in Vajikarna Therapies",
        //"Successfully treated 50,000+ patients"
    ];

    return (
        <Container id="about" className="bg-slate-50/60">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Left: Doctor Image */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <div className="relative group">
                        <div className="absolute -inset-3 bg-medical-100/60 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition duration-700"></div>
                        {/* Mobile: aspect-[3/4] + object-contain = full image, no cropping; Desktop: aspect-[4/5] + object-cover */}
                        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200 group-hover:-translate-y-1 transition-transform duration-300">
                            <Image
                                src="/about.avif"
                                alt="Dr. M. Narasimha"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain sm:object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-medical-50 hidden md:block animate-bounce-slow">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-medical-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    25+
                                </div>
                                <div>
                                    <p className="text-[13px] uppercase tracking-wider text-gray-500 font-bold">Years of</p>
                                    <p className="text-base font-bold text-gray-900">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2">
                    <span className="inline-block px-4 py-1.5 bg-ayurveda-50 text-ayurveda-700 text-sm md:text-[15px] font-bold rounded-full mb-4 lg:mb-6 border border-ayurveda-100">
                        Meet Our Specialist
                    </span>
                    {/* Mobile: text-2xl font-semibold; Desktop: text-5xl font-extrabold */}
                    <h2 className="text-2xl md:text-5xl font-semibold md:font-extrabold text-gray-900 mb-4 lg:mb-6 leading-tight pl-4 border-l-4 border-medical-600 rounded-sm">
                        Dr. M. Narasimha <br />
                        <span className="text-medical-600 text-base md:text-3xl font-semibold md:font-bold">MD(Ayur) and MS(Sex) | 25+ Years Experience</span>
                    </h2>

                    {/* Mobile: text-sm font-semibold */}
                    <p className="text-base md:text-[19px] text-medical-800 font-semibold mb-4 lg:mb-6">
                        Ayurvedic Sexual Health & Male fertility Doctor in Hyderabad
                    </p>

                    {/* Paragraph spacing: space-y-4 */}
                    <div className="space-y-4 text-gray-600 leading-relaxed mb-6 lg:mb-10 text-base md:text-[18px]">
                        <p>
                            Dr. M. Narasimha is one of Hyderabad's most trusted Ayurvedic Sexual Health and Male fertility Doctor, with over 25 years of experience in treating male sexual health and reproductive concerns.
                        </p>
                        <p>
                            He is widely recognized in South India for his focused expertise in male sexual disorders, infertility treatment, and comprehensive Vajikarna therapies. Dr. M. Narasimha holds BAMS and MD in Ayurveda, with additional specialization in MS – Sexuality & Sexual counselling.
                        </p>
                        <p>
                            He has extensive clinical experience in counselling and treating patients with male reproductive health concerns, including erectile dysfunction, low sperm count (oligospermia), azoospermia, premature ejaculation, and other male reproductive conditions.
                        </p>
                    </div>

                    {/* Credential pills: rounded-full px-4 py-2 text-xs; min-h-[44px] tap area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                        {credentials.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm md:text-[16px] text-medical-800 font-semibold bg-white/90 border border-medical-100 rounded-2xl px-4 py-2 shadow-sm min-h-[44px] transition-all duration-200 hover:shadow-md hover:border-medical-200">
                                <CheckCircle2 className="w-4 h-4 text-ayurveda-500 flex-shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
