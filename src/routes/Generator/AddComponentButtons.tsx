import Button from "../../ui/Button";
import { useGeneratorUi } from "./GeneratorUiContext";

const AddComponentButtons = () => {
  const { addText, addRadarChart } = useGeneratorUi();
  return (
    <>
      <Button onClick={addText}>add text</Button>
      <Button onClick={addRadarChart}>add radar chart</Button>
    </>
  );
};

export default AddComponentButtons;
