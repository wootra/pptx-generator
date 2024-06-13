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
import {
	COLORS_ACCENT,
	COLORS_CHART,
	dataChartBar8Series,
} from '../enums_charts';

// SLIDE 1: Bar Chart: Chart Title, Cat/Val Axis Title
export function genSlide01(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Options: Chart Title, Cat/Val Axis Title',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let optsChart: IChartOpts = {
		x: 0.5,
		y: 0.5,
		w: '90%',
		h: '90%',
		barDir: 'col',
		barGrouping: 'stacked',
		chartColors: COLORS_CHART,
		invertedColors: ['C0504D'],
		showLegend: true,
		//
		showTitle: true,
		title: 'Chart Title',
		titleFontFace: 'Helvetica Neue Thin',
		titleFontSize: 24,
		titleColor: COLORS_ACCENT[0],
		titlePos: { x: 1.5, y: 0 },
		//titleRotate: 10,
		//
		showCatAxisTitle: true,
		catAxisLabelColor: COLORS_ACCENT[1],
		catAxisTitleColor: COLORS_ACCENT[1],
		catAxisTitle: 'Cat Axis Title',
		catAxisTitleFontSize: 14,
		//
		showValAxisTitle: true,
		valAxisLabelColor: COLORS_ACCENT[2],
		valAxisTitleColor: COLORS_ACCENT[2],
		valAxisTitle: 'Val Axis Title',
		valAxisTitleFontSize: 14,
	};

	// TEST `getExcelColName()` to ensure Excel Column names are generated correctly above >26 chars/cols
	slide.addChart(pptx.charts.BAR, dataChartBar8Series, optsChart);
}
