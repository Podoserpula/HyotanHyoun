"use client"
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";





const bodyShapes = [
  {
    id: 1,
    title: "ノーマルひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.147 283.346C176.414 283.346 197.16 278.868 211.223 271.349C225.389 263.774 232.73 253.125 235.036 241.15C237.319 229.3 234.618 216.454 229.354 204.402C224.079 192.326 216.14 180.837 207.634 171.588C199.615 162.869 196.148 154.467 195.315 146.253C194.475 137.97 196.289 129.657 199.223 121.089C200.689 116.81 202.416 112.516 204.205 108.153C204.461 107.528 204.719 106.902 204.977 106.274C206.513 102.537 208.072 98.7464 209.491 94.941C212.806 86.0554 215.465 76.8414 215.465 67.337C215.465 48.4465 208.019 35.7671 195.453 27.9613C183.097 20.286 166.077 17.5 147.147 17.5C127.839 17.5 111.375 20.7943 99.6736 28.7592C87.8021 36.8402 81.1625 49.5029 81.1625 67.337C81.1625 76.3627 83.7599 85.0041 86.9653 93.3716C88.2397 96.6983 89.5843 99.9263 90.9177 103.127C93.0147 108.162 95.0841 113.13 96.8091 118.311C99.5788 126.63 101.249 134.97 100.275 143.681C99.3053 152.357 95.6888 161.61 87.5429 171.711C70.554 192.777 58.972 220.508 65.2082 243.352C68.3611 254.902 76.0223 264.977 89.3796 272.106C102.664 279.196 121.518 283.346 147.147 283.346Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />
    </svg>

    )
  },
  {
    id: 2,
    title: "くびれすぎひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M156.989 133.5C156.989 122.676 159.535 115.022 163.245 109.129C166.984 103.191 172.002 98.8795 177.258 94.8609C178.308 94.058 179.376 93.2634 180.448 92.466C189.828 85.4911 199.489 78.3067 199.489 63.5C199.489 47.5774 191.862 36.2318 181.51 28.9547C171.243 21.7378 158.297 18.5 147.295 18.5C136.501 18.5 123.382 20.4013 112.881 27.0091C102.203 33.7284 94.491 45.163 94.491 63.5C94.491 72.8379 97.3536 79.4874 101.694 84.8071C105.508 89.4807 110.456 93.0955 115.201 96.5615C115.724 96.9429 116.243 97.3225 116.759 97.7016C122.064 101.603 127.063 105.529 130.785 110.967C134.46 116.335 136.989 123.334 136.989 133.5C136.989 144.001 135.417 149.208 133.071 152.188C130.742 155.146 127.316 156.386 121.908 157.977C121.555 158.081 121.196 158.185 120.83 158.292C115.732 159.78 109.423 161.622 102.356 165.801C94.7644 170.291 86.3971 177.408 77.4742 189.517C69.3796 200.502 65.5411 211.789 65.5003 222.592C65.4595 233.399 69.2206 243.546 76.0273 252.23C89.6114 269.56 115.224 281 147.295 281C181.853 281 208.865 270.896 223.403 254.204C230.703 245.824 234.811 235.82 235.083 224.773C235.355 213.749 231.807 201.863 224.103 189.665C216.386 177.448 208.103 170.416 199.957 166.096C192.257 162.013 184.782 160.419 178.466 159.072C178.145 159.003 177.827 158.935 177.513 158.868C170.811 157.432 165.927 156.199 162.54 152.977C159.284 149.881 156.989 144.47 156.989 133.5Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />
    </svg>
    )
  },
  {
    id: 3,
    title: "まくらひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M153.841 287.5C170.652 287.5 183.307 283.876 192.765 277.538C202.236 271.192 208.273 262.277 212.112 252.113C219.013 233.838 218.93 211.068 218.856 191C218.849 188.97 218.841 186.967 218.841 185V72.5C218.841 53.6291 211.007 38.5411 198.24 28.2221C185.526 17.945 168.06 12.5 148.841 12.5C129.246 12.5 112.415 18.4258 100.446 28.9483C88.4509 39.4944 81.5019 54.5225 81.5019 72.337C81.5019 82.5323 81.5019 91.7677 81.502 101.162C81.5021 123.325 81.5023 146.373 81.5017 185C81.5017 185.983 81.5013 186.963 81.5008 187.941C81.4951 200.602 81.4896 212.82 82.4177 224.034C83.4176 236.116 85.5133 247.239 89.9819 256.693C94.4809 266.212 101.361 273.983 111.772 279.333C122.126 284.653 135.816 287.5 153.841 287.5Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />
    </svg>
    )
  },
  {
    id: 4,
    title: "砂時計ひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.332 272.5C187.096 272.5 211.853 268.116 225.898 260.638C232.99 256.862 237.533 252.2 239.76 246.753C241.985 241.312 241.753 235.447 239.995 229.543C236.52 217.878 226.852 205.305 216.285 193.599C210.961 187.701 205.327 181.939 200.005 176.538C199.366 175.891 198.733 175.248 198.105 174.612C193.481 169.925 189.166 165.552 185.524 161.592C177.759 153.15 176.276 144.572 178.284 135.87C180.341 126.953 186.096 117.801 193.146 108.613C196.651 104.046 200.419 99.539 204.137 95.0927L204.142 95.0877L204.143 95.0856C207.848 90.6556 211.509 86.2775 214.729 82.038C217.947 77.8017 220.787 73.6254 222.828 69.5779C224.863 65.5417 226.184 61.4781 226.184 57.5004C226.184 49.9665 223.536 44.1331 218.825 39.7681C214.205 35.4874 207.771 32.7732 200.417 31.0069C185.815 27.4999 166.492 27.5 147.578 27.5L147.332 27.5H147.331L147.057 27.5C128.168 27.4999 109.511 27.4998 95.5721 31.0133C88.5376 32.7865 82.4294 35.5153 78.064 39.8218C73.6211 44.2047 71.1839 50.0244 71.1839 57.5001C71.1839 65.2864 75.982 73.3323 81.873 81.2604C84.6317 84.9729 87.7346 88.7889 90.8776 92.6542C91.1452 92.9833 91.4131 93.3128 91.6811 93.6426C95.1123 97.8648 98.5739 102.156 101.768 106.546C108.183 115.361 113.329 124.324 114.934 133.471C116.51 142.457 114.706 151.835 106.738 161.715C103.731 165.444 100.393 169.414 96.9308 173.533C90.8669 180.747 84.4195 188.417 78.6937 196.042C69.7011 208.018 62.0119 220.469 60.0101 231.84C58.9958 237.601 59.4177 243.21 61.9752 248.34C64.5302 253.466 69.0848 257.848 75.8584 261.401C89.2899 268.446 111.969 272.5 147.332 272.5Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />
    </svg>
    )
  },
  {
    id: 5,
    title: "達磨ひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.098 284.5C202.065 284.5 236.51 265.542 252.596 239.566C268.674 213.604 265.993 181.27 248 155.566C230.583 130.685 223.28 114.734 220.26 102.026C217.927 92.2138 218.113 84.309 218.323 75.3268C218.387 72.6218 218.453 69.819 218.453 66.837C218.453 53.2027 210.005 40.0797 197.095 30.4765C184.138 20.8386 166.4 14.5 147.098 14.5C127.384 14.5 110.893 21.6003 99.3112 31.6542C87.7818 41.6623 80.9515 54.7622 80.9515 66.837C80.9515 68.3679 80.9627 69.8575 80.9736 71.3207C81.0434 80.6496 81.1052 88.9076 78.2195 99.9768C74.8726 112.815 67.5179 129.527 51.3264 155.684C34.6712 182.59 32.5156 214.851 47.8501 240.471C63.2125 266.139 95.727 284.5 147.098 284.5Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />
    </svg>
    )
  },
  {
    id: 6,
    title: "スリムひょうん",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.983 283.35C169.363 283.35 182.559 278.793 191.53 271.039C200.508 263.279 204.936 252.593 206.32 240.976C209.071 217.889 199.908 190.447 189.438 172.047C179.554 154.676 180.542 137.978 184.183 120.798C185.239 115.814 186.474 110.961 187.728 106.039C188.678 102.306 189.639 98.5326 190.539 94.6305C192.585 85.7657 194.201 76.6719 194.201 67.3378C194.201 48.8644 189.742 36.2725 181.823 28.3209C173.899 20.3649 162.957 17.5 150.983 17.5C138.713 17.5 128.117 20.9097 120.633 29.1446C113.19 37.3348 109.208 49.8813 109.208 67.3378C109.208 76.1876 110.784 84.7054 112.763 93.0549C113.541 96.3368 114.368 99.5491 115.192 102.746C116.495 107.806 117.789 112.828 118.86 118.027C122.294 134.702 123.136 152.002 113.075 172.167C102.544 193.275 95.5361 220.721 99.3179 243.114C101.218 254.366 105.874 264.494 114.34 271.797C122.815 279.109 134.83 283.35 150.983 283.35Z" fill="white" stroke="black" strokeWidth="5" />
    </svg>
    )
  },

]


