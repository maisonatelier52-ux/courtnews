import Head from "next/head";
import Link from "next/link";
import { Edit3, AlertCircle, Clock, CheckCircle2, Mail, RefreshCcw } from "lucide-react";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Corrections Policy | CourtNews | Accuracy & Transparency",
  description:
    "Learn how CourtNews handles factual errors, updates, and corrections. We are committed to transparency, accountability, and maintaining the highest standards of journalistic accuracy.",
  keywords:
    "corrections policy, courtnews accuracy, factual corrections, journalism transparency, court news ethics",
  alternates: { canonical: `${SITE_URL}/corrections-policy` },
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
    title: "Corrections Policy | CourtNews | Accuracy & Transparency",
    description:
      "CourtNews corrects errors transparently and promptly. Learn how we handle factual mistakes and reader-submitted corrections.",
    url: `${SITE_URL}/corrections-policy`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Corrections Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | CourtNews",
    description: "CourtNews corrects errors transparently and promptly.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
    creator: "@CourtNews10",
  },
};

const mistakeTypes = [
  {
    icon: <Edit3 className="w-5 h-5 mt-1 text-red-600" />,
    title: "Typos & Minor Errors",
    description:
      "Spelling mistakes, grammatical errors, or typos that don't change the meaning of the story are corrected quietly and promptly, without a formal correction note.",
  },
  {
    icon: <AlertCircle className="w-5 h-5 mt-1 text-red-600" />,
    title: "Factual Errors",
    description:
      "Errors involving names, figures, dates, case numbers, or material facts are corrected within the article. A clearly labeled editor's note explains what was changed and why.",
  },
  {
    icon: <Clock className="w-5 h-5 mt-1 text-red-600" />,
    title: "Developing Stories",
    description:
      "As court proceedings evolve, articles may be updated to reflect new verified information. All updates carry a visible timestamp so readers know exactly when changes were made.",
  },
];

const commitments = [
  "We never remove errors without acknowledging them.",
  "Significant changes to published stories are clearly disclosed to readers.",
  "All correction requests are reviewed respectfully and with care.",
  "We do not silently alter the substance of a published article when a correction note is warranted.",
];

export default function CorrectionsPolicy() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Corrections Policy",
        item: `${SITE_URL}/corrections-policy`,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corrections Policy | CourtNews",
    url: `${SITE_URL}/corrections-policy`,
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <Script
        id="structured-data-corrections"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, webPageJsonLd]),
        }}
      />

      <main className="min-h-screen bg-white text-gray-900">
        

        <div className="max-w-4xl mx-auto px-6 py-14">
          {/* Header */}
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Accountability
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Corrections Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Accuracy is at the core of everything we publish. When we fall short, we
              correct the record — transparently, promptly, and visibly — because our
              readers deserve nothing less.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </header>

          {/* How we handle mistakes */}
          <section className="mb-12">
            <h2
              className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wide border-b-2 border-gray-200 pb-3"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              How We Handle Mistakes
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Not every error requires the same response. Here's how CourtNews handles
              different types of mistakes:
            </p>
            <div className="space-y-8">
              {mistakeTypes.map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-l-4 border-red-600 pl-5">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Where corrections appear */}
          <section className="mb-12 border-l-4 border-red-600 pl-6">
            <h2
              className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Where Corrections Appear
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Corrections are made directly on the affected article page. We don't hide
              corrections or move them to a separate location. If you found an error in
              a story, the correction will appear in that same story — using a correction
              note, clarification note, update note, or a combination as the situation
              requires.
            </p>
          </section>

          {/* What to include */}
          <section className="mb-12 border-l-4 border-red-600 pl-6">
            <h2
              className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              What a Correction Request Should Include
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To help us review your request quickly and thoroughly, please include the
              article URL or headline, the specific line or claim you believe is wrong,
              the factual basis for your objection, and any supporting documentation you'd
              like our editorial team to review.
            </p>
          </section>

          {/* Reader submissions */}
          <section className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2
              className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Submit a Correction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Our readers are an important part of maintaining accuracy. If you spot an
              error, reach out with the article headline, link, and a brief explanation.
              Our editorial team reviews every correction request.
            </p>
            <a
              href="mailto:corrections@courtnews.org"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-5 py-3 rounded hover:bg-red-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              corrections@courtnews.org
            </a>
          </section>

          {/* Commitments */}
          <section className="mb-12">
            <h2
              className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wide border-b-2 border-gray-200 pb-3"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Our Commitment to Transparency
            </h2>
            <div className="space-y-4">
              {commitments.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-red-600 shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why it matters */}
          <div className="border-t-2 border-gray-900 pt-10 mt-10 text-center">
            <h2
              className="text-2xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Why This Matters
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Trust in journalism is earned through accountability. By acknowledging our
              mistakes openly and correcting them clearly, CourtNews aims to be a source
              readers can rely on — even when we fall short of our own standards.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}