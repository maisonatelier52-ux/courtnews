// import Link from "next/link";

// const SITE_URL = "https://www.courtnews.org";

// export const metadata = {
//   title: "About CourtNews – Independent U.S. Justice & Legal News",
//   description:
//     "CourtNews is an independent U.S. news platform delivering unfiltered reporting on courts, justice, legal affairs, civil rights, and government accountability.",
//   alternates: {
//     canonical: `${SITE_URL}/about-us`,
//   },
//   openGraph: {
//     title: "About CourtNews – Independent U.S. Justice & Legal News",
//     description:
//       "CourtNews provides fearless, fact-based coverage of the American justice system, federal and state courts, landmark cases, and legal accountability.",
//     url: `${SITE_URL}/about-us`,
//     type: "website",
//     siteName: "CourtNews",
//     images: [
//       {
//         url: `${SITE_URL}/images/logo-og.png`,
//         width: 1200,
//         height: 630,
//         alt: "CourtNews – Justice & Legal Reporting",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About CourtNews",
//     description:
//       "Independent reporting on courts, justice, civil rights, and legal accountability in the United States.",
//     images: [`${SITE_URL}/images/courtnews-logo.webp`],
//   },
// };

// export default function About() {
//   const webPageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": `${SITE_URL}/about-us#webpage`,
//     url: `${SITE_URL}/about-us`,
//     name: "About CourtNews",
//     description: metadata.description,
//     isPartOf: {
//       "@type": "WebSite",
//       name: "CourtNews",
//       url: SITE_URL,
//     },
//     about: {
//       "@type": "NewsMediaOrganization",
//       name: "CourtNews",
//       url: SITE_URL,
//     },
//   };

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
//         name: "About",
//         item: `${SITE_URL}/about-us`,
//       },
//     ],
//   };

//   return (
//     <>
//       {/* JSON-LD STRUCTURED DATA */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-15  bg-white min-h-screen">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-red-600 text-black px-5 py-2 text-sm font-bold rounded-full mb-6 tracking-wide">
//               ABOUT US
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               COURT NEWS
//             </h1>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Justice. Accountability. The facts — no filter.
//             </p>
//           </div>

//           {/* Introduction */}
//           <div className="prose prose-lg prose-indigo max-w-none mb-16 leading-relaxed">
//             <p>
//               Welcome to <strong>CourtNews</strong> — an independent American
//               news outlet focused on the justice system, courts, legal
//               developments, and government accountability.
//             </p>
//             <p>
//               We launched because too many stories about the courts, civil
//               rights, police accountability, federal prosecutions, Supreme Court
//               decisions, and legal corruption are underreported, delayed, or
//               softened.
//             </p>
//             <p>
//               Our commitment is straightforward: deliver accurate, timely, and
//               unfiltered reporting on what happens inside America’s courtrooms
//               and justice institutions — before the narrative is shaped for you.
//             </p>
//           </div>

//           {/* What We Stand For */}
//           <div className="grid md:grid-cols-3 gap-10 mb-20">
//             {[
//               {
//                 title: "Independence",
//                 desc: "No corporate ownership. No political loyalty. Our only obligation is to the truth and to the public’s right to know.",
//               },
//               {
//                 title: "Depth & Precision",
//                 desc: "We read the dockets, motions, rulings, and transcripts — so you get the real story, not just the press release version.",
//               },
//               {
//                 title: "Accountability",
//                 desc: "We name names, cite documents, and follow the money. When the system fails or abuses power, we report it clearly and without fear.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
//               >
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Team & Writers */}
//           <div className="mb-20">
//             <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
//               Our Reporting Team
//             </h2>
//             <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
//               CourtNews is driven by experienced legal journalists, court
//               watchers, investigative reporters, and analysts who understand
//               legal documents and courtroom procedure.
//             </p>
//             <div className="text-center">
//               {/* <Link
//                 href="/authors"
//                 className="inline-block bg-indigo-700 text-white px-9 py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors text-lg shadow-sm"
//                 title="View our contributors"
//               >
//                 Meet Our Contributors →
//               </Link> */}
//             </div>
//           </div>

