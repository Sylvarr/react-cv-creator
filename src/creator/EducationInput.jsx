import { useState } from "react";

export default function EducationInput(props) {
  const onCvDataChange = props.onCvDataChange;
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [description, setDescription] = useState("");

  const handleDegreeChange = (e) => {
    const newDegree = e.target.value;
    setDegree(newDegree);
    onCvDataChange({
      education: [
        {
          degree: newDegree,
          institution,
          startYear,
          endYear,
          fieldOfStudy,
          description,
        },
      ],
    });
  };

  const handleInstitutionChange = (e) => {
    const newInstitution = e.target.value;
    setInstitution(newInstitution);
    onCvDataChange({
      education: [
        {
          degree,
          institution: newInstitution,
          startYear,
          endYear,
          fieldOfStudy,
          description,
        },
      ],
    });
  };

  const handleStartYearChange = (e) => {
    const newStartYear = e.target.value;
    setStartYear(newStartYear);
    onCvDataChange({
      education: [
        {
          degree,
          institution,
          startYear: newStartYear,
          endYear,
          fieldOfStudy,
          description,
        },
      ],
    });
  };

  const handleEndYearChange = (e) => {
    const newEndYear = e.target.value;
    setEndYear(newEndYear);
    onCvDataChange({
      education: [
        {
          degree,
          institution,
          startYear,
          endYear: newEndYear,
          fieldOfStudy,
          description,
        },
      ],
    });
  };

  const handleFieldOfStudyChange = (e) => {
    const newFieldOfStudy = e.target.value;
    setFieldOfStudy(newFieldOfStudy);
    onCvDataChange({
      education: [
        {
          degree,
          institution,
          startYear,
          endYear,
          fieldOfStudy: newFieldOfStudy,
          description,
        },
      ],
    });
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    onCvDataChange({
      education: [
        {
          degree,
          institution,
          startYear,
          endYear,
          fieldOfStudy,
          description: newDescription,
        },
      ],
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Education</h1>
      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Degree"
        value={degree}
        onInput={handleDegreeChange}
      />

      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Institution"
        value={institution}
        onInput={handleInstitutionChange}
      />
      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Start Year"
        value={startYear}
        onInput={handleStartYearChange}
      />

      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="End Year"
        value={endYear}
        onInput={handleEndYearChange}
      />

      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Field of Study"
        value={fieldOfStudy}
        onInput={handleFieldOfStudyChange}
      />

      <input
        type="text"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Description"
        value={description}
        onInput={handleDescriptionChange}
      />
    </div>
  );
}
