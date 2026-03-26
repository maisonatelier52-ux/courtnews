// import Link from "next/link"; // only if you need it later — not used here

// const SITE_URL = "https://www.courtnews.org";

// export const metadata = {
//   title: "Privacy Policy — CourtNews",
//   description:
//     "Read CourtNews's Privacy Policy to understand how we collect, use, protect, and handle your information while you access our independent U.S. justice and legal news platform.",
//   alternates: {
//     canonical: `${SITE_URL}/privacy-policy`,
//   },
//   openGraph: {
//     title: "CourtNews Privacy Policy",
//     description:
//       "Learn how CourtNews protects your privacy and manages information including cookies, analytics, and data usage on our justice-focused news site.",
//     url: `${SITE_URL}/privacy-policy`,
//     type: "website",
//     siteName: "CourtNews",
//     images: [
//       {
//         url: `${SITE_URL}/images/logo-og.png`,
//         width: 1200,
//         height: 630,
//         alt: "Privacy Policy - CourtNews",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "CourtNews Privacy Policy",
//     description:
//       "Understand how CourtNews collects, uses, and safeguards user information across our independent legal and justice news platform.",
//     images: [`${SITE_URL}/images/courtnews-logo.webp`],
//   },
// };

// export default function PrivacyPolicy() {
//   return (
//     <>
//       {/* JSON-LD STRUCTURED DATA */}
//       <script
//         id="privacy-policy-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "PrivacyPolicy",
//             name: "CourtNews Privacy Policy",
//             url: `${SITE_URL}/privacy-policy`,
//             publisher: {
//               "@type": "Organization",
//               name: "CourtNews",
//               url: SITE_URL,
//             },
//           }),
//         }}
//       />

//       {/* Breadcrumb JSON-LD */}
//       <script
//         id="privacy-breadcrumb-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: SITE_URL,
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Privacy Policy",
//                 item: `${SITE_URL}/privacy-policy`,
//               },
//             ],
//           }),
//         }}
//       />

//       <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-15  bg-white min-h-screen">
//         <div className="max-w-4xl mx-auto prose prose-lg prose-indigo">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//               Privacy Policy
//             </h1>
//             <p className="text-lg text-gray-600">
//               Last updated: February 9, 2026
//             </p>
//           </div>

//           <p>
//             At <strong>CourtNews</strong>, we are committed to protecting your privacy. 
//             This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at courtnews.org.
//           </p>

//           <h2 className="font-semibold py-3 text-lg mt-10">1. Information We Collect</h2>
//           <ul className="list-disc pl-6 space-y-2">
//             <li><strong>Automatically Collected:</strong> IP address, browser type and version, device information, operating system, pages visited, time and duration of visits, referring site</li>
//             <li><strong>Cookies & Similar Technologies:</strong> We use cookies and similar tracking technologies for site analytics, performance, and basic functionality. You can manage or disable cookies through your browser settings.</li>
//             <li><strong>Voluntarily Provided:</strong> Email address (if you subscribe to updates or newsletters), name or other details if you contact us directly</li>
//           </ul>

//           <h2 className="font-semibold py-3 text-lg mt-10">2. How We Use Your Information</h2>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>To operate, maintain, secure, and improve our website</li>
//             <li>To analyze how visitors interact with our legal and justice reporting</li>
//             <li>To detect, prevent, and respond to technical issues or malicious activity</li>
//             <li>To communicate with you if you subscribe to our newsletter (you can unsubscribe at any time)</li>
//           </ul>

//           <h2 className="font-semibold py-3 text-lg mt-10">3. Sharing of Information</h2>
//           <p>
//             We do <strong>not</strong> sell your personal information to third parties.
//             We may share anonymized or aggregated data with:
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Analytics and performance providers (e.g., Google Analytics)</li>
//             <li>Hosting, CDN, and security service providers (e.g., Cloudflare)</li>
//             <li>Law enforcement or government authorities when required by law or valid legal process</li>
//           </ul>

//           <h2 className="font-semibold py-3 text-lg mt-10">4. Third-Party Services</h2>
//           <p>
//             We may use the following third-party services (each with its own privacy policy):
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Google Analytics (website usage analytics)</li>
//             <li>Cloudflare (security, performance, and DDoS protection)</li>
//             <li>Email newsletter service provider (only if you subscribe)</li>
//           </ul>

//           <h2 className="font-semibold py-3 text-lg mt-10">5. Your Rights and Choices</h2>
//           <p>
//             Depending on your location and applicable law, you may have the right to:
//           </p>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Access the personal data we hold about you</li>
//             <li>Request correction or deletion of your data (subject to legal exceptions)</li>
//             <li>Opt out of cookies and tracking via your browser settings</li>
//             <li>Unsubscribe from any email communications at any time</li>
//           </ul>

//           <h2 className="font-semibold py-3 text-lg mt-10">6. Data Security</h2>
//           <p>
//             We use reasonable administrative, technical, and physical safeguards to protect your information. 
//             However, no method of transmission over the Internet or electronic storage is completely secure.
//           </p>

//           <h2 className="font-semibold py-3 text-lg mt-10">7. Children's Privacy</h2>
//           <p>
//             Our website is not directed to children under the age of 13. 
//             We do not knowingly collect personal information from children under 13. 
//             If we become aware that we have collected such information, we will take steps to delete it.
//           </p>

