"use client";

import React, { useState } from 'react';
import Container from './Container';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const WHATSAPP_NUMBER = "919246564433";

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim() || !phone.trim() || !message.trim()) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const text = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
        window.open(url, "_blank");
    };

    return (
        <Container id="contact">
            <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left: Contact Info — Mobile: p-6; Desktop: p-12 lg:p-16 */}
                    <div className="w-full lg:w-2/5 bg-gradient-to-br from-medical-600 to-medical-700 p-6 md:p-12 lg:p-16 text-white text-center lg:text-left">
                        {/* Mobile: text-2xl; Desktop: text-3xl */}
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-8">Contact Information</h3>
                        {/* Mobile: text-sm; Desktop: text-lg */}
                        <p className="text-medical-100 mb-6 md:mb-12 text-base md:text-[18px] leading-relaxed">
                            Feel free to reach out to us for any queries or to book an appointment.
                        </p>

                        {/* Info blocks — space-y-6 */}
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-0 lg:space-x-5 group">
                                {/* Mobile: w-10 h-10; Desktop: w-12 h-12 */}
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-200 flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-xl mb-0.5">Dr. Narasimha's Ayurvedic Speciality Clinic</h4>
                                    <p className="text-medical-100 text-base md:text-[17px] leading-relaxed">
                                        Plot No 11 B, 13-1-208/1<br /> Balaji Swarnapur, Opposite Manasa <br />Eye Hospital, Mothinagar,<br /> Hyderabad-500018, Telangana
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-0 lg:space-x-5 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-200 flex-shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-xl mb-0.5">Phone Number</h4>
                                    <a href="tel:9246564433" className="text-xl md:text-2xl font-extrabold text-white hover:text-medical-100 transition-colors duration-200 tracking-wide">
                                        9246564433
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-0 lg:space-x-5 group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-200 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-xl mb-0.5">Clinic Timings</h4>
                                    <p className="text-medical-100 text-base md:text-[17px] leading-relaxed">
                                        Monday-Saturday: 11 AM to 8 PM
                                    </p>
                                    <p className="text-medical-100 text-base md:text-[17px] leading-relaxed">
                                        Sunday: 11 AM to 2 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form — Mobile: p-6; Desktop: p-12 lg:p-16 */}
                    <div className="w-full lg:w-3/5 p-6 md:p-12 lg:p-16">
                        {/* Mobile: text-xl; Desktop: text-3xl */}
                        <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-1.5">Book Your Confidential Consultation Today</h3>
                        <p className="text-xs md:text-sm text-medical-600 font-semibold mb-5 md:mb-8 flex items-center gap-1">
                            {/* <span>🔒</span> Limited appointments available daily. */}
                        </p>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-1.5">Full Name</label>
                                    {/* Mobile: py-3 text-sm rounded-xl shadow-sm; focus:ring-2 focus:ring-blue-400 */}
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 outline-none text-base"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-base font-bold text-gray-700 mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 outline-none text-base"
                                        placeholder="9876543210"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-base font-bold text-gray-700 mb-1.5">Your Message</label>
                                {/* Mobile: h-24; Desktop: auto */}
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 outline-none resize-none text-base h-24 md:h-auto"
                                    placeholder="How can we help you?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Submit — w-full rounded-xl py-3 gradient */}
                            <button type="submit" className="w-full py-3 md:py-5 bg-gradient-to-r from-medical-600 via-medical-650 to-medical-700 text-white text-base font-bold rounded-xl shadow-md hover:shadow-medical-600/40 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-2.5 group">
                                <span>Submit Inquiry</span>
                                <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
