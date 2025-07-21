'use client';
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b mb-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 font-medium ${
              active === i
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;
