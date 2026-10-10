import { business } from "./content";

export function whatsappLink(
  message = "Hi Jump N Joy! I'd like to enquire about a visit.",
) {
  return `https://wa.me/${business.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export function partyMessage(type: string, date: string, guests: string) {
  return [
    `Hi Jump N Joy! I'd like to enquire about a ${type.toLowerCase()} ${type === "School" ? "trip" : type === "Corporate" ? "outing" : "party"}.`,
    date ? `Preferred date: ${date}.` : "",
    guests ? `Group size: ${guests}.` : "",
    "Please share the available options and current prices.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function todayInIndia() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) =>
    parts.find((value) => value.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}
