/**
 * PptxGenJS: Utility Methods
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { EMU, REGEX_HEX_COLOR, DEF_FONT_COLOR, ONEPT, SchemeColor } from './core-enums';
/**
 * Translates any type of `x`/`y`/`w`/`h` prop to EMU
 * - guaranteed to return a result regardless of undefined, null, etc. (0)
 * - {number} - 12800 (EMU)
 * - {number} - 0.5 (inches)
 * - {string} - "75%"
 * @param {number|string} size - numeric ("5.5") or percentage ("90%")
 * @param {'X' | 'Y'} xyDir - direction
 * @param {PresLayout} layout - presentation layout
 * @returns {number} calculated size
 */
export function getSmartParseNumber(size, xyDir, layout) {
    // FIRST: Convert string numeric value if reqd
    if (typeof size === 'string' && !isNaN(Number(size)))
        size = Number(size);
    // CASE 1: Number in inches
    // Assume any number less than 100 is inches
    if (typeof size === 'number' && size < 100)
        return inch2Emu(size);
    // CASE 2: Number is already converted to something other than inches
    // Assume any number greater than 100 sure isnt inches! Just return it (assume value is EMU already).
    if (typeof size === 'number' && size >= 100)
        return size;
    // CASE 3: Percentage (ex: '50%')
    if (typeof size === 'string' && size.includes('%')) {
        if (xyDir && xyDir === 'X')
            return Math.round((parseFloat(size) / 100) * layout.width);
        if (xyDir && xyDir === 'Y')
            return Math.round((parseFloat(size) / 100) * layout.height);
        // Default: Assume width (x/cx)
        return Math.round((parseFloat(size) / 100) * layout.width);
    }
    // LAST: Default value
    return 0;
}
/**
 * Basic UUID Generator Adapted
 * @link https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#answer-2117523
 * @param {string} uuidFormat - UUID format
 * @returns {string} UUID
 */
