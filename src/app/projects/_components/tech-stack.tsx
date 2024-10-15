"use client";

import { TechStack } from "@prisma/client";
import { TechStackItem } from "./tech-stack-item";
import {
  useRouter, useSearchParams
 } from "next/navigation";
interface TechStacksProps {
  items: TechStack[];
}

export const TechStacks = ({ items }: TechStacksProps) => {
  const searchParams = useSearchParams();

  const selectedTechId = searchParams.get("techId");
  return (
    <div className="flex items-center gap-x-4 overflow-x-auto pb-2 mt-6">
      <TechStackItem
        key="all"
        label="All"
        value=""
        isSelected={!selectedTechId}
      />
      {items.map((item) => (
        <TechStackItem
          key={item.id}
          label={item.name}
          value={item.id}
          isSelected={selectedTechId === item.id}
        />
      ))}
    </div>
  );
};
