import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';

export // DEV/TEST 06: legacy-tests
function devSlide06(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{ text: 'DEV-TEST: legacy-tests', options: BASE_TEXT_OPTS_L },
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataHighVals = [
		{
			name: 'Series With Negative Values',
			labels: [
				'N2',
				'N1',
				'ZERO',
				'P1',
				'P2',
				'P3',
				'P4',
				'P5',
				'P6',
				'P7',
			],
			values: [-5, -3, 0, 3, 5, 6, 7, 8, 9, 10],
		},
	];

	let optsChartBar1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
		plotArea: {
			fill: { color: pptx.colors.BACKGROUND1 },
			border: { color: pptx.colors.BACKGROUND2, pt: 1 },
		},
		//
		objectName: 'bar chart (top L)',
		altText: 'this is the alt text content',
		barDir: 'bar',
		border: { pt: 3, color: '00CE00' }, // @deprecated - legacy text only (dont use this syntax - use `plotArea`)
		fill: 'F1F1F1', // @deprecated - legacy text only (dont use this syntax - use `plotArea`)
		//
		catAxisLabelColor: 'CC0000',
		catAxisLabelFontFace: 'Helvetica Neue',
		catAxisLabelFontSize: 14,
		catAxisOrientation: 'minMax',
		catAxisMajorTickMark: 'inside',
		catAxisMinorTickMark: 'cross',
		//
		//valAxisCrossesAt: 100,
		valAxisMajorTickMark: 'cross',
		valAxisMinorTickMark: 'outside',
		//
		titleColor: '33CF22',
		titleFontFace: 'Helvetica Neue',
		titleFontSize: 24,
	};
	slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar1);
}
