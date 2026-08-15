export const DEMO_SUCCESS_PATH = "/thank-you";
export const CONTACT_SUCCESS_PATH = "/contact/thank-you";

export const DEMO_SUCCESS_TOKEN_KEY = "dn_demo_success";
export const CONTACT_SUCCESS_TOKEN_KEY = "dn_contact_success";

const TOKEN_VALUE = "1";

export function markFormSuccess(tokenKey: string) {
  try {
    sessionStorage.setItem(tokenKey, TOKEN_VALUE);
  } catch {
    // Ignore storage failures (private mode / blocked storage).
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

export function trackGenerateLead(source: "demo" | "contact") {
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
