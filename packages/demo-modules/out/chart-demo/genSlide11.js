import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { CHART_DATA, COLORS_VIVID, MONS } from '../enums_charts';
export // SLIDE 11: Area Chart
 function genSlide11(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: Area Chart, Stacked Area Chart',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    // let arrDataAreaSm = [
    // 	{
    // 		name: 'Small Samples',
    // 		labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    // 		values: [15, 46, 31, 85],
    // 	},
    // ];
    var arrDataTimeline2ser = [
        {
            name: 'Actual Sales',
            labels: MONS,
            values: [
                1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789,
                10123, 15121,
            ],
        },
        {
            name: 'Proj Sales',
            labels: MONS,
            values: [
                1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789,
                11123, 12121,
            ],
        },
    ];
    // TOP-LEFT
    var optsChartLine1 = {
        x: 0.5,
        y: 0.6,
        w: '45%',
        h: 3,
        chartArea: { fill: { color: 'e9e9e9' } },
        plotArea: { fill: { color: 'f2f9fc' } },
        chartColors: COLORS_VIVID,
        dataBorder: { pt: 1, color: 'F1F1F1' },
        showTitle: true,
        title: CHART_DATA.CeoPayRatio_Comp.chartTitle,
        titleFontSize: 11,
        titleColor: 'fc0000',
        valAxisLabelFormatCode: '#-1',
        valAxisLabelFontSize: 10,
        valAxisLabelColor: '494949',
        catAxisLabelFontSize: 10,
        catAxisLabelColor: '494949',
        catAxisLabelRotate: 45,
        // chartColors: ['EF423E'],
        chartColorsOpacity: 25,
        //showValue: true,
    };
    slide.addChart(pptx.charts.AREA, CHART_DATA.CeoPayRatio_Comp.chartData, optsChartLine1);
    // TOP-RIGHT (stacked area chart)
    var optsChartLine2 = {
        x: 7,
        y: 0.6,
        w: '45%',
        h: 3,
        plotArea: { fill: { color: 'D1E1F1' } },
        chartColors: ['0088CC', '99FFCC'],
        chartColorsOpacity: 25,
        valAxisLabelRotate: 5,
        dataBorder: { pt: 2, color: 'FFFFFF' },
        showValue: false,
        barGrouping: 'stacked',
    };
    slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine2);
    // BOTTOM-LEFT
    var optsChartLine3 = {
        x: 0.5,
        y: 4.0,
        w: '45%',
        h: 3,
        chartColors: ['0088CC', '99FFCC'],
        chartColorsOpacity: 50,
        valAxisLabelFormatCode: '#,K',
    };
    slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine3);
    // BOTTOM-RIGHT
    var optsChartLine4 = {
        x: 7,
        y: 4.0,
        w: '45%',
        h: 3,
        chartColors: ['CC8833', 'CCFF69'],
        chartColorsOpacity: 75,
    };
    slide.addChart(pptx.charts.AREA, arrDataTimeline2ser, optsChartLine4);
}
//# sourceMappingURL=genSlide11.js.map