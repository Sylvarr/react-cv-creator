export default function NewResumeButton(props) {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      onClick={props.onClick}
    >
      New Resume
    </button>
  );
}
