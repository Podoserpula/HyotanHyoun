"use client"
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";




// 体型
const bodyShapes = [
  {
    id: 1,
    title: "ノーマルひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.803 243.092C168.269 243.092 182.745 239.96 192.539 234.724C202.393 229.454 207.481 222.061 209.08 213.758C210.665 205.53 208.792 196.591 205.119 188.182C201.439 179.757 195.898 171.738 189.96 165.281C184.318 159.147 181.932 153.225 181.434 147.425C180.932 141.581 182.335 135.723 184.521 129.707C185.613 126.704 186.888 123.691 188.201 120.635C188.352 120.284 188.503 119.932 188.655 119.579C189.818 116.877 190.996 114.14 192.065 111.39C194.479 105.177 196.397 98.7541 196.397 92.1359C196.397 78.9586 190.94 70.174 181.979 64.7746C173.142 59.4504 161.04 57.5 147.803 57.5C134.308 57.5 122.842 59.8038 114.712 65.3381C106.48 70.942 101.864 79.7231 101.864 92.1359C101.864 98.4075 103.669 104.422 105.909 110.271C106.795 112.584 107.734 114.839 108.667 117.078C110.138 120.611 111.594 124.106 112.804 127.738C114.748 133.58 115.928 139.457 115.241 145.604C114.556 151.731 112.002 158.252 106.275 165.355C94.4006 180.079 86.3533 199.406 90.6869 215.281C92.8746 223.295 98.1897 230.293 107.483 235.254C116.733 240.19 129.886 243.092 147.803 243.092Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },
  {
    id: 2,
    title: "くびれすぎひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M146.071 241.5C119.346 241.5 100.457 233.548 90.2408 221.665C79.9653 209.713 78.6859 194.029 86.7424 179.281C94.8261 164.483 108.978 159.08 120.616 154.78C120.814 154.707 121.012 154.634 121.208 154.562C126.868 152.472 131.785 150.657 135.359 148.181C138.941 145.7 141.036 142.652 141.036 138C141.036 133.318 138.842 129.825 135.308 126.77C131.969 123.883 127.571 121.504 122.908 118.981C122.551 118.787 122.192 118.593 121.832 118.398C116.857 115.7 111.676 112.794 107.757 108.966C103.781 105.083 101.059 100.209 101.059 93.6359C101.059 80.9382 106.626 72.0654 115.126 66.4312C123.548 60.8487 134.751 58.5 146.071 58.5C158.345 58.5 171.511 59.6866 181.649 64.6465C186.746 67.1402 191.121 70.6074 194.214 75.3885C197.31 80.1741 199.059 86.1775 199.059 93.6359C199.059 101.294 196.172 106.716 191.852 110.81C187.601 114.839 181.99 117.555 176.605 119.95C175.794 120.31 174.991 120.663 174.197 121.011C169.613 123.023 165.355 124.891 162.046 127.274C158.257 130.003 155.931 133.255 155.931 138C155.931 140.493 156.402 142.435 157.213 144.015C158.023 145.594 159.215 146.894 160.776 148.041C163.897 150.332 168.299 151.895 173.711 153.815C173.847 153.864 173.984 153.912 174.122 153.961C185.195 157.892 199.481 163.139 211.266 179.109C217.19 187.137 219.534 195.152 218.698 202.689C217.863 210.218 213.879 217.061 207.545 222.799C194.916 234.242 172.751 241.5 146.071 241.5Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },
  {
    id: 3,
    title: "まくらひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M152.744 246C164.476 246 173.283 243.471 179.852 239.069C186.429 234.662 190.627 228.469 193.3 221.391C198.113 208.644 198.056 192.754 198.005 178.696C197.999 177.277 197.994 175.877 197.994 174.5V95.75C197.994 82.6163 192.545 72.126 183.667 64.9499C174.82 57.7989 162.653 54 149.244 54C135.577 54 123.858 58.1327 115.533 65.4516C107.192 72.7845 102.357 83.2348 102.357 95.6359C102.357 102.773 102.357 109.237 102.357 115.813C102.357 131.327 102.357 147.461 102.357 174.5C102.357 175.187 102.356 175.873 102.356 176.556C102.352 185.422 102.348 193.964 102.997 201.803C103.696 210.248 105.159 218 108.269 224.578C111.397 231.196 116.175 236.593 123.41 240.311C130.611 244.011 140.15 246 152.744 246Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },
  {
    id: 4,
    title: "砂時計ひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M148.263 235.5C176.093 235.5 193.369 232.43 203.142 227.226C208.07 224.602 211.2 221.377 212.731 217.633C214.261 213.892 214.107 209.847 212.887 205.751C210.473 197.645 203.742 188.881 196.344 180.687C192.622 176.563 188.682 172.533 184.956 168.752C184.509 168.299 184.065 167.849 183.625 167.403C180.389 164.123 177.366 161.059 174.814 158.284C169.32 152.311 168.263 146.221 169.686 140.053C171.138 133.755 175.196 127.313 180.135 120.877C182.591 117.676 185.232 114.518 187.833 111.407L187.838 111.401C190.432 108.299 192.991 105.238 195.242 102.275C197.491 99.3151 199.468 96.4056 200.887 93.592C202.302 90.7852 203.21 87.9807 203.21 85.2503C203.21 80.0424 201.382 76.0268 198.138 73.0211C194.949 70.0659 190.492 68.1796 185.364 66.9479C175.172 64.5 161.669 64.5 148.411 64.5L148.263 64.5H148.263L148.097 64.5C134.855 64.4999 121.819 64.4999 112.092 66.9517C107.19 68.1875 102.962 70.0826 99.9511 73.0532C96.8934 76.0697 95.2095 80.0771 95.2095 85.2501C95.2095 90.6094 98.5172 96.1813 102.643 101.733C104.57 104.327 106.739 106.994 108.94 109.701C109.127 109.931 109.314 110.161 109.502 110.392C111.903 113.348 114.33 116.356 116.57 119.435C121.067 125.614 124.697 131.926 125.831 138.386C126.947 144.75 125.663 151.388 120.042 158.358C117.93 160.976 115.591 163.759 113.166 166.644C108.925 171.689 104.421 177.046 100.416 182.38C94.1227 190.761 88.7741 199.435 87.384 207.331C86.681 211.325 86.9762 215.194 88.7371 218.727C90.4966 222.256 93.6403 225.29 98.3478 227.76C107.693 232.661 123.517 235.5 148.263 235.5Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },
  {
    id: 5,
    title: "達磨ひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M148.076 243.75C186.5 243.75 210.513 230.5 221.713 212.415C232.907 194.337 231.049 171.812 218.503 153.89C206.303 136.461 201.171 125.265 199.046 116.326C197.406 109.423 197.537 103.85 197.684 97.5556C197.729 95.666 197.775 93.7112 197.775 91.6359C197.775 82.1972 191.923 73.0775 182.925 66.3841C173.899 59.67 161.535 55.25 148.076 55.25C134.338 55.25 122.853 60.1977 114.79 67.1967C106.758 74.1683 102.024 83.2742 102.024 91.6359C102.024 92.7052 102.032 93.7464 102.04 94.77C102.089 101.301 102.132 107.115 100.103 114.897C97.7516 123.918 92.5888 135.641 81.249 153.961C69.6309 172.729 68.1392 195.211 78.8175 213.052C89.5125 230.921 112.175 243.75 148.076 243.75Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },
  {
    id: 6,
    title: "スリムひょうん",
    svg: (<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.768 243.222C163.594 243.222 172.766 240.043 178.987 234.666C185.213 229.285 188.292 221.869 189.256 213.781C191.173 197.694 184.784 178.539 177.469 165.684C170.506 153.446 171.21 141.684 173.763 129.635C174.503 126.145 175.37 122.736 176.25 119.283C176.915 116.669 177.587 114.03 178.214 111.313C179.645 105.114 180.771 98.7699 180.771 92.2639C180.771 79.3687 177.658 70.6301 172.179 65.1285C166.697 59.6242 159.113 57.6274 150.768 57.6274C142.224 57.6274 134.885 60.0005 129.708 65.6968C124.556 71.3663 121.775 80.0776 121.775 92.2639C121.775 98.43 122.874 104.37 124.257 110.208C124.799 112.495 125.377 114.74 125.954 116.977C126.868 120.525 127.776 124.053 128.527 127.696C130.937 139.4 131.532 151.573 124.456 165.756C117.098 180.505 112.214 199.662 114.849 215.265C116.172 223.101 119.41 230.131 125.281 235.196C131.158 240.266 139.505 243.222 150.768 243.222Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
    </svg>

    )
  },

]

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




export default function ImageSwap2() {
  const [direction, setDirection] = useState(0);


  //　体型
  const [selectedBody, setSlectedBody] = useState(bodyShapes[0]);
  const [bodyColor, setBodyColor] = useState("#FAFAFA");

  const handleBodySelect = (image: typeof bodyShapes[0], index: number) => {
    const currentIndex = bodyShapes.findIndex((img) => img.id === selectedBody.id);
    setDirection(index > currentIndex ? 1 : -1);
    setSlectedBody(image);
  };

  const handleBodyColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBodyColor(event.target.value);
  };





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


  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);


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
            key={selectedBody.id}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div >
              {React.cloneElement(selectedBody.svg, {
                children: React.Children.map(selectedBody.svg.props.children, (child) =>
                  React.cloneElement(child, {
                    fill: bodyColor,
                  })
                ),
              })}
            </div>
          </motion.div>
        </AnimatePresence>


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
          <h3>ボディカラーを選んでください</h3>
          <input
            type="color"
            value={bodyColor}
            onChange={handleBodyColorChange}
          />

        </div>
        <div className="flex justify-center items-center">

          <div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
            {bodyShapes.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleBodySelect(image, index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedBody.id === image.id
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
      </div>

      <div className="text-center mt-2">
        <h2 className="text-lg font-medium">{selectedBody.title}</h2>
      </div>



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
      <div >
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
  );
}
