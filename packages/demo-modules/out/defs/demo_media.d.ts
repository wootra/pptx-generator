/**
 * NAME: demo_media
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230314
 */
import PptxGenJS from 'gen-pptx-js';
export declare function genSlides_Media(pptx: PptxGenJS): void;
/**
 * SLIDE 3: Test large files are only added to export once
 * - filesize s/b ~24mb (the size of a single big-earth.mp4 file (17MB) plus other media files)
 * @param {PptxGenJS} pptx
 */
export declare function genSlide_Test_LargeMedia(pptx: PptxGenJS): void;
