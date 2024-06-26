/**
 * PptxGenJS: Table Generation
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { DEF_FONT_SIZE, DEF_SLIDE_MARGIN_IN, EMU, LINEH_MODIFIER, ONEPT, SLIDE_OBJECT_TYPES, } from './core-enums';
import { getSmartParseNumber, inch2Emu, rgbToHex, valToPts } from './gen-utils';
/**
 * Break cell text into lines based upon table column width (e.g.: Magic Happens Here(tm))
 * @param {TableCell} cell - table cell
 * @param {number} colWidth - table column width (inches)
 * @return {TableRow[]} - cell's text objects grouped into lines
 */
function parseTextToLines(cell, colWidth, verbose) {
    var _a, _b;
    // FYI: CPL = Width / (font-size / font-constant)
    // FYI: CHAR:2.3, colWidth:10, fontSize:12 => CPL=138, (actual chars per line in PPT)=145 [14.5 CPI]
    // FYI: CHAR:2.3, colWidth:7 , fontSize:12 => CPL= 97, (actual chars per line in PPT)=100 [14.3 CPI]
    // FYI: CHAR:2.3, colWidth:9 , fontSize:16 => CPL= 96, (actual chars per line in PPT)=84  [ 9.3 CPI]
    var FOCO = 2.3 +
        (((_a = cell.options) === null || _a === void 0 ? void 0 : _a.autoPageCharWeight)
            ? cell.options.autoPageCharWeight
            : 0); // Character Constant
    var CPL = Math.floor((colWidth / ONEPT) * EMU) /
        ((((_b = cell.options) === null || _b === void 0 ? void 0 : _b.fontSize) ? cell.options.fontSize : DEF_FONT_SIZE) /
            FOCO); // Chars-Per-Line
    var parsedLines = [];
    var inputCells = [];
    var inputLines1 = [];
    var inputLines2 = [];
    /*
        if (cell.options && cell.options.autoPageCharWeight) {
            let CHR1 = 2.3 + (cell.options && cell.options.autoPageCharWeight ? cell.options.autoPageCharWeight : 0) // Character Constant
            let CPL1 = ((colWidth / ONEPT) * EMU) / ((cell.options && cell.options.fontSize ? cell.options.fontSize : DEF_FONT_SIZE) / CHR1) // Chars-Per-Line
            console.log(`cell.options.autoPageCharWeight: '${cell.options.autoPageCharWeight}' => CPL: ${CPL1}`)
            let CHR2 = 2.3 + 0
            let CPL2 = ((colWidth / ONEPT) * EMU) / ((cell.options && cell.options.fontSize ? cell.options.fontSize : DEF_FONT_SIZE) / CHR2) // Chars-Per-Line
            console.log(`cell.options.autoPageCharWeight: '0' => CPL: ${CPL2}`)
        }
    */
    /**
     * EX INPUTS: `cell.text`
     * - string....: "Account Name Column"
     * - object....: { text:"Account Name Column" }
     * - object[]..: [{ text:"Account Name", options:{ bold:true } }, { text:" Column" }]
     * - object[]..: [{ text:"Account Name", options:{ breakLine:true } }, { text:"Input" }]
     */
    /**
     * EX OUTPUTS:
     * - string....: [{ text:"Account Name Column" }]
     * - object....: [{ text:"Account Name Column" }]
     * - object[]..: [{ text:"Account Name", options:{ breakLine:true } }, { text:"Input" }]
     * - object[]..: [{ text:"Account Name", options:{ breakLine:true } }, { text:"Input" }]
     */
    // STEP 1: Ensure inputCells is an array of TableCells
    if (cell.text && cell.text.toString().trim().length === 0) {
        // Allow a single space/whitespace as cell text (user-requested feature)
        inputCells.push({ _type: SLIDE_OBJECT_TYPES.tablecell, text: ' ' });
    }
    else if (typeof cell.text === 'number' || typeof cell.text === 'string') {
        inputCells.push({
            _type: SLIDE_OBJECT_TYPES.tablecell,
            text: (cell.text || '').toString().trim(),
        });
    }
    else if (Array.isArray(cell.text)) {
        inputCells = cell.text;
    }
    if (verbose) {
        console.log('[1/4] inputCells');
        inputCells.forEach(function (cell, idx) {
            return console.log("[1/4] [".concat(idx + 1, "] cell: ").concat(JSON.stringify(cell)));
        });
        // console.log('...............................................\n\n')
    }
    // STEP 2: Group table cells into lines based on "\n" or `breakLine` prop
    /**
     * - EX: `[{ text:"Input Output" }, { text:"Extra" }]`                       == 1 line
     * - EX: `[{ text:"Input" }, { text:"Output", options:{ breakLine:true } }]` == 1 line
     * - EX: `[{ text:"Input\nOutput" }]`                                        == 2 lines
     * - EX: `[{ text:"Input", options:{ breakLine:true } }, { text:"Output" }]` == 2 lines
     */
    var newLine = [];
    inputCells.forEach(function (cell) {
        var _a;
        // (this is always true, we just constructed them above, but we need to tell typescript b/c type is still string||Cell[])
        if (typeof cell.text === 'string') {
            if (cell.text.split('\n').length > 1) {
                cell.text.split('\n').forEach(function (textLine) {
                    newLine.push({
                        _type: SLIDE_OBJECT_TYPES.tablecell,
                        text: textLine,
                        options: __assign(__assign({}, cell.options), { breakLine: true }),
                    });
                });
            }
            else {
                newLine.push({
                    _type: SLIDE_OBJECT_TYPES.tablecell,
                    text: cell.text.trim(),
                    options: cell.options,
                });
            }
            if ((_a = cell.options) === null || _a === void 0 ? void 0 : _a.breakLine) {
                if (verbose)
                    console.log("inputCells: new line > ".concat(JSON.stringify(newLine)));
                inputLines1.push(newLine);
                newLine = [];
            }
        }
        // Flush buffer
        if (newLine.length > 0) {
            inputLines1.push(newLine);
            newLine = [];
        }
    });
    if (verbose) {
        console.log("[2/4] inputLines1 (".concat(inputLines1.length, ")"));
        inputLines1.forEach(function (line, idx) {
            return console.log("[2/4] [".concat(idx + 1, "] line: ").concat(JSON.stringify(line)));
        });
        // console.log('...............................................\n\n')
    }
    // STEP 3: Tokenize every text object into words (then it's really easy to assemble lines below without having to break text, add its `options`, etc.)
    inputLines1.forEach(function (line) {
        line.forEach(function (cell) {
            var lineCells = [];
            var cellTextStr = String(cell.text); // force convert to string (compiled JS is better with this than a cast)
            var lineWords = cellTextStr.split(' ');
            lineWords.forEach(function (word, idx) {
                var cellProps = __assign({}, cell.options);
                // IMPORTANT: Handle `breakLine` prop - we cannot apply to each word - only apply to very last word!
                if (cellProps === null || cellProps === void 0 ? void 0 : cellProps.breakLine)
                    cellProps.breakLine = idx + 1 === lineWords.length;
                lineCells.push({
                    _type: SLIDE_OBJECT_TYPES.tablecell,
                    text: word + (idx + 1 < lineWords.length ? ' ' : ''),
                    options: cellProps,
                });
            });
            inputLines2.push(lineCells);
        });
    });
    if (verbose) {
        console.log("[3/4] inputLines2 (".concat(inputLines2.length, ")"));
        inputLines2.forEach(function (line) {
            return console.log("[3/4] line: ".concat(JSON.stringify(line)));
        });
        // console.log('...............................................\n\n')
    }
    // STEP 4: Group cells/words into lines based upon space consumed by word letters
    inputLines2.forEach(function (line) {
        var lineCells = [];
        var strCurrLine = '';
        line.forEach(function (word) {
            // A: create new line when horizontal space is exhausted
            if (strCurrLine.length + word.text.length > CPL) {
                // if (verbose) console.log(`STEP 4: New line added: (${strCurrLine.length} + ${word.text.length} > ${CPL})`);
                parsedLines.push(lineCells);
                lineCells = [];
                strCurrLine = '';
            }
            // B: add current word to line cells
            lineCells.push(word);
            // C: add current word to `strCurrLine` which we use to keep track of line's char length
            strCurrLine += word.text.toString();
        });
        // Flush buffer: Only create a line when there's text to avoid empty row
        if (lineCells.length > 0)
            parsedLines.push(lineCells);
    });
    if (verbose) {
        console.log("[4/4] parsedLines (".concat(parsedLines.length, ")"));
        parsedLines.forEach(function (line, idx) {
            return console.log("[4/4] [Line ".concat(idx + 1, "]:\n").concat(JSON.stringify(line)));
        });
        console.log('...............................................\n\n');
    }
    // Done:
    return parsedLines;
}
/**
 * Takes an array of table rows and breaks into an array of slides, which contain the calculated amount of table rows that fit on that slide
 * @param {TableCell[][]} tableRows - table rows
 * @param {TableToSlidesProps} tableProps - table2slides properties
 * @param {PresLayout} presLayout - presentation layout
 * @param {SlideLayout} masterSlide - master slide
 * @return {TableRowSlide[]} array of table rows
 */
