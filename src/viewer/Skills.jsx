export default function Skills(props) {
  const { skills } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Skills</h1>
      <ul className="list-disc list-inside text-gray-600">
        {skills.map((item) => (
          <li className="text-base text-secondary " key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
