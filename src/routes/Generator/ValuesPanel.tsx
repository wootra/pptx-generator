import Values from "../../widgets/Values";

const ValuesPanel = () => {
  return (
    <div className="block h-[calc(50%-2rem)]">
      <h2 className="bg-green-950 text-gray-400 px-2 flex-grow-0">values</h2>
      <div className="overflow-y-auto h-full">
        <Values />
      </div>
    </div>
  );
};

export default ValuesPanel;