export function getSlidesForTableRows(tableRows, tableProps, presLayout, masterSlide) {
    if (tableRows === void 0) { tableRows = []; }
    if (tableProps === void 0) { tableProps = {}; }
    var arrInchMargins = DEF_SLIDE_MARGIN_IN;
    var emuSlideTabW = EMU * 1;
    var emuSlideTabH = EMU * 1;
    var emuTabCurrH = 0;
    var numCols = 0;
    var tableRowSlides = [];
    var tablePropX = getSmartParseNumber(tableProps.x, 'X', presLayout);
    var tablePropY = getSmartParseNumber(tableProps.y, 'Y', presLayout);
    var tablePropW = getSmartParseNumber(tableProps.w, 'X', presLayout);
    var tablePropH = getSmartParseNumber(tableProps.h, 'Y', presLayout);
    var tableCalcW = tablePropW;
    function calcSlideTabH() {
        var emuStartY = 0;
        if (tableRowSlides.length === 0)
            emuStartY = tablePropY || inch2Emu(arrInchMargins[0]);
        if (tableRowSlides.length > 0)
            emuStartY = inch2Emu(tableProps.autoPageSlideStartY ||
                tableProps.newSlideStartY ||
                arrInchMargins[0]);
        emuSlideTabH =
            (tablePropH || presLayout.height) -
                emuStartY -
                inch2Emu(arrInchMargins[2]);
        // console.log(`| startY .......................................... = ${(emuStartY / EMU).toFixed(1)}`)
        // console.log(`| emuSlideTabH .................................... = ${(emuSlideTabH / EMU).toFixed(1)}`)
        if (tableRowSlides.length > 1) {
            // D: RULE: Use margins for starting point after the initial Slide, not `opt.y` (ISSUE #43, ISSUE #47, ISSUE #48)
            if (typeof tableProps.autoPageSlideStartY === 'number') {
                emuSlideTabH =
                    (tablePropH || presLayout.height) -
                        inch2Emu(tableProps.autoPageSlideStartY + arrInchMargins[2]);
            }
            else if (typeof tableProps.newSlideStartY === 'number') {
                // @deprecated v3.3.0
                emuSlideTabH =
                    (tablePropH || presLayout.height) -
                        inch2Emu(tableProps.newSlideStartY + arrInchMargins[2]);
            }
            else if (tablePropY) {
                emuSlideTabH =
                    (tablePropH || presLayout.height) -
                        inch2Emu((tablePropY / EMU < arrInchMargins[0]
                            ? tablePropY / EMU
                            : arrInchMargins[0]) + arrInchMargins[2]);
                // Use whichever is greater: area between margins or the table H provided (dont shrink usable area - the whole point of over-riding Y on paging is to *increase* usable space)
                if (emuSlideTabH < tablePropH)
                    emuSlideTabH = tablePropH;
            }
        }
    }
    if (tableProps.verbose) {
        console.log('[[VERBOSE MODE]]');
        console.log('|-- TABLE PROPS --------------------------------------------------------|');
        console.log("| presLayout.width ................................ = ".concat((presLayout.width / EMU).toFixed(1)));
        console.log("| presLayout.height ............................... = ".concat((presLayout.height / EMU).toFixed(1)));
        console.log("| tableProps.x .................................... = ".concat(typeof tableProps.x === 'number' ? (tableProps.x / EMU).toFixed(1) : tableProps.x));
        console.log("| tableProps.y .................................... = ".concat(typeof tableProps.y === 'number' ? (tableProps.y / EMU).toFixed(1) : tableProps.y));
        console.log("| tableProps.w .................................... = ".concat(typeof tableProps.w === 'number' ? (tableProps.w / EMU).toFixed(1) : tableProps.w));
        console.log("| tableProps.h .................................... = ".concat(typeof tableProps.h === 'number' ? (tableProps.h / EMU).toFixed(1) : tableProps.h));
        console.log("| tableProps.slideMargin .......................... = ".concat(tableProps.slideMargin ? String(tableProps.slideMargin) : ''));
        console.log("| tableProps.margin ............................... = ".concat(String(tableProps.margin)));
        console.log("| tableProps.colW ................................. = ".concat(String(tableProps.colW)));
        console.log("| tableProps.autoPageSlideStartY .................. = ".concat(tableProps.autoPageSlideStartY));
        console.log("| tableProps.autoPageCharWeight ................... = ".concat(tableProps.autoPageCharWeight));
        console.log('|-- CALCULATIONS -------------------------------------------------------|');
        console.log("| tablePropX ...................................... = ".concat(tablePropX / EMU));
        console.log("| tablePropY ...................................... = ".concat(tablePropY / EMU));
        console.log("| tablePropW ...................................... = ".concat(tablePropW / EMU));
        console.log("| tablePropH ...................................... = ".concat(tablePropH / EMU));
        console.log("| tableCalcW ...................................... = ".concat(tableCalcW / EMU));
    }
    // STEP 1: Calculate margins
    {
        // Important: Use default size as zero cell margin is causing our tables to be too large and touch bottom of slide!
        if (!tableProps.slideMargin && tableProps.slideMargin !== 0)
            tableProps.slideMargin = DEF_SLIDE_MARGIN_IN[0];
        if (masterSlide && typeof masterSlide._margin !== 'undefined') {
            if (Array.isArray(masterSlide._margin))
                arrInchMargins = masterSlide._margin;
            else if (!isNaN(Number(masterSlide._margin))) {
                arrInchMargins = [
                    Number(masterSlide._margin),
                    Number(masterSlide._margin),
                    Number(masterSlide._margin),
                    Number(masterSlide._margin),
                ];
            }
        }
        else if (tableProps.slideMargin || tableProps.slideMargin === 0) {
            if (Array.isArray(tableProps.slideMargin))
                arrInchMargins = tableProps.slideMargin;
            else if (!isNaN(tableProps.slideMargin))
                arrInchMargins = [
                    tableProps.slideMargin,
                    tableProps.slideMargin,
                    tableProps.slideMargin,
                    tableProps.slideMargin,
                ];
        }
        if (tableProps.verbose)
            console.log("| arrInchMargins .................................. = [".concat(arrInchMargins.join(', '), "]"));
    }
    // STEP 2: Calculate number of columns
    {
        // NOTE: Cells may have a colspan, so merely taking the length of the [0] (or any other) row is not
        // ....: sufficient to determine column count. Therefore, check each cell for a colspan and total cols as reqd
        var firstRow = tableRows[0] || [];
        firstRow.forEach(function (cell) {
            if (!cell)
                cell = { _type: SLIDE_OBJECT_TYPES.tablecell };
            var cellOpts = cell.options || null;
            numCols += Number((cellOpts === null || cellOpts === void 0 ? void 0 : cellOpts.colspan) ? cellOpts.colspan : 1);
        });
        if (tableProps.verbose)
            console.log("| numCols ......................................... = ".concat(numCols));
    }
    // STEP 3: Calculate width using tableProps.colW if possible
    if (!tablePropW && tableProps.colW) {
        tableCalcW = Array.isArray(tableProps.colW)
            ? tableProps.colW.reduce(function (p, n) { return p + n; }) * EMU
            : tableProps.colW * numCols || 0;
        if (tableProps.verbose)
            console.log("| tableCalcW ...................................... = ".concat(tableCalcW / EMU));
    }
    // STEP 4: Calculate usable width now that total usable space is known (`emuSlideTabW`)
    {
        emuSlideTabW =
            tableCalcW ||
                inch2Emu((tablePropX ? tablePropX / EMU : arrInchMargins[1]) +
                    arrInchMargins[3]);
        if (tableProps.verbose)
            console.log("| emuSlideTabW .................................... = ".concat((emuSlideTabW / EMU).toFixed(1)));
    }
    // STEP 5: Calculate column widths if not provided (emuSlideTabW will be used below to determine lines-per-col)
    if (!tableProps.colW || !Array.isArray(tableProps.colW)) {
        if (tableProps.colW && !isNaN(Number(tableProps.colW))) {
            var arrColW_1 = [];
            var firstRow = tableRows[0] || [];
            firstRow.forEach(function () { return arrColW_1.push(tableProps.colW); });
            tableProps.colW = [];
            arrColW_1.forEach(function (val) {
                if (Array.isArray(tableProps.colW))
                    tableProps.colW.push(val);
            });
        }
        else {
            // No column widths provided? Then distribute cols.
            tableProps.colW = [];
            for (var iCol = 0; iCol < numCols; iCol++) {
                tableProps.colW.push(emuSlideTabW / EMU / numCols);
            }
        }
    }
    // STEP 6: **MAIN** Iterate over rows, add table content, create new slides as rows overflow
    var newTableRowSlide = { rows: [] };
    tableRows.forEach(function (row, iRow) {
        // A: Row variables
        var rowCellLines = [];
        var maxCellMarTopEmu = 0;
        var maxCellMarBtmEmu = 0;
        // B: Create new row in data model, calc `maxCellMar*`
        var currTableRow = [];
        row.forEach(function (cell) {
            var _a, _b, _c, _d;
            currTableRow.push({
                _type: SLIDE_OBJECT_TYPES.tablecell,
                text: [],
                options: cell.options,
            });
            /** FUTURE: DEPRECATED:
             * - Backwards-Compat: Oops! Discovered we were still using points for cell margin before v3.8.0 (UGH!)
             * - We cant introduce a breaking change before v4.0, so...
             */
            if (cell.options.margin && cell.options.margin[0] >= 1) {
                if (((_a = cell.options) === null || _a === void 0 ? void 0 : _a.margin) &&
                    cell.options.margin[0] &&
                    valToPts(cell.options.margin[0]) > maxCellMarTopEmu)
                    maxCellMarTopEmu = valToPts(cell.options.margin[0]);
                else if ((tableProps === null || tableProps === void 0 ? void 0 : tableProps.margin) &&
                    tableProps.margin[0] &&
                    valToPts(tableProps.margin[0]) > maxCellMarTopEmu)
                    maxCellMarTopEmu = valToPts(tableProps.margin[0]);
                if (((_b = cell.options) === null || _b === void 0 ? void 0 : _b.margin) &&
                    cell.options.margin[2] &&
                    valToPts(cell.options.margin[2]) > maxCellMarBtmEmu)
                    maxCellMarBtmEmu = valToPts(cell.options.margin[2]);
                else if ((tableProps === null || tableProps === void 0 ? void 0 : tableProps.margin) &&
                    tableProps.margin[2] &&
                    valToPts(tableProps.margin[2]) > maxCellMarBtmEmu)
                    maxCellMarBtmEmu = valToPts(tableProps.margin[2]);
            }
            else {
                if (((_c = cell.options) === null || _c === void 0 ? void 0 : _c.margin) &&
                    cell.options.margin[0] &&
                    inch2Emu(cell.options.margin[0]) > maxCellMarTopEmu)
                    maxCellMarTopEmu = inch2Emu(cell.options.margin[0]);
                else if ((tableProps === null || tableProps === void 0 ? void 0 : tableProps.margin) &&
                    tableProps.margin[0] &&
                    inch2Emu(tableProps.margin[0]) > maxCellMarTopEmu)
                    maxCellMarTopEmu = inch2Emu(tableProps.margin[0]);
                if (((_d = cell.options) === null || _d === void 0 ? void 0 : _d.margin) &&
                    cell.options.margin[2] &&
                    inch2Emu(cell.options.margin[2]) > maxCellMarBtmEmu)
                    maxCellMarBtmEmu = inch2Emu(cell.options.margin[2]);
                else if ((tableProps === null || tableProps === void 0 ? void 0 : tableProps.margin) &&
                    tableProps.margin[2] &&
                    inch2Emu(tableProps.margin[2]) > maxCellMarBtmEmu)
                    maxCellMarBtmEmu = inch2Emu(tableProps.margin[2]);
            }
        });
        // C: Calc usable vertical space/table height. Set default value first, adjust below when necessary.
        calcSlideTabH();
        emuTabCurrH += maxCellMarTopEmu + maxCellMarBtmEmu; // Start row height with margins
        if (tableProps.verbose && iRow === 0)
            console.log("| SLIDE [".concat(tableRowSlides.length, "]: emuSlideTabH ...... = ").concat((emuSlideTabH / EMU).toFixed(1), " "));
        // D: --==[[ BUILD DATA SET ]]==-- (iterate over cells: split text into lines[], set `lineHeight`)
        row.forEach(function (cell, iCell) {
            var _a;
            var newCell = {
                _type: SLIDE_OBJECT_TYPES.tablecell,
                _lines: null,
                _lineHeight: inch2Emu(((((_a = cell.options) === null || _a === void 0 ? void 0 : _a.fontSize)
                    ? cell.options.fontSize
                    : tableProps.fontSize
                        ? tableProps.fontSize
                        : DEF_FONT_SIZE) *
                    (LINEH_MODIFIER +
                        (tableProps.autoPageLineWeight
                            ? tableProps.autoPageLineWeight
                            : 0))) /
                    100),
                text: [],
                options: cell.options,
            };
            // E-1: Exempt cells with `rowspan` from increasing lineHeight (or we could create a new slide when unecessary!)
            if (newCell.options.rowspan)
                newCell._lineHeight = 0;
            // E-2: The parseTextToLines method uses `autoPageCharWeight`, so inherit from table options
            newCell.options.autoPageCharWeight = tableProps.autoPageCharWeight
                ? tableProps.autoPageCharWeight
                : null;
            // E-3: **MAIN** Parse cell contents into lines based upon col width, font, etc
            var totalColW = tableProps.colW[iCell];
            if (cell.options.colspan && Array.isArray(tableProps.colW)) {
                totalColW = tableProps.colW
                    .filter(function (_cell, idx) {
                    return idx >= iCell && idx < idx + cell.options.colspan;
                })
                    .reduce(function (prev, curr) { return prev + curr; });
            }
            // E-4: Create lines based upon available column width
            newCell._lines = parseTextToLines(cell, totalColW, false);
            // E-5: Add cell to array
            rowCellLines.push(newCell);
        });
        /** E: --==[[ PAGE DATA SET ]]==--
         * Add text one-line-a-time to this row's cells until: lines are exhausted OR table height limit is hit
         *
         * Design:
         * - Building cells L-to-R/loop style wont work as one could be 100 lines and another 1 line
         * - Therefore, build the whole row, one-line-at-a-time, across each table columns
         * - Then, when the vertical size limit is hit is by any of the cells, make a new slide and continue adding any remaining lines
         *
         * Implementation:
         * - `rowCellLines` is an array of cells, one for each column in the table, with each cell containing an array of lines
         *
         * Sample Data:
         * - `rowCellLines` ..: [ TableCell, TableCell, TableCell ]
         * - `TableCell` .....: { _type: 'tablecell', _lines: TableCell[], _lineHeight: 10 }
         * - `_lines` ........: [ {_type: 'tablecell', text: 'cell-1,line-1', options: {…}}, {_type: 'tablecell', text: 'cell-1,line-2', options: {…}} }
         * - `_lines` is TableCell[] (the 1-N words in the line)
         * {
         *    _lines: [{ text:'cell-1,line-1' }, { text:'cell-1,line-2' }],                                                     // TOTAL-CELL-HEIGHT = 2
         *    _lines: [{ text:'cell-2,line-1' }, { text:'cell-2,line-2' }],                                                     // TOTAL-CELL-HEIGHT = 2
         *    _lines: [{ text:'cell-3,line-1' }, { text:'cell-3,line-2' }, { text:'cell-3,line-3' }, { text:'cell-3,line-4' }], // TOTAL-CELL-HEIGHT = 4
         * }
         *
         * Example: 2 rows, with the firstrow overflowing onto a new slide
         * SLIDE 1:
         *  |--------|--------|--------|--------|
         *  | line-1 | line-1 | line-1 | line-1 |
         *  |        |        | line-2 |        |
         *  |        |        | line-3 |        |
         *  |--------|--------|--------|--------|
         *
         * SLIDE 2:
         *  |--------|--------|--------|--------|
         *  |        |        | line-4 |        |
         *  |--------|--------|--------|--------|
         *  | line-1 | line-1 | line-1 | line-1 |
         *  |--------|--------|--------|--------|
         */
        if (tableProps.verbose)
            console.log("\n| SLIDE [".concat(tableRowSlides.length, "]: ROW [").concat(iRow, "]: START..."));
        var currCellIdx = 0;
        var emuLineMaxH = 0;
        var isDone = false;
        while (!isDone) {
            var srcCell = rowCellLines[currCellIdx];
            var tgtCell = currTableRow[currCellIdx]; // NOTE: may be redefined below (a new row may be created, thus changing this value)
            // 1: calc emuLineMaxH
            rowCellLines.forEach(function (cell) {
                if (cell._lineHeight >= emuLineMaxH)
                    emuLineMaxH = cell._lineHeight;
            });
            // 2: create a new slide if there is insufficient room for the current row
            if (emuTabCurrH + emuLineMaxH > emuSlideTabH) {
                if (tableProps.verbose) {
                    console.log('\n|-----------------------------------------------------------------------|');
                    // prettier-ignore
                    console.log("|-- NEW SLIDE CREATED (currTabH+currLineH > maxH) => ".concat((emuTabCurrH / EMU).toFixed(2), " + ").concat((srcCell._lineHeight / EMU).toFixed(2), " > ").concat(emuSlideTabH / EMU));
                    console.log('|-----------------------------------------------------------------------|\n\n');
                }
                // A: add current row slide or it will be lost (only if it has rows and text)
                if (currTableRow.length > 0 &&
                    currTableRow
                        .map(function (cell) { return cell.text.length; })
                        .reduce(function (p, n) { return p + n; }) > 0)
                    newTableRowSlide.rows.push(currTableRow);
                // B: add current slide to Slides array
                tableRowSlides.push(newTableRowSlide);
                // C: reset working/curr slide to hold rows as they're created
                var newRows = [];
                newTableRowSlide = { rows: newRows };
                // D: reset working/curr row
                currTableRow = [];
                row.forEach(function (cell) {
                    return currTableRow.push({
                        _type: SLIDE_OBJECT_TYPES.tablecell,
                        text: [],
                        options: cell.options,
                    });
                });
                // E: Calc usable vertical space/table height now as we may still be in the same row and code above ("C: Calc usable vertical space/table height.") calc may now be invalid
                calcSlideTabH();
                emuTabCurrH += maxCellMarTopEmu + maxCellMarBtmEmu; // Start row height with margins
                if (tableProps.verbose)
                    console.log("| SLIDE [".concat(tableRowSlides.length, "]: emuSlideTabH ...... = ").concat((emuSlideTabH / EMU).toFixed(1), " "));
                // F: reset current table height for this new Slide
                emuTabCurrH = 0;
                // G: handle repeat headers option /or/ Add new empty row to continue current lines into
                if ((tableProps.addHeaderToEach ||
                    tableProps.autoPageRepeatHeader) &&
                    tableProps._arrObjTabHeadRows) {
                    tableProps._arrObjTabHeadRows.forEach(function (row) {
                        var newHeadRow = [];
                        var maxLineHeight = 0;
                        row.forEach(function (cell) {
                            newHeadRow.push(cell);
                            if (cell._lineHeight > maxLineHeight)
                                maxLineHeight = cell._lineHeight;
                        });
                        newTableRowSlide.rows.push(newHeadRow);
                        emuTabCurrH += maxLineHeight; // TODO: what about margins? dont we need to include cell margin in line height?
                    });
                }
                // WIP: NEW: TEST THIS!!
                tgtCell = currTableRow[currCellIdx];
            }
            // 3: set array of words that comprise this line
            var currLine = srcCell._lines.shift();
            // 4: create new line by adding all words from curr line (or add empty if there are no words to avoid "needs repair" issue triggered when cells have null content)
            if (Array.isArray(tgtCell.text)) {
                if (currLine)
                    tgtCell.text = tgtCell.text.concat(currLine);
                else if (tgtCell.text.length === 0)
                    tgtCell.text = tgtCell.text.concat({
                        _type: SLIDE_OBJECT_TYPES.tablecell,
                        text: '',
                    });
                // IMPORTANT: ^^^ add empty if there are no words to avoid "needs repair" issue triggered when cells have null content
            }
            // 5: increase table height by the curr line height (if we're on the last column)
            if (currCellIdx === rowCellLines.length - 1)
                emuTabCurrH += emuLineMaxH;
            // 6: advance column/cell index (or circle back to first one to continue adding lines)
            currCellIdx =
                currCellIdx < rowCellLines.length - 1 ? currCellIdx + 1 : 0;
            // 7: done?
            var brent = rowCellLines
                .map(function (cell) { return cell._lines.length; })
                .reduce(function (prev, next) { return prev + next; });
            if (brent === 0)
                isDone = true;
        }
        // F: Flush/capture row buffer before it resets at the top of this loop
        if (currTableRow.length > 0)
            newTableRowSlide.rows.push(currTableRow);
        if (tableProps.verbose) {
            console.log("- SLIDE [".concat(tableRowSlides.length, "]: ROW [").concat(iRow, "]: ...COMPLETE ...... emuTabCurrH = ").concat((emuTabCurrH / EMU).toFixed(2), " ( emuSlideTabH = ").concat((emuSlideTabH / EMU).toFixed(2), " )"));
        }
    });
    // STEP 7: Flush buffer / add final slide
    tableRowSlides.push(newTableRowSlide);
    if (tableProps.verbose) {
        console.log('\n|================================================|');
        console.log("| FINAL: tableRowSlides.length = ".concat(tableRowSlides.length));
        tableRowSlides.forEach(function (slide) { return console.log(slide); });
        console.log('|================================================|\n\n');
    }
    // LAST:
    return tableRowSlides;
}
/**
 * Reproduces an HTML table as a PowerPoint table - including column widths, style, etc. - creates 1 or more slides as needed
 * @param {PptxGenJS} pptx - pptxgenjs instance
 * @param {string} tabEleId - HTMLElementID of the table
 * @param {ITableToSlidesOpts} options - array of options (e.g.: tabsize)
 * @param {SlideLayout} masterSlide - masterSlide
 */
