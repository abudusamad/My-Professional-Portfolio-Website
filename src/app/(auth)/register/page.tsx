import { CardWrapper } from "@/components/auth/card-wrapper";

const RegisterPage = () => {
    return (<div>
        <CardWrapper
            headerLabel="Register your account"
            backButtonHref="/"
            backButtonLabel="Sign in here"
            showSocial
        >
            <div>
                <h1>Register</h1>
            </div>
        </CardWrapper>
    </div> );
}
 
export default RegisterPage;