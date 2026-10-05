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
  // 29 februari in a non-leap year rolls forward to 1 maart.
  const shifted = new Date(Date.UTC(year + years, month - 1, day));
  return shifted.toISOString().slice(0, 10);
}

export function consentDates(): { gdprConsentDate: string; retainUntil: string } {
  const gdprConsentDate = amsterdamToday();
  return {
    gdprConsentDate,
    retainUntil: addYears(gdprConsentDate, 2),
  };
}
