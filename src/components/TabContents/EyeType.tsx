"use client"
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";




// 左目の形
const leftEyeShapes = [
  {
    id: 1,
    title: "ノーマルひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      < path d="M126.844 102.016C131.923 102.016 136.592 101.144 140.047 99.6753C141.772 98.9423 143.265 98.031 144.348 96.9426C145.437 95.8481 146.187 94.4916 146.187 92.9328C146.187 91.3741 145.437 90.0175 144.348 88.923C143.265 87.8346 141.772 86.9234 140.047 86.1903C136.592 84.7219 131.923 83.8499 126.844 83.8499C121.764 83.8499 117.095 84.7219 113.64 86.1903C111.915 86.9234 110.422 87.8346 109.339 88.923C108.25 90.0175 107.5 91.3741 107.5 92.9328C107.5 94.4916 108.25 95.8481 109.339 96.9426C110.422 98.031 111.915 98.9423 113.64 99.6753C117.095 101.144 121.764 102.016 126.844 102.016Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg >
    )
  },
  {
    id: 2,
    title: "まん丸ひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="127" cy="93" r="13.5" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>
    )
  },
  {
    id: 3,
    title: "つりひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M111 79.3979C137.998 79.0568 141.033 95.0124 142.767 100.322C129.503 105.87 112.791 107.79 111 79.3979Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>
    )
  },
]
// 右目の形
const rightEyeShapes = [
  {
    id: 1,
    title: "ノーマルひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M172.726 102.016C177.806 102.016 182.475 101.144 185.93 99.6751C187.655 98.942 189.148 98.0308 190.231 96.9424C191.32 95.8479 192.07 94.4914 192.07 92.9326C192.07 91.3738 191.32 90.0173 190.231 88.9228C189.148 87.8344 187.655 86.9231 185.93 86.1901C182.475 84.7216 177.806 83.8496 172.726 83.8496C167.647 83.8496 162.978 84.7216 159.522 86.1901C157.797 86.9231 156.305 87.8344 155.222 88.9228C154.133 90.0173 153.383 91.3738 153.383 92.9326C153.383 94.4914 154.133 95.8479 155.222 96.9424C156.305 98.0308 157.797 98.942 159.522 99.6751C162.978 101.144 167.647 102.016 172.726 102.016Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg >
    )
  },
  {
    id: 2,
    title: "まん丸ひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="173" cy="93" r="13.5" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>


    )
  },
  {
    id: 3,
    title: "つりひょうんアイズ",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M188.808 79.3982C161.81 79.057 158.775 95.0127 157.041 100.322C170.305 105.87 187.017 107.79 188.808 79.3982Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>
    )
  },
]



// 左の虹彩の形
const leftIrisShapes = [
  {
    id: 1,
    title: "ノーマル虹彩",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="127" cy="93" r="6.5" fill="#222222" stroke="#222222" strokeWidth="3" />
    </svg>
    ),
  }
]
// 右の虹彩の形
const rightIrisShapes = [
  {
    id: 1,
    title: "ノーマル虹彩",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="173" cy="93" r="6.5" fill="#222222" stroke="#222222" strokeWidth="3" />
    </svg>
    ),
  }
]