//           <h2 className="font-semibold py-3 text-lg mt-10">8. Changes to This Privacy Policy</h2>
//           <p>
//             We may update this Privacy Policy from time to time. 
//             The “Last updated” date at the top of this page indicates when the policy was last revised. 
//             We encourage you to review this page periodically.
//           </p>

//           <h2 className="font-semibold py-3 text-lg mt-10">9. Contact Us</h2>
//           <p>
//             If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
//           </p>
//           <p className="font-medium text-indigo-700 mt-4">
//             privacy@courtnews.org
//           </p>

//           {/* <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} CourtNews. All rights reserved.
//           </div> */}
//         </div>
//       </main>
//     </>
//   );
// }


const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Privacy Policy — CourtNews",
  description:
    "Read CourtNews's Privacy Policy to understand how we collect, use, protect, and handle your information while you access our independent U.S. justice and legal news platform.",
  keywords:
    "privacy policy, data protection, cookies, GDPR, CCPA, user data, courtnews privacy",
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
    canonical: `${SITE_URL}/privacy-policy`,
    languages: {
      "en-US": `${SITE_URL}/privacy-policy`,
    },
  },
  openGraph: {
    title: "CourtNews Privacy Policy",
    description:
      "Learn how CourtNews protects your privacy and manages information including cookies, analytics, and data usage on our justice-focused news site.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - CourtNews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CourtNews Privacy Policy",
    description:
      "Understand how CourtNews collects, uses, and safeguards user information across our independent legal and justice news platform.",
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
    "target-audience": "US legal professionals, journalists, and concerned citizens",
    coverage: "United States",
    distribution: "global",
    "news_keywords": "privacy policy, data protection, cookies, user data, courtnews",
  },
};

export default function PrivacyPolicy() {
  const canonicalUrl = `${SITE_URL}/privacy-policy`;

  // JSON-LD for PrivacyPolicy (schema.org type)
  const privacyPolicyJsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "CourtNews Privacy Policy",
    url: canonicalUrl,
    description:
      "Privacy Policy for CourtNews, an independent U.S. news platform focused on courts and justice.",
    inLanguage: "en-US",
    dateModified: "2026-02-09",
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/body//h1", "/html/body//p[contains(@class, 'privacy-intro')]"],
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.webp`,
    },
  };

  // WebPage schema for the page (additional)
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: canonicalUrl,
    description:
      "Privacy Policy governing the use of CourtNews, an independent U.S. news platform focused on courts and justice.",
    inLanguage: "en-US",
    dateModified: "2026-02-09",
    mainEntity: {
      "@id": canonicalUrl,
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
        name: "Privacy Policy",
        item: canonicalUrl,
      },
    ],
  };

  // Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      "https://x.com/CourtNews10",
      "https://www.instagram.com/_court_news/",
      "https://www.reddit.com/user/court_news/",
      "https://substack.com/@courtnews",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: "courtnewsadmin@progresskingdom.com",
    },
    areaServed: "US",
  };

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicyJsonLd) }}
      />
      <script
        id="privacy-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        id="privacy-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-15 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-lg prose-indigo">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="privacy-intro text-lg text-gray-600">
              Last updated: February 9, 2026
            </p>
          </div>

          <p>
            At <strong>CourtNews</strong>, we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at courtnews.org.
          </p>

          {/* rest of the content unchanged */}
          <h2 className="font-semibold py-3 text-lg mt-10">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Automatically Collected:</strong> IP address, browser type and version, device information, operating system, pages visited, time and duration of visits, referring site</li>
            <li><strong>Cookies & Similar Technologies:</strong> We use cookies and similar tracking technologies for site analytics, performance, and basic functionality. You can manage or disable cookies through your browser settings.</li>
            <li><strong>Voluntarily Provided:</strong> Email address (if you subscribe to updates or newsletters), name or other details if you contact us directly</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To operate, maintain, secure, and improve our website</li>
            <li>To analyze how visitors interact with our legal and justice reporting</li>
            <li>To detect, prevent, and respond to technical issues or malicious activity</li>
            <li>To communicate with you if you subscribe to our newsletter (you can unsubscribe at any time)</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">3. Sharing of Information</h2>
          <p>
            We do <strong>not</strong> sell your personal information to third parties.
            We may share anonymized or aggregated data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics and performance providers (e.g., Google Analytics)</li>
            <li>Hosting, CDN, and security service providers (e.g., Cloudflare)</li>
            <li>Law enforcement or government authorities when required by law or valid legal process</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">4. Third-Party Services</h2>
          <p>
            We may use the following third-party services (each with its own privacy policy):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics (website usage analytics)</li>
            <li>Cloudflare (security, performance, and DDoS protection)</li>
            <li>Email newsletter service provider (only if you subscribe)</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">5. Your Rights and Choices</h2>
          <p>
            Depending on your location and applicable law, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data (subject to legal exceptions)</li>
            <li>Opt out of cookies and tracking via your browser settings</li>
            <li>Unsubscribe from any email communications at any time</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg mt-10">6. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your information. 
            However, no method of transmission over the Internet or electronic storage is completely secure.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">7. Children's Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13. 
            We do not knowingly collect personal information from children under 13. 
            If we become aware that we have collected such information, we will take steps to delete it.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. 
            The “Last updated” date at the top of this page indicates when the policy was last revised. 
            We encourage you to review this page periodically.
          </p>

          <h2 className="font-semibold py-3 text-lg mt-10">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="font-medium text-indigo-700 mt-4">
            privacy@courtnews.org
          </p>
        </div>
      </main>
    </>
  );
}