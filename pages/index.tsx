import { useRef, useEffect, useState } from "react";
import { init, IStats } from "../components/game";

export default () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [step, setStep] = useState("step1");
  const [stats, setStats] = useState<IStats>({ score: 0, speed: 0, volume: 0 });
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
        h1,
        .canvas {
          transition: 1s all;
        }
        h1 {
          font-size: 50px;
          font-family: Arial;
          color: white;
          text-shadow: 0px 0px 10px white;
          text-align: center;
          cursor: pointer;
        }
        .stats {
          color: white;
          font-family: Arial;
          display: flex;
          padding: 10px;
          cursor: pointer;
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
        }
        .step2 canvas {
          height: ${height}px;
        }
      `}</style>
      <div className={step}>
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
          <div>Volume: {Math.round(stats.volume * 100)}</div>
          <div>Speed: {Math.ceil(stats.speed)}</div>
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
