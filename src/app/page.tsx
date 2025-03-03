import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="items-center p-4 bg-gray-800 text-white mb-10">
        <h1 className="text-6xl text-center font-titleFnt mt-6 mb-6 ">ひょうたんひょうん</h1>
        {/* <nav>
          <Link href="/gallery" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            ギャラリー
          </Link>
          <Link href="/settings" className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            セッティング
          </Link>
        </nav> */}
      </header>

      <main className="flex flex-col items-center justify-center text-center  max-w-md h-3/4 mx-auto">
        <Image
          src="/hyoun8.svg"
          alt="ひょうんの画像仮置き"
          width={551}
          height={551}
          layout="intrinsic"
          className="mb-20"
        />
        <div className="flex flex-col items-center justify-center">
          <Link href="/dress-up">
            <button className="px-6 py-3 mb-10 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 ">
              ログイン
            </button>
          </Link>
          <Link href="/register">
            <button className="px-6 py-3 mb-10 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 ">
              新規登録
            </button>
          </Link>
          <Link href="/dress-up">
            <button className="px-6 py-3 mb-10 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 ">
              ゲストプレイ
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 オリジナルひょうたんカスタマイズ</p>
      </footer>
    </div>
  );
};

export default HomePage;
