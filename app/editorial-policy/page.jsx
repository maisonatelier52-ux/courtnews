import Link from "next/link";
import Script from "next/script";
import { Mail, ArrowRight, Check } from "lucide-react";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Editorial Policy | CourtNews | Journalism Standards",
  description:
    "Read CourtNews's editorial policy covering accuracy, editorial independence, transparency, ethical standards, and how we produce fact-based legal and justice reporting.",
  keywords:
    "courtnews editorial policy, journalism standards, independent legal news, factual reporting, court news ethics",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Editorial Policy | CourtNews | Journalism Standards",
    description:
      "CourtNews is committed to accuracy, transparency, and independent legal journalism. Read our full editorial policy.",
    url: `${SITE_URL}/editorial-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Editorial Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | CourtNews",
    description: "CourtNews editorial standards: accuracy, independence, transparency.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
    creator: "@CourtNews10",
  },
};

const transparencyPoints = [
  "Clearly distinguish between news reporting, opinion, and legal analysis",
  "Publish articles under an individual journalist's byline whenever possible",
  "Use a CourtNews Staff byline only for collaborative or multi-reporter work",
  "Label sponsored, paid, affiliate, or partner-funded material so readers cannot mistake it for independent reporting",
];

const ethicalStandards = [
  {
    title: "No undisclosed conflicts of interest",
    description:
      "Journalists disclose relevant personal, financial, or professional relationships before covering a beat or story where that relationship could affect the reporting.",
  },
  {
    title: "No hidden sponsored content",
    description:
      "Paid or sponsored material is clearly labeled and visually separated from news coverage at all times, in every format.",
  },
  {
    title: "Respect for privacy",
    description:
      "We weigh the public's right to know against individual privacy rights and personal dignity, especially in sensitive legal matters involving victims, minors, or sealed proceedings.",
  },
];

export default function EditorialPolicy() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Editorial Policy",
        item: `${SITE_URL}/editorial-policy`,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial Policy | CourtNews",
    url: `${SITE_URL}/editorial-policy`,
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <Script
        id="structured-data-editorial"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, webPageJsonLd]),
        }}
      />

      <main className="min-h-screen bg-white text-gray-900" itemScope itemType="https://schema.org/WebPage">
        

        <div className="max-w-4xl mx-auto px-6 py-14">
          {/* Header */}
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Standards
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Editorial Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              CourtNews is an independent newsroom dedicated to factual, transparent, and
              accountable journalism. These standards define how our reporting is produced
              and how readers can evaluate the work we publish.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Editorial Independence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not accept payment, favors, or influence in exchange for coverage.
                All editorial decisions are made solely by our journalists and editors,
                free from corporate, political, or government interference. Commercial
                partnerships, advertising agreements, and sponsorships do not grant
                editorial control over reported stories.
              </p>
            </section>

            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Accuracy &amp; Verification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Getting it right matters more than getting it first. Our journalists verify
                information using reliable sources, court documents, official records, and
                direct attribution. When information cannot be independently confirmed,
                that uncertainty is stated clearly in the story. Errors are corrected in
                accordance with our{" "}
                <Link href="/corrections-policy" className="text-red-600 hover:underline font-semibold">
                  Corrections Policy
                </Link>
                . Stories involving allegations, legal context, or reputationally sensitive
                facts are expected to use careful wording and pre-publication outreach
                wherever feasible.
              </p>
            </section>

            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Fairness &amp; Balance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We actively seek diverse perspectives on complex legal and justice issues
                while avoiding false equivalence. Claims are evaluated on evidence and
                credibility — not ideology. We give subjects of criticism a genuine
                opportunity to respond before publication where circumstances allow.
              </p>
            </section>

            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Transparency
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Readers deserve to understand how our reporting decisions are made.
                CourtNews is committed to the following practices:
              </p>
              <div className="space-y-3">
                {transparencyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-red-600 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Disclosure &amp; Labeling
              </h2>
              <p className="text-gray-700 leading-relaxed">
                CourtNews discloses material relationships that a reasonable reader
                would consider relevant to understanding a story. Paid content, sponsored
                placements, affiliate links, or partner-funded material is clearly labeled
                and kept separate from independent reporting at all times.
              </p>
            </section>

            <section className="border-l-4 border-red-600 pl-6">
              <h2
                className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Ethical Standards
              </h2>
              <div className="space-y-6">
                {ethicalStandards.map((standard, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-wide">
                      {standard.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h2
                className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Reader Feedback &amp; Accountability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Good journalism gets better through dialogue. Readers are always welcome
                to contact our editorial team with feedback, corrections, or story concerns.
              </p>
              <a
                href="mailto:editorial@courtnews.org"
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline"
              >
                <Mail className="w-4 h-4" />
                editorial@courtnews.org
                <ArrowRight className="w-4 h-4" />
              </a>
            </section>
          </div>

          {/* Footer quote */}
          <div className="border-t-2 border-gray-900 pt-10 mt-14 text-center">
            <p
              className="text-xl font-black text-gray-900 max-w-2xl mx-auto italic"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              "Our commitment is to independent, fact-based legal journalism — accountable
              to our readers and guided solely by evidence."
            </p>
          </div>

          <section className="mt-10 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </section>
        </div>
      </main>
    </>
  );
}