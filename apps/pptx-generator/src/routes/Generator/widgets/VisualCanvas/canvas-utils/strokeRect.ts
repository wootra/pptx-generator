export const strokeRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  stroke: string | CanvasGradient | CanvasPattern,
  dashPatterns?: number[]
) => {
  ctx.strokeStyle = stroke;
  ctx.setLineDash(dashPatterns ?? [0]);
  ctx.strokeRect(x, y, w, h);
};
