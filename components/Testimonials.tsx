import React from 'react';
import Container from './Container';
import { ExternalLink, Star } from 'lucide-react';

const testimonials = [
    {
        name: "JustDial",
        tagline: "Top Rated Ayurvedic Clinic in Hyderabad on JustDial",
        link: "https://www.justdial.com/Hyderabad/Dr-Narasimha-Opposite-Manasa-Eye-Hospital-Moti-Nagar/040PXX40-XX40-110919153854-Y7Q8_BZDET",
        color: "bg-[#ff6a00]"
    },
    {
        name: "Practo",
        tagline: "Verified Patient Reviews & Highly Recommended on Practo",
        link: "https://www.practo.com/hyderabad/doctor/dr-m-narasimha-sexologist-1",
        color: "bg-[#28328c]"
    },
    {
        name: "Google",
        tagline: "Trusted for excellence, proven by real experiences",
        link: "https://www.google.com/search?sca_esv=ae95eeef493796b7&hl=en-IN&sxsrf=ANbL-n5RHTLJFyZEZJHUu-o1Y9AEbiF9LA:1773914352527&q=dr.narasimha+reviews&uds=ALYpb_nRxf6vT_dQZOeSHicpHWPMJweTZeWI6eLB7P3_psYo7KeyixhR8rvOhGKmUUkut3yPKdKtIJKL_oD1ANMADJCOUSwLhZeL9OgP5fyYUsuRQN7qEeQSMnsS0nZXqnZZUDhDveZTLnZkwG97ABcbHYqy94aHZzEdZdcBjSvrmUf7nP3_J9FndGv140xWuHsyndAyiseYlMDiM1JgFfBSB-PV37oyr7i3hPLV9dLJLsf7UmTdnesD3Sj2_q0OugJdD5ayH0PZG_OBKyECcQ8y-TclWYuBngNYeX2yvpy0yGVj-2t-uNSsh1McQVdjTBGP_fCdbl_3xcQvUYrPK_7lhJG2U-87LcMSNVHda9OAjxpPtFF-cghwJb9B8mwiGkzgoJdpMNNWfEztcTao8w80fy8FDydahhJ6EQGsXPj52rMcluwoEz58E2LM_3NWqofkx8UO8FGP&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZwFiGUHVVvpNu2nnK4XEoqN4eNB4KEc-f1mlA2oiynEBa3NSHGFmpZiCLGjA8fo0jEcaolUjmrb2Lsc9N3M6Sc2ytzs&sa=X&ved=2ahUKEwiYpuD22auTAxXt3DgGHSGCKPcQk8gLegUIhQEQAQ&ictx=1&biw=411&bih=789&dpr=2.63",
        color: "bg-[#4285F4]"
    }
];

const Testimonials = () => {
    return (
        <Container id="testimonials">
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-sm font-bold text-medical-600 uppercase tracking-widest mb-3">Patient Trust</h2>
                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">What Our Patients Say</h3>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                    We pride ourselves on our reputation. Check out our verified reviews across major healthcare and local listing platforms.
                </p>
            </div>

            {/* Mobile: gap-4; Desktop: gap-8 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {testimonials.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        /* Glass card: bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md */
                        className="group block relative bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden active:scale-[0.98]"
                    >
                        {/* Background shape — opacity-10 */}
                        <div className={`absolute top-0 right-0 w-28 h-28 -mr-14 -mt-14 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ${item.color}`} />

                        {/* Stars — mobile text-sm */}
                        <div className="flex items-center space-x-1 mb-3 md:mb-6 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>

                        {/* Platform name */}
                        <div className="mb-2.5 md:mb-4 h-9 md:h-12 flex items-center">
                            <span className={`text-lg md:text-2xl font-black italic tracking-tighter ${item.name === 'JustDial' ? 'text-[#ff6a00]' : item.name === 'Practo' ? 'text-[#28328c]' : 'text-gray-700 font-bold not-italic'}`}>
                                {item.name === 'Google' ? (
                                    <span className="flex items-center">
                                        <span className="text-[#4285F4]">G</span>
                                        <span className="text-[#EA4335]">o</span>
                                        <span className="text-[#FBBC05]">o</span>
                                        <span className="text-[#4285F4]">g</span>
                                        <span className="text-[#34A853]">l</span>
                                        <span className="text-[#EA4335]">e</span>
                                    </span>
                                ) : item.name}
                            </span>
                        </div>

                        {/* Tagline — mobile text-xs */}
                        <p className="text-gray-600 text-xs md:text-base font-medium leading-relaxed mb-3 md:mb-6 group-hover:text-gray-900 transition-colors duration-200">
                            "{item.tagline}"
                        </p>

                        <div className="flex items-center text-xs md:text-sm font-bold text-medical-600 transition-all duration-200 hover:opacity-80">
                            <span>View Reviews</span>
                            <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                    </a>
                ))}
            </div>
        </Container>
    );
};

export default Testimonials;
