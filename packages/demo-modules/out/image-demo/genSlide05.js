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
import { IMAGE_PATHS, BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R, BASE_CODE_OPTS, COLOR_BLUE, CODE_STYLE, TITLE_STYLE, } from '../enums';
/**
 * SLIDE 5: Image Shadow
 * @param {PptxGenJS} pptx
 */
export function genSlide05(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Images' });
    slide.addTable([
        [
            {
                text: 'Image Examples: Image Shadows',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-images.html');
    slide.slideNumber = { x: '50%', y: '95%', w: 1, h: 1, color: COLOR_BLUE };
    // EXAMPLES
    // type:none
    var shadow1 = { shadow: { type: 'none' } };
    slide.addText('Shadow: `type:none`', __assign({ x: 0.5, y: 0.6, h: 0.4, w: 6.0 }, TITLE_STYLE));
    slide.addText([{ text: JSON.stringify(shadow1, null, 2) }], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 0.5, y: 1.0, h: 1.0, w: 6 }), CODE_STYLE));
    slide.addImage(__assign({ path: IMAGE_PATHS.tokyoSubway.path, x: 7.0, y: 0.6, h: 1.4, w: 2.31 }, shadow1));
    // type:inner
    var shadow2 = {
        shadow: {
            type: 'inner',
            opacity: 0.5,
            blur: 20,
            color: '000000',
            offset: 20,
            angle: 320,
        },
    };
    slide.addText('Shadow: `type:inner`', __assign({ x: 0.5, y: 2.45, h: 0.4, w: 6.0 }, TITLE_STYLE));
    slide.addText([{ text: JSON.stringify(shadow2, null, 2) }], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 0.5, y: 2.85, h: 1.7, w: 6 }), CODE_STYLE));
    slide.addImage(__assign({
        path: IMAGE_PATHS.tokyoSubway.path,
        x: 7.0,
        y: 2.45,
        h: 2.1,
        w: 3.47,
    }, shadow2));
    // type:outer
    var shadow3 = {
        shadow: {
            type: 'outer',
            opacity: 0.35,
            blur: 20,
            color: '000000',
            offset: 20,
            angle: 320,
        },
    };
    slide.addText('Shadow: `type:outer`', __assign({ x: 0.5, y: 5.0, h: 0.4, w: 6.0 }, TITLE_STYLE));
    slide.addText([{ text: JSON.stringify(shadow3, null, 2) }], __assign(__assign(__assign({}, BASE_CODE_OPTS), { x: 0.5, y: 5.4, h: 1.7, w: 6 }), CODE_STYLE));
    slide.addImage(__assign({
        path: IMAGE_PATHS.tokyoSubway.path,
        x: 7.0,
        y: 5.0,
        h: 2.1,
        w: 3.47,
    }, shadow3));
}
//# sourceMappingURL=genSlide05.js.map