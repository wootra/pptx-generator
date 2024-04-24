import { PropsWithChildren, createContext, useContext, useMemo } from "react";

import { useCode } from "./useCode";
import { useLayers } from "./useLayers";
import { useAddNewLayers } from "./useAddNewLayers";
import { useMoveUpDown } from "./useMoveUpDown";
import { useToggleSelected } from "./useToggleSelected";
import { useDownload } from "./useDownload";

const useVisualContextGetSet = () => {
  const { layers, setLayers, deleteLayer, refreshLayers } = useLayers();
  const { addText, addRadarChart } = useAddNewLayers(setLayers);

  const { moveUp, moveDown } = useMoveUpDown(setLayers);
  const { selected, toggleSelected } = useToggleSelected();
  const selectedLayer = useMemo(() => {
    return layers.find((layer) => layer.id === selected);
  }, [layers, selected]);

  const download = useDownload(layers);

  const code = useCode(layers);

  return {
    layers,
    addText,
    addRadarChart,
    deleteLayer,
    selected,
    selectedLayer,
    toggleSelected,
    refreshLayers,
    moveUp,
    moveDown,
    download,
    code,
  };
};
type VisualContextType = ReturnType<typeof useVisualContextGetSet>;

const VisualContext = createContext<VisualContextType>({} as VisualContextType);

export const VisualContainerProvider = ({ children }: PropsWithChildren) => {
  const providerValues = useVisualContextGetSet();

  return (
    <VisualContext.Provider value={providerValues}>
      {children}
    </VisualContext.Provider>
  );
};

export const useVisualContainer = () => {
  return useContext(VisualContext);
};
