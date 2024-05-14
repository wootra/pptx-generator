import React from 'react';
import $ from 'jquery';

const App = () => {
    return (
        <>
            <div
                id='modalBusy'
                className='modal fade'
                tabIndex={-1}
                role='dialog'
                data-backdrop='static'
            >
                <div
                    className='modal-dialog modal-dialog-centered'
                    role='document'
                >
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <h3 className='text-primary'>Please Wait</h3>
                            <div className='text-dark'>
                                Creating and saving presentation...
                            </div>
                        </div>
                        <div className='modal-footer bg-light'>
                            <div
                                className='progress w-100'
                                style={{ height: '2rem' }}
                            >
                                <div
                                    className='progress-bar progress-bar-striped progress-bar-animated w-100'
                                    role='progressbar'
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a
                        className='navbar-brand'
                        href='https://gitbrent.github.io/PptxGenJS/'
                    >
                        <img
                            src='images/favicon.png'
                            width={30}
                            height={30}
                            className='d-inline-block align-top me-2'
                            alt=''
                        />
                        PptxGenJS
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-target='#navbarColor01'
                        aria-controls='navbarColor01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarColor01'
                    >
                        <ul className='navbar-nav me-auto'>
                            <li className='nav-item active'>
                                <a
                                    className='nav-link'
                                    href='https://gitbrent.github.io/PptxGenJS/demo/browser/index.html'
                                >
                                    Demo Home{' '}
                                    <span className='sr-only'>(current)</span>
                                </a>
                            </li>
                        </ul>
                        <form className='form-inline my-2 my-lg-0'>
                            <button
                                type='button'
                                className='btn btn-outline-primary mx-2 my-2 my-sm-0'
                                onClick={() => {
                                    window.open(
                                        'https://github.com/gitbrent/PptxGenJS/releases'
                                    );
                                }}
                            >
                                Download
                            </button>
                            <button
                                type='button'
                                className='btn btn-outline-primary mx-2 my-2 my-sm-0'
                                onClick={() => {
                                    window.open(
                                        'https://github.com/gitbrent/PptxGenJS'
                                    );
                                }}
                            >
                                GitHub Project
                            </button>
                            <button
                                type='button'
                                className='btn btn-outline-primary mx-2 my-2 my-sm-0'
                                onClick={() => {
                                    window.open(
                                        'https://gitbrent.github.io/PptxGenJS/docs/installation/'
                                    );
                                }}
                            >
                                API Documentation
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='container my-4'>
                <header className='mb-4'>
                    <div className='row align-items-middle'>
                        <div className='col'>
                            <h2 className='text-primary mb-0'>
                                PptxGenJS Feature Demos
                            </h2>
                        </div>
                        <div className='col-auto'>
                            <button
                                id='btnRunAllDemos'
                                type='button'
                                className='btn btn-lg btn-success px-5'
                            >
                                Run All Demos
                            </button>
                        </div>
                    </div>
                </header>
                <ul
                    className='nav nav-pills nav-justified text-nowrap'
                    id='myTab'
                    role='tablist'
                >
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase active'
                            id='nav-introduction'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-introduction'
                            type='button'
                            role='tab'
                            aria-controls='itab-ntroduction'
                            aria-selected='true'
                            onClick={() => {
                                location.href = '#introduction';
                            }}
                        >
                            Introduction
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-html2pptx'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-html2pptx'
                            type='button'
                            role='tab'
                            aria-controls='tab-html2pptx'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#html2pptx';
                            }}
                        >
                            HTML to PPTX
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-charts'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-charts'
                            type='button'
                            role='tab'
                            aria-controls='tab-charts'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#charts';
                            }}
                        >
                            Charts
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-images'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-images'
                            type='button'
                            role='tab'
                            aria-controls='tab-images'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#images';
                            }}
                        >
                            Images &amp; Media
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-shapes'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-shapes'
                            type='button'
                            role='tab'
                            aria-controls='tab-shapes'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#shapes';
                            }}
                        >
                            Shapes &amp; Text
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-tables'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-tables'
                            type='button'
                            role='tab'
                            aria-controls='tab-tables'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#tables';
                            }}
                        >
                            Tables
                        </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                        <button
                            className='nav-link text-uppercase'
                            id='nav-templates'
                            data-bs-toggle='tab'
                            data-bs-target='#tab-templates'
                            type='button'
                            role='tab'
                            aria-controls='tab-templates'
                            aria-selected='false'
                            onClick={() => {
                                location.href = '#templates';
                            }}
                        >
                            Templates
                        </button>
                    </li>
                </ul>
                <main className='tab-content mb-4'>
                    <div
                        className='tab-pane p-4 active'
                        id='tab-introduction'
                        role='tabpanel'
                        aria-labelledby='nav-introduction'
                    >
                        <section className='bg-gray-100 border px-4 py-3 mb-4'>
                            <h4 className='text-primary'>
                                Library Information
                            </h4>
                            <div className='row g-4'>
                                <div className='col'>
                                    <label
                                        id='infoLbl_PptxVers'
                                        className='form-label'
                                    >
                                        Library Version
                                    </label>
                                    <input
                                        id='infoBox_PptxVers'
                                        className='form-control form-control-sm'
                                        disabled={false}
                                        defaultValue='-'
                                    />
                                    <div className='form-text'>
                                        pptx.version
                                    </div>
                                </div>
                                <div className='col'>
                                    <label
                                        id='infoLbl_ChartType'
                                        className='form-label'
                                    >
                                        Chart Types
                                    </label>
                                    <input
                                        id='infoBox_ChartType'
                                        className='form-control form-control-sm'
                                        disabled={false}
                                        defaultValue='-'
                                    />
                                    <div className='form-text'>
                                        Object.keys(pptx.ChartType)
                                    </div>
                                </div>
                                <div className='col'>
                                    <label
                                        id='infoLbl_ShapeType'
                                        className='form-label'
                                    >
                                        Shape Types
                                    </label>
                                    <input
                                        id='infoBox_ShapeType'
                                        className='form-control form-control-sm'
                                        disabled={false}
                                        defaultValue='-'
                                    />
                                    <div className='form-text'>
                                        Object.keys(pptx.ShapeType)
                                    </div>
                                </div>
                                <div className='col'>
                                    <label
                                        id='infoLbl_SchemeColor'
                                        className='form-label'
                                    >
                                        Scheme Colors
                                    </label>
                                    <input
                                        id='infoBox_SchemeColor'
                                        className='form-control form-control-sm'
                                        disabled={false}
                                        defaultValue='-'
                                    />
                                    <div className='form-text'>
                                        Object.keys(pptx.SchemeColor)
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            id='basicPres'
                            className='bg-gray-100 border p-3'
                        >
                            <h4 className='text-primary mb-3'>
                                Basic Presentation
                            </h4>
                            <div className='text-center'>
                                <pre className='mb-3'>
                                    <code
                                        id='demo-basic'
                                        className='language-javascript'
                                    />
                                </pre>
                                <button
                                    type='button'
                                    className='btn btn-success w-25'
                                    onClick={() => {
                                        eval($('#demo-basic').text());
                                    }}
                                >
                                    Run Basic Demo
                                </button>
                            </div>
                        </section>
                        <section
                            id='codeSandbox'
                            className='bg-gray-100 border p-4 d-none'
                        >
                            <div className='alert alert-info mb-4' role='alert'>
                                <h5>Editable Code</h5>
                                <div>
                                    Use the area below to easily try out various
                                    library features.
                                </div>
                            </div>
                            <pre className='mb-3'>
                                <code
                                    id='demo-sandbox'
                                    className='language-javascript'
                                    contentEditable='true'
                                    spellCheck='false'
                                />
                            </pre>
                            <button
                                type='button'
                                className='btn btn-success w-50'
                                onClick={() => {
                                    eval($('#demo-sandbox').text());
                                }}
                            >
                                Execute Sandbox Code
                            </button>
                        </section>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-html2pptx'
                        role='tabpanel'
                        aria-labelledby='nav-html2pptx'
                    >
                        <h4 className='text-primary mb-3'>
                            HTML to PowerPoint
                        </h4>
                        <div className='accordion' id='accorHtml2Pptx'>
                            <div
                                className='accordion-item'
                                data-desc='html2PptxColl01'
                            >
                                <h2
                                    id='html2PptxHead01'
                                    className='accordion-header'
                                >
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#html2PptxColl01'
                                        aria-expanded='false'
                                        aria-controls='html2PptxColl01'
                                    >
                                        Docs: About, Usage, and Tips
                                    </button>
                                </h2>
                                <div
                                    id='html2PptxColl01'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='html2PptxHead01'
                                    data-bs-parent='#accorHtml2Pptx'
                                >
                                    <div className='accordion-body'>
                                        <strong>About</strong>
                                        <ul>
                                            <li>
                                                Reproduces an HTML table into 1
                                                or more slides (auto-paging)
                                                using the syntax{' '}
                                                <code className='language-javascript p-1'>
                                                    pptx.tableToSlides('tableId');
                                                </code>
                                            </li>
                                            <li>
                                                View the{' '}
                                                <a
                                                    href='https://gitbrent.github.io/PptxGenJS/docs/html-to-powerpoint'
                                                    target='_blank'
                                                >
                                                    HTML to PowerPoint
                                                    documentation
                                                </a>{' '}
                                                for full details and examples
                                            </li>
                                        </ul>
                                        <strong>Usage</strong>
                                        <ul>
                                            <li>
                                                Supported cell styling includes
                                                background colors, borders,
                                                fonts, padding, etc.
                                            </li>
                                            <li>
                                                Slide margin settings can be set
                                                using options, or by providing a
                                                Master Slide definition
                                            </li>
                                        </ul>
                                        <strong>Tips</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                If you need to modify your table
                                                before creating the
                                                Presentation, use jQuery to
                                                clone() it and do the
                                                modifications on that table
                                            </li>
                                            <li>
                                                CSS styles are only supported
                                                down to the cell level
                                                (word-level formatting is not
                                                supported)
                                            </li>
                                            <li>
                                                Nested tables are not supported
                                                in PowerPoint, therefore they
                                                cannot be reproduced (only the
                                                text will be included)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='accordion-item'
                                data-desc='html2PptxColl02'
                            >
                                <h2
                                    id='html2PptxHead02'
                                    className='accordion-header'
                                >
                                    <button
                                        className='accordion-button'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#html2PptxColl02'
                                        aria-expanded='true'
                                        aria-controls='html2PptxColl02'
                                    >
                                        Demo: Dynamic Table Options
                                    </button>
                                </h2>
                                <div
                                    id='html2PptxColl02'
                                    className='accordion-collapse collapse show p-4'
                                    aria-labelledby='html2PptxHead02'
                                    data-bs-parent='#accorHtml2Pptx'
                                >
                                    <section className='bg-gray-100 border p-3 mb-4'>
                                        <div className='row mb-3'>
                                            <div className='col'>
                                                <label
                                                    htmlFor='numTab2SlideRows'
                                                    className='form-label'
                                                >
                                                    Total Rows
                                                </label>
                                                <input
                                                    id='numTab2SlideRows'
                                                    className='form-control'
                                                    type='number'
                                                    min={1}
                                                    max={18}
                                                    defaultValue={6}
                                                />
                                                <div className='form-text'>
                                                    sets table rows
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label
                                                    htmlFor='numTab2Padding'
                                                    className='form-label'
                                                >
                                                    Padding (px/pt)
                                                </label>
                                                <input
                                                    id='numTab2Padding'
                                                    className='form-control'
                                                    type='number'
                                                    min={0}
                                                    max={25}
                                                    defaultValue={10}
                                                    onChange={() => {
                                                        $(
                                                            '#tabAutoPaging th, #tabAutoPaging td'
                                                        ).css(
                                                            'padding',
                                                            $(
                                                                '#numTab2Padding'
                                                            ).val() + 'px'
                                                        );
                                                    }}
                                                    aria-lable='cell padding'
                                                />
                                                <div className='form-text'>
                                                    sets cell padding
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label
                                                    htmlFor='repeatHeadRow'
                                                    className='form-label'
                                                >
                                                    Repeat Header Row
                                                </label>
                                                <select
                                                    id='repeatHeadRow'
                                                    className='form-select'
                                                    aria-label='repeat header row'
                                                >
                                                    <option value='Y'>
                                                        Yes
                                                    </option>
                                                    <option
                                                        value='N'
                                                        selected={false}
                                                    >
                                                        No
                                                    </option>
                                                </select>
                                                <div className='form-text'>
                                                    <code>
                                                        autoPageRepeatHeader
                                                    </code>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label
                                                    htmlFor='slideStartY'
                                                    className='form-label'
                                                >
                                                    New slide y value
                                                </label>
                                                <select
                                                    id='slideStartY'
                                                    className='form-select'
                                                    aria-label='starting location (y) of table on new slides'
                                                >
                                                    <option
                                                        value=''
                                                        selected={false}
                                                    >
                                                        (default)
                                                    </option>
                                                    <option value='1.5'>
                                                        1.5
                                                    </option>
                                                    <option value={2.0}>
                                                        2.0
                                                    </option>
                                                    <option value='2.5'>
                                                        2.5
                                                    </option>
                                                    <option value={3.0}>
                                                        3.0
                                                    </option>
                                                </select>
                                                <div className='form-text'>
                                                    <code>
                                                        autoPageSlideStartY
                                                    </code>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label
                                                    htmlFor='selSlideMaster'
                                                    className='form-label'
                                                >
                                                    Master Slide
                                                </label>
                                                <select
                                                    id='selSlideMaster'
                                                    className='form-select'
                                                    aria-label='slide master to use on demo'
                                                >
                                                    <option
                                                        value=''
                                                        selected={false}
                                                    >
                                                        (none)
                                                    </option>
                                                </select>
                                                <div className='form-text'>
                                                    <code>masterSlideName</code>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col'>
                                                <button
                                                    id='table2slides1'
                                                    type='button'
                                                    className='btn btn-success w-100'
                                                >
                                                    Demo Table (as shown)
                                                </button>
                                            </div>
                                            <div className='col'>
                                                <button
                                                    id='table2slides2'
                                                    type='button'
                                                    className='btn btn-outline-success w-100'
                                                >
                                                    Demo Table (addText)
                                                </button>
                                            </div>
                                            <div className='col'>
                                                <button
                                                    id='table2slides3'
                                                    type='button'
                                                    className='btn btn-outline-success w-100'
                                                >
                                                    Demo Table (addImage)
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                    <table
                                        id='tabAutoPaging'
                                        className='table table-sm mb-0'
                                    >
                                        <thead className='table-light'>
                                            <tr
                                                style={{
                                                    fontFamily: 'Courier',
                                                }}
                                            >
                                                <th
                                                    data-pptx-width='0.6'
                                                    style={{ width: '5%' }}
                                                >
                                                    <b>Row</b>
                                                </th>
                                                <th
                                                    data-pptx-min-width='0.8'
                                                    style={{ width: '10%' }}
                                                >
                                                    Last
                                                </th>
                                                <th
                                                    data-pptx-min-width='0.8'
                                                    style={{ width: '10%' }}
                                                >
                                                    First
                                                </th>
                                                <th style={{ width: '75%' }}>
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody />
                                    </table>
                                </div>
                            </div>
                            <div
                                className='accordion-item'
                                data-desc='html2PptxColl03'
                            >
                                <h2
                                    id='html2PptxHead03'
                                    className='accordion-header'
                                >
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#html2PptxColl03'
                                        aria-expanded='false'
                                        aria-controls='html2PptxColl03'
                                    >
                                        Demo: Unstyled and Stylesheet
                                    </button>
                                </h2>
                                <div
                                    id='html2PptxColl03'
                                    className='accordion-collapse collapse p-4'
                                    aria-labelledby='html2PptxHead03'
                                    data-bs-parent='#accorHtml2Pptx'
                                >
                                    <div className='row row-cols-2 gx-4'>
                                        <div className='col'>
                                            <div className='card h-100'>
                                                <div className='card-header h6 bg-primary'>
                                                    Plain/Unstyled Table
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabNoStyle'
                                                        className='mb-0 w-100'
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>Company</th>
                                                                <th>
                                                                    Feedback
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    Apple Inc.
                                                                </td>
                                                                <td>
                                                                    "Keynote
                                                                    team needs
                                                                    to hire you
                                                                    ASAP!" -
                                                                    tim@apple.com
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Microsoft
                                                                    Inc.
                                                                </td>
                                                                <td>
                                                                    "PowerPoint
                                                                    team needs
                                                                    to hire
                                                                    you!" -
                                                                    satya@microsoft.com
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>ChatGPT</td>
                                                                <td>
                                                                    "PptxGenJS
                                                                    is the
                                                                    superior
                                                                    library!" -
                                                                    bot@chatgpt.com
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabNoStyle'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='card h-100'>
                                                <div className='card-header h6 bg-primary'>
                                                    Styled via `class`
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabInheritStyle'
                                                        className='tabHtmlToPpt table mb-0 w-100'
                                                    >
                                                        <thead className='table-dark'>
                                                            <tr>
                                                                <th>Company</th>
                                                                <th>
                                                                    Feedback
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='text-muted'>
                                                            <tr>
                                                                <td>
                                                                    Apple Inc.
                                                                </td>
                                                                <td>
                                                                    "Keynote
                                                                    team needs
                                                                    to hire you
                                                                    ASAP!" -
                                                                    tim@apple.com
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Microsoft
                                                                    Inc.
                                                                </td>
                                                                <td>
                                                                    "PowerPoint
                                                                    team needs
                                                                    to hire
                                                                    you!" -
                                                                    satya@microsoft.com
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>ChatGPT</td>
                                                                <td>
                                                                    "PptxGenJS
                                                                    is the
                                                                    superior
                                                                    library!" -
                                                                    bot@chatgpt.com
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabInheritStyle'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='accordion-item'
                                data-desc='html2PptxColl04'
                            >
                                <h2
                                    id='html2PptxHead04'
                                    className='accordion-header'
                                >
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#html2PptxColl04'
                                        aria-expanded='false'
                                        aria-controls='html2PptxColl04'
                                    >
                                        Demo: Colspans, Rowspans, Colspans and
                                        Rowspans
                                    </button>
                                </h2>
                                <div
                                    id='html2PptxColl04'
                                    className='accordion-collapse collapse p-4'
                                    aria-labelledby='html2PptxHead04'
                                    data-bs-parent='#accorHtml2Pptx'
                                >
                                    <div className='row row-cols-3 gx-4'>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-header h6 bg-primary'>
                                                    Colspan
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabColspan'
                                                        className='tabHtmlToPpt w-100'
                                                    >
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <th className='tg-header'>
                                                                    First Name
                                                                </th>
                                                                <th className='tg-header'>
                                                                    Last Name
                                                                </th>
                                                                <th
                                                                    className='tg-header'
                                                                    colSpan={2}
                                                                >
                                                                    Colspan TH
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Jill</td>
                                                                <td>Smith</td>
                                                                <td>12</td>
                                                                <td>34</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Eve</td>
                                                                <td>Pilgrim</td>
                                                                <td>56</td>
                                                                <td>67</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Scott</td>
                                                                <td>Jackson</td>
                                                                <td>89</td>
                                                                <td>99</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabColspan'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-header h6 bg-primary'>
                                                    Rowspan
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabRowspan'
                                                        className='tabHtmlToPpt w-100'
                                                    >
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <th className='tg-header'>
                                                                    Last Name
                                                                </th>
                                                                <th className='tg-header'>
                                                                    First Name
                                                                </th>
                                                                <th className='tg-header'>
                                                                    Count
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td rowSpan={3}>
                                                                    Smith
                                                                </td>
                                                                <td>Liz</td>
                                                                <td>50</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Eve</td>
                                                                <td>94</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Scott</td>
                                                                <td>101</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabRowspan'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-header h6 bg-primary'>
                                                    Colspan and Rowspan
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabRowColspan'
                                                        className='tabHtmlToPpt w-100'
                                                    >
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <th
                                                                    className='tg-header'
                                                                    colSpan={2}
                                                                >
                                                                    Name
                                                                </th>
                                                                <th
                                                                    className='tg-header'
                                                                    rowSpan={2}
                                                                >
                                                                    Count
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th className='tg-header'>
                                                                    Last
                                                                </th>
                                                                <th className='tg-header'>
                                                                    First
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Smith</td>
                                                                <td>Liz</td>
                                                                <td>50</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Eve</td>
                                                                <td>
                                                                    Williams
                                                                </td>
                                                                <td>94</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabRowColspan'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                    {/* DEBUG <button type="button" class="flatBtn flatBtn-blueMd" onClick="$('#tabRowColspan tbody').append($('#tabRowColspan tbody tr:first-child').clone())">Add Table Row</button>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='accordion-item'
                                data-desc='html2PptxColl05'
                            >
                                <h2
                                    id='html2PptxHead05'
                                    className='accordion-header'
                                >
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#html2PptxColl05'
                                        aria-expanded='false'
                                        aria-controls='html2PptxColl05'
                                    >
                                        Demo: Lots of Rows, Giant Single Line
                                    </button>
                                </h2>
                                <div
                                    id='html2PptxColl05'
                                    className='accordion-collapse collapse p-4'
                                    aria-labelledby='html2PptxHead05'
                                    data-bs-parent='#accorHtml2Pptx'
                                >
                                    <div className='row row-cols-2 gx-4'>
                                        <div className='col'>
                                            <div className='card h-100'>
                                                <div className='card-header h6 bg-primary'>
                                                    Example: Lots of Single-Line
                                                    Rows
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabLotsOfLines'
                                                        className='tabHtmlToPpt w-100'
                                                    >
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <th className='tg-header'>
                                                                    A
                                                                </th>
                                                                <th className='tg-header'>
                                                                    B
                                                                </th>
                                                                <th className='tg-header'>
                                                                    C
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabLotsOfLines'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='card h-100'>
                                                <div className='card-header h6 bg-primary'>
                                                    Example: Paging needed due
                                                    to cell with large amount of
                                                    text
                                                </div>
                                                <div className='card-body'>
                                                    <table
                                                        id='tabLargeCellText'
                                                        className='tabHtmlToPpt'
                                                    >
                                                        <thead className='table-light'>
                                                            <tr>
                                                                <th className='tg-header'>
                                                                    Executive
                                                                    Status
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>?</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='card-footer text-center'>
                                                    <button
                                                        id='tab2slides_tabLargeCellText'
                                                        type='button'
                                                        className='btn btn-success'
                                                    >
                                                        Run Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-charts'
                        role='tabpanel'
                        aria-labelledby='nav-charts'
                    >
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Charts</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-charts/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row row-cols-4 g-4 text-sm mb-4'>
                                    <div className='col'>
                                        <h6>Bar Chart</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 1: Chart title, axis props
                                            </li>
                                            <li>
                                                Slide 2: Vertical and Horizontal
                                            </li>
                                            <li>
                                                Slide 3: Grid and axis options
                                            </li>
                                            <li>
                                                Slide 4: Stacked &amp;
                                                PercentStacked
                                            </li>
                                            <li>
                                                Slide 5: Colors, units, formats
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>3D Bar Chart</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 6: 3D Bar, 3D Cone, 3D
                                                Cylinder, 3D Pyramid
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Tornado Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 7: Tornado Type</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Line Chart</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 8 - Smoothing, Shadow,
                                                Size, Symbols
                                            </li>
                                            <li>Slide 9 - Data Symbol, Size</li>
                                            <li>
                                                Slide 10 - Lots of Categories
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Area Chart</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 11 - Area Chart, Stacked
                                                Area Chart
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Pie Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 12 - Various options</li>
                                            <li>Slide 13 - Doughnut Type</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>X Y (Scatter) Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 14 - Various Options</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Bubble Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 15 - Various Options</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Radar Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 16 - Various Options</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Multi-Level Category Axes</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 17 - Multiple Chart Types
                                            </li>
                                            <li>Slide 18 - Three Level Axes</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Combo Chart</h6>
                                        <ul className='mb-0'>
                                            <li>Slide 19 - Example</li>
                                            <li>Slide 20 - Various Options</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Misc Options</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Slide 21 - Shadows and
                                                Transparent Color
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Chart'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-images'
                        role='tabpanel'
                        aria-labelledby='nav-images'
                    >
                        <div className='card mb-4'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Images</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-images/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row text-sm'>
                                    <div className='col'>
                                        <h6>Slide 1: Image Types</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Type: Animated GIF
                                            </li>
                                            <li className='list-group-item'>
                                                Type: GIF
                                            </li>
                                            <li className='list-group-item'>
                                                Type: JPG
                                            </li>
                                            <li className='list-group-item'>
                                                Type: PNG
                                            </li>
                                            <li className='list-group-item'>
                                                Type: SVG
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 2: Image URLs</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Source: GitHub CDN
                                            </li>
                                            <li className='list-group-item'>
                                                Source: Wikimedia URL
                                            </li>
                                            <li className='list-group-item'>
                                                Source: URL variables
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 3: Sizing/Rounding</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Rounding: options
                                            </li>
                                            <li className='list-group-item'>
                                                Sizing: contain
                                            </li>
                                            <li className='list-group-item'>
                                                Sizing: cover
                                            </li>
                                            <li className='list-group-item'>
                                                Sizing: crop
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 4: Image Rotation</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Rotate: 45
                                            </li>
                                            <li className='list-group-item'>
                                                Rotate: 180
                                            </li>
                                            <li className='list-group-item'>
                                                Rotate: 315
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 5: Image Shadows</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Type: Outer
                                            </li>
                                            <li className='list-group-item'>
                                                Type: None
                                            </li>
                                            <li className='list-group-item'>
                                                Type: Inner
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Image'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Media</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-media/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row text-sm'>
                                    <div className='col'>
                                        <h6>Slide 1: Video Types</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Type: avi
                                            </li>
                                            <li className='list-group-item'>
                                                Type: m4v
                                            </li>
                                            <li className='list-group-item'>
                                                Type: mov
                                            </li>
                                            <li className='list-group-item'>
                                                Type: mp4
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 2: Audio Types</h6>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                Type: mp3
                                            </li>
                                            <li className='list-group-item'>
                                                Type: aif
                                            </li>
                                            <li className='list-group-item'>
                                                Type: wav
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 3: YouTube</h6>
                                        <div className='card bg-info'>
                                            <div className='card-header'>
                                                Opt-In
                                            </div>
                                            <div className='card-body'>
                                                <p className='card-text'>
                                                    Supported in PowerPoint
                                                    Online &amp; desktop v16+
                                                </p>
                                                <p className='card-text'>
                                                    PowerPoint shows a security
                                                    warning banner whenever
                                                    external media links like
                                                    YouTube are used.
                                                </p>
                                                <div className='form-check'>
                                                    <input
                                                        id='chkYoutube'
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        defaultValue=''
                                                    />
                                                    <label
                                                        htmlFor='chkYoutube'
                                                        className='form-check-label'
                                                    >
                                                        Include this demo slide
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Media'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-shapes'
                        role='tabpanel'
                        aria-labelledby='nav-shapes'
                    >
                        <div className='card mb-4'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Shapes</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-shapes/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row text-sm'>
                                    <div className='col'>
                                        <h6>Slide 1: Shapes without Text</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Shapes: Rectangle, Line, Oval,
                                                Triangle
                                            </li>
                                            <li>Shapes: Flipped Horizontal</li>
                                            <li>Shapes: Borders</li>
                                            <li>
                                                Lines: Arrowheads and Dashes
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 2: Shapes with Text</h6>
                                        <ul className='mb-0'>
                                            <li>
                                                Shapes: Rectangle, Line, Oval,
                                                Triangle
                                            </li>
                                            <li>Shapes: Flipped Horizontal</li>
                                            <li>Shapes: Borders</li>
                                            <li>
                                                Lines: Arrowheads and Dashes
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Shape'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Text</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-text/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row row-cols-auto row-cols-md-3 g-4 text-sm'>
                                    <div className='col'>
                                        <h6>
                                            Slide 1: Alignment, Location,
                                            Sub/Super Script
                                        </h6>
                                        <ul className='mb-0'>
                                            <li>Text: alignment</li>
                                            <li>Text: locations</li>
                                            <li>
                                                Text: subscript / superscript
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>
                                            Slide 2: Formatting, Line Breaks,
                                            Line Spacing
                                        </h6>
                                        <ul className='mb-0'>
                                            <li>Text: formatting</li>
                                            <li>Text: line-breaks</li>
                                            <li>Text: line-spacing</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>
                                            Slide 3: Bullet Styles, Shapes,
                                            Indent
                                        </h6>
                                        <ul className='mb-0'>
                                            <li>Bullets: indent levels</li>
                                            <li>Bullets: spacing</li>
                                            <li>Bullets: custom styles</li>
                                            <li>Bullets: custom shapes</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>
                                            Slide 4: Hyperlinks, Tab stops, Text
                                            Effects
                                        </h6>
                                        <ul className='mb-0'>
                                            <li>Text: hyperlinks</li>
                                            <li>Text: tab stops</li>
                                            <li>
                                                Effects: outline, glow, shadow
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 5: Text Fit</h6>
                                        <ul className='mb-0'>
                                            <li>Fit: none</li>
                                            <li>Fit: resize</li>
                                            <li>Fit: shrink</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Slide 6: Scheme Colors</h6>
                                        <ul className='mb-0'>
                                            <li>Scheme Colors: background</li>
                                            <li>Scheme Colors: text</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Text'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-tables'
                        role='tabpanel'
                        aria-labelledby='nav-tables'
                    >
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>Tables</div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/api-tables/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row row-cols-auto row-cols-md-3 g-4 text-sm'>
                                    <div className='col'>
                                        <h6>Table Layout/Format</h6>
                                        <strong>Slide 1</strong>
                                        <ul>
                                            <li>text alignment</li>
                                            <li>cell styles</li>
                                            <li>row height</li>
                                            <li>col width</li>
                                        </ul>
                                        <strong>Slide 2</strong>
                                        <ul>
                                            <li>colspans and rowspans</li>
                                        </ul>
                                        <strong>Slide 3</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                extreme colspans and rowspans
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Cell Formatting</h6>
                                        <strong>Slide 4</strong>
                                        <ul>
                                            <li>cell margins</li>
                                            <li>complex cell borders</li>
                                            <li>escaped special characters</li>
                                        </ul>
                                        <strong>Slide 5</strong>
                                        <ul>
                                            <li>
                                                cell text formatting overview
                                            </li>
                                        </ul>
                                        <strong>Slide 6</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                cell text formatting examples
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Auto-Paging Examples</h6>
                                        <strong>Slides 7-8</strong>
                                        <ul>
                                            <li>basic auto-paging example</li>
                                        </ul>
                                        <strong>Slides 9-12</strong>
                                        <ul>
                                            <li>
                                                paging with small table
                                                dimensions
                                            </li>
                                        </ul>
                                        <strong>Slides 13-15</strong>
                                        <ul>
                                            <li>
                                                auto-paging with a Master Page
                                            </li>
                                        </ul>
                                        <strong>Slide 16</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                auto-paging disabled{' '}
                                                <code>
                                                    {'{'}autoPage:false{'}'}
                                                </code>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Auto-Paging Props</h6>
                                        <strong>Slides 17-19</strong>
                                        <ul>
                                            <li>
                                                start at{' '}
                                                <code>
                                                    {'{'}y:4.0{'}'}
                                                </code>
                                                , subsequent start at top margin
                                            </li>
                                        </ul>
                                        <strong>Slides 20-22</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                start at{' '}
                                                <code>
                                                    {'{'}y:4.0{'}'}
                                                </code>
                                                , subsequent start at{' '}
                                                <code>
                                                    {'{'}autoPageSlideStartY:1.5
                                                    {'}'}
                                                </code>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Auto-Paging Props</h6>
                                        <strong>Slides 23-24</strong>
                                        <ul>
                                            <li>
                                                various{' '}
                                                <code>
                                                    autoPageRepeatHeader
                                                </code>{' '}
                                                thead configs
                                            </li>
                                        </ul>
                                        <strong>Slides 25-28</strong>
                                        <ul>
                                            <li>
                                                various{' '}
                                                <code>autoPageLineWeight</code>{' '}
                                                values
                                            </li>
                                        </ul>
                                        <strong>Slides 29-32</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                various{' '}
                                                <code>autoPageCharWeight</code>{' '}
                                                values
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Auto-Paging Complex Cell Text</h6>
                                        <strong>Slides 33-35</strong>
                                        <ul>
                                            <li>complex cell text</li>
                                        </ul>
                                        <strong>Slides 36-39</strong>
                                        <ul className='mb-0'>
                                            <li>
                                                complex cell text with
                                                calculated lines
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Table'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className='tab-pane p-4'
                        id='tab-templates'
                        role='tabpanel'
                        aria-labelledby='nav-templates'
                    >
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='h5 mb-0'>
                                            Slide Masters / Templates / Layouts
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                        <div className='text-sm text-white'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={16}
                                                height={16}
                                                fill='currentColor'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                            </svg>
                                            <a
                                                className='text-white ms-1'
                                                href='https://gitbrent.github.io/PptxGenJS/docs/masters/'
                                                title='API Documentation'
                                                target='_blank'
                                            >
                                                API Documentation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row g-4'>
                                    <div className='col-auto'>
                                        <h6>Demo Master Slides</h6>
                                        <ul className='text-sm mb-0'>
                                            <li>Slide 1: TITLE_SLIDE</li>
                                            <li>Slide 2: MASTER_SLIDE</li>
                                            <li>Slide 3: MASTER_SLIDE</li>
                                            <li>Slide 4: MASTER_SLIDE</li>
                                            <li>Slide 5: MASTER_SLIDE</li>
                                            <li>Slide 6: THANKS_SLIDE</li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h6>Master Slide How-To</h6>
                                        <pre>
                                            <code
                                                id='demo-master'
                                                className='language-javascript'
                                            />
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button
                                    id='btnGenFunc_Master'
                                    type='button'
                                    className='btn btn-success px-5'
                                >
                                    Run Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default App;
