import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/i18n/config";

/**
 * Clean International SEO Middleware for StreamGermany4K.
 *
 * CRITICAL GOOGLE SEO COMPLIANCE:
 * 1. NEVER automatically redirect requests to "/" or other URLs based on IP/Geo/headers.
 *    Automatic IP redirection causes Googlebot (and international/VPN visitors) to be
 *    flagged as Cloaking/Sneaky Redirects, causing catastrophic de-indexing.
 * 2. Root ("/") ALWAYS serves the primary German (de-DE) version directly with HTTP 200 OK.
 * 3. English subtree ("/en" & "/en/...") ALWAYS serves the English version directly with HTTP 200 OK.
 * 4. The middleware only synchronizes the `user_locale` cookie for client-side state without
 *    redirecting or interfering with any HTTP response.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;

  // 1. English subtree (/en, /en/...)
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const res = NextResponse.next();
    if (cookieLocale !== "en") {
      res.cookies.set(LOCALE_COOKIE, "en", {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax",
      });
    }
    return res;
  }

  // 2. German pages (root "/" and all explicit German pages)
  const res = NextResponse.next();
  if (cookieLocale !== "de") {
    res.cookies.set(LOCALE_COOKIE, "de", {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml, robots.txt
     * - static image extensions (.jpg, .png, .webp, .svg, .ico)
     */
    "/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|images/|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico)$).*)",
  ],
};
