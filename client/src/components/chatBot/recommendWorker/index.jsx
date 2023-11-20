import React from "react";
import DefaultAvatar from "../../../images/Default Avatar.jpg";

const WorkerCard = ({ worker, onAccept, onReject }) => {
  const { name, profilePicture, matchRating } = worker;

  return (
    <div className="bg-gray-800 p-4 rounded-md mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img
            src={profilePicture || DefaultAvatar}
            alt={`${name}'s profile`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-white text-lg font-bold">{name}</h2>
            <p className="text-gray-400">Match Rating: {matchRating}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => onReject(worker)}
        >
          Reject
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
          onClick={() => onAccept(worker)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

const RecommendWorker = () => {
  const exampleWorker = {
    name: "John Doe",
    profilePicture: "",
    matchRating: 95,
  };

  const handleAccept = (worker) => {
    // Implement logic for handling worker acceptance
    console.log(`Accepted: ${worker.name}`);
  };

  const handleReject = (worker) => {
    // Implement logic for handling worker rejection
    console.log(`Rejected: ${worker.name}`);
  };

  return (
    <div className="h-full">
      <WorkerCard
        worker={exampleWorker}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </div>
  );
};

export default RecommendWorker;
