export default function Education(props) {
  const { education } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Education</h1>
      <ul>
        {education.map((item) => (
          <li key={item.id}>
            <h2 className=" text-xl text-gray-800">{item.degree}</h2>
            <div className="text-gray-600">
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
