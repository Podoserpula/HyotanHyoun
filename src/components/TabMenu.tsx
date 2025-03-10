import React, { useState } from 'react'
import Image from 'next/image';
import ShapeChanger from './TabContents/Tab2Content';
import TabContent from './TabContents/Tab4Content';
import BackgroundColorPicker from './TabContents/BackgroundColorPicker';
import ShapeType from './TabContents/ShapeType';
import GourdResizer from './TabContents/Tab3Content';
import { motion, AnimatePresence } from "framer-motion";


const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fillColor, setFillColor] = useState("#FFFDDD");



  // タブの内容をここで定義
  const tabs = [
    {
      id: 1,
      title: (<div className="flex flex-col items-center"><svg width="24" height="40" viewBox="0 0 37 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.2292 53.6692C24.0826 53.6692 28.2318 52.7737 31.0444 51.2697C33.8776 49.7549 35.3457 47.6251 35.807 45.23C36.2635 42.8601 35.7234 40.2908 34.6705 37.8805C33.6155 35.4652 32.0278 33.1673 30.3266 31.3176C28.7227 29.5739 28.0294 27.8935 27.8628 26.2506C27.6948 24.5941 28.0575 22.9313 28.6444 21.2178C28.9375 20.362 29.283 19.5031 29.6408 18.6306C29.692 18.5056 29.7435 18.3802 29.7952 18.2546C30.1024 17.5073 30.4141 16.7492 30.698 15.9882C31.361 14.2111 31.8927 12.3683 31.8927 10.4674C31.8927 6.6893 30.4035 4.15342 27.8903 2.59226C25.4192 1.0572 22.0152 0.5 18.2292 0.5C14.3676 0.5 11.0747 1.15886 8.73447 2.75184C6.36017 4.36804 5.03225 6.90058 5.03225 10.4674C5.03225 12.2583 5.47161 13.977 6.00108 15.6466C6.17514 16.1955 6.35726 16.7347 6.53808 17.2701C6.91548 18.3876 7.28719 19.4883 7.56806 20.6242C7.97852 22.2843 8.17534 23.9564 7.87581 25.7074C7.57693 27.4547 6.7777 29.3156 5.14329 31.3422C1.7332 35.5708 -0.286974 41.1289 1.26786 45.6998C2.8468 50.3416 7.99082 53.6692 18.2292 53.6692Z" fill="white" stroke="#0D0D0D" />
      </svg>   <span className="text-xs mt-2">体型</span> </div>
      ),
      content: <ShapeType />
    },
    {
      id: 2,
      title: <Image src="/hyoun.png" alt="大きさ選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />,
      content: <ShapeChanger />
    },
    {
      id: 3,
      title: <div><Image src="/hyoun.png" alt="Tab 3" width={20} height={20} style={{ width: '100%', height: 'auto' }} /><span className="text-xs mt-2">体型</span></div>,
      content: <GourdResizer />
    },
    {
      id: 4,
      title: <Image src="/hyoun.png" alt="Tab 4" width={20} height={20} style={{ width: '100%', height: 'auto' }} />,
      content: <TabContent />
    },
    {
      id: 5,
      title: <div><svg
        className="flex flex-col items-center"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={24}
        height={24}
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width="100%" height="100%" fill={fillColor} /></svg><span className="text-xs mt-2">背景</span></div>,
      content: <BackgroundColorPicker bgColor={fillColor} onChange={setFillColor} />
    },
  ];

  return (

    <div className="w-full flex flex-col items-center min-h-screen">



      <div className="w-full flex flex-col items-center min-h-screen">

        {/* 背景 */}
        <svg
          className=" absolute top-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="800"
          height="800"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={fillColor} /> {/* 背景色変更反映 */}
        </svg>
      </div>


      <div className="absolute z-10 top-50">

      </div>


      {/* タブメニュー */}
      <div className="flex border-b-2 mb-4">
        {
          tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 text-lg ${activeTab === index
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
                }`}
            >
              {tab.title}
            </button>
          ))
        }
      </div>

      {/* アクティブなタブのコンテンツ */}
      <div className="p-4 border border-gray-300 rounded-md">
        {tabs[activeTab].content}
      </div>


    </div>


  );
};

export default TabMenu;
