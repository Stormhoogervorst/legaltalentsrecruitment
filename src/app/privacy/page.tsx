import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

const title = "Privacybeleid — Legal Talents Recruitment";
const description = "Hoe Legal Talents persoonsgegevens verwerkt onder de AVG.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="/ PRIVACY"
      title="Privacybeleid"
      lastUpdated="April 2026"
    >
      <p>
        Legal Talents hecht grote waarde aan de bescherming van uw
        persoonsgegevens. Sinds 25 mei 2018 geldt de Algemene Verordening
        Gegevensbescherming (AVG), en wij verwerken persoonsgegevens volledig in
        overeenstemming met deze wetgeving. Dit privacybeleid is van toepassing
        op alle kandidaten, opdrachtgevers, websitebezoekers en andere relaties
        die gebruik maken van de diensten van Legal Talents, waaronder het
        vacatureplatform. Indien u ervoor kiest om vrijwillig persoonsgegevens
        aan ons te verstrekken, verwerken wij deze in overeenstemming met dit
        privacybeleid.
      </p>
      <p>
        Legal Talents is een recruitmentbureau gespecialiseerd in de juridische
        sector en biedt onder meer:
      </p>
      <ul>
        <li>Werving & selectie van juridisch talent</li>
        <li>Detachering en interim-oplossingen</li>
        <li>Bemiddeling van ZZP&apos;ers</li>
        <li>Vacatureplatform voor juridische functies</li>
        <li>Loopbaanadvies en talentontwikkeling</li>
      </ul>

      <h2>1. Wanneer verzamelen wij persoonsgegevens?</h2>
      <p>Wij verzamelen uw persoonsgegevens wanneer u:</p>
      <ul>
        <li>Zich inschrijft via onze website of vacatureplatform</li>
        <li>Uw CV uploadt of solliciteert op een vacature</li>
        <li>Contact met ons opneemt (bijv. via e-mail of telefoon)</li>
        <li>Door ons wordt benaderd (bijv. via LinkedIn of executive search)</li>
        <li>Onze website bezoekt</li>
      </ul>

      <h2>2. Welke persoonsgegevens verwerken wij?</h2>
      <p>
        Afhankelijk van uw relatie met ons kunnen wij onder meer de volgende
        gegevens verwerken:
      </p>
      <h3>Kandidaten</h3>
      <ul>
        <li>NAW-gegevens, e-mailadres en telefoonnummer</li>
        <li>Geboortedatum, leeftijd en geslacht</li>
        <li>Curriculum vitae (CV), opleiding en werkervaring</li>
        <li>Referenties en beoordelingen</li>
        <li>Beschikbaarheid en voorkeuren</li>
        <li>Eventueel test- of assessmentresultaten</li>
        <li>(Optioneel) foto of video</li>
      </ul>
      <h3>Werknemers / ZZP&apos;ers</h3>
      <ul>
        <li>Identiteitsgegevens (zoals ID en BSN indien wettelijk vereist)</li>
        <li>Salaris- en administratieve gegevens</li>
        <li>Ondernemingsgegevens (bij ZZP&apos;ers)</li>
      </ul>
      <h3>Zakelijke relaties</h3>
      <ul>
        <li>Naam, functie en contactgegevens</li>
      </ul>
      <h3>Websitegebruikers</h3>
      <ul>
        <li>IP-adres</li>
        <li>Browser- en apparaatgegevens</li>
        <li>Surfgedrag op de website</li>
      </ul>

      <h2>3. Hoe verzamelen wij persoonsgegevens?</h2>
      <p>Wij verzamelen gegevens:</p>
      <ul>
        <li>Direct van u (bij inschrijving, sollicitatie of contact)</li>
        <li>Automatisch via cookies en websitegebruik</li>
        <li>
          Via derden, zoals opdrachtgevers, referenten of openbare bronnen (bijv.
          LinkedIn)
        </li>
      </ul>

      <h2>4. Waarom verwerken wij uw persoonsgegevens?</h2>
      <p>Wij verwerken uw gegevens voor de volgende doeleinden:</p>
      <ul>
        <li>Bemiddeling naar werk of opdrachten</li>
        <li>Matchen van kandidaten met vacatures</li>
        <li>Contact opnemen over relevante vacatures of diensten</li>
        <li>Uitvoeren van recruitmentprocessen</li>
        <li>Administratie en contractbeheer</li>
        <li>Marketing en nieuwsbrieven (alleen met toestemming)</li>
        <li>Verbeteren van onze dienstverlening en website</li>
        <li>Naleving van wet- en regelgeving</li>
      </ul>

      <h2>5. Rechtsgrondslagen</h2>
      <p>Wij verwerken persoonsgegevens op basis van:</p>
      <ul>
        <li>Toestemming (bijv. voor marketing)</li>
        <li>Uitvoering van een overeenkomst</li>
        <li>Wettelijke verplichting</li>
        <li>Gerechtvaardigd belang (zoals recruitmentactiviteiten)</li>
      </ul>

      <h2>6. Met wie delen wij uw gegevens?</h2>
      <p>Wij kunnen uw persoonsgegevens delen met:</p>
      <ul>
        <li>Opdrachtgevers (potentiële werkgevers)</li>
        <li>Leveranciers en IT-dienstverleners</li>
        <li>Assessmentbureaus</li>
        <li>Overheidsinstanties (indien wettelijk verplicht)</li>
      </ul>
      <p>
        Wij zorgen ervoor dat alle derden passende beveiligingsmaatregelen
        treffen.
      </p>

      <h2>7. Bewaartermijnen</h2>
      <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk:</p>
      <ul>
        <li>Kandidaten: maximaal 2 jaar na laatste contact</li>
        <li>
          Werknemers/ZZP&apos;ers: tot 2 jaar na einde samenwerking (langer
          indien wettelijk vereist)
        </li>
        <li>Websitegegevens: maximaal 6–12 maanden</li>
      </ul>
      <p>Na afloop worden gegevens verwijderd of geanonimiseerd.</p>

      <h2>8. Uw rechten</h2>
      <p>U heeft onder de AVG de volgende rechten:</p>
      <ul>
        <li>Recht op inzage</li>
        <li>Recht op rectificatie</li>
        <li>Recht op verwijdering (&quot;recht op vergetelheid&quot;)</li>
        <li>Recht op beperking van verwerking</li>
        <li>Recht op dataportabiliteit</li>
        <li>Recht van bezwaar</li>
        <li>Recht om toestemming in te trekken</li>
      </ul>
      <p>U kunt deze rechten uitoefenen door contact met ons op te nemen.</p>

      <h2>9. Marketing en communicatie</h2>
      <p>
        U ontvangt alleen marketingcommunicatie als u hiervoor toestemming heeft
        gegeven. U kunt zich op elk moment afmelden via:
      </p>
      <ul>
        <li>De afmeldlink in e-mails</li>
        <li>Contact met ons</li>
      </ul>

      <h2>10. Cookies en technologie</h2>
      <p>Onze website maakt gebruik van cookies om:</p>
      <ul>
        <li>De website goed te laten functioneren</li>
        <li>Gebruik te analyseren</li>
        <li>De gebruikerservaring te verbeteren</li>
      </ul>
      <p>U kunt cookies beheren via uw browserinstellingen.</p>

      <h2>11. Beveiliging</h2>
      <p>
        Legal Talents neemt passende technische en organisatorische maatregelen,
        waaronder:
      </p>
      <ul>
        <li>Versleuteling van gegevens</li>
        <li>Toegangsbeperking</li>
        <li>Beveiligde servers</li>
        <li>Interne controles en audits</li>
      </ul>

      <h2>12. Internationale doorgifte</h2>
      <p>
        Indien persoonsgegevens buiten de EU worden verwerkt, zorgen wij voor
        passende waarborgen, zoals standaardcontractbepalingen.
      </p>

      <h2>13. Datalekken</h2>
      <p>
        Bij een (vermoeden van een) datalek verzoeken wij u dit direct te melden
        via: storm@legal-talents.nl
      </p>

      <h2>14. Wijzigingen</h2>
      <p>
        Legal Talents kan dit privacybeleid wijzigen. De meest actuele versie is
        altijd beschikbaar op onze website.
      </p>

      <h2>15. Contact</h2>
      <p>Voor vragen, verzoeken of klachten kunt u contact opnemen met:</p>
      <p>
        Legal Talents · storm@legal-talents.nl · +31 6 85 68 09 98 · Sint
        Annastraat 198-C, 6531 HZ Nijmegen
      </p>
      <p>
        U heeft daarnaast het recht een klacht in te dienen bij de Autoriteit
        Persoonsgegevens.
      </p>

      <h2>16. Privacy van derden</h2>
      <p>
        Onze website kan links bevatten naar externe websites. Wij zijn niet
        verantwoordelijk voor het privacybeleid van deze derden.
      </p>
    </LegalPageLayout>
  );
}
