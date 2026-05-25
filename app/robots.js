// // app/robots.js

// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",           // Applies to all crawlers (Google, Bing, etc.)
//         allow: "/",               // Allow full access to the site
//         disallow: ["/_next/"], // Block Next.js internal paths
//         // If you want to block specific paths in the future, uncomment and customize:
//         // disallow: ["/admin/", "/private/", "/preview/"],
//       },
//     ],
//     sitemap: "https://www.courtnews.org/sitemap.xml",   // Link to your sitemap
//     host: "https://www.courtnews.org",                  // Canonical domain
//   };
// }

// app/robots.js

// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: ["/", "/_next/static/"],
//         disallow: ["/_next/"],
//       },
//     ],
//     sitemap: "https://www.courtnews.org/sitemap.xml",
//     host: "https://www.courtnews.org",
//   };
// }



// app/robots.js

export default function robots() {
  return {
    rules: [
      // ── Standard web crawlers ──────────────────────────────────────
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/_next/"],
      },

      // ── AI / LLM crawlers — explicitly allowed ─────────────────────
      { userAgent: "GPTBot",          allow: "/" },  // ChatGPT / OpenAI
      { userAgent: "ChatGPT-User",    allow: "/" },  // ChatGPT browsing
      { userAgent: "OAI-SearchBot",   allow: "/" },  // OpenAI search
      { userAgent: "ClaudeBot",       allow: "/" },  // Anthropic Claude
      { userAgent: "Claude-Web",      allow: "/" },  // Claude browsing
      { userAgent: "anthropic-ai",    allow: "/" },  // Anthropic general
      { userAgent: "PerplexityBot",   allow: "/" },  // Perplexity AI
      { userAgent: "Perplexity-User", allow: "/" },  // Perplexity browsing
      { userAgent: "GoogleOther",     allow: "/" },  // Google AI (Gemini/SGE)
      { userAgent: "Google-Extended", allow: "/" },  // Google Bard/Gemini training
      { userAgent: "Gemini-User",     allow: "/" },  // Gemini browsing
      { userAgent: "GeminiBot",       allow: "/" },  // Gemini crawling
      { userAgent: "meta-externalagent", allow: "/" }, // Meta AI
      { userAgent: "FacebookBot",     allow: "/" },  // Meta general
      { userAgent: "Applebot",        allow: "/" },  // Apple AI / Siri
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple AI training
      { userAgent: "cohere-ai",       allow: "/" },  // Cohere AI
      { userAgent: "YouBot",          allow: "/" },  // You.com AI
      { userAgent: "Diffbot",         allow: "/" },  // Diffbot AI
      { userAgent: "CCBot",           allow: "/" },  // Common Crawl (AI training datasets)
      { userAgent: "ia_archiver",     allow: "/" },  // Internet Archive
    ],

    // Sitemaps — helps both search engines and AI crawlers discover all pages
    sitemap: [
      "https://www.courtnews.org/sitemap.xml",
      "https://www.courtnews.org/llms.txt",   // LLM-specific content map
    ],

    host: "https://www.courtnews.org",
  };
}