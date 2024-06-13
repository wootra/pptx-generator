import PptxGenJS, { TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import {
	COLORS_CHART,
	COLORS_RYGU,
	COLORS_SPECTRUM,
	dataChartPieLocs,
	dataChartPieStat,
} from '../enums_charts';

export // SLIDE 12: Pie Chart
function genSlide12(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Pie Charts: Legends',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	// TOP-LEFT
	slide.addChart(pptx.charts.PIE, dataChartPieStat, {
		x: 0.5,
		y: 0.6,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_RYGU,
		dataBorder: { pt: 2, color: 'F1F1F1' },
		//
		legendPos: 'l',
		legendFontFace: 'Courier New',
		showLegend: true,
		//
		showLeaderLines: true,
		showPercent: false,
		showValue: true,
		dataLabelColor: 'FFFFFF',
		dataLabelFontSize: 14,
		dataLabelPosition: 'bestFit', // 'bestFit' | 'outEnd' | 'inEnd' | 'ctr'
	});

	// TOP-MIDDLE
	slide.addChart(pptx.charts.PIE, dataChartPieStat, {
		x: 4.67,
		y: 0.6,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_SPECTRUM,
		dataBorder: { pt: 1, color: '404040' },
		dataLabelColor: 'f2f9fc',
		showPercent: true,
		showLegend: true,
		legendPos: 't',
	});

	// TOP-RIGHT (DEMO: `legendFontSize`, `titleAlign`, `titlePos`)
	slide.addChart(pptx.charts.PIE, dataChartPieLocs, {
		x: 8.83,
		y: 0.6,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_SPECTRUM,
		dataBorder: { pt: 1, color: 'F1F1F1' },
		showLegend: true,
		showPercent: true,
		legendPos: 't',
		legendFontSize: 14,
		showLeaderLines: true,
		showTitle: true,
		title: 'Title Position {0,0}',
		titleAlign: 'right',
		titlePos: { x: 0, y: 0 },
	});

	// BTM-LEFT
	slide.addChart(pptx.charts.PIE, dataChartPieLocs, {
		x: 0.5,
		y: 4.0,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		chartColors: COLORS_CHART,
		dataBorder: { pt: 1, color: 'F1F1F1' },
		//
		showValue: true,
		showLabel: true,
		showPercent: true,
		//
		dataLabelColor: 'F1F1F1',
		dataLabelFontSize: 10,
	});

	// BTM-MIDDLE
	slide.addChart(pptx.charts.PIE, dataChartPieLocs, {
		x: 4.67,
		y: 4.0,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		dataBorder: { pt: 1, color: 'F1F1F1' },
		chartColors: COLORS_SPECTRUM,
		dataLabelColor: 'F1F1F1',
		showPercent: true,
		showLegend: true,
		legendPos: 'b',
	});

	// BOTH: BTM-RIGHT
	slide.addChart(pptx.charts.PIE, dataChartPieLocs, {
		x: 8.83,
		y: 4.0,
		w: 4.0,
		h: 3.2,
		chartArea: { fill: { color: 'F1F1F1' } },
		dataBorder: { pt: 1, color: 'F1F1F1' },
		showPercent: true,
		showLegend: true,
		legendPos: 'b',
		showTitle: true,
		title: 'Title & Legend',
		firstSliceAng: 90,
	});
}
