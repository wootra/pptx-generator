/**
 * PptxGenJS: Slide Class
 */
import { CHART_NAME, SHAPE_NAME } from './core-enums';
import { AddSlideProps, BackgroundProps, HexColor, IChartMulti, IChartOpts, IOptsChartData, ISlideObject, ISlideRel, ISlideRelChart, ISlideRelMedia, ImageProps, MediaProps, PresLayout, PresSlide, ShapeProps, SlideLayout, SlideNumberProps, TableProps, TableRow, TextProps, TextPropsOptions } from './core-interfaces';
export default class Slide implements PresSlide {
    private readonly _setSlideNum;
    addSlide: (options?: AddSlideProps) => PresSlide;
    getSlide: (slideNum: number) => PresSlide;
    _name: string;
    _presLayout: PresLayout;
    _rels: ISlideRel[];
    _relsChart: ISlideRelChart[];
    _relsMedia: ISlideRelMedia[];
    _rId: number;
    _slideId: number;
    _slideLayout: SlideLayout | null;
    _slideNum: number;
    _slideNumberProps: SlideNumberProps | null;
    _slideObjects: ISlideObject[];
    _newAutoPagedSlides: PresSlide[];
    constructor(params: {
        addSlide: (options?: AddSlideProps) => PresSlide;
        getSlide: (slideNum: number) => PresSlide;
        presLayout: PresLayout;
        setSlideNum: (value: SlideNumberProps) => void;
        slideId: number;
        slideRId: number;
        slideNumber: number;
        slideLayout?: SlideLayout;
    });
    /**
     * Background color
     * @type {string|BackgroundProps}
     * @deprecated in v3.3.0 - use `background` instead
     */
    private _bkgd;
    set bkgd(value: string | BackgroundProps);
    get bkgd(): string | BackgroundProps;
    /**
     * Background color or image
     * @type {BackgroundProps|undefined}
     * @example solid color `background: { color:'FF0000' }`
     * @example color+trans `background: { color:'FF0000', transparency:0.5 }`
     * @example base64 `background: { data:'image/png;base64,ABC[...]123' }`
     * @example url `background: { path:'https://some.url/image.jpg'}`
     * @since v3.3.0
     */
    private _background?;
    set background(props: BackgroundProps | null);
    get background(): BackgroundProps | undefined | null;
    /**
     * Default font color
     * @type {HexColor}
     */
    private _color;
    set color(value: HexColor);
    get color(): HexColor;
    /**
     * @type {boolean}
     */
    private _hidden;
    set hidden(value: boolean);
    get hidden(): boolean;
    /**
     * @type {SlideNumberProps}
     */
    set slideNumber(value: SlideNumberProps);
    get slideNumber(): SlideNumberProps | null;
    get newAutoPagedSlides(): PresSlide[];
    /**
     * Add chart to Slide
     * @param {CHART_NAME|IChartMulti[]} type - chart type
     * @param {object[]} data - data object
     * @param {IChartOpts} options - chart options
     * @return {PresSlide} this Slide
     */
    addChart(type: CHART_NAME | IChartMulti[], data: IOptsChartData[], options?: IChartOpts): PresSlide;
    /**
     * Add image to Slide
     * @param {ImageProps} options - image options
     * @return {PresSlide} this Slide
     */
    addImage(options: ImageProps): PresSlide;
    /**
     * Add media (audio/video) to Slide
     * @param {MediaProps} options - media options
     * @return {PresSlide} this Slide
     */
    addMedia(options: MediaProps): PresSlide;
    /**
     * Add speaker notes to Slide
     * @docs https://gitbrent.github.io/PptxGenJS/docs/speaker-notes.html
     * @param {string} notes - notes to add to slide
     * @return {PresSlide} this Slide
     */
    addNotes(notes: string): PresSlide;
    /**
     * Add shape to Slide
     * @param {SHAPE_NAME} shapeName - shape name
     * @param {ShapeProps} options - shape options
     * @return {PresSlide} this Slide
     */
    addShape(shapeName: SHAPE_NAME, options?: ShapeProps): PresSlide;
    /**
     * Add table to Slide
     * @param {TableRow[]} tableRows - table rows
     * @param {TableProps} options - table options
     * @return {PresSlide} this Slide
     */
    addTable(tableRows: TableRow[], options?: TableProps): PresSlide;
    /**
     * Add text to Slide
     * @param {string|TextProps[]} text - text string or complex object
     * @param {TextPropsOptions} options - text options
     * @return {PresSlide} this Slide
     */
    addText(text: string | TextProps[], options?: TextPropsOptions): PresSlide;
}
