import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Specialities from "@/components/Specialities";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import PrivacyModal from "@/components/PrivacyModal";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Highlights />
            <About />
            <Specialities />
            <Testimonials />
            <Gallery />
            <VideoGallery />
            <Contact />

            {/* Footer placeholder for a complete look */}
            <footer className="bg-medical-900 text-white py-12 border-t border-medical-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl font-bold">Dr. Narasimha's</span>
                            <span className="text-medical-400 text-sm md:text-[17px] uppercase tracking-widest mt-1">Ayurvedic Sexual & Fertility Clinic</span>
                        </div>

                        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-x-8 gap-y-3 text-[15px] md:text-base font-medium text-medical-200">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#speciality" className="hover:text-white transition-colors">Speciality</a>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            <PrivacyModal />
                        </div>

                        <p className="text-medical-400 text-sm md:text-[15px]">
                            © 2026 Dr. Narasimha Clinic. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            <FloatingButtons />
        </main>
    );
}
