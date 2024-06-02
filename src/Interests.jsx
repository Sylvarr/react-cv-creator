import "./styles/Interests.css";

export default function Interests({ data }) {
  return (
    <div className="interests">
      <h1>Interests</h1>
      <ul>
        {data.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}
