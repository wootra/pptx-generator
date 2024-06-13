import PptxGenJS, {
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
import { CHART_DATA } from '../enums_charts';

export // SLIDE 8: Line Chart
function genSlide08(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Line Chart',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);
	slide.addText(
		`(${CHART_DATA.LongTermIntRates.sourceUrl})`,
		FOOTER_TEXT_OPTS as TextPropsOptions
	);

	// FULL SLIDE:
	const OPTS_CHART: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: '95%',
		h: '85%',
		plotArea: { fill: { color: 'F2F9FC' } },
		//
		showLegend: true,
		legendPos: 'r',
		//
		showTitle: true,
		lineDataSymbol: 'none',
		title: CHART_DATA.LongTermIntRates.chartTitle,
		titleColor: '0088CC',
		titleFontFace: 'Arial',
		titleFontSize: 18,
	};
	slide.addChart(
		pptx.charts.LINE,
		CHART_DATA.LongTermIntRates.chartData,
		OPTS_CHART
	);
}
