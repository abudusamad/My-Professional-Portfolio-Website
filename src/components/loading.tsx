import { BookOpen } from "lucide-react";
import { IconBadge } from "./icon-badge";
import { Skeleton } from "./ui/skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProjectCardSkeleton() {
  return (
    <div
      className={`${shimmer} group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full`}
    >
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Skeleton className="w-full h-full bg-slate-200 animate-pulse" />
      </div>
      <div className="flex flex-col pt-2">
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
          <Skeleton className="w-3/4 h-4 bg-slate-200 animate-pulse" />
        </div>
        <div className="text-md md:text-sm font-medium text-slate-700">
          <Skeleton className="w-3/4 h-4" />
        </div>
      </div>
    </div>
  );
}

export function TechStackItemSkeleton() {
  return (
    <div
      className={`${shimmer} py-2 px-3 text-sm border border-slate-200 rounded-md flex items-center`}
    >
      <Skeleton className="w-5 h-5 rounded-md bg-slate-200 animate-pulse" />
      <Skeleton className="w-12 h-4 ml-1 rounded-md bg-slate-200 animate-pulse" />
    </div>
  );
}
