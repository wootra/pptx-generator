import {
	IMAGE_PATHS,
	BASE_TABLE_OPTS,
	BASE_TEXT_OPTS_L,
	BASE_TEXT_OPTS_R,
	COLOR_BLUE,
	TITLE_STYLE,
} from '../enums';
import PptxGenJS, { TableCell, TextPropsOptions } from 'gen-pptx-js';

/**
 * SLIDE 3: Image Rotation
 * @param {PptxGenJS} pptx
 */
export function genSlide04(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Images' });

	slide.addTable(
		[
			[
				{
					text: 'Image Examples: Image Rotation',
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

	// EXAMPLES
	slide.addText('`rotate:45`', {
		...{ x: 0.5, y: 0.6, h: 0.4, w: 4.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);
	slide.addText('`rotate:180`', {
		...{ x: 4.66, y: 0.6, h: 0.4, w: 4.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);
	slide.addText('`rotate:315`', {
		...{ x: 8.82, y: 0.6, h: 0.4, w: 4.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);

	slide.addImage({
		path: IMAGE_PATHS.tokyoSubway.path,
		x: 0.78,
		y: 2.46,
		w: 4.3,
		h: 3,
		rotate: 45,
	});
	slide.addImage({
		path: IMAGE_PATHS.tokyoSubway.path,
		x: 4.52,
		y: 2.25,
		w: 4.3,
		h: 3,
		rotate: 180,
	});
	slide.addImage({
		path: IMAGE_PATHS.tokyoSubway.path,
		x: 8.25,
		y: 2.84,
		w: 4.3,
		h: 3,
		rotate: 315,
	});
}
