import React from "react";
import Calender from "./components/Calender";

const App = () => {
  return (
    <div>
      <div className="pb-2 sticky top-0 flex items-center justify-center bg-gray-100 z-10">
        <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2">
          Calendar
        </h1>
      </div>

      <Calender />
    </div>
  );
};

export default App;
