"use client";
import { authClient } from "@/lib/auth-client";

import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";
import toast from "react-hot-toast";

const page = () => {
  // const router = useRouter()
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  //   useEffect(()=>{
  //       if(user){
  //           return  router.push("/")
  //         }
  //     },[user,router])

  if (!user) {
    return (
      <Suspense fallback={<p>User Loading...</p>}>
        <p>User not found</p>
      </Suspense>
    );
  }
  const handleSignout = async () => {
    await authClient.signOut();
  };

 

  return (
    <div className="w-3xl ">
      <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
      <p className="mb-5 text-sm text-gray-500">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>
      <div className="flex gap-5 justify-between border border-base-300 rounded-2xl px-8 items-center">
        <div className="flex flex-row items-center">
          
            <Image
              src={
                user.image ||
                "https://static.vecteezy.com/system/resources/thumbnails/069/984/307/small/user-profile-icon-silhouette-of-a-man-in-a-circle-placeholder-picture-or-avatar-for-social-media-and-website-vector.jpg"
              }
              alt={user.name ?? ""}
              width={100}
              height={100}
              unoptimized
            />
         
          <div>
            <h2 className="font-bold">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleSignout}
            className=" text-red-600 border border-red-600 rounded-xl px-2 py-1"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>
<Link href={"/profile/update"}>  <button type="submit" className="btn bg-green-700 text-white mt-4 w-full">
            আপডেট{" "}
          </button></Link>
     
    </div>
  );
};

export default page;