//           {/* Final Statement */}
//           <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 md:p-16 text-center">
//             <h2 className="text-3xl font-bold mb-6 text-black">
//               Why CourtNews Exists
//             </h2>
//             <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
//               Because justice delayed is justice denied.
//               <br />
//               Because courtrooms shape the country more than most headlines
//               admit.
//               <br />
//               Because power must be watched — especially when it wears a robe.
//             </p>
//             <p className="mt-10 text-xl font-semibold text-black">
//               This is CourtNews.
//               <br />
//               We cover the courts so you don’t have to look away.
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "About CourtNews – Independent U.S. Justice & Legal News",
  description:
    "CourtNews is an independent U.S. news platform delivering unfiltered reporting on courts, justice, legal affairs, civil rights, and government accountability.",
  keywords:
    "about courtnews, legal journalism, independent news, justice reporting, court news, legal accountability",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/about-us`,
    languages: {
      "en-US": `${SITE_URL}/about-us`,
    },
  },
  openGraph: {
    title: "About CourtNews – Independent U.S. Justice & Legal News",
    description:
      "CourtNews provides fearless, fact-based coverage of the American justice system, federal and state courts, landmark cases, and legal accountability.",
    url: `${SITE_URL}/about-us`,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews – Justice & Legal Reporting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CourtNews – Independent U.S. Justice News",
    description:
      "Independent reporting on courts, justice, civil rights, and legal accountability in the United States.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
    creator: "@CourtNews10",
  },
  // GEO and additional meta tags
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "39.8283;-98.5795",
    ICBM: "39.8283, -98.5795",
    "target-audience":
      "US legal professionals, journalists, and concerned citizens",
    coverage: "United States",
    distribution: "global",
    news_keywords:
      "about courtnews, legal journalism, independent news, justice reporting",
  },
};

export default function About() {
  const canonicalUrl = `${SITE_URL}/about-us`;

  // WebPage schema with speakable
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "About CourtNews",
    description: metadata.description,
    inLanguage: "en-US",
    dateModified: "2026-02-09",
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/body//h1",
        "/html/body//p[contains(@class, 'about-intro')]",
      ],
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "AboutPage",
      name: "About CourtNews",
      description: metadata.description,
    },
  };

  // Breadcrumb JSON-LD
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
        name: "About",
        item: canonicalUrl,
      },
    ],
  };

  // Organization JSON-LD (for rich results)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      "https://x.com/CourtNews10",
      "https://www.instagram.com/_court_news/",
      "https://www.reddit.com/user/court_news_7/",
      "https://substack.com/@courtnews",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: "courtnewsadmin@progresskingdom.com",
    },
    areaServed: "US",
    description:
      "CourtNews delivers fast, factual reporting on U.S. courts, criminal justice, civil rights, federal investigations, law, political, and major national cases.",
  };

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-15 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-600 text-white px-5 py-2 text-sm font-bold rounded-full mb-6 tracking-wide">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              COURT NEWS
            </h1>
            <p className="about-intro text-xl text-gray-700 max-w-3xl mx-auto">
              Justice. Accountability. The facts — no filter.
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg prose-indigo max-w-none mb-16 leading-relaxed">
            <p>
              Welcome to <strong>CourtNews</strong> — an independent American
              news outlet focused on the justice system, courts, legal
              developments, and government accountability.
            </p>
            <p>
              We launched because too many stories about the courts, civil
              rights, police accountability, federal prosecutions, Supreme Court
              decisions, and legal corruption are underreported, delayed, or
              softened.
            </p>
            <p>
              Our commitment is straightforward: deliver accurate, timely, and
              unfiltered reporting on what happens inside America’s courtrooms
              and justice institutions — before the narrative is shaped for you.
            </p>
          </div>

          {/* What We Stand For */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Independence",
                desc: "No corporate ownership. No political loyalty. Our only obligation is to the truth and to the public’s right to know.",
              },
              {
                title: "Depth & Precision",
                desc: "We read the dockets, motions, rulings, and transcripts — so you get the real story, not just the press release version.",
              },
              {
                title: "Accountability",
                desc: "We name names, cite documents, and follow the money. When the system fails or abuses power, we report it clearly and without fear.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Team & Writers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Our Reporting Team
            </h2>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              CourtNews is driven by experienced legal journalists, court
              watchers, investigative reporters, and analysts who understand
              legal documents and courtroom procedure.
            </p>
            <div className="text-center">
              {/* <Link
                href="/authors"
                className="inline-block bg-indigo-700 text-white px-9 py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors text-lg shadow-sm"
                title="View our contributors"
              >
                Meet Our Contributors →
              </Link> */}
            </div>
          </div>

          {/* Final Statement */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Why CourtNews Exists
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Because justice delayed is justice denied.
              <br />
              Because courtrooms shape the country more than most headlines
              admit.
              <br />
              Because power must be watched — especially when it wears a robe.
            </p>
            <p className="mt-10 text-xl font-semibold text-black">
              This is CourtNews.
              <br />
              We cover the courts so you don’t have to look away.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
