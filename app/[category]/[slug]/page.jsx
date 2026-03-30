// import Link from "next/link";
// import Image from "next/image";
// import { FaFacebookF } from "react-icons/fa6";
// import {  FaTwitter, FaInstagram } from "react-icons/fa6";
// import { FaRedditAlien, FaShareSquare } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import { BsSubstack } from "react-icons/bs";
// import { FaQuora  } from "react-icons/fa";
// import RelatedNews from "../../../components/RelatedNews";
// import Sidecontent from "../../../components/Sidecontent";
// import AuthorProfile from "../../../components/AuthorProfile";
// import PrevNextArticles from "../../../components/PrevNextArticles";

// import categoryPageData from "../../../public/data/category/categorypagedata.json";
// import authorsData from "../../../public/data/authors.json";
// import CaseInformation from "../../../components/CaseInformation";

// import { notFound } from "next/navigation";

// const SITE_URL = "https://www.courtnews.org";

// export async function generateMetadata({ params }) {
//   const { category, slug } = await params;

//   // Find the article
//   const post = categoryPageData[category]?.find((item) => item.slug === slug);


//   const fullImageUrl = post.heroImage.startsWith("http")
//     ? post.heroImage
//     : `${SITE_URL}${post.heroImage}`;

//   const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

//   return {
//     title: `${post.metaTitle}`,
//     description: post.metaDescription,
//     keywords: post.keywords || [category.replace(/-/g, " ")],
//     alternates: {
//       canonical: canonicalUrl,
//     },
//     openGraph: {
//       title: post.metaTitle,
//       description: post.metaDescription,
//       url: canonicalUrl,
//       type: "article",
//       siteName: "CourtNews",
//       images: [
//         {
//           url: fullImageUrl,
//           width: 1200,
//           height: 630,
//           alt: post.heading,
//         },
//       ],
//       publishedTime: new Date(post.date).toISOString(),
//       modifiedTime: new Date(post.modifiedDate || post.date).toISOString(),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.metaTitle,
//       description: post.metaDescription,
//       images: [fullImageUrl],
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { category, slug } = await params;

//   // 1️⃣ Find the post by category + slug
//   const post = categoryPageData[category]?.find((item) => item.slug === slug);

//   if (!post) {
//     notFound();
//   }

//   // 2️⃣ Build author lookup
//   const authorsByCategory = authorsData.categories.reduce((acc, item) => {
//     acc[item.category] = item.author;
//     return acc;
//   }, {});

//   // 3️⃣ Get author by category
//   const author = authorsByCategory[category];

//   // 4️⃣ Get body data from post
//   const body = post.body;

//   // 5️⃣ Calculate fullImageUrl (FIXED - was missing in Page function)
//   const fullImageUrl = post.heroImage.startsWith("http")
//     ? post.heroImage
//     : `${SITE_URL}${post.heroImage}`;

//   const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

//   // ──────────────────────────────────────────────
//   // Share variables (add this block)
//   // ──────────────────────────────────────────────
//   const pageUrl = `${SITE_URL}/${category}/${slug}`;
//   const encodedUrl = encodeURIComponent(pageUrl);
//   const shareTitle = encodeURIComponent(post.heading.trim());

//   // RELATED NEWS SECTION
//   // Get posts from the current category only
//   const categoryPosts = categoryPageData[category] || [];

//   // Filter out the current article, add author information, and sort by date (newest first)
//   const relatedPosts = categoryPosts
//     .filter((post) => post.slug !== slug) // Use slug from params
//     .map((post) => ({
//       ...post,
//       category: category, // Use category from params
//       author: authorsByCategory[category] || {},
//     }))
//     .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
//     .slice(0, 4); // limit to 4 posts

//   // If no related posts, don't render the component
//   if (relatedPosts.length === 0) {
//     return null;
//   }

//   //SIDE CONTENT
//   // Collect all posts and add author information
//   const allPosts = Object.entries(categoryPageData).flatMap(
//     ([category, posts]) =>
//       posts.map((post) => ({
//         ...post,
//         category,
//         author: authorsByCategory[category] || {}, // Provide fallback if no author is found
//       })),
//   );

//   // Sort posts by date (latest first)
//   const sortedPosts = [...allPosts].sort(
//     (a, b) => new Date(b.date) - new Date(a.date),
//   );

//   // Hero post (most recent post)
//   const heroPost = sortedPosts[0];

//   // Small posts (next 4 posts)
//   const smallPosts = sortedPosts.slice(1, 5);

