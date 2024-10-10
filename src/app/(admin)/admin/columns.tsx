"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";
import { Project } from "@prisma/client";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {Badge} from "@/components/ui/badge";
import { useRouter } from "next/navigation";


export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "isPublished",
    header: "Published",
    cell: ({ row }) => {
      const isPublished = row.original.isPublished;
      return (
        <Badge variant={isPublished ? "default" : "destructive"}>
          {isPublished ? "Published" : "Draft"}
        </Badge>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
     const project = row.original;
     const router = useRouter();

     const handleEdit = () => {
       router.push(`/admin/projects/${project.id}`);
     };


      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleEdit}>
              Edit Project
            </DropdownMenuItem>
        
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
