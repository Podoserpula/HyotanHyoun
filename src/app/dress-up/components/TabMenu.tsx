import React, { useState } from 'react'
import Image from 'next/image';
import ShapeChanger from './TabContents/Tab2Content';
import TabContent from './TabContents/Tab4Content';
import BackgroundColorPicker from './TabContents/BackgroundColorPicker';
import ShapeType from './TabContents/ShapeType';
import Preview from './Preview';




const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fillColor, setFillColor] = useState("#FFFDDD"); // 初期色


  const tabs = [
    {
      title: <Image src="/hyoun.png" alt="体型選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />,
      content: <ShapeType />
    },
    { title: <Image src="/hyoun.png" alt="大きさ選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <ShapeChanger /> },

    { title: <Image src="/hyoun.png" alt="Tab 3" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <TabContent /> },

    { title: <Image src="/hyoun.png" alt="Tab 4" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <TabContent /> },

    { title: <Image src="/hyoun.png" alt="背景色選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <BackgroundColorPicker bgColor={fillColor} onChange={setFillColor} /> },
  ];

  return (
    <div className="w-full flex flex-col items-center min-h-screen">





      {/* タブメニュー */}
      <div className="flex border-b-2 mb-4" >
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
      < div className="p-4 border border-gray-300 rounded-md" >
        {tabs[activeTab].content}
      </div >

      <Preview bgColor={fillColor} onChange={setFillColor} />
    </div >


  );
};

export default TabMenu;
