import "./styles/PersonalInfo.css";

export default function PersonalInfo({ data }) {
  const { name, email, phone, address } = data;
  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
}
