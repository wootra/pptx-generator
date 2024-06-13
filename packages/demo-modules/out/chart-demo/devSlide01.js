import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { LETTERS } from '../enums_charts';
export // DEV/TEST 01: Bar Chart: Lots of Series
 function devSlide01(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'DEV-TEST: lots-of-bars (>26 letters); negative val check',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var arrDataHighVals = [
        {
            name: 'Alphabet Letter Value',
            labels: LETTERS.concat(['AA', 'AB', 'AC', 'AD']),
            values: [
                -5, -3, 0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ],
        },
    ];
    var optsChart = {
        x: 0.5,
        y: 0.5,
        w: '90%',
        h: '90%',
        barDir: 'col',
        showLegend: true,
        chartColors: ['154384'],
        invertedColors: ['0088CC'],
        //
        title: 'Chart With >26 Cols',
        showTitle: true,
        titleFontSize: 18,
        //
        showCatAxisTitle: true,
        catAxisTitle: 'Letters',
        catAxisTitleColor: '4286f4',
        catAxisTitleFontSize: 14,
        //
        showValAxisTitle: true,
        valAxisTitle: 'Column Index',
        valAxisTitleColor: 'c11c13',
        valAxisTitleFontSize: 16,
    };
    // TEST `getExcelColName()` to ensure Excel Column names are generated correctly above >26 chars/cols
    slide.addChart(pptx.charts.BAR, arrDataHighVals, optsChart);
}
//# sourceMappingURL=devSlide01.js.map