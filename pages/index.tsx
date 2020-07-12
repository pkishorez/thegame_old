import { useRef, useEffect, useState } from "react";
import { init, IStats } from "../components/game";

export default () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [step, setStep] = useState("step1");
  const [stats, setStats] = useState<IStats>({
    score: 0,
    speed: 0,
    volume: 0,
    soundRate: 1,
  });
  const [width, height] = [300, 500];
  return (
    <div>
      <style global jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
        }
        body {
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <style jsx>{`
        .main {
          width: 400px;
          box-sizing: border-box;
        }
        h1,
        .canvas,
        .stats {
          transition: 1s all;
        }
        h1 {
          font-size: 50px;
          font-family: Arial;
          color: white;
          text-shadow: 0px 0px 10px white;
          text-align: center;
          cursor: pointer;
          transform: scale(1.5, 1.5);
        }
        .stats {
          color: white;
          font-family: Arial;
          display: flex;
          padding: 10px;
          padding-bottom: 30px;
          cursor: pointer;
          transform: scale(0, 0);
        }
        .stats div {
          text-align: center;
          flex: 1 1 0;
        }
        .canvas {
          background-color: #222;
          margin: auto;
          display: block;
          height: 0px;
        }
        .step2 h1 {
          color: #333;
          text-shadow: 0px 0px 2px white;
          pointer-events: none;
          cursor: none;
          transform: scale(1, 1);
        }
        .step2 canvas {
          height: ${height}px;
        }
        .step2 .stats {
          transform: scale(1, 1);
        }
      `}</style>
      <div className={"main " + step}>
        <h1
          onClick={(e) => {
            init(ref.current, width, height, setStats);
            setStep("step2");
          }}
        >
          The Game
        </h1>
        <div className="stats">
          <div className="flex-grow">Score: {stats.score}</div>
          <div>
            Sound: {Math.round(stats.soundRate * 100)} /{" "}
            {Math.round(stats.volume * 100)}
          </div>
          <div>Speed: {Math.round((stats.speed * 100) / 100)}</div>
        </div>
        <canvas
          ref={ref}
          width={width}
          height={height}
          className="canvas"
        ></canvas>
      </div>
    </div>
  );
};
