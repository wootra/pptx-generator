export const setTextDefaultStyles = (
  ctx: CanvasRenderingContext2D,
  fontSize: number = 16,
  textAlign: CanvasTextAlign = "left",
  textBaseline: CanvasTextBaseline = "top",
  color: string | CanvasGradient | CanvasPattern = "black"
) => {
  const adjustedfontSize = (fontSize * 1.38).toFixed(2);
  ctx.font = `${adjustedfontSize}px Arial`; // TODO: font-family should be Avenir
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillStyle = color;
};
