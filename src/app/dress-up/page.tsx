"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import TabMenu from './components/TabMenu';
import { Tab1Content } from './components/TabContents';

export default function DressUpPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態を管理
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉管理
  // const [bgColor, setBgColor] = useState('#ffffff'); // 背景

  // const ShapeChanger = () => {
  //   const [heightFactor, setHeightFactor] = useState(1);
  //   const [widthFactor, setWidthFactor] = useState(1);
  // };

  const router = useRouter();

  // const handleBackgroundChange = (color: string) => {
  //   setBgColor(color);
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

        <div className="w-full h-[440px] flex justify-center items-center mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 390 598"
            width="400"
            height="400"
            style={{
              // transform: `scale(${widthFactor}, ${heightFactor})`,
              transformOrigin: 'center center',
            }}
          >
            <path
              d="M189.056 594C254.226 594 300.221 584.024 331.279 567.418C362.5 550.724 378.555 527.347 383.605 501.132C388.615 475.118 382.702 446.793 371.03 420.071C359.34 393.309 341.732 367.818 322.853 347.292C304.753 327.613 296.855 308.555 294.958 289.855C293.051 271.046 297.177 252.244 303.755 233.038C307.042 223.443 310.912 213.824 314.903 204.088C315.476 202.691 316.052 201.291 316.629 199.888C320.057 191.55 323.522 183.12 326.68 174.657C334.055 154.889 339.909 134.541 339.909 113.618C339.909 71.9616 323.532 44.2048 296.003 27.1037C268.809 10.2115 231.191 4.00001 189.056 4C146.108 4 109.746 11.3364 84.0205 28.848C58.0221 46.5453 43.4086 74.2755 43.4086 113.618C43.4086 133.464 49.1204 152.527 56.2514 171.142C59.0584 178.47 62.0439 185.639 65.0146 192.773C69.7147 204.06 74.3778 215.257 78.2384 226.852C84.4558 245.526 88.2502 264.381 86.0427 284.132C83.8414 303.828 75.6326 324.75 57.2949 347.489C19.504 394.35 -5.95823 455.693 7.75569 505.928C14.6683 531.25 31.4609 553.391 60.9077 569.107C90.2375 584.761 132.019 594 189.056 594Z"
              fill="white"
              stroke="black"
              strokeWidth="8" // ここでは固定値のまま
            />
          </svg>
        </div>

        {/* <div className="flex space-x-4 mt-4">
          <button
            onClick={() => handleBackgroundChange('#FFB6C1')}
            className="w-10 h-10 bg-pink-200 rounded-full"
          />
          <button
            onClick={() => handleBackgroundChange('#87CEEB')}
            className="w-10 h-10 bg-blue-200 rounded-full"
          />
          <button
            onClick={() => handleBackgroundChange('#98FB98')}
            className="w-10 h-10 bg-green-200 rounded-full"
          />
        </div> */}


        <div className="mt-20 text-center">
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
            <TabMenu


            />
          </div>
        </div>
      </main>
    </div>
  );
}
