'use client';

import React from 'react';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Our Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Invest Opportunities', href: '/investment' },
  ];

  return (
    <footer className="w-full bg-[#F8F9FA] text-slate-800 border-t border-gray-200/60 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-5">
            <h3 className="font-extrabold text-sm tracking-wider text-black uppercase">
              COLYCIA COUTURE
            </h3>
            <div className="flex items-center space-x-3">
              {/* X / Twitter Icon */}
              <a href="#" className="w-9 h-9 bg-[#F49200] rounded-full flex items-center justify-center text-white transition hover:opacity-90 shadow-sm" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* TikTok Icon */}
              <a href="#" className="w-9 h-9 bg-[#F49200] rounded-full flex items-center justify-center text-white transition hover:opacity-90 shadow-sm" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.76 4.05 1.15.99 2.67 1.45 4.18 1.48v3.83c-1.39-.07-2.77-.54-3.89-1.42-.48-.38-.89-.84-1.23-1.36v6.94c0 1.63-.38 3.28-1.25 4.63-1.26 1.91-3.52 3.12-5.87 3.09-2.6-.04-5.02-1.74-5.88-4.19-.94-2.73.14-5.95 2.62-7.27.76-.4 1.6-.64 2.46-.71v3.93c-.71.1-1.42.43-1.89.97-.73.84-.79 2.15-.14 3.07.61.83 1.7 1.25 2.7 1.05 1.01-.2 1.77-1.11 1.84-2.14.04-1.41.02-14.17.02-14.17z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="w-9 h-9 bg-[#F49200] rounded-full flex items-center justify-center text-white transition hover:opacity-90 shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" className="w-9 h-9 bg-[#F49200] rounded-full flex items-center justify-center text-white transition hover:opacity-90 shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm tracking-wider text-black uppercase">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-[14px] text-slate-600 font-normal">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#F49200] transition duration-200 block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="font-extrabold text-sm tracking-wider text-black uppercase">
              CONTACT US
            </h3>
            <div className="space-y-3 text-[14px] text-slate-600 font-normal leading-relaxed">
              <p>
                <span className="font-medium text-slate-800">Address:</span> Shop F02 Pathfield Mall, 4th Avenue Gwamrimpa Abuja, Nigeria.
              </p>
              <p>
                <span className="font-medium text-slate-800">Phone :</span>{' '}
                <span className="font-bold text-black group-hover:text-[#F49200]">+2349060142148</span>{' '}
                <span className="text-xs text-gray-500 font-light">(Calls& Whatsapp)</span>
              </p>
              <p>
                <span className="font-medium text-slate-800">Email:</span> colyciacouture@gmail.Com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="w-full border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs md:text-[13px] text-slate-600 font-normal">
          © 2026 Colycia Couture. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}