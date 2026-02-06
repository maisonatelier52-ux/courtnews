// import React from "react";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { SiYoutube, SiRss } from "react-icons/si";

// const Footer = () => {
//   return (
//     <footer className="bg-[#111] text-white py-10 mt-auto w-full relative z-10">
//       <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 px-4">

//         {/* Logo Section */}
//         <div>
//           <img
//             src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
//             alt="Foxiz Logo"
//             className="w-[180px] mb-3"
//           />
//           <p className="text-sm text-gray-300">
//             Court News is a U.S.-based legal news platform covering courts, crime, civil rights, investigations, and law & justice across America.
//           </p>
//         </div>

//         {/* Categories */}
//         <div className="md:col-span-2">
//           <div className="grid grid-cols-2 gap-6 text-gray-300 md:grid-cols-3">

//             {/* Column 1 */}
//             <div className="flex flex-col gap-2">
//               <Link href="#" className="hover:text-orange-500">Innovate</Link>
//               <Link href="#" className="hover:text-orange-500">Gadget</Link>
//               <Link href="#" className="hover:text-orange-500">PC Hardware</Link>
//               <Link href="#" className="hover:text-orange-500">Review</Link>
//               <Link href="#" className="hover:text-orange-500">Software</Link>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-2">
//               <Link href="#" className="hover:text-orange-500">Medicine</Link>
//               <Link href="#" className="hover:text-orange-500">Children</Link>
//               <Link href="#" className="hover:text-orange-500">Coronavirus</Link>
//               <Link href="#" className="hover:text-orange-500">Nutrition</Link>
//               <Link href="#" className="hover:text-orange-500">Disease</Link>
//             </div>

//           </div>
//         </div>

//         {/* Social */}
//         <div className="md:pl-5 text-center md:text-left">
//           <h4 className="mb-3 font-semibold">Find Us on Socials</h4>
//           <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-300">
//             <Link href="#" aria-label="Facebook" className="hover:text-orange-500">
//               <FaFacebookF />
//             </Link>
//             <Link href="#" aria-label="Twitter" className="hover:text-orange-500">
//               <FaTwitter />
//             </Link>
//             <Link href="#" aria-label="YouTube" className="hover:text-orange-500">
//               <SiYoutube />
//             </Link>
//             <Link href="#" aria-label="RSS Feed" className="hover:text-orange-500">
//               <SiRss />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="text-center text-xs text-gray-500 mt-8 px-4">
//         Copyright © Court News {new Date().getFullYear()}. All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiYoutube, SiRss } from "react-icons/si";

// Correct imports – using relative paths from components/ folder
import categoryPageData from "../public/data/category/categorypagedata.json";
import authorsData from "../public/data/authors.json";

const Footer = () => {
  // Get first 5 category names (from object keys)
  const categories = Object.keys(categoryPageData).slice(0, 5);

  // Get first 5 authors safely
  const authors = authorsData?.categories?.slice(0, 5) || [];

  return (
    <footer className="bg-[#111] text-white py-10 w-full mt-auto">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

        {/* Logo & Description */}
        <div className="space-y-4">
          <img
            src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
            alt="Court News Logo"
            className="w-[180px]"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Court News is a U.S.-based legal news platform covering courts, crime, civil rights, investigations, and law & justice across America.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-4 font-semibold text-lg text-white">Categories</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/${cat}`}
                className="hover:text-orange-500 transition-colors capitalize"
              >
                {cat.replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>

        {/* Authors */}
        <div>
          <h4 className="mb-4 font-semibold text-lg text-white">Authors</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
            {authors.length > 0 ? (
              authors.map((item) => {
                const auth = item.author;
                return (
                  <Link
                    key={auth.id || auth.name}
                    href={`/authors/${auth.slug || slugify(auth.name)}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {auth.name}
                  </Link>
                );
              })
            ) : (
              <p className="text-gray-500 text-sm col-span-2">No authors listed</p>
            )}
          </div>
        </div>

        {/* Social & More */}
        <div className="text-center md:text-left">
          <h4 className="mb-4 font-semibold text-lg text-white">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-300 mb-6">
            <Link href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-orange-500 transition-colors">
              <SiYoutube />
            </Link>
            <Link href="#" aria-label="RSS Feed" className="hover:text-orange-500 transition-colors">
              <SiRss />
            </Link>
          </div>

          {/* Extra links (optional) */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
            <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6 px-4">
        Copyright © Court News {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

// Optional helper if you didn't add slug field
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default Footer;



// import React from "react";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { SiYoutube, SiRss } from "react-icons/si";
// import categoryPageData from "../public/data/category/categorypagedata.json";
// import authorsData from "../public/data/authors.json";

// // Optional slugify helper (if you didn't add slug field yet)
// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "")
//     .replace(/\-\-+/g, "-")
//     .replace(/^-+/, "")
//     .replace(/-+$/, "");
// }

// const Footer = () => {
//   const categories = Object.keys(categoryPageData).slice(0, 5);
//   const authors = authorsData?.categories?.slice(0, 5) || [];

//   return (
//     <footer className="bg-[#111] text-white py-10 w-full mt-auto">
//       <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

//         {/* Logo & Description */}
//         <div className="space-y-4">
//           <img
//             src="https://foxiz.io/business/wp-content/uploads/sites/6/2022/02/logo.png"
//             alt="Court News Logo"
//             className="w-[180px]"
//           />
//           <p className="text-sm text-gray-300">
//             Court News is a U.S.-based legal news platform covering courts, crime, civil rights, investigations, and law & justice across America.
//           </p>
//         </div>

//         {/* Categories */}
//         <div>
//           <h4 className="mb-4 font-semibold text-lg text-white">Categories</h4>
//           <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
//             {categories.map((cat) => (
//               <Link
//                 key={cat}
//                 href={`/${cat}`}
//                 className="hover:text-orange-500 transition-colors capitalize"
//               >
//                 {cat.replace("-", " ")}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Authors */}
//         <div>
//           <h4 className="mb-4 font-semibold text-lg text-white">Authors</h4>
//           <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 md:flex md:flex-col md:gap-2">
//             {authors.length > 0 ? (
//               authors.map((item) => {
//                 const auth = item.author;
//                 return (
//                   <Link
//                     key={auth.id || auth.name}
//                     href={`/authors/${auth.slug || slugify(auth.name)}`}
//                     className="hover:text-orange-500 transition-colors"
//                   >
//                     {auth.name}
//                   </Link>
//                 );
//               })
//             ) : (
//               <p className="text-gray-500 text-sm col-span-2">No authors listed</p>
//             )}
//           </div>
//         </div>

//         {/* Social */}
//         <div className="text-center md:text-left">
//           <h4 className="mb-4 font-semibold text-lg text-white">Follow Us</h4>
//           <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-300">
//             <Link href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
//               <FaFacebookF />
//             </Link>
//             <Link href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
//               <FaTwitter />
//             </Link>
//             <Link href="#" aria-label="YouTube" className="hover:text-orange-500 transition-colors">
//               <SiYoutube />
//             </Link>
//             <Link href="#" aria-label="RSS Feed" className="hover:text-orange-500 transition-colors">
//               <SiRss />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6 px-4">
//         Copyright © Court News {new Date().getFullYear()}. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;