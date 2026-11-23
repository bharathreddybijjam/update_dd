import React from 'react';
import Image from 'next/image';
import Container from './Container';

const specialities = [
    {
        image: "/1.jpg",
        title: "Erectile Dysfunction",
        description: "Comprehensive Ayurvedic therapies to natural vigor and confidence."
    },
    {
        image: "/2.webp",
        title: "Premature Ejaculation",
        description: "Specialized Vajikarna treatments for performance and control."
    },
    {
        image: "/3.webp",
        title: "Low Libido",
        description: "Natural Ayurvedic formulations to revitalise desire and energy levels."
    },
    {
        image: "/4.jpg",
        title: "Low Sperm Count",
        description: "Advanced Shodhana and vajikarana therapies for spermatogenesis."
    },
    {
        image: "/5.webp",
        title: "Azoospermia",
        description: "Expert clinical management for complex male infertility challenges."
    },
    {
        image: "/6.jpeg",
        title: "Sperm Motility & Morphology",
        description: "Targeted Ayurvedic approach to sperm health and quality."
    }
];

const Specialities = () => {
    return (
        <Container id="speciality" className="bg-medical-50/30">
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-3">Our Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Specialized Clinical Care</h3>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                    We offer focused Ayurvedic solutions for a wide range of male reproductive and sexual health concerns.
                </p>
            </div>

            {/* Grid unchanged */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {specialities.map((item, index) => (
                    <div
                        key={index}
                        className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-100"
                    >
                        {/* ── Image + Overlays ── */}
                        <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
                            <Image
                                src={item.image}
                                alt={`${item.title} - Dr Narasimha Clinic`}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Title on image */}
                            <h4 className="absolute bottom-4 left-4 text-base md:text-lg font-semibold text-white drop-shadow-md leading-tight">
                                {item.title}
                            </h4>
                        </div>

                        {/* ── Description below image ── */}
                        <div className="mt-3 px-4 pb-4 md:px-5 md:pb-5">
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Specialities;
