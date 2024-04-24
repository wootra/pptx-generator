import PptxGenJS from "pptxgenjs";
import { getNewId } from "./storage";
import { PptxComponent } from "./types";
const defaultText: PptxGenJS.TextPropsOptions = {
  x: 1,
  y: 0.5,
  w: 4,
  h: 2,
  fontSize: 36,
  align: "center",
  fill: { color: "D3E3F3" },
  color: "008899",
};

export const addText = (
  slide: PptxGenJS.Slide,
  text: string,
  option?: PptxGenJS.TextPropsOptions
) => {
  slide.addText(text, {
    ...defaultText,
    ...option,
  });
};

export type TextComponent = PptxComponent<
  { text: string },
  PptxGenJS.TextBaseProps & Record<string, string | number>
>;

export const createTextObj = (
  text: string,
  option?: PptxGenJS.TextPropsOptions
) => {
  const id = getNewId();
  return {
    id: id,
    type: "text",
    data: {
      text,
    },
    option: {
      ...defaultText,
      ...option,
    },
  } as TextComponent;
};