//   // ──────────────────────────────────────────────
//   // PREV / NEXT ARTICLES
//   // ──────────────────────────────────────────────
//   // Sort articles in the SAME CATEGORY by date (newest first)
//   const categorySorted = [...categoryPosts].sort(
//     (a, b) => new Date(b.date) - new Date(a.date),
//   );

//   // Find current article index
//   const currentIndex = categorySorted.findIndex((p) => p.slug === slug);

//   // Previous and next posts
//   const prevPost = currentIndex > 0 ? categorySorted[currentIndex - 1] : null;
//   const nextPost =
//     currentIndex < categorySorted.length - 1
//       ? categorySorted[currentIndex + 1]
//       : null;

//   // ──────────────────────────────────────────────
//   // JSON-LD – NewsArticle
//   // ──────────────────────────────────────────────
//   const articleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: post.metaTitle,
//     description: post.metaDescription,
//     image: [
//       {
//         "@type": "ImageObject",
//         url: fullImageUrl,
//         width: 1200,
//         height: 630,
//       },
//     ],
//     datePublished: new Date(post.date).toISOString(),
//     ...(post.updatedDate && {
//       dateModified: new Date(post.updatedDate).toISOString(),
//     }),
//     author: author
//       ? {
//           "@type": "Person",
//           name: author.name,
//           url:
//             author.profileUrl ||
//             `${SITE_URL}/authors/${author.id || author.name.toLowerCase()}`,
//         }
//       : { "@type": "Person", name: "CourtNews Staff" },
//     publisher: {
//       "@type": "Organization",
//       name: "CourtNews",
//       url: SITE_URL,
//       logo: {
//         "@type": "ImageObject",
//         url: `${SITE_URL}/images/logo.webp`,
//         width: 600,
//         height: 60,
//       },
//     },
//     mainEntityOfPage: {
//       "@type": "WebPage",
//       "@id": canonicalUrl,
//     },
//     articleSection:
//       category.replace(/-/g, " ").charAt(0).toUpperCase() +
//       category.replace(/-/g, " ").slice(1),
//     keywords: post.keywords || category,
//   };

//   // ──────────────────────────────────────────────
//   // JSON-LD – BreadcrumbList
//   // ──────────────────────────────────────────────
//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: SITE_URL,
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: category
//           .replace(/-/g, " ")
//           .replace(/\b\w/g, (c) => c.toUpperCase()),
//         item: `${SITE_URL}/${category}`,
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: post.heading,
//         item: canonicalUrl,
//       },
//     ],
//   };

//   // ──────────────────────────────────────────────
//   // JSON-LD – Organization (for better SEO)
//   // ──────────────────────────────────────────────
//   const organizationJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsMediaOrganization",
//     name: "CourtNews",
//     url: SITE_URL,
//     logo: `${SITE_URL}/images/logo.webp`,
//     sameAs: [
//       "https://facebook.com/courtnews",
//       "https://x.com/CourtNews10",
//       "https://www.instagram.com/_court_news/",
//     ],
//     contactPoint: {
//       "@type": "ContactPoint",
//       contactType: "Editorial",
//       url: SITE_URL,
//     },
//   };

//   return (
//     <main>
//       {/* JSON-LD Scripts */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
//       />

//       <section className="w-full bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           {/* Category Badge */}
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-2 h-2 rounded-full bg-orange-500"></span>
//             <span className="text-sm font-semibold uppercase tracking-wide text-black">
//               {category.replace(/-/g, " ")}
//             </span>
//           </div>

//           {/* Main Heading - Only H1 on page */}
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
//             {post.heading}
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg md:text-xl text-black max-w-3xl mb-6">
//             {post.metaDescription}
//           </p>

//           {/* Case Information */}
//           <CaseInformation caseInfo={post.caseInformation} />

//           {/* Author + Meta */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">
//             {/* Author */}
//             <div className="flex items-center gap-3">
//               <Image
//                 src={author.profileImage}
//                 alt={author.name || "Author"}
//                 width={48}
//                 height={48}
//                 sizes="48px"
//                 className="w-12 h-12 rounded-full object-cover"
//               />

//               <div className="text-sm">
//                 <p className="font-semibold text-black">{author.name}</p>
//                 {/* <time
//                   className="text-black"
//                   dateTime={new Date(post.date).toISOString()}
//                 >
//                   {post.date}
//                 </time> */}
//                 <div className="text-black text-sm">
//                   <time dateTime={new Date(post.date).toISOString()}>
//                     {new Date(post.date).toLocaleDateString("en-US", {
//                       month: "long",
//                       day: "numeric",
//                       year: "numeric",
//                     })}
//                   </time>

