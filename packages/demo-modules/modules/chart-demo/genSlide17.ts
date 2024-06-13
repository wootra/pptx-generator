import PptxGenJS, { TableCell } from 'gen-pptx-js';
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';

export // SLIDE 17: Multi-Level Category Axes (2 levels)
function genSlide17(pptx: PptxGenJS) {
	let slide = pptx.addSlide({ sectionTitle: 'Charts' });
	slide.addNotes(
		'API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html'
	);
	slide.addTable(
		[
			[
				{
					text: 'Chart Examples: Multi-Level Category Axes',
					options: BASE_TEXT_OPTS_L,
				},
				BASE_TEXT_OPTS_R,
			] as TableCell[],
		],
		BASE_TABLE_OPTS
	);

	const arrDataLabels = [
		[
			'Gear',
			'Bearing',
			'Motor',
			'Switch',
			'Plug',
			'Cord',
			'Fuse',
			'Bulb',
			'Pump',
			'Leak',
			'Seals',
		],
		[
			'Mechanical',
			'',
			'',
			'Electrical',
			'',
			'',
			'',
			'',
			'Hydraulic',
			'',
			'',
		],
	];
	const arrDataRegions = [
		{
			name: 'Mechanical',
			labels: arrDataLabels,
			values: [11, 8, 3, 0, 0, 0, 0, 0, 0, 0, 0],
		},
		{
			name: 'Electrical',
			labels: arrDataLabels,
			values: [0, 0, 0, 19, 12, 11, 3, 2, 0, 0, 0],
		},
		{
			name: 'Hydraulic',
			labels: arrDataLabels,
			values: [0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 1],
		},
	];

	const opts1 = {
		x: 0.5,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		catAxisMultiLevelLabels: true,
		catAxisLabelFontFace: 'Helvetica Neue Thin',
	};

	const opts2 = {
		x: 6.8,
		y: 0.6,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		catAxisMultiLevelLabels: true,
		catAxisLabelFontFace: 'Helvetica Neue Thin',
		barDir: 'col',
		barGapWidthPct: 0,
		//catAxisLabelColor: "696969",
	};

	const opts3 = {
		x: 0.5,
		y: 4.0,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		catAxisMultiLevelLabels: true,
		barDir: 'col',
		v3DRAngAx: true,
	};

	const opts4 = {
		x: 6.8,
		y: 4.0,
		w: 6.0,
		h: 3.0,
		chartArea: { fill: { color: 'F1F1F1' } },
		catAxisMultiLevelLabels: true,
	};

	slide.addChart(pptx.charts.AREA, arrDataRegions, opts1);
	slide.addChart(pptx.charts.BAR, arrDataRegions, opts2);
	slide.addChart(pptx.charts.BAR3D, arrDataRegions, opts3);
	slide.addChart(pptx.charts.LINE, arrDataRegions, opts4);
}
