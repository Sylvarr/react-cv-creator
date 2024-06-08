export default function WorkExperience(props) {
  const { workExperience } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Work Experience</h1>
      <ul>
        {workExperience.map((item) => (
          <li key={item.id}>
            <h2 className="text-gray-800 text-xl">{item.position}</h2>
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