//                   {post.updatedDate && (
//                     <>
//                       <span className="mx-2 text-gray-400">•</span>
//                       <span className="text-gray-500">
//                         Updated{" "}
//                         {new Date(post.updatedDate).toLocaleDateString("en-US", {
//                           month: "long",
//                           day: "numeric",
//                           year: "numeric",
//                         })}
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Share Icons */}
//             <div className="flex items-center gap-4 text-black">
//               {/* Social Media Icons */}
//               {author.social?.twitter && (
//                 <Link
//                   href={author.social.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition"
//                   title="Follow on Medium"
//                 >
//                   <SiMedium className="w-5 h-5" />
//                 </Link>
//               )}
//               {author.social?.instagram && (
//                 <Link
//                   href={author.social.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition"
//                   title="Follow on Quora"
//                 >
//                   <FaQuora className="w-5 h-5" />
//                 </Link>
//               )}
//               {author.social?.reddit && (
//                 <Link
//                   href={author.social.reddit}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition"
//                   title="Follow on Reddit"
//                 >
//                   <FaRedditAlien className="w-5 h-5" />
//                 </Link>
//               )}
//               {author.social?.substack && (
//                 <Link
//                   href={author.social.substack}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-600 hover:text-blue-600 transition"
//                   title="Follow on Substack"
//                 >
//                   <BsSubstack className="w-5 h-5" />
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 mt-1">
//         <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
//           {/* LEFT – ARTICLE IMAGE */}
//           <div>
//             <Image
//               src={post.heroImage}
//               alt={post.heading}
//               width={1200}
//               height={630}
//               priority
//               sizes="100vw"
//               className="w-full h-auto object-cover"
//             />

//             <section className="max-w-7xl mx-auto px-4 mt-4">
//               <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">
//                 {/* LEFT – STICKY SHARE */}
//                 <div className="hidden lg:block">
//                   <div className="sticky top-20 flex flex-col items-center gap-5 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
//                     {/* Share Label */}
//                     <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
//                       <FaShareSquare className="text-lg" />
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex flex-col gap-4">
//                       <Link
//                         href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
//                         aria-label="Share on X"
//                         title="Share on X"
//                       >
//                         < FaTwitter />
//                       </Link>

//                       <Link
//                         href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-2xl"
//                         aria-label="Share on Facebook"
//                         title="Share on Facebook"
//                       >
//                         <FaFacebookF />
//                       </Link>

//                       <Link
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-200 text-2xl"
//                         aria-label="Share on LinkedIn"
//                         title="Share on LinkedIn"
//                       >
//                         <FaLinkedinIn />
//                       </Link>

//                       <Link
//                         href={`https://medium.com/new-story?url=${encodedUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-black transition-colors duration-200 text-2xl"
//                         aria-label="Share on Medium"
//                         title="Share on Medium"
//                       >
//                         <SiMedium />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* RIGHT – ARTICLE CONTENT */}
//                 <article className="max-w-3xl">
//                   {/* DROP CAP PARAGRAPH */}
//                   {body.dropcap && (
//                     <p className="text-gray-700 leading-7 text-lg mb-4">
//                       <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
//                         {body.dropcap.letter}
//                       </span>
//                       {body.dropcap.text}
//                     </p>
//                   )}

//                   {/* PARAGRAPHS */}
//                   {body.paragraphs?.map((paragraph, idx) => (
//                     <p key={idx} className="text-gray-700 leading-7 mb-4">
//                       {paragraph}
//                     </p>
//                   ))}

//                   {/* QUOTE BLOCK */}
//                   {body.quote && (
//                     <blockquote className="text-center max-w-2xl mx-auto my-10 border-l-4 border-orange-500 pl-6">
//                       <span className="text-orange-500 text-6xl block mb-4">
//                         "
//                       </span>
//                       <p className="text-xl font-semibold leading-relaxed mb-4">
//                         {body.quote.text}
//                       </p>
//                       <span className="text-sm text-gray-500 italic">
//                         — {body.quote.author}
//                       </span>
//                     </blockquote>
//                   )}

//                   <section className="mt-5">
//                     {/* RENDER DYNAMIC SECTIONS */}
//                     {body.sections?.map((section, sectionIdx) => {
//                       // IMAGE WITH TEXT SECTION
//                       if (section.type === "imageWithText") {
//                         return (
//                           <div key={sectionIdx}>
//                             {section.text?.map((text, idx) => (
//                               <p
//                                 key={idx}
//                                 className="text-lg text-gray-700 mb-4"
//                               >
//                                 {text}
//                               </p>
//                             ))}

