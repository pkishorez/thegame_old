import { Canvas } from "./canvas";
import { initDividers } from "./components/divider";
import { initOpponents } from "./components/opponents";
import { initMyCar } from "./components/mycar";
import { Howl } from "howler";
import { interpolate } from "./components/utils";

const sound = new Howl({
  src: "/game.mp3",
});

const soundOnLoad = new Promise((resolve) => {
  sound.once("load", resolve);
});

let requestedAnimation;
export interface IStats {
  score: number;
  speed: number;
  volume: number;
  soundRate: number;
}
export const init = async (
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  onChange: (v: IStats) => void
) => {
  await soundOnLoad;
  requestedAnimation && cancelAnimationFrame(requestedAnimation);
  var currentSpeed = 2;
  var targetSpeed = 15;
  var speedInterpolator = 0.01;

  var currentVolume = 0.2;
  var targetVolume = 1;
  var volumeInterpolator = 0.01;

  sound.volume(currentVolume);
  sound.play();

  var currentSoundRate = 1;
  var targetSoundRate = 1;
  var soundRateInterpolator = 1;

  const speedController = (control, slices = 100) => {
    const [minSoundRate, maxSoundRate] = [0.5, 1];
    const [minSpeed, maxSpeed] = [2, 15];

    targetSoundRate = minSoundRate + (maxSoundRate - minSoundRate) * control;
    soundRateInterpolator = Math.abs(
      (targetSoundRate - currentSoundRate) / slices
    );

    targetSpeed = minSpeed + (maxSpeed - minSpeed) * control;
    speedInterpolator = Math.abs((targetSpeed - currentSpeed) / slices);
  };

  const playground = new Canvas(canvas, {
    width,
    height,
  });

  const dividers = initDividers(
    {
      gap: 50,
      color: "#fff",
      height: 80,
      width: 20,
      baseSpeed: 1,
    },
    playground.limitedConfig()
  );
  const opponents = initOpponents(
    {
      car: { height: 100, width: 50, color: "#ccc", baseSpeed: 2 },
      gap: 200,
    },
    playground.limitedConfig()
  );
  const myCar = initMyCar(
    { color: "cyan", height: 100, width: 50, baseSpeed: 4 },
    playground.limitedConfig()
  );
  let slowedDown = false;
  window.addEventListener("keydown", async (ev) => {
    if (ev.key === "ArrowLeft") myCar.move("left");
    if (ev.key === "ArrowRight") myCar.move("right");
    if (ev.key === "r") {
      speedController(0, 100);
      await sleepTimeout(1000);
      slowedDown = true;
      await sleepTimeout(10000);
      speedController(1, 100);
    }
  });
  let score = 0;
  playground.render();

  // Entrance...
  var sleepTimeout = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));
  entrance();
  async function entrance() {
    await sleepTimeout(1000);
    let requestedFrame;
    function entDividers() {
      dividers.tick(currentSpeed);
      requestedFrame = requestAnimationFrame(entDividers);
      playground.render();
    }
    entDividers();
    await sleepTimeout(1000);
    cancelAnimationFrame(requestedFrame);
    function entMyCar() {
      dividers.tick(currentSpeed);
      myCar.tick(currentSpeed / 2);
      requestedFrame = requestAnimationFrame(entMyCar);
      playground.render();
    }
    entMyCar();
    await sleepTimeout(3000);
    cancelAnimationFrame(requestedFrame);
    tick();
  }

  function tick() {
    dividers.tick(currentSpeed);
    opponents.tick(currentSpeed);
    const opponentLane = opponents.lastOpponent().lane;
    if (!slowedDown) {
      myCar.move(opponentLane === "left" ? "right" : "left");
    }
    myCar.tick(currentSpeed / 2);
    playground.render();
    requestedAnimation = requestAnimationFrame(tick);
    score++;
    currentSpeed = interpolate(currentSpeed, targetSpeed, speedInterpolator);
    currentVolume = interpolate(
      currentVolume,
      targetVolume,
      volumeInterpolator
    );
    sound.volume(currentVolume);
    currentSoundRate = interpolate(
      currentSoundRate,
      targetSoundRate,
      soundRateInterpolator
    );
    sound.rate(currentSoundRate);
    onChange({
      score,
      speed: currentSpeed,
      volume: currentVolume,
      soundRate: currentSoundRate,
    });
  }
};
