'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const SignUpPage = () => {

    const onSubmit = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries() ) as {name: string, email:string, password:string}

        // console.log(user);

        const { data, error } = await authClient.signUp.email({
           ...user,
        callbackURL: "/"
    })
        
          if(data) {
               console.log(data);
             redirect('/')
           }
           if(error) {
            console.log(error);
           }
           

    }
    return (
       <div className='flex flex-col items-center mt-6'>
          <div className='w-md'>
              <h1 className="text-2xl font-bold text-gray-800">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
           <p className='text-sm text-gray-400'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
          </div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
          

          <label className="label">নাম</label>
          <input  name="name" type="text" className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="you@example.com" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

          <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input name="password" type="password" className="input w-md" placeholder="আবার লিখুন" />

          <button type='submit' className="btn bg-green-700 mt-4 text-white">অ্যাকাউন্ট তৈরি করুন</button>
        </fieldset>
      </form>
    </div>
    );
};

export default SignUpPage;