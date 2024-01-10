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
      const response = await axios.get(
        `http://127.0.0.1:8000/api/Worker/notifications/`,
        { parmas: { jwt } }
      );
      setNotifications(response.data);
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
        { parmas: { jwt } }
      );
      // Fetch updated notifications
      fetchNotifications();
    } catch (error) {
      console.error("Error accepting notification:", error.message);
    }
  };

  const handleReject = async (notification) => {
    try {
      const jwt = Cookies.get("token");
      await axios.put(
        `http://127.0.0.1:8000/notifications/`,
        { notification_id: notification.id },
        { parmas: { jwt } }
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
