import Header from '@/components/Header'
import React from 'react'

export default function DressUpComplete() {
    return (
        <div>
            <Header title="きせかえ完了" />

        </div>
    )
}


// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function DressUpComplete() {
//   const router = useRouter();

//   useEffect(() => {
//     // ここで完了メッセージや保存されたデータを表示する処理を追加できます
//   }, []);

//   return (
//     <div className="flex flex-col items-center min-h-screen justify-center">
//       <h1 className="text-3xl font-bold">着せ替えが完了しました！</h1>
//       <p className="mt-4 text-lg">あなたの着せ替えが保存されました。</p>
//       <button
//         onClick={() => router.push('/')}
//         className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full"
//       >
//         ホームに戻る
//       </button>
//     </div>
//   );
// }
