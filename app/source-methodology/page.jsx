import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Source Methodology | CourtNews",
  description:
    "How CourtNews approaches sourcing, verification, attribution, anonymous sources, court documents, and public records in its legal and justice reporting.",
  keywords:
    "courtnews source methodology, journalism verification, anonymous sources policy, court document sourcing, legal reporting standards",
  alternates: { canonical: `${SITE_URL}/source-methodology` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Source Methodology | CourtNews",
    description:
      "CourtNews shows readers how stories are built — what's sourced directly, what comes from public records, what remains unverified, and where interpretation begins.",
    url: `${SITE_URL}/source-methodology`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Source Methodology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Source Methodology | CourtNews",
    description: "How CourtNews sources, verifies, and attributes its legal reporting.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "How Reporting Begins",
    paragraphs: [
      "CourtNews begins with verifiable material, not recycled summary. That means court filings, official dockets, regulatory disclosures, public records requests, direct interviews, official statements, original documents, public datasets, and contemporaneous reporting that can itself be checked against the underlying record.",
      "Our standard is to narrow the wording when direct verification is incomplete. If a fact can't be confirmed at the level a story would otherwise imply, the language is tightened until it honestly reflects what is actually known — not what would make the headline stronger.",
    ],
  },
  {
    title: "Source Hierarchy & Verification",
    paragraphs: [
      "Whenever possible, CourtNews prefers primary documents and firsthand sourcing over secondary summaries. Official records and direct statements are generally stronger than rumor, aggregation, or unattributed repetition.",
      "A source's prominence doesn't remove the need for verification. Claims from public officials, corporate spokespeople, campaign representatives, or well-known commentators are still subject to checking, context, and qualification.",
    ],
    bullets: [
      "Primary records and firsthand sourcing are preferred wherever available.",
      "Secondary reporting may be used, but is not repeated as certainty when the underlying claim remains unsettled.",
      "If chronology, figures, or legal context are central to a story, those details are checked against the source document wherever feasible.",
    ],
  },
  {
    title: "Anonymous Sources & Background Information",
    paragraphs: [
      "CourtNews does not treat anonymity as a shortcut. Anonymous or background sourcing may be used when the information is genuinely in the public interest and can't responsibly be obtained on the record. The newsroom must understand the source's identity and evaluate their motive, access, and reliability before granting anonymity.",
      "When anonymity is granted, the reporting gives readers as much truthful context as possible about why the source is being protected — without needlessly exposing them.",
    ],
  },
  {
    title: "Documents, Media & Data",
    paragraphs: [
      "Court documents, screenshots, audio recordings, video clips, and data extracts are reviewed carefully. CourtNews aims to verify provenance, timing, and authenticity — and to assess whether a clip or excerpt could mislead without broader context.",
      "A document's existence is not the same as that document proving the broadest possible claim. Our standard is to describe what a record shows, what it does not show, and where interpretation begins.",
    ],
  },
  {
    title: "Source Notes, Attribution & Links",
    paragraphs: [
      "For trust-sensitive reporting — including legal analysis, financial crime coverage, institutional profiles, and court explainers — CourtNews may include source notes or links to primary documents so readers can inspect the public record themselves.",
      "Attribution should be specific enough for readers to understand where key information came from. Where a story relies on public records, official statements, or direct court documents, we signal that clearly rather than burying the sourcing logic.",
    ],
  },
  {
    title: "How We Treat Uncertainty & Change",
    bullets: [
      "We don't convert uncertainty into certainty for the sake of a stronger headline.",
      "We distinguish clearly between analysis and direct assertion.",
      "We update wording when better sourcing becomes available or the public record materially changes.",
      "If a claim is unresolved, contested, or incomplete, the story says so rather than implying a settled conclusion.",
    ],
  },
  {
    title: "What This Policy Doesn't Mean",
    paragraphs: [
      "Source transparency doesn't require revealing every confidential source or every reporting step in ways that would compromise safety, privacy, or legitimate journalistic work. It does mean giving readers an honest account of what kind of evidence supports a story.",
      "A source note is not a substitute for careful writing. The story itself must describe evidence with precision and appropriate restraint.",
    ],
  },
];

export default function SourceMethodology() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Source Methodology",
        item: `${SITE_URL}/source-methodology`,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-source-methodology"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">


        <div className="max-w-4xl mx-auto px-6 py-14">
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Standards
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Source Methodology
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              CourtNews shows readers how our articles are built — what is sourced directly,
              what comes from public records or official documents, what remains unverified,
              and where editorial interpretation begins.
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
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Questions About Our Sourcing</p>
            <p className="text-gray-600 text-sm mb-3">
              Concerns about how a specific story was sourced or verified:
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