import categoryPageData from "../../../public/data/category/categorypagedata.json";
import authorsData from "../../../public/data/authors.json";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaQuora, FaReddit, FaMedium } from "react-icons/fa";

// Find author by slug (using the "slug" field you added in JSON)
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

export default async function AuthorPage({ params }) {
  const { author } = await params;
  const authorSlug = decodeURIComponent(author);

  const authorData = getAuthorBySlug(authorSlug);

  if (!authorData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Author Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find an author with that name.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get and sort articles
  const authorArticles = getArticlesByAuthor(authorData.category);
  const sortedArticles = [...authorArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestArticles = sortedArticles.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* === Beautiful Profile Header (your design) === */}
      <div className="mb-1 relative flex-shrink-0">
        {/* Background with Radial Gradient Dots */}
        <div
          className="absolute inset-0 bg-gray-100 bg-opacity-20"
          style={{
            backgroundImage: "radial-gradient(#dcdcdc 1.2px, transparent 1.2px)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto flex flex-col items-center lg:flex-row">
          {/* Left: Author Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-4 lg:mb-0 flex-shrink-0">
            <Image
              src={authorData.profileImage}
              alt={`${authorData.name} profile picture`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Author Info */}
          <div className="lg:ml-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Author Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-2 border-dotted border-orange-500">
              {authorData.name}
            </h1>

            {/* Author Bio */}
            <p className="text-lg text-gray-700 mb-2 max-w-2xl">
              {authorData.bio}
            </p>

            {/* Author Role */}
            <p className="text-sm text-gray-500 mb-4">
              {authorData.jobtitle?.trim() || "Contributor"}
            </p>

            {/* Social Media Icons */}
            {Object.values(authorData.social || {}).some(Boolean) && (
              <div className="flex gap-4 justify-center lg:justify-start">
                {authorData.social.twitter && (
                  <a
                    href={authorData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition"
                    title="Twitter"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {authorData.social.quora && (
                  <a
                    href={authorData.social.quora}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition"
                    title="Quora"
                  >
                    <FaQuora size={24} />
                  </a>
                )}
                {authorData.social.reddit && (
                  <a
                    href={authorData.social.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition"
                    title="Reddit"
                  >
                    <FaReddit size={24} />
                  </a>
                )}
                {authorData.social.medium && (
                  <a
                    href={authorData.social.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                    title="Medium"
                  >
                    <FaMedium size={24} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === Articles Section (your grid layout) === */}
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Articles by {authorData.name}
            </h2>
            <div className="w-full border-t-4 border-orange-500"></div>
          </div>

          {latestArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">
                No articles available by this author yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${authorData.category}/${article.slug}`}
                  className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 "
                >
                  <Image
                    src={article.image || article.heroImage || "/images/placeholder.jpg"}
                    alt={article.alt || article.heading}
                    width={400}
                    height={225}
                    className="w-full h-56 object-cover"
                  />
                  <div className="pt-4 px-4 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition">
                      {article.heading || article.metaTitle}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {article.date} · {authorData.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}