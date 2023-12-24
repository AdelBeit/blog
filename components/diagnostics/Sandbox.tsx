import { useEffect } from "react";
``
const Sandbox = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      "drawingCanvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define the spawning area
    const spawnArea = {
      topRight: { x: canvas.width * 0.8, y: canvas.height * 0.2 },
      bottomLeft: { x: canvas.width * 0.2, y: canvas.height * 0.8 },
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function spawnRandomLine() {
      const lineWidth = getRandomInt(5, 20);
      const lineHeight = 5;

      const startX = getRandomInt(spawnArea.bottomLeft.x, spawnArea.topRight.x);
      const startY = getRandomInt(spawnArea.topRight.y, spawnArea.bottomLeft.y);

      const endX = getRandomInt(spawnArea.bottomLeft.x, spawnArea.topRight.x);
      const endY = getRandomInt(spawnArea.topRight.y, spawnArea.bottomLeft.y);

      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Spawn 50 random lines
    for (let i = 0; i < 50; i++) {
      spawnRandomLine();
    }
  }, []);
  return <canvas id="drawingCanvas"></canvas>;
  return (
    <div className="relative w-full h-full" id="sandbox_container">
      <div className="absolute w-full h-full z-[2]">
        {/* <img
            src="/assets/components/blog-card/card.svg"
            className="w-[100%] h-[100%]"
          /> */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 340 321"
          preserveAspectRatio="none"
          x="0"
          y="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="sandboxClip">
              <path
                d="M2 11.3294L11.3457 2H338L338 287.989L302.778 318.501L9.57111 318.998L2 307.604V11.3294Z"
                fill="#282828"
              />
            </clipPath>
          </defs>
          <path
            d="M2 11.3294L11.3457 2H338L338 287.989L302.778 318.501L9.57111 318.998L2 307.604V11.3294Z"
            fill="#282828"
          />
        </svg>
        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 340 321"
          preserveAspectRatio="none"
          x="0"
          y="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="blogCardForegroundClip">
              <path
                d="M2 11.3294L11.3457 2H338L338 287.989L302.778 318.501L9.57111 318.998L2 307.604V11.3294Z"
                fill="#282828"
              />
            </clipPath>
          </defs>
        </svg> */}
      </div>
      <div className="sandbox_content absolute flex flex-col left-0 right-0 z-[5] h-full pt-[10px] pb-[20px] mx-[5%] mr-[10%] gap-[20px]">
        <div className="w-full h-full overflow-y-scroll">
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};
export { Sandbox };
