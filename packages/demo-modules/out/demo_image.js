/**
 * NAME: demo_images
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230319
 */
import * as slides from './image-demo';
export function genSlides_Image(pptx) {
    pptx.addSection({ title: 'Images' });
    slides.genSlide01(pptx);
    slides.genSlide02(pptx);
    slides.genSlide03(pptx);
    slides.genSlide04(pptx);
    slides.genSlide05(pptx);
}
//# sourceMappingURL=demo_image.js.map