// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  const botPattern = /Googlebot|Twitterbot|facebookexternalhit|LinkedInBot|Slackbot|Discordbot|bingbot|YandexBot|Baiduspider|Mediapartners-Google|DuckDuckBot|Applebot|WhatsApp|Pinterest|PingdomBot|AhrefsBot|SemrushBot/i;

  // Only handle bot requests
  if (botPattern.test(ua) && request.method === 'GET') {
    const url = request.nextUrl.clone();
    const host = request.headers.get('host') || 'courtnews.org';
    const target = `https://service.prerender.io/https://${host}${url.pathname}${url.search}`;

    // Fetch from Prerender and return the response
    return fetch(target, {
      headers: {
        'X-Prerender-Token': process.env.PRERENDER_TOKEN,
      },
    }).then(res => {
      // Copy the response from Prerender back to the client
      return new NextResponse(res.body, {
        status: res.status,
        headers: res.headers,
      });
    });
  }

  // For humans, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|favicon.ico|images).*)',
};