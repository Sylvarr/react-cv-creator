import PersonalInput from "./PersonalInput";
import NewResumeButton from "./NewResumeButton";
export default function CVCreator(props) {
  const onCvDataChange = props.onCvDataChange;

  return (
    <>
      {<NewResumeButton onClick={onCvDataChange} />}
      {<PersonalInput onCvDataChange={onCvDataChange} />}
    </>
  );
}
