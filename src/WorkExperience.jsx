import "./styles/WorkExperience.css";

export default function WorkExperience({ workExperience }) {
  return (
    <div className="work-experience border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Work Experience
      </h1>
      <ul>
        {workExperience.map((item) => (
          <li key={item.id}>
            <h2 className="text-xl font-semibold">{item.position}</h2>
            <div className="text-base text-secondary">
              <p>{item.company}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
