"use client";

import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import type { MyAppProps } from "../../types/MyAppProps";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(result);
  };

  const handleGoogleSignIn = async () => {
    const result = await signIn("google", {
      callbackUrl: `${window.location.origin}/`,
      redirect: true,
      state: "myState",
      scope: "email profile",
    });
    console.log(result);
  };

  const handleTogglePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "90vh" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label className="text-2xl">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring ${
                  isDark
                    ? "border-gray-600 bg-gray-900 text-gray-300"
                    : "border-gray-300 bg-gray-500 text-gray-700"
                }`}
              />
            </label>
          </div>
          <div className="flex flex-col w-full relative mb-4">
            <label className="text-2xl">
              Password:
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className={`py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring ${
                  isDark
                    ? "border-gray-600 bg-gray-900 text-gray-300"
                    : "border-gray-300 bg-gray-500 text-gray-700"
                }`}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none my-4"
              >
                {showPassword ? (
                  isDark ? (
                    <HiEyeOff size={24} style={{ verticalAlign: "middle" }} />
                  ) : (
                    <HiEyeOff
                      size={24}
                      style={{ verticalAlign: "middle", color: "black" }}
                    />
                  )
                ) : isDark ? (
                  <HiEye size={24} style={{ verticalAlign: "middle" }} />
                ) : (
                  <HiEye
                    size={24}
                    style={{ verticalAlign: "middle", color: "black" }}
                  />
                )}
              </button>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 px-8 text-xl hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="mt-8 flex items-center gap-2 bg-white text-gray-800 rounded-lg text-xl shadow-md py-2 px-8"
        >
          <FcGoogle size={32} />
          <span className="text-xl">Sign in with Google</span>
        </button>
        <p className="mt-8 text-2xl">
          Don't have an account yet?{" "}
          <a href="/register" className="underline text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
``;

function MyApp({ Component, pageProps }: MyAppProps) {
  const session = pageProps?.session;

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Navbar />
        <LoginPage /> {/* Use LoginPage component here */}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
