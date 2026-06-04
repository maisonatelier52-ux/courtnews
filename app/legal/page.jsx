import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Legal | CourtNews",
  description:
    "Legal and compliance information for CourtNews, including copyright, reader rights, complaint procedures, permissions, and formal request guidelines.",
  keywords:
    "courtnews legal, copyright policy, content permissions, legal complaints, DMCA, journalism legal notice",
  alternates: { canonical: `${SITE_URL}/legal` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Legal | CourtNews",
    description:
      "Plain-language legal and compliance information for CourtNews — copyright, complaints, permissions, and formal requests.",
    url: `${SITE_URL}/legal`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Legal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | CourtNews",
    description: "Copyright, permissions, complaints, and legal notices for CourtNews.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

const sections = [
  {
    title: "Informational Use of CourtNews Content",
    paragraphs: [
      "CourtNews publishes journalism, legal analysis, and explanatory reporting for informational purposes. Our articles are edited to professional newsroom standards, but they should not be treated as legal, financial, tax, medical, or other professional advice tailored to an individual reader's situation.",
      "Where a story touches legal, regulatory, or financial matters, CourtNews uses precise sourcing and bounded language rather than sweeping implication. Readers are responsible for seeking qualified professional advice when their circumstances require it.",
    ],
  },
  {
    title: "Copyright, Quotation & Reuse",
    paragraphs: [
      "Readers may link to CourtNews reporting and quote brief excerpts with clear attribution where applicable law permits. Republishing full articles, bulk reproduction, commercial reuse, scraping for republication, or systematic copying requires permission unless a separate license or recognized legal exception applies.",
      "If you wish to syndicate, translate, archive commercially, or otherwise reuse substantial CourtNews content, contact the newsroom before proceeding.",
    ],
  },
  {
    title: "Complaints About Accuracy, Rights, or Fairness",
    paragraphs: [
      "If you believe a CourtNews article contains a material factual error, omits critical legal context, infringes rights, or raises a serious legal concern, contact the newsroom promptly. Include the specific URL, the exact material at issue, the basis for your concern, and any supporting documentation.",
      "Different complaints follow different review processes. A factual dispute may be handled under our corrections or right-of-reply process, while a copyright, privacy, or rights complaint may require a separate review path.",
    ],
  },
  {
    title: "What to Include in a Formal Request",
    bullets: [
      "The URL or headline of the content at issue.",
      "A clear description of the statement, image, video, or material you are challenging.",
      "The legal or factual basis for your request, including supporting documents where relevant.",
      "Your name, organization if applicable, and a reliable contact method for follow-up.",
      "If acting on behalf of someone else, a brief statement of your authority to do so.",
    ],
  },
  {
    title: "Removal, Restriction & Update Requests",
    paragraphs: [
      "CourtNews reviews serious requests for correction, clarification, update, removal, or restricted display. Submitting a request does not guarantee removal of accurate reporting or immediate depublication.",
      "The newsroom evaluates each request against the public record, editorial standards, applicable law, and the public interest. In some cases the appropriate response may be a correction, clarification note, update, or follow-up story rather than removal.",
    ],
  },
  {
    title: "Links to Third-Party Material",
    paragraphs: [
      "CourtNews may link to third-party sites, court records, official databases, public documents, and outside sources for journalistic context and reader reference. Those third-party properties are governed by their own terms, policies, and accuracy standards.",
      "Linking to an external source does not constitute CourtNews endorsing every statement or policy on that site.",
    ],
  },
  {
    title: "Formal Notices & Requests",
    paragraphs: [
      "For legal notices, permissions questions, rights complaints, or formal requests related to published content, contact the newsroom directly so your request can be routed to the appropriate reviewer.",
      "CourtNews handles all public-facing legal and policy correspondence through the published newsroom email addresses listed on this site.",
    ],
  },
];

export default function LegalPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Legal", item: `${SITE_URL}/legal` },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-legal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">
    

        <div className="max-w-4xl mx-auto px-6 py-14">
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Legal &amp; Compliance
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Legal
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              This page provides a plain-language overview of legal and compliance topics
              relevant to CourtNews publishing, reader use of site content, formal complaints,
              permissions requests, and how to reach us with a legal matter.
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
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">Legal Contact</p>
            <p className="text-gray-600 text-sm mb-3">
              For legal notices, copyright concerns, or formal requests:
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