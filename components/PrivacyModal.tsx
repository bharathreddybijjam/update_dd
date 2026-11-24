"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const ANIMATION_MS = 200;

const PrivacyModal = () => {
    const [mounted, setMounted] = useState(false); // in the DOM
    const [visible, setVisible] = useState(false); // animated-in state
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const open = () => {
        setMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    };

    const close = () => {
        setVisible(false);
        setTimeout(() => {
            setMounted(false);
            triggerRef.current?.focus();
        }, ANIMATION_MS);
    };

    useEffect(() => {
        if (!mounted) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
                return;
            }
            // Keep focus inside the dialog
            if (e.key === 'Tab' && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])');
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted]);

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                onClick={open}
                aria-haspopup="dialog"
                className="hover:text-white transition-colors whitespace-nowrap"
            >
                Privacy &amp; Confidentiality
            </button>

            {mounted && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    onClick={close}
                >
                    <div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="privacy-modal-title"
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white text-gray-900 rounded-2xl md:rounded-3xl shadow-xl border border-medical-100 p-6 md:p-10 transition-all duration-200 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
                    >
                        <button
                            ref={closeRef}
                            type="button"
                            onClick={close}
                            aria-label="Close"
                            className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-medical-400"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-12 h-12 md:w-14 md:h-14 bg-medical-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5">
                            <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-medical-600" />
                        </div>

                        <h3 id="privacy-modal-title" className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 md:mb-4">
                            Privacy &amp; Confidentiality
                        </h3>

                        <div className="space-y-3 md:space-y-4 text-gray-600 text-base md:text-[17px] leading-relaxed">
                            <p>
                                Your privacy matters to us. We respect the confidentiality of your personal information and understand the sensitive nature of reproductive health concerns.
                            </p>
                            <p>
                                Any information you voluntarily share with us through our website or appointment requests will be handled responsibly and used only for relevant communication, appointment coordination and healthcare-related purposes, in accordance with our applicable privacy practices and legal obligations.
                            </p>
                            <p>
                                We do not intend to disclose your personal or medical information to unauthorized parties.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyModal;
