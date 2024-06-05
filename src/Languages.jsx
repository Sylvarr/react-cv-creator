import "./styles/Languages.css";

export default function Languages({ languages }) {
  return (
    <div className="languages personal-info border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Languages
      </h1>
      <ul className="list-disc list-inside text-gray-600">
        {languages.map((language) => (
          <li key={language}>
            {language.name} - {language.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
}
