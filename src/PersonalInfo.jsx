import "./styles/PersonalInfo.css";

export default function PersonalInfo({ personalInfo }) {
  const { name, email, phone, address } = personalInfo;
  return (
    <div className="personal-info border-b-2 border-gray-200 pb-4 mb-4">
      <h1 className="text-2xl font-bold font-serif text-primary py-3">
        Personal Information
      </h1>
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="text-base text-secondary">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
