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

const BottomBar = () => {
  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center z-50">
      <div className="flex gap-4 bg-black p-2 rounded-lg border border-white shadow-md">
        {socialLinks.map((icon, idx) => (
          <a
            key={idx}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded border border-white hover:bg-gray-800   transition-all"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={28} // ⬅️ Increase this if you want
              height={28}
              className="object-contain invert"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;