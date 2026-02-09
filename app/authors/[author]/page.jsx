// import categoryPageData from "../../../public/data/category/categorypagedata.json";
// import authorsData from "../../../public/data/authors.json";
// import Link from "next/link";
// import Image from "next/image";
// import { FaTwitter, FaQuora, FaReddit, FaMedium } from "react-icons/fa";

// // Find author by slug (using the "slug" field you added in JSON)
// const getAuthorBySlug = (authorSlug) => {
//   for (const cat of authorsData.categories) {
//     const author = cat.author;
//     if (author.slug === authorSlug) {
//       return {
//         ...author,
//         category: cat.category,
//       };
//     }
//   }
//   return null;
// };

// // Get articles for this author's category
// const getArticlesByAuthor = (category) => {
//   return categoryPageData[category] || [];
// };

// export default async function AuthorPage({ params }) {
//   const { author } = await params;
//   const authorSlug = decodeURIComponent(author);

//   const authorData = getAuthorBySlug(authorSlug);

//   if (!authorData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6">Author Not Found</h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Sorry, we couldn't find an author with that name.
//           </p>
//           <Link
//             href="/"
//             className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
//           >
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Get and sort articles
//   const authorArticles = getArticlesByAuthor(authorData.category);
//   const sortedArticles = [...authorArticles].sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );
//   const latestArticles = sortedArticles.slice(0, 6);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* === Beautiful Profile Header (your design) === */}
//       <div className="mb-1 relative flex-shrink-0">
//         {/* Background with Radial Gradient Dots */}
//         <div
//           className="absolute inset-0 bg-gray-100 bg-opacity-20"
//           style={{
//             backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
//             backgroundSize: "16px 16px",
//           }}
//         ></div>

//         {/* Content Container */}
//         <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col items-center lg:flex-row">
//           {/* Left: Author Profile Image */}
//           <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 lg:mb-0 flex-shrink-0">
//             <Image
//               src={authorData.profileImage}
//               alt={`${authorData.name} profile picture`}
//               width={128}
//               height={128}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right: Author Info */}
//           <div className="lg:ml-6 flex flex-col items-center lg:items-start text-center lg:text-left">
//             {/* Author Name */}
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-2 border-dotted border-orange-500">
//               {authorData.name}
//             </h1>

//             {/* Author Bio */}
//             <p className="text-lg text-gray-700 mb-2 max-w-2xl">
//               {authorData.bio}
//             </p>

//             {/* Author Role */}
//             <p className="text-sm text-gray-500 mb-4">
//               {authorData.jobtitle?.trim() || "Contributor"}
//             </p>

//             {/* Social Media Icons */}
//             {Object.values(authorData.social || {}).some(Boolean) && (
//               <div className="flex gap-4 justify-center lg:justify-start">
//                 {authorData.social.twitter && (
//                   <a
//                     href={authorData.social.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-blue-500 transition"
//                     title="Twitter"
//                   >
//                     <FaTwitter size={24} />
//                   </a>
//                 )}
//                 {authorData.social.quora && (
//                   <a
//                     href={authorData.social.quora}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-red-600 transition"
//                     title="Quora"
//                   >
//                     <FaQuora size={24} />
//                   </a>
//                 )}
//                 {authorData.social.reddit && (
//                   <a
//                     href={authorData.social.reddit}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-orange-600 transition"
//                     title="Reddit"
//                   >
//                     <FaReddit size={24} />
//                   </a>
//                 )}
//                 {authorData.social.medium && (
//                   <a
//                     href={authorData.social.medium}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-black transition"
//                     title="Medium"
//                   >
//                     <FaMedium size={24} />
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* === Articles Section (your grid layout) === */}
//       <div className="flex-grow">
//         <div className="container mx-auto px-6 py-10">
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Articles by {authorData.name}
//             </h2>
//             <div className="w-full border-t-4 border-orange-500"></div>
//           </div>

