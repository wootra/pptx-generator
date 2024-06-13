import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { MONS } from '../enums_charts';

export // DEV/TEST 02: Line Chart: Lots of Series
function devSlide02(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{ text: 'DEV-TEST: lots-of-series', options: BASE_TEXT_OPTS_L },
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	let MAXVAL = 20000;

	let arrDataTimeline = [];
	for (let idx = 0; idx < 15; idx++) {
		let tmpObj = {
			name: `Series ${idx}`,
			labels: MONS,
			values: [] as number[],
		};

		for (let idy = 0; idy < MONS.length; idy++) {
			tmpObj.values.push(Math.floor(Math.random() * MAXVAL) + 1);
		}

		arrDataTimeline.push(tmpObj);
	}

	// FULL SLIDE:
	let optsChartLine1: IChartOpts = {
		x: 0.5,
		y: 0.6,
		w: '95%',
		h: '85%',
		plotArea: { fill: { color: 'F2F9FC' } },
		valAxisMaxVal: MAXVAL,
		showLegend: true,
		legendPos: 'r',
	};
	slide.addChart(pptx.charts.LINE, arrDataTimeline, optsChartLine1);
}
