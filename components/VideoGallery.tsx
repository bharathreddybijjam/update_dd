"use client";

import React, { useState } from 'react';
import Container from './Container';
import { X } from 'lucide-react';

// ── Video data ────────────────────────────────────────────────────────────────
const videos = [
    {
        id: 1,
        videoId: "KW7gJQhuv9U",
        title: "Patient Testimonial – 1",
    },
    {
        id: 2,
        videoId: "JhoPeNg5JLc",
        title: "Patient Testimonial – 2",
    },
    {
        id: 3,
        videoId: "f8Gngy9-hyA",
        title: "Patient Testimonial – 3",
    },
];

const thumbUrl = (videoId: string) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const youtubeUrl = (videoId: string) =>
    `https://www.youtube.com/watch?v=${videoId}`;

// ── Component ─────────────────────────────────────────────────────────────────
const VideoGallery = () => {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const openModal = (videoId: string) => setActiveVideoId(videoId);
    const closeModal = () => setActiveVideoId(null);

    return (
        <>
            <Container id="video-gallery" className="bg-medical-50/20">
                {/* Section heading — mirrors Gallery */}
                <div className="text-center mb-8 md:mb-16">
                    {/* <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-3">
                       Patient Stories
                    </h2> */}
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Videos
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                        Watch Dr. Narasimha’s expert interviews and media features on male health and fertility care.
                    </p>
                </div>

                {/* Grid — same breakpoints as gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-white active:scale-95"
                            onClick={() => openModal(video.videoId)}
                        >
                            {/* Thumbnail */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={thumbUrl(video.videoId)}
                                alt="Patient testimonial video Dr Narasimha Clinic"
                                loading="lazy"
                                className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/90 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300 group-hover:scale-110">
                                    {/* Triangle play icon */}
                                    <svg
                                        className="w-6 h-6 text-medical-600 ml-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </Container>

            {/* ── Modal with embedded YouTube iframe ── */}
            {activeVideoId && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
                    onClick={closeModal}
                >
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 z-10"
                        aria-label="Close video"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* iframe wrapper — stop propagation so clicking iframe doesn't close modal */}
                    <div
                        className="relative w-[90vw] max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                            title="Patient testimonial video Dr Narasimha Clinic"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>

                    {/* Fallback: open in new tab */}
                    <a
                        href={youtubeUrl(activeVideoId)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-6 text-white/70 text-xs hover:text-white underline transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Open on YouTube ↗
                    </a>
                </div>
            )}
        </>
    );
};

export default VideoGallery;
