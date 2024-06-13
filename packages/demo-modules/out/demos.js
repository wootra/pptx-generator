/**
 * NAME: demos
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230319
 */
import { COMPRESS, CUST_NAME } from './enums';
import { createMasterSlides, testSlideBackgrounds } from './masters';
import { genSlides_Chart } from './demo_chart';
import { genSlides_Image } from './demo_image';
import { genSlides_Master } from './demo_master';
import { genSlides_Media } from './demo_media';
import { genSlides_Shape } from './demo_shape';
import { genSlides_Table } from './demo_table';
import { genSlides_Text } from './demo_text';
import PptxGenJS from 'gen-pptx-js';
var DEPRECATED_TEST_MODE = false;
// ==================================================================================================================
export function runEveryTest(pptxgen) {
    return execGenSlidesFuncs(['Master', 'Chart', 'Image', 'Media', 'Shape', 'Text', 'Table'], pptxgen);
    // NOTE: Html2Pptx needs table to be visible (otherwise col widths are even and look horrible)
    // ....: Therefore, run it manually. // if ( typeof table2slides1 !== 'undefined' ) table2slides1();
}
export function execGenSlidesFuncs(type, pptxgen) {
    // STEP 1: Instantiate new PptxGenJS object
    // @ts-ignore
    var pptx = pptxgen !== undefined ? new pptxgen() : new PptxGenJS();
    // STEP 2: Set Presentation props (as QA test only - these are not required)
    pptx.title = 'PptxGenJS Test Suite Presentation';
    pptx.subject = 'PptxGenJS Test Suite Export';
    pptx.author = 'Brent Ely';
    pptx.company = CUST_NAME;
    pptx.revision = '15';
    // FYI: use `headFontFace` and/or `bodyFontFace` to set the default font for the entire presentation (including slide Masters)
    // pptx.theme = { bodyFontFace: "Arial" };
    // STEP 3: Set layout
    pptx.layout = 'LAYOUT_WIDE';
    // STEP 4: Create Master Slides (from the old `pptxgen.masters.js` file - `gObjPptxMasters` items)
    createMasterSlides(pptx);
    // STEP 5: Run requested test
    var arrTypes = typeof type === 'string' ? [type] : type;
    arrTypes.forEach(function (type) {
        //if (console.time) console.time(type);
        if (type === 'Master') {
            genSlides_Master(pptx);
            if (DEPRECATED_TEST_MODE)
                testSlideBackgrounds(pptx);
        }
        else if (type === 'Chart')
            genSlides_Chart(pptx);
        else if (type === 'Image')
            genSlides_Image(pptx);
        else if (type === 'Media')
            genSlides_Media(pptx);
        else if (type === 'Shape')
            genSlides_Shape(pptx);
        else if (type === 'Table')
            genSlides_Table(pptx);
        else if (type === 'Text')
            genSlides_Text(pptx);
        //if (console.timeEnd) console.timeEnd(type);
    });
    // LAST: Export Presentation
    return pptx.writeFile({
        fileName: "PptxGenJS_Demo_".concat(type, "_").concat(new Date().toISOString().replace(/\D/gi, '')),
        compression: COMPRESS,
    });
}
//# sourceMappingURL=demos.js.map