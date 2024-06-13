import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { dataChartPieStat } from '../enums_charts';

export // SLIDE 21: Misc Options
function genSlide21(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Misc Options: Shadow, Transparent Colors',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataRegions = [
		{
			name: 'Region 2',
			labels: ['April', 'May', 'June', 'July', 'August'],
			values: [0, 30, 53, 10, 25],
		},
		{
			name: 'Region 3',
			labels: ['April', 'May', 'June', 'July', 'August'],
			values: [17, 26, 53, 100, 75],
		},
		{
			name: 'Region 4',
			labels: ['April', 'May', 'June', 'July', 'August'],
			values: [55, 43, 70, 90, 80],
		},
		{
			name: 'Region 5',
			labels: ['April', 'May', 'June', 'July', 'August'],
			values: [55, 43, 70, 90, 80],
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
	let single = [
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
		showTitle: true,
		title: 'Large blue shadow',
		barDir: 'bar',
		barGrouping: 'standard',
		dataLabelColor: 'FFFFFF',
		showValue: true,
		shadow: {
			type: 'outer',
			blur: 10,
			offset: 5,
			angle: 45,
			color: '0059B1',
			opacity: 1,
		},
	};

	let pieOptions: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		showTitle: true,
		title: 'Rotated cyan shadow',
		dataLabelColor: 'FFFFFF',
		/* NOTE: following are optional and default to `false`, leavign chart "plain" (without labels, etc.)
		dataLabelFontSize: 9,
		showLabel: true,
		showValue: true,
		showPercent: true,
		*/
		shadow: {
			type: 'outer',
			blur: 10,
			offset: 5,
			angle: 180,
			color: '00FFFF',
			opacity: 1,
		},
	};

	// BTM-LEFT: H/bar - 100% layout without axis labels
	let optsChartBar3: IChartOpts = {
		x: 0.5,
		y: 3.8,
		w: 6.0,
		h: 3.5,
		showTitle: true,
		title: 'No shadow, transparent colors',
		barDir: 'bar',
		barGrouping: 'stacked',
		chartColors: ['transparent', '5DA5DA', 'transparent', 'FAA43A'],
		shadow: { type: 'none' },
	};

	// BTM-RIGHT: V/col - TITLE and LEGEND
	let optsChartBar4: IChartOpts = {
		x: 7.0,
		y: 3.8,
		w: 6.0,
		h: 3.5,
		barDir: 'col',
		barGrouping: 'stacked',
		showTitle: true,
		title: 'Red glowing shadow',
		titleBold: true,
		titleFontFace: 'Times',
		catAxisLabelColor: '0000CC',
		catAxisLabelFontFace: 'Times',
		catAxisLabelFontSize: 12,
		catAxisOrientation: 'minMax',
		chartColors: ['5DA5DA', 'FAA43A'],
		shadow: {
			type: 'outer',
			blur: 20,
			offset: 1,
			angle: 90,
			color: 'A70000',
			opacity: 1,
		},
	};

	slide.addChart(pptx.charts.BAR, single, optsChartBar1);
	slide.addChart(pptx.charts.PIE, dataChartPieStat, pieOptions);
	slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar3);
	slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChartBar4);
}
