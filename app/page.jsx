import React from "react";
import Link from "next/link";
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";
import DailyNews from "../components/DailyNews"
import CrimeNews from "../components/CrimeNews"
import PoliticsNews from '../components/PoliticsNews';
import CourtNews from '../components/CourtNews'
import InvestigationNews from '../components/InvestigationNews'
import CategoryCards from '../components/Categorycards'
import CivilrightsNews from '../components/CivilrightsNews'
import Image from "next/image";


const MainSection = () => {

  // LATEST NEWS SECTION
  // Category → Author map
const authorsByCategory = authorsData.categories.reduce((acc, item) => {
  acc[item.category] = item.author;
  return acc;
}, {});

// Collect all posts and add author information
const allPosts = Object.entries(categoryPageData).flatMap(
  ([category, posts]) =>
    posts.map(post => ({
      ...post,
      category,
      author: authorsByCategory[category] || {} // Provide fallback if no author is found
    }))
);

// Sort posts by date (latest first)
const sortedPosts = [...allPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Hero post (most recent post)
const heroPost = sortedPosts[0];

// Small posts (next 4 posts)
const smallPosts = sortedPosts.slice(1, 5);

// CRIME NEWS SECTION
// Filter only crime category posts
  const crimePosts = sortedPosts.filter(
    (post) => post.category.toLowerCase() === 'crime'
  );

  // Remove any that are already shown in hero or small posts
  const uniqueCrimePosts = crimePosts.filter((post) => {
    // Skip if it's the hero post
    if (heroPost && post.slug === heroPost.slug) return false;
    // Skip if it's one of the small/latest posts
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  // Take the first 4 most recent unique crime posts
  const latestCrimePosts = uniqueCrimePosts.slice(0, 4);

  // Only render section if we have something to show
  if (latestCrimePosts.length === 0) return null;

 
  //POLICTCS NEWS SECTION
    // Filter only politics category posts
    const politicsPosts = sortedPosts.filter(
      (post) => post.category.toLowerCase() === 'politics'
    );
  
    // Remove any that are already shown in hero or small posts (Latest News section)
    const uniquePoliticsPosts = politicsPosts.filter((post) => {
      // Skip if it's the hero post
      if (heroPost && post.slug === heroPost.slug) return false;
      // Skip if it's one of the small/latest posts
      return !smallPosts.some((small) => small.slug === post.slug);
    });
  
    // Only render section if we have enough politics posts to show
    if (uniquePoliticsPosts.length === 0) return null;
  
    // Get posts for each column
    const featuredPost = uniquePoliticsPosts[0]; // Big featured post (Column 1)
    const textPosts = uniquePoliticsPosts.slice(1, 3); // Text-only posts (Column 2)
    const imagePosts = uniquePoliticsPosts.slice(3, 5); // Image posts (Column 3)


    // COURT NEWS SECTION
    // Filter only court category posts
    const courtPosts = sortedPosts.filter(
      (post) => post.category.toLowerCase() === 'courts'
    );

    // Remove any that are already shown in hero or small posts
    const uniqueCourtPosts = courtPosts.filter((post) => {
      // Skip if it's the hero post
      if (heroPost && post.slug === heroPost.slug) return false;
      // Skip if it's one of the small/latest posts
      if (smallPosts.some((small) => small.slug === post.slug)) return false;
      // Skip if it's already in crime posts (if you want to avoid duplication across sections)
      if (latestCrimePosts && latestCrimePosts.some((crime) => crime.slug === post.slug)) return false;
      return true;
    });

    // Take the first 4 most recent unique court posts
    const latestCourtPosts = uniqueCourtPosts.slice(0, 4);


    //INVESTIAGTION NEWS SECTION
    // Filter only investigations category posts
  const investigationPosts = sortedPosts.filter(
    (post) => post.category.toLowerCase() === 'investigations'
  );

  // Remove any that are already shown in hero or small posts
  const uniqueInvestigationPosts = investigationPosts.filter((post) => {
    // Skip if it's the hero post
    if (heroPost && post.slug === heroPost.slug) return false;
    // Skip if it's one of the small/latest posts
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  // Only render section if we have something to show
  if (uniqueInvestigationPosts.length === 0) return null;

  // Get posts for each row
  const investiagtionPost = uniqueInvestigationPosts[0]; // Big featured post (Row 1)
  const row2Posts = uniqueInvestigationPosts.slice(1, 3); // Row 2 posts

  //CATEGORY
  // Get all categories with their post counts and latest post image
  const allCategories = Object.entries(categoryPageData).map(([category, posts]) => {
    // Get the most recent post for this category
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const latestPost = sortedPosts[0];

    return {
      name: category,
      postCount: posts.length,
      image: latestPost?.image,
      slug: category
    };
  });

  // For desktop: show only first 5 categories
  const desktopCategories = allCategories.slice(0, 5);

  //CIVIL RIGHTS NEWS SECTION
  // Filter only civil-rights category posts
  const civilRightsPosts = sortedPosts.filter(
    (post) => post.category.toLowerCase() === 'civil-rights'
  );

  // Remove any that are already shown in hero or small posts
  const uniqueCivilRightsPosts = civilRightsPosts.filter((post) => {
    // Skip if it's the hero post
    if (heroPost && post.slug === heroPost.slug) return false;
    // Skip if it's one of the small/latest posts
    return !smallPosts.some((small) => small.slug === post.slug);
  });

  // Only render section if we have something to show
  if (uniqueCivilRightsPosts.length === 0) return null;

  // Get posts for each column
  const leftPost = uniqueCivilRightsPosts[0]; // Left column post
  const middlePost = uniqueCivilRightsPosts[1]; // Middle (main) post
  const rightPosts = uniqueCivilRightsPosts.slice(2, 4); // Right column posts (2 posts)



  


  return (
    <main>
      {/* FIRST SECTION - Daliy News */}
        <DailyNews heroPost={heroPost} smallPosts={smallPosts}/>

      {/* SECOND SECTION - Crime News */}
       <CrimeNews latestCrimePosts={latestCrimePosts} />

      {/* THIRD SECTION - Politics News */}
      <PoliticsNews featuredPost={featuredPost} textPosts={textPosts} imagePosts={imagePosts}/>

      {/* SPONSORED AD SECTION */}
      <div className="w-full bg-white py-[30px] pb-10 mx-auto text-center border-b border-[#414141] p-5 max-w-[1300px]">
        <span className="block text-sm text-black mb-3">– Sponsored –</span>

        <div className="max-w-[1100px] mx-auto">
          <Link href="https://www.progresskingdom.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/progresskingdom.png"
              alt="Progress Kingdom"
              className="w-full h-32 object-fit rounded-md"
              width={1100}  // specify the width
              height={125}  // specify the height to match your original h-32
            />
          </Link>
        </div>
      </div>

      {/* FOURTH SECTION - Court News */}
      {/* Court News Section */}
        {latestCourtPosts.length > 0 && (
          <section>
            <CourtNews latestCourtPosts={latestCourtPosts} />
          </section>
        )}
    

      {/* FIFTH SECTION - Investigation News */}
      <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-0 text-white">
      <InvestigationNews
       heroPost={heroPost} 
        smallPosts={smallPosts}  investiagtionPost={investiagtionPost} row2Posts={row2Posts}/>
        
        <CategoryCards allCategories={allCategories} desktopCategories={desktopCategories}/>
      </div>
      



      {/* SIXTH SECTION - CIVIL RIGHTS NEWS SECTION */}

      <CivilrightsNews 
          rightPosts={rightPosts} middlePost={middlePost} leftPost={leftPost}
        />

      

      {/* SEVENTH SECTION - Three Column with Separators */}
      <div className="bg-gradient-to-b from-[#1b1446] via-[#0e0a2b] to-[#07051c] py-[25px] px-[10px] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-5 max-w-[1300px] w-full p-5 mx-auto">
          
          {/* Left Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Yoga Benefits"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              Benefits of Yoga: 10 Ways Your Practice Can Improve Your Life
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              We are just an advanced breed of monkeys on a minor planet...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>

          {/* Separator 1 */}
          <div className="hidden lg:block border-l border-[#444] h-full"></div>

          {/* Middle Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Gout Drug"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              Gout Drug Could Show Promise in Fighting COVID-19
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              Exploring the complexities of the human mind...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>

          {/* Separator 2 */}
          <div className="hidden lg:block border-l border-[#444] h-full"></div>

          {/* Right Column */}
          <div className="text-white">
            <div className="mb-[15px]">
              <img 
                src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
                className="w-full h-[300px] object-cover"
                alt="Sleep and Weight"
              />
            </div>
            <div className="text-[1.2em] font-bold mb-[10px] text-orange-500">
              How Sleeping Less Than 7 Hours a Night Can Lead to Weight Gain
            </div>
            <div className="text-base text-[#d1d1d1] mb-[15px]">
              The ongoing environmental challenges...
            </div>
            <div className="text-[0.9em] text-[#aaa] flex justify-between">
              By Hugh Son | 4 years ago
            </div>
          </div>
        </div>
      </div>

      {/* EIGHTH SECTION - More News Grid */}
      <div className="bg-white p-5 max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between mb-5 font-bold">
          <div className="text-lg text-orange-500">More News</div>
          <div className="text-lg text-orange-500 cursor-pointer hover:underline">
            All Stories
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* News Item 1 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              One Day Noticed, Politicians Wary Resignation Timetable
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 2 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              What is the Presidential Records Act, and How Did Thomas Violate It?
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 3 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              Bad Credit Shouldn't Affect Health Insurance, Experts Say
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 4 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              How to Protect Yourself While Using Social Media
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 5 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              White House Reminds Lawmakers not to Travel to Afghanistan
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 6 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              AE Shipping on a Roll Once Again with Soaring Bulk Shipping Rates
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 7 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              The Car Industry's Chip Shortage is Far From Over
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>

          {/* News Item 8 */}
          <div className="bg-white p-[15px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <img 
              src="https://foxiz.io/business/wp-content/uploads/sites/6/2021/08/b36-860x573.jpg" 
              alt="News Image" 
              className="w-full h-[150px] object-cover mb-[15px]"
            />
            <h3 className="text-base font-bold text-black mb-[10px]">
              Medicaid Expansion Improves Hypertension and Diabetes Control
            </h3>
            <p className="text-sm text-black">4 years ago</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default MainSection;