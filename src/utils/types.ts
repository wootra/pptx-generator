export type PptxComponentType = "text" | "chart";

export type Coords = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Fill = {
  fill?: {
    color: string;
  };
};

export interface PptxComponentBase {
  type: PptxComponentType;
  id: number;
  data: unknown;
  option: Coords;
}

export type VisualLayers = PptxComponentBase[];

export interface PptxComponent<T extends object, A extends object>
  extends PptxComponentBase {
  data: T;
  option: A & Coords & Fill & Record<string, number | string>;
}
