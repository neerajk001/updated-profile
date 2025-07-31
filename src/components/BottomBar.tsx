// components/BottomBar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/your-linkedin', // 🔁 replace with actual links
    src: '/icons8-linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://github.com/your-github',
    src: '/icons8-github-logo.svg',
    alt: 'GitHub',
  },
  {
    href: 'https://twitter.com/your-x', // or X profile
    src: '/icons8-x.svg',
    alt: 'X',
  },
  {
    href: 'mailto:your@email.com',
    src: '/email.png',
    alt: 'Email',
  },
];

export default function BottomBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black px-4 py-2 rounded-xl flex gap-4 border border-white z-50">
      {socialLinks.map((icon, index) => (
        <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={30}
            height={30}
            className="invert border-2 border-white rounded-md p-1 hover:scale-110 transition"
          />
        </Link>
      ))}
    </div>
  );
}
