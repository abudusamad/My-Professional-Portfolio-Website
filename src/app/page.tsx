import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <Link href="register">
        <Button variant="destructive" size="lg">
          register
        </Button>
      </Link>
    </div>
  );
}
