import { useState } from "react";

export default function PersonalInput(props) {
  const onCvDataChange = props.onCvDataChange;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onCvDataChange({ personalInfo: { name: newName, email, phone, address } });
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onCvDataChange({ personalInfo: { name, email: newEmail, phone, address } });
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    onCvDataChange({ personalInfo: { name, email, phone: newPhone, address } });
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    onCvDataChange({
      personalInfo: { name, email, phone, address: newAddress },
    });
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onInput={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onInput={handleEmailChange}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onInput={handlePhoneChange}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onInput={handleAddressChange}
      />
    </div>
  );
}
