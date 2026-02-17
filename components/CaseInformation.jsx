// "use client";

// import { useState, useEffect } from "react";

// export default function CaseInformation({ caseInfo }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Detect screen size
//   useEffect(() => {
//     const checkScreen = () => {
//       const desktop = window.innerWidth >= 768;
//       setIsDesktop(desktop);
//       setIsOpen(desktop); // Always open on desktop
//     };

//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   if (!caseInfo) return null;

//   return (
//     <section
//       className="mb-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
//       aria-labelledby="case-information-heading"
//     >
//       <div className="p-4">
//         {/* Header */}
//         <button
//           onClick={() => {
//             if (!isDesktop) setIsOpen(!isOpen);
//           }}
//           className="w-full flex justify-between items-center text-left"
//         >
//           <h2
//             id="case-information-heading"
//             className="text-lg font-bold"
//           >
//             Case Information
//           </h2>

//           {/* Arrow icon (mobile only) */}
//           {!isDesktop && (
//             <span
//               className={`transition-transform duration-200 text-gray-600 ${
//                 isOpen ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               ▼
//             </span>
//           )}
//         </button>

//         {/* Content */}
//         <div className={`${isOpen ? "block" : "hidden"} mt-3`}>
//           {/* Case Meta */}
//           <div className="grid md:grid-cols-2 gap-3 mb-3">
//             <div>
//               <span className="text-sm font-semibold text-gray-600">
//                 Country/State:
//               </span>
//               <p className="text-lg">{caseInfo.countryState}</p>
//             </div>

//             <div>
//               <span className="text-sm font-semibold text-gray-600">
//                 Case Number:
//               </span>
//               <p className="text-lg">{caseInfo.caseNumber}</p>
//             </div>
//           </div>

//           <hr className="my-3 border-gray-200" />

//           {/* Status */}
//           <h3 className="text-base font-bold mb-2">Case Status</h3>

//           <div className="grid md:grid-cols-2 gap-3">
//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-red-100 text-red-800 border-red-300">
//                 Accusation/Allegation
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.accusation}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-blue-100 text-blue-800 border-blue-300">
//                 On Trial
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.onTrial}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-yellow-100 text-yellow-800 border-yellow-300">
//                 Current Status
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.currentStatus}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-green-100 text-green-800 border-green-300">
//                 Outcome
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.outcome}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { FaPlus } from "react-icons/fa";

// import { useState, useEffect } from "react";

// export default function CaseInformation({ caseInfo }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const desktop = window.innerWidth >= 768;
//     setIsDesktop(desktop);

//     // Set initial state only once
//     if (desktop) {
//       setIsOpen(true);
//     } else {
//       setIsOpen(false);
//     }

//     // Resize handler (do NOT reset mobile state)
//     const handleResize = () => {
//       const nowDesktop = window.innerWidth >= 768;
//       setIsDesktop(nowDesktop);

//       // If switching to desktop, force open
//       if (nowDesktop) {
//         setIsOpen(true);
//       }
//       // If switching to mobile, keep current state (do nothing)
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (!caseInfo) return null;

//   const toggleOpen = () => {
//     if (!isDesktop) {
//       setIsOpen(prev => !prev);
//     }
//   };

//   return (
//     <section
//       className="mb-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
//       aria-labelledby="case-information-heading"
//     >
//       <div className="p-4">
//         {/* Header */}
//         <button
//           onClick={toggleOpen}
//           className="w-full flex justify-between items-center text-left"
//         >
//           <h2
//             id="case-information-heading"
//             className="text-lg font-bold"
//           >
//             Case Information
//           </h2>

//           {/* Arrow (mobile only) */}
//           {!isDesktop && (
//             <span
//               className={`transition-transform duration-200 text-gray-600 ${
//                 isOpen ? "rotate-180" : ""
//               }`}
//             >
//               <FaPlus />
//             </span>
//           )}
//         </button>

