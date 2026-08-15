import { NextRequest, NextResponse } from "next/server";

const OLD_HOSTS = ["rms.devsinntechnologies.com", "www.rms.devsinntechnologies.com"];
const NEW_HOST = "diginizam.com";

/** Must match DEMO_SUCCESS_COOKIE in src/lib/form-success.ts */
const DEMO_SUCCESS_COOKIE = "dn_demo_success";

export function proxy(req: NextRequest) {
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

  // Demo thank-you: one-time cookie must be present before HTML (and GA) loads.
  // Missing/used cookie → redirect to /demo with no /thank-you page_view.
  if (req.nextUrl.pathname === "/thank-you") {
    const token = req.cookies.get(DEMO_SUCCESS_COOKIE)?.value;
    if (token !== "1") {
      const demoUrl = req.nextUrl.clone();
      demoUrl.pathname = "/demo";
      demoUrl.search = "";
      return NextResponse.redirect(demoUrl);
    }

    const res = NextResponse.next();
    res.cookies.set({
      name: DEMO_SUCCESS_COOKIE,
      value: "",
      path: "/",
      maxAge: 0,
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
