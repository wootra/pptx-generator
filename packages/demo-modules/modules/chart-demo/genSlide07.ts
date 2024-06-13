import PptxGenJS, { TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';

export // SLIDE 7: Tornado Chart
function genSlide07(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Tornado Chart - Grid and Axis Formatting',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	slide.addChart(
		pptx.charts.BAR,
		[
			{
				name: 'High',
				labels: ['London', 'Munich', 'Tokyo'],
				values: [0.2, 0.32, 0.41],
			},
			{
				name: 'Low',
				labels: ['London', 'Munich', 'Tokyo'],
				values: [-0.11, -0.22, -0.29],
			},
		],
		{
			x: 0.5,
			y: 0.5,
			w: '90%',
			h: '90%',
			chartArea: { fill: { color: 'F1F1F1', transparency: 50 } },

			valAxisMaxVal: 1,
			barDir: 'bar',
			valAxisLabelFormatCode: '#%',
			catGridLine: {
				color: 'D8D8D8',
				style: 'dash',
				size: 1,
				cap: 'round',
			},
			valGridLine: {
				color: 'D8D8D8',
				style: 'dash',
				size: 1,
				cap: 'square',
			},
			catAxisLineShow: false,
			valAxisLineShow: false,
			barGrouping: 'stacked',
			catAxisLabelPos: 'low',
			// valueBarColors: true,
			shadow: { type: 'none' },
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
			invertedColors: [
				'0065A2',
				'428526',
				'C99100',
				'51A7C1',
				'BD3813',
				'123970',
				'6A575A',
				'8BAB52',
				'CB7A69',
				'84888B',
			],
			barGapWidthPct: 25,
			valAxisMajorUnit: 0.2,
		}
	);
}
