/**
 * NAME: demo_chart
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230116
 */
import PptxGenJS, { SectionProps } from 'gen-pptx-js';
import { TESTMODE } from './enums';
import * as slides from './chart-demo';

export function genSlides_Chart(pptx: PptxGenJS) {
	pptx.addSection({ title: 'Charts' } as SectionProps);

	slides.genSlide01(pptx);
	slides.genSlide02(pptx);
	slides.genSlide03(pptx);
	slides.genSlide04(pptx);
	slides.genSlide05(pptx);
	slides.genSlide06(pptx);
	slides.genSlide07(pptx);
	slides.genSlide08(pptx);
	slides.genSlide09(pptx);
	slides.genSlide10(pptx);
	slides.genSlide11(pptx);
	slides.genSlide12(pptx);
	slides.genSlide13(pptx);
	slides.genSlide14(pptx);
	slides.genSlide15(pptx);
	slides.genSlide16(pptx);
	slides.genSlide17(pptx);
	slides.genSlide18(pptx);
	slides.genSlide19(pptx);
	slides.genSlide20(pptx);
	slides.genSlide21(pptx);

	if (TESTMODE) {
		pptx.addSection({ title: 'Charts-DevTest' } as SectionProps);
		slides.devSlide01(pptx);
		slides.devSlide02(pptx);
		slides.devSlide03(pptx);
		slides.devSlide04(pptx);
		slides.devSlide05(pptx);
		slides.devSlide06(pptx);
		slides.devSlide07(pptx);
	}
}

// --------------------------------------------------------------------------------

/**
 * TODO:
 * 	// Create a gap for testing `displayBlanksAs` in line charts (2.3.0)
 *	//arrDataLineStat[2].values = [55, null, null, 55]; // NOTE: uncomment only for test - looks broken otherwise!
 */
