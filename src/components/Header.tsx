"use client";
import Link from 'next/link';
import { FC, useState } from 'react';

interface HeaderProps {
	title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleBackClick = () => {
		window.history.back();
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}




	return (

		<div className="w-full items-center p-4 bg-gray-800 text-colorWhite  font-titleFnt  mx-auto flex justify-between ">
			{/* 戻るボタン */}
			<button
				onClick={handleBackClick}
				className="flex flex-col items-center justify-center w-12 h-12 space-y-1"
			>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
				</svg>
			</button>


			{/* タイトル */}
			<h1 className="text-4xl text-center">{title}</h1>

			{/* ハンバーガーメニューアイコン */}
			<button
				onClick={toggleMenu}
				className="flex flex-col items-center justify-center w-8 h-8 space-y-2">
				{/* lg:hidden */}
				<span className="w-9 h-2 bg-colorWhite rounded-md"></span>
				<span className="w-9 h-2 bg-colorWhite  rounded-md"></span>
				<span className="w-9 h-2 bg-colorWhite  rounded-md"></span>
			</button>

			{/* メニュー */}
			{isMenuOpen && (
				<nav className="absolute top-16 right-0 bg-gray-800 w-full h-full lg:hidden z-10">
					<ul className="flex flex-col items-center space-y-4 mt-5">
						<li><Link href="/" className="text-colorWhite">ホーム</Link></li>
						<li><Link href="/about" className="text-colorWhite">マイページ</Link></li>
						<li><Link href="/contact" className="text-colorWhite">ヘルプ</Link></li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Header;
