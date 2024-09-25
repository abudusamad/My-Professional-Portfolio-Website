import { CardWrapper } from "@/components/auth/card-wrapper";

const LoginPage = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Login Ling"
        backButtonHref="/"
        backButtonLabel="Sign in here"
        showSocial
      >
        <div>
          <h1>Login</h1>
        </div>
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
