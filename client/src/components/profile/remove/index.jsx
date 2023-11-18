import React, { useState } from "react";

const RemoveProfile = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      //  BACKEND ROUTE FOR DELETING ACCOUNT
    }
  };

  return (
    <div className="w-full max-w-lg">
      <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label
            className="block text-md font-bold mb-2 text-slate-200"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Your Email For Verification"
            name="email"
            onChange={(e) => {
              setEmail(e);
            }}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-md font-bold mb-2 text-slate-200"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Your Password For Verification"
            name="password"
            onChange={(e) => {
              setPassword(e);
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            type="submit"
            onClick={handleSubmit}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RemoveProfile;
