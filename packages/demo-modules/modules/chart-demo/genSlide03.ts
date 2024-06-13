/**
 * NAME: demo_chart
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.12.0
 * BLD.: 20230116
 */
import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_ACCENT } from '../enums_charts';

// SLIDE 3: Bar Chart Options: Axis, DataLabel, Grid
export function genSlide03(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Bar Chart Options: Axis, DataLabel, Grid',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataRegions = [
		{
			name: 'Region 1',
			labels: ['May', 'June', 'July', 'August'],
			values: [26, 53, 100, 75],
		},
		{
			name: 'Region 2',
			labels: ['May', 'June', 'July', 'August'],
			values: [43.5, 70.3, 90.1, 80.05],
		},
	];
	let arrDataHighVals = [
		{
			name: 'California',
			labels: ['Apartment', 'Townhome', 'Duplex', 'House', 'Big House'],
			values: [2000, 2800, 3200, 4000, 5000],
		},
		{
			name: 'Texas',
			labels: ['Apartment', 'Townhome', 'Duplex', 'House', 'Big House'],
			values: [1400, 2000, 2500, 3000, 3800],
		},
	];

	// TOP-LEFT: H/bar
	let optsChartBar1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		barDir: 'bar',
		plotArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_ACCENT,

		catAxisLabelColor: 'CC0000',
		catAxisLabelFontFace: 'Helvetica Neue',
		catAxisLabelFontSize: 14,
		catGridLine: { style: 'none' },
		catAxisHidden: true,

		valGridLine: { color: 'cc6699', style: 'dash', size: 1 },
		valAxisLineColor: '44AA66',
		valAxisLineSize: 1,
		valAxisLineStyle: 'dash',

		showLegend: true,
		showTitle: true,
		title: 'catAxisHidden:true, valGridLine/valAxisLine:dash',
		titleColor: 'a9a9a9',
		titleFontFace: 'Helvetica Neue',
		titleFontSize: 11,
	};
	slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar1);

	// TOP-RIGHT: V/col
	let optsChartBar2: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		barDir: 'col',
		plotArea: { fill: { color: 'E1F1FF' } },

		dataBorder: { pt: 1, color: 'F1F1F1' },
		dataLabelColor: '696969',
		dataLabelFontFace: 'Arial',
		dataLabelFontSize: 11,
		dataLabelPosition: 'outEnd',
		dataLabelFormatCode: '#.0',
		showValue: true,

		catAxisHidden: true,
		catGridLine: { style: 'none' },
		valAxisHidden: true,
		valAxisDisplayUnitLabel: true,
		valGridLine: { style: 'none' },

		showLegend: true,
		legendPos: 'b',
		showTitle: false,
	};
	slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar2);

	// BTM-LEFT: H/bar - TITLE and LEGEND
	let optsChartBar3: IChartOpts = {
		x: 0.5,
		y: 3.8,
		w: 6.0,
		h: 3.5,

		chartArea: { fill: { color: 'F1F1F1' } },
		plotArea: {
			border: { pt: 3, color: 'CF0909' },
			fill: { color: 'F1C1C1' },
		},

		barDir: 'bar',
		barOverlapPct: -50,

		catAxisLabelColor: 'CC0000',
		catAxisLabelFontFace: 'Helvetica Neue',
		catAxisLabelFontSize: 10,
		catAxisOrientation: 'minMax',
		catAxisTitle: 'Housing Type',
		catAxisTitleColor: '696969',
		catAxisTitleFontSize: 10,
		showCatAxisTitle: true,

		catGridLine: { color: 'cc6699', style: 'dash', size: 1 },
		valGridLine: { style: 'none' },
		valAxisOrientation: 'minMax',
		valAxisHidden: true,
		valAxisDisplayUnitLabel: true,

		titleColor: '33CF22',
		titleFontFace: 'Helvetica Neue',
		titleFontSize: 16,

		showTitle: true,
		title: 'Sales by Region',
	};
	slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar3);

	// BTM-RIGHT: V/col - TITLE and LEGEND
	let optsChartBar4: IChartOpts = {
		x: 7.0,
		y: 3.8,
		w: 6.0,
		h: 3.5,
		chartArea: { fill: { color: 'F1F1F1' } },
		plotArea: { fill: { color: 'FFFFFF' } },

		barDir: 'col',
		barGapWidthPct: 25,
		chartColors: ['0088CC', '99FFCC'],
		chartColorsOpacity: 50,
		valAxisMinVal: 1000,
		valAxisMaxVal: 5000,

		catAxisLabelColor: '0000CC',
		catAxisLabelFontFace: 'Times',
		catAxisLabelFontSize: 11,
		catAxisLabelFrequency: 1,
		catAxisOrientation: 'minMax',

		dataBorder: { pt: 1, color: 'F1F1F1' },
		dataLabelColor: '696969',
		dataLabelFontFace: 'Arial',
		dataLabelFontSize: 10,
		dataLabelPosition: 'inEnd',
		showValue: true,

		valAxisHidden: true,
		catAxisTitle: 'Housing Type',
		showCatAxisTitle: true,

		showLegend: false,
		showTitle: false,
	};
	slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
}
