import PersonalInput from "./PersonalInput";
import NewResumeButton from "./NewResumeButton";
import EducationInput from "./EducationInput";
import ImageUpload from "./ImageUpload";
export default function CVCreator(props) {
  const onCvDataChange = props.onCvDataChange;
  const onCvDataReset = props.onCvDataReset;
  const onImgUpload = props.onImgUpload;

  return (
    <>
      {<NewResumeButton onClick={onCvDataReset} />}
      {<ImageUpload onImgUpload={onImgUpload} />}
      {<PersonalInput onCvDataChange={onCvDataChange} />}
      {<EducationInput onCvDataChange={onCvDataChange} />}
    </>
  );
}
