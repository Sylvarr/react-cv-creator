import "./App.css";
import cvData from "./cvData.json";
// import { v4 as uuidv4 } from "uuid";

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
      <div className="personal-info">
        <h1>Personal Information</h1>
        <p>{personalInfo.name}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>
      </div>

      <div className="education">
        <h1>Education</h1>
        <ul>
          {education.map((item) => (
            <li key={item.id}>
              <h2>{item.degree}</h2>
              <p>{item.institution}</p>
              <p>
                {item.startYear} - {item.endYear}
              </p>
              <p>{item.fieldOfStudy}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="work-experience">
        <h1>Work Experience</h1>
        <ul>
          {workExperience.map((item) => (
            <li key={item.id}>
              <h2>{item.position}</h2>
              <p>{item.company}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
              <p>{item.responsibilities}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="projects">
        <h1>Projects</h1>
        <ul>
          {projects.map((projects) => (
            <li key={projects.id}>
              <h2>{projects.name}</h2>
              <p>{projects.description}</p>
              <p>{projects.technologies.join(", ")}</p>
              <p>
                {projects.startDate} - {projects.endDate}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="languages">
        <h1>Languages</h1>
        <ul>
          {languages.map((language) => (
            <li key={language.id}>{language.name}</li>
          ))}
        </ul>
      </div>

      <div className="interests">
        <h1>Interests</h1>
        <ul>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
