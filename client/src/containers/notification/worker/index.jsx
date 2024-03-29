import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const jwt = Cookies.get("token");
      const res = await axios.get(
        "http://127.0.0.1:8000/api/Worker/notifications/",
        {
          params: {
            jwt,
          },
        }
      );
      setNotifications(res.data.notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
    }
  };

  const handleAccept = async (notification) => {
    try {
      const jwt = Cookies.get("token");
      await axios.put(
        `http://127.0.0.1:8000/api/Worker/notifications/taskAccept/`,
        { notification_id: notification.id },
        {
          params: {
            jwt,
          },
        }
      );
      fetchNotifications();
      const body = {
        lat: notification.lat,
        long: notification.log,
        title: notification.title,
        description: notification.description,
        time: notification.time,
        text_address: notification.text_address,
        taskType: notification.taskType,
        status: "Accepted",
        worker_decision: "Accepted",
        is_read: true,
        worker: notification.receiver,
      };

      const res = axios.post(
        "http://127.0.0.1:8000/api/task/post_a_task/",
        body,
        {
          params: {
            jwt,
          },
        }
      );
      console.log("Post Task Response: ", res);
    } catch (error) {
      console.error("Error accepting notification:", error.message);
    }
  };

  const handleReject = async (notification) => {
    try {
      console.log("id: ", notification.id);
      const jwt = Cookies.get("token");
      await axios.put(
        `http://127.0.0.1:8000/api/Worker/notifications/taskReject/`,
        { notification_id: notification.id },
        {
          params: {
            jwt,
          },
        }
      );
      fetchNotifications();
    } catch (error) {
      console.error("Error rejecting notification:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="border p-4 mb-4 rounded-md shadow-md"
        >
          <p className="text-lg font-semibold">{`Title: ${notification.title}`}</p>
          <p>{`Description: ${notification.description}`}</p>
          <p>{`Status: ${notification.worker_decision}`}</p>
          {notification.worker_decision === "Pending" && (
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => handleAccept(notification)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleReject(notification)}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
