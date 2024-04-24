import { TextComponent } from "../../utils/addText";
import StringField from "../../ui/StringField";
import { ObjectOptions } from "./ObjectOptions";
import React from "react";

const TextOptions = ({
  selectedLayer,
  refreshLayers,
}: {
  selectedLayer: TextComponent;
  refreshLayers: () => void;
}) => {
  return (
    <ul className="flex flex-col gap-1">
      <li>
        <StringField
          label="text"
          value={selectedLayer.data.text}
          onChange={(text) => {
            selectedLayer.data.text = text;
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

export default React.memo(TextOptions);
