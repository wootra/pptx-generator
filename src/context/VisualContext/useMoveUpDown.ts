import { useCallback } from "react";

export const useMoveUpDown = <T extends { id: number | string }>(
  setLayers: React.Dispatch<React.SetStateAction<T[]>>
) => {
  const moveUp = useCallback(
    (id: number) => {
      setLayers((layers) => {
        const selected = layers.find((l) => l.id === id);
        if (selected) {
          const layerIndex = layers.indexOf(selected);
          if (layerIndex === 0) return layers;
          return [
            ...layers.slice(0, layerIndex - 1),
            selected,
            ...layers.slice(layerIndex - 1).filter((layer) => layer.id !== id),
          ];
        }
        return layers;
      });
    },
    [setLayers]
  );

  const moveDown = useCallback(
    (id: number) => {
      setLayers((layers) => {
        const selected = layers.find((l) => l.id === id);
        if (selected) {
          const layerIndex = layers.indexOf(selected);
          if (layerIndex === layers.length - 1) return layers;
          return [
            ...layers
              .slice(0, layerIndex + 2)
              .filter((layer) => layer.id !== id),
            selected,
            ...layers.slice(layerIndex + 2),
          ];
        }
        return layers;
      });
    },
    [setLayers]
  );
  return { moveDown, moveUp };
};
