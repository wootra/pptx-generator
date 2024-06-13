import PptxGenJS, { IChartOpts, ShadowProps, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_RYGU, arrDataLineStat } from '../enums_charts';

export // SLIDE 9: Line Chart: Line Smoothing, Line Size, Symbol Size
function genSlide09(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Line Smoothing, Line Size, Line Shadow, Symbol Size',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let optsChartLine1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		lineSize: 8,
		lineSmooth: true,
		showLegend: true,
		legendPos: 't',
		catAxisLabelPos: 'high',
	};
	slide.addChart(pptx.charts.LINE, arrDataLineStat, optsChartLine1);

	let optsChartLine2: IChartOpts = {
		x: 7.0,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		lineSize: 16,
		lineSmooth: true,
		showLegend: true,
		legendPos: 'r',
	};
	slide.addChart(pptx.charts.LINE, arrDataLineStat, optsChartLine2);

	let optsChartLine3: IChartOpts = {
		x: 0.5,
		y: 4.0,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		lineDataSymbolSize: 10,
		shadow: { type: 'none' },
		//displayBlanksAs: 'gap', // NOTE: uncomment only for test - looks broken otherwise!
		showLegend: true,
		legendPos: 'l',
	};
	slide.addChart(pptx.charts.LINE, arrDataLineStat, optsChartLine3);

	// QA: DEMO: Test shadow option
	const shadowOpts: ShadowProps = {
		type: 'outer',
		color: 'cd0011',
		blur: 3,
		offset: 12,
		angle: 75,
		opacity: 0.8,
	};
	let optsChartLine4: IChartOpts = {
		x: 7.0,
		y: 4.0,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		lineDataSymbolSize: 20,
		shadow: shadowOpts,
		showLegend: true,
		legendPos: 'b',
	};
	slide.addChart(pptx.charts.LINE, arrDataLineStat, optsChartLine4);
}
