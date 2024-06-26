export default function PersonalInfo(props) {
  const { name, email, phone, address } = props.personalInfo;
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
      <div className="text-gray-600">
        {email && <p>E-mail: {email}</p>}
        {phone && <p>Phone: {phone}</p>}
        {address && <p>Address: {address}</p>}
      </div>
    </div>
  );
}