//                             {section.image && (
//                               <div className="w-full mb-5">
//                                 <Image
//                                   src={section.image.url}
//                                   alt={section.image.alt}
//                                   width={1200}
//                                   height={800}
//                                   sizes="(max-width: 768px) 100vw, 700px"
//                                   className="w-full h-auto object-cover"
//                                   loading="lazy"
//                                 />
//                               </div>
//                             )}

//                             {section.additionalText?.map((text, idx) => (
//                               <p
//                                 key={`add-${idx}`}
//                                 className="text-lg text-gray-700 mb-4"
//                               >
//                                 {text}
//                               </p>
//                             ))}
//                           </div>
//                         );
//                       }

//                       // TWO COLUMN LAYOUT
//                       if (section.type === "twoColumnLayout") {
//                         return (
//                           <div
//                             key={sectionIdx}
//                             className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//                           >
//                             <div className="lg:col-span-2">
//                               <h2 className="text-3xl font-bold mb-4">
//                                 {section.title}
//                               </h2>
//                               {section.mainContent?.map((text, idx) => (
//                                 <p
//                                   key={idx}
//                                   className="text-lg text-gray-700 mb-4"
//                                 >
//                                   {text}
//                                 </p>
//                               ))}
//                             </div>
//                           </div>
//                         );
//                       }

//                       // FULL WIDTH SECTION
//                       if (section.type === "fullWidth") {
//                         return (
//                           <div key={sectionIdx} className="mt-5">
//                             <div className="bg-white">
//                               <h2 className="text-2xl font-bold mb-4">
//                                 {section.title}
//                               </h2>
//                               {section.content?.map((text, idx) => (
//                                 <p
//                                   key={idx}
//                                   className="text-lg text-gray-700 mb-4"
//                                 >
//                                   {text}
//                                 </p>
//                               ))}

//                               {section.image && (
//                                 <div>
//                                   <Image
//                                     src={section.image.url}
//                                     alt={section.image.alt}
//                                     width={1200}
//                                     height={800}
//                                     sizes="(max-width: 768px) 100vw, 700px"
//                                     className="object-cover w-full h-auto"
//                                     loading="lazy"
//                                   />
//                                 </div>
//                               )}

//                               {section.subsections?.map(
//                                 (subsection, subIdx) => (
//                                   <div
//                                     key={subIdx}
//                                     className="flex flex-col justify-start mt-5"
//                                   >
//                                     {/* FIXED: Changed from h2 to h3 for proper hierarchy */}
//                                     <h3 className="text-2xl font-bold mb-4">
//                                       {subsection.title}
//                                     </h3>
//                                     {subsection.text?.map((text, txtIdx) => (
//                                       <p
//                                         key={txtIdx}
//                                         className="text-lg text-gray-700 mb-4"
//                                       >
//                                         {text}
//                                       </p>
//                                     ))}

//                                     {subsection.checklist?.map(
//                                       (item, itemIdx) => (
//                                         <h4
//                                           key={itemIdx}
//                                           className="text-sm font-semibold mb-2"
//                                         >
//                                           <span className="text-orange-500">
//                                             ✓
//                                           </span>{" "}
//                                           {item}
//                                         </h4>
//                                       ),
//                                     )}

//                                     {subsection.additionalText?.map(
//                                       (text, addIdx) => (
//                                         <p
//                                           key={`sub-add-${addIdx}`}
//                                           className="text-lg text-gray-700 mb-4"
//                                         >
//                                           {text}
//                                         </p>
//                                       ),
//                                     )}
//                                   </div>
//                                 ),
//                               )}
//                             </div>
//                           </div>
//                         );
//                       }

//                       // FINAL SECTION
//                       if (section.type === "finalSection") {
//                         return (
//                           <div key={sectionIdx}>
//                             <h2 className="text-3xl font-bold mb-4">
//                               {section.title}
//                             </h2>
//                             {section.intro?.map((text, idx) => (
//                               <p
//                                 key={idx}
//                                 className="text-lg text-gray-700 mb-4"
//                               >
//                                 {text}
//                               </p>
//                             ))}

//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                               <div>
//                                 {section.twoColumnContent?.left?.map(
//                                   (text, idx) => (
//                                     <p
//                                       key={idx}
//                                       className="text-lg text-gray-700 mb-4"
//                                     >
//                                       {text}
//                                     </p>
//                                   ),
//                                 )}
//                               </div>

//                               {section.twoColumnContent?.rightQuote && (
//                                 <div className="flex items-center justify-center">
//                                   <blockquote className="text-center text-xl italic text-gray-800 font-semibold pl-4 border-l-4 border-orange-500">
//                                     {section.twoColumnContent.rightQuote.text}
//                                     <span className="text-center block mt-2 text-sm text-gray-500">
//                                       —{" "}
//                                       {
//                                         section.twoColumnContent.rightQuote
//                                           .author
//                                       }
//                                     </span>
//                                   </blockquote>
//                                 </div>
//                               )}
//                             </div>

