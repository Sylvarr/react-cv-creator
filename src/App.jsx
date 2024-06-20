import "./tailwind.css";
import { useState } from "react";
import CVViewer from "./viewer/CVViewer";
import CVCreator from "./creator/CVCreator";
import cvData from "./cvData.json";

function App() {
  const [data, setData] = useState(cvData);

  const handleCvReset = () => {
    setData({});
  };

  const handleCvDataChange = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
      personalInfo: {
        ...prevData.personalInfo,
        ...newData.personalInfo,
        photo: newData.personalInfo?.photo ?? prevData.personalInfo?.photo,
      },
    }));
  };

  const handleImgUpload = (uploadedImage) => {
    setData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        photo: uploadedImage,
      },
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 lg:justify-center lg:items-start">
      <div className="h-full rounded-lg p-4 max-w-2xl mx-auto bg-white shadow-lg">
        <CVCreator
          onCvDataReset={handleCvReset}
          onCvDataChange={handleCvDataChange}
          onImgUpload={handleImgUpload}
        />
      </div>
      {Object.keys(data).length > 0 && (
        <div className="h-full rounded-lg p-4 max-w-2xl mx-auto bg-white shadow-lg">
          <CVViewer cvData={data} />
        </div>
      )}
    </div>
  );
}

export default App;
