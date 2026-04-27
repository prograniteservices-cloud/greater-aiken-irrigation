import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-heading",
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Greater Aiken Irrigation LLC | Premier Irrigation & Landscaping",
        template: "%s | Greater Aiken Irrigation"
    },
    description: "Established irrigation expertise for residential estates and commercial grounds. Specializing in botanical gardens, athletic fields, and reliable system maintenance in Aiken, SC.",
    keywords: ["irrigation system aiken sc", "garden sprinkler systems", "athletic field irrigation", "Greater Aiken Irrigation", "Travis R. Sowell", "irrigation maintenance"],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Greater Aiken Irrigation LLC',
        description: '40 years of irrigation expertise in Aiken, SC.',
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Greater Aiken Irrigation LLC",
    "description": "Established irrigation expertise for residential estates and commercial grounds.",
    "telephone": "912-266-9697",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aiken",
        "addressRegion": "SC",
        "postalCode": "29803",
        "addressCountry": "US"
    },
    "areaServed": [
        "Aiken SC",
        "Augusta GA",
        "North Augusta SC",
        "Evans GA",
        "Grovetown GA",
        "Martinez GA"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased min-h-screen flex flex-col font-body">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
