// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  const botPattern = /Googlebot|Twitterbot|facebookexternalhit|LinkedInBot|Slackbot|Discordbot|bingbot|YandexBot|Baiduspider|Mediapartners-Google|DuckDuckBot|Applebot|WhatsApp|Pinterest|PingdomBot|AhrefsBot|SemrushBot/i;

  // Only serve prerendered pages to bots
  if (botPattern.test(ua) && request.method === 'GET') {
    const url = request.nextUrl.clone();
    // Forward to Prerender service, passing the full URL and token
    const prerenderUrl = `https://service.prerender.io/https://courtnews.org${url.pathname}${url.search}`;
    const response = NextResponse.rewrite(prerenderUrl, {
      headers: {
        'X-Prerender-Token': process.env.PRERENDER_TOKEN,
      },
    });
    return response;
  }

  // For humans, continue normally
  return NextResponse.next();
}

// Run middleware on all routes except static assets
export const config = {
  matcher: '/((?!_next/static|favicon.ico|images).*)',
};