import { ILimitedConfig } from '../canvas';
import lodash, { first } from 'lodash';

interface IDividersConfig {
  height: number;
  width: number;
  gap: number;
  color: string;
  baseSpeed: number;
}
export function initDividers(d: IDividersConfig, canvasConfig: ILimitedConfig) {
  const { canvasHeight, canvasWidth } = canvasConfig;
  const nDividers =
    Math.ceil(((canvasHeight * 1.0) / (d.height + d.gap)) * 1.0) + 1;
  const dividers = lodash.range(nDividers).map((n) =>
    canvasConfig.addRect({
      left: 0,
      top: 0,
      height: d.height,
      width: d.width,
      style: {
        fill: d.color || 'white',
      },
    }),
  );
  {
    // Position All dividers!
    let dividerPosition = -d.height;
    dividers.forEach((divider) => {
      divider.setPositon(canvasWidth / 2 - d.width / 2, dividerPosition);
      dividerPosition -= d.height + d.gap;
    });
  }
  let firstDivider = dividers[dividers.length - 1];
  return {
    tick: (speed = 1) => {
      dividers.forEach((divider, i) => {
        divider.moveY(speed * d.baseSpeed);
        if (divider.top() > canvasHeight) {
          // Prepend to the first one.
          divider.setTop(firstDivider.top() - (d.height + d.gap));
          firstDivider = divider;
        }
      });
    },
  };
}
