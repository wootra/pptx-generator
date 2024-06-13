import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_VIVID, dataChartBar3Series } from '../enums_charts';

export // SLIDE 4: Bar Chart: Stacked
function genSlide04(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Bar Chart: Stacked/PercentStacked and DataTable',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let arrDataRegions = [
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
	];

	// TOP-LEFT: H/bar
	let optsChartBar1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: '404040' } },
		plotArea: { fill: { color: '0d0d0d' } },
		barDir: 'bar',
		barGrouping: 'stacked',
		chartColors: ['F2AF00', '4472C4'],

		catAxisOrientation: 'minMax',
		catAxisLabelColor: '4472C4',
		catAxisLabelFontFace: 'Helvetica Neue',
		catAxisLabelFontSize: 14,
		//catAxisLabelFontBold: true,
		valAxisLabelColor: 'F2AF00',
		valAxisLabelFontFace: 'Helvetica Neue',
		valAxisLabelFontSize: 14,
		//valAxisLabelFontBold: true,
		dataLabelColor: 'FFFFFF',
		showValue: true,
	};
	slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar1);

	// TOP-RIGHT: V/col
	let optsChartBar2: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: '0d0d0d' } },
		plotArea: { fill: { color: '4d4d4d' } },
		chartColors: COLORS_VIVID,
		valGridLine: { color: '141414' },
		valAxisLabelColor: 'F1F1F1',
		catAxisLabelColor: 'F1F1F1',
		dataLabelColor: 'F1F1F1',

		barDir: 'col',
		barGrouping: 'stacked',

		dataLabelFontFace: 'Arial',
		dataLabelFontSize: 12,
		dataLabelFontBold: true,
		showValue: true,

		catAxisLabelFontFace: 'Courier',
		catAxisLabelFontSize: 12,
		catAxisOrientation: 'minMax',

		showLegend: false,
		showTitle: false,
	};
	slide.addChart(pptx.charts.BAR, dataChartBar3Series, optsChartBar2);

	// BTM-LEFT: H/bar - 100% layout without axis labels
	let optsChartBar3: IChartOpts = {
		x: 0.5,
		y: 3.8,
		w: 6.0,
		h: 3.5,
		barDir: 'bar',
		barGrouping: 'percentStacked',
		chartColors: ['F2AF00', '4472C4'],
		dataBorder: { pt: 1, color: 'F1F1F1' },
		catAxisHidden: true,
		valAxisHidden: true,
		valGridLine: { style: 'none' },
		showTitle: false,
		//
		layout: { x: 0.1, y: 0.1, w: 1, h: 1 },
		showDataTable: true,
		showDataTableKeys: true,
		showDataTableHorzBorder: false,
		showDataTableVertBorder: false,
		showDataTableOutline: false,
		dataTableFontSize: 10,
	};
	slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar3);

	// BTM-RIGHT: V/col - TITLE and LEGEND
	let optsChartBar4: IChartOpts = {
		x: 7.0,
		y: 3.8,
		w: 6.0,
		h: 3.5,
		chartArea: { fill: { color: 'f1f1f1' } },
		plotArea: { fill: { color: 'ffffff' } },
		chartColors: COLORS_VIVID,
		//
		barDir: 'col',
		barGrouping: 'percentStacked',
		catAxisLabelFontFace: 'Times',
		catAxisLabelFontSize: 12,
		catAxisOrientation: 'minMax',
		showLegend: true,
		legendPos: 't',
		showDataTable: true,
		showDataTableKeys: false,
		dataTableFormatCode: '$#',
		//dataTableFormatCode: '0.00%' // @since v3.3.0
		//dataTableFormatCode: '$0.00' // @since v3.3.0
	};
	slide.addChart(pptx.charts.BAR, dataChartBar3Series, optsChartBar4);
}
