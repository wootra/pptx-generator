var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_ACCENT } from '../enums_charts';
export // DEV/TEST 03: escaped-XML
 function devSlide03(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts-DevTest' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            { text: 'DEV-TEST: escaped-xml', options: BASE_TEXT_OPTS_L },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    slide.addChart(pptx.charts.BAR, [
        {
            name: 'Escaped XML chars',
            labels: ['escaped', 'xml', 'chars', "'", '"', '&', '<', '>'],
            values: [1.2, 2.3, 2.15, 6.05, 8.01, 2.02, 9.9, 0.9],
        },
    ], {
        x: 0.5,
        y: 0.6,
        w: '90%',
        h: '90%',
        chartArea: { fill: { color: '404040' } },
        catAxisLabelColor: 'F1F1F1',
        valAxisLabelColor: 'F1F1F1',
        valAxisLineColor: '7F7F7F',
        valGridLine: { color: '7F7F7F' },
        dataLabelColor: 'B7B7B7',
        barDir: 'bar',
        showValue: true,
        chartColors: __spreadArray(__spreadArray([], COLORS_ACCENT, true), COLORS_ACCENT, true),
        barGapWidthPct: 25,
        catAxisOrientation: 'minMax',
        valAxisOrientation: 'minMax',
        valAxisMaxVal: 10,
        valAxisMajorUnit: 1,
    });
}
//# sourceMappingURL=devSlide03.js.map