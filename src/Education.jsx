import "./styles/Education.css";

export default function Education({ education }) {
  return (
    <div className="education border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Education
      </h1>
      <ul>
        {education.map((item) => (
          <li key={item.id}>
            <h2 className="text-xl font-semibold">{item.degree}</h2>
            <div className="text-base text-secondary">
              <p>{item.institution}</p>
              <p>
                {item.startYear} - {item.endYear}
              </p>
              <p>{item.fieldOfStudy}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
