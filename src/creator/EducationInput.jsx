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
    <div>
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onInput={handleDegreeChange}
      />

      <input
        type="text"
        placeholder="Institution"
        value={institution}
        onInput={handleInstitutionChange}
      />
      <input
        type="text"
        placeholder="Start Year"
        value={startYear}
        onInput={handleStartYearChange}
      />

      <input
        type="text"
        placeholder="End Year"
        value={endYear}
        onInput={handleEndYearChange}
      />

      <input
        type="text"
        placeholder="Field of Study"
        value={fieldOfStudy}
        onInput={handleFieldOfStudyChange}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onInput={handleDescriptionChange}
      />
    </div>
  );
}
