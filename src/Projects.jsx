import "./styles/Projects.css";

export default function Projects({ projects }) {
  return (
    <div className="projects border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Projects
      </h1>
      <ul>
        {projects.map((item) => (
          <li key={item.id}>
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <div className="text-base text-secondary">
              <p>{item.description}</p>
              <p>{item.technologies.join(", ")}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