//           {latestArticles.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-600 text-xl">
//                 No articles available by this author yet.
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
//               {latestArticles.map((article) => (
//                 <Link
//                   key={article.slug}
//                   href={`/${authorData.category}/${article.slug}`}
//                   className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 "
//                 >
//                   <Image
//                     src={article.image || article.heroImage || "/images/placeholder.jpg"}
//                     alt={article.alt || article.heading}
//                     width={400}
//                     height={225}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="pt-4 px-4 pb-6">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition">
//                       {article.heading || article.metaTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500">
//                       {article.date} · {authorData.name}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaQuora, FaReddit, FaMedium, FaLinkedin, FaFacebook } from "react-icons/fa";

const SITE_URL = "https://www.courtnews.org";

// Find author by slug
const getAuthorBySlug = (authorSlug) => {
  for (const cat of authorsData.categories) {
    const author = cat.author;
    if (author.slug === authorSlug) {
      return {
        ...author,
        category: cat.category,
      };
    }
  }
  return null;
};

// Get articles for this author's category
const getArticlesByAuthor = (category) => {
  return categoryPageData[category] || [];
};

// =====================
// METADATA GENERATION
// =====================
export async function generateMetadata({ params }) {
  const { author } = await params;
  const authorSlug = decodeURIComponent(author);

  const authorData = getAuthorBySlug(authorSlug);

  if (!authorData) {
    return {
      title: "Author Not Found — CourtNews",
      description: "The author you are looking for does not exist on CourtNews.",
      robots: "noindex",
    };
  }

  const profileImageUrl = authorData.profileImage.startsWith("http")
    ? authorData.profileImage
    : `${SITE_URL}${authorData.profileImage}`;

  const canonicalUrl = `${SITE_URL}/author/${authorSlug}`;

  return {
    title: `${authorData.name} — CourtNews Journalist`,
    description:
      authorData.bio ||
      `Read articles and investigative journalism written by ${authorData.name} on CourtNews.`,
    keywords: `${authorData.name}, journalist, author, ${authorData.category}, news reporter`,
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": canonicalUrl,
        "en-US": canonicalUrl,
      },
    },
    openGraph: {
      title: `${authorData.name} — CourtNews Journalist`,
      description:
        authorData.bio ||
        `Read articles by ${authorData.name} on CourtNews.`,
      url: canonicalUrl,
      type: "profile",
      firstName: authorData.name.split(" ")[0],
      lastName: authorData.name.split(" ").slice(1).join(" "),
      siteName: "CourtNews",
      locale: "en_US",
      images: [
        {
          url: profileImageUrl,
          width: 400,
          height: 400,
          alt: `${authorData.name} profile picture`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${authorData.name} — CourtNews Journalist`,
      description:
        authorData.bio ||
        `Read articles by ${authorData.name} on CourtNews.`,
      images: [profileImageUrl],
      creator: authorData.social?.twitter || "@courtnews",
    },
  };
}

export default async function AuthorPage({ params }) {
  const { author } = await params;
  const authorSlug = decodeURIComponent(author);

  const authorData = getAuthorBySlug(authorSlug);

  if (!authorData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Author Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find an author with that name on CourtNews.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  // Get and sort articles
  const authorArticles = getArticlesByAuthor(authorData.category);
  const sortedArticles = [...authorArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestArticles = sortedArticles.slice(0, 6);

  const canonicalUrl = `${SITE_URL}/author/${authorSlug}`;
  const profileImageUrl = authorData.profileImage.startsWith("http")
    ? authorData.profileImage
    : `${SITE_URL}${authorData.profileImage}`;

  // =====================
  // JSON-LD STRUCTURED DATA
  // =====================

  /* Person Schema */
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorData.name,
    url: canonicalUrl,
    image: profileImageUrl,
    description: authorData.bio || `Journalist at CourtNews`,
    jobTitle: authorData.jobtitle?.trim() || "Journalist",
    worksFor: {
      "@type": "NewsMediaOrganization",
      name: "CourtNews",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.webp`,
    },
    // Add social profiles
    sameAs: [
      authorData.social?.twitter,
      authorData.social?.linkedin,
      authorData.social?.facebook,
      authorData.social?.quora,
      authorData.social?.reddit,
      authorData.social?.medium,
    ].filter(Boolean),
  };

  /* Breadcrumb Schema */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Authors",
        item: `${SITE_URL}/authors`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: authorData.name,
        item: canonicalUrl,
      },
    ],
  };

  /* Articles Schema - For each article */
  const articlesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: latestArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.heading || article.metaTitle,
      url: `${SITE_URL}/${authorData.category}/${article.slug}`,
      image: article.image || article.heroImage,
      datePublished: new Date(article.date).toISOString(),
    })),
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* JSON-LD Structured Data */}
      <script
        id="author-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="author-articles-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
      />

      {/* ===== PROFILE HEADER SECTION ===== */}
      <section className="mb-1 relative flex-shrink-0" aria-label="Author profile header">
        {/* Background with Radial Gradient Dots */}
        <div
          className="absolute inset-0 bg-gray-100 bg-opacity-20"
          style={{
            backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        ></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto flex flex-col items-center gap-8 lg:flex-row">
          {/* Author Profile Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl flex-shrink-0">
            <Image
              src={authorData.profileImage}
              alt={`${authorData.name} profile picture`}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Author Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            {/* Only ONE H1 on page */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              {authorData.name}
            </h1>

            {/* Job Title */}
            {authorData.jobtitle?.trim() && (
              <p className="text-lg font-semibold text-orange-600 mb-2">
                {authorData.jobtitle.trim()} at CourtNews
              </p>
            )}

            {/* Author Bio */}
            {authorData.bio && (
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {authorData.bio}
              </p>
            )}

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-semibold text-gray-600 uppercase">
                Covering:
              </span>
              <Link
                href={`/${authorData.category}`}
                className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition"
              >
                {authorData.category.replace(/-/g, " ")}
              </Link>
            </div>

            {/* Social Media Icons */}
            {Object.values(authorData.social || {}).some(Boolean) && (
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                {authorData.social?.twitter && (
                  <a
                    href={authorData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                    title="Twitter"
                    aria-label={`${authorData.name} on Twitter`}
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {authorData.social?.linkedin && (
                  <a
                    href={authorData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-blue-700 hover:text-white transition"
                    title="LinkedIn"
                    aria-label={`${authorData.name} on LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {authorData.social?.facebook && (
                  <a
                    href={authorData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
                    title="Facebook"
                    aria-label={`${authorData.name} on Facebook`}
                  >
                    <FaFacebook size={20} />
                  </a>
                )}
                {authorData.social?.quora && (
                  <a
                    href={authorData.social.quora}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white transition"
                    title="Quora"
                    aria-label={`${authorData.name} on Quora`}
                  >
                    <FaQuora size={20} />
                  </a>
                )}
                {authorData.social?.reddit && (
                  <a
                    href={authorData.social.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-orange-600 hover:text-white transition"
                    title="Reddit"
                    aria-label={`${authorData.name} on Reddit`}
                  >
                    <FaReddit size={20} />
                  </a>
                )}
                {authorData.social?.medium && (
                  <a
                    href={authorData.social.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-black hover:text-white transition"
                    title="Medium"
                    aria-label={`${authorData.name} on Medium`}
                  >
                    <FaMedium size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== ARTICLES SECTION ===== */}
      <section className="flex-grow" aria-label="Articles by author">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <div className="w-full border-t-4 border-orange-500"></div>
          </div>

          {/* Articles Grid */}
          {latestArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                No articles available by this author yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article, idx) => (
                <article
                  key={article.slug || idx}
                  className="bg-white  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Link
                    href={`/${authorData.category}/${article.slug}`}
                    className="block group"
                  >
                    {/* Article Image */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={article.image || article.heroImage || "/images/placeholder.jpg"}
                        alt={article.alt || article.heading}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="pt-6 px-6 pb-6">
                      {/* Article Title - H3 */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition">
                        {article.heading || article.metaTitle}
                      </h3>

                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <time dateTime={new Date(article.date).toISOString()}>
                          {article.date}
                        </time>
                        <span className="font-semibold text-orange-600">
                          {authorData.name}
                        </span>
                      </div>

                      {/* Article Excerpt */}
                      {article.excerpt && (
                        <p className="text-gray-700 text-sm line-clamp-2">
                          {article.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}