export default function Photo(props) {
  const { file } = props;
  const image = URL.createObjectURL(file);
  return (
    <div className="photo">
      <img src={image} alt="photo" />
    </div>
  );
}