//                             {section.conclusion?.map((text, idx) => (
//                               <p
//                                 key={`conclusion-${idx}`}
//                                 className="text-lg text-gray-700 mt-4 mb-4"
//                               >
//                                 {text}
//                               </p>
//                             ))}
//                           </div>
//                         );
//                       }

//                       return null;
//                     })}
//                   </section>
//                 </article>
//               </div>
//               <div className="article-container">
//                 {/* Share Section */}
//                 <div className="mt-5">
//                   <hr className="border-t-2 border-dotted border-gray-400" />
//                   <div className="flex justify-between items-center mt-6">
//                     <div className="flex items-center gap-2">
//                       <FaShareSquare className="text-2xl" />{" "}
//                       {/* ← bigger than text-xl */}
//                       <span className="text-sm font-semibold">Share</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       {/* Facebook Icon */}
//                       <a
//                         href={`https://facebook.com/sharer/sharer.php?u=${canonicalUrl}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Share on Facebook"
//                         className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
//                       >
//                         <FaFacebookF className="w-5 h-5" />
//                       </a>
//                       {/* Twitter Icon */}
//                       <a
//                         href={`https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${post.heading}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Share on X"
//                         className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition"
//                       >
//                         < FaTwitter className="w-5 h-5" />
//                       </a>
//                       {/* Reddit Icon */}
//                       <a
//                         href={`https://reddit.com/submit?url=${canonicalUrl}&title=${post.heading}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Share on Reddit"
//                         className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
//                       >
//                         <FaRedditAlien className="w-5 h-5" />
//                       </a>
//                       {/* Instagram Icon */}
//                       <a
//                         href={`https://instagram.com`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title="Share on Instagram"
//                         className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
//                       >
//                         <FaInstagram className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <hr className="border-t-2 border-dotted border-gray-400 mt-6" />

//                 {/* Author Section */}
//                 <AuthorProfile author={author} />
//                 <PrevNextArticles
//                   prevPost={prevPost}
//                   nextPost={nextPost}
//                   category={category}
//                 />
//               </div>
//             </section>
//           </div>

//           {/* RIGHT – SIDEBAR */}
//           <Sidecontent heroPost={heroPost} smallPosts={smallPosts} />
//         </div>

//         {/* related news components */}
//         <RelatedNews currentCategory={category} relatedPosts={relatedPosts} />
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
   FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaShareSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsSubstack } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import RelatedNews from "../../../components/RelatedNews";
import Sidecontent from "../../../components/Sidecontent";
import AuthorProfile from "../../../components/AuthorProfile";
import PrevNextArticles from "../../../components/PrevNextArticles";
import CaseInformation from "../../../components/CaseInformation";

import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";

import { notFound } from "next/navigation";

const SITE_URL = "https://www.courtnews.org";

// Helper: Extract location for GEO tags from caseInformation string
function extractLocation(caseInfo) {
  if (!caseInfo?.countryState) return null;
  const text = caseInfo.countryState;
  // Try to detect US states, countries, etc.
  if (text.includes("United States") || text.includes("U.S.")) {
    return { region: "US", place: "United States", lat: 39.8283, lng: -98.5795 };
  }
  if (text.includes("United Kingdom") || text.includes("UK")) {
    return { region: "GB", place: "United Kingdom", lat: 51.5074, lng: -0.1278 };
  }
  if (text.includes("Miami")) {
    return { region: "US-FL", place: "Miami, Florida", lat: 25.7617, lng: -80.1918 };
  }
  // Default to US if nothing matched
  return { region: "US", place: "United States", lat: 39.8283, lng: -98.5795 };
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const post = categoryPageData[category]?.find((item) => item.slug === slug);
  if (!post) return {};

  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;
  const canonicalUrl = `${SITE_URL}/${category}/${slug}`;

  // Extract location for GEO meta
  const location = extractLocation(post.caseInformation);
  const geoRegion = location ? location.region : "";
  const geoPlace = location ? location.place : "";
  const geoPos = location ? `${location.lat};${location.lng}` : "";

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.seoKeywords?.join(", ") || post.keywords || category,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "CourtNews",
      images: [{ url: fullImageUrl, width: 1200, height: 630, alt: post.heading }],
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.updatedDate || post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [fullImageUrl],
    },
    // Additional meta tags for GEO and news
    other: {
      "geo.region": geoRegion,
      "geo.placename": geoPlace,
      "geo.position": geoPos,
      "ICBM": geoPos,
      "target-audience": "global",
      "coverage": location?.place || "Worldwide",
      "distribution": "global",
      "news_keywords": post.seoKeywords?.join(", ") || post.keywords || category,
    },
  };
}

