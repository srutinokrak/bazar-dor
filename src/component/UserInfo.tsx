"use client"

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {

    
    const { data: session} = authClient.useSession() 
    const user = session?.user

    console.log(user);
  return (
    <div>
      <div className="flex gap-3">
        <button className="btn">সাইন ইন</button>
        <button className="btn bg-green-800 text-white">সাইন আপ</button>
      </div>
    </div>
  );
};

export default UserInfo;
