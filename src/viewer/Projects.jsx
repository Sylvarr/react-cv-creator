export default function Projects(props) {
  const { projects } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Projects</h1>
      <ul>
        {projects.map((item) => (
          <li key={item.id}>
            <h2 className="text-xl text-gray-800">{item.name}</h2>
            <div className="text-gray-600">
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
