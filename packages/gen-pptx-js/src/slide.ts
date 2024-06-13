/**
 * PptxGenJS: Slide Class
 */

import { CHART_NAME, SHAPE_NAME } from './core-enums';
import {
	AddSlideProps,
	BackgroundProps,
	HexColor,
	IChartMulti,
	IChartOpts,
	IChartOptsLib,
	IOptsChartData,
	ISlideObject,
	ISlideRel,
	ISlideRelChart,
	ISlideRelMedia,
	ImageProps,
	Margin,
	MediaProps,
	PresLayout,
	PresSlide,
	ShapeProps,
	SlideLayout,
	SlideNumberProps,
	TableProps,
	TableRow,
	TextProps,
	TextPropsOptions,
} from './core-interfaces';
import * as genObj from './gen-objects';
type ChartArgs =
	| [CHART_NAME, IOptsChartData[], IChartOpts]
	| [IChartMulti[], IChartOpts]
	| [IChartMulti[], IChartOpts, undefined];
export default class Slide implements PresSlide {
	private readonly _setSlideNum: (value: SlideNumberProps) => void;

	public addSlide: (options?: AddSlideProps) => PresSlide;
	public getSlide: (slideNum: number) => PresSlide;
	public _name: string;
	public _presLayout: PresLayout;
	public _rels: ISlideRel[];
	public _relsChart: ISlideRelChart[];
	public _relsMedia: ISlideRelMedia[];
	public _rId: number;
	public _slideId: number;
	public _slideLayout: SlideLayout | null = null;
	public _slideNum: number;
	public _slideNumberProps: SlideNumberProps | null = null;
	public _slideObjects: ISlideObject[];
	public _newAutoPagedSlides: PresSlide[] = [];

	constructor(params: {
		addSlide: (options?: AddSlideProps) => PresSlide;
		getSlide: (slideNum: number) => PresSlide;
		presLayout: PresLayout;
		setSlideNum: (value: SlideNumberProps) => void;
		slideId: number;
		slideRId: number;
		slideNumber: number;
		slideLayout?: SlideLayout;
	}) {
		this.addSlide = params.addSlide;
		this.getSlide = params.getSlide;
		this._name = `Slide ${params.slideNumber}`;
		this._presLayout = params.presLayout;
		this._rId = params.slideRId;
		this._rels = [];
		this._relsChart = [];
		this._relsMedia = [];
		this._setSlideNum = params.setSlideNum;
		this._slideId = params.slideId;
		this._slideLayout = params.slideLayout || null;
		this._slideNum = params.slideNumber;
		this._slideObjects = [];
		/** NOTE: Slide Numbers: In order for Slide Numbers to function they need to be in all 3 files: master/layout/slide
		 * `defineSlideMaster` and `addNewSlide.slideNumber` will add {slideNumber} to `this.masterSlide` and `this.slideLayouts`
		 * so, lastly, add to the Slide now.
		 */
		this._slideNumberProps = this._slideLayout?._slideNumberProps || null;
	}

	_bkgdImgRid?: number;
	_margin?: Margin;

	/**
	 * Background color
	 * @type {string|BackgroundProps}
	 * @deprecated in v3.3.0 - use `background` instead
	 */
	private _bkgd: string | BackgroundProps = 'FFFFFF';
	public set bkgd(value: string | BackgroundProps) {
		this._bkgd = value;
		if (!this._background || !this._background.color) {
			if (!this._background) this._background = {};
			if (typeof value === 'string') this._background.color = value;
		}
	}

	public get bkgd(): string | BackgroundProps {
		return this._bkgd;
	}

	/**
	 * Background color or image
	 * @type {BackgroundProps|undefined}
	 * @example solid color `background: { color:'FF0000' }`
	 * @example color+trans `background: { color:'FF0000', transparency:0.5 }`
	 * @example base64 `background: { data:'image/png;base64,ABC[...]123' }`
	 * @example url `background: { path:'https://some.url/image.jpg'}`
	 * @since v3.3.0
	 */
	private _background?: BackgroundProps | null;
	public set background(props: BackgroundProps | null) {
		this._background = props;
		// Add background (image data/path must be captured before `exportPresentation()` is called)
		if (props) genObj.addBackgroundDefinition(props, this as PresSlide);
	}

	public get background(): BackgroundProps | undefined | null {
		return this._background;
	}

	/**
	 * Default font color
	 * @type {HexColor}
	 */
	private _color: HexColor = '000000';
	public set color(value: HexColor) {
		this._color = value;
	}

	public get color(): HexColor {
		return this._color;
	}

	/**
	 * @type {boolean}
	 */
	private _hidden: boolean = false;
	public set hidden(value: boolean) {
		this._hidden = value;
	}

