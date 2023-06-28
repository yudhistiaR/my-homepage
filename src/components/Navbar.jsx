'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

const navLink = [
    {
        id: 1,
        name: 'Home',
        href: '/',
    },
    {
        id: 2,
        name: 'About',
        href: '/about',
    },
    {
        id: 3,
        name: 'Project',
        href: '/project',
    },
    {
        id: 4,
        name: 'Blog',
        href: '/blog',
    },
];

const NavList = ({ variant }) => {
    const router = usePathname();
    return navLink.map(link => {
        return (
            <Link
                variants={variant}
                href={link.href}
                key={link.id}
                className={`${
                    router === link.href ? 'bg-red-500 border-b-2' : undefined
                } p-2 hover:underline`}
            >
                {link.name}
            </Link>
        );
    });
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: 'string', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed px-3 py-2 md:py-0  md:px-0 backdrop-blur-md items-center flex justify-center z-50">
            <div className="container flex justify-between items-center">
                <div className="text-xl font-semibold items-center">
                    <Link href="/">
                        <span className="text-red-400">Ka</span>
                        zumi
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <NavList />
                </div>

                <motion.nav
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    className="menu md:hidden flex flex-col relative left-0 right-0"
                >
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2"
                    >
                        Menu
                        <motion.div
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 },
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                        >
                            <BiSolidDownArrow />
                        </motion.div>
                    </motion.button>
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                                transition: {
                                    type: 'spring',
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05,
                                },
                            },
                            closed: {
                                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                                transition: {
                                    type: 'spring',
                                    bounce: 0,
                                    duration: 0.3,
                                },
                            },
                        }}
                        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                        className="w-44 flex flex-col absolute top-6 right-4 bg-slate-800"
                    >
                        <NavList variants={itemVariants} />
                    </motion.ul>
                </motion.nav>
            </div>
        </nav>
    );
};

export default Navbar;
