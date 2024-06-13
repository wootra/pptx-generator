import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { MONS } from '../enums_charts';
export // DEV/TEST 02: Line Chart: Lots of Series
 function devSlide02(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            { text: 'DEV-TEST: lots-of-series', options: BASE_TEXT_OPTS_L },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var MAXVAL = 20000;
    var arrDataTimeline = [];
    for (var idx = 0; idx < 15; idx++) {
        var tmpObj = {
            name: "Series ".concat(idx),
            labels: MONS,
            values: [],
        };
        for (var idy = 0; idy < MONS.length; idy++) {
            tmpObj.values.push(Math.floor(Math.random() * MAXVAL) + 1);
        }
        arrDataTimeline.push(tmpObj);
    }
    // FULL SLIDE:
    var optsChartLine1 = {
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
//# sourceMappingURL=devSlide02.js.map