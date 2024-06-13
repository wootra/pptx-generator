import PptxGenJS, { TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';

export // SLIDE 5: Bar Chart: Data Series Colors, majorUnits, and valAxisLabelFormatCode
function genSlide05(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Multi-Color Bars, `catLabelFormatCode`, `valAxisDisplayUnit`, `valAxisMajorUnit`, `valAxisLabelFormatCode`',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	// TOP-LEFT
	slide.addChart(
		pptx.charts.BAR,
		[
			{
				name: 'Excel Date Values',
				labels: ['37987', '38018', '38047', '38078', '38108', '38139'],
				values: [20, 30, 10, 25, 15, 5],
			},
		],
		{
			x: 0.5,
			y: 0.6,
			w: '45%',
			h: 3,
			chartArea: { fill: { color: '404040' } },
			barDir: 'bar',
			chartColors: [
				'0077BF',
				'4E9D2D',
				'ECAA00',
				'5FC4E3',
				'DE4216',
				'154384',
			],
			//
			catAxisLabelColor: 'F1F1F1',
			catLabelFormatCode: 'yyyy-mm',
			/*
			valAxisLabelColor: "F1F1F1",
			valAxisMajorUnit: 15,
			valAxisDisplayUnit: "hundreds",
			valAxisMaxVal: 45,
			valLabelFormatCode: "$0", // @since v3.3.0
			*/
			valAxisHidden: true,
			//
			showTitle: true,
			title: 'Categories can be Multi-Color',
			titleColor: '0088CC',
			titleFontSize: 14,
		}
	);

	// TOP-RIGHT
	// NOTE: Labels are ppt/excel dates (days past 1900)
	slide.addChart(
		pptx.charts.BAR,
		[
			{
				name: 'Too Many Colors Series',
				labels: ['37987', '38018', '38047', '38078', '38108', '38139'],
				values: [0.2, 0.3, 0.1, 0.25, 0.15, 0.05],
			},
		],
		{
			x: 7,
			y: 0.6,
			w: '45%',
			h: 3,
			chartArea: { fill: { color: '404040' } },
			catAxisLabelColor: 'F1F1F1',
			valAxisLabelColor: 'F1F1F1',
			valAxisLineColor: '7F7F7F',
			valGridLine: { color: '7F7F7F' },
			dataLabelColor: 'B7B7B7',

			valAxisMaxVal: 1,
			barDir: 'bar',
			catAxisLineShow: false,
			showValue: true,
			catLabelFormatCode: 'mmm-yy',
			dataLabelPosition: 'outEnd',
			dataLabelFormatCode: '#%',
			valAxisLabelFormatCode: '#%',
			valAxisMajorUnit: 0.2,
			chartColors: [
				'0077BF',
				'4E9D2D',
				'ECAA00',
				'5FC4E3',
				'DE4216',
				'154384',
				'7D666A',
				'A3C961',
				'EF907B',
				'9BA0A3',
			],
			barGapWidthPct: 25,
		}
	);

	// BOTTOM-LEFT
	slide.addChart(
		pptx.charts.BAR,
		[
			{
				name: 'Two Color Series',
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				values: [0.2, -0.3, -0.1, 0.25, 0.15, 0.05],
			},
		],
		{
			x: 0.5,
			y: 4.0,
			w: '45%',
			h: 3,
			chartArea: { fill: { color: '404040' } },
			plotArea: { fill: { color: '202020' } },
			catAxisLabelColor: 'F1F1F1',
			valAxisLabelColor: 'F1F1F1',
			valAxisLineColor: '7F7F7F',
			valGridLine: { color: '7F7F7F' },
			dataLabelColor: 'B7B7B7',
			valAxisHidden: true,
			barDir: 'col', // `col`(vert) | `bar`(horiz)
			showValue: true,
			dataLabelPosition: 'outEnd',
			dataLabelFormatCode: '#%',
			valAxisLabelFormatCode: '0.#0',
			chartColors: [
				'0077BF',
				'4E9D2D',
				'ECAA00',
				'5FC4E3',
				'DE4216',
				'154384',
				'7D666A',
				'A3C961',
				'EF907B',
				'9BA0A3',
			],
			valAxisMaxVal: 0.4,
			barGapWidthPct: 50,
			showLegend: true,
			legendPos: 'r',
			legendColor: 'F1F1F1',
		}
	);

	// BOTTOM-RIGHT
	slide.addChart(
		pptx.charts.BAR,
		[
			{
				name: 'EV',
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				values: [102, 103, 121, 125, 135, 155],
			},
			{
				name: 'ICE',
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				values: [150, 153, 151, 125, 115, 105],
			},
		],
		{
			x: 7,
			y: 4,
			w: '45%',
			h: 3,
			chartArea: { fill: { color: '202020' } },
			barDir: 'bar',
			catAxisLabelColor: 'F1F1F1',
			valAxisLabelColor: 'F1F1F1',
			valAxisLineColor: '7F7F7F',
			valGridLine: { color: '7F7F7F' },
			dataLabelColor: 'B7B7B7',
			chartColorsOpacity: 75,
			//showValue: true,
			//dataLabelPosition: "outEnd",
			chartColors: [
				'0077BF',
				'4E9D2D',
				'ECAA00',
				'5FC4E3',
				'DE4216',
				'154384',
				'7D666A',
				'A3C961',
				'EF907B',
				'9BA0A3',
			],
			barGapWidthPct: 25,
			catAxisOrientation: 'minMax',
			valAxisOrientation: 'minMax',
			valAxisMaxVal: 200,
			valAxisMajorUnit: 25,
		}
	);
}
