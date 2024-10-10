"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

interface TechStackItemProps {
  label: string;
  value?: string;
}

export const TechStackItem = ({ label, value }: TechStackItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-4 text-sm border border-slate-200 rounded-md flex items-center gap-x-1 hover:bg-pink-600 transition",
        isSelected &&
          "border-sky-700  bg-pink-600"
      )}
      type="button"
    >
      <div className="truncate">{label}</div>
    </button>
  );
};
