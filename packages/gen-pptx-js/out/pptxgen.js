/**
 *  :: pptxgen.ts ::
 *
 *  JavaScript framework that creates PowerPoint (pptx) presentations
 *  https://github.com/gitbrent/PptxGenJS
 *
 *  This framework is released under the MIT Public License (MIT)
 *
 *  PptxGenJS (C) 2015-present Brent Ely -- https://github.com/gitbrent
 *
 *  Some code derived from the OfficeGen project:
 *  github.com/Ziv-Barber/officegen/ (Copyright 2013 Ziv Barber)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Units of Measure used in PowerPoint documents
 *
 * PowerPoint units are in `DXA` (except for font sizing)
 * - 1 inch is 1440 DXA
 * - 1 inch is 72 points
 * - 1 DXA is 1/20th's of a point
 * - 20 DXA is 1 point
 *
 * Another form of measurement using is an `EMU`
 * - 914400 EMUs is 1 inch
 * 12700 EMUs is 1 point
 *
 * @see https://startbigthinksmall.wordpress.com/2010/01/04/points-inches-and-emus-measuring-units-in-office-open-xml/
 */
/**
 * Object Layouts
 *
 * - 16x9 (10" x 5.625")
 * - 16x10 (10" x 6.25")
 * - 4x3 (10" x 7.5")
 * - Wide (13.33" x 7.5")
 * - [custom] (any size)
 *
 * @see https://docs.microsoft.com/en-us/office/open-xml/structure-of-a-presentationml-document
 * @see https://docs.microsoft.com/en-us/previous-versions/office/developer/office-2010/hh273476(v=office.14)
 */
