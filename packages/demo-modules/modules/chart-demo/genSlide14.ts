import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_RYGU } from '../enums_charts';

export // SLIDE 14: XY Scatter Chart
function genSlide14(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: XY Scatter Chart',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataScatter1 = [
		{ name: 'X-Axis', values: [0, 1, 2, 3, 4, 5] },
		{
			name: 'Y-Value 1',
			values: [90, 80, 70, 85, 75, 92],
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		},
		{
			name: 'Y-Value 2',
			values: [21, 32, 40, 49, 31, 29],
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		},
	];
	let arrDataScatter2 = [
		{ name: 'X-Axis', values: [1, 2, 3, 4, 5, 6] },
		{ name: 'Airplane', values: [33, 20, 51, 65, 71, 75] },
		{ name: 'Train', values: [99, 88, 77, 89, 99, 99] },
		{ name: 'Bus', values: [21, 22, 25, 49, 59, 69] },
	];
	let arrDataScatterLabels = [
		{ name: 'X-Axis', values: [1, 10, 20, 30, 40, 50] },
		{
			name: 'Y-Value 1',
			values: [11, 23, 31, 45, 47, 35],
			labels: ['Red 1', 'Red 2', 'Red 3', 'Red 4', 'Red 5', 'Red 6'],
		},
		{
			name: 'Y-Value 2',
			values: [21, 38, 47, 59, 51, 25],
			labels: [
				'Blue 1',
				'Blue 2',
				'Blue 3',
				'Blue 4',
				'Blue 5',
				'Blue 6',
			],
		},
	];

	// TOP-LEFT
	let optsChartScat1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: '45%',
		h: 3,
		valAxisTitle: 'Renters',
		valAxisTitleColor: '428442',
		valAxisTitleFontSize: 14,
		showValAxisTitle: true,
		lineSize: 0,
		catAxisTitle: 'Last 6 Months',
		catAxisTitleColor: '428442',
		catAxisTitleFontSize: 14,
		showCatAxisTitle: true,
		showLabel: true, // Must be set to true or labels will not be shown
		dataLabelPosition: 'b', // Options: 't'|'b'|'l'|'r'|'ctr'
	};
	slide.addChart(pptx.charts.SCATTER, arrDataScatter1, optsChartScat1);

	// TOP-RIGHT
	let optsChartScat2: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: '45%',
		h: 3,
		plotArea: { fill: { color: 'F1F1F1' } },

		showLegend: true,
		legendPos: 'b',

		lineSize: 8,
		lineSmooth: true,
		lineDataSymbolSize: 12,
		lineDataSymbolLineColor: 'FFFFFF',

		chartColors: COLORS_RYGU,
		chartColorsOpacity: 25,
	};
	slide.addChart(pptx.charts.SCATTER, arrDataScatter2, optsChartScat2);

	// BOTTOM-LEFT: (Labels)
	let optsChartScat3: IChartOpts = {
		x: 0.5,
		y: 4.0,
		w: '45%',
		h: 3,
		plotArea: { fill: { color: 'F2F9FC' } },

		//catAxisOrientation: 'minMax',
		//valAxisOrientation: 'minMax',
		showLegend: true,
		chartColors: ['FF0000', '0088CC'],

		showValAxisTitle: false,
		lineSize: 0,

		catAxisTitle: 'Data Point Labels',
		catAxisTitleColor: '0088CC',
		catAxisTitleFontSize: 14,
		showCatAxisTitle: false,

		// Data Labels
		showLabel: true, // Must be set to true or labels will not be shown
		dataLabelPosition: 'r', // Options: 't'|'b'|'l'|'r'|'ctr'
		dataLabelFormatScatter: 'custom', // Can be set to `custom` (default), `customXY`, or `XY`.
	};
	slide.addChart(pptx.charts.SCATTER, arrDataScatterLabels, optsChartScat3);

	// BOTTOM-RIGHT
	let optsChartScat4: IChartOpts = { x: 7.0, y: 4.0, w: '45%', h: 3 };
	slide.addChart(pptx.charts.SCATTER, arrDataScatter2, optsChartScat4);
}
