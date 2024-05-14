/**
 * PptxGenJS: Slide Class
 */
import * as genObj from './gen-objects';
var Slide = /** @class */ (function () {
    function Slide(params) {
        var _a;
        this._slideLayout = null;
        this._slideNumberProps = null;
        this._newAutoPagedSlides = [];
        /**
         * Background color
         * @type {string|BackgroundProps}
         * @deprecated in v3.3.0 - use `background` instead
         */
        this._bkgd = 'FFFFFF';
        /**
         * Default font color
         * @type {HexColor}
         */
        this._color = '000000';
        /**
         * @type {boolean}
         */
        this._hidden = false;
        this.addSlide = params.addSlide;
        this.getSlide = params.getSlide;
        this._name = "Slide ".concat(params.slideNumber);
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
        this._slideNumberProps = ((_a = this._slideLayout) === null || _a === void 0 ? void 0 : _a._slideNumberProps) || null;
    }
    Object.defineProperty(Slide.prototype, "bkgd", {
        get: function () {
            return this._bkgd;
        },
        set: function (value) {
            this._bkgd = value;
            if (!this._background || !this._background.color) {
                if (!this._background)
                    this._background = {};
                if (typeof value === 'string')
                    this._background.color = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (props) {
            this._background = props;
            // Add background (image data/path must be captured before `exportPresentation()` is called)
            if (props)
                genObj.addBackgroundDefinition(props, this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "hidden", {
        get: function () {
            return this._hidden;
        },
        set: function (value) {
            this._hidden = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "slideNumber", {
        get: function () {
            return this._slideNumberProps;
        },
        /**
         * @type {SlideNumberProps}
         */
        set: function (value) {
            // NOTE: Slide Numbers: In order for Slide Numbers to function they need to be in all 3 files: master/layout/slide
            this._slideNumberProps = value;
            this._setSlideNum(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "newAutoPagedSlides", {
        get: function () {
            return this._newAutoPagedSlides;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add chart to Slide
     * @param {CHART_NAME|IChartMulti[]} type - chart type
     * @param {object[]} data - data object
     * @param {IChartOpts} options - chart options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addChart = function (type, data, options) {
        // FUTURE: TODO-VERSION-4: Remove first arg - only take data and opts, with "type" required on opts
        // Set `_type` on IChartOptsLib as its what is used as object is passed around
        var optionsWithType = options || {};
        optionsWithType._type = type;
        genObj.addChartDefinition(this, type, data, options);
        return this;
    };
    /**
     * Add image to Slide
     * @param {ImageProps} options - image options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addImage = function (options) {
        genObj.addImageDefinition(this, options);
        return this;
    };
    /**
     * Add media (audio/video) to Slide
     * @param {MediaProps} options - media options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addMedia = function (options) {
        genObj.addMediaDefinition(this, options);
        return this;
    };
    /**
     * Add speaker notes to Slide
     * @docs https://gitbrent.github.io/PptxGenJS/docs/speaker-notes.html
     * @param {string} notes - notes to add to slide
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addNotes = function (notes) {
        genObj.addNotesDefinition(this, notes);
        return this;
    };
    /**
     * Add shape to Slide
     * @param {SHAPE_NAME} shapeName - shape name
     * @param {ShapeProps} options - shape options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addShape = function (shapeName, options) {
        // NOTE: As of v3.1.0, <script> users are passing the old shape object from the shapes file (orig to the project)
        // But React/TypeScript users are passing the shapeName from an enum, which is a simple string, so lets cast
        // <script./> => `pptx.shapes.RECTANGLE` [string] "rect" ... shapeName['name'] = 'rect'
        // TypeScript => `pptxgen.shapes.RECTANGLE` [string] "rect" ... shapeName = 'rect'
        // let shapeNameDecode = typeof shapeName === 'object' && shapeName['name'] ? shapeName['name'] : shapeName
        genObj.addShapeDefinition(this, shapeName, options);
        return this;
    };
    /**
     * Add table to Slide
     * @param {TableRow[]} tableRows - table rows
     * @param {TableProps} options - table options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addTable = function (tableRows, options) {
        // FUTURE: we pass `this` - we dont need to pass layouts - they can be read from this!
        this._newAutoPagedSlides = genObj.addTableDefinition(this, tableRows, options, this._slideLayout, this._presLayout, this.addSlide, this.getSlide);
        return this;
    };
    /**
     * Add text to Slide
     * @param {string|TextProps[]} text - text string or complex object
     * @param {TextPropsOptions} options - text options
     * @return {PresSlide} this Slide
     */
    Slide.prototype.addText = function (text, options) {
        var textParam = typeof text === 'string' || typeof text === 'number'
            ? [{ text: text, options: options }]
            : text;
        genObj.addTextDefinition(this, textParam, options, false);
        return this;
    };
    return Slide;
}());
export default Slide;
//# sourceMappingURL=slide.js.map