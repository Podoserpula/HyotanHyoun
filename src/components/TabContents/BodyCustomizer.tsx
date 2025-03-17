// BodyCustomizer.tsx
"use client";
import React, { JSX } from "react";

interface BodyCustomizerProps {
	selectedBody: { id: number; title: string; svg: JSX.Element };
	bodyColor: string;
	bodyShapes: { id: number; title: string; svg: JSX.Element }[];
	onBodySelect: (image: { id: number; title: string; svg: JSX.Element }, index: number) => void;
	onBodyColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BodyCustomizer: React.FC<BodyCustomizerProps> = ({
	selectedBody,
	bodyColor,
	bodyShapes,
	onBodySelect,
	onBodyColorChange,
}) => {
	return (
		<div>
			<div>
				<h3>ボディカラーを選んでください</h3>
				<input type="color" value={bodyColor} onChange={onBodyColorChange} />
			</div>
			<div className="flex justify-center items-center">
				<div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
					{bodyShapes.map((image, index) => (
						<button
							key={image.id}
							onClick={() => onBodySelect(image, index)}
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
			<div className="text-center mt-2">
				<h2 className="text-lg font-medium">{selectedBody.title}</h2>
			</div>
		</div>
	);
};

export default BodyCustomizer;