export function genTableToSlides(pptx, tabEleId, options, masterSlide) {
    if (options === void 0) { options = {}; }
    var opts = options || {};
    opts.slideMargin =
        opts.slideMargin || opts.slideMargin === 0 ? opts.slideMargin : 0.5;
    var emuSlideTabW = opts.w || pptx.presLayout.width;
    var arrObjTabHeadRows = [];
    var arrObjTabBodyRows = [];
    var arrObjTabFootRows = [];
    var arrColW = [];
    var arrTabColW = [];
    var arrInchMargins = [0.5, 0.5, 0.5, 0.5]; // TRBL-style
    var intTabW = 0;
    // REALITY-CHECK:
    if (!document.getElementById(tabEleId))
        throw new Error('tableToSlides: Table ID "' + tabEleId + '" does not exist!');
    // STEP 1: Set margins
    if (masterSlide === null || masterSlide === void 0 ? void 0 : masterSlide._margin) {
        if (Array.isArray(masterSlide._margin))
            arrInchMargins = masterSlide._margin;
        else if (!isNaN(masterSlide._margin))
            arrInchMargins = [
                masterSlide._margin,
                masterSlide._margin,
                masterSlide._margin,
                masterSlide._margin,
            ];
        opts.slideMargin = arrInchMargins;
    }
    else if (opts === null || opts === void 0 ? void 0 : opts.slideMargin) {
        if (Array.isArray(opts.slideMargin))
            arrInchMargins = opts.slideMargin;
        else if (!isNaN(opts.slideMargin))
            arrInchMargins = [
                opts.slideMargin,
                opts.slideMargin,
                opts.slideMargin,
                opts.slideMargin,
            ];
    }
    emuSlideTabW =
        (opts.w ? inch2Emu(opts.w) : pptx.presLayout.width) -
            inch2Emu(arrInchMargins[1] + arrInchMargins[3]);
    if (opts.verbose) {
        console.log('[[VERBOSE MODE]]');
        console.log('|-- `tableToSlides` ----------------------------------------------------|');
        console.log("| tableProps.h .................................... = ".concat(opts.h));
        console.log("| tableProps.w .................................... = ".concat(opts.w));
        console.log("| pptx.presLayout.width ........................... = ".concat((pptx.presLayout.width / EMU).toFixed(1)));
        console.log("| pptx.presLayout.height .......................... = ".concat((pptx.presLayout.height / EMU).toFixed(1)));
        console.log("| emuSlideTabW .................................... = ".concat((emuSlideTabW / EMU).toFixed(1)));
    }
    // STEP 2: Grab table col widths - just find the first availble row, either thead/tbody/tfoot, others may have colspans, who cares, we only need col widths from 1
    var firstRowCells = document.querySelectorAll("#".concat(tabEleId, " tr:first-child th"));
    if (firstRowCells.length === 0)
        firstRowCells = document.querySelectorAll("#".concat(tabEleId, " tr:first-child td"));
    firstRowCells.forEach(function (cell) {
        if (cell.getAttribute('colspan')) {
            // Guesstimate (divide evenly) col widths
            // NOTE: both j$query and vanilla selectors return {0} when table is not visible)
            for (var idxc = 0; idxc < Number(cell.getAttribute('colspan')); idxc++) {
                arrTabColW.push(Math.round(cell.offsetWidth / Number(cell.getAttribute('colspan'))));
            }
        }
        else {
            arrTabColW.push(cell.offsetWidth);
        }
    });
    arrTabColW.forEach(function (colW) {
        intTabW += colW;
    });
    // STEP 3: Calc/Set column widths by using same column width percent from HTML table
    arrTabColW.forEach(function (colW, idxW) {
        var intCalcWidth = Number(((Number(emuSlideTabW) * ((colW / intTabW) * 100)) /
            100 /
            EMU).toFixed(2));
        var intMinWidth = 0;
        var colSelectorMin = document.querySelector("#".concat(tabEleId, " thead tr:first-child th:nth-child(").concat(idxW + 1, ")"));
        if (colSelectorMin)
            intMinWidth = Number(colSelectorMin.getAttribute('data-pptx-min-width'));
        var intSetWidth = 0;
        var colSelectorSet = document.querySelector("#".concat(tabEleId, " thead tr:first-child th:nth-child(").concat(idxW + 1, ")"));
        if (colSelectorSet)
            intMinWidth = Number(colSelectorSet.getAttribute('data-pptx-width'));
        arrColW.push(intSetWidth ||
            (intMinWidth > intCalcWidth ? intMinWidth : intCalcWidth));
    });
    if (opts.verbose) {
        console.log("| arrColW ......................................... = [".concat(arrColW.join(', '), "]"));
    }
    // STEP 4: Iterate over each table element and create data arrays (text and opts)
    // NOTE: We create 3 arrays instead of one so we can loop over body then show header/footer rows on first and last page
    var tableParts = ['thead', 'tbody', 'tfoot'];
    tableParts.forEach(function (part) {
        document
            .querySelectorAll("#".concat(tabEleId, " ").concat(part, " tr"))
            .forEach(function (row) {
            var arrObjTabCells = [];
            Array.from(row.cells).forEach(function (cell) {
                // A: Get RGB text/bkgd colors
                var arrRGB1 = window
                    .getComputedStyle(cell)
                    .getPropertyValue('color')
                    .replace(/\s+/gi, '')
                    .replace('rgba(', '')
                    .replace('rgb(', '')
                    .replace(')', '')
                    .split(',');
                var arrRGB2 = window
                    .getComputedStyle(cell)
                    .getPropertyValue('background-color')
                    .replace(/\s+/gi, '')
                    .replace('rgba(', '')
                    .replace('rgb(', '')
                    .replace(')', '')
                    .split(',');
                if (
                // NOTE: (ISSUE#57): Default for unstyled tables is black bkgd, so use white instead
                window
                    .getComputedStyle(cell)
                    .getPropertyValue('background-color') ===
                    'rgba(0, 0, 0, 0)' ||
                    window
                        .getComputedStyle(cell)
                        .getPropertyValue('transparent')) {
                    arrRGB2 = ['255', '255', '255'];
                }
                // B: Create option object
                var cellOpts = {
                    align: null,
                    bold: !!(window
                        .getComputedStyle(cell)
                        .getPropertyValue('font-weight') === 'bold' ||
                        Number(window
                            .getComputedStyle(cell)
                            .getPropertyValue('font-weight')) >= 500),
                    border: null,
                    color: rgbToHex(Number(arrRGB1[0]), Number(arrRGB1[1]), Number(arrRGB1[2])),
                    fill: {
                        color: rgbToHex(Number(arrRGB2[0]), Number(arrRGB2[1]), Number(arrRGB2[2])),
                    },
                    fontFace: (window
                        .getComputedStyle(cell)
                        .getPropertyValue('font-family') || '')
                        .split(',')[0]
                        .replace(/"/g, '')
                        .replace('inherit', '')
                        .replace('initial', '') || null,
                    fontSize: Number(window
                        .getComputedStyle(cell)
                        .getPropertyValue('font-size')
                        .replace(/[a-z]/gi, '')),
                    margin: null,
                    colspan: Number(cell.getAttribute('colspan')) || null,
                    rowspan: Number(cell.getAttribute('rowspan')) || null,
                    valign: null,
                };
                if (['left', 'center', 'right', 'start', 'end'].includes(window
                    .getComputedStyle(cell)
                    .getPropertyValue('text-align'))) {
                    var align = window
                        .getComputedStyle(cell)
                        .getPropertyValue('text-align')
                        .replace('start', 'left')
                        .replace('end', 'right');
                    cellOpts.align =
                        align === 'center'
                            ? 'center'
                            : align === 'left'
                                ? 'left'
                                : align === 'right'
                                    ? 'right'
                                    : null;
                }
                if (['top', 'middle', 'bottom'].includes(window
                    .getComputedStyle(cell)
                    .getPropertyValue('vertical-align'))) {
                    var valign = window
                        .getComputedStyle(cell)
                        .getPropertyValue('vertical-align');
                    cellOpts.valign =
                        valign === 'top'
                            ? 'top'
                            : valign === 'middle'
                                ? 'middle'
                                : valign === 'bottom'
                                    ? 'bottom'
                                    : null;
                }
                // C: Add padding [margin] (if any)
                // NOTE: Margins translate: px->pt 1:1 (e.g.: a 20px padded cell looks the same in PPTX as 20pt Text Inset/Padding)
                if (window
                    .getComputedStyle(cell)
                    .getPropertyValue('padding-left')) {
                    cellOpts.margin = [0, 0, 0, 0];
                    var sidesPad = [
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',
                    ];
                    sidesPad.forEach(function (val, idxs) {
                        cellOpts.margin[idxs] = Math.round(Number(window
                            .getComputedStyle(cell)
                            .getPropertyValue(val)
                            .replace(/\D/gi, '')));
                    });
                }
                // D: Add border (if any)
                if (window
                    .getComputedStyle(cell)
                    .getPropertyValue('border-top-width') ||
                    window
                        .getComputedStyle(cell)
                        .getPropertyValue('border-right-width') ||
                    window
                        .getComputedStyle(cell)
                        .getPropertyValue('border-bottom-width') ||
                    window
                        .getComputedStyle(cell)
                        .getPropertyValue('border-left-width')) {
                    cellOpts.border = [null, null, null, null];
                    var sidesBor = ['top', 'right', 'bottom', 'left'];
                    sidesBor.forEach(function (val, idxb) {
                        var intBorderW = Math.round(Number(window
                            .getComputedStyle(cell)
                            .getPropertyValue('border-' + val + '-width')
                            .replace('px', '')));
                        var arrRGB = [];
                        arrRGB = window
                            .getComputedStyle(cell)
                            .getPropertyValue('border-' + val + '-color')
                            .replace(/\s+/gi, '')
                            .replace('rgba(', '')
                            .replace('rgb(', '')
                            .replace(')', '')
                            .split(',');
                        var strBorderC = rgbToHex(Number(arrRGB[0]), Number(arrRGB[1]), Number(arrRGB[2]));
                        cellOpts.border[idxb] = {
                            pt: intBorderW,
                            color: strBorderC,
                        };
                    });
                }
                // LAST: Add cell
                arrObjTabCells.push({
                    _type: SLIDE_OBJECT_TYPES.tablecell,
                    text: cell.innerText, // `innerText` returns <br> as "\n", so linebreak etc. work later!
                    options: cellOpts,
                });
            });
            switch (part) {
                case 'thead':
                    arrObjTabHeadRows.push(arrObjTabCells);
                    break;
                case 'tbody':
                    arrObjTabBodyRows.push(arrObjTabCells);
                    break;
                case 'tfoot':
                    arrObjTabFootRows.push(arrObjTabCells);
                    break;
                default:
                    console.log("table parsing: unexpected table part: ".concat(part));
                    break;
            }
        });
    });
    // STEP 5: Break table into Slides as needed
    // Pass head-rows as there is an option to add to each table and the parse func needs this data to fulfill that option
    opts._arrObjTabHeadRows = arrObjTabHeadRows || null;
    opts.colW = arrColW;
    getSlidesForTableRows(__spreadArray(__spreadArray(__spreadArray([], arrObjTabHeadRows, true), arrObjTabBodyRows, true), arrObjTabFootRows, true), opts, pptx.presLayout, masterSlide).forEach(function (slide, idxTr) {
        // A: Create new Slide
        var newSlide = pptx.addSlide({
            masterName: opts.masterSlideName || null,
        });
        // B: DESIGN: Reset `y` to startY or margin after first Slide (ISSUE#43, ISSUE#47, ISSUE#48)
        if (idxTr === 0)
            opts.y = opts.y || arrInchMargins[0];
        if (idxTr > 0)
            opts.y =
                opts.autoPageSlideStartY ||
                    opts.newSlideStartY ||
                    arrInchMargins[0];
        if (opts.verbose)
            console.log("| opts.autoPageSlideStartY: ".concat(opts.autoPageSlideStartY, " / arrInchMargins[0]: ").concat(arrInchMargins[0], " => opts.y = ").concat(opts.y));
        // C: Add table to Slide
        newSlide.addTable(slide.rows, {
            x: opts.x || arrInchMargins[3],
            y: opts.y,
            w: Number(emuSlideTabW) / EMU,
            colW: arrColW,
            autoPage: false,
        });
        // D: Add any additional objects
        if (opts.addImage) {
            opts.addImage.options = opts.addImage.options || {};
            if (!opts.addImage.image ||
                (!opts.addImage.image.path && !opts.addImage.image.data)) {
                console.warn('Warning: tableToSlides.addImage requires either `path` or `data`');
            }
            else {
                newSlide.addImage({
                    path: opts.addImage.image.path,
                    data: opts.addImage.image.data,
                    x: opts.addImage.options.x,
                    y: opts.addImage.options.y,
                    w: opts.addImage.options.w,
                    h: opts.addImage.options.h,
                });
            }
        }
        if (opts.addShape)
            newSlide.addShape(opts.addShape.shapeName, opts.addShape.options || {});
        if (opts.addTable)
            newSlide.addTable(opts.addTable.rows, opts.addTable.options || {});
        if (opts.addText)
            newSlide.addText(opts.addText.text, opts.addText.options || {});
    });
}
//# sourceMappingURL=gen-tables.js.map