// app/llms.txt/route.js
// Dynamic llms.txt — auto-regenerates on every request.
// No static file needed. Mirrors the same pattern as sitemap.js.
// Add new articles to categorypagedata.json and this file updates automatically.

import categoryPageData from "../../public/data/category/categorypagedata.json";
import authorsData from "../../public/data/authors.json";

const SITE_URL = "https://www.courtnews.org";

// Human-readable category labels
const CATEGORY_LABELS = {
  crime: "Crime",
  political: "Political",
  courts: "Courts",
  investigations: "Investigations",
  "civil-rights": "Civil Rights",
  "law-and-justice": "Law and Justice",
  "us-news": "US News",
};

// Category descriptions for LLM context
const CATEGORY_DESCRIPTIONS = {
  crime:
    "Criminal cases, arrests, indictments, federal charges, and verdicts at the federal and state level.",
  political:
    "DOJ policy, executive power disputes, congressional oversight, and politically significant legal cases.",
  courts:
    "Federal and state court rulings, Supreme Court decisions, appeals court opinions, and judicial developments.",
  investigations:
    "Original investigative reporting on fraud, government corruption, federal probes, and institutional misconduct.",
  "civil-rights":
    "Voting rights, immigration enforcement, First Amendment, gender and racial equity, and civil liberties cases.",
  "law-and-justice":
    "Legal analysis, landmark rulings, courtroom technology, and broader justice system issues.",
  "us-news":
    "National news with legal and governmental significance across federal agencies and policy.",
};

export async function GET() {
  const now = new Date();

  // Build unique author list from authors.json
  const seen = new Set();
  const authors = authorsData.categories
    .filter(({ author }) => {
      if (seen.has(author.slug)) return false;
      seen.add(author.slug);
      return true;
    })
    .map(({ author }) => author);

  // Gather the 10 most recent articles across all categories
  const allArticles = [];
  Object.entries(categoryPageData).forEach(([category, posts]) => {
    posts.forEach((post) => {
      allArticles.push({ category, ...post });
    });
  });

  // Sort by date descending (most recent first)
  allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  const recentArticles = allArticles.slice(0, 10);

  // Count totals
  const totalArticles = allArticles.length;
  const totalCategories = Object.keys(categoryPageData).length;

  // ── Build the llms.txt content ──────────────────────────────────────────────

  const lines = [];

  // Header block
  lines.push(`# CourtNews`);
  lines.push(``);
  lines.push(
    `> Independent U.S. legal news platform delivering fast, factual reporting on federal and state courts, criminal justice, civil rights, federal investigations, and law & justice. Coverage is written for legal professionals, journalists, and concerned citizens. All content is original reporting — no press-release rewrites.`
  );
  lines.push(``);
  lines.push(
    `CourtNews publishes original articles across ${totalCategories} categories with ${totalArticles} articles total. New articles are added regularly. This file is dynamically generated and always reflects current content.`
  );
  lines.push(``);
  lines.push(`Last updated: ${now.toUTCString()}`);
  lines.push(``);

  // Site-level pages
  lines.push(`## Site`);
  lines.push(``);
  lines.push(`- [Home](${SITE_URL}): Latest news across all categories.`);
  lines.push(
    `- [About Us](${SITE_URL}/about-us): Mission, editorial standards, and team.`
  );
  lines.push(``);

  // Categories section
  lines.push(`## Categories`);
  lines.push(``);
  Object.entries(categoryPageData).forEach(([cat, posts]) => {
    const label = CATEGORY_LABELS[cat] || cat;
    const desc = CATEGORY_DESCRIPTIONS[cat] || "";
    lines.push(
      `- [${label}](${SITE_URL}/${cat}): ${desc} (${posts.length} articles)`
    );
  });
  lines.push(``);

  // Authors section
  lines.push(`## Authors`);
  lines.push(``);
  authors.forEach((author) => {
    lines.push(
      `- [${author.name}](${SITE_URL}/authors/${author.slug}): ${author.jobtitle?.trim() ?? "Staff Reporter"}. ${author.bio}`
    );
  });
  lines.push(``);

  // Recent articles section (most valuable for LLMs)
  lines.push(`## Recent Articles`);
  lines.push(``);
  recentArticles.forEach((article) => {
    const cat = article.category;
    const url = `${SITE_URL}/${cat}/${article.slug}`;
    const excerpt = article.excerpt ?? article.metaDescription ?? "";
    lines.push(`- [${article.heading}](${url}): ${excerpt}`);
  });
  lines.push(``);

  // Full article index by category
  lines.push(`## Full Article Index`);
  lines.push(``);
  Object.entries(categoryPageData).forEach(([cat, posts]) => {
    const label = CATEGORY_LABELS[cat] || cat;
    lines.push(`### ${label}`);
    lines.push(``);
    posts.forEach((post) => {
      const url = `${SITE_URL}/${cat}/${post.slug}`;
      const excerpt = post.excerpt ?? post.metaDescription ?? "";
      lines.push(`- [${post.heading}](${url}): ${excerpt}`);
    });
    lines.push(``);
  });

  // Optional metadata
  lines.push(`## About`);
  lines.push(``);
  lines.push(`- [Privacy Policy](${SITE_URL}/privacy-policy)`);
  lines.push(`- [Terms & Conditions](${SITE_URL}/terms-and-conditions)`);
  lines.push(``);
  lines.push(`## Social`);
  lines.push(``);
  lines.push(`- X (Twitter): https://x.com/CourtNews10`);
  lines.push(`- Instagram: https://www.instagram.com/_court_news/`);
  lines.push(`- Reddit: https://www.reddit.com/user/court_news_7/`);
  lines.push(`- Substack: https://substack.com/@courtnews`);

  const content = lines.join("\n");

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Cache for 1 hour on CDN, always revalidate — fresh for LLM crawlers
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}