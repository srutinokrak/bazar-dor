"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name, email, password, confirmPassword } = Object.fromEntries(
      formData.entries(),
    ) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    // console.log(user);

    if (password !== confirmPassword) {
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    
    });

    if (data) {
      console.log(data);
      toast.success("Sign up successful")
      redirect("/");
    }
    if (error) {
      toast.error(error.message || "something went wrong");
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

return (
  <main className="flex min-h-[65vh] flex-col items-center px-4 py-8">
    <Toaster position="top-center" />

    <div className="mb-5 w-full max-w-100">
      <h1 className="text-2xl font-bold text-slate-900">
        অ্যাকাউন্ট তৈরি করুন
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
    </div>

    <form onSubmit={onSubmit} className="w-full max-w-100">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <label className="mb-1 block text-sm font-medium">নাম</label>
        <input
          name="name"
          type="text"
          className="input mb-3 w-full"
          placeholder="যেমন: রহিম উদ্দিন"
          required
        />

        <label className="mb-1 block text-sm font-medium">ইমেইল</label>
        <input
          name="email"
          type="email"
          className="input mb-3 w-full"
          placeholder="you@example.com"
          required
        />

        <label className="mb-1 block text-sm font-medium">পাসওয়ার্ড</label>
        <input
          name="password"
          type="password"
          className="input mb-3 w-full"
          placeholder="কমপক্ষে ৮ অক্ষর"
          required
        />

        <label className="mb-1 block text-sm font-medium">
          পাসওয়ার্ড নিশ্চিত করুন
        </label>
        <input
          name="confirmPassword"
          type="password"
          className="input w-full"
          placeholder="আবার লিখুন"
          required
        />

        <button
          type="submit"
          className="btn mt-4 w-full bg-green-700 text-white"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>

        <div className="my-4 flex items-center gap-3 text-xs text-slate-500">
          <span className="h-px flex-1 bg-slate-200" />
          অথবা
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={handleGoogleSignIn} className="btn">
            Google দিয়ে চালিয়ে যান
          </button>
          <button type="button" onClick={handleGithubSignIn} className="btn">
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-slate-600">
          অ্যাকাউন্ট আছে? <Link className="text-green-700" href="/signin">সাইন ইন করুন</Link>
        </p>
      </div>
    </form>

    <Link href="/" className="mt-5 text-sm text-slate-500 hover:text-green-700">
      ← হোম পেজে ফিরে যান
    </Link>
  </main>
);
};

export default SignUpPage;
