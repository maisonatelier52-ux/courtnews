import React from 'react'
import Link from "next/link";
import Image from "next/image";

const CrimeNews = ({latestCrimePosts}) => {
     // Helper function to format date
  const formatDate = (dateStr) => {
    // If date is already in format like "24 Jan, 2026", return as is
    if (dateStr && dateStr.includes(',')) {
      return dateStr;
    }
    // Otherwise try to parse and format
    try {
      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    } catch {
      return dateStr;
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto pt-5 border-b border-[#414141] p-5">
      {latestCrimePosts.map((post, index) => (
        <Link
          key={post.id || index}
          href={`/${post.category}/${post.slug}`}
          title={post.heading}
          className="bg-white overflow-hidden group"
        > 
            <Image
                src={post.image}
                alt={post.heading}
                width={700}
                height={400}
                sizes="(max-width: 768px) 100vw, 650px"
                className="w-full h-[190px] object-cover"
                loading="lazy"
              />
          <h3 className="text-lg font-bold leading-[1.3] px-[14px] pt-3 pb-[6px] group-hover:text-orange-500 transition">
             {post.heading.slice(0,53)}..
          </h3>
          <div className="text-[13px] text-black px-[14px] pb-[14px]">
            <span className="capitalize">{post.category.replace('-', ' ')}</span> · <span>{formatDate(post.date)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CrimeNews
