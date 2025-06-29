import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <AuthLayout
        title="Welcome back!"
        description="Login to your account to continue enjoying our services"
      >
        <form className="space-y-6">
          <InputWithIcon
            icon={<Mail size={20} />}
            type="email"
            label="E-mail address"
            placeholder="e.g johh@doe.com"
            className="bg-secondary"
          />
          <InputWithIcon
            icon={<Lock size={20} />}
            type="password"
            label="Password"
            placeholder="> 5 characters"
            className="bg-secondary"
          />
          <div>
            <Link to="/forgot" className="underline underline-offset-2 font-medium">
              Forgot password
            </Link>
          </div>
          <ButtonWithLoader
            initialText="Login"
            loadingText="Logging in..."
            className="h-11 btn-primary w-full font-medium rounded-full"
          />
        </form>
        <p className="text-muted text-center">Create new account? <Link to="/" className="font-medium text-primary underline underline-offset-2">Register</Link></p>
      </AuthLayout>
    </>
  );
};

export default Login;
