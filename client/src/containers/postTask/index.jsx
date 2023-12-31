import React, { useState, useEffect } from "react";
import axios from "axios";
import RecommendedWorkersModal from "../../components/task/recommendedWorker";
import "./index.css";

const PostTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [recommendedWorkers, setRecommendedWorkers] = useState([]);

  useEffect(() => {
    // Fetch user's location when component mounts
    handleLocation();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const openModal = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/task/recommended_workers"
      );

      setRecommendedWorkers(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching recommended workers:", error.message);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            longitude: position.coords.longitude.toString(),
            latitude: position.coords.latitude.toString(),
          });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.title || !formData.description || !formData.time) {
      alert("Please fill in all required fields before submitting the form.");
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/task/post_a_task/",
        formData
      );

      console.log("Task Posted:", response.data);

      // Open the modal with recommended workers
      openModal();

      setFormData({
        title: "",
        description: "",
        time: "",
        longitude: "",
        latitude: "",
      });
    } catch (error) {
      console.error("Error posting task:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Post a Task</h1>
      <form className="glass-form rounded-xl shadow-md w-full max-w-md px-8 py-4 mb-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-bold mb-2 text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="appearance-none border bg-slate-700 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-bold mb-2 text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="appearance-none border bg-slate-700 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-bold mb-2 text-white"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="appearance-none border bg-slate-700 'border-white' rounded-xl w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-indigo-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            type="submit"
            onClick={handleSubmit}
          >
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Post Task
          </button>
        </div>
      </form>

      <RecommendedWorkersModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        recommendedWorkers={recommendedWorkers}
      />
    </div>
  );
};

export default PostTask;
