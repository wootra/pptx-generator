import StringArea from "../../ui/StringArea";
import { ChartComponent } from "../../utils/addChart";
import { ObjectOptions } from "./ObjectOptions";

const ChartOptions = ({
  selectedLayer,
  refreshLayers,
}: {
  selectedLayer: ChartComponent;
  refreshLayers: () => void;
}) => {
  return (
    <ul className="gap-1 flex flex-col gap-1">
      <li>
        <StringArea
          label="text"
          value={JSON.stringify(selectedLayer.data.chartData, null, 4)}
          onChange={(text) => {
            selectedLayer.data.chartData = JSON.parse(text);
            refreshLayers();
          }}
        />
      </li>
      <ObjectOptions
        groupName="options"
        obj={selectedLayer.option}
        refreshLayers={refreshLayers}
      />
    </ul>
  );
};

export default ChartOptions;