	public get hidden(): boolean {
		return this._hidden;
	}

	/**
	 * @type {SlideNumberProps}
	 */
	public set slideNumber(value: SlideNumberProps) {
		// NOTE: Slide Numbers: In order for Slide Numbers to function they need to be in all 3 files: master/layout/slide
		this._slideNumberProps = value;
		this._setSlideNum(value);
	}

	public get slideNumber(): SlideNumberProps | null {
		return this._slideNumberProps;
	}

	public get newAutoPagedSlides(): PresSlide[] {
		return this._newAutoPagedSlides;
	}
	/**
	 * Add chart to Slide
	 * @param {CHART_NAME|IChartMulti[]} type - chart type
	 * @param {object[]} data - data object
	 * @param {IChartOpts} options - chart options
	 * @return {PresSlide} this Slide
	 */
	addChart(...args: ChartArgs): PresSlide {
		const [type, data, options] = args;
		// FUTURE: TODO-VERSION-4: Remove first arg - only take data and opts, with "type" required on opts
		// Set `_type` on IChartOptsLib as its what is used as object is passed around
		const optionsWithType: IChartOptsLib = options || {};
		optionsWithType._type = type;
		if (Array.isArray(type)) {
			genObj.addChartDefinition(
				this as PresSlide,
				type,
				data as IChartOpts,
				undefined
			);
		} else {
			genObj.addChartDefinition(
				this as PresSlide,
				type,
				data as IOptsChartData[],
				options
			);
		}

		return this as PresSlide;
	}

	/**
	 * Add image to Slide
	 * @param {ImageProps} options - image options
	 * @return {PresSlide} this Slide
	 */
	addImage(options: ImageProps): PresSlide {
		genObj.addImageDefinition(this as PresSlide, options);
		return this as PresSlide;
	}

	/**
	 * Add media (audio/video) to Slide
	 * @param {MediaProps} options - media options
	 * @return {PresSlide} this Slide
	 */
	addMedia(options: MediaProps): PresSlide {
		genObj.addMediaDefinition(this as PresSlide, options);
		return this as PresSlide;
	}

	/**
	 * Add speaker notes to Slide
	 * @docs https://gitbrent.github.io/PptxGenJS/docs/speaker-notes.html
	 * @param {string} notes - notes to add to slide
	 * @return {PresSlide} this Slide
	 */
	addNotes(notes: string): PresSlide {
		genObj.addNotesDefinition(this as PresSlide, notes);
		return this as PresSlide;
	}

	/**
	 * Add shape to Slide
	 * @param {SHAPE_NAME} shapeName - shape name
	 * @param {ShapeProps} options - shape options
	 * @return {PresSlide} this Slide
	 */
	addShape(shapeName: SHAPE_NAME, options?: ShapeProps): PresSlide {
		// NOTE: As of v3.1.0, <script> users are passing the old shape object from the shapes file (orig to the project)
		// But React/TypeScript users are passing the shapeName from an enum, which is a simple string, so lets cast
		// <script./> => `pptx.shapes.RECTANGLE` [string] "rect" ... shapeName['name'] = 'rect'
		// TypeScript => `pptxgen.shapes.RECTANGLE` [string] "rect" ... shapeName = 'rect'
		// let shapeNameDecode = typeof shapeName === 'object' && shapeName['name'] ? shapeName['name'] : shapeName
		genObj.addShapeDefinition(this as PresSlide, shapeName, options);
		return this as PresSlide;
	}

	/**
	 * Add table to Slide
	 * @param {TableRow[]} tableRows - table rows
	 * @param {TableProps} options - table options
	 * @return {PresSlide} this Slide
	 */
	addTable(tableRows: TableRow[], options?: TableProps): PresSlide {
		// FUTURE: we pass `this` - we dont need to pass layouts - they can be read from this!
		this._newAutoPagedSlides = genObj.addTableDefinition(
			this as PresSlide,
			tableRows,
			options,
			this._slideLayout,
			this._presLayout,
			this.addSlide,
			this.getSlide
		);
		return this as PresSlide;
	}

	/**
	 * Add text to Slide
	 * @param {string|TextProps[]} text - text string or complex object
	 * @param {TextPropsOptions} options - text options
	 * @return {PresSlide} this Slide
	 */
	addText(
		text: string | TextProps[],
		options?: TextPropsOptions & Partial<ShapeProps>
	): PresSlide {
		const textParam =
			typeof text === 'string' || typeof text === 'number'
				? [{ text, options }]
				: text;
		genObj.addTextDefinition(this as PresSlide, textParam, options, false);
		return this as PresSlide;
	}
}
