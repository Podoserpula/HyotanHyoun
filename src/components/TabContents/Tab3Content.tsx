import React, { useState } from 'react';

const GourdResizer: React.FC = () => {
	// 上半分と下半分の状態管理
	const [topRadius, setTopRadius] = useState<number>(50);  // 上半分の縦半径
	const [bottomRadius, setBottomRadius] = useState<number>(50);  // 下半分の縦半径
	const [topWidth, setTopWidth] = useState<number>(50);  // 上半分の横半径
	const [bottomWidth, setBottomWidth] = useState<number>(50);  // 下半分の横半径

	// 色の状態管理
	const [topColor, setTopColor] = useState<string>('#ff0000');  // 上半分の色
	const [bottomColor, setBottomColor] = useState<string>('#ff0000');  // 下半分の色

	// 上半分の縦半径変更時の処理
	const handleTopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopRadius(Number(event.target.value));
	};

	// 下半分の縦半径変更時の処理
	const handleBottomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBottomRadius(Number(event.target.value));
	};

	// 上半分の横半径変更時の処理
	const handleTopWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopWidth(Number(event.target.value));
	};

	// 下半分の横半径変更時の処理
	const handleBottomWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBottomWidth(Number(event.target.value));
	};

	// 上半分の色変更時の処理
	const handleTopColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopColor(event.target.value);
	};

	// 下半分の色変更時の処理
	const handleBottomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBottomColor(event.target.value);
	};

	return (
		<div>
			<h3>上半分の縦半径を調整:</h3>
			<input
				type="range"
				min="10"
				max="100"
				value={topRadius}
				onChange={handleTopChange}
			/>
			<p>上半分の縦半径: <span>{topRadius}</span></p>

			<h3>上半分の横半径を調整:</h3>
			<input
				type="range"
				min="10"
				max="100"
				value={topWidth}
				onChange={handleTopWidthChange}
			/>
			<p>上半分の横半径: <span>{topWidth}</span></p>

			<h3>上半分の色を変更:</h3>
			<input
				type="color"
				value={topColor}
				onChange={handleTopColorChange}
			/>
			<p>上半分の色: <span>{topColor}</span></p>

			<h3>下半分の縦半径を調整:</h3>
			<input
				type="range"
				min="10"
				max="100"
				value={bottomRadius}
				onChange={handleBottomChange}
			/>
			<p>下半分の縦半径: <span>{bottomRadius}</span></p>

			<h3>下半分の横半径を調整:</h3>
			<input
				type="range"
				min="10"
				max="100"
				value={bottomWidth}
				onChange={handleBottomWidthChange}
			/>
			<p>下半分の横半径: <span>{bottomWidth}</span></p>

			<h3>下半分の色を変更:</h3>
			<input
				type="color"
				value={bottomColor}
				onChange={handleBottomColorChange}
			/>
			<p>下半分の色: <span>{bottomColor}</span></p>

			<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
				{/* 上半分の楕円 */}
				<ellipse
					cx="100"  // 中央
					cy={100 - topRadius}  // 上半分の縦位置を上に伸ばす
					rx={topWidth}
					ry={topRadius}
					stroke="black"
					strokeWidth="3"
					fill={topColor}  // 上半分の色を反映
				/>
				{/* 下半分の楕円 */}
				<ellipse
					cx="100"  // 中央
					cy={100 + bottomRadius}  // 下半分の縦位置を下に伸ばす
					rx={bottomWidth}
					ry={bottomRadius}
					stroke="black"
					strokeWidth="3"
					fill={bottomColor}  // 下半分の色を反映
				/>
			</svg>
		</div>
	);
};

export default GourdResizer;
