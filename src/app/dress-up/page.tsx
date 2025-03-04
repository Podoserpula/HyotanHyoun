"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import TabMenu from './components/TabMenu';
import BackgroundColorPicker from './components/TabContents/BackgroundColorPicker';


export default function DressUpPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態を管理
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉管理
  const [bgColor, setBgColor] = useState('#ffffff'); // 背景






  // const ShapeChanger = () => {
  //   const [heightFactor, setHeightFactor] = useState(1);
  //   const [widthFactor, setWidthFactor] = useState(1);
  // };

  const router = useRouter();

  const handleBackgroundChange = (color: string) => {
    setBgColor(color);
  };



  //　モーダル
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ログイン
  const handleCompleteClick = () => {
    if (isLoggedIn) {
      router.push('/dress-up-complete');
    } else {
      openModal();
    }
  };




  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* ヘッダー */}
      <Header title="きせかえ" />
      <main>

        {/* <div className="flex justify-end w-full h-10 items-center"> */}
        {/* 画面説明のアイコン */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
          </svg>
        </div> */}
        <div className="relative flex justify-center items-center">

          {/* 背景 */}
          <div className="w-full h-screen">
            {/* <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="lightblue" />
            </svg> */}

          </div>

          {/* 輪郭 */}
          <div className="absolute">
            <svg width="277" height="598" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.01 594C180.764 594 209.798 583.897 229.444 566.917C249.102 549.926 258.853 526.49 261.908 500.848C267.991 449.8 247.708 388.919 224.438 348.022C202.104 308.771 204.386 271.053 212.54 232.571C214.896 221.451 217.672 210.543 220.48 199.513C222.601 191.18 224.74 182.777 226.729 174.158C231.284 154.424 234.859 134.269 234.859 113.618C234.859 72.6296 224.963 45.0129 207.7 27.6789C190.43 10.3375 166.497 4.00001 140.01 4C112.919 4 89.7695 11.5211 73.4621 29.4644C57.2196 47.3363 48.38 74.8801 48.38 113.618C48.38 133.182 51.8645 152.048 56.2692 170.634C57.9888 177.89 59.8288 185.034 61.6644 192.16C64.5821 203.488 67.4886 214.772 69.8828 226.396C77.5877 263.802 79.5027 302.796 56.8431 348.214C33.4304 395.142 17.93 456.029 26.2919 505.541C30.4881 530.387 40.7428 552.612 59.2834 568.607C77.839 584.615 104.249 594 140.01 594Z" fill="white" stroke="black" strokeWidth="8" />
            </svg>
          </div>

          {/* 左目 */}
          <div className="absolute">
            <svg width="277" height="598" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.2836 148.83C81.3941 148.83 96.1686 146.062 107.065 141.432C112.505 139.12 117.165 136.264 120.524 132.889C123.899 129.498 126.159 125.362 126.159 120.66C126.159 115.958 123.899 111.821 120.524 108.43C117.165 105.055 112.505 102.199 107.065 99.8873C96.1686 95.2568 81.3941 92.4894 65.2836 92.4894C49.1731 92.4894 34.3986 95.2568 23.5024 99.8873C18.0619 102.199 13.4019 105.055 10.043 108.43C6.66787 111.821 4.40857 115.958 4.40857 120.66C4.40857 125.362 6.66787 129.498 10.043 132.889C13.4019 136.264 18.0619 139.12 23.5024 141.432C34.3986 146.062 49.1731 148.83 65.2836 148.83Z" fill="white" stroke="black" strokeWidth="8" />
            </svg>
          </div>

          {/* 右目 */}
          <div className="absolute">
            <svg width="277" height="598" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M211.534 148.83C227.644 148.83 242.419 146.062 253.315 141.432C258.755 139.12 263.415 136.264 266.774 132.889C270.149 129.498 272.409 125.362 272.409 120.66C272.409 115.958 270.149 111.821 266.774 108.43C263.415 105.055 258.755 102.199 253.315 99.8873C242.419 95.2568 227.644 92.4894 211.534 92.4894C195.423 92.4894 180.649 95.2568 169.752 99.8873C164.312 102.199 159.652 105.055 156.293 108.43C152.918 111.821 150.659 115.958 150.659 120.66C150.659 125.362 152.918 129.498 156.293 132.889C159.652 136.264 164.312 139.12 169.752 141.432C180.649 146.062 195.423 148.83 211.534 148.83Z" fill="white" stroke="black" strokeWidth="8" />
            </svg>
          </div>

          {/* 左瞳孔 */}
          <div className="absolute">
            <svg width="277" height="598" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="65.2836" cy="121" rx="27.625" ry="32" fill="black" />
            </svg>
          </div>

          {/* 右瞳孔 */}
          <div className="absolute">
            <svg width="277" height="598" viewBox="0 0 277 598" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="211.534" cy="121" rx="27.625" ry="32" fill="black" />
            </svg>
          </div>

        </div>




        <div className=" text-center">
          {/* 着せ替え完了ボタン */}
          <button
            onClick={handleCompleteClick}
            className="px-6 py-3 bg-white-500 text-gray rounded-lg border-2 border-gray-700 text-xl"
          >
            着せかえ完了
          </button>
        </div>

        {/* モーダル */}
        {isModalOpen && (
          <div className="mt-4 text-red-500 text-lg">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-2xl font-bold mb-4">ゲストプレイではデータが保存できません！</h2>
                <p className="mb-4">新規登録をして、着せかえ内容を保存しましょう。</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => router.push('/register')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  >
                    新規登録
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10">
          {/* タブ */}
          <div className="container mx-auto p-4">
            <TabMenu />
          </div>
        </div>
      </main>
    </div>
  );
}
