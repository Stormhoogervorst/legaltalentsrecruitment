function amsterdamToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addYears(isoDate: string, years: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const shifted = new Date(Date.UTC(year + years, month - 1, day));
  if (shifted.getUTCMonth() !== month - 1) {
    return new Date(Date.UTC(year + years, month, 0)).toISOString().slice(0, 10);
  }
  return shifted.toISOString().slice(0, 10);
}

export function consentDates(): { gdprConsentDate: string; retainUntil: string } {
  const gdprConsentDate = amsterdamToday();
  return {
    gdprConsentDate,
    retainUntil: addYears(gdprConsentDate, 1),
  };
}
