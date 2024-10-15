"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <div
      className="hidden md:flex items-center space-x-4 justify-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image height={45} width={45} alt="logo" src="/logo.png" />
      <p>Abudu Samadu</p>
    </div>
  );
};
