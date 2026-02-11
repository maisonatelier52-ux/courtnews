import Image from 'next/image';
import Link from 'next/link';

export default function PrevNextArticles({ prevPost, nextPost, category }) {
  return (
    <div className="mt-10">
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Previous Article */}
        <div className="flex flex-col items-start gap-4 lg:block hidden">
          <span className="text-sm text-gray-600">Previous Article</span>
          <div className="flex items-center gap-4 mt-4 hover:text-blue-600 cursor-pointer transition">
            {prevPost ? (
              <Link 
                href={`/${category}/${prevPost.slug}`}
                title={prevPost.heading}
                className="flex items-center gap-4"
              >
                <Image
                  src={prevPost.image}
                  alt={prevPost.alt || "Previous post image"}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  sizes="64px"
                  loading="lazy"
                />
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {prevPost.heading}
                </h3>
              </Link>
            ) : (
              <p className="text-sm text-gray-500">No previous article</p>
            )}
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300 lg:hidden" />

        {/* Next Article */}
        <div className="flex flex-col items-end gap-4 text-right lg:block hidden">
          <span className="text-sm text-gray-600">Next Article</span>
          <div className="flex items-center gap-4 mt-4 sm:flex-row-reverse hover:text-blue-600 cursor-pointer transition">
            {nextPost ? (
              <Link 
                href={`/${category}/${nextPost.slug}`}
                title={nextPost.heading}
                className="flex items-center gap-4 sm:flex-row-reverse"
              >
                <Image
                  src={nextPost.image}
                  alt={nextPost.alt || "Next post image"}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  sizes="64px"
                  loading="lazy"
                />
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 text-right">
                  {nextPost.heading}
                </h3>
              </Link>
            ) : (
              <p className="text-sm text-gray-500">No next article</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}