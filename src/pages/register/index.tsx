"use client";

import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import type { MyAppProps } from "../../types/MyAppProps";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signUp } from "next-auth/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setConfirmPassword(e.target.value);

  const handleTogglePassword = () => setShowPassword((prevState) => !prevState);

  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword((prevState) => !prevState);

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture as Blob);
    await signUp("credentials", { redirect: false, data: formData });
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "90vh" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-8">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label className="text-2xl">
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring"
              />
            </label>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-2xl">
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring"
              />
            </label>
          </div>
          <div className="flex flex-col w-full relative">
            <label className="text-2xl">
              Password:
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className="py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring"
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
          <div className="flex flex-col w-full relative mb-4">
            <label className="text-2xl">
              Confirm Password:
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring ${
                  isDark
                    ? "border-gray-600 bg-gray-900 text-gray-300"
                    : "border-gray-300 bg-gray-500 text-gray-700"
                }`}
              />
              <button
                type="button"
                onClick={handleToggleConfirmPassword}
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
          <div className="flex flex-col w-full">
            <label className="text-2xl">
              Profile Picture:
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="py-2 px-4 w-full text-xl rounded-lg border-gray-300 focus:outline-none focus:ring"
              />
            </label>
          </div>
          <div className="flex flex-col w-full">
            <button
              type="submit"
              disabled={!username || !email || !password || !confirmPassword}
              className="bg-blue-500 text-white rounded-lg py-2 px-8 text-xl hover:bg-blue-700 w-full"
            >
              Register
            </button>
          </div>
          <p className="mt-8 text-2xl">
            Already have an account?{" "}
            <a href="/login" className="underline text-blue-500">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const session = pageProps?.session;

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Navbar />
        <RegisterPage /> {/* Use LoginPage component here */}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
