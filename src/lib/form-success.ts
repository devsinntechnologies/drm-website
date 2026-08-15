export const DEMO_SUCCESS_PATH = "/thank-you";
export const CONTACT_SUCCESS_PATH = "/contact/thank-you";

/** Cookie name — readable by middleware for server-side /thank-you gating. */
export const DEMO_SUCCESS_COOKIE = "dn_demo_success";

export const CONTACT_SUCCESS_TOKEN_KEY = "dn_contact_success";

const TOKEN_VALUE = "1";

/** Contact flow: client sessionStorage one-time token (unchanged). */
export function markFormSuccess(tokenKey: string) {
  try {
    sessionStorage.setItem(tokenKey, TOKEN_VALUE);
  } catch {
    // Ignore storage failures (private mode / blocked storage).
  }
}

/** Demo flow: http cookie so middleware can redirect before HTML/analytics load. */
export function markDemoFormSuccess() {
  try {
    document.cookie = `${DEMO_SUCCESS_COOKIE}=${TOKEN_VALUE}; path=/; max-age=600; SameSite=Lax`;
  } catch {
    // Ignore cookie failures.
  }
}

/** Returns true once, then clears the token so refreshes cannot reuse it. */
export function consumeFormSuccess(tokenKey: string): boolean {
  try {
    const value = sessionStorage.getItem(tokenKey);
    if (value !== TOKEN_VALUE) return false;
    sessionStorage.removeItem(tokenKey);
    return true;
  } catch {
    return false;
  }
}

/** Contact only — Demo lead is counted in GA4 from /thank-you page config. */
export function trackGenerateLead(source: "contact") {
  if (typeof window === "undefined") return;
  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void;
    }
  ).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "generate_lead", {
    event_category: "form",
    event_label: source,
    lead_source: source,
  });
}
