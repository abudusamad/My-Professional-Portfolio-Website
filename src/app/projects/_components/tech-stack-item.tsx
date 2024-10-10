"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { useStartTyping } from "react-use";
import { useEffect, useState } from "react";
import { TechStackItemSkeleton } from "@/components/loading";

interface TechStackItemProps {
  label: string;
  value?: string;
}

export const TechStackItem = ({ label, value }: TechStackItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const currentTechId = searchParams.get("techId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentTechId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          techId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <TechStackItemSkeleton />;
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-4 text-sm border border-slate-200 rounded-md flex items-center gap-x-1  hover:bg-[#16f2b3] hover:border-[#16f2b3] transition",
        isSelected && "border-sky-700  bg-pink-600"
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
};