export function getUuid(uuidFormat) {
    return uuidFormat.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Replace special XML characters with HTML-encoded strings
 * @param {string} xml - XML string to encode
 * @returns {string} escaped XML
 */
export function encodeXmlEntities(xml) {
    // NOTE: Dont use short-circuit eval here as value c/b "0" (zero) etc.!
    if (typeof xml === 'undefined' || xml == null)
        return '';
    return xml.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
/**
 * Convert inches into EMU
 * @param {number|string} inches - as string or number
 * @returns {number} EMU value
 */
export function inch2Emu(inches) {
    // NOTE: Provide Caller Safety: Numbers may get conv<->conv during flight, so be kind and do some simple checks to ensure inches were passed
    // Any value over 100 damn sure isnt inches, so lets assume its in EMU already, therefore, just return the same value
    if (typeof inches === 'number' && inches > 100)
        return inches;
    if (typeof inches === 'string')
        inches = Number(inches.replace(/in*/gi, ''));
    return Math.round(EMU * inches);
}
/**
 * Convert `pt` into points (using `ONEPT`)
 * @param {number|string} pt
 * @returns {number} value in points (`ONEPT`)
 */
export function valToPts(pt) {
    var points = Number(pt) || 0;
    return isNaN(points) ? 0 : Math.round(points * ONEPT);
}
/**
 * Convert degrees (0..360) to PowerPoint `rot` value
 * @param {number} d degrees
 * @returns {number} calculated `rot` value
 */
export function convertRotationDegrees(d) {
    d = d || 0;
    return Math.round((d > 360 ? d - 360 : d) * 60000);
}
/**
 * Converts component value to hex value
 * @param {number} c - component color
 * @returns {string} hex string
 */
export function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
/**
 * Converts RGB colors from css selectors to Hex for Presentation colors
 * @param {number} r - red value
 * @param {number} g - green value
 * @param {number} b - blue value
 * @returns {string} XML string
 */
export function rgbToHex(r, g, b) {
    return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
}
/**  TODO: FUTURE: TODO-4.0:
 * @date 2022-04-10
 * @tldr this s/b a private method with all current calls switched to `genXmlColorSelection()`
 * @desc lots of code calls this method
 * @example [gen-charts.tx] `strXml += '<a:solidFill>' + createColorElement(seriesColor, `<a:alpha val="${Math.round(opts.chartColorsOpacity * 1000)}"/>`) + '</a:solidFill>'`
 * Thi sis wrong. We s/b calling `genXmlColorSelection()` instead as it returns `<a:solidfill>BLAH</a:solidFill>`!!
 */
/**
 * Create either a `a:schemeClr` - (scheme color) or `a:srgbClr` (hexa representation).
 * @param {string|SCHEME_COLORS} colorStr - hexa representation (eg. "FFFF00") or a scheme color constant (eg. pptx.SchemeColor.ACCENT1)
 * @param {string} innerElements - additional elements that adjust the color and are enclosed by the color element
 * @returns {string} XML string
 */
export function createColorElement(colorStr, innerElements) {
    var colorVal = (colorStr || '').replace('#', '');
    if (!REGEX_HEX_COLOR.test(colorVal) &&
        colorVal !== SchemeColor.background1 &&
        colorVal !== SchemeColor.background2 &&
        colorVal !== SchemeColor.text1 &&
        colorVal !== SchemeColor.text2 &&
        colorVal !== SchemeColor.accent1 &&
        colorVal !== SchemeColor.accent2 &&
        colorVal !== SchemeColor.accent3 &&
        colorVal !== SchemeColor.accent4 &&
        colorVal !== SchemeColor.accent5 &&
        colorVal !== SchemeColor.accent6) {
        console.warn("\"".concat(colorVal, "\" is not a valid scheme color or hex RGB! \"").concat(DEF_FONT_COLOR, "\" used instead. Only provide 6-digit RGB or 'pptx.SchemeColor' values!"));
        colorVal = DEF_FONT_COLOR;
    }
    var tagName = REGEX_HEX_COLOR.test(colorVal) ? 'srgbClr' : 'schemeClr';
    var colorAttr = 'val="' + (REGEX_HEX_COLOR.test(colorVal) ? colorVal.toUpperCase() : colorVal) + '"';
    return innerElements ? "<a:".concat(tagName, " ").concat(colorAttr, ">").concat(innerElements, "</a:").concat(tagName, ">") : "<a:".concat(tagName, " ").concat(colorAttr, "/>");
}
/**
 * Creates `a:glow` element
 * @param {TextGlowProps} options glow properties
 * @param {TextGlowProps} defaults defaults for unspecified properties in `opts`
 * @see http://officeopenxml.com/drwSp-effects.php
 * { size: 8, color: 'FFFFFF', opacity: 0.75 };
 */
export function createGlowElement(options, defaults) {
    var strXml = '';
    var opts = __assign(__assign({}, defaults), options);
    var size = Math.round(opts.size * ONEPT);
    var color = opts.color;
    var opacity = Math.round(opts.opacity * 100000);
    strXml += "<a:glow rad=\"".concat(size, "\">");
    strXml += createColorElement(color, "<a:alpha val=\"".concat(opacity, "\"/>"));
    strXml += '</a:glow>';
    return strXml;
}
/**
 * Create color selection
 * @param {Color | ShapeFillProps | ShapeLineProps} props fill props
 * @returns XML string
 */
export function genXmlColorSelection(props) {
    var fillType = 'solid';
    var colorVal = '';
    var internalElements = '';
    var outText = '';
    if (props) {
        if (typeof props === 'string')
            colorVal = props;
        else {
            if (props.type)
                fillType = props.type;
            if (props.color)
                colorVal = props.color;
            if (props.alpha)
                internalElements += "<a:alpha val=\"".concat(Math.round((100 - props.alpha) * 1000), "\"/>"); // DEPRECATED: @deprecated v3.3.0
            if (props.transparency)
                internalElements += "<a:alpha val=\"".concat(Math.round((100 - props.transparency) * 1000), "\"/>");
        }
        switch (fillType) {
            case 'solid':
                outText += "<a:solidFill>".concat(createColorElement(colorVal, internalElements), "</a:solidFill>");
                break;
            default: // @note need a statement as having only "break" is removed by rollup, then tiggers "no-default" js-linter
                outText += '';
                break;
        }
    }
    return outText;
}
/**
 * Get a new rel ID (rId) for charts, media, etc.
 * @param {PresSlide} target - the slide to use
 * @returns {number} count of all current rels plus 1 for the caller to use as its "rId"
 */
export function getNewRelId(target) {
    return target._rels.length + target._relsChart.length + target._relsMedia.length + 1;
}
/**
 * Checks shadow options passed by user and performs corrections if needed.
 * @param {ShadowProps} ShadowProps - shadow options
 */
export function correctShadowOptions(ShadowProps) {
    if (!ShadowProps || typeof ShadowProps !== 'object') {
        // console.warn("`shadow` options must be an object. Ex: `{shadow: {type:'none'}}`")
        return;
    }
    // OPT: `type`
    if (ShadowProps.type !== 'outer' && ShadowProps.type !== 'inner' && ShadowProps.type !== 'none') {
        console.warn('Warning: shadow.type options are `outer`, `inner` or `none`.');
        ShadowProps.type = 'outer';
    }
    // OPT: `angle`
    if (ShadowProps.angle) {
        // A: REALITY-CHECK
        if (isNaN(Number(ShadowProps.angle)) || ShadowProps.angle < 0 || ShadowProps.angle > 359) {
            console.warn('Warning: shadow.angle can only be 0-359');
            ShadowProps.angle = 270;
        }
        // B: ROBUST: Cast any type of valid arg to int: '12', 12.3, etc. -> 12
        ShadowProps.angle = Math.round(Number(ShadowProps.angle));
    }
    // OPT: `opacity`
    if (ShadowProps.opacity) {
        // A: REALITY-CHECK
        if (isNaN(Number(ShadowProps.opacity)) || ShadowProps.opacity < 0 || ShadowProps.opacity > 1) {
            console.warn('Warning: shadow.opacity can only be 0-1');
            ShadowProps.opacity = 0.75;
        }
        // B: ROBUST: Cast any type of valid arg to int: '12', 12.3, etc. -> 12
        ShadowProps.opacity = Number(ShadowProps.opacity);
    }
    // OPT: `color`
    if (ShadowProps.color) {
        // INCORRECT FORMAT
        if (ShadowProps.color.startsWith('#')) {
            console.warn('Warning: shadow.color should not include hash (#) character, , e.g. "FF0000"');
            ShadowProps.color = ShadowProps.color.replace('#', '');
        }
    }
    return ShadowProps;
}
//# sourceMappingURL=gen-utils.js.map