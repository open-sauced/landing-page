import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Redirect root path to Linux Foundation
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect('https://lfx.linuxfoundation.org/', 301);
  }
}
