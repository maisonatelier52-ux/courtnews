import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Edit3, CheckSquare, Layers, Users } from "lucide-react";
import authorsData from "@/public/data/authors.json";

const SITE_URL = "https://www.courtnews.org";
const SITE_NAME = "CourtNews";

export const metadata = {
  title: "Meet Our Team | CourtNews Editorial Newsroom",
  description:
    "Meet the journalists, editors, and researchers behind CourtNews. Our newsroom is committed to independent legal journalism, factual court reporting, and government accountability.",
  keywords:
    "courtnews team, editorial staff, legal journalists, investigative reporters, court news newsroom, independent media, laura mitchell, rebecca lawson, michael grant",
  alternates: { canonical: `${SITE_URL}/authors` },
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
    title: "Meet Our Team | CourtNews Editorial Newsroom",
    description:
      "Meet the journalists and editors behind CourtNews — independent, factual, and fearless legal reporting.",
    url: `${SITE_URL}/authors`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/logo-og.png`,
        width: 1200,
        height: 630,
        alt: "CourtNews Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team | CourtNews Editorial Newsroom",
    description: "The journalists and editors behind CourtNews independent legal reporting.",
    images: [`${SITE_URL}/images/logo-og.png`],
    site: "@CourtNews10",
    creator: "@CourtNews10",
  },
};

// ─── Pull authors from public/data/authors.json ─────────────────────────────
const allAuthors = authorsData.categories.map((cat) => cat.author);

// Category label map for display
const categoryLabelMap = {
  crime: "Crime Reporter",
  political: "Political Correspondent",
  courts: "Courts Reporter",
  investigations: "Investigative Reporter",
  "us-news": "U.S. News Correspondent",
  "civil-rights": "Civil Rights Reporter",
  "law-and-justice": "Law & Justice Reporter",
};

// Social platform label map
const socialLabels = {
  twitter: "Medium",
  instagram: "Quora",
  reddit: "Reddit",
  substack: "Substack",
};

// Staff departments
const staffDepts = [
  {
    icon: <Edit3 className="w-5 h-5" />,
    title: "Editorial",
    desc: "Our editors shape every story with accuracy, fairness, and an uncompromising commitment to the facts — especially in high-stakes legal coverage.",
  },
  {
    icon: <CheckSquare className="w-5 h-5" />,
    title: "Fact-Checking",
    desc: "Every claim in our reporting is verified against court documents, official records, and primary sources before publication.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Production",
    desc: "From design to publication, our production team brings legal journalism to life across desktop and mobile platforms.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Audience & Community",
    desc: "We listen to readers, respond to feedback, and work to build an informed public around justice and accountability.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-black tracking-widest uppercase text-gray-500">
        {children}
      </p>
      <div className="mt-2 w-full h-0.5 bg-gray-200" />
    </div>
  );
}

function AuthorCard({ author, category }) {
  const displayTitle =
    author.jobtitle?.trim() ||
    categoryLabelMap[category] ||
    "Staff Reporter";

  return (
    <div
      className="flex flex-col"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Photo */}
      <div className="relative w-20 h-24 bg-gray-100 overflow-hidden rounded-sm mb-3 shrink-0">
        <Image
          src={author.profileImage}
          alt={author.name}
          fill
          sizes="80px"
          className="object-cover object-top"
        />
      </div>

      {/* Name */}
      <Link href={`/authors/${author.slug}`} title={author.name}>
        <h3
          className="text-sm font-black leading-snug hover:text-red-600 transition-colors text-gray-900"
          itemProp="name"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {author.name}
        </h3>
      </Link>

      {/* Title */}
      <p
        className="text-xs font-black tracking-widest uppercase text-red-600 mt-1 mb-2"
        itemProp="jobTitle"
      >
        {displayTitle}
      </p>

      {/* Bio */}
      <p
        className="text-xs text-gray-600 leading-relaxed mb-3 flex-1"
        itemProp="description"
      >
        {author.bio}
      </p>

      {/* Social links */}
      {author.social && (
        <div className="flex flex-wrap gap-2 mb-3">
          {Object.entries(author.social).map(([platform, url]) =>
            url ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-red-600 transition-colors underline underline-offset-2"
                aria-label={`${author.name} on ${socialLabels[platform] || platform}`}
              >
                {socialLabels[platform] || platform}
              </a>
            ) : null
          )}
        </div>
      )}

      {/* Full bio link */}
      <Link
        href={`/authors/${author.slug}`}
        title={author.name}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-red-600 transition-colors uppercase tracking-wide"
      >
        Full bio <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OurTeam() {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CourtNews Editorial Team",
    url: `${SITE_URL}/authors`,
    itemListElement: allAuthors.map((author, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: author.name,
        jobTitle:
          author.jobtitle?.trim() ||
          categoryLabelMap[
            authorsData.categories[i]?.category
          ] ||
          "Staff Reporter",
        url: `${SITE_URL}/authors/${author.slug}`,
        sameAs: author.social
          ? Object.values(author.social).filter(Boolean)
          : [],
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Authors",
        item: `${SITE_URL}/authors`,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-our-team"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([teamJsonLd, breadcrumbJsonLd]),
        }}
      />

      <main
        className="min-h-screen bg-white text-gray-900"
        itemScope
        itemType="https://schema.org/AboutPage"
      >


        <div className="max-w-5xl mx-auto px-6 py-14">
          {/* ── Hero header ── */}
          <header className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 mb-12 border-b-2 border-gray-900 pb-10">
            <div>
              <div className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-4">
                Newsroom
              </div>
              <h1
                className="text-5xl sm:text-6xl font-black leading-none mb-4 text-gray-900"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                itemProp="name"
              >
                Our Team
              </h1>
              <p className="text-base text-gray-600 max-w-md leading-relaxed">
                CourtNews journalists, editors, and analysts work together across
                the country to deliver fact-based, fearless reporting on the
                American justice system — no filter, no agenda.
              </p>
            </div>

            <div className="md:w-64 shrink-0">
              <p className="text-xs font-black tracking-widest uppercase text-gray-500 mb-2">
                Our Mission
              </p>
              <div className="w-full h-0.5 bg-gray-200 mb-4" />
              <p className="text-sm text-gray-700 leading-relaxed">
                We are an independent newsroom committed to truth, transparency,
                and accountability. We hold power to account and give voice to
                the public through journalism that matters — especially when it
                concerns the courts.
              </p>
            </div>
          </header>

          {/* ── Reporting Team (from authors.json) ── */}
          <section className="mb-12">
            <SectionLabel>Reporting Team</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
              {authorsData.categories.map(({ category, author }) => (
                <AuthorCard
                  key={author.id}
                  author={author}
                  category={category}
                />
              ))}
            </div>
          </section>

          <hr className="border-gray-200 mb-12" />

          {/* ── Staff Departments ── */}
          <section className="mb-12">
            <SectionLabel>CourtNews Staff</SectionLabel>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Behind every published story is a dedicated team of professionals
              working across departments to keep our newsroom operating
              independently and ethically.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffDepts.map((dept) => (
                <div key={dept.title} className="flex flex-col gap-3">
                  <div className="w-10 h-10 border border-red-600 rounded flex items-center justify-center text-red-600 shrink-0">
                    {dept.icon}
                  </div>
                  <p className="text-sm font-black text-gray-900 uppercase tracking-wide">
                    {dept.title}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 mb-12" />

          {/* ── All Authors pill links ── */}
          <section className="mb-12">
            <SectionLabel>All Authors</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {allAuthors.map((author) => (
                <Link
                  key={author.slug}
                  href={`/authors/${author.slug}`}
                  title={author.name}
                  className="px-4 py-2 border border-gray-300 rounded-full text-xs font-semibold text-gray-800 hover:border-red-600 hover:text-red-600 transition-colors uppercase tracking-wide"
                >
                  {author.name}
                </Link>
              ))}
            </div>
          </section>

          {/* ── Last updated ── */}
          <section className="mt-14 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Last Updated: May 22, 2026
            </p>
          </section>
        </div>
      </main>
    </>
  );
}