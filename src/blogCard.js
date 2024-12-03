import React from 'react';

const BlogCard = ({ image, day, month, title, author, content, readMoreLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-xs mx-auto overflow-hidden">
      {/* Image Section */}
      <div className="relative mx-4 mt-4">
        <img src={image} alt={title} className="w-full h-60 object-cover rounded-md" />
        {/* Date */}
        <div className="absolute top-2 right-2 flex flex-col items-center shadow-md">
          <span className="bg-white text-[#FF6C01] rounded-t-md px-2 py-1 text-center text-lg font-bold w-10">
            {day}
          </span>
          <span className="bg-[#FF6C01] text-white rounded-b-md px-2 py-1 text-center text-xs font-semibold uppercase max-w-10">
            {month}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">
          By <span className="text-[#FF6C01] font-bold">{author}</span>
        </p>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <a
          href={readMoreLink}
          className="text-[#6831a8] font-medium underline"
        >
          READ MORE...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;