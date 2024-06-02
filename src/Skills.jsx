import "./styles/Skills.css";

export default function Skills({ data }) {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
