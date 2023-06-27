'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Yudhistia - Homepage',
    author: 'Yudhistia || Kazumi',
    description: 'This is web build using next js 13,Learn',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <Navbar />
                <AnimatePresence>
                    <motion.main
                        className="mx-auto h-screen container items-center px-3 md:px-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
