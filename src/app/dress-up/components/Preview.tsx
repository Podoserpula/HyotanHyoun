import React from "react";
import BackgroundColorPicker from "./TabContents/BackgroundColorPicker";

interface PreviewProps {
	bgColor: string; // 親から渡された背景色
	onChange: (color: string) => void; // 親コンポーネントに色を変更するための関数
}

const Preview: React.FC<PreviewProps> = ({ bgColor, onChange }) => {
	return (
		<div className="w-full flex flex-col items-center min-h-screen">
			{/* 背景色変更 */}
			<svg
				className="absolute top-20"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				width="800"
				height="800"
				preserveAspectRatio="none"
			>
				<rect x="0" y="0" width="100%" height="100%" fill={bgColor} />
			</svg>

			{/* Previewに関するSVG */}
			<div className="relative flex justify-center items-center">
				{/* 輪郭 */}
				<div className="absolute z-10 top-20">
					<svg
						width="500"
						height="500"
						viewBox="0 0 277 598"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M140.01 594C180.764 594 209.798 583.897 229.444 566.917C249.102 549.926 258.853 526.49 261.908 500.848C267.991 449.8 247.708 388.919 224.438 348.022C202.104 308.771 204.386 271.053 212.54 232.571C214.896 221.451 217.672 210.543 220.48 199.513C222.601 191.18 224.74 182.777 226.729 174.158C231.284 154.424 234.859 134.269 234.859 113.618C234.859 72.6296 224.963 45.0129 207.7 27.6789C190.43 10.3375 166.497 4.00001 140.01 4C112.919 4 89.7695 11.5211 73.4621 29.4644C57.2196 47.3363 48.38 74.8801 48.38 113.618C48.38 133.182 51.8645 152.048 56.2692 170.634C57.9888 177.89 59.8288 185.034 61.6644 192.16C64.5821 203.488 67.4886 214.772 69.8828 226.396C77.5877 263.802 79.5027 302.796 56.8431 348.214C33.4304 395.142 17.93 456.029 26.2919 505.541C30.4881 530.387 40.7428 552.612 59.2834 568.607C77.839 584.615 104.249 594 140.01 594Z"
							fill="white"
							stroke="black"
							strokeWidth="8"
						/>
					</svg>
				</div>

				{/* 左目 */}
				<div className="absolute z-20 top-20">
					<svg
						width="500"
						height="500"
						viewBox="0 0 277 598"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M65.2836 148.83C81.3941 148.83 96.1686 146.062 107.065 141.432C112.505 139.12 117.165 136.264 120.524 132.889C123.899 129.498 126.159 125.362 126.159 120.66C126.159 115.958 123.899 111.821 120.524 108.43C117.165 105.055 112.505 102.199 107.065 99.8873C96.1686 95.2568 81.3941 92.4894 65.2836 92.4894C49.1731 92.4894 34.3986 95.2568 23.5024 99.8873C18.0619 102.199 13.4019 105.055 10.043 108.43C6.66787 111.821 4.40857 115.958 4.40857 120.66C4.40857 125.362 6.66787 129.498 10.043 132.889C13.4019 136.264 18.0619 139.12 23.5024 141.432C34.3986 146.062 49.1731 148.83 65.2836 148.83Z"
							fill="white"
							stroke="black"
							strokeWidth="8"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Preview;


// import React, { useState } from 'react';

// const SvgColorPicker: React.FC = () => {
//   // 色を管理するstate
//   const [fillColor, setFillColor] = useState("#000000"); // 初期色は黒に設定

//   // カラー・ピッカーで色が変更されたときの処理
//   const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFillColor(event.target.value);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* カラー・ピッカー */}
//       <label htmlFor="color-picker" className="mb-4">
//         SVGの色を変更:
//       </label>
//       <input
//         type="color"
//         id="color-picker"
//         value={fillColor} // 現在の色をセット
//         onChange={handleColorChange} // 色が変更されたときに反映
//         className="mb-4"
//       />

//       {/* SVG */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100"
//         height="100"
//         viewBox="0 0 100 100"
//       >
//         {/* ここで、fill属性をカラー・ピッカーの色に変更 */}
//         <circle cx="50" cy="50" r="40" fill={fillColor} />
//       </svg>
//     </div>
//   );
// };

// export default SvgColorPicker;



// import React, { useState } from "react";
// import BackgroundColorPicker from "./TabContents/BackgroundColorPicker";

// interface PreviewProps {
// 	bgColor: string; // 背景色を親から受け取る
// 	onChange: (color: string) => void; // 背景色を変更する関数を親に渡す
// }

// const Preview: React.FC<PreviewProps> = ({ bgColor, onChange }) => {
// 	const [fillColor, setFillColor] = useState("#FFFDDD"); // 初期色


// 	return (
// 		<div className="w-full flex flex-col items-center min-h-screen">
// 			{/* 背景色変更 */}


// 			<svg
// 				className="absolute top-20"
// 				xmlns="http://www.w3.org/2000/svg"
// 				viewBox="0 0 100 100"
// 				width="800"
// 				height="800"
// 				preserveAspectRatio="none"
// 			>
// 				<rect x="0" y="0" width="100%" height="100%" fill={fillColor} /> {/* 背景色変更反映 */}
// 			</svg>



// 			<div className="relative flex justify-center items-center">
// 				{/* 輪郭 */}
// 				<div className="absolute z-10 top-20">
// 					<svg width="500" height="500" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<path d="M140.01 594C180.764 594 209.798 583.897 229.444 566.917C249.102 549.926 258.853 526.49 261.908 500.848C267.991 449.8 247.708 388.919 224.438 348.022C202.104 308.771 204.386 271.053 212.54 232.571C214.896 221.451 217.672 210.543 220.48 199.513C222.601 191.18 224.74 182.777 226.729 174.158C231.284 154.424 234.859 134.269 234.859 113.618C234.859 72.6296 224.963 45.0129 207.7 27.6789C190.43 10.3375 166.497 4.00001 140.01 4C112.919 4 89.7695 11.5211 73.4621 29.4644C57.2196 47.3363 48.38 74.8801 48.38 113.618C48.38 133.182 51.8645 152.048 56.2692 170.634C57.9888 177.89 59.8288 185.034 61.6644 192.16C64.5821 203.488 67.4886 214.772 69.8828 226.396C77.5877 263.802 79.5027 302.796 56.8431 348.214C33.4304 395.142 17.93 456.029 26.2919 505.541C30.4881 530.387 40.7428 552.612 59.2834 568.607C77.839 584.615 104.249 594 140.01 594Z" fill="white" stroke="black" strokeWidth="8" />
// 					</svg>
// 				</div>

// 				{/* 左目 */}
// 				<div className="absolute z-20 top-20">
// 					<svg width="500" height="500" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<path d="M65.2836 148.83C81.3941 148.83 96.1686 146.062 107.065 141.432C112.505 139.12 117.165 136.264 120.524 132.889C123.899 129.498 126.159 125.362 126.159 120.66C126.159 115.958 123.899 111.821 120.524 108.43C117.165 105.055 112.505 102.199 107.065 99.8873C96.1686 95.2568 81.3941 92.4894 65.2836 92.4894C49.1731 92.4894 34.3986 95.2568 23.5024 99.8873C18.0619 102.199 13.4019 105.055 10.043 108.43C6.66787 111.821 4.40857 115.958 4.40857 120.66C4.40857 125.362 6.66787 129.498 10.043 132.889C13.4019 136.264 18.0619 139.12 23.5024 141.432C34.3986 146.062 49.1731 148.83 65.2836 148.83Z" fill="white" stroke="black" strokeWidth="8" />
// 					</svg>
// 				</div>

// 				{/* 右目 */}
// 				<div className="absolute z-20 top-20">
// 					<svg width="500" height="500" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<path d="M211.534 148.83C227.644 148.83 242.419 146.062 253.315 141.432C258.755 139.12 263.415 136.264 266.774 132.889C270.149 129.498 272.409 125.362 272.409 120.66C272.409 115.958 270.149 111.821 266.774 108.43C263.415 105.055 258.755 102.199 253.315 99.8873C242.419 95.2568 227.644 92.4894 211.534 92.4894C195.423 92.4894 180.649 95.2568 169.752 99.8873C164.312 102.199 159.652 105.055 156.293 108.43C152.918 111.821 150.659 115.958 150.659 120.66C150.659 125.362 152.918 129.498 156.293 132.889C159.652 136.264 164.312 139.12 169.752 141.432C180.649 146.062 195.423 148.83 211.534 148.83Z" fill="white" stroke="black" strokeWidth="8" />
// 					</svg>
// 				</div>

// 				{/* 左瞳孔 */}
// 				<div className="absolute z-30 top-20">
// 					<svg width="500" height="500" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<ellipse cx="65.2836" cy="121" rx="27.625" ry="32" fill="black" />
// 					</svg>
// 				</div>

// 				{/* 右瞳孔 */}
// 				<div className="absolute z-30 top-20">
// 					<svg width="500" height="500" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
// 						<ellipse cx="211.534" cy="121" rx="27.625" ry="32" fill="black" />
// 					</svg>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
