import { useMemo } from "react";
import { VisualLayers } from "../utils/types";

export const useCode = (layers: VisualLayers) => {
  return useMemo(() => {
    const codeLines: [number, string][] = [];
    codeLines.push(
      [0, `import { VisualLayers } from "../utils/types"`],
      [0, `import {`],
      [1, `addPptxObjects,`],
      [1, `generateFile,`],
      [1, `generateSlide,`],
      [0, `} from "../utils/generatePptx";`],

      [0, "const download = ()=>{"],
      [1, `const { instance, slide } = generateSlide(null);`]
    );
    codeLines.push([
      1,
      `const layers = ${JSON.stringify(layers, null, 4).replace(
        /\n/g,
        "\n\t"
      )};`,
    ]);
    codeLines.push(
      [1, `addPptxObjects(slide, layers);`],
      [1, `return generateFile(instance, fileName);`],
      [0, "}"]
    );

    const addTabs = (num: number) => Array(num).fill("\t").join("");

    return codeLines.map((line) => addTabs(line[0]) + line[1]).join("\n");
  }, [layers]);
};
