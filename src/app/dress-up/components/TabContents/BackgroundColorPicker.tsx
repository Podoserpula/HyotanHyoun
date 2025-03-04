// BackgroundColorPicker.tsx
"use client";
import React from "react";

interface BackgroundColorPickerProps {
    bgColor: string;
    onChange: (color: string) => void;
}

const BackgroundColorPicker: React.FC<BackgroundColorPickerProps> = ({ bgColor, onChange }) => {
    return (
        <div>
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <rect x="0" y="0" width="100%" height="100%" fill="blue
                " />
            </svg>



            <div className="flex flex-col items-center">
                <h2 className="text-white mb-4">背景色変更</h2>
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => onChange(e.target.value)}
                    className="border-2 border-gray-600 rounded p-2"
                />
            </div>
        </div>


    );
};

export default BackgroundColorPicker;
