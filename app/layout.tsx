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
    description: "Established irrigation expertise for residential estates and commercial grounds. Specializing in golf courses, flower gardens, and reliable system maintenance in Aiken, SC.",
    keywords: ["irrigation system aiken sc", "golf course irrigation", "garden sprinkler systems", "Greater Aiken Irrigation", "Travis R. Sowell", "irrigation maintenance"],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Greater Aiken Irrigation LLC',
        description: '40 years of irrigation expertise in Aiken, SC.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased min-h-screen flex flex-col font-body">
                {children}
            </body>
        </html>
    );
}
