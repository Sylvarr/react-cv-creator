import base64 from "base64-encode-file";

export default function ImageUpload(props) {
  const onImgUpload = props.onImgUpload;

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const data = await base64(file);
    onImgUpload(data);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
}
