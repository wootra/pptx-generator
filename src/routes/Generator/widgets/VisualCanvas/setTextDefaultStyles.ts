const FONT_SIZE_RATIO = 1.38; // rounded from 1.379310 = 1000/725 = canvas width in px / 10 inch in px

export const setTextDefaultStyles = (
    ctx: CanvasRenderingContext2D,
    fontSize: number = 16,
    textAlign: CanvasTextAlign = 'left',
    textBaseline: CanvasTextBaseline = 'top',
    color: string | CanvasGradient | CanvasPattern = 'black'
) => {
    const adjustedfontSize = (fontSize * FONT_SIZE_RATIO).toFixed(2);
    ctx.font = `${adjustedfontSize}px Arial`; // TODO: font-family should be Avenir
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
};
