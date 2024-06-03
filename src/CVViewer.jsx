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
      <PersonalInfo data={personalInfo} />
      <Education data={education} />
      <WorkExperience data={workExperience} />
      <Skills data={skills} />
      <Projects data={projects} />
      <Languages data={languages} />
      <Interests data={interests} />
    </>
  );
}
