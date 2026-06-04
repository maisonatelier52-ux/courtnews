import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Right of Reply Policy | CourtNews",
  description:
    "How CourtNews handles pre-publication outreach, response opportunities, disputed claims, and post-publication reply requests from individuals and institutions.",
  keywords:
    "right of reply, courtnews response policy, pre-publication outreach, disputed claims, journalism fairness",
  alternates: { canonical: `${SITE_URL}/right-of-reply-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Right of Reply Policy | CourtNews",
    description:
      "CourtNews gives relevant individuals and institutions a fair opportunity to respond when criticism or disputed claims are central to a story.",
    url: `${SITE_URL}/right-of-reply-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Right of Reply Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right of Reply Policy | CourtNews",
    description: "How CourtNews handles response opportunities and disputed claims.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "When We Seek a Response",
    paragraphs: [
      "If a CourtNews story includes criticism, allegations, serious factual dispute, or materially adverse claims about a person or institution, we aim to seek a response before publication — when feasible and when doing so doesn't compromise the reporting, source safety, or legitimate public-interest work.",
      "The goal isn't to hand editorial control to the subject of a story. The goal is to test our reporting against relevant rebuttal, correction, or context before we publish — because that's what fair journalism looks like.",
    ],
  },
  {
    title: "How Outreach Is Handled",
    paragraphs: [
      "The method and timing of outreach varies with the story. CourtNews may contact a subject or their representative by email, phone, public contact channel, legal counsel, or other reasonable means — depending on the nature of the allegation and how quickly the story needs to move.",
      "A reasonable opportunity to respond doesn't always mean an unlimited one. Fast-moving court developments, breaking legal news, and public-safety stories may require shorter response windows than feature investigations or longform profiles.",
    ],
  },
  {
    title: "What to Send If You're Seeking a Reply or Correction",
    paragraphs: [
      "If you're contacting CourtNews in response to published or pending coverage, please include the article URL or headline, the specific claim you dispute, the factual basis for your objection, any supporting documents you want reviewed, and the best contact information for follow-up.",
      "General denials aren't very useful on their own. The more specific you are about what is wrong, incomplete, misleading, or outdated — and why — the more effectively our editorial team can review your request.",
    ],
  },
  {
    title: "Post-Publication Responses",
    paragraphs: [
      "After publication, a person or institution that believes context is missing or materially wrong may contact the newsroom. Substantive responses may result in a clarification, correction, update note, follow-up story, or — if the reporting holds — no change.",
      "CourtNews may publish or summarize a substantive response when doing so materially helps readers understand a dispute or the underlying evidentiary record.",
    ],
  },
  {
    title: "What This Policy Does Not Guarantee",
    paragraphs: [
      "A right-of-reply request does not guarantee publication of a full statement, removal of accurate reporting, or advance editorial approval by the subject of a story.",
      "It does mean CourtNews reviews the request seriously, compares it against the available evidence, and responds according to our editorial standards and corrections process.",
    ],
  },
  {
    title: "Urgent Matters & Legal Sensitivity",
    paragraphs: [
      "Where a story involves active legal proceedings, regulatory matters, allegations of misconduct, or reputationally sensitive claims, CourtNews handles outreach carefully and documents the response process in the newsroom's working record.",
      "A reply request should improve factual accuracy — not become leverage to pressure our newsroom into weakening reporting that is properly supported by the evidence.",
    ],
  },
];

export default function RightOfReplyPolicy() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Right of Reply Policy",
        item: `${SITE_URL}/right-of-reply-policy`,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-right-of-reply"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">


        <div className="max-w-4xl mx-auto px-6 py-14">
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Fairness
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Right of Reply Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              CourtNews gives relevant people and institutions a fair opportunity to respond
              when criticism, allegations, or materially disputed facts are central to a story.
              Here's how that process works.
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
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Submit a Response Request</p>
            <p className="text-gray-600 text-sm mb-3">
              To request a right of reply or raise a concern about published coverage:
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