"use client";

import { TechStack } from "@prisma/client";
import { TechStackItem } from "./tech-stack-item";
import { Suspense } from "react";
import { TechStackItemSkeleton } from "@/components/loading";

interface TechStacksProps {
  items: TechStack[];
}

export const TechStacks = ({ items }: TechStacksProps) => {
  return (
    <div className="flex items-center gap-x-4 overflow-x-auto pb-2 mt-6">
      {items.map((item) => (
        <TechStackItem key={item.id} label={item.name} value={item.id} />
      ))}
    </div>
  );
};
