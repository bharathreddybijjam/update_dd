import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "600", "700", "800"],
});

const siteUrl = "https://drnarasimhaclinic.com";

export const metadata: Metadata = {
    title: "Dr. Narasimha's Ayurvedic Sexual & Fertility Clinic | Hyderabad",
    description: "Dr. M. Narasimha — Hyderabad's most trusted Ayurvedic Sexologist & Male Infertility Specialist. 25+ years experience. 50,000+ patients treated. Book confidential consultation today.",
    keywords: [
        "Ayurvedic Sexologist Hyderabad",
        "Male Infertility Specialist",
        "Erectile Dysfunction Treatment",
        "Premature Ejaculation",
        "Low Sperm Count",
        "Azoospermia",
        "Dr. Narasimha",
        "Ayurvedic Clinic Hyderabad",
    ],
    authors: [{ name: "Dr. M. Narasimha's" }],
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Dr. Narasimha's Ayurvedic Sexual & Fertility Clinic | Hyderabad",
        description: "Trusted Ayurvedic solutions for Male Sexual Health & Fertility. 25+ years of clinical excellence.",
        siteName: "Dr. Narasimha Ayurvedic Clinic",
        images: [{ url: `${siteUrl}/logo.jpg`, width: 1200, height: 630, alt: "Dr. Narasimha Ayurvedic Clinic" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dr. Narasimha's Ayurvedic Sexual & Fertility Clinic",
        description: "25+ years of expert Ayurvedic care for male sexual health & fertility. Hyderabad. Book today.",
        images: [`${siteUrl}/logo.jpg`],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "S.B. Ayurvedic Speciality Clinic - Dr. Narasimha",
    description: "Ayurvedic Sexual Health and Male Infertility Specialist Clinic in Hyderabad",
    url: siteUrl,
    telephone: "+919246564433",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No 11 B, 13-1-208/1, Balaji Swarnapur, Opposite Manasa Eye Hospital, Mothinagar",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500018",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "17.4298488",
        longitude: "78.4600795",
    },
    medicalSpecialty: [
        "Male Sexual Health",
        "Infertility Treatment",
        "Ayurvedic Medicine",
    ],
    priceRange: "$$",
    areaServed: "South India",
    sameAs: [],
    founder: {
        "@type": "Physician",
        name: "Dr. M. Narasimha",
        description: "BAMS, MD Ayurveda, Specialist in Sexual Disorders & Counseling",
        medicalSpecialty: "Male Sexual Health & Infertility",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased text-gray-900 leading-relaxed">
                {children}
            </body>
        </html>
    );
}
