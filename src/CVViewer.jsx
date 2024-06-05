import cvData from "./cvData.json";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";
import Languages from "./Languages";
import Interests from "./Interests";

export default function CVViewer() {
  const {
    personalInfo,
    education,
    workExperience,
    skills,
    projects,
    languages,
    interests,
  } = cvData;

  return (
    <>
      <PersonalInfo personalInfo={personalInfo} />
      <Education education={education} />
      <WorkExperience workExperience={workExperience} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Languages languages={languages} />
      <Interests interests={interests} />
    </>
  );
}
