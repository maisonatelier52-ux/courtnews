// import React from "react";
// import { Merriweather } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const merriweather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
//   style: ["normal", "italic"],
// });

// export const metadata = {
//   metadataBase: new URL("https://www.courtnews.org"),
//   // metadataBase: new URL("news-site-hazel.vercel.app"),

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${merriweather.variable} antialiased w-full overflow-x-hidden`}>
//         <Header />
//         <main className="w-full">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// import React from "react";
// import { Merriweather } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const merriweather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
//   weight: ["400", "700"], // Only necessary weights
//   display: "swap", // Improves performance
// });

// export const metadata = {
//   metadataBase: new URL("https://www.courtnews.org"),
//   icons: {
//     icon: "/favicon.ico",
//   },
// };
 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${merriweather.variable} font-merriweather antialiased w-full overflow-x-hidden`}
//       >
//         <Header />
//         <main className="w-full">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// import React from "react";
// import { Roboto_Condensed } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const robotoCondensed = Roboto_Condensed({
//   variable: "--font-roboto-condensed",
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
//   display: "swap",
// });

// export const metadata = {
//   metadataBase: new URL("https://www.courtnews.org"),
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${robotoCondensed.variable} font-roboto antialiased w-full overflow-x-hidden`}
//       >
//         <Header />
//         <main className="w-full">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import React from "react";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import Script from "next/script";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

// Site-wide metadata
export const metadata = {
  metadataBase: new URL("https://www.courtnews.org"),
  title: {
    default: "CourtNews — Independent U.S. Courts, Justice & Legal News",
    template: "%s | CourtNews",
  },
  description:
    "CourtNews delivers fast, factual reporting on U.S. courts, criminal justice, civil rights, federal investigations, law, political, and major national cases.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: {
      default: "CourtNews — U.S. Courts, Justice & Legal Reporting",
      template: "%s | CourtNews",
    },
    description:
      "Independent coverage of federal and state courts, landmark cases, civil rights, criminal justice, investigations, and legal accountability.",
    url: "https://www.courtnews.org",
    siteName: "CourtNews",
    images: [
      {
        url: "/images/logo-og.png",
        width: 1200,
        height: 630,
        alt: "CourtNews — Justice & Legal News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "CourtNews — Courts, Justice & Investigations",
      template: "%s | CourtNews",
    },
    description:
      "Unfiltered reporting on U.S. courts, civil rights cases, criminal trials, federal probes, and legal developments.",
    images: ["/images/logo-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.courtnews.org",
    languages: {
      "en-US": "https://www.courtnews.org",
    },
  },
  // GEO and additional meta tags (US-focused)
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "39.8283;-98.5795",
    ICBM: "39.8283, -98.5795",
    "target-audience": "US legal professionals, journalists, and concerned citizens",
    coverage: "United States",
    distribution: "global",
    "news_keywords":
      "U.S. courts, legal news, criminal justice, civil rights, federal investigations, law, Supreme Court",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be placed here if needed, but Next.js will inject the metadata above automatically */}
      </head>
      <body
        className={`${robotoCondensed.variable} font-roboto antialiased w-full overflow-x-hidden`}
      >
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wd1melkbal");
          `}
        </Script>
      </body>
    </html>
  );
}