import PptxGenJS, {
	IChartMulti,
	IChartOpts,
	IChartPropsAxisVal,
	TableCell,
} from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';

export // SLIDE 20: Combo Chart: Various Options
function genSlide20(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Combo Chart Options',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	// TOP-L: charts use same val axis (T-B)
	function doColumnAreaLine() {
		let opts: IChartOpts = {
			x: 0.6,
			y: 0.6,
			w: 6.0,
			h: 3.0,
			barDir: 'col',
			catAxisLabelColor: '666666',
			catAxisLabelFontFace: 'Arial',
			catAxisLabelFontSize: 12,
			catAxisOrientation: 'minMax',
			showLegend: false,
			showTitle: false,
			valAxisMaxVal: 100,
			valAxisMajorUnit: 10,

			valAxes: [
				{
					showValAxisTitle: true,
					valAxisTitle: 'Primary Value Axis',
				},
				{
					showValAxisTitle: true,
					valAxisTitle: 'Secondary Value Axis',
					valGridLine: { style: 'none' },
				},
			],

			catAxes: [
				{
					catAxisTitle: 'Primary Category Axis',
				},
				{
					catAxisHidden: true,
				},
			],
		};

		let labels = ['April', 'May', 'June', 'July', 'August'];
		let chartTypes: IChartMulti[] = [
			{
				type: pptx.charts.AREA,
				data: [
					{
						name: 'Current',
						labels: labels,
						values: [1, 4, 7, 2, 3],
					},
				],
				options: {
					chartColors: ['00FFFF'],
					barGrouping: 'standard',
					secondaryValAxis: !!opts.valAxes,
					secondaryCatAxis: !!opts.catAxes,
				},
			},
			{
				type: pptx.charts.BAR,
				data: [
					{
						name: 'Bottom',
						labels: labels,
						values: [17, 26, 53, 10, 4],
					},
				],
				options: {
					chartColors: ['0000FF'],
					barGrouping: 'stacked',
				},
			},
			{
				type: pptx.charts.LINE,
				data: [
					{
						name: 'Current',
						labels: labels,
						values: [5, 3, 2, 4, 7],
					},
				],
				options: {
					barGrouping: 'standard',
					secondaryValAxis: !!opts.valAxes,
					secondaryCatAxis: !!opts.catAxes,
				},
			},
		];
		slide.addChart(chartTypes, opts);
	}

	// TOP-R: charts use diff val axis (T-B, L-R)
	function doStackedLine() {
		let opts: IChartOpts = {
			x: 6.83,
			y: 0.6,
			w: 6.0,
			h: 3.0,
			chartArea: { fill: { color: 'F1F1F1' } },
			barDir: 'col',
			barGrouping: 'stacked',
			catAxisLabelColor: '0000CC',
			catAxisLabelFontFace: 'Arial',
			catAxisLabelFontSize: 12,
			catAxisOrientation: 'minMax',
			showLegend: false,
			showTitle: false,
			valAxisMaxVal: 100,
			valAxisMajorUnit: 10,
		};

		let labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
		let chartTypes: IChartMulti[] = [
			{
				type: pptx.charts.BAR,
				data: [
					{
						name: 'Bottom',
						labels: labels,
						values: [17, 26, 53, 10, 4],
					},
					{
						name: 'Middle',
						labels: labels,
						values: [55, 40, 20, 30, 15],
					},
					{
						name: 'Top',
						labels: labels,
						values: [10, 22, 25, 35, 70],
					},
				],
				options: {
					barGrouping: 'stacked',
				},
			},
			{
				type: pptx.charts.LINE,
				data: [
					{
						name: 'Current',
						labels: labels,
						values: [25, 35, 55, 10, 5],
					},
				],
				options: {
					barGrouping: 'standard',
				},
			},
		];
		slide.addChart(chartTypes, opts);
	}

	// BTM-L:
	function doStackedDot() {
		let opts: IChartOpts = {
			x: 0.5,
			y: 4.0,
			w: 6.0,
			h: 3.0,
			chartArea: { fill: { color: 'F1F1F1' } },

			barDir: 'col',
			barGrouping: 'stacked',
			catAxisLabelColor: '999999',
			catAxisLabelFontFace: 'Arial',
			catAxisLabelFontSize: 14,
			catAxisOrientation: 'minMax',
			showLegend: false,
			showTitle: false,
			valAxisMaxVal: 100,
			valAxisMinVal: 0,
			valAxisMajorUnit: 20,

			lineSize: 0,
			lineDataSymbolSize: 20,
			lineDataSymbolLineSize: 2,
			lineDataSymbolLineColor: 'FF0000',

			//dataNoEffects: true,

			valAxes: [
				{
					showValAxisTitle: true,
					valAxisTitle: 'Primary Value Axis',
				},
				{
					showValAxisTitle: true,
					valAxisTitle: 'Secondary Value Axis',
					valAxisOrientation: 'minMax',
					valAxisMajorUnit: 1,
					valAxisMaxVal: 10,
					valAxisMinVal: 1,
					valGridLine: { style: 'none' },
				},
			],
			catAxes: [
				{
					catAxisTitle: 'Primary Category Axis',
				},
				{
					catAxisHidden: true,
				},
			],
		};

		let labels = ['Q1', 'Q2', 'Q3', 'Q4', 'OT'];
		let chartTypes: IChartMulti[] = [
			{
				type: pptx.charts.BAR,
				data: [
					{
						name: 'Bottom',
						labels: labels,
						values: [17, 26, 53, 10, 4],
					},
					{
						name: 'Middle',
						labels: labels,
						values: [55, 40, 20, 30, 15],
					},
					{
						name: 'Top',
						labels: labels,
						values: [10, 22, 25, 35, 70],
					},
				],
				options: {
					barGrouping: 'stacked',
				},
			},
			{
				type: pptx.charts.LINE,
				data: [
					{
						name: 'Current',
						labels: labels,
						values: [5, 3, 2, 4, 7],
					},
				],
				options: {
					barGrouping: 'standard',
					secondaryValAxis: !!opts.valAxes,
					secondaryCatAxis: !!opts.catAxes,
					chartColors: ['FFFF00'],
				},
			},
		];
		slide.addChart(chartTypes, opts);
	}

	// BTM-R:
	function doBarCol() {
		let opts: IChartOpts = {
			x: 6.83,
			y: 4.0,
			w: 6.0,
			h: 3.0,
			chartArea: { fill: { color: 'F1F1F1' } },

			barDir: 'col',
			barGrouping: 'stacked',
			catAxisLabelColor: '999999',
			catAxisLabelFontFace: 'Arial',
			catAxisLabelFontSize: 14,
			catAxisOrientation: 'minMax',
			showLegend: false,
			showTitle: false,
			valAxisMaxVal: 100,
			valAxisMinVal: 0,
			valAxisMajorUnit: 20,
			valAxes: [
				{
					showValAxisTitle: true,
					valAxisTitle: 'Primary Value Axis',
				},
				{
					showValAxisTitle: true,
					valAxisTitle: 'Secondary Value Axis',
					valAxisOrientation: 'minMax',
					valAxisMajorUnit: 1,
					valAxisMaxVal: 10,
					valAxisMinVal: 1,
					valGridLine: { style: 'none' },
				} satisfies IChartPropsAxisVal,
			],
			catAxes: [
				{
					catAxisTitle: 'Primary Category Axis',
				},
				{
					catAxisHidden: true,
				},
			],
		};

		let labels = ['Q1', 'Q2', 'Q3', 'Q4', 'OT'];
		let chartTypes = [
			{
				type: pptx.charts.BAR,
				data: [
					{
						name: 'Bottom',
						labels: labels,
						values: [17, 26, 53, 10, 4],
					},
					{
						name: 'Middle',
						labels: labels,
						values: [55, 40, 20, 30, 15],
					},
					{
						name: 'Top',
						labels: labels,
						values: [10, 22, 25, 35, 70],
					},
				],
				options: {
					barGrouping: 'stacked',
				},
			},
			{
				type: pptx.charts.BAR,
				data: [
					{
						name: 'Current',
						labels: labels,
						values: [5, 3, 2, 4, 7],
					},
				],
				options: {
					barDir: 'bar',
					barGrouping: 'standard',
					chartColors: [
						'0077BF',
						'4E9D2D',
						'ECAA00',
						'5FC4E3',
						'DE4216',
						'154384',
					],
					secondaryValAxis: !!opts.valAxes,
					secondaryCatAxis: !!opts.catAxes,
				},
			},
		];
		slide.addChart(chartTypes, opts);
	}

	doColumnAreaLine();
	doStackedLine();
	doStackedDot();
	doBarCol();
}
