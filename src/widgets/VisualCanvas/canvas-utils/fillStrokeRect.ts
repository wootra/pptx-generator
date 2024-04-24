export const fillStrokeRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string | CanvasGradient | CanvasPattern,
  stroke: string | CanvasGradient | CanvasPattern,
  dashPatterns?: number[]
) => {
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.setLineDash(dashPatterns ?? [0]);
  ctx.strokeRect(x, y, w, h);
};
