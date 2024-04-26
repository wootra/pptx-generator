import PptxGenJS from 'pptxgenjs';

export type PptxComponentType = 'text' | 'chart' | 'image';

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
    label: string;
    data: unknown;
    option: Coords;
}

export type VisualLayers = PptxComponentBase[];

export interface PptxComponent<T extends object, A extends object>
    extends PptxComponentBase {
    data: T;
    option: A & Coords & Fill & Record<string, number | string>;
}
export type RadarChartType = {
    name: string; //Rigion name
    labels: string[];
    values: number[];
};

export type ChartDataType = {
    chartType: PptxGenJS.CHART_NAME;
    chartData: RadarChartType[];
};

export type ChartComponent = PptxComponent<ChartDataType, PptxGenJS.IChartOpts>;

export type TextComponent = PptxComponent<
    { text: string },
    PptxGenJS.TextBaseProps & Record<string, string | number>
>;

export type ImageComponent = PptxComponent<
    { src: string },
    PptxGenJS.ImageProps & Record<string, string | number>
>;
