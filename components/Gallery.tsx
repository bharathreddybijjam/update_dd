"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './Container';


const items = [
    { id: 1, title: "Clinic Entrance", src: "/name.jpeg", alt: "Clinic Entrance - Dr Narasimha Clinic" },
    { id: 2, title: "Consultation Room", src: "/build.jpeg", alt: "Consultation Room - Dr Narasimha Clinic" },
    { id: 3, title: "Ayurvedic Medicines", src: "/clinic entrance.jpeg", alt: "Ayurvedic Medicines - Dr Narasimha Clinic" },
    { id: 4, title: "Waiting Area", src: "/waiting hall.jpeg", alt: "Waiting Area - Dr Narasimha Clinic" },
    { id: 5, title: "Treatment Room", src: "/treatment room.jpeg", alt: "Treatment Room - Dr Narasimha Clinic" },
    { id: 6, title: "Doctor at Work", src: "/wo.jpeg", alt: "Doctor at Work - Dr Narasimha Clinic" },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [visible, setVisible] = useState(false);

    // Touch swipe state
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    // Open modal
    const openModal = useCallback((index: number) => {
        setActiveIndex(index);
        setVisible(false);
        // Small delay so the DOM mounts before fade-in
        requestAnimationFrame(() => setTimeout(() => setVisible(true), 10));
    }, []);

    // Close modal
    const closeModal = useCallback(() => {
        setVisible(false);
        setTimeout(() => setActiveIndex(null), 300); // wait for fade-out
    }, []);

    // Navigate
    const goNext = useCallback(() => {
        setActiveIndex(prev => prev === null ? 0 : (prev + 1) % items.length);
    }, []);

    const goPrev = useCallback(() => {
        setActiveIndex(prev => prev === null ? 0 : (prev - 1 + items.length) % items.length);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        if (activeIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [activeIndex, closeModal, goNext, goPrev]);

    // Touch swipe handlers
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    const activeItem = activeIndex !== null ? items[activeIndex] : null;

    return (
        <>
            <Container id="gallery" className="bg-medical-50/20">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-3">Our Facility</h2>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">Clinic Gallery</h3>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        A glimpse into our professional and sterile clinic environment designed for patient comfort.
                    </p>
                </div>

                {/* Grid — unchanged: 1 col mobile → 2 tablet → 3 desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => openModal(index)}
                            className="relative w-full h-[240px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg group cursor-pointer border-2 border-white transition-all duration-300 active:scale-95"
                        >
                            {/* Image or placeholder */}
                            {item.src ? (
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-medical-100 to-medical-200 flex items-center justify-center italic text-medical-700 font-medium text-sm group-hover:scale-105 transition-transform duration-300">
                                    {item.title}
                                </div>
                            )}

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />




                        </div>
                    ))}
                </div>
            </Container>

            {/* ── Fullscreen Modal ── */}
            {activeIndex !== null && (
                <div
                    className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeModal}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 z-10"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-3 md:left-6 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Image */}
                    <div
                        className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {activeItem?.src ? (
                            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
                                <Image
                                    src={activeItem.src}
                                    alt={activeItem.alt}
                                    fill
                                    sizes="90vw"
                                    className="object-contain rounded-lg"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="w-[80vw] h-[60vh] bg-gradient-to-br from-medical-100 to-medical-200 rounded-lg flex items-center justify-center italic text-medical-700 font-medium text-lg">
                                {activeItem?.title}
                            </div>
                        )}

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-3 md:right-6 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </>
    );
};

export default Gallery;
