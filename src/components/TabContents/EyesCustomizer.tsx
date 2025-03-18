<<<<<<< HEAD
// EyeCustomizer.tsx
=======
>>>>>>> 64c461e (アクセサリー追加)
"use client";
import React, { JSX } from "react";

interface EyesCustomizerProps {
	eyeShapes: { id: number; title: string; svg: JSX.Element }[];
	selectedEye: { id: number; title: string; svg: JSX.Element };
	eyeColor: string;
	onEyeSelect: (image: { id: number; title: string; svg: JSX.Element }, index: number) => void;
	onEyeColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	irisShapes: { id: number; title: string; svg: JSX.Element }[];
	selectedIris: { id: number; title: string; svg: JSX.Element };
	irisColor: string;
	onIrisSelect: (image: { id: number; title: string; svg: JSX.Element }, index: number) => void;
	onIrisColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	irisSize: number;
	onIrisSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
<<<<<<< HEAD
	irisSizeLabel: string;
=======
>>>>>>> 64c461e (アクセサリー追加)
}

const EyeCustomizer: React.FC<EyesCustomizerProps> = ({
	eyeShapes,
	selectedEye,
	eyeColor,
	onEyeSelect,
	onEyeColorChange,
	irisShapes,
	selectedIris,
	irisColor,
	onIrisSelect,
	onIrisColorChange,
	irisSize,
	onIrisSizeChange,
<<<<<<< HEAD
	irisSizeLabel,
=======
>>>>>>> 64c461e (アクセサリー追加)
}) => {
	return (
		<div>
			<div>
<<<<<<< HEAD
				<h3>アイカラーを選んでください</h3>
=======
				<h3>白目部分の色を選んでください</h3>
>>>>>>> 64c461e (アクセサリー追加)
				<input type="color" value={eyeColor} onChange={onEyeColorChange} />
			</div>
			<div className="flex justify-center">
				<div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
					{eyeShapes.map((image, index) => (
						<button
							key={image.id}
							onClick={() => onEyeSelect(image, index)}
							className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedEye.id === image.id
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
				<h2 className="text-lg font-medium">{selectedEye.title}</h2>
			</div>

<<<<<<< HEAD
			<div>
=======
			<div className="mt-10">
>>>>>>> 64c461e (アクセサリー追加)
				<h3>虹彩の色を選んでください</h3>
				<input type="color" value={irisColor} onChange={onIrisColorChange} />
			</div>
			<div>
				<h3>虹彩の大きさを変更</h3>
				<input
					type="range"
					min="0"
					max="9"
					value={irisSize}
					step="0.1"
					onChange={onIrisSizeChange}
					className="w-full"
				/>
<<<<<<< HEAD
				<div className="text-center">{irisSizeLabel}</div>
=======

>>>>>>> 64c461e (アクセサリー追加)
			</div>
			<div className="flex justify-center items-center">
				<div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
					{irisShapes.map((image, index) => (
						<button
							key={image.id}
							onClick={() => onIrisSelect(image, index)}
							className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedIris.id === image.id
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
				<h2 className="text-lg font-medium">{selectedIris.title}</h2>
			</div>
		</div>
	);
};

export default EyeCustomizer;