const eyesShapes = [
  {
    id: 1,
    title: "ノーマルひょうんアイズ",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M117.22 83.8263C124.512 83.8263 131.232 82.575 136.222 80.4543C138.713 79.3959 140.889 78.0717 142.479 76.4737C144.08 74.8655 145.211 72.8421 145.211 70.4935C145.211 68.1448 144.08 66.1214 142.479 64.5133C140.889 62.9153 138.713 61.591 136.222 60.5327C131.232 58.4119 124.512 57.1606 117.22 57.1606C109.928 57.1606 103.208 58.4119 98.2173 60.5327C95.7269 61.591 93.5507 62.9153 91.9602 64.5133C90.3597 66.1214 89.229 68.1448 89.229 70.4935C89.229 72.8421 90.3597 74.8655 91.9602 76.4737C93.5507 78.0717 95.7269 79.3959 98.2173 80.4543C103.208 82.575 109.928 83.8263 117.22 83.8263Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />

      <path d="M182.767 83.8263C190.059 83.8263 196.779 82.575 201.769 80.4543C204.26 79.3959 206.436 78.0717 208.026 76.4737C209.627 74.8655 210.757 72.8421 210.757 70.4935C210.757 68.1448 209.627 66.1214 208.026 64.5133C206.436 62.9153 204.26 61.591 201.769 60.5327C196.779 58.4119 190.059 57.1606 182.767 57.1606C175.474 57.1606 168.754 58.4119 163.764 60.5327C161.274 61.591 159.098 62.9153 157.507 64.5133C155.907 66.1214 154.776 68.1448 154.776 70.4935C154.776 72.8421 155.907 74.8655 157.507 76.4737C159.098 78.0717 161.274 79.3959 163.764 80.4543C168.754 82.575 175.474 83.8263 182.767 83.8263Z" fill="white" stroke="#0D0D0D" strokeWidth="5" />

    </svg>

    )
  },
  {
    id: 2,
    title: "まん丸ひょうんアイズ",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="119.5" cy="76.5" r="20" fill="white" stroke="black" strokeWidth="5" />
      <circle cx="179.5" cy="76.5" r="20" fill="white" stroke="black" strokeWidth="5" />

    </svg>
    )
  },
  {
    id: 3,
    title: "かまぼこひょうんアイズ",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M145 81C128.958 47.6668 106.042 47.6668 90 80.9994L117.5 80.9997L145 81Z" fill="white" />
      <path d="M90 80.9994L87.7473 79.9153C87.3745 80.69 87.4259 81.6019 87.8834 82.3298C88.3408 83.0577 89.1402 83.4994 90 83.4994L90 80.9994ZM145 81L145 83.5C145.86 83.5 146.659 83.0583 147.117 82.3304C147.574 81.6025 147.626 80.6906 147.253 79.9159L145 81ZM117.5 80.9997L117.5 83.4997L117.5 83.4997L117.5 80.9997ZM92.2527 82.0836C100.183 65.6058 109.294 58.4999 117.5 58.5C125.706 58.5001 134.817 65.6061 142.747 82.0841L147.253 79.9159C139.141 63.0607 128.773 53.5001 117.5 53.5C106.227 53.4999 95.8589 63.0604 87.7473 79.9153L92.2527 82.0836ZM145 78.5L117.5 78.4997L117.5 83.4997L145 83.5L145 78.5ZM117.5 78.4997L90 78.4994L90 83.4994L117.5 83.4997L117.5 78.4997Z" fill="black" />
      <path d="M210 81C193.958 47.6668 171.042 47.6668 155 80.9994L182.5 80.9997L210 81Z" fill="white" />
      <path d="M155 80.9994L152.747 79.9153C152.374 80.69 152.426 81.6019 152.883 82.3298C153.341 83.0577 154.14 83.4994 155 83.4994L155 80.9994ZM210 81L210 83.5C210.86 83.5 211.659 83.0583 212.117 82.3304C212.574 81.6025 212.626 80.6906 212.253 79.9159L210 81ZM182.5 80.9997L182.5 83.4997L182.5 83.4997L182.5 80.9997ZM157.253 82.0836C165.183 65.6058 174.294 58.4999 182.5 58.5C190.706 58.5001 199.817 65.6061 207.747 82.0841L212.253 79.9159C204.141 63.0607 193.773 53.5001 182.5 53.5C171.227 53.4999 160.859 63.0604 152.747 79.9153L157.253 82.0836ZM210 78.5L182.5 78.4997L182.5 83.4997L210 83.5L210 78.5ZM182.5 78.4997L155 78.4994L155 83.4994L182.5 83.4997L182.5 78.4997Z" fill="black" />
      <circle cx="117.5" cy="68.5" r="10" fill="black" stroke="black" strokeWidth="5" />
      <circle cx="182.5" cy="68.5" r="10" fill="black" stroke="black" strokeWidth="5" />
    </svg>

    )
  },
  {
    id: 4,
    title: "つりひょうんアイズ",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M92 58.5688C130.568 58.0814 134.904 80.8752 137.381 88.4601C118.432 96.3854 94.5582 99.1282 92 58.5688Z" fill="white" stroke="black" strokeWidth="5" />
      <path d="M207.439 58.5688C168.871 58.0814 164.535 80.8752 162.058 88.4601C181.007 96.3854 204.881 99.1282 207.439 58.5688Z" fill="white" stroke="black" strokeWidth="5" />
      <path d="M109.72 78.2832C109.72 74.5658 110.729 71.3134 112.229 69.0634C113.74 66.7958 115.554 65.7832 117.22 65.7832C118.885 65.7832 120.699 66.7958 122.211 69.0634C123.711 71.3134 124.72 74.5658 124.72 78.2832C124.72 82.0006 123.711 85.253 122.211 87.5031C120.699 89.7706 118.885 90.7832 117.22 90.7832C115.554 90.7832 113.74 89.7706 112.229 87.5031C110.729 85.253 109.72 82.0006 109.72 78.2832Z" fill="black" stroke="black" strokeWidth="5" />
      <path d="M189.72 78.2832C189.72 74.5658 188.711 71.3134 187.211 69.0634C185.699 66.7958 183.885 65.7832 182.22 65.7832C180.554 65.7832 178.74 66.7958 177.229 69.0634C175.729 71.3134 174.72 74.5658 174.72 78.2832C174.72 82.0006 175.729 85.253 177.229 87.5031C178.74 89.7706 180.554 90.7832 182.22 90.7832C183.885 90.7832 185.699 89.7706 187.211 87.5031C188.711 85.253 189.72 82.0006 189.72 78.2832Z" fill="black" stroke="black" strokeWidth="5" />
    </svg>

    )
  },
]

