export default function Photo(props) {
  const file = props.photo;
  const image = file;
  return (
    <div className="photo flex justify-center">
      <img src={image} alt="photo" className="w-48 h-48 object-contain" />
    </div>
  );
}
