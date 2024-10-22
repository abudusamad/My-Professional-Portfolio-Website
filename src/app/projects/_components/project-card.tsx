"use client";

import { ProjectCardSkeleton } from "@/components/loading";
import { Project } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface ProjectCardProps {
  link?: string | null;
  title: string;
  imageUrl: string;
  project: Project;
}

const ProjectCard = ({ link, title, imageUrl, project }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIfLiked = async () => {
      if (session) {
        try {
          const response = await axios.get(`/api/projects/${project.id}/like`);
          setIsLiked(response.data.liked);
        } catch (error) {
          console.error("Failed to check if liked:", error);
        }
      }
    };

    checkIfLiked();
  }, [session, project.id]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 200); // Simulate a loading delay
    return () => clearTimeout(timeoutId); // Clean up
  }, []);

  if (isLoading) {
    return <ProjectCardSkeleton />;
  }

  const handleLike = async () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    try {
      if (isLiked) {
        await axios.delete(`/api/projects/${project.id}/like`);
      } else {
        await axios.post(`/api/projects/${project.id}/like`);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Failed to like/unlike project:", error);
    }
  };

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
          <button onClick={handleLike}>{isLiked ? "Unlike" : "Like"}</button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
