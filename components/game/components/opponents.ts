import { ILimitedConfig } from '../canvas';
import _ from 'lodash';
import { getRandomLane, getLanePosition } from './utils';

interface IOpponentsConfig {
  car: {
    width: number;
    height: number;
    color?: string;
    baseSpeed: number;
  };
  gap: number;
}
export function initOpponents(
  opponentConfig: IOpponentsConfig,
  canvasConfig: ILimitedConfig,
) {
  const { canvasHeight, canvasWidth } = canvasConfig;
  const nOpponents =
    Math.ceil(
      ((canvasHeight * 1.0) /
        (opponentConfig.car.height + opponentConfig.gap)) *
        1.0,
    ) + 1;
  const opponents = _.range(nOpponents).map((n) => ({
    rect: canvasConfig.addRect({
      left: 0,
      top: 0,
      height: opponentConfig.car.height,
      width: opponentConfig.car.width,
      style: {
        fill: opponentConfig.car.color || 'white',
      },
    }),
    lane: 'left',
  }));
  {
    // Position All dividers!
    let opponentPosition = -opponentConfig.car.height;
    opponents.forEach((opponent) => {
      const lane = (opponent.lane = getRandomLane());
      opponent.rect.setPositon(
        getLanePosition(canvasWidth, lane) - opponentConfig.car.width / 2,
        opponentPosition,
      );

      opponentPosition -= opponentConfig.car.height + opponentConfig.gap;
    });
  }
  let firstOpponent = opponents[opponents.length - 1];
  let lastOpponent = opponents[0];
  return {
    tick: (speed = 1) => {
      opponents.forEach((opponent, i) => {
        opponent.rect.moveY(speed * opponentConfig.car.baseSpeed);
        if (opponent.rect.top() > canvasHeight) {
          // Prepend to the first one.
          const lane = (opponent.lane = getRandomLane());
          opponent.rect.setPositon(
            getLanePosition(canvasWidth, lane) - opponentConfig.car.width / 2,
            firstOpponent.rect.top() -
              (opponentConfig.car.height + opponentConfig.gap),
          );

          firstOpponent = opponent;
        }
      });
      // Just ensure all positions are updated first. Otherwise UI glitches pop in!
      opponents.forEach((opponent) => {
        lastOpponent =
          opponent.rect.top() > lastOpponent.rect.top()
            ? opponent
            : lastOpponent;
      });
    },
    lastOpponent: () => {
      return lastOpponent;
    },
  };
}
