import React from "react";
import Modal from "react-modal";
import WorkerCard from "../workerCard";

const RecommendedWorkersModal = ({ isOpen, onClose, recommendedWorkers }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Recommended Workers Modal"
    >
      <h2>Recommended Workers</h2>
      <div>
        {recommendedWorkers.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
      <button onClick={onClose}>Close Modal</button>
    </Modal>
  );
};

export default RecommendedWorkersModal;
