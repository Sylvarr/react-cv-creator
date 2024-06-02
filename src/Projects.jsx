import "./styles/Projects.css";

export default function Projects({ data }) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.technologies.join(", ")}</p>
            <p>
              {item.startDate} - {item.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
