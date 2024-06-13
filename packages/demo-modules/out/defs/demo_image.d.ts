/**
 * NAME: demo_images
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230319
 */
/**
 * NOTES:
 * - Images can be pre-encoded into base64, so they do not have to be on the webserver etc. (saves generation time and resources!)
 * - This also has the benefit of being able to be any type (path:images can only be exported as PNG)
 * - Image source: either `data` or `path` is required
 */
import PptxGenJS from 'gen-pptx-js';
export declare function genSlides_Image(pptx: PptxGenJS): void;
