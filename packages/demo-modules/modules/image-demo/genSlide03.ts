import {
	IMAGE_PATHS,
	BASE_TABLE_OPTS,
	BASE_TEXT_OPTS_L,
	BASE_TEXT_OPTS_R,
	COLOR_BLUE,
} from '../enums';
import { LOGO_STARLABS } from '../media';
import PptxGenJS, { TableCell } from 'gen-pptx-js';

/**
 * SLIDE 2: Image Sizing
 * @param {PptxGenJS} pptx
 */
export function genSlide03(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Images' });

	slide.addTable(
		[
			[
				{
					text: 'Image Examples: Image Sizing/Rounding',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-images.html'
	);
	slide.slideNumber = { x: '50%', y: '95%', w: 1, h: 1, color: COLOR_BLUE };

	// TOP: 1
	slide.addText('Sizing: Orig `w:6, h:2.7`', {
		x: 0.5,
		y: 0.6,
		w: 3.0,
		h: 0.3,
		color: COLOR_BLUE,
	});
	slide.addImage({ data: LOGO_STARLABS, x: 0.5, y: 1.1, w: 6.0, h: 2.69 });

	// TOP: 2
	slide.addText('Sizing: `contain, w:3`', {
		x: 0.6,
		y: 4.25,
		w: 3.0,
		h: 0.3,
		color: COLOR_BLUE,
	});
	slide.addShape(pptx.shapes.RECTANGLE, {
		x: 0.6,
		y: 4.65,
		w: 3,
		h: 2,
		fill: { color: 'F1F1F1' },
	});
	slide.addImage({
		data: LOGO_STARLABS,
		x: 0.6,
		y: 4.65,
		w: 5.0,
		h: 1.5,
		sizing: { type: 'contain', w: 3, h: 2 },
	});

	// TOP: 3
	slide.addText('Sizing: `cover, w:3, h:2`', {
		x: 5.3,
		y: 4.25,
		w: 3.0,
		h: 0.3,
		color: COLOR_BLUE,
	});
	slide.addShape(pptx.shapes.RECTANGLE, {
		x: 5.3,
		y: 4.65,
		w: 3,
		h: 2,
		fill: { color: 'F1F1F1' },
	});
	slide.addImage({
		data: LOGO_STARLABS,
		x: 5.3,
		y: 4.65,
		w: 3.0,
		h: 1.5,
		sizing: { type: 'cover', w: 3, h: 2 },
	});

	// TOP: 4
	slide.addText('Sizing: `crop, w:3, h:2`', {
		x: 10.0,
		y: 4.25,
		w: 3.0,
		h: 0.3,
		color: COLOR_BLUE,
	});
	slide.addShape(pptx.shapes.RECTANGLE, {
		x: 10,
		y: 4.65,
		w: 3,
		h: 1.5,
		fill: { color: 'F1F1F1' },
	});
	slide.addImage({
		data: LOGO_STARLABS,
		x: 10.0,
		y: 4.65,
		w: 5.0,
		h: 1.5,
		sizing: { type: 'crop', w: 3, h: 1.5, x: 0.5, y: 0.5 },
	});

	// TOP-RIGHT:
	slide.addText('Rounding: `rounding:true`', {
		x: 10.0,
		y: 0.6,
		w: 3.0,
		h: 0.3,
		color: COLOR_BLUE,
	});
	slide.addImage({
		path: IMAGE_PATHS.ccLogo.path,
		x: 9.9,
		y: 1.1,
		w: 2.5,
		h: 2.5,
		rounding: true,
	});
}
