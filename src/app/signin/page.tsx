

const SignInPage = () => {
  return (
       <div className='flex flex-col items-center mt-6'>
          <div className='w-md'>
              <h1 className="text-2xl font-bold text-gray-800">
             সাইন ইন
            </h1>
           <p className='text-sm text-gray-400'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
          </div>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
          


          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input w-md" placeholder="you@example.com" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

     

          <button className="btn bg-green-700 mt-4 text-white">   সাইন ইন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
