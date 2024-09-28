import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

import { personalData } from "@/data/personal-data";

const socialLinks = [
  { href: personalData.github, icon: BsGithub },
  { href: personalData.linkedIn, icon: BsLinkedin },
  { href: personalData.facebook, icon: FaFacebook },
  { href: personalData.leetcode, icon: SiLeetcode },
  { href: personalData.twitter, icon: BsTwitter },
];

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Column */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
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

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r to-pink-500 from-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold"
              role="button"
            >
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold"
              role="button"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column */}

        <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
          {/* Gradient Lines */}
          <div className="flex">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          {/* Top Section with Buttons */}
          <div className="px-4 lg:px-8 py-5">
            <div className="flex space-x-2">
              {["bg-red-400", "bg-orange-400", "bg-green-200"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full ${color}`}
                  ></div>
                )
              )}
            </div>
          </div>

          {/* Coder Profile Section */}
          <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-amber-300">Abudu Samadu</span>
                <span className="text-gray-400">&#39;,</span>
              </div>

              {/* Skills */}
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">[</span>
                {[
                  "React",
                  "NextJS",
                  "Redux",
                  "Express",
                  "NestJS",
                  "MySql",
                  "MongoDB",
                  "Docker",
                  "AWS",
                ].map((skill, index) => (
                  <span key={index}>
                    <span className="text-amber-300">{skill}</span>
                    {index < 8 && <span className="text-gray-400">, </span>}
                  </span>
                ))}
                <span className="text-gray-400">],</span>
              </div>

              {/* Coder Attributes */}
              {[
                { label: "hardWorker", value: "true" },
                { label: "quickLearner", value: "true" },
                { label: "problemSolver", value: "true" },
              ].map((attr, index) => (
                <div key={index}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    {attr.label}:
                  </span>
                  <span className="text-orange-400">{attr.value}</span>
                  <span className="text-gray-400">,</span>
                </div>
              ))}

              {/* Hireable Function */}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">(</span>
              </div>
              {["hardWorker", "problemSolver", "skills.length >= 5"].map(
                (condition, index) => (
                  <div key={index}>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">{condition}</span>
                    {index < 2 && (
                      <span className="text-amber-300">&amp;&amp;</span>
                    )}
                  </div>
                )
              )}
              <div>
                <span className="ml-8 lg:ml-16 text-gray-400">);</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{"}"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
