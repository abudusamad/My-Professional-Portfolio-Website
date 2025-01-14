import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


import { personalData } from "@/data/personal-data";


export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={1795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="flex flex-col max-w-3xl items-center justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Hello, This is <br />
          <span className=" text-pink-500">{personalData.name}</span>
          {` , I'm a Professional `}
          <span className=" text-[#16f2b3]">{personalData.designation}</span>.
        </h1>

        {/* Social Links */}
      

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r to-pink-500 from-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold"
            role="button"
          >
            <span>Contact me</span>
            <RiContactsFill size={16} />
          </Link>

          <Link
            href="/"
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

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Column */}

        <div className=" relative flex items-center">
          <div className="w-[65%] h-full absolute left-0 top-0 z-[-1] transition-all duration-400 ease-in-out clip-path-custom  bg-[#16f2b3]" />
          <div className=" ml-16 h-[90%] w-[68%] bg-black rounded-[var(--br-sm-2)] transition-all duration-400 ease-in-out">
            <Image
              className=" object-cover transition-all duration-400 ease-in-out grayscale hover:grayscale-0"
              src="/mascot.jpeg"
              alt="image description"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Column */}

        <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
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
