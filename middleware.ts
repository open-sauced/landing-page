import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // TODO: see why this isn't working in async redirects in next.js config
  if (req.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL(
      '/teams',
      req.url
    ))
  }
}
