import "./styles/PersonalInfo.css";

export default function PersonalInfo({ name, email, phone, address }) {
  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
}
