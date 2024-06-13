import { BASE_TABLE_OPTS, BASE_TEXT_OPTS_L, BASE_TEXT_OPTS_R } from '../enums';
import { COLORS_ACCENT, COLORS_SPECTRUM } from '../enums_charts';
export // SLIDE 6: 3D Bar Chart
 function genSlide06(pptx) {
    var slide = pptx.addSlide({ sectionTitle: 'Charts' });
    slide.addNotes('API Docs: https://gitbrent.github.io/PptxGenJS/docs/api-charts.html');
    slide.addTable([
        [
            {
                text: 'Chart Examples: 3D Bar Chart',
                options: BASE_TEXT_OPTS_L,
            },
            BASE_TEXT_OPTS_R,
        ],
    ], BASE_TABLE_OPTS);
    var arrDataRegions = [
        {
            name: 'Region 1',
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            values: [26, 53, 80, 75],
        },
        {
            name: 'Region 2',
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            values: [43.5, 70.3, 90.01, 80.05],
        },
    ];
    // TOP-LEFT: H/bar
    var optsChartBar1 = {
        x: 0.5,
        y: 0.6,
        w: 6.0,
        h: 3.0,
        chartArea: { fill: { color: 'F1F1F1', transparency: 50 } },
        barDir: 'bar',
        barGapWidthPct: 25,
        chartColors: COLORS_SPECTRUM,
        chartColorsOpacity: 80,
        //
        v3DRotX: 20,
        v3DRotY: 10,
        v3DRAngAx: false,
        //
        catAxisLabelColor: COLORS_SPECTRUM[1],
        catAxisLineColor: COLORS_SPECTRUM[1],
        catAxisLabelFontFace: 'Arial',
        catAxisLabelFontSize: 10,
        catAxisOrientation: 'minMax',
        //
        serAxisLabelFontFace: 'Arial',
        serAxisLabelFontSize: 10,
        serAxisLabelColor: COLORS_SPECTRUM[1],
        serAxisLineColor: COLORS_SPECTRUM[1],
        //serAxisLineColor: pptx.colors.ACCENT6,
        //
        //valAxisHidden: true,
        valAxisLabelColor: COLORS_SPECTRUM[0],
        valAxisLineColor: COLORS_SPECTRUM[0],
        valAxisLabelFontSize: 10,
    };
    slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar1);
    // TOP-RIGHT: V/col
    var optsChartBar2 = {
        x: 7.0,
        y: 0.6,
        w: 6.0,
        h: 3.0,
        chartArea: { fill: { color: 'F1F1F1', transparency: 50 } },
        chartColors: COLORS_SPECTRUM,
        barDir: 'col',
        bar3DShape: 'cylinder',
        //
        v3DRotX: 10,
        v3DRotY: 20,
        v3DRAngAx: false,
        //
        catAxisLabelColor: '0000CC',
        catAxisLabelFontFace: 'Courier',
        catAxisLabelFontSize: 12,
        //
        dataLabelColor: '000000',
        dataLabelFontFace: 'Arial',
        dataLabelFontSize: 11,
        dataLabelPosition: 'outEnd',
        dataLabelFormatCode: '#.0',
        dataLabelBkgrdColors: true,
        showValue: true,
    };
    slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar2);
    // BTM-LEFT: H/bar - TITLE and LEGEND
    var optsChartBar3 = {
        x: 0.5,
        y: 3.8,
        w: 6.0,
        h: 3.5,
        chartArea: { fill: { color: 'F1F1F1', transparency: 50 } },
        chartColors: COLORS_ACCENT,
        //
        barDir: 'col',
        bar3DShape: 'pyramid',
        barGrouping: 'stacked',
        v3DRAngAx: true,
        //
        catAxisLabelFontFace: 'Arial',
        catAxisLabelFontSize: 10,
        //
        showValue: true,
        dataLabelBkgrdColors: true,
        //
        showTitle: true,
        title: 'Sales by Region',
        titleFontFace: 'Helvetica Neue Thin',
        titleFontSize: 18,
        titleColor: COLORS_ACCENT[0],
    };
    slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar3);
    // BTM-RIGHT: V/col - TITLE and LEGEND
    var optsChartBar4 = {
        x: 7.0,
        y: 3.8,
        w: 6.0,
        h: 3.5,
        chartArea: { fill: { color: 'F1F1F1', transparency: 50 } },
        //
        chartColors: COLORS_ACCENT,
        barDir: 'col',
        bar3DShape: 'coneToMax',
        v3DRAngAx: true,
        //
        catAxisLabelColor: COLORS_ACCENT[0],
        catAxisLabelFontSize: 11,
        catAxisOrientation: 'minMax',
        //
        serAxisLabelFontFace: 'Helvetica Neue Thin',
        serAxisLabelColor: COLORS_ACCENT[0],
        //
        dataBorder: { pt: 1, color: 'F1F1F1' },
        dataLabelColor: '696969',
        dataLabelFontFace: 'Arial',
        dataLabelFontSize: 10,
        dataLabelPosition: 'ctr',
    };
    slide.addChart(pptx.charts.BAR3D, arrDataRegions, optsChartBar4);
}
//# sourceMappingURL=genSlide06.js.map