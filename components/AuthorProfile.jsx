// import Image from 'next/image';
// import Link from 'next/link';
// import { FaXTwitter, FaInstagram } from 'react-icons/fa6';


// const slugify = (text) => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w-]+/g, '');
// };

// export default function AuthorProfile({ author }) {
//   if (!author) return null;

//   return (
//     <div className="mt-10">
//       <div className="mt-6 flex justify-between items-center gap-6">
//         <div className="flex items-center gap-4">
//           {/* Author Image */}
//           <img 
//             src={author.profileImage} 
//             alt={author.name} 
//             className="w-16 h-16 object-cover rounded-full" 
//           />
//           <div>
//             {/* Author Name */}
//             <Link
//       href={`/authors/${slugify(author.name)}`} // ← this is the correct link
//       title={author.name}
//       className="font-semibold text-sm text-gray-900 hover:text-blue-600 hover:underline"
//     >
//               {author.name}
//             </Link>
//             {/* Author Role */}
//             <p className="text-gray-800 text-xs">{author.jobtitle}</p>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center gap-4">
//           <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
//           <div className="flex items-center gap-3">
//             {/* Social Media Icons */}
//             {author.social?.twitter && (
//               <a 
//                 href={author.social.twitter} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transition"
//                 title="Follow on Twitter"
//               >
//                 <FaXTwitter className="w-5 h-5" />
//               </a>
//             )}
//             {author.social?.instagram && (
//               <a 
//                 href={author.social.instagram} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-blue-600 transition"
//                 title="Follow on Instagram"
//               >
//                 <FaInstagram className="w-5 h-5" />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Author Bio */}
//       <p className="mt-6 text-sm text-gray-600">
//         {author.bio}
//       </p>
//     </div>
//   );
// }


// components/AuthorProfile.jsx

import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

import { slugify } from "../utils/slugify";   

export default function AuthorProfile({ author }) {
  if (!author) return null;

  return (
    <div className="mt-10">
      <div className="mt-6 flex justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          {/* Author Image */}
          <img
            src={author.profileImage}
            alt={author.name}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div>
            {/* Author Name – now uses imported slugify */}
            <Link
              href={`/authors/${slugify(author.name)}`}  // ← correct & clean
              title={author.name}
              className="font-semibold text-sm text-gray-900 hover:text-blue-600 hover:underline"
            >
              {author.name}
            </Link>

            {/* Author Role */}
            <p className="text-gray-800 text-xs">{author.jobtitle?.trim()}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
          <div className="flex items-center gap-3">
            {/* Social Media Icons */}
            {author.social?.twitter && (
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            )}
            {author.social?.instagram && (
              <a
                href={author.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
                title="Follow on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <p className="mt-6 text-sm text-gray-600">
        {author.bio}
      </p>
    </div>
  );
}