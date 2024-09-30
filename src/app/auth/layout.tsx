import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={1795}
        className="absolute -top-[98px] -z-10"
      />
      {children}
    </main>
  );
};

export default AuthLayout;
