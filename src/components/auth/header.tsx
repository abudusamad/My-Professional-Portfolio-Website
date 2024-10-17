import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex  items-center  space-x-4", font.className)}>
        <Image src="/logo.png" alt="logo" height={45} width={45}/>
        Abudu
      </h1>
      <p className="text-muted-foreground text-lg">{label}</p>
    </div>
  );
};
