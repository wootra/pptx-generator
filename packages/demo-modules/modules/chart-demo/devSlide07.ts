import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_CHART } from '../enums_charts';

export // DEV/TEST 07: title-options & inverted-colors
function devSlide07(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'DEV-TEST: title-options & inverted-colors',
					options: BASE_TEXT_OPTS_L,
				},
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

	let optsChart: IChartOpts = {
		x: 0.5,
		y: 0.5,
		w: '90%',
		h: '90%',
		barDir: 'col',
		//
		showTitle: true,
		title: 'Rotated Title',
		titleFontSize: 20,
		titleRotate: 10,
		//
		showLegend: true,
		chartColors: COLORS_CHART,
		invertedColors: ['C0504D'],
		//
		showCatAxisTitle: true,
		catAxisTitle: 'Cat Axis Title',
		catAxisTitleColor: '4286f4',
		catAxisTitleFontSize: 14,
		//
		showValAxisTitle: true,
		valAxisTitle: 'Val Axis Title',
		valAxisTitleColor: 'c11c13',
		valAxisTitleFontSize: 16,
	};

	slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChart);
}
