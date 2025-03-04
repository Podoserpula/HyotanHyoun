import React, { useState } from 'react'
import { Tab1Content, Tab2Content, Tab3Content } from './TabContents';
import Image from 'next/image';
import ShapeChanger from './TabContents/Tab2Content';
import TabContent from './TabContents/Tab4Content';
import BackgroundColorPicker from './TabContents/BackgroundColorPicker';



const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);



  const tabs = [
    {
      title: <Image src="/hyoun.png" alt="体型選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />,
      content: <Tab1Content />
    },
    { title: <Image src="/hyoun.png" alt="大きさ選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <ShapeChanger /> },

    { title: <Image src="/hyoun.png" alt="Tab 3" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <Tab3Content /> },

    { title: <Image src="/hyoun.png" alt="Tab 4" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <TabContent /> },

    { title: <Image src="/hyoun.png" alt="背景色選択タブ" width={20} height={20} style={{ width: '100%', height: 'auto' }} />, content: <BackgroundColorPicker /> },
  ];

  return (
    <div className="w-full">
      {/* タブメニュー */}
      <div className="flex border-b-2 mb-4">
        {tabs.map((tab, index) => (
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
        ))}
      </div>

      {/* アクティブなタブのコンテンツ */}
      <div className="p-4 border border-gray-300 rounded-md">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabMenu;
