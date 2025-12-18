import axios from "axios";
import React from "react";

const DeleteModal = ({ id, onClose , refetch }) => {
  const handdleDelete = (id) => {
    axios.delete(`http://localhost:3000/loan/delete/${id}`).then((res) => {
      console.log(res.data);
      refetch();
      onClose()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Delete Confirmation
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Are you ready to delete? This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button 
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Cancel
          </button>

          <button
            onClick={() => handdleDelete(id)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
