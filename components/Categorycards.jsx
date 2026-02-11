
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const CategoryCards = ({allCategories, desktopCategories}) => {

  // Format category name for display
  const formatCategoryName = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('Us ', 'US ');
  };

  return (
    <div className="max-w-[1300px] mx-auto px-5 pb-10">
      {/* ROW 3 - Category Cards */}
      
      {/* DESKTOP VIEW - Only 5 categories */}
      <div className="hidden md:grid grid-cols-5 gap-[10px]">
        {desktopCategories.map((cat) => (
          <Link 
            key={cat.name}
            href={`/${cat.slug}`}
            title={`${formatCategoryName(cat.name)} News`}
          >
            <div className="bg-white/5 relative group cursor-pointer hover:bg-white/10 transition">
              <Image 
                src={cat.image} // Use Image tag
                alt={cat.name}
                className="w-full object-cover h-[150px]"
                width={500} // Add width (example: 500px, adjust as needed)
                height={150} // Add height (example: 150px, adjust as needed)
                loading="lazy" 
              />
              <h4 className="mt-[10px] text-[15px] p-[10px] group-hover:text-orange-500 transition">
                {formatCategoryName(cat.name)}
              </h4>
              <div className="absolute bottom-3 right-3 w-[26px] h-[26px] rounded-full border border-white grid place-items-center font-bold text-xs bg-black/50">
                {cat.postCount}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* MOBILE VIEW - All categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] md:hidden">
        {allCategories.map((cat) => (
          <Link 
            key={cat.name}
            href={`/${cat.slug}`}
            title={`${formatCategoryName(cat.name)} News`}
          >
            <div className="bg-white/5 relative group cursor-pointer hover:bg-white/10 transition">
              <Image 
                src={cat.image} // Use Image tag
                alt={cat.name}
                className="w-full hidden md:block object-cover h-[200px]"
                width={500} // Add width (example: 500px, adjust as needed)
                height={200} // Add height (example: 200px, adjust as needed)
                loading="lazy"
              />
              <h4 className="mt-[10px] text-[15px] p-[10px] group-hover:text-orange-500 transition">
                {formatCategoryName(cat.name)}
              </h4>
              <div className="absolute bottom-3 right-3 w-[26px] h-[26px] rounded-full border border-white grid place-items-center font-bold text-xs bg-black/50">
                {cat.postCount}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
