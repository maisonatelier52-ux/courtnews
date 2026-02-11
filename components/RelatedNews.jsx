import Link from "next/link";

import Image from "next/image";

const RelatedNews = ({ currentCategory, relatedPosts }) => {
  // Helper: format date safely
  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    if (dateStr.includes(",")) return dateStr; // already formatted like "23 Jan, 2026"

    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr || "—";
    }
  };

  // Helper: format slug to readable category name
  const formatCategoryName = (cat) => {
    if (!cat) return "";
    return cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/\bUs\b/g, "US")
      .replace(/\bAi\b/g, "AI")
      .replace(/\bTech\b/g, "Tech & Innovation")
      .replace(/\bCrypto\b/g, "Cryptocurrency");
  };

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="text-black">
      <div className="mt-10 mb-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            More in {formatCategoryName(currentCategory)}
          </h2>
        </div>

        <div className="w-full border-t-4 border-orange-500 mb-6"></div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPosts.map((post, index) => (
            <Link
              key={post.id || post.slug || index}
              href={`/${post.category}/${post.slug}`}
              title={`View article: ${post.heading}`}
              className="flex flex-col group"
            >
              <div className="relative overflow-hidden ">
                <Image
                  src={post.image}
                  alt={post.alt || post.heading || "Related news image"}
                  width={1200}
                  height={800}
                  className="w-full h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  // loading={index < 2 ? "eager" : "lazy"} // prioritize first two
                  // placeholder="blur" // optional: better UX
                  // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApaUAAAAASUVORK5CYII=" // tiny placeholder
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-tight group-hover:text-orange-600 transition line-clamp-3">
                {post.heading}
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                By {post.author?.name || "Staff"}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {formatDate(post.date)}
              </p>
            </Link>
          ))}
        </div>

        {/* MOBILE LIST */}
        <div className="lg:hidden space-y-6">
          {relatedPosts.map((post, index) => (
            <Link
              key={post.id || post.slug || index}
              href={`/${post.category}/${post.slug}`}
              title={`View article: ${post.heading}`}
              className="flex items-start gap-4 group"
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold leading-snug group-hover:text-orange-600 transition line-clamp-2">
                  {post.heading}
                </h3>
                <p className="mt-1 text-xs text-gray-600">
                  By {post.author?.name || "Staff"}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {formatDate(post.date)}
                </p>
              </div>

              <div className="flex-shrink-0 w-20 h-16 overflow-hidden rounded">
                <Image
                  src={post.image}
                  alt={post.alt || post.heading || "Related news"}
                  width={80}
                  height={64}
                  className="w-full h-full object-cover"
                  sizes="80px"
                  loading="lazy"
                  // loading={index < 2 ? "eager" : "lazy"}
                 />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;