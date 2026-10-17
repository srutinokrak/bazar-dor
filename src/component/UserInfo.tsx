"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-row items-center gap-2">
          <div className="avatar">
            <details className="dropdown">
              <summary className=" m-1">
                {" "}
                <div className="ring-primary ring-offset-base-100 rounded-xl ring-2 ring-offset-2">
                  <img
                    className="rounded-5xl w-10 h-10 "
                    alt="Tailwind-CSS-Avatar-component"
                    src={user?.image as string}
                  />
                </div>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <div className="p-5">
                  <h2 className="font-bold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <li>
                  {" "}
                  <Link href={'/profile'}>
                  <p>👤 আমার প্রোফাইল</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <button onClick={handleSignout} className=" text-red-600">
                    ↩ সাইন আউট
                  </button>
                </li>
              </ul>
            </details>
          </div>
          <h2 className="font-bold">{user.name}</h2>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href={"/signin"}>
            <button className="btn">সাইন ইন</button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn bg-green-800 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
