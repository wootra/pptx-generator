/**
 * NAME: demo_shapes
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DESC: Common test/demo slides for all library features
 * DEPS: Used by various demos (./demos/browser, ./demos/node, etc.)
 * VER.: 3.5.0
 * BLD.: 20210401
 */
/**
 * CUSTOM GEOMETRY:
 * @see https://github.com/gitbrent/PptxGenJS/pull/872
 * Notes from the author [apresmoi](https://github.com/apresmoi):
 * I've implemented this by using a similar spec to the one used by `svg-points`.
 * The path or contour of the custom geometry is declared under the property points of the ShapeProps object.
 * With this implementation we are supporting all the custom geometry rules: moveTo, lnTo, arcTo, cubicBezTo, quadBezTo and close.
 *
 * A translation of an svg path to a custom geometry could be achieved by using the svg-points package and adding a custom translation between the arcs.
 * The svg arc is described by the variables x, y, rx, ry, xAxisRotation, largeArcFlag and sweepFlag.
 * On the other side the pptx freeform arc is described by x, y, hR, wR, stAng, swAng.
 * In order to add some sort of translation between svg-path and a custom geometry points array we should create a translation between those two representations of the arc.
 */
import PptxGenJS from 'gen-pptx-js';
export declare function genSlides_Shape(pptx: PptxGenJS): void;
