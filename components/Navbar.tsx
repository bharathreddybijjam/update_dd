"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Speciality', href: '#speciality' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        /* Added border-b border-gray-100 for subtle bottom border on mobile */
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-100/80 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-md md:py-[11px] py-3'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="#home" className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80">
                            {/* Mobile: h-9; Desktop: h-[48px] */}
                            <div className="relative h-9 md:h-[48px] w-auto aspect-square flex-shrink-0">
                                <Image
                                    src="/logo.jpg"
                                    alt="Dr. Narasimha Ayurvedic Sexual & Fertility Clinic Logo"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                {/* Mobile: text-base font-semibold; Desktop: text-xl font-bold */}
                                <span className="text-base md:text-xl font-semibold md:font-bold text-gray-900 leading-tight">Dr. Narasimha's</span>
                                {/* Mobile: text-[10px]; Desktop: text-[11px] */}
                                <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-medical-600 font-semibold leading-tight">Ayurvedic Sexual & Fertility Clinic</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group hover:opacity-90"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button — min 44px tap target */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-gray-500 hover:text-medical-600 hover:bg-medical-50 focus:outline-none transition-all duration-200 active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-3 pt-2 pb-4 bg-white/98 backdrop-blur-sm border-t border-gray-100 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            /* min-h-[44px] for proper touch target */
                            className="text-gray-700 hover:text-medical-600 hover:bg-medical-50 flex items-center px-4 min-h-[44px] text-sm font-medium border-b border-gray-50 last:border-0 rounded-lg transition-all duration-200 active:scale-95"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
