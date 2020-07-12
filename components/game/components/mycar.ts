import { ILimitedConfig } from "../canvas";
import { getLanePosition } from "./utils";

interface ICarConfig {
  height: number;
  width: number;
  color: string;
  baseSpeed: number;
}
export function initMyCar(carConfig: ICarConfig, config: ILimitedConfig) {
  const myCar = config.addRect({
    height: carConfig.height,
    width: carConfig.width,
    left: 0,
    top: 0,
    style: {
      fill: carConfig.color,
    },
  });
  myCar.setPositon(
    getLanePosition(config.canvasWidth, "left") - carConfig.width / 2,
    config.canvasHeight + 20
  );

  let position: "left" | "right" = "left";
  let currentPosition = myCar.left();

  const carLanePosition = {
    left: getLanePosition(config.canvasWidth, "left") - carConfig.width / 2,
    right: getLanePosition(config.canvasWidth, "right") - carConfig.width / 2,
  };

  return {
    move(direction: "left" | "right") {
      position = direction;
      console.log("POSITION", position);
    },
    currentPosition() {
      return position;
    },
    tick(speed = 1) {
      if (myCar.top() !== config.canvasHeight - carConfig.height - 20) {
        // Move car!
        myCar.moveY(-1);
      }
      if (currentPosition !== carLanePosition[position]) {
        // TICK
        const diff = carLanePosition[position] - currentPosition;
        currentPosition +=
          speed * carConfig.baseSpeed * (diff / Math.abs(diff));
        const newDiff = carLanePosition[position] - currentPosition;
        if (diff / Math.abs(diff) !== newDiff / Math.abs(newDiff)) {
          // Car overshoot.
          currentPosition = carLanePosition[position];
        }
      }
      myCar.setLeft(currentPosition);
    },
  };
}
