'use client';
import RegisterPage from "@/components/Register";
import LandingBar from "@/components/LandingNav";
import LandingAuthOff from "@/components/LandingAuthOff";

export default function Reg() {
    return (
      <div>
      <LandingAuthOff />
      <RegisterPage />
      </div>
    );
  }
  