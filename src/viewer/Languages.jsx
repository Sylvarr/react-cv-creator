export default function Languages(props) {
  const { languages } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Languages</h1>
      <ul className="list-disc list-inside text-gray-600">
        {languages.map((language) => (
          <li key={language.id}>
            {language.name} - {language.proficiency}
          </li>
        ))}
      </ul>
    </div>
  );
}
