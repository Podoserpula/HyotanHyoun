
"use client";
import React, { JSX } from "react";

interface AccessaryCustomizerProps {
	selectedAccessary: { id: number; title: string; svg: JSX.Element };
	accessaryColor: string;
	accessaries: { id: number; title: string; svg: JSX.Element }[];
	onAccessarySelect: (image: { id: number; title: string; svg: JSX.Element }, index: number) => void;
	onAccessaryColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccessaryCustomizer: React.FC<AccessaryCustomizerProps> = ({
	selectedAccessary,
	accessaryColor,
	accessaries,
	onAccessarySelect,
	onAccessaryColorChange,
}) => {
	return (
		<div>
			<div>
				<h3>アクセサリーの色を選んでください</h3>
				<input type="color" value={accessaryColor} onChange={onAccessaryColorChange} />
			</div>
			<div className="flex justify-center items-center">
				<div className="flex space-x-2 overflow-x-auto py-2 px-1 max-w-full">
					{accessaries.map((image, index) => (
						<button
							key={image.id}
							onClick={() => onAccessarySelect(image, index)}
							className={`relative flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-200 ${selectedAccessary.id === image.id
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
				<h2 className="text-lg font-medium">{selectedAccessary.title}</h2>
			</div>
		</div>
	);
};

export default AccessaryCustomizer;
