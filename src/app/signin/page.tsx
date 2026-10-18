"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    // console.log(user);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
     
    });

    if (data?.user) {
      toast.success("Sign in success");
      console.log(data);
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
    

    <div className="mb-5 w-full max-w-100">
      <h1 className="text-2xl font-bold text-slate-900">সাইন ইন</h1>
      <p className="mt-1 text-sm text-slate-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
    </div>

    <form onSubmit={onSubmit} className="w-full max-w-100">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
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
          className="input w-full"
          placeholder="কমপক্ষে ৮ অক্ষর"
          required
        />

        <button
          type="submit"
          className="btn mt-4 w-full bg-green-700 text-white"
        >
          সাইন ইন
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
          অ্যাকাউন্ট নেই?{" "}
          <Link className="text-green-700" href="/signup">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </form>

    <Link href="/" className="mt-5 text-sm text-slate-500 hover:text-green-700">
      ← হোম পেজে ফিরে যান
    </Link>
  </main>
);
};

export default SignInPage;
