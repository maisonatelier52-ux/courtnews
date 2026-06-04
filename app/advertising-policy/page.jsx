import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Advertising & Sponsored Content Policy | CourtNews",
  description:
    "CourtNews maintains a strict wall between advertising revenue and editorial reporting. Learn how we label sponsored content, affiliate relationships, and paid placements.",
  keywords:
    "courtnews advertising policy, sponsored content disclosure, affiliate links, paid content labeling, editorial independence",
  alternates: {
    canonical: `${SITE_URL}/advertising-and-sponsored-content-policy`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Advertising & Sponsored Content Policy | CourtNews",
    description:
      "CourtNews keeps commercial relationships clearly separated from editorial coverage. Paid content is always labeled.",
    url: `${SITE_URL}/advertising-and-sponsored-content-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Advertising Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising & Sponsored Content Policy | CourtNews",
    description:
      "CourtNews keeps commercial relationships clearly separated from editorial coverage.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "Editorial Firewall",
    paragraphs: [
      "At CourtNews, no advertiser, sponsor, or commercial partner buys the right to shape our coverage. Reporting decisions — what we investigate, how we frame a story, which sources we quote, and when we publish — are made exclusively by our editorial team.",
      "Our readers should never have to wonder whether a story was influenced by money. Journalism and advertising must be distinguishable at a glance, without guesswork.",
    ],
  },
  {
    title: "How We Label Paid Content",
    paragraphs: [
      "When content is paid for or produced through a commercial arrangement, CourtNews places a clear disclosure before readers engage with it — not buried in fine print below the fold.",
    ],
    bullets: [
      "Acceptable labels include: Advertisement, Sponsored, Paid Content, or Sponsored Advertising Content.",
      "Disclosures appear at the top of the content, not only after extensive scrolling.",
      "Page design, bylines, and layout will not be used to make paid material look like staff-reported journalism.",
      "Vague or ambiguous labels that could mislead a typical reader are not acceptable.",
    ],
  },
  {
    title: "Native, Branded & Partner Content",
    paragraphs: [
      "If CourtNews publishes branded features, partner-funded explainers, or promotional pages styled to match our editorial design, those pages carry a prominent plain-language disclosure visible on both desktop and mobile.",
      "A sponsor may purchase a clearly labeled placement. No sponsor may masquerade as our newsroom, use a deceptive byline, or influence unrelated coverage.",
    ],
  },
  {
    title: "Affiliate Links & Material Connections",
    paragraphs: [
      "Where CourtNews uses affiliate links or referral arrangements that could generate revenue from a reader's click or purchase, that relationship is disclosed clearly in or near the content — not hidden in a general footer or buried in terms pages.",
    ],
    bullets: [
      "Affiliate and referral disclosures are written in plain language readers can understand.",
      "A material connection that affects a specific piece of content will be disclosed at that content — not only site-wide.",
      "Editorial recommendations are not conditioned solely on whether a subject pays us.",
    ],
  },
  {
    title: "Newsletters, Podcasts & Social Media",
    paragraphs: [
      "Our disclosure standards extend across every format. Sponsored newsletter segments, paid podcast reads, video sponsorships, and promoted social posts are labeled so the paid nature of the communication is clear wherever readers encounter it.",
    ],
  },
  {
    title: "Political & Advocacy Advertising",
    paragraphs: [
      "If CourtNews accepts political, advocacy, or issue-based advertising, those materials are labeled as advertising and are never presented as independent journalism or neutral analysis.",
      "Publishing an advertisement does not constitute CourtNews endorsing the advertiser, candidate, organization, or any claim contained in the ad.",
    ],
  },
  {
    title: "Practices We Reject",
    bullets: [
      "Selling favorable editorial conclusions or offering positive coverage in exchange for payment.",
      "Using newsroom bylines or article layouts to disguise paid material as independent reporting.",
      "Allowing advertisers or sponsors to control unrelated editorial coverage.",
      "Hiding a material financial connection in a location a reasonable reader would never find.",
    ],
  },
  {
    title: "Questions & Complaints",
    paragraphs: [
      "If you believe a piece of content was mislabeled or that the boundary between advertising and journalism was blurred, contact our team. When a disclosure problem is confirmed, we correct the label, placement, or treatment promptly.",
    ],
  },
];

export default function AdvertisingPolicy() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Advertising Policy",
        item: `${SITE_URL}/advertising-and-sponsored-content-policy`,
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        

        <div className="max-w-4xl mx-auto px-6 py-14">
          {/* Header */}
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Transparency
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              Advertising &amp; Sponsored Content Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              CourtNews separates commercial material from editorial reporting. Advertising,
              sponsorships, affiliate links, and paid relationships are clearly and conspicuously
              labeled for every reader.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026 &nbsp;·&nbsp; editorial@courtnews.org
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} className="border-l-4 border-red-600 pl-6">
                <h2 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  {section.title}
                </h2>
                {section.paragraphs &&
                  section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 font-black mt-0.5">■</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Contact footer */}
          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Contact</p>
            <p className="text-gray-600 text-sm mb-3">
              For advertising inquiries or to report a disclosure concern:
            </p>
            <a href="mailto:editorial@courtnews.org"
               className="text-red-600 font-semibold hover:underline text-sm">
              editorial@courtnews.org
            </a>
          </div>
        </div>
      </main>
    </>
  );
}