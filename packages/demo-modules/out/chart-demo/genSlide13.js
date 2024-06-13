import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_RYGU, COLORS_VIVID, dataChartPieLocs, dataChartPieStat, } from '../enums_charts';
export // SLIDE 13: Doughnut Chart
 function genSlide13(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: Doughnut Chart',
                options: BASE_TEXT_OPTS_L,
            },
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
        chartColors: COLORS_RYGU,
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
    var optsChartPie2 = {
        x: 6.83,
        y: 0.6,
        w: 6.0,
        h: 6.4,
        chartArea: { fill: { color: '404040' } },
        chartColors: COLORS_VIVID,
        dataBorder: { pt: 1, color: 'F1F1F1' },
        dataLabelColor: 'FFFFFF',
        showLabel: true,
        showValue: true,
        showPercent: true,
        //
        showLegend: true,
        legendPos: 'b',
        legendColor: 'F1F1F1',
        legendFontSize: 12,
        //
        showTitle: false,
        title: 'Resource Totals by Location',
        shadow: {
            type: 'inner',
            offset: 20,
            blur: 20,
        },
    };
    slide.addChart(pptx.charts.DOUGHNUT, dataChartPieLocs, optsChartPie2);
}
//# sourceMappingURL=genSlide13.js.map