import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Ownership & Funding | CourtNews",
  description:
    "Detailed information about CourtNews's editorial independence, ownership structure, commercial relationships, conflict-of-interest standards, and funding disclosures.",
  keywords:
    "courtnews ownership, funding disclosure, editorial independence, newsroom transparency, who owns courtnews",
  alternates: { canonical: `${SITE_URL}/ownership-and-funding` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ownership & Funding | CourtNews",
    description:
      "Who controls CourtNews, how we're funded, and how we protect editorial independence from commercial influence.",
    url: `${SITE_URL}/ownership-and-funding`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Ownership and Funding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ownership & Funding | CourtNews",
    description: "Who controls CourtNews and how we protect editorial independence.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "What This Page Covers",
    paragraphs: [
      "CourtNews operates as an independent digital newsroom with a distributed editorial team based in the United States. This page helps readers understand how editorial control, commercial support, and conflict disclosures work at our publication.",
      "This is a reader-facing explanation of how editorial independence is protected — not a corporate registry filing or securities disclosure. We publish it because readers deserve to understand who controls what they read.",
    ],
  },
  {
    title: "Editorial Control & Decision-Making",
    paragraphs: [
      "All editorial judgments at CourtNews are made by our editors and reporters. Coverage decisions, headlines, source selection, story framing, and publication timing are never sold to advertisers, sponsors, political actors, governments, or commercial partners.",
      "A business relationship does not grant favorable coverage, prior review of a reported story, or the power to suppress accurate journalism. If a proposed arrangement would blur those lines, CourtNews's standard is to reject the arrangement or remove the affected journalist from the assignment.",
    ],
  },
  {
    title: "How CourtNews May Be Funded",
    paragraphs: [
      "CourtNews may generate revenue through advertising, sponsorships, platform distribution, licensing, content partnerships, and other ordinary publishing-related commercial arrangements. Any such revenue stream is kept structurally separate from editorial decision-making.",
      "If CourtNews enters into a material funding relationship, undergoes an ownership change, or establishes a strategic arrangement that a reasonable reader would consider relevant to editorial independence, the newsroom's expectation is to disclose that relationship on this page, on affected coverage, or both.",
    ],
  },
  {
    title: "Conflicts of Interest & Recusals",
    paragraphs: [
      "Journalists and editors are expected to proactively disclose personal, financial, political, or family relationships that could reasonably call their impartiality into question on a relevant assignment. When necessary, the assignment is moved, edited with explicit disclosure, or declined.",
      "CourtNews does not treat conflicts as a private housekeeping matter when reader trust is materially affected. If a relationship could alter how a reasonable reader interprets coverage, our standard is disclosure, recusal, or both.",
    ],
    bullets: [
      "Relevant personal or financial ties must be disclosed internally before publication.",
      "Gifts, favors, or special access that would compromise editorial independence should not be accepted.",
      "Outside work, advocacy, or consulting that conflicts with newsroom independence should be disclosed and may require reassignment.",
    ],
  },
  {
    title: "Commercial Support Does Not Buy Coverage",
    paragraphs: [
      "CourtNews maintains a clear boundary between revenue activity and journalism. Advertising or sponsorship does not guarantee coverage, shape a reporter's conclusions, or entitle any commercial party to veto criticism.",
      "Paid content, sponsored features, affiliate relationships, and other commercial material are labeled clearly enough that no reader has to guess whether they're reading journalism or advertising.",
    ],
  },
  {
    title: "Political, Governmental & Advocacy Influence",
    paragraphs: [
      "CourtNews does not present political, governmental, or advocacy messaging as independent reporting. If any external actor seeks to influence our coverage through money, access, or pressure, our standard is to preserve editorial control rather than trade independence for convenience.",
      "When a story concerns a subject with which CourtNews has a material relationship, that relationship is disclosed in language readers can clearly understand.",
    ],
  },
  {
    title: "Changes to Ownership or Material Support",
    paragraphs: [
      "Ownership, control, and funding arrangements can change over time. If CourtNews undergoes a material ownership change, takes on a relationship that bears directly on editorial independence, or launches a new funding structure readers should know about, this page will be updated.",
      "Readers who believe a relevant ownership or funding relationship has not been disclosed may contact the newsroom and request a review.",
    ],
  },
];

export default function OwnershipAndFunding() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ownership & Funding",
        item: `${SITE_URL}/ownership-and-funding`,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-ownership"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">


        <div className="max-w-4xl mx-auto px-6 py-14">
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Transparency
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Ownership &amp; Funding
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              This page explains who controls editorial decisions at CourtNews, how
              commercial support is separated from our reporting, and how we handle
              conflicts, material relationships, and future ownership disclosures.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </header>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} className="border-l-4 border-red-600 pl-6">
                <h2
                  className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {section.title}
                </h2>
                {section.paragraphs &&
                  section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-700 leading-relaxed mb-3">{p}</p>
                  ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 font-black mt-0.5 shrink-0">■</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Contact</p>
            <p className="text-gray-600 text-sm mb-3">
              Questions about our ownership, funding, or editorial independence:
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:editorial@courtnews.org" className="text-red-600 font-semibold hover:underline">
                editorial@courtnews.org
              </a>
              <a href="mailto:corrections@courtnews.org" className="text-red-600 font-semibold hover:underline">
                corrections@courtnews.org
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}