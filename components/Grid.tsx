import React from 'react';

interface GridProps {
  images: { src: string; alt?: string }[];
}

const BOX_HEIGHT = 'h-64';

const Grid: React.FC<GridProps> = ({ images }) => {
  return (
    <div className="p-4">
      {/* Container: mobile 2 columns, desktop 4 columns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Box 1: spans 1 column on all sizes */}
        <div className={`bg-red-500 rounded-lg overflow-hidden ${BOX_HEIGHT}`}>
          <img
            src={images[0]?.src}
            alt={images[0]?.alt || "Image 1"}
            className="h-full w-full object-cover object-left-top"
          />
        </div>
        {/* Box 2: spans 1 column on all sizes */}
        <div
          className={`bg-green-500 rounded-lg overflow-hidden ${BOX_HEIGHT}`}
        >
          <img
            src={images[1]?.src}
            alt={images[1]?.alt || "Image 2"}
            className="h-full w-full object-cover object-left-top"
          />
        </div>
        {/* Box 3: spans 2 columns on both mobile and desktop */}
        <div
          className={`bg-blue-500 rounded-lg overflow-hidden col-span-2 md:col-span-2 ${BOX_HEIGHT}`}
        >
          <img
            src={images[2]?.src}
            alt={images[2]?.alt || "Image 3"}
            className="h-full w-full object-cover object-left-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;