import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarImgProps {
  src?: string | undefined | null;
  alt?: string;
  onClick?: () => void;
  className?: string;
}

export const AvatarImg = ({ src, alt, onClick, className }: AvatarImgProps) => {
  return (
    <Avatar onClick={onClick}>
      <AvatarImage
        src={src || "/placeholder.jpg"}
        alt={alt}
        className={className}
      />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};
