import React, { useState, useEffect } from "react";
import axios from "axios";
import RecommendedWorkersModal from "../../components/task/recommendedWorker";
import "./index.css";
import Cookies from "js-cookie";

const PostTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
    address: "",
    longitude: "",
    latitude: "",
  });
  const [postTaskData, setPostTaskData] = useState({
    lat: "",
    long: "",
    title: "",
    description: "",
    time: "",
    text_address: "",
    taskType: "",
    status: "",
    worker_response: "",
    worker: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [recommendedWorkers, setRecommendedWorkers] = useState([]);

  useEffect(() => {
    handleLocation();
  }, []);

  const openModal = async () => {
    try {
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
    if (
      !formData.title ||
      !formData.description ||
      !formData.time ||
      !formData.address
    ) {
      alert("Please fill in all required fields before submitting the form.");
      return;
    }

    try {
      const jwt = Cookies.get("token");
      const res = await axios.post(
        "http://127.0.0.1:8000/api/task/recommended_workers/",
        {
          title: formData.title,
          description: formData.description,
        },
        {
          params: {
            jwt,
          },
        }
      );

      const recommendedWorkersData = res.data;
      const taskType = recommendedWorkersData.task_type;

      setPostTaskData({
        lat: formData.latitude,
        long: formData.longitude,
        title: formData.title,
        description: formData.description,
        time: formData.time,
        text_address: formData.address,
        taskType: taskType,
        status: "Accepted",
        worker_response: "",
        worker: "",
      });
      setRecommendedWorkers(recommendedWorkersData.top_workers);

      openModal();
    } catch (error) {
      console.error("Error posting task:", error.message);
    }
  };

  const updatePostTaskData = (workerId) => {
    setPostTaskData((prevData) => ({
      ...prevData,
      worker: workerId,
    }));
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
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-bold mb-2 text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
        lat={formData.latitude}
        long={formData.longitude}
        title={formData.title}
        description={formData.description}
        time={formData.time}
        text_address={formData.text_address}
        taskType={postTaskData.taskType}
        sender={formData.client_id}
      />
    </div>
  );
};

export default PostTask;
