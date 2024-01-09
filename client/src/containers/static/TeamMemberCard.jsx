import React from "react";

function TeamMemberCard({ name, email, phoneNumber, image }) {
  return (
    <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600">Phone: {phoneNumber}</p>
    </div>
  );
}

export default TeamMemberCard;
