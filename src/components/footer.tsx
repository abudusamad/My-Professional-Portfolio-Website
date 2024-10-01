import Link from "next/link";

import { personalData } from "@/data/personal-data";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { href: personalData.github, icon: BsGithub },
  { href: personalData.linkedIn, icon: BsLinkedin },
  { href: personalData.facebook, icon: FaFacebook },
  { href: personalData.leetcode, icon: SiLeetcode },
  { href: personalData.twitter, icon: BsTwitter },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#25213b]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-8 lg:px-8">
        <div className="mt-4 flex justify-center space-x-10">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Icon size={30} />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
