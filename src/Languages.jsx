import "./styles/Languages.css";

export default function Languages({ data }) {
  return (
    <div className="languages">
      <h1>Languages</h1>
      <ul>
        {data.map((language) => (
          <li key={language.id}>
            {language.name} - {language.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
}
