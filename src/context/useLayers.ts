import { useCallback, useState } from "react";
import { VisualLayers } from "../utils/types";

export const useLayers = () => {
  const [layers, setLayers] = useState([] as VisualLayers);
  const refreshLayers = useCallback(() => {
    setLayers((layers) => [...layers]);
  }, []);
  const deleteLayer = useCallback((id: number) => {
    setLayers((layers) => layers.filter((layer) => layer.id !== id));
  }, []);

  return { layers, setLayers, deleteLayer, refreshLayers };
};
