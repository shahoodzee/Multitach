import React, { useState } from "react";

const EditProfile = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEditedUser({ ...editedUser, image_url: reader.result });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <div className="w-full max-w-lg">
      <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label
            className="block text-md font-bold mb-2 text-slate-200"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-md font-bold mb-2 text-slate-200"
            htmlFor="image"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            name="image"
            accept="image/png image/jpeg image/jpg image/jfif"
            className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-md font-bold mb-2 text-slate-200"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            maxLength="11"
            placeholder="03xx xxxxxxx"
            name="phone"
            value={editedUser.phone}
            onChange={handleInputChange}
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
            placeholder="Password"
            name="password"
            value={editedUser.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            type="submit"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
