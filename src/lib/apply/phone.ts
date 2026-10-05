export type TwentyPhone = {
  primaryPhoneNumber: string;
  primaryPhoneCountryCode: "NL";
  primaryPhoneCallingCode: "+31";
};

/**
 * Dutch numbers only. 06…, 0031… and +31… become E.164 (+316…).
 * Anything we cannot confidently treat as a Dutch number returns null.
 */
export function normalizeDutchPhone(input: string): TwentyPhone | null {
  const compact = input.trim().replace(/[\s()./-]/g, "");
  if (!compact || !/\d/.test(compact)) return null;

  let international = compact;
  if (international.startsWith("00")) {
    international = `+${international.slice(2)}`;
  }

  let national: string;
  if (international.startsWith("+")) {
    if (!international.startsWith("+31")) return null;
    national = international.slice(3);
  } else if (international.startsWith("0")) {
    national = international.slice(1);
  } else if (international.startsWith("31") && international.length >= 11) {
    national = international.slice(2);
  } else {
    return null;
  }

  if (national.startsWith("0")) national = national.slice(1);
  if (!/^[1-9]\d{8}$/.test(national)) return null;

  return {
    primaryPhoneNumber: `+31${national}`,
    primaryPhoneCountryCode: "NL",
    primaryPhoneCallingCode: "+31",
  };
}
