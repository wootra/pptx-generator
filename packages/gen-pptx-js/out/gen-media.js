/**
 * PptxGenJS: Media Methods
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { IMG_BROKEN } from './core-enums';
/**
 * Encode Image/Audio/Video into base64
 * @param {PresSlide | SlideLayout} layout - slide layout
 * @return {Promise} promise
 */
export function encodeSlideMediaRels(layout) {
    var fs = typeof require !== 'undefined' && typeof window === 'undefined'
        ? require('fs')
        : null; // NodeJS
    var https = typeof require !== 'undefined' && typeof window === 'undefined'
        ? require('https')
        : null; // NodeJS
    var imageProms = [];
    // A: Capture all audio/image/video candidates for encoding (filtering online/pre-encoded)
    var candidateRels = layout._relsMedia.filter(function (rel) {
        return rel.type !== 'online' &&
            !rel.data &&
            (!rel.path || (rel.path && !rel.path.includes('preencoded')));
    });
    // B: PERF: Mark dupes (same `path`) so that we dont load same media over-and-over
    var unqPaths = [];
    candidateRels.forEach(function (rel) {
        if (!unqPaths.includes(rel.path)) {
            rel.isDuplicate = false;
            unqPaths.push(rel.path);
        }
        else {
            rel.isDuplicate = true;
        }
    });
    // C: Read/Encode each unique audio/image/video path
    candidateRels
        .filter(function (rel) { return !rel.isDuplicate; })
        .forEach(function (rel) {
        imageProms.push(new Promise(function (resolve, reject) {
            if (fs && rel.path.indexOf('http') !== 0) {
                // DESIGN: Node local-file encoding is syncronous, so we can load all images here, then call export with a callback (if any)
                try {
                    var bitmap = fs.readFileSync(rel.path);
                    rel.data = Buffer.from(bitmap).toString('base64');
                    candidateRels
                        .filter(function (dupe) {
                        return dupe.isDuplicate &&
                            dupe.path === rel.path;
                    })
                        .forEach(function (dupe) { return (dupe.data = rel.data); });
                    resolve('done');
                }
                catch (ex) {
                    rel.data = IMG_BROKEN;
                    candidateRels
                        .filter(function (dupe) {
                        return dupe.isDuplicate &&
                            dupe.path === rel.path;
                    })
                        .forEach(function (dupe) { return (dupe.data = rel.data); });
                    reject(new Error("ERROR: Unable to read media: \"".concat(rel.path, "\"\n").concat(String(ex))));
                }
            }
            else if (fs && https && rel.path.indexOf('http') === 0) {
                https.get(rel.path, function (res) {
                    var rawData = '';
                    res.setEncoding('binary'); // IMPORTANT: Only binary encoding works
                    res.on('data', function (chunk) { return (rawData += chunk); });
                    res.on('end', function () {
                        rel.data = Buffer.from(rawData, 'binary').toString('base64');
                        candidateRels
                            .filter(function (dupe) {
                            return dupe.isDuplicate &&
                                dupe.path === rel.path;
                        })
                            .forEach(function (dupe) { return (dupe.data = rel.data); });
                        resolve('done');
                    });
                    res.on('error', function (_ex) {
                        rel.data = IMG_BROKEN;
                        candidateRels
                            .filter(function (dupe) {
                            return dupe.isDuplicate &&
                                dupe.path === rel.path;
                        })
                            .forEach(function (dupe) { return (dupe.data = rel.data); });
                        reject(new Error("ERROR! Unable to load image (https.get): ".concat(rel.path)));
                    });
                });
            }
            else {
                // A: Declare XHR and onload/onerror handlers
                // DESIGN: `XMLHttpRequest()` plus `FileReader()` = Ablity to read any file into base64!
                var xhr_1 = new XMLHttpRequest();
                xhr_1.onload = function () {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        rel.data = reader.result;
                        candidateRels
                            .filter(function (dupe) {
                            return dupe.isDuplicate &&
                                dupe.path === rel.path;
                        })
                            .forEach(function (dupe) { return (dupe.data = rel.data); });
                        if (!rel.isSvgPng) {
                            resolve('done');
                        }
                        else {
                            createSvgPngPreview(rel)
                                .then(function () {
                                resolve('done');
                            })
                                .catch(function (ex) {
                                reject(ex);
                            });
                        }
                    };
                    reader.readAsDataURL(xhr_1.response);
                };
                xhr_1.onerror = function (_ex) {
                    rel.data = IMG_BROKEN;
                    candidateRels
                        .filter(function (dupe) {
                        return dupe.isDuplicate &&
                            dupe.path === rel.path;
                    })
                        .forEach(function (dupe) { return (dupe.data = rel.data); });
                    reject(new Error("ERROR! Unable to load image (xhr.onerror): ".concat(rel.path)));
                };
                // B: Execute request
                xhr_1.open('GET', rel.path);
                xhr_1.responseType = 'blob';
                xhr_1.send();
            }
        }));
    });
    // B: SVG: base64 data still requires a png to be generated (`isSvgPng` flag this as the preview image, not the SVG itself)
    layout._relsMedia
        .filter(function (rel) { return rel.isSvgPng && rel.data; })
        .forEach(function (rel) {
        if (fs) {
            // console.log('Sorry, SVG is not supported in Node (more info: https://github.com/gitbrent/PptxGenJS/issues/401)')
            rel.data = IMG_BROKEN;
            imageProms.push(Promise.resolve().then(function () { return 'done'; }));
        }
        else {
            imageProms.push(createSvgPngPreview(rel));
        }
    });
    return imageProms;
}
/**
 * Create SVG preview image
 * @param {ISlideRelMedia} rel - slide rel
 * @return {Promise} promise
 */
