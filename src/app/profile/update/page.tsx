"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const page = () => {
     const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        if (!name) return;
    
        const { error, data } = await authClient.updateUser({ name });
    
        if (error) {
          toast.error(error.message || "Update failed");
          return;
        }
        toast.success("Profile updated successfully");
      };
    return (
        <div>
             <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset  border-base-300 rounded-box  border px-10 py-7 mt-5">
          <h3 className="text-xl">তথ্য</h3>

          <label className="label text-sm font-bold ">নাম </label>
          <input
            name="name"
            type="name"
            className="input w-full"
            placeholder=""
          />

          <button type="submit" className="btn bg-green-700 text-white mt-4">
            আপডেট{" "}
          </button>
        </fieldset>
      </form>
        </div>
    );
};

export default page;