import JSZip from 'jszip';
import Slide from './slide';
import { AlignH, AlignV, CHART_TYPE, ChartType, DEF_PRES_LAYOUT, DEF_PRES_LAYOUT_NAME, DEF_SLIDE_MARGIN_IN, EMU, OutputType, SCHEME_COLOR_NAMES, SHAPE_TYPE, SchemeColor, ShapeType, } from './core-enums';
import * as genCharts from './gen-charts';
import * as genObj from './gen-objects';
import * as genMedia from './gen-media';
import * as genTable from './gen-tables';
import * as genXml from './gen-xml';
var VERSION = '3.13.0-beta.0-20230416-2140';
var layout4x3 = {
    name: 'screen4x3',
    width: 9144000,
    height: 6858000,
};
var layout16x9 = {
    name: 'screen16x9',
    width: 9144000,
    height: 5143500,
};
var layout16x10 = {
    name: 'screen16x10',
    width: 9144000,
    height: 5715000,
};
var layoutWide = {
    name: 'custom',
    width: 12192000,
    height: 6858000,
};
// Set available layouts
var LAYOUTS = Object.freeze({
    LAYOUT_4x3: layout4x3,
    LAYOUT_16x9: layout16x9,
    LAYOUT_16x10: layout16x10,
    LAYOUT_WIDE: layoutWide,
});
var PptxGenJS = /** @class */ (function () {
    function PptxGenJS() {
        var _this = this;
        // Property getters/setters
        /**
         * Presentation layout name
         * Standard layouts:
         * - 'LAYOUT_4x3'   (10"    x 7.5")
         * - 'LAYOUT_16x9'  (10"    x 5.625")
         * - 'LAYOUT_16x10' (10"    x 6.25")
         * - 'LAYOUT_WIDE'  (13.33" x 7.5")
         * Custom layouts:
         * Use `pptx.defineLayout()` to create custom layouts (e.g.: 'A4')
         * @type {string}
         * @see https://support.office.com/en-us/article/Change-the-size-of-your-slides-040a811c-be43-40b9-8d04-0de5ed79987e
         */
        this._layout = DEF_PRES_LAYOUT;
        /**
         * PptxGenJS Library Version
         */
        this._version = VERSION;
        /**
         * @type {ThemeProps}
         */
        this._theme = {};
        // Exposed class props
        this._alignH = AlignH;
        this._alignV = AlignV;
        this._chartType = ChartType;
        this._outputType = OutputType;
        this._schemeColor = SchemeColor;
        this._shapeType = ShapeType;
        /**
         * @depricated use `ChartType`
         */
        this._charts = CHART_TYPE;
        /**
         * @depricated use `SchemeColor`
         */
        this._colors = SCHEME_COLOR_NAMES;
        /**
         * @depricated use `ShapeType`
         */
        this._shapes = SHAPE_TYPE;
        /**
         * Provides an API for `addTableDefinition` to create slides as needed for auto-paging
         * @param {AddSlideProps} options - slide masterName and/or sectionTitle
         * @return {PresSlide} new Slide
         */
        this.addNewSlide = function (options) {
            var _a, _b;
            // Continue using sections if the first slide using auto-paging has a Section
            var sectAlreadyInUse = _this.sections.length > 0 &&
                _this.sections[_this.sections.length - 1]._slides.filter(function (slide) {
                    return slide._slideNum ===
                        _this.slides[_this.slides.length - 1]._slideNum;
                }).length > 0;
            var opt = options !== null && options !== void 0 ? options : {};
            opt.sectionTitle = sectAlreadyInUse
                ? (_b = (_a = _this.sections[_this.sections.length - 1]) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : null
                : null;
            return _this.addSlide(opt);
        };
        /**
         * Provides an API for `addTableDefinition` to get slide reference by number
         * @param {number} slideNum - slide number
         * @return {PresSlide} Slide
         * @since 3.0.0
         */
        this.getSlide = function (slideNum) {
            return _this.slides.filter(function (slide) { return slide._slideNum === slideNum; })[0];
        };
        /**
         * Enables the `Slide` class to set PptxGenJS [Presentation] master/layout slidenumbers
         * @param {SlideNumberProps} slideNum - slide number config
         */
        this.setSlideNumber = function (slideNum) {
            // 1: Add slideNumber to slideMaster1.xml
            _this.masterSlide._slideNumberProps = slideNum;
            // 2: Add slideNumber to DEF_PRES_LAYOUT_NAME layout
            _this.slideLayouts.filter(function (layout) { return layout._name === DEF_PRES_LAYOUT_NAME; })[0]._slideNumberProps = slideNum;
        };
        /**
         * Create all chart and media rels for this Presentation
         * @param {PresSlide | SlideLayout} slide - slide with rels
         * @param {JSZip} zip - JSZip instance
         * @param {Promise<string>[]} chartPromises - promise array
         */
        this.createChartMediaRels = function (slide, zip, chartPromises) {
            slide._relsChart.forEach(function (rel) {
                return chartPromises.push(genCharts.createExcelWorksheet(rel, zip));
            });
            slide._relsMedia.forEach(function (rel) {
                var _a;
                if (rel.type !== 'online' && rel.type !== 'hyperlink') {
                    // A: Loop vars
                    var data = rel.data && typeof rel.data === 'string' ? rel.data : '';
                    // B: Users will undoubtedly pass various string formats, so correct prefixes as needed
                    if (!data.includes(',') && !data.includes(';'))
                        data = 'image/png;base64,' + data;
                    else if (!data.includes(','))
                        data = 'image/png;base64,' + data;
                    else if (!data.includes(';'))
                        data = 'image/png;' + data;
                    // C: Add media
                    zip.file(rel.Target.replace('..', 'ppt'), (_a = data.split(',').pop()) !== null && _a !== void 0 ? _a : '', { base64: true });
                }
            });
        };
        /**
         * Create and export the .pptx file
         * @param {string} exportName - output file type
         * @param {Blob} blobContent - Blob content
         * @return {Promise<string>} Promise with file name
         */
        this.writeFileToBrowser = function (exportName, blobContent) { return __awaiter(_this, void 0, void 0, function () {
            var eleLink, url_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eleLink = document.createElement('a');
                        eleLink.setAttribute('style', 'display:none;');
                        eleLink.dataset.interception = 'off'; // @see https://docs.microsoft.com/en-us/sharepoint/dev/spfx/hyperlinking
                        document.body.appendChild(eleLink);
                        if (!window.URL.createObjectURL) return [3 /*break*/, 2];
                        url_1 = window.URL.createObjectURL(new Blob([blobContent], {
                            type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        }));
                        eleLink.href = url_1;
                        eleLink.download = exportName;
                        eleLink.click();
                        // Clean-up (NOTE: Add a slight delay before removing to avoid 'blob:null' error in Firefox Issue#81)
                        setTimeout(function () {
                            window.URL.revokeObjectURL(url_1);
                            document.body.removeChild(eleLink);
                        }, 100);
                        return [4 /*yield*/, Promise.resolve(exportName)];
                    case 1: 
                    // Done
                    return [2 /*return*/, _a.sent()];
                    case 2:
                        console.error('window.URL.createObjectURL is missing');
                        _a.label = 3;
                    case 3: return [2 /*return*/, ''];
                }
            });
        }); };
        /**
         * Create and export the .pptx file
         * @param {WRITE_OUTPUT_TYPE} outputType - output file type
         * @return {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} Promise with data or stream (node) or filename (browser)
         */
        this.exportPresentation = function (props) { return __awaiter(_this, void 0, void 0, function () {
            var arrChartPromises, arrMediaPromises, zip;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrChartPromises = [];
                        arrMediaPromises = [];
                        zip = new JSZip();
                        // STEP 1: Read/Encode all Media before zip as base64 content, etc. is required
                        this.slides.forEach(function (slide) {
                            arrMediaPromises = arrMediaPromises.concat(genMedia.encodeSlideMediaRels(slide));
                        });
                        this.slideLayouts.forEach(function (layout) {
                            arrMediaPromises = arrMediaPromises.concat(genMedia.encodeSlideMediaRels(layout));
                        });
                        arrMediaPromises = arrMediaPromises.concat(genMedia.encodeSlideMediaRels(this.masterSlide));
                        return [4 /*yield*/, Promise.all(arrMediaPromises).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var _a, _b, _c, _d, _e, _f, _g;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            // A: Add empty placeholder objects to slides that don't already have them
                                            this.slides.forEach(function (slide) {
                                                if (slide._slideLayout)
                                                    genObj.addPlaceholdersToSlideLayouts(slide);
                                            });
                                            // B: Add all required folders and files
                                            zip.folder('_rels');
                                            zip.folder('docProps');
                                            (_a = zip.folder('ppt')) === null || _a === void 0 ? void 0 : _a.folder('_rels');
                                            (_b = zip.folder('ppt/charts')) === null || _b === void 0 ? void 0 : _b.folder('_rels');
                                            zip.folder('ppt/embeddings');
                                            zip.folder('ppt/media');
                                            (_c = zip.folder('ppt/slideLayouts')) === null || _c === void 0 ? void 0 : _c.folder('_rels');
                                            (_d = zip.folder('ppt/slideMasters')) === null || _d === void 0 ? void 0 : _d.folder('_rels');
                                            (_e = zip.folder('ppt/slides')) === null || _e === void 0 ? void 0 : _e.folder('_rels');
                                            zip.folder('ppt/theme');
                                            (_f = zip.folder('ppt/notesMasters')) === null || _f === void 0 ? void 0 : _f.folder('_rels');
                                            (_g = zip.folder('ppt/notesSlides')) === null || _g === void 0 ? void 0 : _g.folder('_rels');
                                            zip.file('[Content_Types].xml', genXml.makeXmlContTypes(this.slides, this.slideLayouts, this.masterSlide)); // TODO: pass only `this` like below! 20200206
                                            zip.file('_rels/.rels', genXml.makeXmlRootRels());
                                            zip.file('docProps/app.xml', genXml.makeXmlApp(this.slides, this.company)); // TODO: pass only `this` like below! 20200206
                                            zip.file('docProps/core.xml', genXml.makeXmlCore(this.title, this.subject, this.author, this.revision)); // TODO: pass only `this` like below! 20200206
                                            zip.file('ppt/_rels/presentation.xml.rels', genXml.makeXmlPresentationRels(this.slides));
                                            zip.file('ppt/theme/theme1.xml', genXml.makeXmlTheme(this));
                                            zip.file('ppt/presentation.xml', genXml.makeXmlPresentation(this));
                                            zip.file('ppt/presProps.xml', genXml.makeXmlPresProps());
                                            zip.file('ppt/tableStyles.xml', genXml.makeXmlTableStyles());
                                            zip.file('ppt/viewProps.xml', genXml.makeXmlViewProps());
                                            // C: Create a Layout/Master/Rel/Slide file for each SlideLayout and Slide
                                            this.slideLayouts.forEach(function (layout, idx) {
                                                zip.file("ppt/slideLayouts/slideLayout".concat(idx + 1, ".xml"), genXml.makeXmlLayout(layout));
                                                zip.file("ppt/slideLayouts/_rels/slideLayout".concat(idx + 1, ".xml.rels"), genXml.makeXmlSlideLayoutRel(idx + 1, _this.slideLayouts));
                                            });
                                            this.slides.forEach(function (slide, idx) {
                                                zip.file("ppt/slides/slide".concat(idx + 1, ".xml"), genXml.makeXmlSlide(slide));
                                                zip.file("ppt/slides/_rels/slide".concat(idx + 1, ".xml.rels"), genXml.makeXmlSlideRel(_this.slides, _this.slideLayouts, idx + 1));
                                                // Create all slide notes related items. Notes of empty strings are created for slides which do not have notes specified, to keep track of _rels.
                                                zip.file("ppt/notesSlides/notesSlide".concat(idx + 1, ".xml"), genXml.makeXmlNotesSlide(slide));
                                                zip.file("ppt/notesSlides/_rels/notesSlide".concat(idx + 1, ".xml.rels"), genXml.makeXmlNotesSlideRel(idx + 1));
                                            });
                                            zip.file('ppt/slideMasters/slideMaster1.xml', genXml.makeXmlMaster(this.masterSlide, this.slideLayouts));
                                            zip.file('ppt/slideMasters/_rels/slideMaster1.xml.rels', genXml.makeXmlMasterRel(this.masterSlide, this.slideLayouts));
                                            zip.file('ppt/notesMasters/notesMaster1.xml', genXml.makeXmlNotesMaster());
                                            zip.file('ppt/notesMasters/_rels/notesMaster1.xml.rels', genXml.makeXmlNotesMasterRel());
                                            // D: Create all Rels (images, media, chart data)
                                            this.slideLayouts.forEach(function (layout) {
                                                _this.createChartMediaRels(layout, zip, arrChartPromises);
                                            });
                                            this.slides.forEach(function (slide) {
                                                _this.createChartMediaRels(slide, zip, arrChartPromises);
                                            });
                                            this.createChartMediaRels(this.masterSlide, zip, arrChartPromises);
                                            return [4 /*yield*/, Promise.all(arrChartPromises).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(props.outputType === 'STREAM')) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, zip.generateAsync({
                                                                        type: 'nodebuffer',
                                                                        compression: props.compression ? 'DEFLATE' : 'STORE',
                                                                    })];
                                                            case 1: 
                                                            // A: stream file
                                                            return [2 /*return*/, _a.sent()];
                                                            case 2:
                                                                if (!props.outputType) return [3 /*break*/, 4];
                                                                return [4 /*yield*/, zip.generateAsync({ type: props.outputType })];
                                                            case 3: 
                                                            // B: Node [fs]: Output type user option or default
                                                            return [2 /*return*/, _a.sent()];
                                                            case 4: return [4 /*yield*/, zip.generateAsync({
                                                                    type: 'blob',
                                                                    compression: props.compression ? 'DEFLATE' : 'STORE',
                                                                })];
                                                            case 5: 
                                                            // C: Browser: Output blob as app/ms-pptx
                                                            return [2 /*return*/, _a.sent()];
                                                        }
                                                    });
                                                }); })];
                                        case 1: 
                                        // E: Wait for Promises (if any) then generate the PPTX file
                                        return [2 /*return*/, _h.sent()];
                                    }
                                });
                            }); })];
                    case 1: 
                    // STEP 2: Wait for Promises (if any) then generate the PPTX file
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        // Set available layouts
        this.LAYOUTS = LAYOUTS;
        // Core
        this._author = 'PptxGenJS';
        this._company = 'PptxGenJS';
        this._revision = '1'; // Note: Must be a whole number
        this._subject = 'PptxGenJS Presentation';
        this._title = 'PptxGenJS Presentation';
        // PptxGenJS props
        this._presLayout = {
            name: this.LAYOUTS[DEF_PRES_LAYOUT].name,
            _sizeW: this.LAYOUTS[DEF_PRES_LAYOUT].width,
            _sizeH: this.LAYOUTS[DEF_PRES_LAYOUT].height,
            width: this.LAYOUTS[DEF_PRES_LAYOUT].width,
            height: this.LAYOUTS[DEF_PRES_LAYOUT].height,
        };
        this._rtlMode = false;
        //
        this._slideLayouts = [
            {
                _margin: DEF_SLIDE_MARGIN_IN,
                _name: DEF_PRES_LAYOUT_NAME,
                _presLayout: this._presLayout,
                _rels: [],
                _relsChart: [],
                _relsMedia: [],
                _slide: null,
                _slideNum: 1000,
                _slideNumberProps: null,
                _slideObjects: [],
            },
        ];
        this._slides = [];
        this._sections = [];
        this._masterSlide = {
            addChart: function () { return ({}); },
            addImage: function () { return ({}); },
            addMedia: function () { return ({}); },
            addNotes: function () { return ({}); },
            addShape: function () { return ({}); },
            addTable: function () { return ({}); },
            addText: function () { return ({}); },
            newAutoPagedSlides: [],
            _name: undefined,
            _presLayout: this._presLayout,
            _rId: 0,
            _rels: [],
            _relsChart: [],
            _relsMedia: [],
            _slideId: 0,
            _slideLayout: null,
            _slideNum: 0,
            _slideNumberProps: null,
            _slideObjects: [],
        };
    }
    Object.defineProperty(PptxGenJS.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        set: function (value) {
            var newLayout = this.LAYOUTS[value];
            if (newLayout) {
                this._layout = value;
                this._presLayout = newLayout;
            }
            else {
                throw new Error('UNKNOWN-LAYOUT');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "company", {
        get: function () {
            return this._company;
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "revision", {
        get: function () {
            return this._revision;
        },
        set: function (value) {
            this._revision = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (value) {
            this._theme = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "rtlMode", {
        get: function () {
            return this._rtlMode;
        },
        set: function (value) {
            this._rtlMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "masterSlide", {
        get: function () {
            return this._masterSlide;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "slides", {
        get: function () {
            return this._slides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "sections", {
        get: function () {
            return this._sections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "slideLayouts", {
        get: function () {
            return this._slideLayouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "AlignH", {
        get: function () {
            return this._alignH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "AlignV", {
        get: function () {
            return this._alignV;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "ChartType", {
        get: function () {
            return this._chartType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "OutputType", {
        get: function () {
            return this._outputType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "presLayout", {
        get: function () {
            return this._presLayout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "SchemeColor", {
        get: function () {
            return this._schemeColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "ShapeType", {
        get: function () {
            return this._shapeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "charts", {
        get: function () {
            return this._charts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PptxGenJS.prototype, "shapes", {
        get: function () {
            return this._shapes;
        },
        enumerable: false,
        configurable: true
    });
    // EXPORT METHODS
    /**
     * Export the current Presentation to stream
     * @param {WriteBaseProps} props - output properties
     * @returns {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} file stream
     */
    PptxGenJS.prototype.stream = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exportPresentation({
                            compression: props === null || props === void 0 ? void 0 : props.compression,
                            outputType: 'STREAM',
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export the current Presentation as JSZip content with the selected type
     * @param {WriteProps} props output properties
     * @returns {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} file content in selected type
     */
    PptxGenJS.prototype.write = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var propsOutpType, propsCompress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        propsOutpType = typeof props === 'object' && (props === null || props === void 0 ? void 0 : props.outputType)
                            ? props.outputType
                            : props
                                ? props
                                : null;
                        propsCompress = typeof props === 'object' && (props === null || props === void 0 ? void 0 : props.compression)
                            ? props.compression
                            : false;
                        return [4 /*yield*/, this.exportPresentation({
                                compression: propsCompress,
                                outputType: propsOutpType,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export the current Presentation. Writes file to local file system if `fs` exists, otherwise, initiates download in browsers
     * @param {WriteFileProps} props - output file properties
     * @returns {Promise<string>} the presentation name
     */
    PptxGenJS.prototype.writeFile = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var fs, propsExpName, propsCompress, fileName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fs = typeof require !== 'undefined' && typeof window === 'undefined'
                            ? require('fs')
                            : null;
                        // DEPRECATED: @deprecated v3.5.0 - fileName - [[remove in v4.0.0]]
                        if (typeof props === 'string')
                            console.log('Warning: `writeFile(filename)` is deprecated - please use `WriteFileProps` argument (v3.5.0)');
                        propsExpName = typeof props === 'object' && (props === null || props === void 0 ? void 0 : props.fileName)
                            ? props.fileName
                            : typeof props === 'string'
                                ? props
                                : '';
                        propsCompress = typeof props === 'object' && (props === null || props === void 0 ? void 0 : props.compression)
                            ? props.compression
                            : false;
                        fileName = propsExpName
                            ? propsExpName.toString().toLowerCase().endsWith('.pptx')
                                ? propsExpName
                                : propsExpName + '.pptx'
                            : 'Presentation.pptx';
                        return [4 /*yield*/, this.exportPresentation({
                                compression: propsCompress,
                                outputType: fs ? 'nodebuffer' : null,
                            }).then(function (content) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!fs) return [3 /*break*/, 2];
                                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                    fs.writeFile(fileName, content, function (err) {
                                                        if (err) {
                                                            reject(err);
                                                        }
                                                        else {
                                                            resolve(fileName);
                                                        }
                                                    });
                                                })];
                                        case 1: 
                                        // Node: Output
                                        return [2 /*return*/, _a.sent()];
                                        case 2: return [4 /*yield*/, this.writeFileToBrowser(fileName, content)];
                                        case 3: 
                                        // Browser: Output blob as app/ms-pptx
                                        return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // PRESENTATION METHODS
    /**
     * Add a new Section to Presentation
     * @param {ISectionProps} section - section properties
     * @example pptx.addSection({ title:'Charts' });
     */
    PptxGenJS.prototype.addSection = function (section) {
        if (!section)
            console.warn('addSection requires an argument');
        else if (!section.title)
            console.warn('addSection requires a title');
        var newSection = {
            _type: 'user',
            _slides: [],
            title: section.title,
        };
        if (section.order)
            this.sections.splice(section.order, 0, newSection);
        else
            this._sections.push(newSection);
    };
    /**
     * Add a new Slide to Presentation
     * @param {AddSlideProps} options - slide options
     * @returns {PresSlide} the new Slide
     */
    PptxGenJS.prototype.addSlide = function (options) {
        // TODO: DEPRECATED: arg0 string "masterSlideName" dep as of 3.2.0
        var masterSlideName = typeof options === 'string'
            ? options
            : (options === null || options === void 0 ? void 0 : options.masterName)
                ? options.masterName
                : '';
        var slideLayout = {
            _name: this.LAYOUTS[DEF_PRES_LAYOUT].name,
            _presLayout: this.presLayout,
            _rels: [],
            _relsChart: [],
            _relsMedia: [],
            _slideNum: this.slides.length + 1,
        };
        if (masterSlideName) {
            var tmpLayout = this.slideLayouts.filter(function (layout) { return layout._name === masterSlideName; })[0];
            if (tmpLayout)
                slideLayout = tmpLayout;
        }
        var newSlide = new Slide({
            addSlide: this.addNewSlide,
            getSlide: this.getSlide,
            presLayout: this.presLayout,
            setSlideNum: this.setSlideNumber,
            slideId: this.slides.length + 256,
            slideRId: this.slides.length + 2,
            slideNumber: this.slides.length + 1,
            slideLayout: slideLayout,
        });
        // A: Add slide to pres
        this._slides.push(newSlide);
        // B: Sections
        // B-1: Add slide to section (if any provided)
        // B-2: Handle slides without a section when sections are already is use ("loose" slides arent allowed, they all need a section)
        if (options === null || options === void 0 ? void 0 : options.sectionTitle) {
            var sect = this.sections.filter(function (section) { return section.title === options.sectionTitle; })[0];
            if (!sect)
                console.warn("addSlide: unable to find section with title: \"".concat(options.sectionTitle, "\""));
            else
                sect._slides.push(newSlide);
        }
        else if (this.sections &&
            this.sections.length > 0 &&
            !(options === null || options === void 0 ? void 0 : options.sectionTitle)) {
            var lastSect = this._sections[this.sections.length - 1];
            // CASE 1: The latest section is a default type - just add this one
            if (lastSect._type === 'default')
                lastSect._slides.push(newSlide);
            // CASE 2: There latest section is NOT a default type - create the defualt, add this slide
            else {
                this._sections.push({
                    title: "Default-".concat(this.sections.filter(function (sect) { return sect._type === 'default'; }).length + 1),
                    _type: 'default',
                    _slides: [newSlide],
                });
            }
        }
        return newSlide;
    };
    /**
     * Create a custom Slide Layout in any size
     * @param {PresLayout} layout - layout properties
     * @example pptx.defineLayout({ name:'A3', width:16.5, height:11.7 });
     */
    PptxGenJS.prototype.defineLayout = function (layout) {
        // @see https://support.office.com/en-us/article/Change-the-size-of-your-slides-040a811c-be43-40b9-8d04-0de5ed79987e
        if (!layout)
            console.warn('defineLayout requires `{name, width, height}`');
        else if (!layout.name)
            console.warn('defineLayout requires `name`');
        else if (!layout.width)
            console.warn('defineLayout requires `width`');
        else if (!layout.height)
            console.warn('defineLayout requires `height`');
        else if (typeof layout.height !== 'number')
            console.warn('defineLayout `height` should be a number (inches)');
        else if (typeof layout.width !== 'number')
            console.warn('defineLayout `width` should be a number (inches)');
        this.LAYOUTS[layout.name] = {
            name: layout.name,
            _sizeW: Math.round(Number(layout.width) * EMU),
            _sizeH: Math.round(Number(layout.height) * EMU),
            width: Math.round(Number(layout.width) * EMU),
            height: Math.round(Number(layout.height) * EMU),
        };
    };
    /**
     * Create a new slide master [layout] for the Presentation
     * @param {SlideMasterProps} props - layout properties
     */
    PptxGenJS.prototype.defineSlideMaster = function (props) {
        if (!props.title)
            throw new Error('defineSlideMaster() object argument requires a `title` value. (https://gitbrent.github.io/PptxGenJS/docs/masters.html)');
        var newLayout = {
            _margin: props.margin || DEF_SLIDE_MARGIN_IN,
            _name: props.title,
            _presLayout: this.presLayout,
            _rels: [],
            _relsChart: [],
            _relsMedia: [],
            _slide: null,
            _slideNum: 1000 + this.slideLayouts.length + 1,
            _slideNumberProps: props.slideNumber || null,
            _slideObjects: [],
            background: props.background || null,
            bkgd: props.bkgd || null,
        };
        // STEP 1: Create the Slide Master/Layout
        genObj.createSlideMaster(props, newLayout);
        // STEP 2: Add it to layout defs
        this.slideLayouts.push(newLayout);
        // STEP 3: Add background (image data/path must be captured before `exportPresentation()` is called)
        if (props.background || props.bkgd)
            genObj.addBackgroundDefinition(props.background, newLayout);
        // STEP 4: Add slideNumber to master slide (if any)
        if (newLayout._slideNumberProps && !this.masterSlide._slideNumberProps)
            this.masterSlide._slideNumberProps = newLayout._slideNumberProps;
    };
    // HTML-TO-SLIDES METHODS
    /**
     * Reproduces an HTML table as a PowerPoint table - including column widths, style, etc. - creates 1 or more slides as needed
     * @param {string} eleId - table HTML element ID
     * @param {TableToSlidesProps} options - generation options
     */
    PptxGenJS.prototype.tableToSlides = function (eleId, options) {
        if (options === void 0) { options = {}; }
        // @note `verbose` option is undocumented; used for verbose output of layout process
        genTable.genTableToSlides(this, eleId, options, (options === null || options === void 0 ? void 0 : options.masterSlideName)
            ? this.slideLayouts.filter(function (layout) { return layout._name === options.masterSlideName; })[0]
            : null);
    };
    return PptxGenJS;
}());
export default PptxGenJS;
//# sourceMappingURL=pptxgen.js.map