export default async function Page({ params }) {
  const { category, slug } = await params;
  const post = categoryPageData[category]?.find((item) => item.slug === slug);
  if (!post) notFound();

  const authorsByCategory = authorsData.categories.reduce((acc, item) => {
    acc[item.category] = item.author;
    return acc;
  }, {});
  const author = authorsByCategory[category];

  const fullImageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;
  const canonicalUrl = `${SITE_URL}/${category}/${slug}`;
  const pageUrl = `${SITE_URL}/${category}/${slug}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const shareTitle = encodeURIComponent(post.heading.trim());

  // Related posts
  const categoryPosts = categoryPageData[category] || [];
  const relatedPosts = categoryPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({ ...p, category, author: authorsByCategory[category] || {} }))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  // Side content (latest posts)
  const allPosts = Object.entries(categoryPageData).flatMap(([cat, posts]) =>
    posts.map((p) => ({ ...p, category: cat, author: authorsByCategory[cat] || {} }))
  );
  const sortedPosts = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const heroPost = sortedPosts[0];
  const smallPosts = sortedPosts.slice(1, 5);

  // Prev / Next
  const categorySorted = [...categoryPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const currentIndex = categorySorted.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? categorySorted[currentIndex - 1] : null;
  const nextPost =
    currentIndex < categorySorted.length - 1 ? categorySorted[currentIndex + 1] : null;

  // ─────────────────────────────────────────────────────────────
  // Enhanced JSON-LD with speakable, mentions, FAQPage
  // ─────────────────────────────────────────────────────────────
  const locationForSchema = extractLocation(post.caseInformation);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [{ "@type": "ImageObject", url: fullImageUrl, width: 1200, height: 630 }],
    datePublished: new Date(post.date).toISOString(),
    ...(post.updatedDate && { dateModified: new Date(post.updatedDate).toISOString() }),
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url: author.profileUrl || `${SITE_URL}/authors/${author.id || author.name.toLowerCase()}`,
        }
      : { "@type": "Person", name: "CourtNews Staff" },
    publisher: {
      "@type": "Organization",
      name: "CourtNews",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.webp`, width: 600, height: 60 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    articleSection: category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    keywords: post.seoKeywords || post.keywords || category,
    // GEO location for schema
    contentLocation: locationForSchema
      ? {
          "@type": "Place",
          name: locationForSchema.place,
          geo: { "@type": "GeoCoordinates", latitude: locationForSchema.lat, longitude: locationForSchema.lng },
        }
      : undefined,
    // Speakable: first two paragraphs and H1
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/body//h1", "/html/body//p[1]", "/html/body//p[2]"],
    },
    // Mention key entities (extracted from keywords or hardcoded)
    mentions: (post.seoKeywords || [])
      .slice(0, 5)
      .map((kw) => ({ "@type": "Thing", name: kw })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `${SITE_URL}/${category}`,
      },
      { "@type": "ListItem", position: 3, name: post.heading, item: canonicalUrl },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "CourtNews",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      "https://facebook.com/courtnews",
      "https://x.com/CourtNews10",
      "https://www.instagram.com/_court_news/",
    ],
    contactPoint: { "@type": "ContactPoint", contactType: "Editorial", url: SITE_URL },
  };

  // Optional FAQPage (if data contains FAQ section)
  // For this example, we can generate from body if there's a Q&A pattern, but we'll keep it optional.
  // We'll add a placeholder if we ever have FAQ data.

  // ─────────────────────────────────────────────────────────────
  // Generate AI Summary (first 2 sentences of article)
  // ─────────────────────────────────────────────────────────────
  const getFirstParagraph = () => {
    if (post.body?.dropcap) return post.body.dropcap.letter + post.body.dropcap.text;
    if (post.body?.paragraphs?.[0]) return post.body.paragraphs[0];
    return "";
  };
  const firstPara = getFirstParagraph();
  const aiSummary = firstPara ? firstPara.slice(0, 200) + (firstPara.length > 200 ? "…" : "") : "";

  // Generate Key Points (extract bullet-like sentences or use first few sentences)
  const generateKeyPoints = () => {
    const points = [];
    if (post.body?.paragraphs) {
      // Take first 3 paragraphs that are not too long
      for (let i = 0; i < Math.min(3, post.body.paragraphs.length); i++) {
        const para = post.body.paragraphs[i];
        if (para.length < 150) points.push(para.trim());
        else points.push(para.slice(0, 120) + "…");
      }
    }
    if (points.length === 0 && post.body?.dropcap?.text) {
      points.push(post.body.dropcap.text.slice(0, 120) + "…");
    }
    return points;
  };
  const keyPoints = generateKeyPoints();

  return (
    <main>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-semibold uppercase tracking-wide text-black">
              {category.replace(/-/g, " ")}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            {post.heading}
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mb-6">{post.metaDescription}</p>

          <CaseInformation caseInfo={post.caseInformation} />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b py-4">
            <div className="flex items-center gap-3">
              <Image
                src={author.profileImage}
                alt={author.name || "Author"}
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-black">{author.name}</p>
                <div className="text-black text-sm">
                  <time dateTime={new Date(post.date).toISOString()}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  {post.updatedDate && (
                    <>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500">
                        Updated{" "}
                        {new Date(post.updatedDate).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-black">
              {author.social?.twitter && (
                <Link href={author.social.twitter} target="_blank" rel="noopener noreferrer" title="Follow on Medium">
                  <SiMedium className="w-5 h-5" />
                </Link>
              )}
              {author.social?.instagram && (
                <Link href={author.social.instagram} target="_blank" rel="noopener noreferrer" title="Follow onQuora">
                  <FaQuora className="w-5 h-5" />
                </Link>
              )}
              {author.social?.reddit && (
                <Link href={author.social.reddit} target="_blank" rel="noopener noreferrer" title="Follow on Reddit">
                  <FaRedditAlien className="w-5 h-5" />
                </Link>
              )}
              {author.social?.substack && (
                <Link href={author.social.substack} target="_blank" rel="noopener noreferrer" title="Follow on Substack">
                  <BsSubstack className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-1">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <Image
              src={post.heroImage}
              alt={post.heading}
              width={1200}
              height={630}
              priority
              sizes="100vw"
              className="w-full h-auto object-cover"
            />

            <section className="max-w-7xl mx-auto px-4 mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">
                {/* Sticky Share */}
                <div className="hidden lg:block">
                  <div className="sticky top-20 flex flex-col items-center gap-5 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <FaShareSquare className="text-lg" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors text-2xl"
                        title="Share on Twitter"
                      >
                        < FaTwitter />
                      </Link>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
                        title="Share on Facebook"
                      >
                        <FaFacebookF />
                      </Link>
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#0A66C2] transition-colors text-2xl"
                        title="Share on LinkedIn"

                      >
                        <FaLinkedinIn />
                      </Link>
                      <Link
                        href={`https://medium.com/new-story?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors text-2xl"
                        title="Share on Medium"

                      >
                        <SiMedium />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <article className="max-w-3xl">
                  {/* AI Summary Block (if we have content) */}
                  {/* {aiSummary && (
                    <div className="bg-[#f5f5f0] border-l-4 border-orange-500 p-4 mb-6 rounded-r">
                      <strong className="block text-sm uppercase tracking-wide text-gray-700 mb-1">
                        📌 Quick Summary
                      </strong>
                      <p className="text-gray-800 leading-relaxed">{aiSummary}</p>
                    </div>
                  )} */}

                  {/* Key Points Block */}
                  {/* {keyPoints.length > 0 && (
                    <ul className="bg-[#fef9e6] border border-[#f0e0b0] rounded-xl p-4 mb-8 space-y-2 list-square pl-5">
                      {keyPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-800 text-sm md:text-base">
                          ✔ {point}
                        </li>
                      ))}
                    </ul>
                  )} */}

                  {/* Dropcap */}
                  {post.body?.dropcap && (
                    <p className="text-gray-700 leading-7 text-lg mb-4">
                      <span className="float-left text-8xl font-bold mr-3 leading-none text-black">
                        {post.body.dropcap.letter}
                      </span>
                      {post.body.dropcap.text}
                    </p>
                  )}

                  {/* Paragraphs */}
                  {post.body?.paragraphs?.map((para, idx) => (
                    <p key={idx} className="text-gray-700 leading-7 mb-4">
                      {para}
                    </p>
                  ))}

                  {/* Quote */}
                  {post.body?.quote && (
                    <blockquote className="text-center max-w-2xl mx-auto my-10 border-l-4 border-orange-500 pl-6">
                      <span className="text-orange-500 text-6xl block mb-4">"</span>
                      <p className="text-xl font-semibold leading-relaxed mb-4">
                        {post.body.quote.text}
                      </p>
                      <span className="text-sm text-gray-500 italic">— {post.body.quote.author}</span>
                    </blockquote>
                  )}

                  {/* Dynamic Sections */}
                  {post.body?.sections?.map((section, idx) => {
                    if (section.type === "imageWithText") {
                      return (
                        <div key={idx}>
                          {section.text?.map((t, i) => (
                            <p key={i} className="text-lg text-gray-700 mb-4">
                              {t}
                            </p>
                          ))}
                          {section.image && (
                            <div className="w-full mb-5">
                              <Image
                                src={section.image.url}
                                alt={section.image.alt}
                                width={1200}
                                height={800}
                                sizes="100vw"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                              />
                            </div>
                          )}
                          {section.additionalText?.map((t, i) => (
                            <p key={`add-${i}`} className="text-lg text-gray-700 mb-4">
                              {t}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    if (section.type === "twoColumnLayout") {
                      return (
                        <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                            {section.mainContent?.map((t, i) => (
                              <p key={i} className="text-lg text-gray-700 mb-4">
                                {t}
                              </p>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    if (section.type === "fullWidth") {
                      return (
                        <div key={idx} className="mt-5">
                          <div className="bg-white">
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            {section.content?.map((t, i) => (
                              <p key={i} className="text-lg text-gray-700 mb-4">
                                {t}
                              </p>
                            ))}
                            {section.image && (
                              <div>
                                <Image
                                  src={section.image.url}
                                  alt={section.image.alt}
                                  width={1200}
                                  height={800}
                                  sizes="100vw"
                                  className="object-cover w-full h-auto"
                                  loading="lazy"
                                />
                              </div>
                            )}
                            {section.subsections?.map((sub, subIdx) => (
                              <div key={subIdx} className="flex flex-col justify-start mt-5">
                                <h3 className="text-2xl font-bold mb-4">{sub.title}</h3>
                                {sub.text?.map((t, i) => (
                                  <p key={i} className="text-lg text-gray-700 mb-4">
                                    {t}
                                  </p>
                                ))}
                                {sub.checklist?.map((item, itemIdx) => (
                                  <h4 key={itemIdx} className="text-sm font-semibold mb-2">
                                    <span className="text-orange-500">✓</span> {item}
                                  </h4>
                                ))}
                                {sub.additionalText?.map((t, i) => (
                                  <p key={`sub-add-${i}`} className="text-lg text-gray-700 mb-4">
                                    {t}
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    if (section.type === "finalSection") {
                      return (
                        <div key={idx}>
                          <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                          {section.intro?.map((t, i) => (
                            <p key={i} className="text-lg text-gray-700 mb-4">
                              {t}
                            </p>
                          ))}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              {section.twoColumnContent?.left?.map((t, i) => (
                                <p key={i} className="text-lg text-gray-700 mb-4">
                                  {t}
                                </p>
                              ))}
                            </div>
                            {section.twoColumnContent?.rightQuote && (
                              <div className="flex items-center justify-center">
                                <blockquote className="text-center text-xl italic text-gray-800 font-semibold pl-4 border-l-4 border-orange-500">
                                  {section.twoColumnContent.rightQuote.text}
                                  <span className="text-center block mt-2 text-sm text-gray-500">
                                    — {section.twoColumnContent.rightQuote.author}
                                  </span>
                                </blockquote>
                              </div>
                            )}
                          </div>
                          {section.conclusion?.map((t, i) => (
                            <p key={`conclusion-${i}`} className="text-lg text-gray-700 mt-4 mb-4">
                              {t}
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </article>
              </div>

              {/* Share footer */}
              <div className="mt-5">
                <hr className="border-t-2 border-dotted border-gray-400" />
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2">
                    <FaShareSquare className="text-2xl" />
                    <span className="text-sm font-semibold">Share</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://facebook.com/sharer/sharer.php?u=${canonicalUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white transition"
                      title="Share on Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${post.heading}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-500 hover:text-white transition"
                      title="Share on Twitter"

                    >
                      < FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://reddit.com/submit?url=${canonicalUrl}&title=${post.heading}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white transition"
                      title="Share on Reddit"
                    >
                      <FaRedditAlien className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://instagram.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white transition"
                      title="Share on Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <hr className="border-t-2 border-dotted border-gray-400 mt-6" />
                <AuthorProfile author={author} />
                <PrevNextArticles prevPost={prevPost} nextPost={nextPost} category={category} />
              </div>
            </section>
          </div>

          <Sidecontent heroPost={heroPost} smallPosts={smallPosts} />
        </div>

        <RelatedNews currentCategory={category} relatedPosts={relatedPosts} />
      </section>
    </main>
  );
}
