"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import ImageSwap from '@/components/ImageSwap';






export default function DressUpPage() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 




  const router = useRouter();





  //　モーダル
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ログイン
  // const handleCompleteClick = () => {
  //   if (isLoggedIn) {
  //     router.push('/dress-up-complete');
  //   } else {
  //     openModal();
  //   }
  // };




  return (

    <div className="flex flex-col items-center ">
      {/* ヘッダー */}
      <Header title="きせかえ" />

      <main className="w-full max-w-screen-sm">
        <div className="relative">
          <div className="absolute z-40  top-5">
            {/* 画面説明のアイコン */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
            </svg> */}
          </div>
        </div>
        <div>

          <ImageSwap />

        </div>





        <div className="text-center mt-10">
          {/* 着せ替え完了ボタン */}
          <button
            onClick={handleCompleteClick}



            className="px-6 py-3 bg-white-500 text-colorBlack rounded-lg border-2 border-gray-700 text-xl"
          >
            着せかえ完了
          </button>
        </div>

        {/* モーダル */}
        {isModalOpen && (
          <div className="mt-4 text-red-500 text-lg">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-colorWhite p-6 rounded-lg w-80">
                <h2 className="text-2xl font-bold mb-4">ゲストプレイではデータが保存できません！</h2>
                <p className="mb-4">新規登録をして、着せかえ内容を保存しましょう。</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => router.push('/register')}

                    className="mt-2 px-4 py-2 bg-green-500 text-colorWhite rounded"
                  >
                    新規登録
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-300 text-colorBlack rounded"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5">
          {/* タブ */}
          <div className="container mx-auto p-4">
            {/* <TabMenu /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
