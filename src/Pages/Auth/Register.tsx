import { InputWithIcon, ButtonWithLoader } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <AuthLayout
        title="Personal Account"
        description="You are creating a personal Cito account to make and receive orders..."
      >
        <form className="space-y-6">
          <InputWithIcon
            icon={<UserRound size={20} />}
            type="email"
            label="Name"
            placeholder="e.g Johh Doe"
            className="bg-secondary"
          />
          <InputWithIcon
            icon={<Mail size={20} />}
            type="email"
            label="E-mail address"
            placeholder="e.g johh@doe.com"
            className="bg-secondary"
          />
          <InputWithIcon
            icon={<Phone size={20} />}
            type="tel"
            label="Phone Number (Preferably WhatsApp)"
            placeholder="e.g 081 222 3333"
            className="bg-secondary"
          />
          <InputWithIcon
            icon={<Lock size={20} />}
            type="password"
            label="Password"
            placeholder="> 5 characters"
            className="bg-secondary"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="agree" className="accent-primary" />
            <label htmlFor="agree" className="text-sm text-muted">
              Agree to term{" "}
              <Link
                to="/forgot"
                className="underline underline-offset-2 font-medium text-primary"
              >
                Terms & Condition
              </Link>{" "}
              and{" "}
              <Link
                to="/forgot"
                className="underline underline-offset-2 font-medium text-primary"
              >
                Privacy Policy
              </Link>
            </label>
          </div>
          <ButtonWithLoader
            initialText="Submit"
            loadingText="Submitting..."
            className="h-11 btn-primary w-full font-medium rounded-full"
          />
        </form>
        <p className="text-muted text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary underline underline-offset-2">
            Login
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Register;
