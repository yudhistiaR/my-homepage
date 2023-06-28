import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerLink = [
    {
        id: 1,
        name: 'github',
        src: '/github.svg',
        href: 'https://github.com/isKazumi',
    },
    {
        id: 2,
        name: 'instagram',
        src: '/instagram.svg',
        href: 'https://www.instagram.com/devaslife_20/',
    },
    {
        id: 3,
        name: 'whatsaap',
        src: '/whatsapp.svg',
        href: 'https://wa.link/una9gb',
    },
    {
        id: 4,
        name: 'gmail',
        src: '/gmail.svg',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yudhistia110@gmail.com&su=SUBJECT&body=BODY',
    },
    {
        id: 5,
        name: 'facebook',
        src: '/facebook.svg',
        href: 'https://www.facebook.com/yudhistia.rahman.31',
    },
];

const MediaLink = () => {
    return (
        <div className="hidden md:flex">
            {footerLink.map(link => (
                <Link key={link.id} href={link.href} target="_blank">
                    <Image
                        src={link.src}
                        width={30}
                        height={30}
                        alt={link.name}
                        className="px-1"
                    />
                </Link>
            ))}
        </div>
    );
};

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="mx-auto py-2 md:container flex items-center md:justify-between justify-center text-sm">
            <div>© {year} Yudhistia Rahman. All Rights Reserved.</div>
            <MediaLink />
        </footer>
    );
};

export default Footer;
