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

import PptxGenJS, { SectionProps } from 'gen-pptx-js';
import * as slides from './image-demo';

export function genSlides_Image(pptx: PptxGenJS) {
	pptx.addSection({ title: 'Images' } as SectionProps);

	slides.genSlide01(pptx);
	slides.genSlide02(pptx);
	slides.genSlide03(pptx);
	slides.genSlide04(pptx);
	slides.genSlide05(pptx);
}
