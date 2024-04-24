export const fillRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color: string | CanvasGradient | CanvasPattern
) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};
