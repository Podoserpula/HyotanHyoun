import React, { useState } from 'react';




const ShapeChanger = () => {
  const [heightFactor, setHeightFactor] = useState(1);
  const [widthFactor, setWidthFactor] = useState(1);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <main>
        <div className="w-full h-[440px] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 390 598"
            width="400"
            height="400"
            style={{
              transform: `scale(${widthFactor}, ${heightFactor})`,
              transformOrigin: 'center center',
            }}
          >
            <path
              d="M189.056 594C254.226 594 300.221 584.024 331.279 567.418C362.5 550.724 378.555 527.347 383.605 501.132C388.615 475.118 382.702 446.793 371.03 420.071C359.34 393.309 341.732 367.818 322.853 347.292C304.753 327.613 296.855 308.555 294.958 289.855C293.051 271.046 297.177 252.244 303.755 233.038C307.042 223.443 310.912 213.824 314.903 204.088C315.476 202.691 316.052 201.291 316.629 199.888C320.057 191.55 323.522 183.12 326.68 174.657C334.055 154.889 339.909 134.541 339.909 113.618C339.909 71.9616 323.532 44.2048 296.003 27.1037C268.809 10.2115 231.191 4.00001 189.056 4C146.108 4 109.746 11.3364 84.0205 28.848C58.0221 46.5453 43.4086 74.2755 43.4086 113.618C43.4086 133.464 49.1204 152.527 56.2514 171.142C59.0584 178.47 62.0439 185.639 65.0146 192.773C69.7147 204.06 74.3778 215.257 78.2384 226.852C84.4558 245.526 88.2502 264.381 86.0427 284.132C83.8414 303.828 75.6326 324.75 57.2949 347.489C19.504 394.35 -5.95823 455.693 7.75569 505.928C14.6683 531.25 31.4609 553.391 60.9077 569.107C90.2375 584.761 132.019 594 189.056 594Z"
              fill="white"
              stroke="black"
              strokeWidth="8" // ここでは固定値のまま
            />
          </svg>
        </div>

        <div className="mt-20 space-y-4">
          {/* 縦幅調整 */}
          <div className="flex justify-between items-center">
            <label>縦幅調整: {heightFactor.toFixed(2)}</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.01"
              value={heightFactor}
              onChange={(e) => setHeightFactor(Number(e.target.value))}
              className="slider"
            />
          </div>

          {/* 横幅調整 */}
          <div className="flex justify-between items-center">
            <label>横幅調整: {widthFactor.toFixed(2)}</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.01"
              value={widthFactor}
              onChange={(e) => setWidthFactor(Number(e.target.value))}
              className="slider"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShapeChanger;
