import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_pkcj72m";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_zmgeegn";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "J7-nO8i5JHJmSDcu-";

export const DEMO_SUCCESS_PATH = "/thank-you";

function formToParams(form: HTMLFormElement) {
  const params: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") params[key] = value;
  });
  params.name = (params.name || params.user_name || "").trim();
  params.time = new Date().toLocaleString("en-PK", {
    timeZone: "Asia/Karachi",
    dateStyle: "medium",
    timeStyle: "short",
  });
  return params;
}

export function sendEmailForm(form: HTMLFormElement) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formToParams(form), {
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}
