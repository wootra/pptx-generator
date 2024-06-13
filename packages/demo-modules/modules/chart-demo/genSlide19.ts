import PptxGenJS, {
	IChartMulti,
	IChartOpts,
	TableCell,
	TextPropsOptions,
} from 'gen-pptx-js';
import {
	BASE_TABLE_OPTS,
	BASE_TEXT_OPTS_L,
	BASE_TEXT_OPTS_R,
	FOOTER_TEXT_OPTS,
} from '../enums';
import { CHART_DATA, COLORS_SPECTRUM } from '../enums_charts';

export // SLIDE 19: Combo Chart
function genSlide19(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Combo Chart',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);
	slide.addText(
		`(${CHART_DATA.EvSales_Vol.sourceUrl})`,
		FOOTER_TEXT_OPTS as TextPropsOptions
	);

	const comboProps: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 12.3,
		h: '85%',
		chartArea: { fill: { color: 'F1F1F1' } },
		barDir: 'col',
		barGrouping: 'stacked',
		//
		catAxisLabelColor: '494949',
		catAxisLabelFontFace: 'Arial',
		catAxisLabelFontSize: 10,
		catAxisOrientation: 'minMax',
		//
		showLegend: true,
		legendPos: 'b',
		//
		showTitle: true,
		titleFontFace: 'Calibri Light',
		titleFontSize: 14,
		title: CHART_DATA.EvSales_Vol.chartTitle,
		//
		valAxes: [
			{
				showValAxisTitle: true,
				valAxisTitle: 'Cars Produced (m)',
				valAxisMaxVal: 10,
				valAxisTitleColor: '1982c4',
				valAxisLabelColor: '1982c4',
			},
			{
				showValAxisTitle: true,
				valAxisTitle: 'Global Market Share (%)',
				valAxisMaxVal: 10,
				valAxisTitleColor: 'F38940',
				valAxisLabelColor: 'F38940',
				valGridLine: { style: 'none' },
			},
		],
		//
		catAxes: [{ catAxisTitle: 'Year' }, { catAxisHidden: true }],
	};
	const comboTypes: IChartMulti[] = [
		{
			type: pptx.charts.BAR,
			data: CHART_DATA.EvSales_Vol.chartData,
			options: { chartColors: COLORS_SPECTRUM, barGrouping: 'stacked' },
		},
		{
			type: pptx.charts.LINE,
			data: CHART_DATA.EvSales_Pct.chartData,
			options: {
				chartColors: ['F38940'],
				secondaryValAxis: true,
				secondaryCatAxis: true,
			},
		},
	];

	slide.addChart(comboTypes, comboProps);
}
