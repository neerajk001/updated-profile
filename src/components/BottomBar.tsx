// components/BottomBar.tsx
'use client';

import Image from 'next/image';


const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/neeraj-kushwaha-a17b2424b/', // 🔁 replace with actual links
    src: '/icons8-linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://github.com/neerajk001',
    src: '/icons8-github-logo.svg',
    alt: 'GitHub',
  },
  {
    href: 'https://x.com/kushwaha_012', // or X profile
    src: '/icons8-x.svg',
    alt: 'X',
  },
  {
    href: 'mailto:workwithneeraj.01@gmail.com',
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