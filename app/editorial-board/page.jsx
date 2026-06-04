import Link from "next/link";
import Script from "next/script";
import authorsData from "@/public/data/authors.json";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "CourtNews Editorial Board | Reviewed By",
  description:
    "How CourtNews's editorial board reviews legal, finance-sensitive, and standards-driven coverage — and what the 'Reviewed By' label means on our stories.",
  keywords:
    "courtnews editorial board, reviewed by label, story review process, legal journalism standards, editorial oversight",
  alternates: { canonical: `${SITE_URL}/reviewed-by/editorial-board` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "CourtNews Editorial Board | Reviewed By",
    description:
      "What the CourtNews 'Reviewed By' label means and how our editorial board oversees legal, financial, and standards-driven reporting.",
    url: `${SITE_URL}/reviewed-by/editorial-board`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Editorial Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CourtNews Editorial Board | Reviewed By",
    description: "What the CourtNews Reviewed By label means and how editorial review works.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
  },
};

// ─── Pull the two most relevant authors for board roles from authors.json ────
// Courts author → senior legal review; Investigations author → investigative review
const courtsAuthor = authorsData.categories.find(
  (c) => c.category === "courts"
)?.author;
const investigationsAuthor = authorsData.categories.find(
  (c) => c.category === "investigations"
)?.author;
const lawAuthor = authorsData.categories.find(
  (c) => c.category === "law-and-justice"
)?.author;

// Build board members dynamically from real authors + one static advisor slot
const boardMembers = [
  courtsAuthor && {
    name: courtsAuthor.name,
    title: "Senior Legal Editor",
    focus:
      "Leads editorial review of federal court coverage, Supreme Court rulings, and constitutional case reporting. Verifies legal framing and allegation language before publication.",
    slug: courtsAuthor.slug,
    profileImage: courtsAuthor.profileImage,
  },
  investigationsAuthor && {
    name: investigationsAuthor.name,
    title: "Investigations Editor",
    focus:
      "Oversees pre-publication review of investigative reporting, financial crime coverage, and data-driven accountability journalism. Ensures sourcing meets CourtNews's verification standards.",
    slug: investigationsAuthor.slug,
    profileImage: investigationsAuthor.profileImage,
  },
  lawAuthor && {
    name: lawAuthor.name,
    title: "Law & Justice Standards Editor",
    focus:
      "Reviews criminal justice reform stories, federal law enforcement coverage, and national legal policy pieces for accuracy, proportionality, and sourcing consistency.",
    slug: lawAuthor.slug,
    profileImage: lawAuthor.profileImage,
  },
].filter(Boolean);

const reviewChecklist = [
  "Clear separation between sourced fact, editorial analysis, and inference.",
  "Appropriate and bounded wording on legal, reputational, or financial topics.",
  "Visible sourcing, update notes, and corrections pathways where required.",
  "Consistency between headline, body copy, metadata, and structured data.",
  "Pre-publication outreach documented where criticism or adverse claims are central.",
];

