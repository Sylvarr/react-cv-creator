import profilePic from "../assets/profile.png";

export default function Photo(props) {
  const { file } = props;
  const image = file ? URL.createObjectURL(file) : profilePic;
  return (
    <div className="photo flex justify-center">
      <img src={image} alt="photo" className="w-48 h-48" />
    </div>
  );
}
