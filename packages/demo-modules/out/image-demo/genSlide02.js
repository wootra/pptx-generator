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
import { IMAGE_PATHS, BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R, BASE_CODE_OPTS, COLOR_BLUE, CODE_STYLE, } from '../enums';
/**
 * SLIDE 4: Image URLs
 * @param {PptxGenJS} pptx
 */
export function genSlide02(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Images' });
    slide.addTable([
        [
            {
                text: 'Image Examples: Image URLs',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-images.html');
    slide.slideNumber = { x: '50%', y: '95%', color: COLOR_BLUE };
    // TOP-LEFT: jpg
    slide.addImage({
        path: IMAGE_PATHS.ccLogo.path,
        x: 0.5,
        y: 0.6,
        h: 2.68,
        w: 3.58,
    });
    slide.addText([{ text: "path:\"".concat(IMAGE_PATHS.ccLogo.path, "\"") }], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 0.5, y: 3.28, h: 0.7, w: 3.58 }), CODE_STYLE));
    // TOP-CENTER: png
    slide.addImage({
        path: IMAGE_PATHS.wikimedia2.path,
        x: 4.6,
        y: 0.6,
        h: 2.64,
        w: 3.45,
    });
    slide.addText([{ text: "path:\"".concat(IMAGE_PATHS.wikimedia2.path, "\"") }], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 4.6, y: 3.24, h: 0.7, w: 3.45 }), CODE_STYLE));
    // TOP-RIGHT: relative-path test
    // NOTE: Node will throw exception when using "/" path
    // FIXME:
    console.log("".concat(typeof window === 'undefined' ? '..' : '').concat(IMAGE_PATHS.ccLicenseComp.path));
    // WIP: ^^^
    slide.addImage({
        path: "".concat(typeof window === 'undefined' ? '..' : '').concat(IMAGE_PATHS.ccLicenseComp.path),
        x: 8.57,
        y: 0.6,
        h: 2.52,
        w: 4.26,
    });
    slide.addText([
        { text: '// Example: local path', options: { breakLine: true } },
        { text: "path:\"".concat(IMAGE_PATHS.ccLicenseComp.path, "\"") },
    ], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 8.57, y: 3.12, h: 0.82, w: 4.26 }), CODE_STYLE));
    // BOTTOM: wide, url-sourced
    slide.addImage({
        path: IMAGE_PATHS.sydneyBridge.path,
        x: 0.5,
        y: 4.35,
        h: 1.8,
        w: 12.33,
    });
    slide.addText([
        {
            text: '// Example: URL variables, plus more than one ".jpg"',
            options: { breakLine: true },
        },
        { text: "path:\"".concat(IMAGE_PATHS.sydneyBridge.path, "\"") },
    ], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 0.5, y: 6.15, h: 0.8, w: 12.33 }), CODE_STYLE));
}
//# sourceMappingURL=genSlide02.js.map