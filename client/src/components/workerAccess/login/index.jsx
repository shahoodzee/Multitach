import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRequired, setEmailRequired] = useState(true);
  const [passwordRequired, setPasswordRequired] = useState(true);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("", {
        email: email,
        password: password,
      });
      const { userId, token } = res.data;

      if (userId === -1) {
        alert("User does not exist");
      } else if (userId === -2) {
        alert("Incorrect Password");
      } else {
        await localStorage.setItem("token", token);
        navigate(`/home/${userId}`);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login flex flex-col items-center justify-center text-white min-h-screen">
      <h1 className="p-4 text-4xl font-bold">Login</h1>
      <div className="w-full max-w-md">
        <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="username"
            >
              Email
              {emailRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <input
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              type="text"
              placeholder="Username / Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailRequired(false);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="password"
            >
              Password
              {passwordRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <input
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordRequired(false);
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-indigo-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              type="submit"
              onClick={submit}
            >
              <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
