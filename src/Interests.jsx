import "./styles/Interests.css";

export default function Interests({ interests }) {
  return (
    <div className="interests pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Interests
      </h1>
      <ul className="list-disc list-inside text-gray-600">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}
