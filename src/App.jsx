import "./tailwind.css";
import { useState } from "react";
import CVViewer from "./viewer/CVViewer";
import CVCreator from "./creator/CVCreator";
import cvData from "./cvData.json";

function App() {
  const [data, setData] = useState(cvData);

  const handleCvDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:justify-center lg:items-start">
      <div className="h-full rounded-lg p-4 max-w-2xl mx-auto bg-white shadow-lg">
        <CVCreator onCvDataChange={handleCvDataChange} />
      </div>
      <div className="h-full rounded-lg p-4 max-w-2xl mx-auto bg-white shadow-lg">
        <CVViewer cvData={data} />
      </div>
    </div>
  );
}

export default App;
