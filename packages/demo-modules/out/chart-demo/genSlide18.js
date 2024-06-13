import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
export // SLIDE 18: Multi-Level Category Axes (3 Levels)
 function genSlide18(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: Multi-Level Category Axes (3 Levels)',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var arrDataRegions = [
        {
            name: 'Fruits',
            labels: [
                [
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4',
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4',
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4',
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4',
                ],
                [
                    'Apple',
                    '',
                    '',
                    '',
                    'Banana',
                    '',
                    '',
                    '',
                    'Apple',
                    '',
                    '',
                    '',
                    'Banana',
                    '',
                    '',
                    '',
                ],
                [
                    '2014',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '2015',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
            ],
            values: [
                734, 465, 656, 176, 434, 165, 613, 359, 279, 660, 307, 270, 539,
                142, 554, 405,
            ],
        },
    ];
    var opts1 = {
        x: 0.5,
        y: 0.6,
        w: 12.3,
        h: 6.5,
        chartArea: { fill: { color: 'F1F1F1' }, roundedCorners: false },
        catAxisMultiLevelLabels: true,
        chartColors: [
            'C0504D',
            'C0504D',
            'C0504D',
            'C0504D',
            'FFC000',
            'FFC000',
            'FFC000',
            'FFC000',
        ],
    };
    slide.addChart(pptx.charts.BAR, arrDataRegions, opts1);
}
//# sourceMappingURL=genSlide18.js.map