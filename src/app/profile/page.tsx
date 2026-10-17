"use client";
import { authClient } from "@/lib/auth-client";

import Image from "next/image";

import { Suspense } from "react";

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

const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return;

  const { error } = await authClient.updateUser({ name });
  if (error) console.error(error);
};
  return (
    <div className="w-3xl ">
      <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
      <p className="mb-5 text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      <div className="flex gap-5 justify-between border border-base-300 rounded-2xl px-8 items-center">
        <div className="flex flex-row items-center">
           {user?.image && (
          <Image
            src={user.image}
            alt={user.name ?? ""}
            width={100}
            height={100}
            
          />
        )}
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
<form onSubmit={handleUpdateProfile}>
    <fieldset className="fieldset  border-base-300 rounded-box  border px-10 py-7 mt-5">
    <h3 className="text-xl">তথ্য</h3>

  <label className="label text-sm font-bold ">নাম </label>
  <input name="name" type="name" className="input w-full" placeholder="" />

  <button  type='submit' className="btn bg-green-700 text-white mt-4">আপডেট </button>
</fieldset>
</form>

    </div>
  );
};

export default page;
