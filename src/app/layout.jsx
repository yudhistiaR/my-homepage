'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
                        className="h-full w-full items-center"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
                {/* {route !== '/' ? <Footer /> : ''} */}
            </body>
        </html>
    );
}
