import { X } from "lucide-react";
import React, { useState } from "react";

function Modal({ isOpen, onClose, titleName, body }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{titleName}</h2>
            <X
              className="text-gray-500 hover:text-gray-800 transition"
              onClick={onClose}
            />
          </div>
          {body}
        </div>
      </div>
    </>
  );
}

export default Modal;
