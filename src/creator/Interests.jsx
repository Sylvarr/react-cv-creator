export default function Interests(props) {
  const { interests } = props;
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-blue-600">Interests</h1>
      <ul className="list-disc list-inside text-gray-600">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}