//         {/* Content */}
//         <div className={`${isOpen ? "block" : "hidden"} mt-3`}>
//           <div className="grid md:grid-cols-2 gap-3 mb-3">
//             <div>
//               <span className="text-sm font-semibold text-gray-600">
//                 Country/State:
//               </span>
//               <p className="text-lg">{caseInfo.countryState}</p>
//             </div>

//             <div>
//               <span className="text-sm font-semibold text-gray-600">
//                 Case Number:
//               </span>
//               <p className="text-lg">{caseInfo.caseNumber}</p>
//             </div>
//           </div>

//           <hr className="my-3 border-gray-200" />

//           <h3 className="text-base font-bold mb-2">Case Status</h3>

//           <div className="grid md:grid-cols-2 gap-3">
//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-red-100 text-red-800 border-red-300">
//                 Accusation/Allegation
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.accusation}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-blue-100 text-blue-800 border-blue-300">
//                 On Trial
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.onTrial}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-yellow-100 text-yellow-800 border-yellow-300">
//                 Current Status
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.currentStatus}
//               </p>
//             </div>

//             <div>
//               <span className="inline-block mb-1 px-2 py-0.5 text-sm font-semibold rounded border bg-green-100 text-green-800 border-green-300">
//                 Outcome
//               </span>
//               <p className="text-lg text-gray-700">
//                 {caseInfo.status?.outcome}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";

export default function CaseInformation({ caseInfo }) {
  // Always start CLOSED on page load / reload
  const [isOpen, setIsOpen] = useState(false);

  if (!caseInfo) return null;

  // Memoized status items (good optimization — keep it)
  const statusItems = useMemo(
    () => [
      {
        label: "Accusation/Allegation",
        value: caseInfo.status?.accusation || "Not specified",
        badge: "bg-red-50 text-red-800 border-red-200",
      },
      {
        label: "On Trial",
        value: caseInfo.status?.onTrial || "Not specified",
        badge: "bg-blue-50 text-blue-800 border-blue-200",
      },
      {
        label: "Current Status",
        value: caseInfo.status?.currentStatus || "Not specified",
        badge: "bg-yellow-50 text-yellow-800 border-yellow-200",
      },
      {
        label: "Outcome",
        value: caseInfo.status?.outcome || "Not specified",
        badge: "bg-green-50 text-green-800 border-green-200",
      },
    ],
    [caseInfo.status]
  );

  return (
    <>
      {/* Optional JSON-LD schema – kept as-is */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalCase",
            name: `Case ${caseInfo.caseNumber || "N/A"}`,
            identifier: caseInfo.caseNumber,
            jurisdiction: caseInfo.countryState,
            status: caseInfo.status?.currentStatus,
            description: caseInfo.status?.accusation
              ? `Accusation: ${caseInfo.status.accusation}`
              : undefined,
            result: caseInfo.status?.outcome,
          }),
        }}
        suppressHydrationWarning
      />

      <section
        className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        aria-labelledby="case-heading"
      >
        {/* Toggle Header */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-expanded={isOpen}
          aria-controls="case-content"
        >
          <h2 id="case-heading" className="text-lg font-bold text-gray-900">
            Case Information
          </h2>

          {/* FaPlus rotates like + → × when open */}
          <FaPlus
            className={`text-gray-600 text-xl transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>

        {/* Collapsible Content – starts hidden */}
        <div
          id="case-content"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-5 border-t border-gray-200 bg-gray-50">
            {/* Meta Info */}
            <dl className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <dt className="text-sm font-semibold text-gray-600 mb-1">
                  Country/State
                </dt>
                <dd className="text-lg text-gray-900 font-medium">
                  {caseInfo.countryState || "—"}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold text-gray-600 mb-1">
                  Case Number
                </dt>
                <dd className="text-lg text-gray-900 font-medium">
                  {caseInfo.caseNumber || "—"}
                </dd>
              </div>
            </dl>

            <hr className="my-6 border-gray-200" />

            {/* Status Section */}
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Case Status
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {statusItems.map((item, idx) => (
                <div key={idx}>
                  <span
                    className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full border ${item.badge}`}
                  >
                    {item.label}
                  </span>
                  <p className="text-lg text-gray-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}