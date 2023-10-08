import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PostTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleRequired, setTitleRequired] = useState(true);
  const [descriptionRequired, setDescriptionRequired] = useState(true);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("", {});

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login flex flex-col items-center justify-center text-white min-h-screen">
      <h1 className="p-4 text-4xl font-bold">Post Task</h1>
      <div className="w-full max-w-md">
        <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="title"
            >
              Title
              {titleRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <input
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="title"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleRequired(false);
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="password"
            >
              Password
              {descriptionRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <textarea
              className={`appearance-none border bg-slate-900 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="description"
              placeholder="Description of Task"
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionRequired(false);
              }}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2 px-4 border-2 border-white hover:border-white rounded-xl"
              type="submit"
              onClick={submit}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostTask;
