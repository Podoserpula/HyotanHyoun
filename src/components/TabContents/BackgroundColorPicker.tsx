"use client";
import React from "react";

interface BackgroundColorPickerProps {
	bgColor: string;
	onChange: (color: string) => void;
}

const BackgroundColorPicker: React.FC<BackgroundColorPickerProps> = ({ bgColor, onChange }) => {
	return (
		<div className="flex flex-col items-center">

			<h2 className="text-white mb-4">背景色変更</h2>
			<input
				type="color"
				value={bgColor}
				onChange={(e) => onChange(e.target.value)}
				className="border-2 border-gray-600 rounded p-2"
			/>
		</div>
	);
};

export default BackgroundColorPicker;