function createSvgPngPreview(rel) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        // A: Create
                        var image = new Image();
                        // B: Set onload event
                        image.onload = function () {
                            // First: Check for any errors: This is the best method (try/catch wont work, etc.)
                            if (image.width + image.height === 0) {
                                image.onerror('h/w=0');
                            }
                            var canvas = document.createElement('CANVAS');
                            var ctx = canvas.getContext('2d');
                            canvas.width = image.width;
                            canvas.height = image.height;
                            ctx.drawImage(image, 0, 0);
                            // Users running on local machine will get the following error:
                            // "SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported."
                            // when the canvas.toDataURL call executes below.
                            try {
                                rel.data = canvas.toDataURL(rel.type);
                                resolve('done');
                            }
                            catch (ex) {
                                image.onerror(ex);
                            }
                            canvas = null;
                        };
                        image.onerror = function (_ex) {
                            rel.data = IMG_BROKEN;
                            reject(new Error("ERROR! Unable to load image (image.onerror): ".concat(rel.path)));
                        };
                        // C: Load image
                        image.src = typeof rel.data === 'string' ? rel.data : IMG_BROKEN;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * FIXME: TODO: currently unused
 * TODO: Should return a Promise
 */
export function getSizeFromImage(inImgUrl) {
    var sizeOf = typeof require !== 'undefined' ? require('sizeof') : null; // NodeJS
    if (sizeOf) {
        try {
            var dimensions = sizeOf(inImgUrl);
            return { width: dimensions.width, height: dimensions.height };
        }
        catch (ex) {
            console.error('ERROR: sizeOf: Unable to load image: ' + inImgUrl);
            return { width: 0, height: 0 };
        }
    }
    else if (Image && typeof Image === 'function') {
        // A: Create
        var image_1 = new Image();
        // B: Set onload event
        image_1.onload = function () {
            // FIRST: Check for any errors: This is the best method (try/catch wont work, etc.)
            if (image_1.width + image_1.height === 0) {
                return { width: 0, height: 0 };
            }
            var obj = { width: image_1.width, height: image_1.height };
            return obj;
        };
        image_1.onerror = function () {
            console.error("ERROR: image.onload: Unable to load image: ".concat(inImgUrl));
        };
        // C: Load image
        image_1.src = inImgUrl;
    }
}
//# sourceMappingURL=gen-media.js.map