"use client";


import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  link?: string | null;
  title: string;
  imageUrl: string;
}

const ProjectCard = ({ link, title, imageUrl }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Link href={`${link}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-4 h-full mt-6 ">
        <div className="relative w-full aspect-video rounded-md overflow-hidden group-hover:scale-110 transform duration-300 ease-in-out border-[#25213b]">
          <Image fill className="object-cover" alt="title" src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-pink-500 transition line-clamp-2">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
