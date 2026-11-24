import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
    return (
        /* Mobile: bottom-5 right-4 gap-3 shadow-lg glow; Desktop: bottom-8 right-8 gap-4 */
        <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col gap-3 md:gap-4">
            {/* Call Button — Mobile: w-12 h-12 shadow-lg glow; Desktop: w-14 h-14 */}
            <a
                href="tel:9246564433"
                className="w-12 h-12 md:w-14 md:h-14 bg-medical-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-medical-500/40 floating-call-pulse hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group relative"
                aria-label="Call Now"
            >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute right-full mr-3 md:mr-4 bg-gray-900/90 text-white text-sm font-bold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap backdrop-blur-sm">
                    Call Us
                </span>
            </a>

            {/* WhatsApp Button — Mobile: w-12 h-12 shadow-lg glow; Desktop: w-14 h-14 */}
            <a
                href="https://wa.me/919246564433"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 floating-wa-pulse hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 group relative"
                aria-label="WhatsApp Us"
            >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute right-full mr-3 md:mr-4 bg-gray-900/90 text-white text-sm font-bold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap backdrop-blur-sm">
                    WhatsApp Us
                </span>
            </a>
        </div>
    );
};

export default FloatingButtons;
