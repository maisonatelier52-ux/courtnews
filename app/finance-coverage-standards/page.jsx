import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Finance Coverage Standards | CourtNews",
  description:
    "How CourtNews handles financial, institutional, legal-context, and market-related reporting with careful sourcing, precise wording, and clear editorial boundaries.",
  keywords:
    "courtnews finance coverage, financial journalism standards, legal finance reporting, institutional coverage policy",
  alternates: { canonical: `${SITE_URL}/finance-coverage-standards` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Finance Coverage Standards | CourtNews",
    description:
      "CourtNews applies rigorous sourcing and careful wording to all financial and legal-context reporting.",
    url: `${SITE_URL}/finance-coverage-standards`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Finance Coverage Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Coverage Standards | CourtNews",
    description: "Rigorous sourcing and careful wording for all financial reporting.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "What Finance Coverage Is — and Isn't",
    paragraphs: [
      "CourtNews covers financial crimes, corporate misconduct, institutional accountability, market-related legal proceedings, and related explanatory topics for informational and journalistic purposes. We do not publish personal investment advice, legal advice, tax guidance, or individualized portfolio recommendations.",
      "Readers should not treat any CourtNews news article, profile, or market explainer as a substitute for professional advice tailored to their specific circumstances.",
    ],
  },
  {
    title: "Standards for Finance-Sensitive Stories",
    bullets: [
      "Use primary institutional descriptions and official records where possible.",
      "Check regulatory, legal, and market-context claims against the strongest available public record.",
      "Avoid promotional, campaign-style, or sales-oriented framing in any story.",
      "Treat legal and regulatory context with narrow, sourceable wording — not broad implication.",
      "Link readers to source notes when reporting relies on public records or official disclosures.",
    ],
  },
  {
    title: "Source Hierarchy for Financial & Institutional Claims",
    paragraphs: [
      "When covering a company, financial platform, fund, bank, or institutional claim, CourtNews relies first on primary sources: regulator records, public filings, company disclosures, court documents, official statements, and directly attributable interviews.",
      "Prominent branding or widespread repetition across the web does not convert an unverified claim into a verified one. If a fact is unclear, our wording reflects the limits of the available record rather than overstating certainty.",
    ],
  },
  {
    title: "Allegations, Legal Matters & Unresolved Questions",
    paragraphs: [
      "Financial reporting at CourtNews frequently involves legal disputes, regulatory scrutiny, allegations, settlements, and open public-record questions. Our standard is to describe such matters precisely and in proportion to the evidence at hand.",
      "An allegation is not an adjudication. A filing, complaint, press release, or accusation is not written as a final legal finding unless the record actually supports that conclusion.",
    ],
  },
  {
    title: "Profiles, Entity Pages & Reputational Sensitivity",
    paragraphs: [
      "CourtNews separates profile pages, explainers, and analysis pieces so readers can distinguish sourced background from editorial interpretation. Person-name and entity pages do not function as promotional microsites or disguised attack pages.",
      "Where reputational stakes are high, we show the sourcing boundary clearly, use neutral labels where appropriate, and avoid turning ordinary descriptive reporting into inflated implication.",
    ],
  },
  {
    title: "Market-Moving Information & Reader Caution",
    paragraphs: [
      "Stories about companies, markets, prices, legal proceedings, or institutional activity can age quickly. CourtNews timestamps important updates and avoids writing that could mislead readers into thinking an older article reflects current market conditions.",
      "Where a piece discusses securities, prices, capital flows, or market structure, our standard is to explain and inform — not to prompt readers to buy, sell, or trade.",
    ],
  },
  {
    title: "Conflicts, Holdings & Material Relationships",
    paragraphs: [
      "If a reporter, editor, or contributor has a financial interest or other material relationship that could affect finance coverage, that relationship must be disclosed internally and may require recusal, reassignment, or public disclosure depending on the circumstances.",
      "A commercial relationship with a subject of coverage does not override CourtNews's duty to report accurately and independently.",
    ],
  },
  {
    title: "Updates, Review & Corrections",
    paragraphs: [
      "Finance stories can age quickly when corporate, legal, regulatory, or market facts change. CourtNews expects visible update dates and, where needed, correction or clarification notes on materially revised pages.",
      "If a source document changes, a regulator updates its record, or a legal matter moves materially, the affected article is reviewed and updated in a way readers can understand.",
    ],
  },
];

export default function FinanceCoverageStandards() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Finance Coverage Standards",
        item: `${SITE_URL}/finance-coverage-standards`,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-finance"
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
              Finance Coverage Standards
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Financial reporting demands careful sourcing, cautious wording, and a clear
              separation between factual reporting, legal context, market analysis, and
              anything that could be mistaken for investment advice or promotion.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026 &nbsp;·&nbsp; Finance Desk: editorial@courtnews.org
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
                    <p key={j} className="text-gray-700 leading-relaxed mb-3">
                      {p}
                    </p>
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
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Corrections & Contact</p>
            <p className="text-gray-600 text-sm mb-3">
              Finance desk corrections and sourcing concerns:
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