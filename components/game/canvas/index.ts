type IObject = {
  type: 'RECTANGLE';
  id: number;
  config: IRectangle;
};
interface IRectangle {
  width: number;
  height: number;
  top: number;
  left: number;
  style?: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    blur?: number | string;
  };
}
export type ILimitedConfig = ReturnType<Canvas['limitedConfig']>;
export class Canvas {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  objects: IObject[] = [];
  requestedAnimation?: number;
  id_index = 0;
  constructor(elem: HTMLCanvasElement, { width = 500, height = 1000 }) {
    elem.width = width;
    elem.height = height;
    const context = elem.getContext('2d');
    if (!context) {
      throw new Error('No context.');
    }
    this.canvas = elem;
    this.context = context;
  }
  addRect = (config: IRectangle) => {
    const rect: IObject = {
      type: 'RECTANGLE',
      config,
      id: this.id_index++,
    };
    this.objects.push(rect);
    return {
      left: () => rect.config.left,
      top: () => rect.config.top,
      setPositon: (left: number, top: number) => {
        rect.config.top = top;
        rect.config.left = left;
      },
      setTop: (top: number) => (rect.config.top = top),
      setLeft: (left: number) => (rect.config.left = left),
      moveX: (dx: number) => {
        rect.config.left += dx;
      },
      moveY: (dy: number) => {
        rect.config.top += dy;
      },
      remove: () => {
        this.objects = this.objects.filter((v) => v.id !== rect.id);
      },
    };
  };
  limitedConfig() {
    return {
      addRect: this.addRect,
      canvasWidth: this.canvas.width,
      canvasHeight: this.canvas.height,
    };
  }
  render() {
    const ctx = this.context;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const obj of this.objects) {
      switch (obj.type) {
        case 'RECTANGLE': {
          const {
            top,
            left,
            height,
            width,
            style: { fill, blur } = {},
          } = obj.config;
          // Render rectangle.
          ctx.beginPath();
          ctx.rect(left, top, width, height);

          if (fill) {
            ctx.fillStyle = fill;
            ctx.fill();
          }

          blur && (ctx.filter = `blur(${blur})`);
          ctx.closePath();
        }
      }
    }
  }
}
