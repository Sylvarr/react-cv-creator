import "./styles/Skills.css";

export default function Skills({ skills }) {
  return (
    <div className="skills border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Skills
      </h1>
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
