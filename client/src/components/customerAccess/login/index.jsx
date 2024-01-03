import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailRequired, setEmailRequired] = useState(true);
  const [passwordRequired, setPasswordRequired] = useState(true);

  const navigate = useNavigate();

  const tabSpring = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
  });

  const formSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });

  const submit = async (e) => {
    e.preventDefault();

    const customerEndpoint = "http://127.0.0.1:8000/api/login/client/";

    try {
      if (!emailRequired && !passwordRequired) {
        const res = await axios.post(customerEndpoint, {
          email,
          password,
        });
        const token = res.data.jwt;
        Cookies.set("token", token);
        navigate(`/profile`);
        window.location.reload();
      } else {
        alert("Kindly Fill All Required Fields");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login flex flex-col items-center justify-center text-white justify-self-center mt-10 pt-10">
      <div className="w-full max-w-lg form flex flex-col lg:flex-row lg:items-center justify-center lg:space-x-8">
        <animated.div style={tabSpring} className="tab-group lg:w-1/3">
          <div className="text-left w-full">
            <h2 className="font-bold text-2xl pb-2">Login As A Customer</h2>
            <p className="text-md pt-2">
              Get any task done by our professional workers
            </p>
          </div>
        </animated.div>

        <animated.div
          style={formSpring}
          className="lg:w-2/3 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <form className="glass-form rounded-xl shadow-md w-full px-8 py-4 mx-2 mb-4">
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
            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-indigo-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                type="submit"
                onClick={submit}
              >
                <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Login
              </button>
              <p className="text-slate-200 px-4 mt-4">
                Don't Have An Account?{" "}
                <Link to="/customer-access/signup">
                  <button className="text-cyan-400 hover:text-cyan-500 font-bold">
                    Sign-Up
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default Login;
