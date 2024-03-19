import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = pathname === "/";

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/br`, request.url));
  }
}