export default function EyeType() {
  const [direction, setDirection] = useState(0);





  // 左目の輪郭
  const [selectedLeftEye, setSlectedLeftEye] = useState(leftEyeShapes[0]);
  const [leftEyeColor, setLeftEyeColor] = useState("#FAFAFA");

  const handleLeftEyeSelect = (image: typeof leftEyeShapes[0], index: number) => {
    const currentIndex = leftEyeShapes.findIndex((img) => img.id === selectedLeftEye.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedLeftEye(image);
  }

  const handleLeftEyeColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeftEyeColor(event.target.value);
  }




  // 右目の輪郭
  const [selectedRightEye, setSlectedRightEye] = useState(rightEyeShapes[0]);
  const [rightEyeColor, setRightEyeColor] = useState("#FAFAFA");

  const handleRightEyeSelect = (image: typeof rightEyeShapes[0], index: number) => {
    const currentIndex = rightEyeShapes.findIndex((img) => img.id === selectedRightEye.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedRightEye(image);
  }

  const handleRightEyeColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRightEyeColor(event.target.value);
  }





  // 左目の瞳孔
  const [selectedLeftIris, setSelectedLeftIris] = useState(leftIrisShapes[0]);
  const [leftIrisColor, setLeftIrisColor] = useState("#222222");
  const [leftIrisSize, setLeftIrisSize] = useState(6.5); // デフォルトのサイズ
  const [leftIrisHeight, setLeftIrisHeight] = useState(1); // 高さのデフォルト値
  const [leftIrisWidth, setLeftIrisWidth] = useState(1);  // 幅のデフォルト値

  const handleLeftIrisSelect = (image: typeof leftIrisShapes[0], index: number) => {
    const currentIndex = leftIrisShapes.findIndex((img) => img.id === selectedLeftIris.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSelectedLeftIris(image);
  }

  const handleLeftIrisColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeftIrisColor(event.target.value);
  }

  // 虹彩のサイズ変更
  const handleLeftIrisSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeftIrisSize(parseFloat(event.target.value)); // サイズを変更
  };

  // 虹彩の高さ変更
  const handleLeftIrisHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeftIrisHeight(parseFloat(event.target.value));
  };

  // 虹彩の幅変更
  const handleLeftIrisWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeftIrisWidth(parseFloat(event.target.value));
  };


  // 右目の瞳孔
  const [selectedRightIris, setSelectedRightIris] = useState(rightIrisShapes[0]);
  const [rightIrisColor, setRightIrisColor] = useState("#222222");
  const [rightIrisSize, setRightIrisSize] = useState(6.5); // デフォルトのサイズ

  const handleRightIrisSelect = (image: typeof rightIrisShapes[0], index: number) => {
    const currentIndex = rightIrisShapes.findIndex((img) => img.id === selectedRightIris.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSelectedRightIris(image);
  }

  const handleRightIrisColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRightIrisColor(event.target.value);
  }

  // 虹彩のサイズ変更
  const handleRightIrisSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRightIrisSize(parseFloat(event.target.value)); // サイズを変更
  };


  return (

    <div className="flex flex-col space-y-4">

      {/* プレビュー */}

      <div className="relative w-full aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden ">


        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedLeftEye.id}
            className="absolute w-full h-full "
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              {React.cloneElement(selectedLeftEye.svg, {
                children: React.Children.map(selectedLeftEye.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: leftEyeColor,
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedRightEye.id}
            className="absolute w-full h-full "
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              {React.cloneElement(selectedRightEye.svg, {
                children: React.Children.map(selectedRightEye.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: rightEyeColor,
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>



        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedLeftIris.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              {React.cloneElement(selectedLeftIris.svg, {
                children: React.Children.map(selectedLeftIris.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: leftIrisColor,
                    r: leftIrisSize,
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedRightIris.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div>
              {React.cloneElement(selectedRightIris.svg, {
                children: React.Children.map(selectedRightIris.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: rightIrisColor,
                    r: rightIrisSize,
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>



      {/* 選択 */}

      <div>







        <div>
          <h3>アイカラーを選んでください</h3>
          <input
            type="color"
            value={leftEyeColor}
            onChange={handleLeftEyeColorChange}
          />
        </div>
        <div className="flex justify-center">

          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {leftEyeShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleLeftEyeSelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedLeftEye.id === image.id
                  ? "border-blue-500 scale-105"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                aria-label={`画像${image.title}を選択`}
              >
                <div className="flex justify-center items-center w-full h-full">
                  {image.svg}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-medium">{selectedLeftEye.title}</h2>
        </div>


        <div>
          <h3>アイカラーを選んでください</h3>
          <input
            type="color"
            value={rightEyeColor}
            onChange={handleRightEyeColorChange}
          />
        </div>
        <div className="flex justify-center">

          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {rightEyeShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleRightEyeSelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedRightEye.id === image.id
                  ? "border-blue-500 scale-105"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                aria-label={`画像${image.title}を選択`}
              >
                <div className="flex justify-center items-center w-full h-full">
                  {image.svg}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-medium">{selectedRightEye.title}</h2>
        </div>




        <div>
          <h3>アイカラーを選んでください</h3>
          <input
            type="color"
            value={leftIrisColor}
            onChange={handleLeftIrisColorChange}
          />
        </div>

        {/* 虹彩の大きさ */}
        <div>
          <h3>虹彩の大きさを変更</h3>
          <input
            type="range"
            min="0"
            max="9"
            value={leftIrisSize}
            step="0.1"
            onChange={handleLeftIrisSizeChange}
            className="w-full"
          />
          {/* 虹彩の高さ */}
          <div>
            <h3>虹彩の高さを変更</h3>
            <input
              type="range"
              min="0.5"
              max="9"
              value={leftIrisHeight}
              step="0.1"
              onChange={handleLeftIrisHeightChange}
              className="w-full"
            />
            <div className="text-center">{`高さ: ${leftIrisHeight.toFixed(1)}`}</div>
          </div>

          {/* 虹彩の幅 */}
          <div>
            <h3>虹彩の幅を変更</h3>
            <input
              type="range"
              min="0.5"
              max="2"
              value={leftIrisWidth}
              step="0.1"
              onChange={handleLeftIrisWidthChange}
              className="w-full"
            />
            <div className="text-center">{`幅: ${leftIrisWidth.toFixed(1)}`}</div>
          </div>
          <div className="text-center">{`サイズ: ${leftIrisSize.toFixed(1)}`}</div>
        </div>
        <div className="flex justify-center items-center">







          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {leftIrisShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleLeftIrisSelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedLeftIris.id === image.id
                  ? "border-blue-500 scale-105"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                aria-label={`画像${image.title}を選択`}
              >
                <div className="flex justify-center items-center w-full h-full">
                  {image.svg}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-medium">{selectedLeftIris.title}</h2>
        </div>





        <div>
          <h3>アイカラーを選んでください</h3>
          <input
            type="color"
            value={rightIrisColor}
            onChange={handleRightIrisColorChange}
          />
        </div>
        {/* 虹彩の大きさ */}
        <div>
          <h3>虹彩の大きさを変更</h3>
          <input
            type="range"
            min="0"
            max="9"
            value={rightIrisSize}
            step="0.1"
            onChange={handleRightIrisSizeChange}
            className="w-full"
          />
          <div className="text-center">{`サイズ: ${leftIrisSize.toFixed(1)}`}</div>
        </div>
        <div className="flex justify-center items-center">

          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {rightIrisShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleRightIrisSelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedRightIris.id === image.id
                  ? "border-blue-500 scale-105"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                aria-label={`画像${image.title}を選択`}
              >
                <div className="flex justify-center items-center w-full h-full">
                  {image.svg}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-medium">{selectedRightIris.title}</h2>
        </div>
      </div>
    </div>
  );
}
