"use client"
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


const SignInPage = () => {

   const onSubmit = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const {email, password} = Object.fromEntries(formData.entries() ) as { email:string, password:string, }

        // console.log(user);

       

        const { data, error } = await authClient.signIn.email({
          email, password,
        callbackURL: "/"
    })
        
          if(data) {
            toast.success("Sign in success")
               console.log(data);
             redirect('/')
           }
           if(error) {
          toast.error(error.message || "something went wrong")
            console.log(error);
           }
    }

  return (
       <div className='flex flex-col items-center mt-6'>
          <div className='w-md'>
              <h1 className="text-2xl font-bold text-gray-800">
             সাইন ইন
            </h1>
           <p className='text-sm text-gray-400'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
          </div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
          


          <label className="label">ইমেইল</label>
          <input defaultValue={"anthony@gmail.com"} name="email" type="email" className="input w-md" placeholder="you@example.com" />

          <label className="label">পাসওয়ার্ড</label>
          <input defaultValue={"anthony@gmail.com"} name="password" type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

     

          <button type='submit' className="btn bg-green-700 mt-4 text-white">   সাইন ইন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
