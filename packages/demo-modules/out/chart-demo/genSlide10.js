import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_VIVID, arrDataLineStat } from '../enums_charts';
export // SLIDE 10: Line Chart: `lineDataSymbol` and `lineDataSymbolSize`
 function genSlide10(pptx) {
    var intWgap = 4.25;
    var opts_lineDataSymbol = [
        'circle',
        'dash',
        'diamond',
        'dot',
        'none',
        'square',
        'triangle',
    ];
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: Line Chart: lineDataSymbol options',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    opts_lineDataSymbol.forEach(function (opt, idx) {
        slide.addChart(pptx.charts.LINE, arrDataLineStat, {
            x: (idx < 3
                ? idx * intWgap
                : idx < 6
                    ? (idx - 3) * intWgap
                    : (idx - 6) * intWgap) + 0.3,
            y: idx < 3 ? 0.5 : idx < 6 ? 2.85 : 5.1,
            w: 4.25,
            h: 2.25,
            lineCap: 'round',
            lineDataSymbol: opt,
            lineDataSymbolSize: idx == 5 ? 9 : idx == 6 ? 12 : undefined,
            chartColors: COLORS_VIVID,
            title: opt,
            showTitle: true,
        });
    });
}
//# sourceMappingURL=genSlide10.js.map