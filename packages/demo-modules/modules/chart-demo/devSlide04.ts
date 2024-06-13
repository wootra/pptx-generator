import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_VIVID } from '../enums_charts';

export // DEV/TEST 04: Combo Chart
function devSlide04(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{ text: 'DEV-TEST: combo-chart', options: BASE_TEXT_OPTS_L },
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let labels = ['Q1', 'Q2', 'Q3', 'Q4', 'OT'];
	let chartTypes = [
		{
			type: pptx.charts.BAR,
			data: [
				{
					name: 'Projected',
					labels: labels,
					values: [17, 26, 53, 10, 4],
				},
			],
			options: {
				barDir: 'col',
				chartColors: COLORS_VIVID,
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
				secondaryValAxis: true,
				secondaryCatAxis: true,
			},
		},
	];
	let multiOpts: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 12.33,
		h: 6,
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

	slide.addChart(chartTypes, multiOpts);
}
