import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an account | Coaches",
  description: "Create your  Coachesaccount to start learning with a mentor.",
};

export default function RegisterPage() {
  return (
    <div className="w-full">
      <RegisterForm />
    </div>
  );
}