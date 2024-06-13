import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'jszip';
import '@repo/demo-modules/modules/demos';

{
	/* <script
			src="/apps/browser-demo/libs/jszip.min.js"
			type="module"
		></script>
		<script src="/apps/browser-demo/pptxgen.min.js" type="module"></script>
		<script
			src="/apps/browser-demo/demo-modules/demos.js"
			type="module"
		></script>
		<!-- LOCAL TESTING: */
}

import {
	buildDataTable,
	doAppStart,
	execGenSlidesFunc,
	runAllDemos,
	table2slides1,
	table2slides2,
	table2slidesDemoForTab,
} from './browser.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

$('#btnRunAllDemos').click(() => runAllDemos());
//
$('#btnGenFunc_Chart').click(() => execGenSlidesFunc('Chart'));
$('#btnGenFunc_Image').click(() => execGenSlidesFunc('Image'));
$('#btnGenFunc_Media').click(() => execGenSlidesFunc('Media'));
$('#btnGenFunc_Shape').click(() => execGenSlidesFunc('Shape'));
$('#btnGenFunc_Text').click(() => execGenSlidesFunc('Text'));
$('#btnGenFunc_Table').click(() => execGenSlidesFunc('Table'));
$('#btnGenFunc_Master').click(() => execGenSlidesFunc('Master'));
//
$('#numTab2SlideRows').change(() => buildDataTable());
$('#table2slides1').click(() => table2slides1());
$('#table2slides2').click(() => table2slides2(false));
$('#table2slides3').click(() => table2slides2(true));
$('#tab2slides_tabNoStyle').click(() =>
	table2slidesDemoForTab('tabNoStyle', {
		fill: { color: 'f1f1f1' },
	})
);
$('#tab2slides_tabInheritStyle').click(() =>
	table2slidesDemoForTab('tabInheritStyle', {
		fill: { color: 'f1f1f1' },
	})
);
$('#tab2slides_tabColspan').click(() => table2slidesDemoForTab('tabColspan'));
$('#tab2slides_tabRowspan').click(() => table2slidesDemoForTab('tabRowspan'));
$('#tab2slides_tabRowColspan').click(() =>
	table2slidesDemoForTab('tabRowColspan')
);
$('#tab2slides_tabLotsOfLines').click(() =>
	table2slidesDemoForTab('tabLotsOfLines', { verbose: false })
);
$('#tab2slides_tabLargeCellText').click(() =>
	table2slidesDemoForTab('tabLargeCellText', { verbose: false })
);

$(document).ready(() => {
	doAppStart();
});
