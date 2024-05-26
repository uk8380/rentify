import React from 'react';

const Sidebar = ({ filterProperties }) => {
  return (
    <aside className="bg-gray-200 p-4 w-64">
      <h2 className="text-lg font-bold mb-4">Filter Properties</h2>
      <label className="block mb-2">
        Price Range:
        <input
          type="range"
          min="0"
          max="100000"
          onChange={(e) => filterProperties(e.target.value)}
          className="w-full"
        />
      </label>
    </aside>
  );
};

export default Sidebar;
