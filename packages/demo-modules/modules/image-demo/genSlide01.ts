import {
	IMAGE_PATHS,
	BASE_TABLE_OPTS,
	BASE_TEXT_OPTS_L,
	BASE_TEXT_OPTS_R,
	BKGD_LTGRAY,
	COLOR_BLUE,
} from '../enums';
import { HYPERLINK_SVG, SVG_BASE64, UNITE_PNG } from '../media';
import PptxGenJS, { TableCell } from 'gen-pptx-js';

/**
 * SLIDE 1:
 * @param {PptxGenJS} pptx
 */
export function genSlide01(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Images' });

	slide.addTable(
		[
			[
				{
					text: 'Image Examples: Image Types',
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
	slide.slideNumber = { x: '50%', y: '95%', color: COLOR_BLUE };

	// TOP
	{
		// TOP: 1
		slide.addText('Type: GIF (animated)', {
			x: 0.5,
			y: 0.6,
			w: 2.75,
			h: 2.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			x: 1.13,
			y: 1.1,
			w: 1.5,
			h: 1.5,
			path: IMAGE_PATHS.gifAnimTrippy.path,
			objectName: 'animated gif',
		});
		slide.addText('(legacy PPT only animates in slide show)', {
			x: 0.5,
			y: 2.79,
			w: 2.75,
			h: 0.3,
			align: 'center',
			fontSize: 10,
			color: 'BF9000',
			fill: { color: 'FFFCCC' },
		});

		// TOP: 2
		slide.addText('Type: GIF', {
			x: 3.7,
			y: 0.6,
			w: 2.75,
			h: 2.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			x: 4.16,
			y: 1.1,
			w: 1.88,
			h: 1.5,
			path: IMAGE_PATHS.ccDjGif.path,
			altText: 'this is a gif',
		});

		// TOP: 3
		slide.addText('Type: PNG (base64)', {
			x: 6.9,
			y: 0.6,
			w: 2.75,
			h: 2.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({ x: 7.53, y: 1.1, w: 1.5, h: 1.5, data: UNITE_PNG });

		// TOP: 4
		slide.addText('Hyperlink Image', {
			x: 10.1,
			y: 0.6,
			w: 2.75,
			h: 2.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			x: 10.8,
			y: 1.1,
			w: 1.36,
			h: 1.5,
			data: HYPERLINK_SVG,
			hyperlink: {
				url: 'https://github.com/gitbrent/pptxgenjs',
				tooltip: 'Visit Homepage',
			},
		});
	}

	// BTM
	{
		// BOTTOM-LEFT:
		slide.addText('Type: JPG', {
			x: 0.5,
			y: 3.5,
			w: 3.5,
			h: 3.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			path: IMAGE_PATHS.ccCopyRemix.path,
			x: 0.77,
			y: 3.8,
			w: 2.97,
			h: 2.9,
		});

		// BOTTOM-CENTER:
		// peace image via: https://www.vecteezy.com/vector-art/242684-peace-vector-design
		slide.addText('Type: PNG', {
			x: 4.93,
			y: 3.5,
			w: 3.5,
			h: 3.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			path: IMAGE_PATHS.peace4.path,
			x: 5.2,
			y: 3.81,
			w: 3.0,
			h: 3.0,
		});

		// BOTTOM-RIGHT:
		slide.addText('Type: SVG', {
			x: 9.33,
			y: 3.5,
			w: 3.5,
			h: 3.5,
			margin: 4,
			fill: { color: BKGD_LTGRAY },
			fontSize: 12,
			fontFace: 'Segoe UI',
			color: COLOR_BLUE,
			valign: 'top',
			align: 'center',
		});
		slide.addImage({
			path: IMAGE_PATHS.wikimedia_svg.path,
			x: 9.65,
			y: 3.81,
			w: 2.0,
			h: 2.0,
		}); // TEST: `path`
		slide.addImage({
			data: SVG_BASE64,
			x: 10.61,
			y: 4.77,
			w: 2.0,
			h: 2.0,
			transparency: 50,
		}); // TEST: `data`
	}

	// TEST: Ensure framework corrects for missing all header
	// (Please **DO NOT** pass base64 data without the header! This is a JUNK TEST!)
	//slide.addImage({ x:5.2, y:2.6, w:0.8, h:0.8, data:'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAjcAAAI3AGf6F88AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANVQTFRF////JLaSIJ+AIKqKKa2FKLCIJq+IJa6HJa6JJa6IJa6IJa2IJa6IJa6IJa6IJa6IJa6IJa6IJq6IKK+JKK+KKrCLLrGNL7KOMrOPNrSRN7WSPLeVQrmYRLmZSrycTr2eUb6gUb+gWsKlY8Wqbsmwb8mwdcy0d8y1e863g9G7hdK8htK9i9TAjNTAjtXBktfEntvKoNzLquDRruHTtePWt+TYv+fcx+rhyOvh0e7m1e/o2fHq4PTu5PXx5vbx7Pj18fr49fv59/z7+Pz7+f38/P79/f7+dNHCUgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABB0lEQVQ4y42T13qDMAyFZUKMbebp3mmbrnTvlY60TXn/R+oFGAyYzz1Xx/wylmWJqBLjUkVpGinJGXXliwSVEuG3sBdkaCgLPJMPQnQUDmo+jGFRPKz2WzkQl//wQvQoLPII0KuAiMjP+gMyn4iEFU1eAQCCiCU2fpCfFBVjxG18f35VOk7Swndmt9pKUl2++fG4qL2iqMPXpi8r1SKitDDne/rT8vPbRh2d6oC7n6PCLNx/bsEM0Edc5DdLAHD9tWueF9VJjmdP68DZ77iRkDKuuT19Hx3mx82MpVmo1Yfv+WXrSrxZ6slpiyes77FKif88t7Nh3C3nbFp327sHxz167uHtH/8/eds7gGsUQbkAAAAASUVORK5CYII=' });
	// NEGATIVE-TEST:
	//slide.addImage({ data:'https://raw.githubusercontent.com/gitbrent/PptxGenJS/v2.1.0/examples/images/doh_this_isnt_base64_data.gif',  x:0.5, y:0.5, w:1.0, h:1.0 });
}
