export const getLanePosition = (
  canvasWidth: number,
  position: "left" | "right"
) => {
  return position === "left" ? canvasWidth / 4 : (canvasWidth * 3) / 4.0;
};

export const getRandomLane = () => {
  return Math.round(Math.random()) === 0 ? "left" : "right";
};

export const interpolate = (current, target, step = 0.01) => {
  if (current < target) {
    const value = current + step;
    if (value > target) {
      return target;
    }
    return value;
  } else if (current > target) {
    const value = current - step;
    if (value < target) {
      return target;
    }
    return value;
  }
  return current;
};
