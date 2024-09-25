import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import { Social } from "./social";
import { SignInMethodDivider } from "./signIn-method-divider";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[450px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="flex flex-col items-center w-full space-y-4">
            <SignInMethodDivider />
            <Social />
          </div>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
