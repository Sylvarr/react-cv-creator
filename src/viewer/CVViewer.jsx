import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";
import Languages from "./Languages";
import Interests from "./Interests";
import Photo from "./Photo";
import { useState, useEffect } from "react";

export default function CVViewer(props) {
  const [cvData, setCvData] = useState(props.cvData);

  useEffect(() => {
    setCvData(props.cvData);
  }, [props.cvData]);

  const {
    personalInfo = {},
    education = [],
    workExperience = [],
    skills = [],
    projects = [],
    languages = [],
    interests = [],
  } = cvData || {};

  return (
    <>
      {personalInfo.photo && <Photo photo={personalInfo.photo} />}
      <PersonalInfo personalInfo={personalInfo} />
      {education.length > 0 && <Education education={education} />}
      {workExperience.length > 0 && (
        <WorkExperience workExperience={workExperience} />
      )}
      {skills.length > 0 && <Skills skills={skills} />}
      {projects.length > 0 && <Projects projects={projects} />}
      {languages.length > 0 && <Languages languages={languages} />}
      {interests.length > 0 && <Interests interests={interests} />}
    </>
  );
}
