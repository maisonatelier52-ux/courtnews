// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",           // Applies to all crawlers (Google, Bing, etc.)
        allow: "/",               // Allow full access to the site
        // If you want to block specific paths in the future, uncomment and customize:
        // disallow: ["/admin/", "/private/", "/preview/"],
      },
    ],
    sitemap: "https://courtnews.org/sitemap.xml",   // Link to your sitemap
    host: "https://courtnews.org",                  // Canonical domain
  };
}