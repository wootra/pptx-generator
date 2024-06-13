import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R, IMAGE_PATHS, } from '../enums';
import { COLORS_SPECTRUM, dataChartPieStat } from '../enums_charts';
export // DEV/TEST 05: ref-check
 function devSlide05(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            { text: 'DEV-TEST: ref-test', options: BASE_TEXT_OPTS_L },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var optsChartPie1 = {
        x: 0.5,
        y: 0.6,
        w: 6.0,
        h: 6.4,
        chartArea: { fill: { color: 'F1F1F1' } },
        holeSize: 70,
        showLabel: false,
        showValue: false,
        showPercent: true,
        showLegend: true,
        legendPos: 'b',
        //
        chartColors: COLORS_SPECTRUM,
        dataBorder: { pt: 2, color: 'F1F1F1' },
        dataLabelColor: 'FFFFFF',
        dataLabelFontSize: 14,
        //
        showTitle: false,
        title: 'Project Status',
        titleColor: '33CF22',
        titleFontFace: 'Helvetica Neue',
        titleFontSize: 24,
    };
    slide.addChart(pptx.charts.DOUGHNUT, dataChartPieStat, optsChartPie1);
    // [TEST][INTERNAL]: Used for ensuring ref counting works across mixed object types (eg: `rId` check/test)
    slide.addImage({
        path: IMAGE_PATHS.ccCopyRemix.path,
        x: 6.83,
        y: 0.6,
        w: 6.0,
        h: 6.0,
    });
}
//# sourceMappingURL=devSlide05.js.map