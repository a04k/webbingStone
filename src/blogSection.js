import React from 'react';
import BlogCard from './blogCard';

const BlogSection = () => {
  const blogs = [
    {
      image: 'https://webbingstone.com/wp-content/uploads/2024/08/digital-marketing-trends-2024-640x480.webp',
      day: '08',
      month: 'Aug',
      title: 'Top Digital Marketing Trends Worldwide in 2024',
      author: 'WS_ADMIN',
      content: 'As we enter 2024, the digital marketing landscape is profoundly transforming...',
      readMoreLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      day: '24',
      month: 'May',
      title: 'How To Perform An SEO Competitor Analysis, Simplified',
      author: 'WS_ADMIN',
      content: 'SEO competitor analysis is not rocket science, but it usually gets complicated...',
      readMoreLink: '#',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      day: '29',
      month: 'Apr',
      title: 'Block-Chain Technology: Digital Marketing Revolution',
      author: 'WS_ADMIN',
      content: 'In the fast-paced digital landscape, innovation is the key to staying ahead...',
      readMoreLink: '#',
    },
  ];

  return (
    <div className="bg-[#F9F9F9] py-10">
      <h1 className='text-center mb-12 text-3xl text-orange-500'>Recent Blog Posts </h1>
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              day={blog.day}
              month={blog.month}
              title={blog.title}
              author={blog.author}
              content={blog.content}
              readMoreLink={blog.readMoreLink}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://webbingstone.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF6C01] hover:bg-[#e85a00] text-white font-semibold px-6 py-2 rounded-lg shadow-md"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
