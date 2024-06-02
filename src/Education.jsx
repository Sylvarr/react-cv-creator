import "./styles/Education.css";

export default function Education({ data }) {
  return (
    <div className="education">
      <h1>Education</h1>
      <ul>
        {data.map((item) => (
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
  );
}
