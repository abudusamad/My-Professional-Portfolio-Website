"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Pencil, } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Project, TechStack } from "@prisma/client";

interface TechStackProps {
  initialData: Project;
  projectId: string;
  techStacks: TechStack[];
}

// Modify the form schema to accept an array of tech IDs
const FormSchema = z.object({
  techId: z.array(
    z.string({
      required_error: "Please select at least one technology stack.",
    })
  ),
});

export const TechStackForm = ({
  initialData,
  projectId,
  techStacks,
}: TechStackProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      techId: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await axios.patch(`/api/admin/projects/${projectId}`, values);
      toast.success("Project updated");
    
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-inherit rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Technology Stack
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Project
            </>
          )}
        </Button>
      </div>
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="techId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Technology Stack</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            field.value.length === 0 && "text-muted-foreground"
                          )}
                        >
                          {field.value.length > 0
                            ? techStacks
                                .filter((stack) =>
                                  field.value.includes(stack.id)
                                )
                                .map((stack) => stack.name)
                                .join(", ") // Display multiple selected tech stacks
                            : "Select technology stacks"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search technology stack..." />
                        <CommandList>
                          <CommandEmpty>
                            No technology stack found.
                          </CommandEmpty>
                          <CommandGroup>
                            {techStacks.map((techStack) => (
                              <CommandItem
                                value={techStack.name}
                                key={techStack.id}
                                onSelect={() => {
                                  // Toggle selection of tech stacks
                                  const isSelected = field.value.includes(
                                    techStack.id
                                  );
                                  if (isSelected) {
                                    form.setValue(
                                      "techId",
                                      field.value.filter(
                                        (id) => id !== techStack.id
                                      )
                                    );
                                  } else {
                                    form.setValue("techId", [
                                      ...field.value,
                                      techStack.id,
                                    ]);
                                  }
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value.includes(techStack.id)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {techStack.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Select the technology stacks used in this project.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </div>
  );
};
