import Image from "next/image";

export const Logo = () => {
    return (
      <div className="hidden md:flex items-center space-x-4 justify-center">
            <Image height={45} width={45} alt="logo" src="/logo.png" />
            <p>Abudu Samadu</p>
      </div>
    );
};
