import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-colorWhite dark:bg-gray-900 text-colorBlack dark:text-white">
      <header className="items-center p-4 bg-gray-800 text-colorWhite mb-10">
        <h1 className="text-5xl text-center font-titleFnt mt-6 mb-6 sm:text-7xl">ひょうたんひょうん</h1>
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

        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M147.803 243.092C168.269 243.092 182.745 239.96 192.539 234.724C202.393 229.454 207.481 222.061 209.08 213.758C210.665 205.53 208.792 196.591 205.119 188.182C201.439 179.757 195.898 171.738 189.96 165.281C184.318 159.147 181.932 153.225 181.434 147.425C180.932 141.581 182.335 135.723 184.521 129.707C185.613 126.704 186.888 123.691 188.201 120.635C188.352 120.284 188.503 119.932 188.655 119.579C189.818 116.877 190.996 114.14 192.065 111.39C194.479 105.177 196.397 98.7541 196.397 92.1359C196.397 78.9586 190.94 70.174 181.979 64.7746C173.142 59.4504 161.04 57.5 147.803 57.5C134.308 57.5 122.842 59.8038 114.712 65.3381C106.48 70.942 101.864 79.7231 101.864 92.1359C101.864 98.4075 103.669 104.422 105.909 110.271C106.795 112.584 107.734 114.839 108.667 117.078C110.138 120.611 111.594 124.106 112.804 127.738C114.748 133.58 115.928 139.457 115.241 145.604C114.556 151.731 112.002 158.252 106.275 165.355C94.4006 180.079 86.3533 199.406 90.6869 215.281C92.8746 223.295 98.1897 230.293 107.483 235.254C116.733 240.19 129.886 243.092 147.803 243.092Z" fill="white" stroke="#0D0D0D" strokeWidth="3" />
          <path d="M126.844 102.016C131.923 102.016 136.592 101.144 140.047 99.6753C141.772 98.9423 143.265 98.031 144.348 96.9426C145.437 95.8481 146.187 94.4916 146.187 92.9328C146.187 91.3741 145.437 90.0175 144.348 88.923C143.265 87.8346 141.772 86.9234 140.047 86.1903C136.592 84.7219 131.923 83.8499 126.844 83.8499C121.764 83.8499 117.095 84.7219 113.64 86.1903C111.915 86.9234 110.422 87.8346 109.339 88.923C108.25 90.0175 107.5 91.3741 107.5 92.9328C107.5 94.4916 108.25 95.8481 109.339 96.9426C110.422 98.031 111.915 98.9423 113.64 99.6753C117.095 101.144 121.764 102.016 126.844 102.016Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />
          <path d="M172.726 102.016C177.806 102.016 182.475 101.144 185.93 99.6751C187.655 98.942 189.148 98.0308 190.231 96.9424C191.32 95.8479 192.07 94.4914 192.07 92.9326C192.07 91.3738 191.32 90.0173 190.231 88.9228C189.148 87.8344 187.655 86.9231 185.93 86.1901C182.475 84.7216 177.806 83.8496 172.726 83.8496C167.647 83.8496 162.978 84.7216 159.522 86.1901C157.797 86.9231 156.305 87.8344 155.222 88.9228C154.133 90.0173 153.383 91.3738 153.383 92.9326C153.383 94.4914 154.133 95.8479 155.222 96.9424C156.305 98.0308 157.797 98.942 159.522 99.6751C162.978 101.144 167.647 102.016 172.726 102.016Z" fill="#FAFAFA" stroke="#222222" strokeWidth="3" />

          <circle cx="127" cy="93" r="6.5" fill="#222222" stroke="#222222" strokeWidth="3" />
          <circle cx="173" cy="93" r="6.5" fill="#222222" stroke="#222222" strokeWidth="3" />



        </svg>

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

      <footer className="bg-gray-800 text-colorWhite p-4 text-center font-titleFnt">
        <p>&copy; 2025 ひょうたんひょうん</p>
      </footer>
    </div>
  );
};

export default HomePage;
