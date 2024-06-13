import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_ACCENT, COLORS_SPECTRUM, dataChartBar3Series, } from '../enums_charts';
// SLIDE 2: Bar Chart: Various Designs
export function genSlide02(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: Bar Chart',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var arrDataRegions = [
        {
            name: 'Region 1',
            labels: ['May', 'June', 'July', 'August'],
            values: [26, 53, 100, 75],
        },
        {
            name: 'Region 2',
            labels: ['May', 'June', 'July', 'August'],
            values: [43.5, 70.3, 90.1, 80.05],
        },
    ];
    var arrDataSersCats = [
        {
            name: 'Series 1',
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            values: [4.3, 2.5, 3.5, 4.5],
        },
        {
            name: 'Series 2',
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            values: [2.4, 4.4, 1.8, 2.8],
        },
        {
            name: 'Series 3',
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
            values: [2, 2, 3, 5],
        },
    ];
    // TOP-LEFT: H/bar
    var optsChartBar1 = {
        x: 0.5,
        y: 0.6,
        w: 6.0,
        h: 3.0,
        chartArea: { border: { color: COLORS_SPECTRUM[0], pt: 1 } },
        //chartArea: { fill: { color: pptx.colors.BACKGROUND2 }, border: { color: pptx.colors.BACKGROUND2, pt: 1 }  },
        plotArea: { fill: { color: 'DAE3F3' } },
        chartColors: COLORS_SPECTRUM,
        objectName: 'bar chart (top L)',
        altText: 'this is the alt text content',
        barDir: 'bar',
        catAxisLabelColor: COLORS_ACCENT[0],
        catAxisLabelFontFace: 'Helvetica Neue',
        catAxisLabelFontSize: 12,
        catAxisOrientation: 'minMax',
        catAxisMajorTickMark: 'inside',
        catAxisMinorTickMark: 'cross',
        valAxisMajorTickMark: 'cross',
        valAxisMinorTickMark: 'outside',
        //valAxisLabelColor: COLORS_ACCENT[0],
        //valAxisCrossesAt: 100,
    };
    slide.addChart(pptx.charts.BAR, arrDataSersCats, optsChartBar1);
    // TOP-RIGHT: V/col
    var optsChartBar2 = {
        x: 7.0,
        y: 0.6,
        w: 6.0,
        h: 3.0,
        chartArea: { border: { color: COLORS_SPECTRUM[0], pt: 1 } },
        //chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
        plotArea: { fill: { color: 'DAE3F3' } },
        //plotArea: { fill: { color: pptx.colors.BACKGROUND1 }, border: { color: pptx.colors.BACKGROUND2, pt: 1 } },
        chartColors: COLORS_SPECTRUM,
        objectName: 'bar chart (top R)',
        barDir: 'col',
        catAxisLabelColor: COLORS_ACCENT[0],
        catAxisLabelFontFace: 'Arial',
        catAxisLabelFontSize: 11,
        catAxisOrientation: 'minMax',
        catAxisMajorTickMark: 'none',
        catAxisMinorTickMark: 'none',
        dataBorder: { pt: 1, color: 'F1F1F1' },
        dataLabelColor: COLORS_ACCENT[0],
        dataLabelFontFace: 'Courier',
        dataLabelFontSize: 10,
        dataLabelPosition: 'outEnd',
        dataLabelFormatCode: '#.0',
        showValue: true,
        valAxisLabelColor: COLORS_ACCENT[0],
        valAxisOrientation: 'minMax',
        valAxisMajorTickMark: 'none',
        valAxisMinorTickMark: 'none',
        //valAxisLogScaleBase: '25',
        showLegend: false,
        showTitle: false,
    };
    slide.addChart(pptx.charts.BAR, arrDataRegions, optsChartBar2);
    // BTM-LEFT: H/bar - TITLE and LEGEND
    var optsChartBar3 = {
        x: 0.5,
        y: 3.8,
        w: 6.0,
        h: 3.5,
        barDir: 'bar',
        chartArea: {
            fill: { color: pptx.colors.BACKGROUND2 },
            border: { color: pptx.colors.ACCENT3, pt: 2 },
        },
        //chartArea: { fill: { color: pptx.colors.BACKGROUND2 } },
        //chartArea: { fill: { color: "F1F1F1", transparency: 75 } },
        //chartArea: { fill: { color: "F1F1F1" } },
        plotArea: { fill: { color: 'F2F9FC' } },
        //plotArea: { border: { pt: 3, color: "CF0909" }, fill: { color: "F1C1C1" } },
        //plotArea: { border: { pt: 3, color: "CF0909" }, fill: { color: "F1C1C1", transparency: 10 } },
        catAxisLabelColor: 'CC0000',
        catAxisLabelFontFace: 'Helvetica Neue',
        catAxisLabelFontSize: 14,
        catAxisOrientation: 'minMax',
        titleColor: '33CF22',
        titleFontFace: 'Helvetica Neue',
        titleFontSize: 16,
        showTitle: true,
        title: 'Sales by Region',
    };
    slide.addChart(pptx.charts.BAR, dataChartBar3Series, optsChartBar3);
    // BTM-RIGHT: V/col - TITLE and LEGEND
    var optsChartBar4 = {
        x: 7.0,
        y: 3.8,
        w: 6.0,
        h: 3.5,
        chartArea: { fill: { color: 'F1F1F1' } },
        plotArea: { fill: { color: '404040' } },
        //
        barDir: 'col',
        barGapWidthPct: 25,
        chartColors: COLORS_ACCENT,
        chartColorsOpacity: 50,
        //
        catAxisLabelColor: COLORS_ACCENT[0],
        catAxisLabelFontFace: 'Calibri',
        catAxisLabelFontSize: 11,
        catAxisOrientation: 'minMax',
        //
        valAxisMaxVal: 5000,
        valAxisLabelColor: COLORS_ACCENT[0],
        //
        dataBorder: { pt: 1, color: 'F1F1F1' },
        dataLabelColor: 'FFFFFF',
        dataLabelFontFace: 'Arial',
        dataLabelFontSize: 10,
        dataLabelPosition: 'inEnd',
        showValue: true,
        //
        showLegend: false,
        legendPos: 'b',
        legendColor: COLORS_ACCENT[1],
        //
        showTitle: true,
        title: 'Device Prices',
        titleColor: COLORS_ACCENT[0],
    };
    slide.addChart(pptx.charts.BAR, dataChartBar3Series, optsChartBar4);
}
//# sourceMappingURL=genSlide02.js.map