import "./styles/WorkExperience.css";

export default function WorkExperience({ data }) {
  return (
    <div className="work-experience">
      <h1>Work Experience</h1>
      <ul>
        {data.map((item) => (
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
  );
}
