import {
	IMAGE_PATHS,
	BASE_TABLE_OPTS,
	BASE_TEXT_OPTS_L,
	BASE_TEXT_OPTS_R,
	BASE_CODE_OPTS,
	COLOR_BLUE,
	CODE_STYLE,
	TITLE_STYLE,
} from '../enums';
import PptxGenJS, {
	ImageProps,
	TableCell,
	TextProps,
	TextPropsOptions,
} from 'gen-pptx-js';

/**
 * SLIDE 5: Image Shadow
 * @param {PptxGenJS} pptx
 */
export function genSlide05(pptx: PptxGenJS) {
	const slide = pptx.addSlide({ sectionTitle: 'Images' });

	slide.addTable(
		[
			[
				{
					text: 'Image Examples: Image Shadows',
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

	// type:none
	const shadow1 = { shadow: { type: 'none' } };
	slide.addText('Shadow: `type:none`', {
		...{ x: 0.5, y: 0.6, h: 0.4, w: 6.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);
	slide.addText([{ text: JSON.stringify(shadow1, null, 2) }] as TextProps[], {
		...BASE_CODE_OPTS,
		...{ x: 0.5, y: 1.0, h: 1.0, w: 6 },
		...CODE_STYLE,
	});
	slide.addImage({
		path: IMAGE_PATHS.tokyoSubway.path,
		x: 7.0,
		y: 0.6,
		h: 1.4,
		w: 2.31,
		...shadow1,
	} as ImageProps);

	// type:inner
	const shadow2 = {
		shadow: {
			type: 'inner',
			opacity: 0.5,
			blur: 20,
			color: '000000',
			offset: 20,
			angle: 320,
		},
	};
	slide.addText('Shadow: `type:inner`', {
		...{ x: 0.5, y: 2.45, h: 0.4, w: 6.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);
	slide.addText([{ text: JSON.stringify(shadow2, null, 2) }] as TextProps[], {
		...BASE_CODE_OPTS,
		...{ x: 0.5, y: 2.85, h: 1.7, w: 6 },
		...CODE_STYLE,
	});
	slide.addImage({
		...{
			path: IMAGE_PATHS.tokyoSubway.path,
			x: 7.0,
			y: 2.45,
			h: 2.1,
			w: 3.47,
		},
		...shadow2,
	} as ImageProps);

	// type:outer
	const shadow3 = {
		shadow: {
			type: 'outer',
			opacity: 0.35,
			blur: 20,
			color: '000000',
			offset: 20,
			angle: 320,
		},
	};
	slide.addText('Shadow: `type:outer`', {
		...{ x: 0.5, y: 5.0, h: 0.4, w: 6.0 },
		...TITLE_STYLE,
	} as TextPropsOptions);
	slide.addText([{ text: JSON.stringify(shadow3, null, 2) }] as TextProps[], {
		...BASE_CODE_OPTS,
		...{ x: 0.5, y: 5.4, h: 1.7, w: 6 },
		...CODE_STYLE,
	});
	slide.addImage({
		...{
			path: IMAGE_PATHS.tokyoSubway.path,
			x: 7.0,
			y: 5.0,
			h: 2.1,
			w: 3.47,
		},
		...shadow3,
	} as ImageProps);
}
