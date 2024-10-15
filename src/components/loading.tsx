import { Skeleton } from "./ui/skeleton";
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse border rounded-lg p-4 h-full mt-6">
      <div
        className={`relative w-full aspect-video rounded-md bg-gray-300 overflow-hidden ${shimmer}`}
      ></div>
      <div className="flex flex-col pt-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
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
