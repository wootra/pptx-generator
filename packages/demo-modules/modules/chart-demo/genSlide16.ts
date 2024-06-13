import PptxGenJS, { IChartOpts, TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_RYGU } from '../enums_charts';

export // SLIDE 16: Radar Chart
function genSlide16(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Radar Chart',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	const arrDataRegions = [
		{
			name: 'Region 1',
			labels: ['Jun', 'Jul', 'Aug', 'Sep'],
			values: [20, 18, 15, 10],
		},
	];
	const arrDataStudents = [
		{
			name: 'Student 1',
			labels: ['Logic', 'Coding', 'Results', 'Comments', 'Runtime'],
			values: [3, 1, 3, 3, 4],
		},
		{
			name: 'Student 2',
			labels: ['Logic', 'Coding', 'Results', 'Comments', 'Runtime'],
			values: [1, 2, 2, 3, 2],
		},
		{
			name: 'Student 3',
			labels: ['Logic', 'Coding', 'Results', 'Comments', 'Runtime'],
			values: [2, 3, 3, 4, 3],
		},
	];

	// TOP-ROW
	{
		// TOP-L: `{ radar:'normal' }`
		let optsChartRadar1: IChartOpts = {
			x: 0.5,
			y: 0.6,
			w: 4.0,
			h: 3.0,
			chartArea: { fill: { color: 'F9F9F9' } },
			//
			radarStyle: 'standard',
			//
			showTitle: true,
			titleColor: '7F7F7F',
			titleFontFace: 'Segoe UI',
			titleFontSize: 12,
			title: "radarStyle: 'standard'",
			//
			lineDataSymbol: 'none',
		};
		slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar1);

		// TOP-C: `{ radar:'marker' }` Cat Axis options
		let optsChartRadar2: IChartOpts = {
			x: 4.65,
			y: 0.6,
			w: 4.0,
			h: 3.0,
			chartArea: { fill: { color: 'F9F9F9' } },
			//
			radarStyle: 'marker',
			//
			showTitle: true,
			titleColor: '7F7F7F',
			titleFontFace: 'Segoe UI',
			titleFontSize: 12,
			title: "radarStyle: 'marker'",
		};
		slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar2);

		// TOP-R: `{ radar:'marker' }` Cat Axis options
		let optsChartRadar3: IChartOpts = {
			x: 8.8,
			y: 0.6,
			w: 4.0,
			h: 3.0,
			chartArea: { fill: { color: 'F9F9F9' } },
			//
			radarStyle: 'filled',
			//
			showTitle: true,
			titleColor: '7F7F7F',
			titleFontFace: 'Segoe UI',
			titleFontSize: 12,
			title: "radarStyle: 'filled'",
		};
		slide.addChart(pptx.charts.RADAR, arrDataRegions, optsChartRadar3);
	}

	// BTM-ROW
	{
		// BTM-L: marker/line options
		let optsChartRadar10: IChartOpts = {
			x: 0.5,
			y: 3.8,
			w: 6.0,
			h: 3.5,
			chartArea: { fill: { color: 'F1F1F1' } },
			//
			radarStyle: 'marker',
			catAxisLabelColor: '0088CC',
			catAxisLabelFontFace: 'Courier',
			catAxisLabelFontSize: 11,
			//
			chartColors: COLORS_RYGU, // marker & line color
			lineDataSymbol: 'diamond', // marker type ('circle' | 'dash' | 'diamond' | 'dot' | 'none' | 'square' | 'triangle')
			lineDataSymbolLineColor: '0088CC', // marker border color (hex)
			lineDataSymbolLineSize: 2, // marker border size (points)
			lineDataSymbolSize: 12, // marker size (2-72)
			lineSize: 3, // line size
			valAxisLineColor: 'D9D9D9', // val axis is the main, center N-S, W-E lines
			valAxisLineSize: 2, // val axis lines size
			//
			showLegend: true,
			legendPos: 'l',
			//
			showTitle: true,
			title: 'Line/Marker Options',
			titleColor: '7F7F7F',
			titleFontFace: 'Helvetica Neue',
			titleFontSize: 12,
		};
		slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar10);

		// BTM-R: Filled/Axis Options
		let optsChartRadar11: IChartOpts = {
			x: 6.83,
			y: 3.8,
			w: 6.0,
			h: 3.5,
			chartArea: { fill: { color: 'F1F1F1' } },
			//
			radarStyle: 'filled',
			//
			chartColors: COLORS_RYGU, // marker & line color
			chartColorsOpacity: 25,
			catAxisLabelColor: '404040',
			catAxisLabelFontFace: 'Segoe UI',
			catAxisLabelFontSize: 10,
			catAxisLineShow: false,
			//
			lineDataSymbolSize: 2, // marker size (2-72)
			lineSize: 1, // line size
			valAxisLabelFontFace: 'Segoe UI',
			valAxisLabelFontSize: 10,
			//
			showLegend: true,
			legendPos: 'r',
			legendColor: '404040',
			//
			titleColor: '404040',
			titleFontFace: 'Helvetica Neue',
			titleFontSize: 12,
			showTitle: true,
			title: 'Filled/Axis Options',
		};
		slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar11);
	}
}
