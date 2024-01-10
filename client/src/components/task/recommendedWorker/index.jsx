import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const RecommendedWorkersModal = ({
  isOpen,
  onClose,
  recommendedWorkers,
  title,
  description,
  client_id,
}) => {
  const [selectedWorker, setSelectedWorker] = useState();

  const handleAccept = async (worker) => {
    console.log("Accepted worker:", worker, title, description, client_id);
    onClose();

    try {
      const jwt = Cookies.get("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/Client/notifications/createNoti/",
        {
          title,
          description,
          is_read: false,
          worker_decision: "Pending",
          sender: client_id,
          receiver: worker.worker_id,
        },
        { params: { jwt } }
      );

      console.log("Notification sent:", response.data);
    } catch (error) {
      console.error("Error sending notification:", error.message);
    }
  };

  const handleReject = () => {
    console.log("Rejected worker:", selectedWorker);
    onClose();
  };

  const handleSelectWorker = (worker, action) => {
    setSelectedWorker(worker);
    action(worker);
  };

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Recommended Workers</h2>
        {recommendedWorkers.map((worker) => (
          <div
            key={worker.worker_id}
            className="border p-4 mb-4 rounded-md shadow-md"
          >
            <p className="text-lg font-semibold">{`Worker: ${worker.userame}`}</p>
            <p>{`Gigs Completed: ${worker["Gigs Completed"]}`}</p>
            <p>{`Phone Number: ${worker["Phone Number"]}`}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => handleSelectWorker(worker, handleAccept)}
              >
                Select Worker
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleSelectWorker(worker, handleReject)}
              >
                Reject Worker
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedWorkersModal;