const irisShapes = [
  {
    id: 1,
    title: "ノーマル虹彩",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">

      <ellipse cx="117.222" cy="70.6458" rx="12.3812" ry="14.342" fill="#0D0D0D" />

      <ellipse cx="182.767" cy="70.6458" rx="12.3812" ry="14.342" fill="#0D0D0D" />
    </svg>),
  },
  {
    id: 2,
    title: "まん丸虹彩",
    svg: (<svg width="445" height="445" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">


      <circle cx="119.5" cy="76.5" r="10" fill="black" stroke="black" strokeWidth="5" />
      <circle cx="179.5" cy="76.5" r="10" fill="black" stroke="black" strokeWidth="5" />
    </svg>),
  }
]




export default function ImageSwap() {
  const [selectedShape, setSlectedShape] = useState(bodyShapes[0]);
  const [direction, setDirection] = useState(0);
  const [selectedEyes, setSlectedEyes] = useState(eyesShapes[0]);
  const [selectedIris, setSlectedIris] = useState(irisShapes[0]);
  const [bodyColor, setBodyColor] = useState("#FFFFFF"); //　体型の色
  const [eyesColor, setEyesColor] = useState("#FFFFFF"); // 目型の色
  const [irisColor, setIrisColor] = useState("#FFFFFF"); // 目型の色
  const [bgColor, setBgColor] = useState("#FFFDDD");




  const handleShapeSelect = (image: typeof bodyShapes[0], index: number) => {
    const currentIndex = bodyShapes.findIndex((img) => img.id === selectedShape.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedShape(image);
  };

  const handleEyesSelect = (image: typeof eyesShapes[0], index: number) => {
    const currentIndex = eyesShapes.findIndex((img) => img.id === selectedEyes.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedEyes(image);
  }

  const handleIrisSelect = (image: typeof irisShapes[0], index: number) => {
    const currentIndex = irisShapes.findIndex((img) => img.id === selectedIris.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedIris(image);
  }



  const handleBodyColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBodyColor(event.target.value); // 色を更新
  };

  const handleEyesColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEyesColor(event.target.value);
  }

  const handleIrisColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIrisColor(event.target.value);
  }


  return (
    <div className="flex flex-col space-y-4">

      {/* プレビュー */}

      <div className="relative w-full aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedShape.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ marginBottom: "20px" }}>
              {/* fillを動的に変更 */}
              {React.cloneElement(selectedShape.svg, {
                children: React.Children.map(selectedShape.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: bodyColor, // 直接fillを変更
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>


        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedEyes.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ marginBottom: "20px" }}>
              {/* fillを動的に変更 */}
              {React.cloneElement(selectedEyes.svg, {
                children: React.Children.map(selectedEyes.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: eyesColor, // 直接fillを変更
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>


        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedIris.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{ marginBottom: "20px" }}>
              {/* fillを動的に変更 */}
              {React.cloneElement(selectedIris.svg, {
                children: React.Children.map(selectedIris.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: irisColor, // 直接fillを変更
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
          <h3>ボディカラーを選んでください</h3>
          <input
            type="color"
            value={bodyColor} // 現在のカラー
            onChange={handleBodyColorChange} // 色が変更されたときに呼ばれる
          />

        </div>
        <div className="flex justify-center items-center">

          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {bodyShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleShapeSelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedShape.id === image.id
                  ? "border-blue-500 scale-110 transform"
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
      </div>

      <div className="text-center mt-2">
        <h2 className="text-lg font-medium">{selectedShape.title}</h2>
      </div>



      <div>
        <h3>アイカラーを選んでください</h3>
        <input
          type="color"
          value={eyesColor} // 現在のカラー
          onChange={handleEyesColorChange} // 色が変更されたときに呼ばれる
        />

      </div>
      <div className="flex justify-center items-center">

        <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
          {eyesShapes.map((image, index) => (
            <button
              key={image.id}
              onClick={() => handleEyesSelect(image, index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedEyes.id === image.id
                ? "border-blue-500 scale-110 transform"
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
        <h2 className="text-lg font-medium">{selectedEyes.title}</h2>



      </div>


      <div>
        <h3>アイカラーを選んでください</h3>
        <input
          type="color"
          value={irisColor} // 現在のカラー
          onChange={handleIrisColorChange} // 色が変更されたときに呼ばれる
        />

      </div>
      <div className="flex justify-center items-center">

        <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
          {irisShapes.map((image, index) => (
            <button
              key={image.id}
              onClick={() => handleIrisSelect(image, index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedIris.id === image.id
                ? "border-blue-500 scale-110 transform"
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
        <h2 className="text-lg font-medium">{selectedIris.title}</h2>



      </div>

    </div>
  );
}
