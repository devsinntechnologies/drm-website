import { NextRequest, NextResponse } from "next/server";

const OLD_HOSTS = ["rms.devsinntechnologies.com", "www.rms.devsinntechnologies.com"];
const NEW_HOST = "diginizam.com";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();

  if (OLD_HOSTS.includes(host)) {
    const url = req.nextUrl.clone();
    url.hostname = NEW_HOST;
    url.protocol = "https";
    // Return an explicit 301 with Location header to ensure Search Console recognizes permanent redirect
    return new NextResponse(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
