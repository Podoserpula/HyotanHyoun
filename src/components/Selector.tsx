// BodySelector.tsx
"use client";
import React, { JSX } from "react";

interface BodySelectorProps {
	onBodySelect: (
		image: { id: number; title: string; svg: JSX.Element },
		index: number
	) => void;
	onBodyColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	bodyShapes: { id: number; title: string; svg: JSX.Element }[];
}

const BodySelector: React.FC<BodySelectorProps> = ({
	onBodySelect,
	onBodyColorChange,
	bodyShapes,
}) => {
	return (
		<div className="flex flex-col space-y-4">
			{/* 体型選択 */}
			<div className="flex space-x-2">
				{bodyShapes.map((image, index) => (
					<button
						key={image.id}
						onClick={() => onBodySelect(image, index)}
						className="p-2 border rounded"
					>
						{image.title}
					</button>
				))}
			</div>

			{/* 色選択 */}
			<div>
				<label htmlFor="bodyColor">体の色:</label>
				<input
					type="color"
					id="bodyColor"
					onChange={onBodyColorChange}
					className="ml-2"
				/>
			</div>
		</div>
	);
};

export default BodySelector;
