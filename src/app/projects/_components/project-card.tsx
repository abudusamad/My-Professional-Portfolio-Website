"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

export const ProjectCard = ({ id, title, imageUrl }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full mt-4 ">
        <div className="relative w-full aspect-video rounded-md overflow-hidden group-hover:scale-110 transform duration-300 ease-in-out">
          <Image fill className="object-cover" alt="title" src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};