export default function EditorialBoardPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reviewed By",
        item: `${SITE_URL}/reviewed-by`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Editorial Board",
        item: `${SITE_URL}/reviewed-by/editorial-board`,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CourtNews Editorial Board | Reviewed By",
    url: `${SITE_URL}/reviewed-by/editorial-board`,
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
    },
  };

  // Person schema for each board member
  const boardPersonsJsonLd = boardMembers.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    url: `${SITE_URL}/authors/${member.slug}`,
    worksFor: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }));

  return (
    <>
      <Script
        id="structured-data-editorial-board"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd,
            webPageJsonLd,
            ...boardPersonsJsonLd,
          ]),
        }}
      />

      <main className="min-h-screen bg-white text-gray-900">


        <div className="max-w-4xl mx-auto px-6 py-14">
          {/* ── Header ── */}
          <header className="mb-12 border-b-2 border-gray-900 pb-8">
            <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Editorial Oversight
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              CourtNews Editorial Board
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              CourtNews uses a reviewed-by layer on legal, finance-sensitive,
              profile, and standards-driven coverage to distinguish line editing
              from subject-matter review. Here's what that process looks like —
              and who's responsible for it.
            </p>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </header>

          {/* ── What reviewed-by means ── */}
          <section className="border-l-4 border-red-600 pl-6 mb-10">
            <h2
              className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              What the "Reviewed By" Label Means
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A "Reviewed By" label on a CourtNews story means the piece
              received an additional editorial check beyond standard line
              editing. We apply this layer to coverage involving court
              proceedings, live legal allegations, institutional profiles,
              financial crime, and any topic where wording, sourcing, and
              framing require heightened caution before publication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The label does not mean the board endorses every claim in a story.
              It means the newsroom reviewed attribution, sourcing boundaries,
              and the clarity of the editorial framing. Think of it as a second
              set of expert eyes on the work that carries the most real-world
              weight.
            </p>
          </section>

          {/* ── What the board looks for ── */}
          <section className="border-l-4 border-red-600 pl-6 mb-10">
            <h2
              className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              What the Board Looks For
            </h2>
            <ul className="space-y-3">
              {reviewChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-600 font-black mt-0.5 shrink-0">
                    ■
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── When we use board review ── */}
          <section className="border-l-4 border-red-600 pl-6 mb-10">
            <h2
              className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              When CourtNews Uses Board Review
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Board review is applied to legal explainers, court case profiles,
              institutional and entity pages, financial crime analysis, longform
              investigations, and trust-sensitive coverage where a reader
              arriving via search needs extra confidence in our process.
              Coverage involving active court proceedings, live allegations, or
              reputationally significant claims always receives this additional
              layer — no exceptions.
            </p>
          </section>

          {/* ── Board members from authors.json ── */}
          <section className="mb-10">
            <h2
              className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wide border-b-2 border-gray-200 pb-3"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Editorial Board Members
            </h2>

            <div className="space-y-5">
              {boardMembers.map((member) => (
                <div
                  key={member.slug}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex items-start gap-5"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Avatar */}
                  {member.profileImage && (
                    <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-gray-200 shrink-0">
                      <img
                        src={member.profileImage}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        itemProp="image"
                      />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/authors/${member.slug}`}
                      title={member.name}
                      className="hover:text-red-600 transition-colors"
                    >
                      <p
                        className="font-black text-gray-900 text-base mb-0.5 hover:text-red-600 transition-colors"
                        style={{
                          fontFamily: "'Georgia', 'Times New Roman', serif",
                        }}
                        itemProp="name"
                      >
                        {member.name}
                      </p>
                    </Link>
                    <p
                      className="text-xs font-black text-red-600 uppercase tracking-widest mb-2"
                      itemProp="jobTitle"
                    >
                      {member.title}
                    </p>
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      itemProp="description"
                    >
                      {member.focus}
                    </p>
                    <Link
                      href={`/authors/${member.slug}`}
                      title={`View ${member.name}'s full profile`}
                      className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-gray-900 hover:text-red-600 transition-colors uppercase tracking-wide"
                    >
                      View profile
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Review vs line editing ── */}
          <section className="border-l-4 border-red-600 pl-6 mb-10">
            <h2
              className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Review vs. Line Editing: The Difference
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Standard line editing at CourtNews checks grammar, clarity, style,
              and factual consistency. Board review goes further — it examines
              legal framing, sourcing transparency, allegation language, and
              whether the story's headline and metadata accurately reflect the
              body of the reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stories that pass board review can still be corrected if new facts
              emerge after publication. The review process is not a guarantee of
              perfection — it's a meaningful additional safeguard on journalism
              that carries real-world legal and reputational weight.
            </p>
          </section>

          {/* ── Contact ── */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="font-black text-gray-900 mb-1 uppercase tracking-wide text-sm">
              Editorial Contact
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Questions about our editorial review process or a specific
              reviewed story:
            </p>
            <a
              href="mailto:editorial@courtnews.org"
              className="text-red-600 font-semibold hover:underline text-sm"
            >
              editorial@courtnews.org
            </a>
          </div>
        </div>
      </main>
    </>
  );
}