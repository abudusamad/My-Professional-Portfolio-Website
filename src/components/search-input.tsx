"use client";
import { Search, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import qs from "query-string";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  const onClear = () => {
    setValue("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const generatedUrl = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(generatedUrl);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <Input
        value={value}
        onChange={onChange}
        className="w-full md:w-[500px] rounded-lg bg-slate-100/10  focus-visible:ring-slate-200 p-4 focus:outline-none"
        placeholder="Search for a project ...."
      />
      {value && (
        <X
          className="absolute top-2/4 right-12 transform -translate-y-2/4 h-5 w-5 text-gray-500 cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        className="absolute top-2/4 right-0 transform -translate-y-2/4 bg-pink-500 hover:bg-pink-600 p-2 rounded-l-sm cursor-pointer">
        <Search className="h-5 w-5 text-white" />
      </Button>
    </form>
  );
};
