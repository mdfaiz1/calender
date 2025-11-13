import { useState } from "react";

const AddMeetingModal = ({ isOpen, onClose, onAddMeeting }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New Meeting
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={meeting.title}
              onChange={handleChange}
              placeholder="Enter meeting title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Datetime
              </label>
              <input
                type="datetime-local"
                name="startDatetime"
                value={meeting.startDatetime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Datetime
              </label>
              <input
                type="datetime-local"
                name="endDatetime"
                value={meeting.endDatetime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color
            </label>
            <input
              type="color"
              name="color"
              value={meeting.color}
              onChange={handleChange}
              className="w-16 h-10 border border-gray-300 rounded-md cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Add Meeting
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeetingModal;
