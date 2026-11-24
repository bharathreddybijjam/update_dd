"use client";

import React from 'react';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen min-h-[700px] w-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden flex items-center">
            {/* Animated background orbs */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="w-20 h-20 rounded-full border-4 border-medical-200" />
                </div>
                <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-16 h-16 rounded-full border-4 border-ayurveda-200" />
                </div>
                <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="w-24 h-24 rounded-full border-4 border-medical-100" />
                </div>
                <div className="absolute top-1/2 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
                    <div className="w-12 h-12 rounded-full border-4 border-ayurveda-100" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-12">

                    {/* Left Side: Doctor Image */}
                    <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1 mb-2 lg:mb-0 relative">
                        {/* Radial glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-blue-200/30 blur-3xl" />
                        </div>
                        {/* Mobile: max-h-[240px] + shadow-lg; Desktop: aspect-square up to 500px */}
                        <div
                            className="relative w-[75%] sm:w-[90%] max-h-[240px] sm:max-h-none aspect-square max-w-[500px] transition-transform duration-300"
                            style={{ animation: 'heroEnter 0.8s ease-out forwards, heroFloat 4s ease-in-out 0.8s infinite' }}
                        >
                            <Image
                                src="/hero.avif"
                                alt="Dr. Narasimha Ayurvedic Clinic"
                                fill
                                priority
                                sizes="(max-width: 768px) 75vw, 45vw"
                                className="object-contain mx-auto drop-shadow-lg sm:drop-shadow-none"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-medical-100 mb-3 lg:mb-6 animate-slide-up">
                            <span className="w-2 h-2 bg-medical-500 rounded-full animate-pulse" />
                            <span className="text-sm md:text-[15px] font-bold text-medical-800 uppercase tracking-widest">Advanced Ayurvedic Care</span>
                        </div>

                        {/* Heading — mobile: text-3xl font-semibold leading-tight */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold sm:font-extrabold text-gray-900 leading-tight mb-3 lg:mb-6 animate-slide-up delay-75">
                            Dr. Narasimha's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-ayurveda-600">
                                Ayurvedic Sexual & Fertility Clinic
                            </span>
                        </h1>

                        {/* Subheading — mobile: text-sm leading-relaxed */}
                        <p className="text-sm sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-5 lg:mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up delay-150">
                            Trusted Ayurvedic Solutions for Male Sexual Health & Fertility.
                            Over 25 years of excellence in specialized clinical care.
                        </p>

                        {/* Buttons: flex-col on mobile, flex-row on sm+ */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 animate-slide-up delay-200">
                            <a
                                href="https://wa.me/919246564433"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm sm:text-base font-bold rounded-xl shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span>Book Appointment</span>
                            </a>

                            <a
                                href="tel:9246564433"
                                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-white text-medical-700 border-2 border-medical-200 text-sm sm:text-base font-bold rounded-xl shadow-sm hover:bg-medical-600 hover:text-white hover:border-medical-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Call Now: 9246564433</span>
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-4 lg:mt-6 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm md:text-[15px] text-gray-500 animate-slide-up">
                            <span className="flex items-center gap-1"><span className="text-ayurveda-600 font-bold">✔</span> 25+ Years Experience</span>
                            {/* <span className="flex items-center gap-1"><span className="text-ayurveda-600 font-bold">✔</span> 50,000+ Happy Patients</span> */}
                            <span className="flex items-center gap-1"><span className="text-ayurveda-600 font-bold">✔</span> 100% Confidential</span>
                        </div>
                        {/* <p className="mt-2 text-xs text-medical-600 font-semibold italic text-center lg:text-left animate-slide-up">
                            Limited appointments available daily.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
