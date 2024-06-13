import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_ACCENT, COLORS_RYGU } from '../enums_charts';

export // SLIDE 15: Bubble Chart
function genSlide15(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Bubble Charts',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataBubble1 = [
		{ name: 'X-Axis', values: [0.3, 0.6, 0.9, 1.2, 1.5, 1.7] },
		{
			name: 'Y-Value 1',
			values: [1.3, 9, 7.5, 2.5, 7.5, 3],
			sizes: [1, 4, 2, 3, 7, 4],
		},
		{
			name: 'Y-Value 2',
			values: [5.0, 3, 2.0, 7.0, 2.0, 9],
			sizes: [9, 7, 9, 2, 4, 8],
		},
	];
	let arrDataBubble2 = [
		{ name: 'X-Axis', values: [1, 2, 3, 4, 5, 6] },
		{
			name: 'Airplane',
			values: [33, 20, 51, 65, 71, 75],
			sizes: [10, 10, 12, 12, 15, 20],
		},
		{
			name: 'Train',
			values: [99, 88, 77, 89, 99, 99],
			sizes: [20, 20, 22, 22, 25, 30],
		},
		{
			name: 'Bus',
			values: [21, 25, 32, 49, 59, 69],
			sizes: [11, 11, 13, 13, 16, 21],
		},
	];

	// TOP-LEFT
	let optsChartBubble1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: '45%',
		h: 3,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_ACCENT,
		chartColorsOpacity: 40,
		dataBorder: { pt: 1, color: 'FFFFFF' },
		//valAxisCrossesAt: 4,
		//catAxisCrossesAt: 4,
		dataLabelFontFace: 'Arial',
		dataLabelFontSize: 10,
		dataLabelColor: '363636',
		dataLabelPosition: 'r',
		showSerName: true,
		showLeaderLines: true,
	};
	slide.addChart(pptx.charts.BUBBLE, arrDataBubble1, optsChartBubble1);

	// TOP-RIGHT
	let optsChartBubble2: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: '45%',
		h: 3,
		plotArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		chartColorsOpacity: 25,

		showLegend: true,
		legendPos: 'b',

		lineSize: 8,
		lineSmooth: true,
		lineDataSymbolSize: 12,
		lineDataSymbolLineColor: 'FFFFFF',
	};
	slide.addChart(pptx.charts.BUBBLE, arrDataBubble2, optsChartBubble2);

	// BOTTOM-LEFT
	let optsChartBubble3: IChartOpts = {
		x: 0.5,
		y: 4.0,
		w: '45%',
		h: 3,
		chartArea: { fill: { color: '404040' } },
		plotArea: { fill: { color: '202020' } },

		catAxisLabelColor: 'F1F1F1',
		catAxisLabelFontSize: 10,
		catAxisOrientation: 'minMax',
		showCatAxisTitle: false,
		//
		valAxisLabelColor: 'F1F1F1',
		valAxisLabelFontSize: 10,
		valAxisMinVal: 0,
		valAxisOrientation: 'minMax',
		showValAxisTitle: false,
		//
		dataBorder: { pt: 2, color: 'e1e1e1' },
		dataLabelFontFace: 'Arial',
		dataLabelFontSize: 10,
		dataLabelColor: 'e1e1e1',
		showValue: true,
	};
	slide.addChart(pptx.charts.BUBBLE, arrDataBubble1, optsChartBubble3);

	// BOTTOM-RIGHT
	let optsChartBubble4: IChartOpts = {
		x: 7.0,
		y: 4.0,
		w: '45%',
		h: 3,
		lineSize: 0,
		chartColors: COLORS_RYGU,
	};
	slide.addChart(pptx.charts.BUBBLE3D, arrDataBubble2, optsChartBubble4);
}
