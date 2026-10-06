# Tekstvoorstel Legal Talents Recruitment

Status: voorstel, er is niets in de code gewijzigd. Per blok (bijv. `1.3`) of per pagina (bijv. `1`) kun je akkoord geven.

## Zo lees je dit document

- Volgorde: navigatie (header en footer eerst), daarna Home, Vacatures, Voor kandidaten, Voor opdrachtgevers, Over ons, Contact, Blog, de landingspagina's in footervolgorde, en als laatste de overige pagina's.
- Elk blok heeft bestand en component, huidige tekst, voorgestelde tekst en één regel waarom.
- "Ongewijzigd: past al" betekent dat het blok klopt met de toon en de boodschap.
- Kleine UI-labels zoals de `/ VOLGENDE STAP`-eyebrows, knoplabels als "Plan een intake →", formulierlabels, validatiemeldingen en alt-teksten die al kloppen laat ik buiten beschouwing, tenzij ze iets inhoudelijks zeggen.
- Vragen die een functie hebben (FAQ-vragen, wegwijzers als "Zelf jurist en op zoek?") laat ik staan. Alleen retorische vragen haal ik eruit.
- Teksten die uit meerdere bestanden komen (bijv. de logostrook of de laatste regel van het stappenblok) staan één keer bij de eerste pagina waar ze voorkomen en gelden overal.

## Eerst beslissen (raakt veel blokken)

Deze punten zijn feitelijk, geen toonvragen. Ik kan ze niet uit de code afleiden. Mijn voorstel staat erbij; zonder jouw antwoord neem ik het bij akkoord over.

| # | Vraag | Mijn voorstel |
|---|-------|---------------|
| A | "Wij bereiken maandelijks 40.000 juristen" staat in 7 plaatsen (home-hero, home-title, Over ons en de heroes van advocaat, bedrijfsjurist, compliance en legal engineer). Waar komt het getal vandaan? | Alleen houden op Over ons, mét bron erbij (bijv. "via LinkedIn en onze eigen kanalen"). Weg uit de heroes en uit de home-title (de home-title krijgt een andere opening, zie meta). Het botst met "persoonlijk netwerk in plaats van database". |
| B | Welk niveau dekken jullie? Nu staat er "middel- tot senior" naast "van advocaat-stagiair tot partner". | Overal "van advocaat-stagiair tot partner" plus de in-house niveaus. |
| C | Doorlooptijd: 4-10 weken (opdrachtgevers en legal engineer), 4-8 en 8-16 (advocaat), 8-12 en 12-20 (bedrijfsjurist), 8-14 en 12-20 (compliance). Zijn dit echte cijfers? | Per rol houden als ze uit ervaring komen. Op /voor-opdrachtgevers blijft "4 tot 10 weken, bij senior rollen langer" de algemene regel. Ik pas hier geen cijfers aan. |
| D | Garantie. De site zegt tegelijk "op aanvraag", "No risk", "kosteloos opnieuw werven of fee crediteren". De algemene voorwaarden (art. 7) zeggen: alleen als vooraf schriftelijk afgesproken, en Legal Talents "zal zich inspannen" een vervanger te vinden. | Alle teksten gelijktrekken met art. 7. Het crediteren van de fee schrappen. |
| E | Retentieclaims ("blijven gemiddeld langer staan", "ruim boven het marktgemiddelde", "een mismatch kost minimaal 6 maanden"). Is hier data voor? | Alleen houden met een getal (bijv. "9 van de 10 plaatsingen zijn na 2 jaar nog in dienst"). Anders weglaten. Voorstellen staan in de blokken. |
| F | Reactietermijn: contact "binnen 24 uur", sollicitatie "binnen 5 werkdagen", Over ons "7 dagen bereikbaar". | Eén lijn: "binnen 24 uur" voor berichten, "binnen 5 werkdagen" voor sollicitaties mag blijven als dat de werkelijkheid is. |
| G | BESLOTEN: overal `marcel@legal-talents.nl` (al doorgevoerd in de code). Was: `marcel@legal-talents.nl` in 2 vacatures (Legal Operations Specialist en AI Privacy & Governance Counsel), `storm@legal-talents.nl` overal elders. | Gelijktrekken naar het adres dat echt gelezen wordt. Ik pas het niet aan zonder jouw antwoord. |
| H | Legal Engineer Amsterdam: de pagina "legal engineers" zegt "recent begeleidden wij de plaatsing", maar de vacature staat open en on hold. | Zin aanpassen naar "voorbeeld van een rol waarvoor we zoeken" of vacature op vervuld zetten. |
| I | "Vertrouwd door o.a." boven 6 logo's (op 13 pagina's). Zijn het allemaal opdrachtgevers? | Alleen houden als alle zes klant of relatie zijn. Anders "Kantoren in ons netwerk". |
| J | "Geen vijftig cv's, maar drie kandidaten die passen" (voor-opdrachtgevers hero). Is drie de standaard? | Houden als het klopt: het is concreet en controleerbaar. |

## SEO-controle (samenvatting)

- Er vervalt geen enkele interne link. Alle URL's blijven gelijk. Geen heading-niveau verandert.
- Alle ankerteksten blijven letterlijk gelijk. Dat geldt voor: "juridisch recruiter" (home, voor-opdrachtgevers), "recruitment voor scale-ups", "bedrijfsjurist vacature", "legal counsel vacature", "compliance officer vacature", "bedrijfsjurist", "legal counsel", "legal engineer", "legal engineers", "scale-ups", "vacatures", "legal counsel werven", "compliance officer werven", "over-ons pagina", "voor kandidaten", "voor opdrachtgevers", "algemene voorwaarden".
- Zoekwoord per pagina, en waar het nu staat:

| Pagina | Zoekwoord (afgeleid uit title en H1) | In H1 | In eerste alinea | Gevolg van voorstel |
|--------|--------------------------------------|-------|------------------|---------------------|
| / | legal recruitment | ja ("Legal recruitment voor de lange termijn.") | nee, de hero-sub noemt het niet | Geen verlies: het zoekwoord blijft in H1 en in de meta description. |
| /vacatures | juridische vacatures | ja ("vacatures") | ja | Blijft. |
| /voor-kandidaten | onduidelijk ("juridisch werknemers" in title, "juridische functie" in description) | nee | nee | Voorstel zet "juridische functie" in H1 en eerste alinea. **Bevestig het zoekwoord.** |
| /voor-opdrachtgevers | werving juridisch talent | nee (H1 is gelijk aan die van home) | nee | Voorstel geeft een eigen H1 met "werving van juridisch talent". |
| /over-ons | legal recruitment | ja | nee | Voorstel zet het in de eerste alinea. |
| /juridisch-recruiter | juridisch recruiter | ja | ja | Blijft. |
| /headhunter-advocatuur | headhunter advocatuur | ja | ja | Blijft, ook "headhunter juridisch talent" in de probleemkaart. |
| /bedrijfsjurist-vacature | bedrijfsjurist vacature | ja | ja | Blijft. |
| /legal-counsel-vacature | legal counsel vacature (ook "vacature legal counsel") | ja | ja | Beide varianten blijven. |
| /compliance-officer-vacature | compliance officer vacature (ook "vacature compliance officer") | ja | ja | Beide varianten blijven. |
| /recruitment/advocaat | werving van advocaten | ja | ja | Blijft. |
| /recruitment/bedrijfsjurist | werving bedrijfsjuristen | ja | ja | Blijft. |
| /recruitment/compliance-officer | werving compliance officers | ja | ja | Blijft. |
| /recruitment/general-counsel | general counsel werving | ja | ja | Blijft. |
| /recruitment/legal-counsel | legal counsel werving | ja | ja | Blijft. |
| /recruitment/legal-engineer | werving legal engineers | ja | ja | Blijft, "legal AI-specialisten" erbij. |
| /scale-ups | recruitment voor scale-ups | ja ("legal recruitment voor startups en scale-ups") | nee | Voorstel zet "scale-ups" en "legal recruitment" in de eerste alinea. |

- Wijzigt een FAQ-vraag, dan verandert ook de `FAQPage`-JSON-LD van die pagina (die leest de vragen uit dezelfde array). Dat staat bij de betreffende blokken.
- Waar een voorstel een zoekwoord of link zou laten vallen, staat dat expliciet in het blok. Op dit moment: nergens, behalve de punten onder "Aandachtspunten SEO" in de laatste sectie.

---

## 0. Globaal: header, footer, cookiebanner

SEO: alle hrefs en ankerteksten van de footer-recruitmentlinks blijven letterlijk gelijk. Alleen hoofdletters in de navigatielabels en de tagline veranderen.

**0.1 Navigatielabels** · `src/components/layout/Header.tsx` (`navItems`), `src/components/layout/MobileMenu.tsx` (`menuItems`), `src/components/layout/Footer.tsx` (`quickLinks`)
- Huidig: "Voor Kandidaten", "Voor Opdrachtgevers", "Over Ons"
- Voorstel: "Voor kandidaten", "Voor opdrachtgevers", "Over ons"
- Waarom: Hoofdletters in elk woord lezen als brochure. De rest van de site schrijft gewoon Nederlands.

**0.2 Header-knop** · `src/components/layout/Header.tsx`
- Huidig: "Plan kennismaking"
- Voorstel: "Plan een kennismaking"
- Waarom: Telegramstijl. De rest van de site (home, contact) zegt "Plan een kennismaking".

**0.3 Footer: tagline** · `src/components/layout/Footer.tsx`
- Huidig: "Legal Talents Recruitment verbindt juridische professionals met werkgevers die vooruit willen."
- Voorstel: "Legal Talents Recruitment werkt voor werkgevers die juristen zoeken die blijven, en voor juristen die vertrouwelijk willen praten over hun volgende stap."
- Waarom: "Die vooruit willen" zegt niets. De voorgestelde zin is de kernboodschap in eigen woorden. Dezelfde zin staat ook in `layout.tsx` (fallback-description, zie meta) en mogelijk in `src/lib/schema.ts`.

**0.4 Footer: kolomkoppen, links, adres, kvk** · `Footer.tsx`
- Ongewijzigd: past al. Dat geldt voor "Bedrijf", "Snelle links", "Recruitment", "Contact", de zes recruitment-ankers en de juridische links. De recruitment-ankers ("Advocaat recruitment", "Legal counsel vacature" enz.) bevatten het zoekwoord van de doelpagina.

**0.5 Cookiebanner (GetLeads)** · `src/components/consent/GetLeadsConsent.tsx`
- Ongewijzigd: past al. Direct, uitgelegd waarom, zegt wat er niet gebeurt.

---

## 1. Home `/`

SEO: zoekwoord "legal recruitment" staat in de H1 en blijft er staan. De eerste alinea (hero-subtitel) bevatte het niet en bevat het na het voorstel ook niet: geen verlies. Interne links blijven: `/vacatures`, `/voor-kandidaten`, `/voor-opdrachtgevers`, `/juridisch-recruiter` (anker "juridisch recruiter" blijft), `/over-ons`, `/contact`.

**1.1 Hero: H1** · `src/components/home/Hero.tsx` (`title`)
- Huidig: "Legal recruitment voor de lange termijn."
- Ongewijzigd: past al. Concreet genoeg, en het is de positionering ("juristen die blijven").

**1.2 Hero: ondertitel** · `Hero.tsx` (`subtitle`)
- Huidig: "Vaste plaatsingen voor advocaten, bedrijfsjuristen en in-house counsel. Wij bereiken maandelijks 40.000 juristen."
- Voorstel: "Vaste plaatsingen voor advocaten, bedrijfsjuristen en legal AI-specialisten. Bij ons staat een persoonlijke aanpak en vertrouwen centraal"
- Waarom: Haalt de ongecontroleerde 40.000 weg (zie A) en zet de werkwijze en legal AI erin, die op de home ontbraken.

**1.3 Hero: knop** · `Hero.tsx`
- Huidig: "Bekijk vacatures →"
- Ongewijzigd: past al.

**1.4 Logostrook** · `src/components/home/TrustStrip.tsx`
- Huidig: "/ VERTROUWD DOOR O.A." boven Freshfields, Legal Mind, Law & Pepper, Simmons + Simmons, Elexer, BarentsKrans
- Ongewijzigd: past al, mits alle zes klant of relatie zijn. Zie beslispunt I. Het blok staat op 13 pagina's.

**1.5 Voor wie: H2** · `src/components/home/AudienceSplit.tsx`
- Huidig: "Voor werkgever of werknemer."
- Voorstel: "Voor juristen en voor werkgevers."
- Waarom: "Of"-constructie eruit. "Werknemer" is niet wie wij helpen: dat zijn juristen.

**1.6 Voor wie: kaart "Voor juridisch talent"** · `AudienceSplit.tsx`
- Huidig body: "Op zoek naar een nieuwe juridische uitdaging? Wij begeleiden je vertrouwelijk en persoonlijk naar de juiste positie."
- Huidig bullets: "Vaste posities op niveau" / "Persoonlijke begeleiding" / "Discreet en vertrouwelijk"
- Voorstel body: "Wil je vertrouwelijk praten over je volgende stap? Dat kan. We spreken je eerst zelf en stellen je alleen voor als jij dat wilt."
- Voorstel bullets: "Functies die niet altijd online staan" / "Alleen voorgesteld met jouw akkoord" / "Begeleiding tot na je eerste werkdag"
- Waarom: Retorische vraag, "uitdaging" en drie abstracte bullets worden concrete beloften. Begeleiding na de eerste werkdag ontbrak.

**1.7 Voor wie: kaart "Voor opdrachtgevers"** · `AudienceSplit.tsx`
- Huidig body: "Op zoek naar juridisch talent dat blijft? Wij vinden de match die zowel inhoudelijk als cultureel past."
- Huidig bullets: "Persoonlijk netwerk" / "Brede dekking alle rechtsgebieden" / "Fee bij plaatsing"
- Voorstel body: "Jullie zoeken juristen die blijven. We komen eerst bij jullie langs om de cultuur te leren kennen en stellen alleen kandidaten voor die we zelf uitgebreid spraken."
- Voorstel bullets: "Intake bij jullie op locatie" / "Alleen kandidaten die we zelf spraken" / "Fee bij plaatsing"
- Waarom: Retorische vraag en "zowel ... als" eruit, intake op locatie en eigen gesprekken erin. De derde bullet blijft: die is al concreet. Aanspreekvorm "jullie" ontbrak.

**1.8 Voor wie: knoplabels** · `AudienceSplit.tsx`
- Huidig: "Meer voor kandidaten →", "Meer voor opdrachtgevers →"
- Ongewijzigd: past al. Links en ankers blijven.

**1.9 Uitgelichte vacatures: H2** · `src/components/home/FeaturedJobs.tsx`
- Huidig: "Recent geplaatste posities."
- Voorstel: "Openstaande vacatures."
- Waarom: De drie kaarten tonen open vacatures met "Bekijk vacature →". "Geplaatst" is feitelijk onjuist en botst met de kaarten.

**1.10 Uitgelichte vacatures: knop** · `FeaturedJobs.tsx`
- Huidig: "Alle juridische vacatures →"
- Ongewijzigd: past al.

**1.11 Rechtsgebieden: H2 en alinea** · `src/components/home/PracticeAreas.tsx`
- Huidig H2: "Breed netwerk. Scherpe focus."
- Huidig alinea: "Van advocatuur tot bedrijfsleven: wij verbinden juridische specialisten met vaste posities waar inhoud, cultuur en ambitie samenkomen."
- Voorstel H2: "Van vastgoedrecht tot legal AI"
- Voorstel alinea: "Van ondernemingsrecht tot privacy, bij kantoren en corporates. Daarnaast zoeken we bewust naar legal tech en legal AI: juristen en engineers die AI in de praktijk werkend krijgen."
- Waarom: De home zei niets over legal tech en legal AI. "Breed netwerk, scherpe focus" is een tegenstelling zonder inhoud. Colon-opbouw en "inhoud, cultuur en ambitie" eruit. Eén dubbele punt blijft, omdat die hier uitlegt in plaats van een punchline.

**1.12 Rechtsgebieden: tegel "Legal tech"** · `src/content/rechtsgebieden.ts` (en `src/lib/legal.ts`, `legalPracticeAreas`)
- Huidig: "Legal tech"
- Voorstel: "Legal tech en legal AI"
- Waarom: De tegel moet het deel van de boodschap dragen dat ontbrak. Slug `legal-tech` verandert niet. `legal.ts` voedt ook `knowsAbout` in de schema.

**1.13 Over ons-blok: H2** · `src/components/home/AboutShort.tsx`
- Huidig: "Een plan op maat."
- Voorstel: "Begonnen als twee rechtenstudenten."
- Waarom: "Op maat" staat op de verboden lijst en zegt niets. Het verhaal van de oprichters ontbrak op de home.

**1.14 Over ons-blok: alinea's** · `AboutShort.tsx`
- Huidig 1: "Storm en Max richtten Legal Talents Recruitment op vanuit één overtuiging: Legal Recruitment aanbieden waarbij persoonlijke aanpak, vertrouwen en kwaliteit ouderwets hoog in het vaandel staat."
- Voorstel 1: "Storm en Max begonnen Legal Talents Recruitment als rechtenstudenten. Ze wilden legal recruitment waarbij persoonlijk contact en vertrouwen voorop staan."
- Huidig 2: "Met een achtergrond in de juridische wereld en een breed netwerk van advocaten, bedrijfsjuristen en kantoren werken wij als juridisch recruiter voor beide kanten van de tafel."
- Voorstel 2: "Met een achtergrond in de juridische wereld en een breed netwerk van advocaten, bedrijfsjuristen en kantoren werken we als juridisch recruiter voor beide kanten van de tafel."
- Waarom: "Ouderwets hoog in het vaandel" is brochure, en "wij" wordt "we". Het anker "juridisch recruiter" en de link naar `/juridisch-recruiter` blijven.
- Let op: "Ze wilden ..." is mijn lezing van de bestaande zin. Corrigeer als het verhaal anders was.

**1.15 Over ons-blok: knop en alt-tekst** · `AboutShort.tsx`
- Ongewijzigd: past al ("Lees ons verhaal →" en de alt-tekst).

**1.16 Kennismaking (Cal): H2 en alinea** · `src/components/home/BookingSection.tsx`
- Huidig: "Plan direct een gesprek." en "Kies een moment dat jou uitkomt. Het gesprek is vrijblijvend, vertrouwelijk en kan telefonisch of digitaal. Je ontvangt direct een bevestiging en agenda-uitnodiging."
- Ongewijzigd: past al. Concreet en praktisch.

**1.17 Afsluitende CTA** · `src/components/home/HomeCTA.tsx`
- Huidig: H2 "Klaar voor de volgende stap?" en "Een vrijblijvend gesprek, vertrouwelijk en zonder verplichtingen."
- Voorstel: H2 "Een gesprek kost niets." en "Vertrouwelijk en zonder verplichtingen. Praat met ons over je volgende stap, of over jullie vacature."
- Waarom: Retorische vraag eruit, beide doelgroepen aangesproken. De knop "Plan een kennismaking →" blijft.

**1.18 Social preview-afbeelding** · `public/social preview.png`
- Huidig: afbeelding met de slogan "Legal Recruitment, zoals het hoort." (alt in `src/app/page.tsx` en `src/app/blogs/page.tsx` klopt daarmee.)
- Voorstel: de slogan in de afbeelding vervangen door "Legal recruitment voor de lange termijn." en de alt-tekst op beide plekken mee aanpassen.
- Waarom: "Zoals het hoort" belooft niets controleerbaars en spreekt de H1 van de site tegen. Dit vraagt een nieuw ontwerp, dus pas later oppakken.

---

## 2. Vacatures `/vacatures` en `/vacatures/[slug]`

SEO: zoekwoord "juridische vacatures". H1 "Actuele vacatures." en de eerste alinea behouden "vacatures". Alle links blijven (`/contact`, `/vacatures/[slug]`, `#solliciteren`).

**2.1 Overzicht: H1** · `src/app/vacatures/page.tsx`
- Huidig: "Actuele vacatures."
- Ongewijzigd: past al.

**2.2 Overzicht: intro** · `src/app/vacatures/page.tsx`
- Huidig: "Bekijk hier onze openstaande vacatures. Wel op zoek maar staat er niets tussen? Wij zetten niet alle vacatures online, altijd slim om ons even te benaderen dus!"
- Voorstel: "Dit zijn onze openstaande vacatures. We zetten niet alles online. Staat er niets tussen, neem dan contact met ons op: we hebben vaak posities die nergens staan."
- Waarom: Retorische vraag, uitroepteken en "altijd slim ... dus" eruit. De boodschap (niet alles staat online) blijft.

**2.3 Overzicht: teller en lege staat** · `page.tsx`
- Huidig: "{n} open posities" en "Op dit moment geen open posities. Stuur ons je profiel — wij brengen je op de hoogte zodra er iets past."
- Voorstel: teller ongewijzigd. Lege staat: "Op dit moment geen open posities. Stuur ons je profiel, dan laten we het weten zodra er iets past."
- Waarom: Gedachtestreepje en "wij" eruit.

**2.4 Overzicht: afsluitblok** · `page.tsx`
- Huidig: "Stuur ons je profiel." en "Wij hebben vaak posities die niet publiek staan. Een gesprek is altijd vrijblijvend." (knop "Plan een gesprek →")
- Voorstel: "Stuur ons je profiel." blijft. Alinea: "We hebben vaak posities die niet online staan. Een gesprek is vrijblijvend en vertrouwelijk."
- Waarom: "Wij" naar "we", "publiek" naar "online" (zelfde woord als in 2.2), vertrouwelijkheid expliciet.

**2.5 Vacaturekaart en detailpagina (chrome)** · `src/components/vacatures/VacatureCard.tsx`, `src/app/vacatures/[slug]/page.tsx`
- Ongewijzigd: past al. Dat geldt voor "← Alle vacatures", "Reageer op deze vacature →", "On hold", de salarisindicatie en de on-hold-tekst ("We verwachten over enkele maanden weer te starten met de werving ...").

**2.6 Sollicitatieformulier: intro** · `src/components/vacatures/SollicitatieForm.tsx`
- Huidig: "Vul het formulier in. We reageren binnen 5 werkdagen — meestal sneller. Vertrouwelijk en zonder verplichtingen."
- Voorstel: "Vul het formulier in. We reageren binnen 5 werkdagen, meestal sneller. Vertrouwelijk en zonder verplichtingen."
- Waarom: Alleen het gedachtestreepje. Zie beslispunt F voor de reactietermijn.

**2.7 Sollicitatieformulier: bevestiging, labels, foutmeldingen** · `SollicitatieForm.tsx`, `src/lib/validations/sollicitatie.ts`, `src/lib/apply/constants.ts`
- Ongewijzigd: past al. "Bedankt voor je sollicitatie!", de toestemmingszin en de foutmeldingen zijn kort en duidelijk.

### Vacature-intro's (excerpts)

De excerpts staan op de vacaturekaarten, in de uitgelichte vacatures op de home en zijn de fallback voor de meta description. De vacatureteksten zelf (de MDX-body's) vallen buiten dit voorstel, maar zie 2.18.

**2.8 Advocaat Financieel Recht & Ondernemingsrecht, 2-4 jaar** · `content/vacatures/advocaat-financieel-en-ondernemingsrecht-eindhoven.mdx` (`excerpt`)
- Huidig: "Specialistisch kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 2-4 jaar ervaring. Inhoudelijk uitdagende dossiers, korte lijnen en geen hiërarchisch gedoe."
- Voorstel: "Specialistisch kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 2-4 jaar ervaring. Je werkt aan uiteenlopende dossiers, met korte lijnen en zonder hiërarchisch gedoe."
- Waarom: "Inhoudelijk uitdagende" is een lege kwalificatie. "Geen hiërarchisch gedoe" is juist direct en blijft.

**2.9 Advocaat Financieel Recht & Ondernemingsrecht, 4+ jaar** · `...-senior-eindhoven.mdx` (`excerpt`)
- Huidig: "Specialistisch kantoor in Eindhoven zoekt een ervaren advocaat financieel recht en ondernemingsrecht met 4+ jaar ervaring. Zelfstandig dossiers behandelen in een team met visie en korte lijnen."
- Voorstel: "Specialistisch kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 4+ jaar ervaring. Je behandelt dossiers zelfstandig, in een team met korte lijnen."
- Waarom: "Ervaren" en "4+ jaar ervaring" zeggen hetzelfde, "visie" is een containerwoord.

**2.10 Advocaat Vastgoed** · `content/vacatures/advocaat-vastgoed-eindhoven.mdx` (`excerpt`)
- Huidig: "Toonaangevend kantoor in Eindhoven zoekt een ervaren vastgoedadvocaat. Werken voor aannemers, projectontwikkelaars en woningcorporaties in een hecht team."
- Voorstel: "Advocatenkantoor in Eindhoven zoekt een vastgoedadvocaat met 3-5 jaar ervaring. Je werkt voor aannemers, projectontwikkelaars en woningcorporaties, samen met collega-advocaten en juristen."
- Waarom: "Toonaangevend" eruit en het ervaringsniveau uit de titel erin, zodat de intro zelf concreet is.

**2.11 AI Privacy & Governance Counsel** · `content/vacatures/ai-privacy-governance-counsel.mdx` (`excerpt`)
- Huidig: "Voor een innovatieve organisatie in Midden-Nederland zoeken we een AI Privacy & Governance Counsel. Je bouwt het kader rond data en AI, van de AI Act tot DPIA's. Hybride, 32–40 uur."
- Voorstel: "Voor een organisatie in Midden-Nederland zoeken we een AI Privacy & Governance Counsel. Je bouwt het kader rond data en AI, van de AI Act tot DPIA's. Hybride, 32–40 uur."
- Waarom: Alleen "innovatieve" eruit. De rest is concreet. Past goed bij de legal AI-focus.

**2.12 Interim jurist** · `content/vacatures/interim-jurist.mdx` (`excerpt`)
- Ongewijzigd: past al.

**2.13 Juridisch secretaresse** · `content/vacatures/juridisch-secretaresse.mdx` (`excerpt`)
- Ongewijzigd: past al. De zin "en alleen als jij dat wilt" is precies de toon.

**2.14 Legal Counsel (doorlopend)** · `content/vacatures/legal-counsel.mdx` (`excerpt`)
- Ongewijzigd: past al.

**2.15 Legal Engineer Amsterdam** · `content/vacatures/legal-engineer-amsterdam.mdx` (`excerpt`)
- Ongewijzigd: past al. Concreet over de rol en past bij de legal AI-focus.

**2.16 Legal Engineer Den Haag (staat op draft)** · `content/vacatures/legal-engineer-den-haag.mdx` (`excerpt`)
- Huidig: "Bouw de brug tussen AI, juridische praktijk en organisatie bij een toonaangevend advocaten- en notarissenkantoor. Nieuwe rol in Den Haag."
- Voorstel: "Bouw de brug tussen AI, juridische praktijk en organisatie bij een advocaten- en notarissenkantoor in Den Haag. Het is een nieuwe rol, dus je bepaalt zelf waar je begint."
- Waarom: "Toonaangevend" eruit. De tweede zin gebruikt wat in de vacaturetekst staat ("geen dichtgetimmerde functieomschrijving").

**2.17 Legal Operations Specialist** · `content/vacatures/legal-operations-specialist.mdx` (`excerpt`)
- Ongewijzigd: past al.

**2.18 Gesignaleerd in de vacature-body's (geen voorstel, alleen melden)** · `content/vacatures/*.mdx`
- "Toonaangevend", "innovatief", "dynamisch", "unieke kans", "passie", "écht" en gedachtestreepjes staan in de teksten van onder meer AI Privacy, Legal Engineer Amsterdam, Legal Engineer Den Haag, Advocaat Vastgoed en Legal Operations. Deze teksten komen deels van opdrachtgevers. Wil je dat ik ze ook doorloop, zeg het dan: dat wordt een aparte ronde.

---

## 3. Voor kandidaten `/voor-kandidaten`

SEO: het zoekwoord van deze pagina is nu onduidelijk (title zegt "Voor juridisch werknemers", description "nieuwe juridische functie"). Voorstel: "juridische functie" in H1 en eerste alinea, zie 3.1 en 3.2. Bevestig dit. Interne links blijven: `/contact`, `/voor-opdrachtgevers` (anker "Voor opdrachtgevers"), `/bedrijfsjurist-vacature`, `/legal-counsel-vacature`, `/compliance-officer-vacature` (ankers blijven letterlijk gelijk).

**3.1 Hero: H1** · `src/app/voor-kandidaten/page.tsx` (`PageHero title`)
- Huidig: "Wij helpen jou verder."
- Voorstel: "Je volgende juridische functie, vertrouwelijk besproken."
- Waarom: Zegt niet waar de pagina over gaat en bevat geen zoekwoord. Het voorstel noemt wat je krijgt.

**3.2 Hero: subtitel** · `page.tsx` (`subtitle`)
- Huidig: "Een gesprek hoeft niet meteen tot iets te leiden. Wij denken vrijblijvend mee over jouw loopbaan — vertrouwelijk, zonder druk, en alleen met functies die echt passen."
- Voorstel: "Een gesprek hoeft niet tot iets te leiden. We denken vrijblijvend met je mee over je loopbaan en bespreken alleen juridische functies die passen. Wat je vertelt, blijft bij ons."
- Waarom: Drietal, "echt" en gedachtestreepje eruit. "Juridische functie" in de eerste alinea.

**3.3 Hero: knop** · `page.tsx`
- Huidig: "Plan een gesprek →"
- Ongewijzigd: past al.

**3.4 Stappenblok: eyebrow, titel, footer** · `page.tsx` (`MeanderingProcess`)
- Huidig: "/ ONZE AANPAK", "Vier stappen. / Geen druk.", footer "Werkgever? Bekijk hoe wij werving & selectie voor opdrachtgevers doen." met link "Voor opdrachtgevers"
- Ongewijzigd: past al. De footerzin is een wegwijzer, het anker blijft.

**3.5 Stap 001 Kennismaking** · `page.tsx` (`processSteps`)
- Huidig: "Een vrijblijvend gesprek — telefonisch, digitaal of op locatie. We willen jou leren kennen: wat je achtergrond is, waar je naartoe wilt, wat voor jou écht belangrijk is in werk en cultuur."
- Voorstel: "Een vrijblijvend gesprek, telefonisch, digitaal of op locatie. We willen weten waar je vandaan komt en waar je naartoe wilt, en wat je belangrijk vindt in werk en cultuur."
- Waarom: "Écht", gedachtestreepje, dubbele punt-opbouw en drietal eruit.

**3.6 Stap 002 Match** · `page.tsx`
- Huidig: "Pas als we elkaar goed begrijpen, brengen wij relevante posities ter sprake — uit ons netwerk of via gerichte search. Geen massa-mailing met losse vacatures. Alleen functies die passen bij wat we hebben besproken."
- Voorstel: "Pas als we elkaar goed begrijpen, bespreken we posities, uit ons netwerk of via gerichte search. Geen massamailing met losse vacatures. Alleen functies die passen bij wat we hebben besproken."
- Waarom: Gedachtestreepje weg, "brengen wij ... ter sprake" is ambtelijk. De rest is al goed.

**3.7 Stap 003 Voorstellen** · `page.tsx`
- Huidig: "Wij introduceren je alleen na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, wat zij bieden, en wat de cultuur is. Jij beslist of we doorzetten."
- Voorstel: "We stellen je alleen voor met jouw toestemming. Vooraf vertellen we wat de opdrachtgever zoekt, wat ze bieden en hoe de cultuur is. Dat weten we omdat we bij hen op locatie zijn geweest. Jij beslist of we doorzetten."
- Waarom: De intake op locatie ontbrak aan de kandidaatkant, en juist die maakt de uitleg over cultuur geloofwaardig.

**3.8 Stap 004 Begeleiding** · `page.tsx`
- Huidig: "Van eerste gesprek tot ondertekening, en daarna. We helpen bij voorbereiding, salarisonderhandeling en de eerste maanden in de nieuwe functie. Ook als het tegen verwachting niet klikt: eerlijke feedback, beide kanten op."
- Voorstel: "We begeleiden je van het eerste gesprek tot na je eerste werkdag: bij de voorbereiding, de salarisonderhandeling en de eerste maanden in de nieuwe functie. Klikt het toch niet, dan geven we eerlijke feedback, beide kanten op."
- Waarom: "En daarna" wordt concreet ("tot na je eerste werkdag"). De dubbele punt introduceert hier een opsomming, geen punchline.

**3.9 "Eerlijk advies": tekst en kaarten** · `src/components/candidates/WhatWeOffer.tsx`
- Huidig alinea: "Wij investeren tijd in elkaar leren kennen. Dat betekent soms maanden contact voordat er iets passends voorbij komt. En als wij niks goeds hebben, zeggen we dat ook eerlijk — beter geen voorstel dan een mismatch. Voor jou is dit kosteloos. Wij worden betaald door opdrachtgevers, niet door kandidaten. Onze rol is matchmaker, niet verkoper."
- Voorstel alinea: "We investeren tijd in elkaar leren kennen. Dat betekent soms maanden contact voordat er iets passends voorbij komt. En als we niks goeds hebben, zeggen we dat eerlijk. Beter geen voorstel dan een mismatch. Voor jou is dit kosteloos. We worden betaald door opdrachtgevers, niet door kandidaten. Onze rol is matchmaker, niet verkoper."
- Waarom: Alleen "wij" naar "we" en het gedachtestreepje. Inhoudelijk past het al.
- Kaarten "Kosteloos" en "Vrijblijvend": ongewijzigd, passen al.
- Kaart "Vertrouwelijk": huidig "Jouw zoektocht blijft tussen ons — altijd, en zonder uitzondering". Voorstel: "Jouw zoektocht blijft tussen ons. We stellen je alleen voor met jouw toestemming."
- Waarom (kaart): "Zonder uitzondering" is een absolute belofte zonder inhoud. De toestemmingsregel is controleerbaar.

**3.10 "Voor welke juristen?": kop en tekst** · `src/components/candidates/CandidatesForWhom.tsx`
- Huidig H2: "Voor welke juristen?"
- Voorstel H2: "Voor deze juristen."
- Huidig alinea: "Wij werken met juridisch talent op middel- tot senior niveau, in alle rechtsgebieden en functies. Specifiek op zoek naar een bedrijfsjurist vacature of een legal counsel vacature of een compliance officer vacature? Daarvoor hebben we aparte pagina's."
- Voorstel alinea: "We werken met juristen van advocaat-stagiair tot partner en van bedrijfsjurist tot general counsel, in alle rechtsgebieden. Zoek je een bedrijfsjurist vacature, een legal counsel vacature of een compliance officer vacature? Daar hebben we aparte pagina's voor."
- Waarom: Retorische kopvraag eruit. "Middel- tot senior" botst met de kaart "van advocaat-stagiair" (zie beslispunt B). De vraag in de alinea blijft: die wijst de lezer de weg. De drie ankers en links blijven letterlijk gelijk.

**3.11 Kaarten Advocatuur, Bedrijfsjuridisch, Specialismen** · `CandidatesForWhom.tsx`
- Huidig Advocatuur: "Van advocaat-stagiair tot senior medewerker en partner. Alle rechtsgebieden — van ondernemingsrecht tot familierecht."
- Voorstel Advocatuur: "Van advocaat-stagiair tot senior medewerker en partner. Alle rechtsgebieden, van ondernemingsrecht tot familierecht."
- Bedrijfsjuridisch: ongewijzigd, past al.
- Huidig Specialismen: "Compliance officers, privacy specialisten, contractmanagers, en andere rollen waar diepe juridische kennis nodig is."
- Voorstel Specialismen: "Compliance officers, privacyspecialisten en contractmanagers. Daarnaast legal engineers en legal AI-specialisten, die AI in de praktijk werkend krijgen bij kantoren en corporates."
- Waarom: Legal tech en legal AI ontbraken bij de doelgroep, en "andere rollen" is een opvulzin.

**3.12 Discretie: kop** · `src/components/candidates/DiscretionPromise.tsx`
- Huidig: "Je gegevens worden niet gedeeld."
- Ongewijzigd: past al.

**3.13 Discretie: vier commitments** · `DiscretionPromise.tsx`
- Commitment 01: titel "Geen onaangekondigde voorstellen" blijft. Huidig body: "Wij introduceren je nooit bij een opdrachtgever zonder jouw expliciete toestemming per voorstel." Voorstel: "We stellen je nooit voor aan een opdrachtgever zonder jouw toestemming, per voorstel."
- Commitment 02: huidig titel "Geen netwerken van werkgevers", body "Wij delen jouw zoektocht niet binnen ons eigen netwerk — niet met collega's, niet met andere kantoren, niet 'in vertrouwen' met derden." Voorstel titel: "Niet in ons netwerk". Voorstel body: "We delen je zoektocht niet in ons netwerk: niet met collega's, niet met andere kantoren, ook niet 'in vertrouwen' met derden."
- Commitment 03: huidig titel "Geen sporen in je systemen", body "Voorkeur voor digitale of telefonische gesprekken buiten kantooruren? Geen probleem. We werken naar jouw situatie, niet andersom." Voorstel titel: "Gesprekken buiten kantooruren". Voorstel body: "Liever digitaal of telefonisch, buiten kantooruren? Geen probleem. We werken naar jouw situatie, niet andersom."
- Commitment 04: titel "Recht om weg te lopen" blijft. Huidig body: "Op elk moment kan je het traject stoppen. Wij verwijderen je gegevens op verzoek direct — geen wachttijd, geen procedure." Voorstel: "Je kunt het traject op elk moment stoppen. Op verzoek verwijderen we je gegevens."
- Waarom: De titels bij 02 en 03 zeggen iets anders dan de tekst eronder ("netwerken van werkgevers", "sporen in je systemen"). "Direct, geen wachttijd" staat nergens in het privacybeleid en is niet te controleren, dus eruit.

**3.14 FAQ: vragen en antwoorden** · `src/components/candidates/CandidatesFAQ.tsx` (`candidatesFaqItems`)
Let op: de vragen en antwoorden voeden de FAQPage-JSON-LD. Vragen 2 en 6 veranderen daarmee ook in de structured data.
- Q1 "Kost dit mij iets?": vraag ongewijzigd. Antwoord huidig: "Nee. Onze dienstverlening richting jou is volledig kosteloos. Wij worden betaald door opdrachtgevers bij een succesvolle plaatsing, niet door kandidaten." Voorstel: "Nee. Voor jou is het kosteloos. We worden betaald door opdrachtgevers bij een succesvolle plaatsing, niet door kandidaten."
- Q2 huidig: "Blijft mijn zoektocht echt vertrouwelijk?" Voorstel: "Blijft mijn zoektocht vertrouwelijk?" Antwoord huidig: "Ja, altijd. Wij delen niets met huidige werkgevers, en introduceren je alleen na expliciete toestemming. Op verzoek werken we volledig anoniem in de eerste fase — bijvoorbeeld via versleutelde communicatie of buiten kantooruren." Voorstel: "Ja. We delen niets met je huidige werkgever en stellen je alleen voor met jouw toestemming. Op verzoek werken we in de eerste fase volledig anoniem, bijvoorbeeld via versleutelde communicatie of buiten kantooruren."
- Q3 "Wat als ik nog niet zeker weet of ik wil overstappen?": vraag ongewijzigd. Antwoord huidig: "Geen probleem. Veel van onze gesprekken beginnen oriënterend. We brengen pas concrete posities ter sprake als we elkaar goed begrijpen en als er iets passends voorbij komt — dat kan weken of maanden duren. Geen druk." Voorstel: "Geen probleem. Veel van onze gesprekken beginnen oriënterend. We bespreken pas posities als we elkaar goed begrijpen en er iets passends voorbijkomt. Dat kan weken of maanden duren. Geen druk."
- Q4 "Welke rechtsgebieden of functies dekken jullie?": vraag ongewijzigd. Antwoord huidig: "Alle juridische functies op middel- tot senior niveau, in alle rechtsgebieden. Van advocaat-stagiair tot partner, van bedrijfsjurist tot general counsel. Specialisaties zoals compliance, privacy en contractmanagement vallen daar ook onder." Voorstel: "Alle juridische functies, in alle rechtsgebieden: van advocaat-stagiair tot partner en van bedrijfsjurist tot general counsel. Ook specialisaties als compliance, privacy en contractmanagement, en rollen in legal tech en legal AI, zoals legal engineer."
- Q5 "Wat gebeurt er met mijn CV?": vraag ongewijzigd. Antwoord huidig: "Je CV bewaren wij maximaal 2 jaar na het laatste contact, of korter als je dat wenst. We delen het nooit zonder jouw expliciete toestemming per voorstel. Je kunt te allen tijde inzage, wijziging of verwijdering aanvragen — meer hierover in ons privacybeleid." Voorstel: "We bewaren je CV maximaal 2 jaar na het laatste contact, of korter als je dat wilt. We delen het nooit zonder jouw toestemming per voorstel. Je kunt altijd inzage, wijziging of verwijdering vragen. Meer daarover staat in ons privacybeleid."
- Q6 huidig: "Hoe weet ik of een functie écht bij mij past?" Voorstel: "Hoe weet ik of een functie bij mij past?" Antwoord huidig: "Wij screenen vooraf grondig — wat de werkgever zoekt, hoe de cultuur is, welke ruimte er is om te groeien, en wat de aandachtspunten zijn. Bij een voorstel krijg je deze context volledig, zodat je een eerlijke afweging kunt maken voordat we doorzetten." Voorstel: "We gaan vooraf bij de werkgever langs en vragen wat ze zoeken, hoe de cultuur is, welke ruimte er is om te groeien en wat de aandachtspunten zijn. Bij een voorstel krijg je dat allemaal te horen, zodat je een eerlijke afweging kunt maken voordat we doorzetten."
- Q7 "Helpen jullie ook bij de onderhandelingen?": vraag ongewijzigd. Antwoord huidig: "Ja. Wij begeleiden je bij gesprekken, salarisonderhandeling en de voorwaarden. Onze ervaring met de juridische markt helpt om realistische uitgangspunten te formuleren — voor beide kanten." Voorstel: "Ja. We begeleiden je bij de gesprekken, de salarisonderhandeling en de voorwaarden. We kennen de juridische markt en helpen realistische uitgangspunten te formuleren, voor beide kanten."
- Waarom: "Echt", "wij" en gedachtestreepjes eruit. Antwoord 6 noemt nu de intake op locatie in plaats van "screenen". Antwoord 4 noemt legal tech en legal AI.

**3.15 Afsluitende CTA** · `src/components/candidates/CandidatesCTA.tsx`
- Huidig: H2 "Even oriënteren?" en "Een gesprek hoeft tot niks te leiden. Vrijblijvend, vertrouwelijk, en op jouw moment."
- Voorstel: H2 "Even oriënteren kan." en "Een gesprek hoeft tot niks te leiden. Vrijblijvend, vertrouwelijk en op een moment dat jou uitkomt."
- Waarom: Retorische vraag eruit, en de zin is niet meer een bijna-kopie van de hero.

---

## 4. Voor opdrachtgevers `/voor-opdrachtgevers`

SEO: zoekwoord "werving juridisch talent" (uit de title). De huidige H1 is identiek aan die van de home en bevat het zoekwoord niet. Het voorstel zet het in de H1. Interne links blijven: `/contact`, `/voor-kandidaten` (anker "Voor kandidaten"), `/juridisch-recruiter` (anker "juridisch recruiter"), `/algemene-voorwaarden`.

**4.1 Hero: H1** · `src/app/voor-opdrachtgevers/page.tsx` (`PageHero title`)
- Huidig: "Legal recruitment voor de lange termijn."
- Voorstel: "Werving van juridisch talent."
- Waarom: Zelfde H1 als de home, zonder het zoekwoord van deze pagina. Het voorstel maakt hem eigen en zoekwoordrijk. De regeleinde-opbouw blijft twee regels ("Werving van" / "juridisch talent.").

**4.2 Hero: subtitel** · `page.tsx`
- Huidig: "Geen vijftig cv's, maar drie kandidaten die passen. Korte lijnen, en je betaalt pas bij een succesvolle plaatsing."
- Voorstel: "Juristen die blijven. Geen vijftig cv's, maar drie kandidaten die passen. We komen bij jullie langs voor de intake en jullie betalen pas bij een succesvolle plaatsing."
- Waarom: "Je" naar "jullie" (organisatie). De positionering ("juristen die blijven") en de intake op locatie ontbraken in de hero. Zie beslispunt J voor "drie".

**4.3 Hero: knop** · `page.tsx`
- Huidig: "Plan een intake →"
- Ongewijzigd: past al.

**4.4 Stappenblok: eyebrow, titel, footer** · `page.tsx`
- Huidig: "/ AANPAK", "Vier stappen. / Eén match.", footer "Zelf jurist en op zoek? Bekijk hoe wij kandidaten begeleiden." met link "Voor kandidaten"
- Ongewijzigd: past al.

**4.5 Stap 001 Intake** · `page.tsx` (`processSteps`)
- Huidig: "Bij voorkeur op locatie, om jullie organisatie en cultuur écht te leren kennen. We bespreken de functie, het profiel, wat goed werkt en wat niet — en wat een nieuwe collega van jullie kant kan verwachten."
- Voorstel: "Bij voorkeur op locatie, zodat we jullie organisatie en cultuur zelf zien. We bespreken de functie en het profiel, wat goed werkt en wat niet, en wat een nieuwe collega bij jullie mag verwachten."
- Waarom: "Écht" en gedachtestreepje eruit, en de intake wordt concreet ("zelf zien").

**4.6 Stap 002 Search** · `page.tsx`
- Ongewijzigd: past al. Concreet ("één-op-één", "niet op vacaturesites").

**4.7 Stap 003 Voorstellen** · `page.tsx`
- Huidig: "Alleen kandidaten die wij zelf hebben gesproken en die passen. Bij elke voordracht een onderbouwing: wat brengt deze persoon mee, waarom past het inhoudelijk én cultureel, wat zijn aandachtspunten."
- Voorstel: "Alleen kandidaten die we zelf hebben gesproken en die passen. Bij elke voordracht leggen we uit wat deze persoon meebrengt, waarom het inhoudelijk en cultureel past en wat de aandachtspunten zijn."
- Waarom: Dubbele punt en drie vragen worden één lopende zin. Inhoud blijft.

**4.8 Stap 004 Begeleiding** · `page.tsx`
- Huidig: "Van eerste gesprek tot de eerste werkdag — en daarna. We blijven betrokken bij onboarding en houden contact gedurende de garantieperiode. Plaatsen is een begin, geen einde."
- Voorstel: "We begeleiden van het eerste gesprek tot na de eerste werkdag. We blijven betrokken bij de onboarding en houden contact, ook als er een garantieperiode is afgesproken. Een plaatsing is een begin, geen einde."
- Waarom: De garantieperiode is volgens de voorwaarden alleen van toepassing als die is afgesproken (beslispunt D).

**4.9 "Wat je krijgt": kop en tekst** · `src/components/employers/WhatYouGet.tsx`
- Huidig: H2 "Wat je krijgt." en "Geen verborgen extras, geen losse fees voor zaken die erbij horen."
- Voorstel: H2 "Wat jullie krijgen." en alinea ongewijzigd.
- Waarom: De rest van de pagina spreekt de organisatie aan met "jullie", dit blok met "je".

**4.10 "Wat je krijgt": lijst** · `WhatYouGet.tsx` (`includedItems`)
- Huidig laatste punt: "Vervangingsgarantie (op aanvraag)"
- Voorstel: "Vervangingsgarantie, als vooraf schriftelijk afgesproken"
- Waarom: Sluit aan op art. 7 van de algemene voorwaarden. De overige zes punten zijn ongewijzigd: ze zijn concreet.

**4.11 "Wat je krijgt": uitleg rechts** · `WhatYouGet.tsx`
- Huidig: "Bij Legal Talents zit alles wat je nodig hebt voor een succesvolle plaatsing in het honorarium. Geen aparte facturen voor intake-gesprekken, screening, of coördinatie. Geen verrassingen achteraf."
- Voorstel: "Alles wat jullie nodig hebben voor een succesvolle plaatsing zit in het honorarium. Geen aparte facturen voor de intake, de screening of de coördinatie."
- Waarom: "Je" naar "jullie". "Geen verrassingen achteraf" eruit, het staat al bij het honorarium (4.13) en kan dubbel.
- Kop "Geen losse facturen voor wat erbij hoort." en de alinea over wervingscampagnes en assessments: ongewijzigd, past al. De link "Lees onze voorwaarden →" blijft.

**4.12 "Met wie wij werken": kop, tekst, kaarten** · `src/components/employers/ForWhom.tsx`
- Huidig H2: "Met wie wij werken." Voorstel: "Met wie we werken."
- Huidig alinea: "Als juridisch recruiter werken wij voor partijen die kwaliteit boven kwantiteit zetten. Of het nu om één positie of een groeiend team gaat."
- Voorstel alinea: "Als juridisch recruiter werken we voor kantoren en bedrijven die juristen zoeken die blijven. Voor één positie of voor een groeiend team."
- Waarom: "Of het nu ... of" en de containerzin "kwaliteit boven kwantiteit" eruit, positionering erin. Het anker "juridisch recruiter" en de link blijven.
- Kaart Advocatenkantoren, huidig: "Van boutique tot middelgroot. We vervullen posities op alle niveaus — van advocaat-stagiair tot partner — in alle rechtsgebieden." Voorstel: "Van boutique tot middelgroot. We vervullen posities op alle niveaus, van advocaat-stagiair tot partner, in alle rechtsgebieden."
- Kaart In-house jurist: ongewijzigd, past al.
- Kaart Specialistische posities, huidig: "Compliance, privacy officers, contractmanagers en andere juridisch-aanpalende rollen waar juridische kennis nodig is." Voorstel: "Compliance officers, privacy officers en contractmanagers. Daarnaast legal engineers en legal AI-specialisten, die AI bij jullie in de praktijk werkend krijgen."
- Waarom (kaart): Legal engineers en legal AI ontbraken, en "andere juridisch-aanpalende rollen waar juridische kennis nodig is" zegt niets.

**4.13 Honorarium: kop en tekst** · `src/components/employers/Pricing.tsx`
- Huidig H2: "No cure, no pay. Helder en eerlijk." Voorstel: "No cure, no pay."
- Waarom: "Helder en eerlijk" is een eigenschap die de tekst eronder moet bewijzen.
- Alinea 1 en 2 ("Het honorarium is uitsluitend verschuldigd bij een succesvolle plaatsing." en de uitleg over percentage en minimum-honorarium): ongewijzigd, past al.
- Huidig alinea 3: "Alle afspraken — percentage, minimum-honorarium, garantieperiode — leggen we voor de start vast in een schriftelijke opdrachtbevestiging. Geen verrassingen, geen kleine lettertjes."
- Voorstel alinea 3: "Alle afspraken, zoals het percentage, het minimum-honorarium en de garantieperiode, leggen we voor de start vast in een schriftelijke opdrachtbevestiging."
- Waarom: "Geen verrassingen, geen kleine lettertjes" is een belofte via ontkenning. De schriftelijke opdrachtbevestiging is het controleerbare deel.
- Link "Lees de volledige voorwaarden →" blijft.

**4.14 Honorarium: drie kaarten** · `Pricing.tsx` (`pricingStats`)
- "No cure" ("Geen factuur zonder plaatsing") en "No fees" ("Geen losse kosten voor intake, screening of coördinatie"): ongewijzigd, passen al.
- Huidig "No risk": "Vervangingsgarantie op aanvraag — bij voortijdig vertrek werven wij kosteloos opnieuw of crediteren wij de fee."
- Voorstel titel: "Garantie". Voorstel body: "Vervangingsgarantie als vooraf schriftelijk afgesproken. Bij voortijdig vertrek zetten we ons in om kosteloos een vervanger te vinden."
- Waarom: "No risk" en "of crediteren wij de fee" beloven meer dan art. 7 van de voorwaarden (beslispunt D). De titel "Garantie" breekt het "No ..."-patroon bewust: een garantie zonder risico bestaat niet.

**4.15 FAQ: vragen en antwoorden** · `src/components/employers/EmployersFAQ.tsx` (`employersFaqItems`)
Let op: wijzigingen in de antwoorden komen ook in de FAQPage-JSON-LD. Alle vragen blijven gelijk.
- Q1 "Werken jullie landelijk of alleen in Oost-Nederland?", Q3 "Hoe lang duurt een gemiddeld traject?": ongewijzigd, passen al.
- Q2 "Welke posities vervullen jullie?" Huidig: "Alle juridische posities op middel- tot senior niveau, in alle rechtsgebieden. Van advocaat-stagiair tot partner, van bedrijfsjurist tot general counsel." Voorstel: "Alle juridische posities, in alle rechtsgebieden: van advocaat-stagiair tot partner en van bedrijfsjurist tot general counsel. Ook legal engineers en legal AI-specialisten."
- Q4 "Wat als de geplaatste kandidaat snel weer vertrekt?" Huidig: "Bij een schriftelijk overeengekomen garantieregeling werven wij eenmalig en kosteloos een vervangende kandidaat, mits het vertrek niet voortkomt uit reorganisatie, fusie, faillissement of een wezenlijke wijziging van de functie." Voorstel: "Als we vooraf schriftelijk een garantie hebben afgesproken, zetten we ons in om eenmalig en kosteloos een vervangende kandidaat te vinden. Dat geldt niet bij reorganisatie, fusie, faillissement of een wezenlijke wijziging van de functie."
- Q5 "Kunnen wij ook met meerdere bureaus tegelijk werken?" Huidig: "Dat kan, maar we werken het liefst exclusief. Dat geeft ons de ruimte om er écht voor te gaan en zorgt voor de beste matches. Bij niet-exclusieve opdrachten hanteren we soms aangepaste voorwaarden." Voorstel: "Dat kan, maar we werken het liefst exclusief. Dan kunnen we de tijd nemen voor de intake en voor gesprekken met kandidaten, en hoeven we niet te racen tegen andere bureaus. Bij niet-exclusieve opdrachten hanteren we soms andere voorwaarden."
- Q6 "Hoe gaan jullie om met vertrouwelijkheid?" Huidig: "Discretie is uitgangspunt, niet optie. Kandidaatgegevens delen we alleen na expliciete toestemming. Andersom delen wij jullie zoekopdracht of bedrijfsnaam pas met kandidaten na overleg met jullie." Voorstel: "Discretie is het uitgangspunt. We delen kandidaatgegevens alleen met toestemming van de kandidaat. Jullie zoekopdracht en bedrijfsnaam delen we pas met kandidaten na overleg met jullie."
- Waarom: Q2 mist legal tech en legal AI en bevat de niveau-tegenstrijdigheid (beslispunt B). Q4 volgt de voorwaarden. Q5 en Q6: "écht" en het slogan-achtige "uitgangspunt, niet optie" eruit.

**4.16 Afsluitende CTA** · `src/components/employers/EmployersCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Een vrijblijvende intake op jullie locatie. We luisteren, denken mee, en bepalen samen of er een goede match is voor samenwerking."
- Voorstel: H2 "Een intake kost niets." en "We komen bij jullie langs en luisteren. Daarna bepalen we samen of samenwerken zinvol is."
- Waarom: Retorische vraag eruit, "goede match is voor samenwerking" is omslachtig. De knop "Plan een intake →" blijft.

---

## 5. Over ons `/over-ons`

SEO: zoekwoord "legal recruitment" staat in de H1 ("Specialisten in legal recruitment") en blijft. Het voorstel zet het ook in de eerste alinea. Interne links blijven: `/contact`, `/recruitment/legal-engineer` (anker "legal engineer"), `/recruitment/bedrijfsjurist` (anker "bedrijfsjurist"), `/recruitment/legal-counsel` (anker "legal counsel").

**5.1 Hero: H1** · `src/components/about/PageHero.tsx`
- Huidig: "Specialisten in legal recruitment"
- Ongewijzigd: past al. Zoekwoord staat erin.

**5.2 Hero: subtitel** · `PageHero.tsx`
- Huidig: "Kwaliteit, service en vertrouwen staan bij ons nog ouderwets hoog in het vaandel."
- Voorstel: "Twee rechtenstudenten begonnen Legal Talents. Het groeide uit tot een recruitment bureau dat bemiddelt binnen het gehele juridische werkveld."
- Waarom: Drietal en "ouderwets hoog in het vaandel" eruit. Het oprichtingsverhaal staat nu bovenaan en het zoekwoord in de eerste alinea.

**5.3 Hero: knop** · `PageHero.tsx`
- Huidig: "Neem contact op →"
- Ongewijzigd: past al.

**5.4 Ons verhaal: H2** · `src/components/about/OurStory.tsx`
- Huidig: "Begonnen in de collegebanken."
- Ongewijzigd: past al. Concreet en het is het onderscheid.

**5.5 Ons verhaal: alinea 1** · `OurStory.tsx`
- Huidig: "Legal Talents begon met twee rechtenstudenten en één overtuiging: de beste manier om talent aan je organisatie te verbinden, is dat talent al kennen vóórdat het afstudeert. Wij zaten zelf tussen de juristen van morgen en zagen van dichtbij wie er echt uitsprong. Die kennis brachten we naar kantoren die verder keken dan het cijferlijstje."
- Voorstel: "Legal Talents begon met twee rechtenstudenten en een idee: talent al kennen voordat het afstudeert. We zaten zelf tussen de juristen van morgen en zagen van dichtbij wie er uitsprong. Die mensen brachten we bij kantoren die verder keken dan het cijferlijstje."
- Waarom: Dubbele punt-opbouw ("één overtuiging:") ingekort, "echt" eruit. De kern blijft staan.

**5.6 Ons verhaal: alinea 2** · `OurStory.tsx`
- Huidig: "Naarmate ons netwerk in de juridische sector groeide, groeide ook onze rol. Inmiddels bemiddelen we niet alleen starters, maar ook in medior- en seniorfuncties binnen het hele juridische domein: van ervaren advocaat tot bedrijfsjurist en legal counsel. De aanpak bleef hetzelfde: persoonlijk, zorgvuldig en met oog voor de lange termijn."
- Voorstel: "Ons netwerk groeide en daarmee ons werk. Inmiddels bemiddelen we starters en medior- en seniorjuristen, van ervaren advocaat tot bedrijfsjurist en legal counsel. De aanpak bleef hetzelfde: we spreken iedereen zelf en kijken naar wat over een paar jaar nog klopt."
- Waarom: "Niet alleen X, maar ook Y" en het drietal "persoonlijk, zorgvuldig en met oog voor de lange termijn" eruit. De ankers "bedrijfsjurist" en "legal counsel" blijven op dezelfde plek.

**5.7 Ons verhaal: blok "Kennis van Legal en AI"** · `OurStory.tsx`
- Huidig: "Wij combineren juridische kennis met een scherpe blik op technologie. Daardoor begrijpen we niet alleen wat een advocaat dagelijks doet, maar ook wat legal AI in de praktijk betekent. Kantoren en legal tech-bedrijven die op zoek zijn naar een legal engineer of een jurist met kennis van AI, weten ons daarom te vinden."
- Voorstel: "We combineren juridische kennis met kennis van technologie. We weten wat een advocaat dagelijks doet en wat legal AI in de praktijk betekent. Kantoren en legal tech-bedrijven die een legal engineer of een jurist met AI-kennis zoeken, weten ons daarom te vinden."
- Waarom: "Niet alleen ... maar ook" en "scherpe blik" eruit. Titel "Kennis van Legal en AI" blijft. Anker "legal engineer" met link blijft.

**5.8 Ons verhaal: blok "Ook de kandidaat die niet zoekt."** · `OurStory.tsx`
- Huidig: "De beste juristen staan zelden actief op een vacaturesite. Door continu te investeren in online vindbaarheid en slimme search bereiken wij maandelijks zo'n 40.000 juristen, waaronder professionals die niet actief zoeken, maar wel openstaan voor de juiste volgende stap. Zo krijgen opdrachtgevers toegang tot talent dat ze via de gebruikelijke kanalen niet vinden."
- Voorstel: "De beste juristen staan zelden actief op een vacaturesite. Daarom investeren we in online vindbaarheid en gerichte search. Zo bereiken we maandelijks zo'n 40.000 juristen, ook professionals die niet actief zoeken maar wel openstaan voor een volgende stap. Opdrachtgevers krijgen zo talent te zien dat ze via de gebruikelijke kanalen niet vinden."
- Waarom: "Slimme search", "toegang tot" en "continu" zijn opvulling. Het getal blijft op deze ene plek staan (beslispunt A): voeg een bron toe of laat het weg.

**5.9 Team: kop** · `src/components/about/TeamGrid.tsx`
- Huidig: "Een compact team dat met je meedenkt."
- Ongewijzigd: past al.

**5.10 Team: alinea** · `TeamGrid.tsx`
- Huidig: "Geen accountmanagers, geen tussenlagen. De persoon die je spreekt, werkt ook aan jouw opdracht. In overleg met de opdrachtgever maken we een plan op maat. Wij schuiven niet met CV's, we werken samen met jou om de functie zo goed mogelijk te vervullen."
- Voorstel: "Geen accountmanagers, geen tussenlagen. De persoon die je spreekt, werkt ook aan jouw opdracht. We schuiven niet met cv's: we vullen de functie samen met jou zo goed mogelijk in."
- Waarom: "Op maat" eruit, de twee "wij"-zinnen worden één. De eerste twee zinnen zijn al goed.

**5.11 Team: bio's** · `TeamGrid.tsx`
- Max: huidig "Richtte Legal Talents op met één overtuiging: recruitment in de juridische sector kan scherper. Minder schuiven met CV's, meer focus op matches die ook over drie jaar nog kloppen." Voorstel: "Richtte Legal Talents tijdens zijn studie op, met een idee: recruitment in de juridische sector kan scherper. Minder schuiven met cv's, meer focus op matches die ook over drie jaar nog kloppen."
- Storm: huidig "Bouwde eerst ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Bouwt slimme processen met AI zodat er meer tijd is voor wat telt: in gesprek met mensen." Voorstel: "Bouwde ervaring op in recruitment en richtte daarna samen met Max Legal Talents op. Zet AI in voor de processen eromheen, zodat er meer tijd is voor wat telt: in gesprek met mensen."
- Justin: ongewijzigd, past al.
- Waarom: Het studentenverhaal ontbrak in Max' bio. "Slimme processen" is een containerwoord. Let op: Storms bio ("eerst ervaring in recruitment, daarna oprichter") past niet makkelijk bij "begonnen als twee rechtenstudenten" (zie tegenstrijdigheden). Corrigeer als dat anders was.

**5.12 Waarden: kop en drie kaarten** · `src/components/about/Values.tsx`
- H2 "Onze kernwaarden": ongewijzigd, past al.
- Kwaliteit, huidig: "Wij spreken alle kandidaten voor wij ze aan je voorstellen. Ons motto is kwaliteit boven kwantiteit: overspoelt worden met CV's is niet prettig. Een aantal top kandidaten wel." Voorstel: "We spreken alle kandidaten voordat we ze aan je voorstellen. Liever een paar topkandidaten dan een stapel cv's."
- Service, huidig: "Wij houden van korte lijnen, snel schakelen, persoonlijk advies en eerlijkheid. Wij zijn 7 dagen in de week te bereiken en kandidaten kunnen ons ook buiten werktijd bellen. Handig toch?" Voorstel: "We houden van korte lijnen en snel schakelen, en we zijn eerlijk. We zijn 7 dagen per week bereikbaar en kandidaten mogen ons ook buiten werktijd bellen."
- Vertrouwen, huidig: "Wij begrijpen hoe belangrijk een discreet proces is. Wij zullen nooit ongevraagd je CV delen met een kantoor. Voor bedrijven kunnen wij ook anoniem werven." Voorstel: "Een discreet proces is belangrijk. We delen je cv nooit zonder jouw toestemming. Bedrijven kunnen ook anoniem werven."
- Waarom: Retorische "Handig toch?", "motto" en "wij zullen" (ambtelijk) eruit. "Wij" naar "we". Inhoud blijft. Controleer of "7 dagen in de week bereikbaar" nog steeds waar is.

**5.13 Afsluitende CTA** · `src/components/about/AboutCTA.tsx`
- Huidig: H2 "Even kennismaken?", "Bij voorkeur op locatie, op een kopje koffie. Vrijblijvend en vertrouwelijk.", knop "Plan een afspraak →"
- Voorstel: H2 "Kom langs voor een kop koffie." Alinea: "Bij voorkeur op locatie. Vrijblijvend en vertrouwelijk." Knop: "Plan een kennismaking →"
- Waarom: Retorische vraag eruit, en de knop gebruikt hetzelfde woord als de rest van de site.

---

## 6. Contact `/contact`

SEO: geen specifiek zoekwoord, de pagina is een conversiepagina. Interne links en contactgegevens blijven ongewijzigd.

**6.1 Hero: H1 en alinea** · `src/app/contact/page.tsx`
- Huidig: H1 "Iets inplannen?" en "Plan direct een vrijblijvend gesprek op een moment dat jou uitkomt. Vertrouwelijk, persoonlijk en zonder verplichtingen."
- Voorstel: H1 "Plan een kennismaking." en "Kies een moment dat jou uitkomt. Het gesprek is vrijblijvend en vertrouwelijk, telefonisch, digitaal of bij jullie op locatie."
- Waarom: Retorische vraag als H1 eruit en drietal weg. De drie vormen (telefonisch, digitaal, op locatie) staan nu op de pagina, in lijn met de meta description.

**6.2 Direct contact: kop en tekst** · `page.tsx`
- Huidig: H2 "Liever direct contact?" en "We reageren binnen 24 uur, meestal sneller. Je bent ook altijd welkom voor een kop koffie."
- Ongewijzigd: past al. De vraag in de kop is een wegwijzer, en de tekst is precies de toon.

**6.3 Contactkaart (naam, adres, LinkedIn)** · `page.tsx`
- Ongewijzigd: past al.

**6.4 Formulier: bevestiging** · `src/components/contact/ContactForm.tsx`
- Huidig: "Bericht verzonden!" en "We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op."
- Voorstel: kop ongewijzigd. Tekst: "We hebben je bericht ontvangen en reageren binnen 24 uur, meestal sneller."
- Waarom: "Zo snel mogelijk" is vaag. De pagina belooft al 24 uur (beslispunt F).

**6.5 Formulier: labels, opties, foutmeldingen** · `ContactForm.tsx`, `src/lib/validations/contact.ts`
- Ongewijzigd: past al.

---

## 7. Blog `/blogs` en `/blogs/[slug]`

SEO: de overzichtspagina mikt in de title op "Blog over legal recruitment" (zie meta). De H1 en alle links blijven zoals ze zijn.

**7.1 Overzicht: H1** · `src/app/blogs/page.tsx`
- Huidig: "Inzichten uit de praktijk."
- Ongewijzigd: past al.

**7.2 Overzicht: intro** · `src/app/blogs/page.tsx`
- Huidig: "Wat we zien in de juridische markt — van advocatuur tot in-house. Korte artikelen voor juristen en werkgevers die verder willen."
- Voorstel: "Wat we zien in de juridische markt, van advocatuur tot in-house en legal tech. Korte artikelen voor juristen en werkgevers."
- Waarom: Gedachtestreepje en de lege staart "die verder willen" eruit. Legal tech erbij.

**7.3 Overzicht: lege staat, kaartlabels** · `src/app/blogs/page.tsx`, `src/components/blogs/BlogCard.tsx`
- Ongewijzigd: past al.

**7.4 Artikel: afsluitkop** · `src/app/blogs/[slug]/page.tsx`
- Huidig: kandidaten "Klaar voor een volgende stap?", opdrachtgevers "Talent dat blijft."
- Voorstel: kandidaten "Praat vertrouwelijk over je volgende stap." Opdrachtgevers ongewijzigd.
- Waarom: Retorische vraag eruit. "Talent dat blijft." is de positionering in drie woorden.

**7.5 Artikel: CTA-blok onder de tekst** · `src/components/blogs/mdx/CtaBlock.tsx`
- Kandidaat huidig: titel "Op zoek naar een nieuwe rol?" en "Wij denken vrijblijvend mee — vertrouwelijk, en alleen met functies die passen." Voorstel: titel "Een nieuwe rol? Praat eerst met ons." en "We denken vrijblijvend met je mee, en alleen over functies die passen."
- Opdrachtgever huidig: titel "Op zoek naar juridisch talent?" en "Geen lijst met vijftig cv's, maar kandidaten die inhoudelijk en cultureel passen." Voorstel: titel "Juridisch talent werven dat blijft." Tekst ongewijzigd, past al.
- Waarom: Retorische vragen eruit, gedachtestreepje eruit, positionering erin.

**7.6 Artikel: knoplabels onder de CTA** · `src/content/blog-categories.ts` (`audienceCtas`)
- Ongewijzigd: past al. "Bekijk vacatures →", "Meer voor kandidaten", "Plan een kennismaking →", "Meer voor opdrachtgevers" bevatten de ankers van de doelpagina's.

**7.7 Artikel: auteursbio's** · `src/content/blog-authors.ts`
- Zelfde tekst als de team-bio's op Over ons. Neem de wijzigingen uit 5.11 hier ook over, zodat de bio op beide plekken gelijk is.
- Waarom: Twee bronnen voor dezelfde bio lopen uit elkaar.

**7.8 Artikel: overige chrome** · `AuthorBox.tsx`, `ArticleFaq.tsx`, `ArticleBreadcrumbs.tsx`, `RelatedPages.tsx`, `TableOfContents.tsx`
- Ongewijzigd: past al.

**7.9 Lijst van blogposts (niet beoordeeld, alleen opgesomd)**

| Titel | Pad |
|-------|-----|
| Advocaat-stagiaire worden: eisen, stage en beroepsopleiding (2026) | `/blogs/advocaat-stagiaire-worden` |
| Legal tech en de legal engineer: de nieuwe rol in de advocatuur | `/blogs/legal-tech-legal-engineer` |
| Privacy jurist worden: taken, opleiding en carrière | `/blogs/privacy-jurist` |
| Salaris advocaat 2026: wat verdien je van stagiaire tot partner? | `/blogs/salaris-advocaat` |
| Van advocatuur naar in-house: wanneer is het het juiste moment? | `/blogs/van-advocatuur-naar-in-house` |
| Verschil jurist en advocaat: wat mag wie, en welke past bij jou? | `/blogs/verschil-jurist-en-advocaat` |
| Wat doet een compliance officer? Taken, vaardigheden en carrière | `/blogs/wat-doet-een-compliance-officer` |
| Wat is een legal counsel? Betekenis, taken en verschil met bedrijfsjurist | `/blogs/wat-is-een-legal-counsel` |
| Wat juristen écht zoeken in een werkgever | `/blogs/wat-juristen-zoeken-in-een-werkgever` |

Niet gepubliceerd: `content/blogs/_TEMPLATE.mdx` (sjabloon).
Gesignaleerd, niet gewijzigd: de titel "Wat juristen écht zoeken in een werkgever" bevat een verboden woord. Als je die titel wilt aanpassen, wijzigt de H1 en de meta van dat artikel. De URL blijft gelijk.

---

## 8. Juridisch recruiter `/juridisch-recruiter`

SEO: zoekwoord "juridisch recruiter" staat in H1 en eerste alinea en blijft daar. Interne links blijven: `/contact`, `/voor-kandidaten`, `/voor-opdrachtgevers`, `/vacatures`, `/recruitment/*` (zes rolkaarten), `/scale-ups` (anker "recruitment voor scale-ups"), `/over-ons` (anker "over-ons pagina").

**8.1 Hero: H1 en knoppen** · `src/components/landing/JuridischRecruiterHero.tsx`
- Huidig: H1 "Juridisch recruiter", knoppen "Plan een gesprek →" en "Voor kandidaten"
- Ongewijzigd: past al.

**8.2 Hero: alinea** · `JuridischRecruiterHero.tsx`
- Huidig: "Juridisch recruiter voor advocatenkantoren en inhouse legal teams. Wij werven gespecialiseerd talent — van advocaat tot general counsel — landelijk in Nederland, vanuit een persoonlijk netwerk. Geen generalistisch bureau, wel een legal recruiter die de markt kent."
- Voorstel: "Juridisch recruiter voor advocatenkantoren en inhouse legal teams. We werven advocaten, juristen en legal AI-specialisten, landelijk en vanuit een persoonlijk netwerk. We komen bij jullie langs voor de intake en stellen alleen kandidaten voor die we zelf hebben gesproken."
- Waarom: Gedachtestreepjes en "Geen X, wel Y" eruit. Legal AI, intake op locatie en eigen gesprekken erin. Het zoekwoord blijft in de eerste zin.

**8.3 Probleem: kop** · `JuridischRecruiterProbleem.tsx`
- Huidig: H2 "Generalisten missen de juridische markt."
- Ongewijzigd: past al.

**8.4 Probleem: intro en drie kaarten** · `JuridischRecruiterProbleem.tsx`
- Intro huidig: "Een algemeen bureau dat ook IT of finance doet, heeft die context zelden — en dat merk je in de shortlist." Voorstel: "Een algemeen bureau dat ook IT of finance doet, heeft die context zelden, en dat merk je in de shortlist."
- Kaart 001 huidig: "Generalisten sturen cv’s die op papier lijken te kloppen — zonder te toetsen op dossier, seniority en de cultuur van kantoor of legal team." Voorstel: "Generalisten sturen cv’s die op papier lijken te kloppen, zonder te toetsen op dossier, seniority en de cultuur van kantoor of legal team."
- Kaart 002: ongewijzigd, past al.
- Kaart 003 huidig: "Wij komen met een korte, onderbouwde shortlist — kandidaten die wij zelf hebben gesproken." Voorstel: "We komen met een korte, onderbouwde shortlist van kandidaten die we zelf hebben gesproken."
- Waarom: Alleen gedachtestreepjes en "wij".

**8.5 Voor wie** · `JuridischRecruiterVoorWie.tsx`
- Kop "Twee kanten van dezelfde tafel.": ongewijzigd, past al.
- Intro huidig: "Legal Talents is tweezijdig: wij werven voor opdrachtgevers en begeleiden kandidaten. Dezelfde marktkennis, dezelfde discretie." Voorstel: "Legal Talents werkt voor beide kanten: we werven voor opdrachtgevers en begeleiden kandidaten. Dezelfde marktkennis, dezelfde discretie."
- Kaart Opdrachtgevers: tekst ongewijzigd. Bullets huidig: "Advocatenkantoren — stagiair tot partner" / "Inhouse: bedrijfsjurist, counsel, GC" / "Compliance, privacy en legal engineer". Voorstel: "Advocatenkantoren, van stagiair tot partner" / "Inhouse: bedrijfsjurist, counsel, GC" / "Compliance, privacy, legal engineer en legal AI".
- Kaart Kandidaten huidig: "Advocaten, bedrijfsjuristen, legal counsel, general counsel, compliance officers en legal engineers die discreet willen oriënteren — zonder druk, zonder cv-dump." Voorstel: "Advocaten, bedrijfsjuristen, legal counsel, general counsel, compliance officers, legal engineers en legal AI-specialisten die discreet willen oriënteren, zonder druk en zonder cv-dump." Bullets: ongewijzigd.
- Knoppen: ongewijzigd ("Plan een opdrachtgesprek →", "Bekijk vacatures →", beide "Meer voor ..." ankers).
- Waarom: Legal AI ontbrak. Gedachtestreepjes eruit.

**8.6 Werkwijze: vijf stappen** · `src/app/juridisch-recruiter/page.tsx` (`processSteps`)
- 001 huidig: "Bij voorkeur op locatie: organisatie, cultuur, team en het echte profiel. Wat moet deze persoon kunnen, en wat moet het juist niet worden?" Voorstel: "Bij voorkeur op locatie: organisatie, cultuur, team en het echte profiel. We bespreken wat deze persoon moet kunnen en wat de rol juist niet moet worden."
- 002 huidig: "Gerichte search via netwerk en persoonlijke benadering. We mappen waar relevant talent zit — vaak passief beschikbaar, zelden op een vacaturesite." Voorstel: "Gerichte search via netwerk en persoonlijke benadering. We mappen waar relevant talent zit, vaak passief beschikbaar en zelden op een vacaturesite."
- 003 huidig: "Wij spreken kandidaten zelf. ..." Voorstel: "We spreken kandidaten zelf. Vakinhoud, motivatie voor een overstap en cultuurfit wegen even zwaar als het cv. Alleen wie past, gaat door."
- 004: ongewijzigd, past al.
- 005 huidig: "Van eerste gesprek tot indiensttreding — en daarna. Planning, feedback beide kanten op, en betrokkenheid tijdens de eerste periode." Voorstel: "Van eerste gesprek tot indiensttreding, en daarna. We plannen, geven feedback beide kanten op en blijven betrokken tijdens de eerste periode."
- Titel "Vijf stappen. / Eén match." en footer: ongewijzigd.
- Waarom: Retorische vraag in 001 eruit, gedachtestreepjes eruit, "wij" naar "we".

**8.7 Rollen: kop, intro, kaarten** · `JuridischRecruiterRollen.tsx`
- Kop "Welke rollen wij werven.": ongewijzigd.
- Intro huidig: "Specialistische pagina’s per profiel — plus de rechtsgebieden waarin wij structureel search doen. Bouw je de eerste legal hire in een groeiend bedrijf? Bekijk ook recruitment voor scale-ups." Voorstel: "Specialistische pagina’s per profiel, plus de rechtsgebieden waarin we structureel search doen. Bouw je de eerste legal hire in een groeiend bedrijf? Bekijk ook recruitment voor scale-ups."
- Kaart Legal engineer huidig: "Het snijvlak van recht, proces en technologie." Voorstel: "Het snijvlak van recht, proces en technologie, inclusief legal AI."
- Overige kaarten: ongewijzigd, passen al. Het anker "recruitment voor scale-ups" en alle zes de links blijven.
- Waarom: Gedachtestreepje weg. Legal AI toegevoegd. De vraag in de intro is een wegwijzer en blijft.

**8.8 Waarom: kop en tekst** · `JuridischRecruiterWaarom.tsx`
- Huidig H2: "Positionering zonder volume-praat." Voorstel: "Kwaliteit boven volume."
- Huidig alinea 1: "Legal Talents is een compact bureau van mensen met een juridische achtergrond. Wij beloven geen fabricagecijfers — wel een werkwijze die kwaliteit, discretie en een duurzame match voorop zet." Voorstel: "Legal Talents is een compact bureau van mensen met een juridische achtergrond. We beloven geen cijfers, wel een werkwijze: kwaliteit, discretie en een match voor de lange termijn."
- Huidig alinea 2: "Wat je wél mag verwachten: kandidaten die wij zelf hebben gesproken, een shortlist met onderbouwing, en begeleiding tot voorbij de eerste werkdag. Meer over wie wij zijn staat op onze over-ons pagina." Voorstel: "Wat je mag verwachten: kandidaten die we zelf hebben gesproken, een shortlist met onderbouwing en begeleiding tot na de eerste werkdag. Meer over wie we zijn staat op onze over-ons pagina."
- Waarom: Het woord "Positionering" is een intern label dat in de zichtbare H2 is terechtgekomen. "Fabricagecijfers" is onduidelijk. Het anker "over-ons pagina" en de link blijven letterlijk gelijk.

**8.9 Waarom: vier redenen** · `JuridischRecruiterWaarom.tsx`
- 001 huidig: "Wij werven geen finance of IT erbij. Onze aandacht zit bij advocaten, juristen en legal teams — en bij de cultuur waarin zij moeten landen." Voorstel: "We werven geen finance of IT erbij. Onze aandacht zit bij advocaten, juristen en legal teams, en bij de cultuur waarin zij terechtkomen."
- 002: ongewijzigd, past al.
- 003 huidig: "Omdat wij beide kanten van de tafel kennen, toetsen we eerder of een overstap écht past — inhoudelijk, cultureel en in tempo." Voorstel: "Omdat we beide kanten van de tafel kennen, merken we sneller of een overstap past: inhoudelijk, cultureel en qua tempo."
- 004 huidig: "Onze basis is Nijmegen; we werken als legal recruiter in Nederland landelijk. Intake het liefst op locatie. No cure, no pay: je betaalt bij plaatsing." Voorstel: "Onze basis is Nijmegen, maar we werken als legal recruiter landelijk. De intake doen we het liefst op locatie. No cure, no pay: jullie betalen bij plaatsing."
- Waarom: "Écht", "je" bij een werkgeversbelofte en gedachtestreepjes eruit.

**8.10 FAQ** · `JuridischRecruiterFAQ.tsx` (`juridischRecruiterFaqItems`)
Let op: elke vraag met `answerNode` heeft de tekst twee keer staan (`answer` voor de JSON-LD en `answerNode` voor de pagina). Beide moeten gelijk worden aangepast. Vragen blijven ongewijzigd.
- Q1 "Wat is het verschil tussen een juridisch recruiter en een vacaturebank?" Huidig: "... je plaatst een advertentie en wacht op reacties. Een juridisch recruiter zoekt actief — ook bij talent dat niet solliciteert. Wij spreken kandidaten, toetsen vakinhoud en cultuur, en komen met een onderbouwde shortlist. ..." Voorstel: "... jullie plaatsen een advertentie en wachten op reacties. Een juridisch recruiter zoekt actief, ook bij talent dat niet solliciteert. We spreken kandidaten zelf, toetsen vakinhoud en cultuur en komen met een onderbouwde shortlist. ..." Rest ongewijzigd.
- Q2 "Hoe werkt jullie honorarium?", Q3 "Werven jullie ook interim, of alleen vaste posities?", Q4 "Werken jullie landelijk?": ongewijzigd, passen al. De links in Q2 ("voor opdrachtgevers", "algemene voorwaarden") blijven.
- Q5 "Kost een kennismaking kandidaten iets?" Huidig: "Nee. Wij worden betaald door opdrachtgevers, niet door kandidaten. ..." Voorstel: "Nee. We worden betaald door opdrachtgevers, niet door kandidaten. ..." (zowel `answer` als `answerNode`; de links "actuele vacatures" en "kennismaking" blijven.)
- Waarom: Alleen "je/jullie" en gedachtestreepjes. De antwoorden zijn verder concreet.

**8.11 Afsluitende CTA** · `JuridischRecruiterCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Vrijblijvend, vertrouwelijk, zonder verplichtingen — of je nu werft of zelf oriënteert."
- Voorstel: H2 "Een gesprek kost niets." en "Vrijblijvend en vertrouwelijk, voor wie werft en voor wie zelf oriënteert."
- Kaart Kandidaten huidig: "Bekijk openstaande posities of plan een kennismaking. Wij benaderen je huidige werkgever nooit." Voorstel: "Bekijk openstaande posities of plan een kennismaking. We benaderen je huidige werkgever nooit." Knop "Plan kennismaking" wordt "Plan een kennismaking".
- Kaart Opdrachtgevers: ongewijzigd, past al.
- Waarom: Retorische vraag en "Of je nu ... of" eruit.

---

## 9. Headhunter advocatuur `/headhunter-advocatuur`

SEO: zoekwoord "headhunter advocatuur" staat in H1 en eerste alinea. Ook "juridisch headhunter" en "headhunter juridisch talent" blijven staan (FAQ, probleemkaart). Links blijven: `/contact`, `/voor-opdrachtgevers`, `/voor-kandidaten`, `/vacatures`, `/juridisch-recruiter` (anker "juridisch recruiter"), `/recruitment/*` (vijf rolkaarten), `/over-ons`, `/algemene-voorwaarden`.

**9.1 Hero: H1** · `src/components/landing/HeadhunterAdvocatuurHero.tsx`
- Huidig: "Headhunter advocatuur"
- Ongewijzigd: past al.

**9.2 Hero: alinea** · `HeadhunterAdvocatuurHero.tsx`
- Huidig: "Headhunter voor advocatenkantoren en inhouse legal teams die senior juridisch talent zoeken. Legal Talents is een juridisch headhunter: legal executive search voor rollen die niet via een advertentie binnenkomen — partner, counsel, general counsel, senior bedrijfsjurist. Discreet, landelijk, no cure no pay."
- Voorstel: "Headhunter advocatuur voor kantoren en inhouse legal teams die senior juridisch talent zoeken. Legal executive search voor rollen die niet via een advertentie binnenkomen: partner, counsel, general counsel, senior bedrijfsjurist. We komen voor de briefing bij jullie langs, werken discreet en landelijk, en jullie betalen alleen bij plaatsing."
- Waarom: Zoekwoord staat nu letterlijk in de eerste zin. Gedachtestreepje eruit en "Discreet, landelijk, no cure no pay" wordt een zin met de werkwijze. "Juridisch headhunter" blijft elders op de pagina staan.

**9.3 Hero: knop** · `HeadhunterAdvocatuurHero.tsx`
- Ongewijzigd: past al ("Plan een gesprek →").

**9.4 Werkwijze: vijf stappen** · `src/app/headhunter-advocatuur/page.tsx`
- 001: ongewijzigd, past al ("het briefinggesprek is het halve werk" is precies de toon).
- 002 huidig: "Wij mappen waar relevant talent zit — kantoren, inhouse teams, vaak passief. ..." Voorstel: "We mappen waar relevant talent zit: kantoren, inhouse teams, vaak passief. Gerichte, persoonlijke benadering. Geen massa-outreach, geen openbare advertentie tenzij jullie dat willen."
- 003 huidig: "Wij spreken kandidaten zelf. ... Alleen wie past — en wie écht in beweging is — gaat door." Voorstel: "We spreken kandidaten zelf. Vakinhoud, motivatie voor een overstap en cultuurfit wegen even zwaar als het cv. Alleen wie past en wie in beweging is, gaat door."
- 004: ongewijzigd, past al.
- 005 huidig: "Van eerste gesprek tot indiensttreding — en daarna. Planning, feedback beide kanten op, en betrokkenheid tijdens de eerste periode. Discretie blijft tot het einde." Voorstel: "Van eerste gesprek tot indiensttreding, en daarna. We plannen, geven feedback beide kanten op en blijven betrokken tijdens de eerste periode. Discretie blijft tot het einde."
- Waarom: "Écht", gedachtestreepjes en "wij" eruit.

**9.5 Probleem** · `HeadhunterAdvocatuurProbleem.tsx`
- Kop "Senior legal talent reageert niet op een vacature.": ongewijzigd, past al.
- Intro huidig: "Een advertentie of een generalistisch bureau bereikt zelden de mensen die je écht nodig hebt. Partners, counsel en general counsel zijn passief — en een slordige search is morgen gesprek van de dag." Voorstel: "Een advertentie of een generalistisch bureau bereikt zelden de mensen die jullie nodig hebben. Partners, counsel en general counsel zijn passief, en een slordige search is morgen gesprek van de dag."
- Kaart 001 huidig: "... bewegen alleen als een headhunter juridisch talent persoonlijk en discreet benadert — met een rol die écht iets toevoegt." Voorstel: "... bewegen alleen als een headhunter juridisch talent persoonlijk en discreet benadert, met een rol die iets toevoegt."
- Kaart 002 huidig: "... vakinhoud, track record en cultuurfit het hele werk — niet een extra filter achteraf." Voorstel: "... vakinhoud, track record en cultuurfit het hele werk, geen extra filter achteraf."
- Kaart 003 huidig: "... werkt met mapping en een korte shortlist — kandidaten die wij zelf hebben gesproken." Voorstel: "... werkt met mapping en een korte shortlist van kandidaten die we zelf hebben gesproken." De zin "Een headhunter advocatuur werkt met ..." blijft, dus het zoekwoord blijft.
- Waarom: "Écht", "je" bij een werkgeverstekst en gedachtestreepjes.

**9.6 Voor wie** · `HeadhunterAdvocatuurVoorWie.tsx`
- Kop "Voor kantoren en inhouse teams.": ongewijzigd.
- Intro huidig: "Deze pagina is voor opdrachtgevers: een legal headhunter voor advocatenkantoren én voor legal teams in bedrijven. Dezelfde mapping, dezelfde discretie — een ander type opdracht." Voorstel: "Deze pagina is voor opdrachtgevers: een legal headhunter voor advocatenkantoren en voor legal teams in bedrijven. Dezelfde mapping, dezelfde discretie, een ander type opdracht."
- Kaart Advocatenkantoren: huidig body "... Wij mappen de markt zonder dat de zoektocht morgen in de wandelgangen ligt." Voorstel: "... We mappen de markt zonder dat de zoektocht morgen in de wandelgangen ligt." Bullets huidig: "Headhunter voor advocatenkantoren — discreet en gericht" / "Partner, counsel en laterale moves" / "Secties die je niet openbaar wilt zetten". Voorstel: "Headhunter voor advocatenkantoren, discreet en gericht" / "Partner, counsel en laterale moves" / "Secties die jullie niet openbaar willen zetten".
- Kaart Inhouse legal teams: huidig body "... Wij zoeken mensen die de business begrijpen, niet alleen het dossier." Voorstel: "... We zoeken mensen die verder kijken dan het dossier." Bullets: "Kandidaten die wij zelf hebben gesproken" wordt "Kandidaten die we zelf hebben gesproken". De andere twee: ongewijzigd.
- Kandidatenblok: kop "Liever zelf door een headhunter benaderd worden?" blijft (wegwijzer). Huidig tekst: "Passieve juristen die discreet willen oriënteren: wij benaderen je huidige werkgever nooit. Een kennismaking is kosteloos en vrijblijvend." Voorstel: "Passieve juristen die discreet willen oriënteren: we benaderen je huidige werkgever nooit. Een kennismaking is kosteloos en vrijblijvend."
- Waarom: "Niet alleen X" eruit, "je" naar "jullie" bij werkgevers, gedachtestreepjes en "wij".

**9.7 Rollen** · `HeadhunterAdvocatuurRollen.tsx`
- Kop "Voor welke rollen headhunting zinvol is.": ongewijzigd.
- Intro huidig: "Legal executive search voor senior juridische posities — niet voor elke vacature. Junior tot medior werving loopt vaak via onze juridisch recruiter-aanpak; hieronder de rollen waarbij mapping en een discrete search het verschil maken." Voorstel: "Legal executive search voor senior juridische posities, niet voor elke vacature. Junior tot medior werving loopt vaak via onze juridisch recruiter-aanpak; hieronder de rollen waarbij mapping en een discrete search het verschil maken." Het anker "juridisch recruiter" en de link blijven.
- Kaart Partner huidig: "Zelden publiek — bijna altijd mapping en een-op-een benadering." Voorstel: "Zelden publiek, bijna altijd mapping en een-op-een benadering."
- Kaart Compliance-leiding huidig: "Leiding, oordeel en stakeholdermanagement — niet alleen policy schrijven." Voorstel: "Leiding, oordeel en stakeholdermanagement, meer dan policy schrijven."
- Kaart Head of legal huidig: "Vraagt vakinhoud én organisatiegevoel — een klassieke executive-search-opdracht." Voorstel: "Vraagt vakinhoud en organisatiegevoel. Een klassieke executive-search-opdracht."
- Overige kaarten: ongewijzigd, passen al.
- Waarom: Gedachtestreepjes en "niet alleen".

**9.8 Waarom** · `HeadhunterAdvocatuurWaarom.tsx`
- Kop "Legal headhunter. Geen volume-bureau.": ongewijzigd.
- Alinea 1 huidig: "Legal Talents is een compact bureau van mensen met een juridische achtergrond. Wij beloven geen fabricagecijfers — wel een werkwijze die mapping, discretie en een duurzame match voorop zet." Voorstel: "Legal Talents is een compact bureau van mensen met een juridische achtergrond. We beloven geen cijfers, wel een werkwijze: mapping, discretie en een match voor de lange termijn."
- Alinea 2 huidig: "Wat je wél mag verwachten: een serieuze intake, kandidaten die wij zelf hebben gesproken, een shortlist met onderbouwing, en begeleiding tot voorbij de eerste werkdag. ..." Voorstel: "Wat je mag verwachten: een intake op locatie, kandidaten die we zelf hebben gesproken, een shortlist met onderbouwing en begeleiding tot na de eerste werkdag. ..." Rest (de ankers "juridisch recruiter" en "over-ons") blijft.
- Reden 001 huidig: "Wij werven geen finance of IT erbij. Onze search zit bij advocatuur en inhouse legal — met extra aandacht voor senioriteit, discretie en de cultuur waarin iemand moet landen." Voorstel: "We werven geen finance of IT erbij. Onze search zit bij advocatuur en inhouse legal, met extra aandacht voor senioriteit, discretie en de cultuur waarin iemand terechtkomt."
- Reden 002: ongewijzigd, past al.
- Reden 003 huidig: "Omdat wij opdrachtgevers én passieve kandidaten kennen, toetsen we eerder of een overstap écht past — inhoudelijk, cultureel en in tempo." Voorstel: "Omdat we opdrachtgevers en passieve kandidaten kennen, merken we sneller of een overstap past: inhoudelijk, cultureel en qua tempo."
- Reden 004 huidig: "Onze basis is Nijmegen; we werken als legal headhunter landelijk in Nederland. Intake het liefst op locatie. No cure, no pay: je betaalt bij plaatsing." Voorstel: "Onze basis is Nijmegen, maar we werken als legal headhunter landelijk. De intake doen we het liefst op locatie. No cure, no pay: jullie betalen bij plaatsing."
- Waarom: "Serieuze intake" is een kwalificatie, "intake op locatie" is een feit. Rest: "écht", "wij", gedachtestreepjes, "je" bij werkgever.

**9.9 FAQ** · `HeadhunterAdvocatuurFAQ.tsx` (`headhunterAdvocatuurFaqItems`)
Let op: bij vragen met `answerNode` beide teksten aanpassen. Alle vragen blijven gelijk.
- Q1 "Wat is het verschil tussen een headhunter en een juridisch recruiter?" Huidig fragment: "vaak met een mix van netwerk, search en — waar het past — een open vacature." Voorstel: "vaak met een mix van netwerk, search en, waar het past, een open vacature." Rest ongewijzigd. De link "juridisch recruiter" en de zoektermen "headhunter advocatuur" en "juridisch headhunter" blijven.
- Q2 "Wanneer is headhunting zinvol?", Q4 "Werken jullie landelijk?", Q5 "Hoe werkt jullie honorarium?": ongewijzigd, passen al.
- Q3 "Voor welke sectoren en rollen werven jullie?" Huidig fragment: "Advocatenkantoren — boutique tot mid-market — en inhouse legal teams ..." Voorstel: "Advocatenkantoren, van boutique tot mid-market, en inhouse legal teams ..." Rest ongewijzigd.
- Q6 "Hoe discreet is de aanpak?" Huidig fragment: "Discretie is het uitgangspunt, niet een extra. Wij delen jullie naam ..." Voorstel: "Discretie is het uitgangspunt. We delen jullie naam ..." Rest ongewijzigd.
- Q7 "Wat kunnen kandidaten verwachten?" Huidig fragment: "Wij worden betaald door opdrachtgevers, niet door kandidaten." Voorstel: "We worden betaald door opdrachtgevers, niet door kandidaten." Rest ongewijzigd (links "voor kandidaten" en "actuele vacatures" blijven).
- Waarom: Gedachtestreepjes en "wij". "Niet een extra" is een kleine slogan-constructie.

**9.10 Afsluitende CTA** · `HeadhunterAdvocatuurCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Vrijblijvend, vertrouwelijk, zonder verplichtingen — of je nu een senior legal search wilt starten of zelf discreet wilt oriënteren."
- Voorstel: H2 "Een gesprek kost niets." en "Vrijblijvend en vertrouwelijk, voor wie een senior legal search wil starten en voor wie zelf discreet wil oriënteren."
- Kaart Opdrachtgevers huidig: "... We denken mee of headhunting hier het juiste instrument is — en hoe de mapping eruitziet." Voorstel: "... We denken mee of headhunting hier het juiste instrument is en hoe de mapping eruitziet."
- Kaart Kandidaten huidig: "... Wij benaderen je huidige werkgever nooit." Voorstel: "... We benaderen je huidige werkgever nooit."
- Waarom: Retorische vraag en "Of je nu ... of" eruit.

---

## Mechanische regels (gelden voor pagina 10 t/m 19)

Op de landingspagina's herhalen dezelfde patronen zich in tientallen zinnen. Om dit document leesbaar te houden, geef ik die één keer als regel. Bij akkoord op een regel pas ik hem overal toe waar hij onder een blok staat. Per blok staat de plek en wat er verandert. De zin eromheen blijft inhoudelijk gelijk.

| Regel | Wat | Voorbeeld |
|-------|-----|-----------|
| M1 | Gedachtestreepje (—) als zinsscheiding wordt komma, punt of dubbele punt (alleen als die een opsomming inleidt) | "Vertrouwelijk en vrijblijvend — telefonisch, digitaal of op locatie" wordt "..., telefonisch, digitaal of op locatie" |
| M2 | "wij" en "Wij" worden "we" en "We", behalve waar nadruk nodig is | "Wij benaderen je huidige werkgever nooit" wordt "We benaderen je huidige werkgever nooit" |
| M3 | "écht" en "echt" als versterker vervallen. "Cruciaal" wordt "belangrijk" | "wat jullie écht zoeken" wordt "wat jullie zoeken" |
| M4 | "Niet alleen X, maar ook Y" en "Of je nu ... of ..." worden herschreven | Per blok uitgeschreven |
| M5 | Aanspreekvorm: "je" wordt "jullie" in teksten die tot een werkgever spreken. "Plan kennismaking" wordt "Plan een kennismaking" | "je betaalt bij plaatsing" wordt "jullie betalen bij plaatsing" |

Afspraak over de afsluitende CTA's: de retorische vraag "Klaar voor een gesprek?" / "Klaar voor een specifiek profiel?" wordt op alle landingspagina's "Een gesprek kost niets." (kandidaten- en gemengde pagina's) of "Een intake kost niets." (werkgeverspagina's). Dat staat per pagina bij het CTA-blok.

---

## 10. Bedrijfsjurist vacature `/bedrijfsjurist-vacature`

SEO: zoekwoord "bedrijfsjurist vacature" (ook "vacatures voor bedrijfsjurist") staat in H1 en eerste alinea en blijft in beide. Links blijven: `/contact`, `/vacatures`, `/voor-kandidaten`, `/juridisch-recruiter` (anker "Juridisch recruiter"), `/voor-opdrachtgevers`, `/recruitment/bedrijfsjurist`.

**10.1 Hero: H1 en knoppen** · `src/components/landing/BedrijfsjuristVacatureHero.tsx`
- Huidig: H1 "Bedrijfsjurist vacature. Discreet gematcht.", knoppen "Plan een kennismaking →" en "Ik zoek een bedrijfsjurist"
- Ongewijzigd: past al.

**10.2 Hero: alinea** · `BedrijfsjuristVacatureHero.tsx`
- Huidig: "Op zoek naar een bedrijfsjurist vacature — of de volgende inhouse stap? Legal Talents is een specialistisch legal recruiter. Wij matchen juristen met inhouse-rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk, en alleen een voorstel na jouw toestemming."
- Voorstel: "Voor juristen die een bedrijfsjurist vacature zoeken, of de volgende inhouse stap. Legal Talents is een specialistisch legal recruiter. We matchen juristen met inhouse-rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk en alleen een voorstel met jouw toestemming."
- Waarom: Retorische vraag en gedachtestreepje eruit, zoekwoord blijft in de eerste zin.

**10.3 Werkwijze: vier stappen** · `src/app/bedrijfsjurist-vacature/page.tsx`
- 001 huidig: "Een vrijblijvend gesprek: achtergrond, richting, wat voor jou telt in werk en cultuur. Geen cv-intake-machinerie — we willen jou begrijpen voordat we over rollen praten." Voorstel: "Een vrijblijvend gesprek over je achtergrond, je richting en wat voor jou telt in werk en cultuur. We willen je begrijpen voordat we over rollen praten."
- 002 huidig: "Pas als we elkaar goed begrijpen, brengen we relevante bedrijfsjurist-rollen ter sprake — openstaand of via stille search. Alleen functies die passen bij niveau, vak en moment." Voorstel: "Pas als we elkaar goed begrijpen, bespreken we relevante bedrijfsjurist-rollen, openstaand of via stille search. Alleen functies die passen bij niveau, vak en moment."
- 003 huidig: "Wij stellen je alleen voor na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, wat zij bieden, en hoe de cultuur voelt. Jij beslist of we doorzetten." Voorstel: "We stellen je alleen voor met jouw toestemming. Vooraf vertellen we wat de opdrachtgever zoekt, wat ze bieden en hoe de cultuur is. Dat weten we omdat we er op locatie zijn geweest. Jij beslist of we doorzetten."
- 004 huidig: "Van eerste gesprek tot ondertekening, en daarna. Voorbereiding, onderhandeling en de eerste periode in de nieuwe rol. Eerlijke feedback, beide kanten op." Ongewijzigd: past al.
- Titel "Vier stappen. / Geen druk." en footer "Opdrachtgever en een bedrijfsjurist nodig?" (link "Juridisch recruiter"): ongewijzigd.
- Waarom: Streepje en "cv-intake-machinerie" eruit, en de intake op locatie ontbrak in 003. "Voelt" is vaag.

**10.4 Probleem** · `BedrijfsjuristVacatureProbleem.tsx`
- Kop "Scrollen is geen serieuze overstap." en intro: ongewijzigd, passen al.
- Kaart 001 huidig: "Jobboards tonen wat publiek mag — niet wat opdrachtgevers écht zoeken." Voorstel: "Jobboards tonen wat publiek mag, niet wat opdrachtgevers zoeken." (M1, M3)
- Kaart 002 huidig: "Vacaturesites filteren dat nauwelijks — cultuur, autonomie en tempo blijven buiten beeld." Voorstel: "Vacaturesites filteren dat nauwelijks, dus cultuur, autonomie en tempo blijven buiten beeld." (M1)
- Kaart 003 huidig: "Wij toetsen eerst of een overstap past — inhoudelijk, in seniority en in moment — voordat er een introductie volgt." Voorstel: "We toetsen eerst of een overstap past, inhoudelijk, in seniority en qua moment, voordat er een introductie volgt." (M1, M2)

**10.5 Voor wie** · `BedrijfsjuristVacatureVoorWie.tsx`
- Intro huidig: "Deze pagina is voor juristen die een bedrijfsjurist vacature zoeken — en voor opdrachtgevers die die rol willen invullen." Voorstel: "Deze pagina is voor juristen die een bedrijfsjurist vacature zoeken, en voor opdrachtgevers die die rol willen invullen." (M1)
- Kaart Kandidaten huidig: "Junior, medior of senior bedrijfsjurist — of advocaat die naar inhouse wil. Wij helpen je oriënteren op vacatures voor bedrijfsjurist ... Zonder druk, zonder cv-dump." Voorstel: "Junior, medior of senior bedrijfsjurist, of advocaat die naar inhouse wil. We helpen je oriënteren op vacatures voor bedrijfsjurist die bij jouw niveau, vak en cultuur passen. Zonder druk en zonder cv-dump." (M1, M2)
- Kaart Opdrachtgevers huidig: "... Wij werven gericht — niet via een stapel reacties op een advertentie." Voorstel: "... We werven gericht, niet via een stapel reacties op een advertentie." Bullet "Search via netwerk, niet alleen jobboards" wordt "Search via netwerk, ook buiten jobboards". Bullet "Kandidaten die wij zelf hebben gesproken" wordt "Kandidaten die we zelf hebben gesproken". (M1, M2, M4)
- Overige bullets en knoppen: ongewijzigd.

**10.6 Rollen** · `BedrijfsjuristVacatureRollen.tsx`
- Intro huidig: "... privacy en compliance alleen als de opdracht dat écht vraagt." Voorstel: "... privacy en compliance alleen als de opdracht dat vraagt." (M3)
- Kaart Medior huidig: "... is gangbaar — vanuit inhouse of als overstap vanuit kantoor." Voorstel: "... is gangbaar, vanuit inhouse of als overstap vanuit kantoor." (M1)
- Kaart Senior huidig: "Sparring met management, niet alleen uitvoering." Voorstel: "Sparring met management, meer dan uitvoering." (M4)
- Kaart Overstap huidig: "Niet elke advocaat is daar klaar voor — dat toetsen we expliciet." Voorstel: "Niet elke advocaat is daar klaar voor. Dat toetsen we expliciet." (M1)
- Kaart Eerste jurist huidig: "Vraagt zelfstandigheid en business-gevoel, niet alleen vakinhoud." Voorstel: "Vraagt zelfstandigheid en business-gevoel, naast vakinhoud." (M4)
- Kaart Aanpalend huidig: "... overlappen soms met bedrijfsjurist-werk — maar het is niet dezelfde functie. Die rollen werven wij als eigen profiel ..." Voorstel: "... overlappen soms met bedrijfsjurist-werk, maar het is niet dezelfde functie. Die rollen werven we als eigen profiel ..." (M1, M2)
- Kaart Junior: ongewijzigd.

**10.7 Waarom** · `BedrijfsjuristVacatureWaarom.tsx`
- Alinea 1 huidig: "... Wij beloven geen fabricagecijfers — wel een werkwijze die kwaliteit, discretie en een duurzame match voorop zet." Voorstel: "... We beloven geen cijfers, wel een werkwijze: kwaliteit, discretie en een match voor de lange termijn."
- Alinea 2 huidig: "Wat je wél mag verwachten: een serieuze intake, context bij elke rol, en begeleiding tot voorbij de eerste werkdag. ..." Voorstel: "Wat je mag verwachten: een uitgebreid gesprek vooraf, context bij elke rol en begeleiding tot na de eerste werkdag. ..." De link "voor kandidaten" en de rest blijven.
- Reden 001 huidig: "Wij werven geen finance of IT erbij. ... — en bij de cultuur waarin zij moeten landen." Voorstel: "We werven geen finance of IT erbij. ... , en bij de cultuur waarin zij terechtkomen." (M1, M2)
- Reden 003 huidig: "Omdat wij opdrachtgevers én kandidaten kennen, toetsen we eerder of een overstap écht past — inhoudelijk, cultureel en in tempo." Voorstel: "Omdat we opdrachtgevers en kandidaten kennen, merken we sneller of een overstap past: inhoudelijk, cultureel en qua tempo."
- Reden 004 huidig: "Onze basis is Nijmegen; we werken landelijk in Nederland. ..." Voorstel: "Onze basis is Nijmegen, maar we werken landelijk. Een gesprek kan telefonisch, digitaal of op locatie. Voor jou als kandidaat is het kosteloos."
- Reden 002: ongewijzigd, past al.
- Waarom: Zelfde patronen als 8.8, "serieuze intake" is een kwalificatie.

**10.8 FAQ** · `BedrijfsjuristVacatureFAQ.tsx`
Bij vragen met `answerNode` beide teksten aanpassen. Vragen blijven gelijk.
- Q1 "Hoe werkt een kennismaking?" huidig: "Een vrijblijvend gesprek — telefonisch, digitaal of op locatie." Voorstel: "Een vrijblijvend gesprek, telefonisch, digitaal of op locatie." (M1)
- Q2 "Blijft mijn oriëntatie vertrouwelijk?" huidig: "Ja. Wij benaderen je huidige werkgever nooit." Voorstel: "Ja. We benaderen je huidige werkgever nooit." (M2)
- Q3 "Wat is het verschil met solliciteren via Indeed of LinkedIn?" huidig: "... Wij zoeken ook bij rollen die niet online staan ..." Voorstel: "... We zoeken ook bij rollen die niet online staan ..." (M2)
- Q4 "Kost het mij iets om jullie in te schakelen?" huidig: "Nee. Kandidaten betalen niets. Wij worden betaald door opdrachtgevers ..." Voorstel: "Nee. Kandidaten betalen niets. We worden betaald door opdrachtgevers ..." (M2)
- Q5 "Wat als er nu geen passende bedrijfsjurist vacature openstaat?" huidig: "... tot er wél iets is dat past — dat kan weken of maanden duren. ... hoe wij kandidaten begeleiden staat op ..." Voorstel: "... tot er iets is dat past. Dat kan weken of maanden duren. ... hoe we kandidaten begeleiden staat op ..." (M1, M2)
- Q6 "Kunnen jullie iets zeggen over het salaris van een bedrijfsjurist?": ongewijzigd, past al. Let op: dit antwoord ("Generieke bedragen op een landingspagina misleiden") spreekt de salarisbedragen op `/recruitment/bedrijfsjurist` en `/recruitment/compliance-officer` tegen. Zie tegenstrijdigheden.

**10.9 Afsluitende CTA** · `BedrijfsjuristVacatureCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Vrijblijvend, vertrouwelijk, zonder verplichtingen — of je nu een bedrijfsjurist vacature zoekt of er één wilt invullen."
- Voorstel: H2 "Een gesprek kost niets." en "Vrijblijvend en vertrouwelijk, voor wie een bedrijfsjurist vacature zoekt en voor wie er een wil invullen."
- Kaart Kandidaten huidig: "... Wij benaderen je huidige werkgever nooit." Voorstel: "... We benaderen je huidige werkgever nooit." Knop "Plan kennismaking →" wordt "Plan een kennismaking →". (M2, M5)
- Kaart Opdrachtgevers: ongewijzigd, past al.
- Waarom: Retorische vraag en "Of je nu ... of" eruit (M4).

---

## 11. Legal counsel vacature `/legal-counsel-vacature`

SEO: zoekwoorden "legal counsel vacature" en "vacature legal counsel" staan in H1 en eerste alinea en blijven beide staan. Links blijven (zelfde set als pagina 10, plus `/recruitment/legal-counsel`).
De pagina is bijna identiek van opbouw aan pagina 10. Blokken die onder 10 al zijn uitgewerkt en hier dezelfde wijziging krijgen, verwijs ik naar die nummers.

**11.1 Hero: alinea** · `LegalCounselVacatureHero.tsx`
- Huidig: "Op zoek naar een legal counsel vacature — of een vacature legal counsel die niet op een jobboard staat? Legal Talents is een specialistisch legal recruiter. Wij matchen legal professionals met inhouse-rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk, en alleen een voorstel na jouw toestemming."
- Voorstel: "Voor wie een legal counsel vacature zoekt, of een vacature legal counsel die niet op een jobboard staat. Legal Talents is een specialistisch legal recruiter. We matchen legal professionals met inhouse-rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk en alleen een voorstel met jouw toestemming."
- Waarom: Zelfde als 10.2. Beide zoekvarianten blijven staan. H1 en knoppen: ongewijzigd.

**11.2 Werkwijze** · `src/app/legal-counsel-vacature/page.tsx`
- 001 huidig: "... Geen cv-intake-machinerie — we willen jou begrijpen voordat we over een legal counsel vacature praten." Voorstel: "... We willen je begrijpen voordat we over een legal counsel vacature praten."
- 002 huidig: "Pas als we elkaar goed begrijpen, brengen we relevante counsel-rollen ter sprake — openstaand of via stille search. ..." Voorstel: "Pas als we elkaar goed begrijpen, bespreken we relevante counsel-rollen, openstaand of via stille search. ..."
- 003: zelfde wijziging als 10.3 (003).
- 004: ongewijzigd.

**11.3 Probleem** · `LegalCounselVacatureProbleem.tsx`
- Kaart 001 huidig: "Jobboards tonen wat publiek mag — niet de opdracht die een organisatie liever uit het netwerk haalt." Voorstel: "Jobboards tonen wat publiek mag, niet de opdracht die een organisatie liever uit het netwerk haalt." (M1)
- Kaart 002 huidig: "... en hoe het team écht werkt." Voorstel: "... en hoe het team werkt." (M3)
- Kaart 003 huidig: "Wij toetsen eerst of niveau, vak en moment kloppen — en introduceren je alleen na expliciete toestemming." Voorstel: "We toetsen eerst of niveau, vak en moment kloppen en stellen je alleen voor met jouw toestemming." (M1, M2)

**11.4 Voor wie** · `LegalCounselVacatureVoorWie.tsx`
- Bullet huidig: "Junior, medior en senior, niet alleen starters" Voorstel: "Junior, medior en senior"
- Bullet huidig: "Search via netwerk, niet alleen jobboards" Voorstel: "Search via netwerk, ook buiten jobboards"
- Bullet huidig: "Kandidaten die wij zelf hebben gesproken" Voorstel: "Kandidaten die we zelf hebben gesproken"
- Overige tekst: ongewijzigd, past al. (M2, M4)

**11.5 Rollen** · `LegalCounselVacatureRollen.tsx`
- Kaart 1 huidig: "... Minder hiërarchie, meer trade-offs — en een titel die vaker legal counsel heet dan bedrijfsjurist." Voorstel: "... Minder hiërarchie, meer trade-offs, en een titel die vaker legal counsel heet dan bedrijfsjurist." (M1)
- Kaart 3 huidig: "Die vakken matchen wij alleen als de opdracht dat écht vraagt ..." Voorstel: "Die vakken matchen we alleen als de opdracht dat vraagt ..." (M2, M3)
- Overige kaarten: ongewijzigd.

**11.6 Waarom** · `LegalCounselVacatureWaarom.tsx`
- Zelfde wijzigingen als 10.7: alinea 1 en 2, reden 001, reden 003. Reden 002 en 004: ongewijzigd, passen al.

**11.7 FAQ** · `LegalCounselVacatureFAQ.tsx`
- Q1 "Wat is een legal counsel vacature via een recruiter?" huidig: "... en we brengen alleen rollen ter sprake die daarbij passen — openstaand of via stille search." Voorstel: "... en we bespreken alleen rollen die daarbij passen, openstaand of via stille search." (M1)
- Q2 "Wat is het verschil tussen legal counsel en bedrijfsjurist?" huidig: "... Wij matchen beide, maar houden de profielen uit elkaar." Voorstel: "... We matchen beide, maar houden de profielen uit elkaar." (M2)
- Q3 "Kost een kennismaking iets?" huidig: "... Wij worden betaald door opdrachtgevers ..." Voorstel: "... We worden betaald door opdrachtgevers ..." (M2)
- Q4 "Werken jullie landelijk?", Q5 "Wat is het verschil tussen een open en een stille search?" (aanpassen: "— bijvoorbeeld" wordt ", bijvoorbeeld"), Q6 "Is deze pagina ook voor stagiaires?": ongewijzigd op de genoemde punten, passen al. (M1)

**11.8 Afsluitende CTA** · `LegalCounselVacatureCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Vrijblijvend en vertrouwelijk — of je nu een legal counsel vacature zoekt, of als opdrachtgever een legal counsel wilt werven."
- Voorstel: H2 "Een gesprek kost niets." en "Vrijblijvend en vertrouwelijk, voor wie een legal counsel vacature zoekt en voor opdrachtgevers die een legal counsel willen werven."
- Kaart Kandidaten: "Wij benaderen" wordt "We benaderen". Knop "Plan kennismaking" wordt "Plan een kennismaking". (M2, M4, M5)

---

## 12. Compliance officer vacature `/compliance-officer-vacature`

SEO: zoekwoorden "compliance officer vacature" en "vacature compliance officer" blijven in H1 en eerste alinea. Links blijven (zelfde set als pagina 10, plus `/recruitment/compliance-officer`).

**12.1 Hero: alinea** · `ComplianceOfficerVacatureHero.tsx`
- Huidig: "Op zoek naar een compliance officer vacature — of een vacature compliance officer die niet op een jobboard staat? Legal Talents matcht compliance professionals discreet met rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk, en alleen een voorstel na jouw toestemming. Kennismaking is kosteloos."
- Voorstel: "Voor wie een compliance officer vacature zoekt, of een vacature compliance officer die niet op een jobboard staat. Legal Talents matcht compliance professionals discreet met rollen die vaak niet op Indeed of LinkedIn staan. Vertrouwelijk, landelijk en alleen een voorstel met jouw toestemming. Kennismaking is kosteloos."
- Waarom: Zelfde als 10.2.

**12.2 Werkwijze** · `src/app/compliance-officer-vacature/page.tsx`
- 001 huidig: "... Geen cv-intake-machinerie — we willen jou begrijpen voordat we over een compliance officer vacature praten." Voorstel: "... We willen je begrijpen voordat we over een compliance officer vacature praten."
- 002 huidig: "... brengen we relevante compliance-rollen ter sprake — openstaand of via stille search. ..." Voorstel: "... bespreken we relevante compliance-rollen, openstaand of via stille search. ..."
- 003 huidig: "Wij stellen je alleen voor na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, welke scope de rol heeft, en hoe de cultuur voelt. Jij beslist of we doorzetten." Voorstel: "We stellen je alleen voor met jouw toestemming. Vooraf vertellen we wat de opdrachtgever zoekt, welke scope de rol heeft en hoe de cultuur is. Dat weten we omdat we er op locatie zijn geweest. Jij beslist of we doorzetten."
- 004: ongewijzigd.

**12.3 Probleem** · `ComplianceOfficerVacatureProbleem.tsx`
- Kaart 001 huidig: "... De titel compliance officer zegt zelden welk werk je echt doet ..." Voorstel: "... De titel compliance officer zegt zelden welk werk je doet ..." (M3)
- Kaart 003 huidig: "... Wij toetsen eerst ... en introduceren je alleen na expliciete toestemming." Voorstel: "... We toetsen eerst ... en stellen je alleen voor met jouw toestemming." (M2)
- Kaart 002: ongewijzigd, past al.

**12.4 Voor wie, Rollen** · `ComplianceOfficerVacatureVoorWie.tsx`, `ComplianceOfficerVacatureRollen.tsx`
- Bullet huidig: "Search via netwerk, niet alleen jobboards" Voorstel: "Search via netwerk, ook buiten jobboards". Bullet "Kandidaten die wij zelf hebben gesproken" wordt "Kandidaten die we zelf hebben gesproken". (M2, M4)
- "Wij begeleiden" in kop en intro van Rollen wordt "we begeleiden" (M2). Overige tekst: ongewijzigd, past al.

**12.5 Waarom** · `ComplianceOfficerVacatureWaarom.tsx`
- Zelfde wijzigingen als 10.7: reden 001 (M1, M2), alinea 1 en 2 ("serieuze intake" en "fabricagecijfers"). Redenen 002, 003 en 004: ongewijzigd, passen al (ook de zin "We stellen je alleen voor als jij ja zegt").

**12.6 FAQ** · `ComplianceOfficerVacatureFAQ.tsx`
- Q "Kost het mij iets als kandidaat?" huidig: "... Wij worden betaald door opdrachtgevers ..." Voorstel: "... We worden betaald door opdrachtgevers ..." (M2)
- Q "Waar staan jullie compliance vacatures?" huidig: "... dat bespreken we in de kennismaking. Wij werken ..." Voorstel: "... dat bespreken we in de kennismaking. We werken ..." (M2)
- Overige vragen ("Wat doet een compliance officer?", opleiding, junior, eerste/tweede lijn, discretie): ongewijzigd, passen al.

**12.7 Afsluitende CTA** · `ComplianceOfficerVacatureCTA.tsx`
- Huidig: H2 "Klaar voor een gesprek?" en "Vrijblijvend en vertrouwelijk — of je nu een compliance officer vacature zoekt, of als opdrachtgever een compliance officer wilt werven."
- Voorstel: H2 "Een gesprek kost niets." en "Vrijblijvend en vertrouwelijk, voor wie een compliance officer vacature zoekt en voor opdrachtgevers die een compliance officer willen werven."
- Kaart Kandidaten: "Wij benaderen" wordt "We benaderen". Opdrachtgeversblok, huidig: "... Vertel daar welk profiel, welke sector en welk tempo — of plan direct een gesprek." Voorstel: "... Vertel daar welk profiel, welke sector en welk tempo, of plan direct een gesprek." Kop "Zoek je zelf een compliance officer?" blijft: het is een wegwijzer. (M1, M2, M4)

---

## 13. Advocaat recruitment `/recruitment/advocaat`

SEO: zoekwoord "werving van advocaten" staat in H1 ("Werving van advocaten.") en de eerste alinea begint er in het voorstel mee. Links blijven: `/contact`, `/recruitment/legal-engineer` (anker "legal engineers"), `/voor-opdrachtgevers`, `/algemene-voorwaarden`.

**13.1 Hero: H1 en knoppen** · `src/components/landing/AdvocaatHero.tsx`
- Huidig: H1 "Werving van advocaten.", knoppen "Plan een intake →" en "Onze aanpak"
- Ongewijzigd: past al.

**13.2 Hero: alinea** · `AdvocaatHero.tsx`
- Huidig: "Specialistisch recruitment voor de advocatuur. Van advocaat-stagiair tot partner-niveau, in alle rechtsgebieden. Persoonlijk netwerk in plaats van database, no cure no pay. Wij bereiken maandelijks 40.000 juristen."
- Voorstel: "Werving van advocaten, van advocaat-stagiair tot partner, in alle rechtsgebieden. We komen voor de intake bij het kantoor langs en stellen alleen kandidaten voor die we zelf hebben gesproken. No cure, no pay."
- Waarom: De 40.000 weg (beslispunt A), intake op locatie en eigen gesprekken erin. "Persoonlijk netwerk in plaats van database" staat al op pagina's 8 en 9. Zoekwoord staat in de eerste zin.

**13.3 Werkwijze: vier stappen** · `src/app/recruitment/advocaat/page.tsx`
- 001 huidig: "Bij voorkeur op kantoor — om jullie cultuur, dossiers en samenstelling van het team écht te leren kennen. Hoe ziet de ideale collega eruit, zowel vakinhoudelijk als cultureel?" Voorstel: "Bij voorkeur op kantoor, zodat we jullie cultuur, dossiers en teamsamenstelling zelf zien. We bespreken hoe de ideale collega eruitziet, vakinhoudelijk en cultureel."
- 002 huidig: "Geen massa-outreach. Wij benaderen advocaten één-op-één — vaak passief beschikbaar talent dat niet reageert op vacaturesites. Discreet en vertrouwelijk, ook richting hun huidige kantoor." Voorstel: "Geen massa-outreach. We benaderen advocaten één-op-één, vaak talent dat niet actief zoekt en niet reageert op vacaturesites. Discreet en vertrouwelijk, ook richting hun huidige kantoor."
- 003 huidig: "Alleen kandidaten die wij zelf gesproken hebben. Bij elke voordracht een onderbouwing: vakinhoudelijke match, cultuurfit, motivatie voor overstap, aandachtspunten." Voorstel: "Alleen kandidaten die we zelf hebben gesproken. Bij elke voordracht leggen we uit hoe de kandidaat vakinhoudelijk past, hoe het zit met de cultuurfit, waarom die wil overstappen en wat de aandachtspunten zijn."
- 004 huidig: "Van eerste gesprek tot het tekenen van de overeenkomst — en tijdens de eerste maanden. Onboarding, garantieregeling en evaluatie." Voorstel: "We begeleiden van het eerste gesprek tot het tekenen van de overeenkomst en tijdens de eerste maanden: onboarding, evaluatie en, als vooraf afgesproken, de garantieregeling."
- Waarom: Retorische vraag, "écht", streepjes en "wij" eruit. De garantie volgt art. 7 van de voorwaarden (beslispunt D).

**13.4 De markt** · `AdvocaatMarkt.tsx`
- Kop "Een markt waarin kandidaten kiezen.": ongewijzigd, past al.
- Intro huidig: "De juridische arbeidsmarkt is veranderd. Goede advocaten kiezen waar zij willen werken — en kantoren concurreren om hetzelfde talent." Voorstel: "De juridische arbeidsmarkt is veranderd. Goede advocaten kiezen waar ze willen werken en kantoren concurreren om hetzelfde talent." (M1)
- Marktitem 3 huidig: "... is goed talent moeilijk te vinden — en de marktconforme honorering verschuift snel." Voorstel: "... is goed talent moeilijk te vinden, en de marktconforme honorering verschuift snel." (M1)
- Items 1, 2, 4, 5: ongewijzigd, passen al.
- Slotalinea huidig: "Wij brengen deze marktkennis in bij elke opdracht — zodat jullie weten waar jullie staan en wat realistisch is om aan te bieden. Zoekt jullie kantoor juist iemand die recht en technologie combineert? Bekijk onze werving van legal engineers." Voorstel: "We brengen deze marktkennis in bij elke opdracht, zodat jullie weten waar jullie staan en wat realistisch is om aan te bieden. Zoekt jullie kantoor juist iemand die recht en technologie combineert? Bekijk onze werving van legal engineers." Het anker "legal engineers" en de link blijven. (M1, M2)

**13.5 Expertise** · `AdvocaatExpertise.tsx`
- Kop "Werving van advocaten is anders.", kaart 1 "Discretie is uitgangspunt" en kaart 2 "Marktkennis per rechtsgebied": ongewijzigd, passen al.
- Kaart 3 huidig: titel "Cultuur en fit weegt zwaarder", body "In de advocatuur draait succes meer om kantoorcultuur dan om CV. Wij screenen kandidaten op fit met juridisch niveau én met de persoon achter het kantoor." Voorstel: titel "Cultuur weegt zwaarder dan het cv", body "In de advocatuur draait succes meer om kantoorcultuur dan om cv. We screenen kandidaten op juridisch niveau en op hoe ze bij het kantoor passen."
- Waarom: "De persoon achter het kantoor" is onduidelijk.

**13.6 Posities** · `AdvocaatPosities.tsx`
- Kaart Partner-werving huidig: "... Wij begeleiden zowel uitkomende als binnenkomende partners — discreet en met aandacht voor portefeuille-overdracht." Voorstel: "... We begeleiden zowel uitgaande als binnenkomende partners, discreet en met aandacht voor portefeuille-overdracht." (M1, M2)
- Overige kaarten en kop: ongewijzigd, passen al.

**13.7 Resultaat** · `AdvocaatResultaat.tsx`
Dit blok bevat de retentieclaims uit beslispunt E. Het voorstel werkt zonder cijfer. Heb je wel een cijfer, dan komt dat in de plaats van de generieke zin.
- Kaart 1 huidig: titel "Lange retentie", body "Gemiddelde verblijftijd van geplaatste advocaten ruim boven het marktgemiddelde". Voorstel: titel "Intake op locatie", body "We hebben jullie kantoor gezien voordat we kandidaten voorstellen".
- Kaart 2 "Snelle inwerking" en kaart 3 "Discreet proces": ongewijzigd, passen al.
- Alinea 1 huidig: "De waarde van specialistisch recruitment zit niet in volume — maar in fit, duurzaamheid en discretie." Voorstel: "Wij kiezen voor fit, duurzaamheid en discretie boven volume."
- Alinea 2 huidig: "Een match die past geeft langetermijn-rendement: minder turnover, betere teamintegratie, productieve eerste maanden zonder lange inwerktijd. Een mismatch kost het kantoor minimaal 6 maanden productiviteit plus reputatieschade richting cliënten." Voorstel: "Een match die past betekent minder verloop, een beter geïntegreerd team en een productieve start. Een mismatch kost het kantoor maanden aan productiviteit en kan reputatieschade bij cliënten opleveren."
- Alinea 3 huidig: "Wij selecteren minder kandidaten dan generieke bureaus, maar de plaatsingen die wij doen blijven gemiddeld langer staan. Dat is geen toeval — dat is het verschil tussen werven en matchen." Voorstel: "We stellen minder kandidaten voor dan generieke bureaus, omdat we ze eerst zelf spreken. Dat is het verschil tussen werven en matchen."
- Waarom: "Ruim boven het marktgemiddelde", "blijven gemiddeld langer staan" en "minimaal 6 maanden" zijn niet te controleren. "Niet in volume maar in fit" is een "niet X maar Y" (M4).

**13.8 FAQ** · `AdvocaatFAQ.tsx` (`advocaatFaqItems`)
Antwoorden voeden de FAQPage-JSON-LD.
- Q1 "Werven jullie ook partner-niveau?" huidig: "Ja. Partner-werving (lateral moves) is een gevoelig proces dat 100% vertrouwelijk verloopt — vaak zonder dat de huidige werkgever weet van het traject. Wij hebben ervaring met portefeuille-overdracht, due diligence rond clienten en de overgangsbegeleiding die deze trajecten vereisen." Voorstel: "Ja. Partner-werving (lateral moves) is een gevoelig proces dat vertrouwelijk verloopt, vaak zonder dat de huidige werkgever van het traject weet. We begeleiden ook de portefeuille-overdracht en de overgang zelf." Als je een concreet voorbeeld van zo'n traject kunt noemen, mag "ervaring met" terug.
- Q2 huidig: "Hoe omgaan met advocaten die niet actief zoeken?" Voorstel: "Hoe benaderen jullie advocaten die niet actief zoeken?" Antwoord huidig: "... passief beschikbaar — zij overwegen ... Wij benaderen ..." Voorstel: "... passief beschikbaar: ze overwegen een overstap maar reageren niet op vacaturesites. We benaderen deze advocaten gericht, één-op-één, vanuit een persoonlijk netwerk. Dat is waar onze werkwijze het verschil maakt."
- Q3 "Wat is de gemiddelde doorlooptijd?": ongewijzigd, past al (beslispunt C).
- Q4 "Werken jullie ook met kleinere kantoren?" huidig: "Ja. Wij werven voor boutique-kantoren ..." Voorstel: "Ja. We werven voor boutique-kantoren ..." (M2)
- Q5 "Hoe gaan jullie om met exclusiviteit?" huidig: "Wij werken het liefst exclusief — dat geeft ons de ruimte om er echt voor te gaan en de kandidaat-pool optimaal te benutten. Niet-exclusieve opdrachten kunnen wel, maar dan hanteren we soms aangepaste voorwaarden om de inspanning te kunnen waarborgen." Voorstel: "We werken het liefst exclusief. Dan kunnen we de tijd nemen voor intake en gesprekken en hoeven we niet te racen tegen andere bureaus. Niet-exclusieve opdrachten kunnen wel, maar dan hanteren we soms andere voorwaarden."
- Q6 "Kunnen jullie advocaten uit een specifiek kantoor benaderen?" huidig: "... Wel kennen wij de juridische arbeidsmarkt en weten wij welke advocaten waar werken ..." Voorstel: "... Wel kennen we de juridische arbeidsmarkt en weten we welke advocaten waar werken ..." (M2)
- Waarom: "100%", "ervaring met" en "echt" zijn claims zonder bewijs. Q2 was grammaticaal niet af.

**13.9 Afsluitende CTA** · `AdvocaatCTA.tsx`
- Huidig: H2 "Klaar voor een specifiek profiel?" en "Bel voor een vrijblijvende intake. We luisteren, denken mee, en bepalen samen of er een match is voor samenwerking."
- Voorstel: H2 "Een intake kost niets." en "We komen bij jullie langs, luisteren en denken mee. Daarna bepalen we samen of samenwerken zinvol is."
- Waarom: Retorische vraag eruit, omslachtige slotzin ingekort. Knop "Plan een intake →" blijft.

---

## 14. Bedrijfsjurist recruitment `/recruitment/bedrijfsjurist`

SEO: zoekwoord "werving bedrijfsjuristen" staat in H1 ("Werving van bedrijfsjuristen.") en komt in het voorstel ook in de eerste zin. Links blijven (zelfde set als 13).

**14.1 Hero: alinea** · `BedrijfsjuristHero.tsx`
- Huidig: "Specialistisch recruitment voor in-house juridische functies. Van bedrijfsjurist tot head of legal en general counsel. Voor corporates en mid-market die een eigen juridische functie opbouwen of uitbreiden. Wij bereiken maandelijks 40.000 juristen."
- Voorstel: "Werving van bedrijfsjuristen, van bedrijfsjurist tot head of legal en general counsel. Voor corporates en mid-market die een eigen juridische functie opbouwen of uitbreiden. We komen voor de intake bij jullie langs en stellen alleen kandidaten voor die we zelf hebben gesproken."
- Waarom: Zelfde als 13.2.

**14.2 Werkwijze** · `src/app/recruitment/bedrijfsjurist/page.tsx`
- 001 huidig: "Bij voorkeur op kantoor — om jullie organisatie, fase en juridische uitdagingen écht te leren kennen. Welke business-context, welke rol binnen het team, welke groei-ambitie?" Voorstel: "Bij voorkeur op kantoor, zodat we jullie organisatie, fase en juridische uitdagingen zelf zien. We bespreken de business-context, de rol binnen het team en de groei-ambitie."
- 002 huidig: "Wij benaderen zowel in-house juristen die open staan voor een overstap, als advocaten die naar de business-kant willen. Geen vacaturesite, maar persoonlijke één-op-één outreach." Voorstel: "We benaderen in-house juristen die openstaan voor een overstap en advocaten die naar de business-kant willen, persoonlijk en één-op-één. Geen vacaturesite."
- 003 huidig: "Bij elke kandidaat een onderbouwing: vakinhoudelijke fit, business-sensitiviteit, motivatie voor in-house, persoonlijke vergelijking met andere kandidaten in het traject." Voorstel: "Bij elke kandidaat leggen we uit hoe die vakinhoudelijk past, hoe die met de business omgaat, waarom die in-house wil werken en hoe die zich verhoudt tot de andere kandidaten. We stellen alleen kandidaten voor die we zelf hebben gesproken."
- 004 huidig: "Van eerste gesprek tot ondertekening, en tijdens de eerste maanden. Bij in-house posities — vooral bij de eerste jurist — is een goede landing crucial. Wij blijven betrokken." Voorstel: "We begeleiden van het eerste gesprek tot ondertekening en tijdens de eerste maanden. Bij in-house posities, vooral bij de eerste jurist, is een goede landing belangrijk. We blijven betrokken."
- Waarom: Retorische vragen, "écht", streepjes en "crucial" (een Engels woord dat op de verboden lijst staat als "cruciaal") eruit. Stap 003 mist nu de eigen gesprekken.

**14.3 Markt** · `BedrijfsjuristMarkt.tsx`
- Item 1 huidig: "... moet doorgroei, autonomie en work-life-balance bieden — niet primair salaris." Voorstel: "... moet doorgroei, autonomie en work-life-balance bieden, niet primair salaris." (M1)
- Item 5 huidig: "... 12-20 weken — vanwege opzegtermijnen, gezinssituatie van kandidaten en de strategische impact van de keuze." Voorstel: "... 12-20 weken, vanwege opzegtermijnen, de gezinssituatie van kandidaten en de impact van de keuze." (M1; cijfers volgens beslispunt C)
- Slotalinea: "Wij brengen deze marktkennis in bij elke opdracht — zodat ..." wordt "We brengen deze marktkennis in bij elke opdracht, zodat ..." (M1, M2)
- Items 2, 3, 4 en kop: ongewijzigd, passen al.

**14.4 Expertise** · `BedrijfsjuristExpertise.tsx`
- Kaart 1 huidig: "... Algemene recruiters dekken één van beide — wij beide." Voorstel: "... Algemene recruiters dekken één van beide. Wij kennen beide." (M1, M2)
- Kaart 2 huidig: titel "Salarisbenchmarks per industrie", body "Een head of legal bij een tech scale-up verschilt salarismatig fundamenteel van dezelfde functietitel bij een familiebedrijf. Wij brengen actuele benchmarks per industrie en bedrijfsfase mee." Voorstel: titel "Salaris per industrie", body "Een head of legal bij een tech scale-up verdient anders dan dezelfde functie bij een familiebedrijf. In de intake bespreken we wat marktconform is voor jullie industrie en bedrijfsfase."
- Kaart 3 huidig: "... Wij screenen op zelfstandigheid, business-affinity en communicatieve kracht — niet alleen op vakinhoud." Voorstel: "... We screenen op zelfstandigheid, business-affinity en communicatieve kracht, naast vakinhoud." (M1, M2, M4)
- Waarom: "Actuele benchmarks" suggereert een databron die nergens wordt genoemd. De intake is controleerbaar. De salarisvraag in de FAQ vraagt hetzelfde (zie 14.6).

**14.5 Resultaat** · `BedrijfsjuristResultaat.tsx`
- Kop huidig: "Wat jullie krijgen — verder dan een CV." Voorstel: "Wat jullie krijgen. Meer dan een cv."
- Kaart 1 "Marktkennis" huidig: "Actuele salarisbenchmarks per industrie en bedrijfsfase" Voorstel: "Salaris en niveau per industrie en bedrijfsfase, besproken in de intake"
- Kaart 2 "Business-fit": ongewijzigd, past al ("niet alleen vakinhoud" wordt "naast vakinhoud", M4).
- Kaart 3 huidig: titel "Lange retentie", body "Match die past geeft jaren rendement in plaats van maanden". Voorstel: titel "Een match voor langer", body "We kijken verder dan de eerste maanden: past iemand over drie jaar nog bij het team?"
- Alinea 1 huidig: "Een verkeerde bedrijfsjurist plaatsen kost meer dan recruitment-kosten. Het kost minimaal 6 maanden productie, juridische risico's die niet gesignaleerd worden, en vertrouwensschade naar interne stakeholders." Voorstel: "Een verkeerde bedrijfsjurist kost meer dan de recruitmentkosten: maanden aan productie, juridische risico's die niet gesignaleerd worden en vertrouwensschade bij interne stakeholders."
- Alinea 2 huidig: "Wij plaatsen minder kandidaten dan generieke bureaus, maar de plaatsingen die wij doen blijven langer staan. Wij selecteren niet op CV-kwantiteit maar op business-fit, zelfstandigheid en groei-potentieel." Voorstel: "We stellen minder kandidaten voor dan generieke bureaus, omdat we selecteren op business-fit, zelfstandigheid en groeipotentieel in plaats van op het aantal cv's."
- Alinea 3 huidig: "... brengen wij bovendien marktkennis mee: realistische salarissen, wat haalbaar is qua niveau, welke kanttekeningen er zitten aan bepaalde profielen." Voorstel: "... brengen we marktkennis mee: realistische salarissen, wat haalbaar is qua niveau en welke kanttekeningen er zitten aan bepaalde profielen." (M2)
- Waarom: Zelfde als 13.7 (beslispunt E).

**14.6 FAQ: salarisvraag** · `BedrijfsjuristFAQ.tsx`
- Huidig: "Hoeveel verdient een bedrijfsjurist gemiddeld?" met antwoord "Sterk afhankelijk van ervaring, industrie en regio. Een medior bedrijfsjurist (2-5 jaar) in NL verdient gemiddeld tussen €65k en €95k. Senior en head of legal posities gaan vanaf €95k tot ruim €150k. General counsel in grote organisaties: €150k en hoger met bonus. Bij de intake brengen we benchmarks die specifiek zijn voor jullie sector en grootte."
- Voorstel (twee opties, kies er één):
  - Optie A, met bron: houd de bedragen en voeg toe "Indicatie in bruto jaarsalaris, op basis van [bron en jaar]." en vervang de laatste zin door "In de intake bespreken we wat marktconform is voor jullie sector en grootte."
  - Optie B, zonder bedragen: "Dat hangt af van ervaring, sector, regio en hoe zwaar de rol is. In de intake bespreken we wat marktconform is voor jullie sector en grootte, op basis van recente trajecten."
- Waarom: De bedragen zijn niet te controleren, en `/bedrijfsjurist-vacature` zegt juist dat generieke bedragen op een landingspagina misleiden. Kies één lijn voor beide pagina's.
- Overige FAQ-antwoorden van deze pagina: ongewijzigd op de patronen M1 en M2 (voorbeeld: "Wij delen jullie bedrijfsnaam ..." wordt "We delen jullie bedrijfsnaam ...").

**14.7 Afsluitende CTA** · `BedrijfsjuristCTA.tsx`
- Huidig: H2 "Klaar voor een specifiek profiel?" en "Vrijblijvende intake voor de juiste in-house jurist. We luisteren, denken mee, en delen marktkennis."
- Voorstel: H2 "Een intake kost niets." en "We komen bij jullie langs, luisteren en delen marktkennis. De intake is vrijblijvend."
- Waarom: Zelfde als 13.9.

---

## 15. Compliance officer recruitment `/recruitment/compliance-officer`

SEO: zoekwoord "werving compliance officers" staat in H1 ("Werving van compliance officers.") en in het voorstel ook in de eerste zin. Links blijven (zelfde set als 13).

**15.1 Hero: alinea** · `ComplianceHero.tsx`
- Huidig: "Specialistische werving voor de regulated markets. Compliance officers, privacy officers, DPO's en AML-specialisten — voor banken, fintech, IT, healthcare en asset managers. Wij bereiken maandelijks 40.000 juristen."
- Voorstel: "Werving van compliance officers, privacy officers, DPO's en AML-specialisten voor banken, fintech, IT, healthcare en asset managers. We komen voor de intake bij jullie langs en stellen alleen kandidaten voor die we zelf hebben gesproken."
- Waarom: Zelfde als 13.2.

**15.2 Werkwijze** · `src/app/recruitment/compliance-officer/page.tsx`
- 001 huidig: "Bij voorkeur op kantoor — om jullie sector, regulatory exposure en governance-structuur écht te leren kennen. Welke toezichthouder, welke meldingsplicht, welke board-dynamiek?" Voorstel: "Bij voorkeur op kantoor, zodat we jullie sector, regulatory exposure en governance-structuur zelf zien. We bespreken welke toezichthouder, welke meldingsplicht en welke board-dynamiek erbij horen."
- 002 huidig: "Wij benaderen compliance-specialisten één-op-één — vrijwel altijd passief beschikbaar talent. Vaak vanuit een Big Four-achtergrond, een toezichthouder of een vergelijkbare regulated organisatie." Voorstel: "We benaderen compliance-specialisten één-op-één, vrijwel altijd talent dat niet actief zoekt. Vaak met een Big Four-achtergrond, bij een toezichthouder of bij een vergelijkbare regulated organisatie."
- 003 huidig: "Bij elke kandidaat een onderbouwing: vakinhoudelijke fit met jullie sector, ervaring met relevante toezichthouder, beoordeling van seniority versus de complexiteit van jullie organisatie." Voorstel: "Bij elke kandidaat leggen we uit hoe die vakinhoudelijk past bij jullie sector, welke ervaring die heeft met de relevante toezichthouder en hoe senior die is ten opzichte van de complexiteit van jullie organisatie. We stellen alleen kandidaten voor die we zelf hebben gesproken."
- 004 huidig: "Compliance-rollen zijn vaak onder tijdsdruk in te vullen (toezichthouder-deadlines, audit-bevindingen). Wij blijven betrokken tot indiensttreding en tijdens de eerste maanden." Voorstel: "Compliance-rollen zijn vaak onder tijdsdruk in te vullen (toezichthouder-deadlines, audit-bevindingen). We blijven betrokken tot indiensttreding en tijdens de eerste maanden."
- Waarom: Retorische vragen, "écht", streepjes en "wij" eruit. Stap 003 mist nu de eigen gesprekken.

**15.3 Markt: vijf marktitems** · `ComplianceMarkt.tsx`
Let op: de items bevatten getallen en wettelijke uitspraken die ik niet kan controleren. Bij een juridisch publiek valt dat op. Ik stel zachtere formuleringen voor. Controleer de ingangsdata zelf.
- Item 1 huidig: "NIS2 en DORA hebben honderden nieuwe rollen gecreëerd. Sinds 2024 zijn duizenden organisaties wettelijk verplicht om information security en operational resilience-rollen in te vullen. De markt heeft die capaciteit niet snel kunnen opbouwen — wat resulteert in stijgende salarissen en hoge mobiliteit van specialisten." Voorstel: "NIS2 en DORA hebben nieuwe rollen gecreëerd. Veel organisaties moeten information security- en operational resilience-rollen invullen, en de markt heeft die capaciteit niet snel kunnen opbouwen. Dat drijft salarissen op en maakt specialisten mobiel."
- Waarom: "Honderden" en "duizenden" zijn niet te onderbouwen. "Sinds 2024" klopt niet voor beide regelingen: DORA is van toepassing sinds 17 januari 2025 en de Nederlandse invoering van NIS2 loopt apart. Controleer dit voor je het zo laat staan.
- Item 2 huidig: "... Voor mid-market organisaties is een ervaren DPO vinden vaak een traject van 3-6 maanden." Voorstel: "... Voor mid-market organisaties is een ervaren DPO vinden vaak een traject van maanden." (of houd 3-6 als dit uit eigen trajecten komt)
- Item 4 huidig: "MLRO's zijn structureel onderbetaald. Wettelijke verplichting plus persoonlijke aansprakelijkheid (MLRO's hebben individuele meldplicht) maakt deze rol risicovoller dan veel organisaties willen erkennen. Goede MLRO's stappen makkelijk over voor 15-25% salarisverhoging." Voorstel: "MLRO's dragen een zware verantwoordelijkheid. Wettelijke verplichting en persoonlijke aansprakelijkheid maken deze rol risicovoller dan veel organisaties willen erkennen. Goede MLRO's stappen over voor een duidelijk beter pakket." Als 15-25% uit eigen trajecten komt, mag het cijfer terug met die bron. De tussenzin over een "individuele meldplicht" heb ik laten vallen, omdat ik de juridische juistheid niet kan nagaan.
- Waarom: "Structureel onderbetaald" en "15-25%" zijn claims zonder bron.
- Items 3 en 5: ongewijzigd, passen al.
- Slotalinea: "Wij brengen deze marktkennis in bij elke opdracht — zodat ..." wordt "We brengen deze marktkennis in bij elke opdracht, zodat ..." (M1, M2)

**15.4 Expertise** · `ComplianceExpertise.tsx`
- Kaart 2 huidig: "... werkt al voor de schaarse aantal kantoren die deze rollen invullen." Voorstel: "... werkt al bij een van de weinige organisaties die deze rollen invullen."
- Kaart 3 huidig: "... Dat geeft sterke onderhandelingspositie aan kandidaten en vraagt om snelheid en discretie van opdrachtgevers." Voorstel: "... Dat geeft kandidaten een sterke onderhandelingspositie en vraagt om snelheid en discretie van opdrachtgevers." 
- Kaart 1 en kop: ongewijzigd, passen al.
- Waarom: Kaart 2 bevat een taalfout ("de schaarse aantal").

**15.5 Resultaat** · `ComplianceResultaat.tsx`
- Alinea 1 huidig: "... een AML-officer die geen ervaring heeft met crypto-payments — het kost niet alleen tijd maar ook reputatie richting toezichthouders." Voorstel: "... een AML-officer die geen ervaring heeft met crypto-payments: het kost tijd en reputatie bij toezichthouders." (M1, M4)
- Alinea 2 huidig: "Wij plaatsen alleen kandidaten waarvan wij hebben gecontroleerd dat de sectorale kennis klopt. Geen 'compliance is compliance' — wel specifieke ervaring met jullie regulatory framework." Voorstel: "We stellen alleen kandidaten voor van wie we hebben gecontroleerd dat de sectorkennis klopt. Dus geen 'compliance is compliance', maar specifieke ervaring met jullie regulatory framework."
- Kaarten Sectorfit, Snelheid, Discretie: ongewijzigd, passen al.

**15.6 FAQ: salarisvraag** · `ComplianceFAQ.tsx`
- Huidig: "Wat verdienen compliance officers gemiddeld?" met bedragen van €65k tot ruim €170k.
- Voorstel: zelfde twee opties als 14.6. Optie B: "Dat hangt af van sector, seniority en de zwaarte van de rol. In de intake bespreken we wat marktconform is voor jullie sector en grootte, op basis van recente trajecten."
- Waarom: Zelfde als 14.6.
- Overige antwoorden: ongewijzigd op M1 en M2. De vraag "Hoe lang duurt een gemiddeld traject?" (8 tot 14 weken, MLRO's 12 tot 20) blijft staan (beslispunt C).

**15.7 Afsluitende CTA** · `ComplianceCTA.tsx`
- Huidig: H2 "Klaar voor een specifiek profiel?" en "Vrijblijvende intake voor compliance- of privacy-specialisten. Wij delen sectorkennis en denken mee over het profiel."
- Voorstel: H2 "Een intake kost niets." en "We komen bij jullie langs en denken mee over het profiel. We delen sectorkennis en de intake is vrijblijvend."
- Waarom: Zelfde als 13.9.

---

## 16. General counsel recruitment `/recruitment/general-counsel`

SEO: zoekwoord "general counsel werving" staat in H1 ("Werving van general counsel.") en eerste alinea. Links blijven: `/contact`, `/scale-ups` (anker "scale-ups"), `/recruitment/legal-counsel` (anker "legal counsel"), `/voor-opdrachtgevers` ("Lees hoe wij werken →").
Deze pagina is al sterk van toon. Ik laat dus het grootste deel staan.

**16.1 Hero: alinea** · `GeneralCounselHero.tsx`
- Huidig: "Een general counsel is meer dan de hoogste jurist in de organisatie. Het is de persoon die juridische risico's vertaalt naar zakelijke beslissingen, die de directie adviseert bij overnames, financieringsrondes en geschillen, en die het legal-team opbouwt en aanstuurt. Het is een hire die je niet vaak doet en niet snel terugdraait. Wij vinden general counsels die inhoudelijk sterk zijn én op directieniveau meebewegen."
- Voorstel: "Een general counsel is meer dan de hoogste jurist in de organisatie. Het is de persoon die juridische risico's vertaalt naar zakelijke beslissingen, die de directie adviseert bij overnames, financieringsrondes en geschillen, en die het legal-team opbouwt en aanstuurt. Het is een hire die jullie niet vaak doen en niet snel terugdraaien. We vinden general counsels die inhoudelijk sterk zijn en op directieniveau meebewegen."
- Waarom: Alleen "je" naar "jullie" (M5), "wij" naar "we" (M2) en "én" eruit. De rest is concreet en blijft.

**16.2 Rol** · `GeneralCounselRol.tsx`
- Kop huidig: "Wat een general counsel doet — en waarom de rol zo lastig in te vullen is" Voorstel: "Wat een general counsel doet, en waarom de rol zo lastig in te vullen is" (M1)
- Alinea 2 huidig: "... Een vacature uitzetten levert ze niet op — gerichte, persoonlijke benadering wel." Voorstel: "... Een vacature uitzetten levert ze niet op. Gerichte, persoonlijke benadering wel." (M1)
- Alinea 1: ongewijzigd, past al.

**16.3 Organisaties** · `GeneralCounselOrganisaties.tsx`
- Alinea 1 huidig: "... die hun eerste juridisch eindverantwoordelijke aannemen, én voor corporates en mid-market bedrijven ..." Voorstel: "... die hun eerste juridisch eindverantwoordelijke aannemen, en voor corporates en mid-market bedrijven ..."
- Kop en alinea 2: ongewijzigd, passen al. Het anker "scale-ups" en de link blijven.

**16.4 Het moment** · `GeneralCounselMoment.tsx`
- Kop huidig: "Wanneer is het moment voor een general counsel?" Voorstel: "Het moment voor een general counsel."
- Slotvraag huidig: "Twijfel je of je een general counsel nodig hebt of (nog) een legal counsel volstaat? We denken graag mee — die afweging maken we vaker." Voorstel: "Twijfelen jullie of een general counsel nodig is, of dat (nog) een legal counsel volstaat? We denken graag mee. Die afweging maken we vaker." Het anker "legal counsel" en de link blijven.
- Lijst met vier signalen: ongewijzigd, past al.
- Waarom: Retorische kopvraag eruit, "je" naar "jullie" (M5), streepje eruit (M1).

**16.5 Aanpak** · `GeneralCounselAanpak.tsx`
- Alinea 1 huidig: "Op dit niveau werkt massa-werving niet. We benaderen kandidaten één-op-één via ons netwerk — ervaren juristen, bedrijfsjuristen en advocaten die toe zijn aan eindverantwoordelijkheid of de overstap naar een nieuwe organisatie overwegen. We screenen niet alleen op juridische kwaliteit, maar op of iemand past bij jullie fase, cultuur en directie."
- Voorstel: "We beginnen met een intake bij jullie op locatie. Op dit niveau werkt massa-werving niet: we benaderen kandidaten één-op-één via ons netwerk, ervaren juristen, bedrijfsjuristen en advocaten die toe zijn aan eindverantwoordelijkheid of de overstap naar een nieuwe organisatie overwegen. We screenen op juridische kwaliteit en op de vraag of iemand past bij jullie fase, cultuur en directie."
- Alinea 2 huidig: "... Discreet, want op dit niveau is vertrouwelijkheid geen optie maar uitgangspunt." Voorstel: "... Discreet, want op dit niveau is vertrouwelijkheid het uitgangspunt." (M4)
- Waarom: De intake op locatie ontbrak op deze pagina. "Niet alleen X, maar Y" en "geen optie maar uitgangspunt" eruit.

**16.6 FAQ** · `GeneralCounselFAQ.tsx`
- Q "Wat is het verschil tussen een general counsel en een legal counsel?" huidig: "... directieniveau — strategie, governance en aansturing van het legal-team." Voorstel: "... directieniveau: strategie, governance en aansturing van het legal-team." (M1). Rest ongewijzigd.
- Overige vragen: ongewijzigd, passen al.

---

## 17. Legal counsel recruitment `/recruitment/legal-counsel`

SEO: zoekwoord "legal counsel werving" staat in H1 ("Werving van legal counsel.") en eerste alinea. Links blijven: `/contact`, `/recruitment/general-counsel` (anker "general counsel"), `/recruitment/legal-engineer` (anker "legal engineers"), `/legal-counsel-vacature` (anker "legal counsel vacature"), `/scale-ups` (anker "scale-ups"), `/voor-opdrachtgevers`.

**17.1 Hero: alinea** · `LegalCounselHero.tsx`
- Huidig: "De legal counsel is de jurist die het werk doet. Contracten opstellen en onderhandelen, de business adviseren, compliance bewaken, geschillen begeleiden — de dagelijkse juridische praktijk die een organisatie draaiende houdt. Het is vaak de eerste vaste juridische hire, of de uitbreiding van een groeiend team. Wij vinden legal counsels die inhoudelijk sterk zijn en zelfstandig kunnen werken in de ..."
- Voorstel: zelfde tekst met twee wijzigingen: "geschillen begeleiden. Dat is de dagelijkse juridische praktijk die een organisatie draaiende houdt." en "We vinden legal counsels die ...".
- Waarom: M1 en M2. De rest (concreet, korte zinnen) blijft.

**17.2 Rol** · `LegalCounselRol.tsx`
- Huidig: "... zelfstandigheid en pragmatisme net zo belangrijk zijn als juridische kennis — de business wil oplossingen, geen lange memo's." Voorstel: "... zelfstandigheid en pragmatisme net zo belangrijk zijn als juridische kennis. De business wil oplossingen, geen lange memo's." (M1)
- Verwijzing naar legal engineers ("Ligt de nadruk bij jullie meer op automatisering ...? Bekijk dan onze werving van legal engineers."): ongewijzigd, past al. Anker en link blijven.

**17.3 Organisaties** · `LegalCounselOrganisaties.tsx`
- Ongewijzigd: past al. Het anker "scale-ups" en de link blijven.

**17.4 Aanpak** · `LegalCounselAanpak.tsx`
- Huidig: "Gerichte, persoonlijke search via ons netwerk van bedrijfsjuristen en advocaten die de overstap naar (of binnen) een in-house rol overwegen. We spreken elke kandidaat zelf voordat we voordragen, en leveren een onderbouwde shortlist in plaats van een stapel cv's. Bij elke voordracht: wat brengt deze persoon mee, waarom past het inhoudelijk én cultureel, en waar moet je op letten. Begeleiding tot en met de eerste werkdag, en een vervangingsgarantie op aanvraag. No cure, no pay."
- Voorstel: "We beginnen met een intake bij jullie op locatie. Daarna zoeken we gericht en persoonlijk via ons netwerk van bedrijfsjuristen en advocaten die de overstap naar (of binnen) een in-house rol overwegen. We spreken elke kandidaat zelf voordat we voordragen en leveren een onderbouwde shortlist in plaats van een stapel cv's. Bij elke voordracht leggen we uit wat de persoon meebrengt, waarom het inhoudelijk en cultureel past en waar jullie op moeten letten. We begeleiden tot en met de eerste werkdag, en er is een vervangingsgarantie als die vooraf schriftelijk is afgesproken. No cure, no pay."
- Waarom: Intake op locatie ontbrak. "Je" naar "jullie" (M5), garantie volgens art. 7 (D), dubbele punt-opbouw eruit. In de bron staat bovendien een rij losse spaties midden in de tekst. Die ruim ik op bij uitvoering.
- Link "legal counsel vacature" (kandidatenverwijzing eronder): ongewijzigd.

**17.5 Uitdaging** · `LegalCounselUitdaging.tsx`
- Huidig: "... en kiezen een volgende stap zorgvuldig — op inhoud, team en doorgroeimogelijkheden, niet op een vacaturetekst. Bovendien is het profiel breder dan het lijkt: je zoekt iemand die juridisch onderlegd is, maar ook commercieel meedenkt en in de taal van de business kan schakelen. Die combinatie vind je niet met een advertentie. ..."
- Voorstel: "... en kiezen een volgende stap zorgvuldig, op inhoud, team en doorgroeimogelijkheden en niet op een vacaturetekst. Bovendien is het profiel breder dan het lijkt: jullie zoeken iemand die juridisch onderlegd is, commercieel meedenkt en in de taal van de business kan schakelen. Die combinatie vinden jullie niet met een advertentie. ..."
- Waarom: "Je" tegen een werkgever (M5), streepje (M1) en "niet alleen ... maar ook" (M4). Kop "Waarom een legal counsel werven lastig is" blijft.

**17.6 FAQ** · `LegalCounselFAQ.tsx`
- Ongewijzigd, passen al. De vragen zijn concreet en het antwoord over bedrijfsjurist-versus-legal counsel is consistent met `/legal-counsel-vacature`.

---

## 18. Legal engineer recruitment `/recruitment/legal-engineer`

SEO: zoekwoord "werving legal engineers" staat in H1 ("Werving van legal engineers.") en komt in het voorstel in de eerste zin. Links blijven: `/contact`, `/vacatures/legal-engineer-amsterdam` (anker "Legal Engineer in Amsterdam"), `/recruitment/legal-counsel` (anker "legal counsels").

**18.1 Hero: alinea** · `LegalEngineerHero.tsx`
- Huidig: "Specialistisch recruitment voor de brug tussen recht en technologie. Van legal engineer tot legal operations lead, in-house en bij advocatenkantoren. No cure no pay. Wij bereiken maandelijks 40.000 juristen."
- Voorstel: "Werving van legal engineers en legal AI-specialisten: de brug tussen recht en technologie. Van legal engineer tot legal operations lead, in-house, bij advocatenkantoren en bij legal tech-bedrijven. We komen voor de intake bij jullie langs en stellen alleen kandidaten voor die we zelf hebben gesproken."
- Waarom: Legal AI is het deel van de boodschap dat deze pagina het meest nodig heeft. De 40.000 vervalt (beslispunt A).

**18.2 Werkwijze** · `src/app/recruitment/legal-engineer/page.tsx`
- 001 huidig: "Bij voorkeur op locatie — om te begrijpen welke tools, processen en teamsamenstelling er al zijn, en waar de behoefte aan legal engineering vandaan komt. Automatisering, contract lifecycle, legal design of tooling?" Voorstel: "Bij voorkeur op locatie, zodat we zien welke tools, processen en teamsamenstelling er al zijn en waar de behoefte aan legal engineering vandaan komt: automatisering, contract lifecycle, legal design of tooling."
- 002 huidig: "Geen massa-outreach. Wij benaderen het zeldzame hybride talent dat vaak niet als 'recruitmentbaar' op vacaturesites staat — juristen met technische affiniteit, developers met juridische interesse, legal ops-specialisten." Voorstel: "Geen massa-outreach. We benaderen hybride talent dat niet op vacaturesites staat: juristen met technische affiniteit, developers met juridische interesse en legal ops-specialisten."
- 003 huidig: "Alleen kandidaten die wij zelf gesproken hebben. Bij elke voordracht een onderbouwing: technische en juridische fit, motivatie voor de overstap, aandachtspunten." Voorstel: "Alleen kandidaten die we zelf hebben gesproken. Bij elke voordracht leggen we uit hoe de kandidaat technisch en juridisch past, waarom die wil overstappen en wat de aandachtspunten zijn."
- 004: zelfde wijziging als 13.3 (004).
- Waarom: "Recruitmentbaar" is jargon. Retorische vraag en streepjes eruit.

**18.3 Markt** · `LegalEngineerMarkt.tsx`
- Intro huidig: "De opkomst van legal tech en AI verandert de juridische sector in hoog tempo. Organisaties die vooroplopen zoeken niet langer alleen juristen, maar mensen die het recht kunnen vertalen naar systemen, tools en processen." Voorstel: "Legal tech en AI veranderen hoe juridisch werk wordt gedaan. Organisaties die daar werk van maken, zoeken mensen die het recht kunnen vertalen naar systemen, tools en processen."
- Item 2 huidig: "Legal tech-adoptie versnelt. AI en automatisering veranderen in hoog tempo wat er mogelijk is, waardoor de vraag naar legal engineers sneller groeit dan het aanbod." Voorstel: "Legal tech-adoptie neemt toe. AI en automatisering veranderen wat er mogelijk is, en er zijn weinig legal engineers om dat werkend te krijgen."
- Item 3 huidig: "... kiezen vaker voor impact, autonomie en vernieuwing dan voor een hoger salaris — werkgevers die dat niet bieden, vallen af." Voorstel: "... kiezen vaker voor impact en autonomie dan voor een hoger salaris. Werkgevers die dat niet bieden, vallen af."
- Item 4 huidig: "... Scherp krijgen wat jullie écht zoeken is de eerste stap naar een goede match." Voorstel: "... Scherp krijgen wat jullie zoeken is de eerste stap naar een goede match."
- Item 5 huidig: "Zichtbaar innovatie-DNA weegt zwaar. Kandidaten kijken kritisch naar hoe serieus een organisatie investeert in legal tech — vage ambities overtuigen niet." Voorstel: "Zichtbare investering in legal tech weegt zwaar. Kandidaten kijken kritisch naar hoe serieus een organisatie daarin investeert. Vage ambities overtuigen niet."
- Item 1: ongewijzigd, past al.
- Slotalinea huidig: "Wij brengen deze marktkennis in bij elke opdracht — zodat jullie weten waar jullie staan en wat realistisch is om aan te bieden. Zo begeleidden wij recent de plaatsing van een Legal Engineer in Amsterdam — een goed voorbeeld van het soort profiel en rol waar wij voor ..." Voorstel: "We brengen deze marktkennis in bij elke opdracht, zodat jullie weten waar jullie staan en wat realistisch is om aan te bieden. Een voorbeeld van het soort rol waarvoor we zoeken is de Legal Engineer in Amsterdam." Het anker "Legal Engineer in Amsterdam" en de link blijven.
- Waarom: "In hoog tempo" staat letterlijk op de verboden lijst, "vernieuwing" en "innovatie-DNA" idem. "Recent de plaatsing begeleidden" klopt niet: de vacature staat open en on hold (beslispunt H).

**18.4 Expertise** · `LegalEngineerExpertise.tsx`
- Kaart 1 huidig: "... Wij herkennen welke juristen dit profiel écht hebben — en welke het alleen op hun CV zetten." Voorstel: "... We herkennen welke juristen dit profiel hebben en welke het alleen op hun cv zetten." (M1, M2, M3)
- Kaarten 2 en 3 en kop: ongewijzigd, passen al.

**18.5 Posities** · `LegalEngineerPosities.tsx`
- Kaart "Legal Technologist / Legal Solutions Architect": ongewijzigd. Alle zes kaarten en de kop: ongewijzigd, passen al. Concreet en passend bij de legal AI-focus.

**18.6 Resultaat** · `LegalEngineerResultaat.tsx`
- Kaart 1 huidig: titel "Lange retentie", body "Gemiddelde verblijftijd van geplaatste legal engineers ruim boven het marktgemiddelde". Voorstel: titel "Intake op locatie", body "We hebben jullie team en tools gezien voordat we kandidaten voorstellen".
- Kaarten 2 en 3: ongewijzigd, passen al.
- Alinea 1 huidig: "De waarde van specialistisch recruitment zit niet in volume — maar in fit tussen de juridische en technische wereld, snelheid van implementatie en discretie." Voorstel: "Wij kiezen voor fit tussen de juridische en technische wereld, snelheid van implementatie en discretie boven volume."
- Alinea 2 huidig: "... Een mismatch kost tijd, budget en draagvlak — vaak met een tool die uiteindelijk niet wordt gebruikt." Voorstel: "... Een mismatch kost tijd, budget en draagvlak, vaak met een tool die uiteindelijk niet wordt gebruikt." (M1)
- Alinea 3 huidig: "Wij selecteren minder kandidaten dan generieke bureaus, maar de plaatsingen die wij doen blijven gemiddeld langer staan — en leveren sneller resultaat op. Dat is geen toeval — dat is het verschil tussen werven en matchen." Voorstel: "We stellen minder kandidaten voor dan generieke bureaus, omdat we ze eerst zelf spreken. Dat is het verschil tussen werven en matchen."
- Waarom: Zelfde als 13.7 (beslispunt E).

**18.7 FAQ** · `LegalEngineerFAQ.tsx`
- Q "Hoe gaan jullie om met exclusiviteit?" huidig: "Wij werken het liefst exclusief — dat geeft ons de ruimte om de beperkte pool van hybride talent optimaal te benutten zonder dat kandidaten via meerdere bureaus tegelijk worden benaderd. ..." Voorstel: "We werken het liefst exclusief. Zo benaderen we de beperkte pool van hybride talent netjes, zonder dat kandidaten via meerdere bureaus tegelijk worden gebeld. ..." Rest ("Niet-exclusieve opdrachten kunnen wel ...") zoals in 13.8 Q5.
- Overige vragen: ongewijzigd, passen al. Dat geldt ook voor "Wat is precies een legal engineer?" en de doorlooptijd (beslispunt C).

**18.8 Afsluitende CTA** · `LegalEngineerCTA.tsx`
- Huidig: H2 "Klaar voor een specifiek profiel?" en "Bel voor een vrijblijvende intake. We luisteren, denken mee, en bepalen samen of er een match is voor samenwerking."
- Voorstel: H2 "Een intake kost niets." en "We komen bij jullie langs, luisteren en denken mee. Daarna bepalen we samen of samenwerken zinvol is."
- Waarom: Zelfde als 13.9.

---

## 19. Scale-ups `/scale-ups`

SEO: zoekwoord "recruitment voor scale-ups" staat in H1 ("Legal recruitment voor startups en scale-ups") en komt in het voorstel ook in de eerste alinea. Links blijven: `/contact`, `/voor-opdrachtgevers` ("Lees hoe wij werken →").

**19.1 Hero: alinea** · `ScaleUpsHero.tsx`
- Huidig: "Een groeiend bedrijf heeft op een gegeven moment een jurist nodig die meegroeit — niet een advocaat die in een kantoorstructuur wil blijven. Wij kennen het verschil, en we kennen de mensen die de overstap naar een scale-up daadwerkelijk willen maken. No cure no pay."
- Voorstel: "Een scale-up heeft op een gegeven moment een jurist nodig die meegroeit, geen advocaat die in een kantoorstructuur wil blijven. We kennen het verschil en we kennen de mensen die de overstap naar een scale-up willen maken. We komen bij jullie langs voor de intake. No cure, no pay."
- Waarom: "Niet een ..."-opbouw en streepje eruit, "daadwerkelijk" is een versterker, en "scale-up" staat nu in de eerste zin.

**19.2 Wanneer eigen jurist** · `ScaleUpsWanneer.tsx`
- Kop huidig: "Wanneer heeft je scale-up een eigen jurist nodig?" Voorstel: "Wanneer heeft een scale-up een eigen jurist nodig?" (M5: de pagina spreekt de organisatie elders met "jullie" aan.)
- Signalen huidig: "Je tekent regelmatig contracten die niemand intern juridisch beoordeelt." / "Een funding-ronde of overname komt eraan en je leunt volledig op externe advocaten." / "Privacy en compliance (AVG, en afhankelijk van je sector ook DORA, NIS2 of AI Act) vragen structureel aandacht." / "Je legal-kosten bij externe kantoren lopen op tot het punt waarop een vaste jurist goedkoper is."
- Signalen voorstel: "Jullie tekenen regelmatig contracten die niemand intern juridisch beoordeelt." / "Een funding-ronde of overname komt eraan en jullie leunen volledig op externe advocaten." / "Privacy en compliance (AVG, en afhankelijk van jullie sector ook DORA, NIS2 of AI Act) vragen structureel aandacht." / "Jullie legal-kosten bij externe kantoren lopen op tot het punt waarop een vaste jurist goedkoper is."
- Lijstintro huidig: "Herkenbare signalen dat je toe bent aan een eerste legal hire:" Voorstel: "Herkenbare signalen dat jullie toe zijn aan een eerste legal hire:"
- Alinea: ongewijzigd, past al ("Dat werkt: tot het niet meer werkt." is precies de toon).

**19.3 Generalist of specialist** · `ScaleUpsGeneralist.tsx`
- Kop huidig: "Generalist of specialist? Je eerste legal hire" Voorstel: "Je eerste legal hire is een generalist."
- Alinea huidig: "De eerste jurist in een scale-up is bijna nooit een specialist. Je zoekt een brede generalist die contracten, arbeidsrecht, privacy en commerciële vraagstukken aankan en die comfortabel is met onzekerheid en tempo. Specialisten — een privacy officer, een M&A-jurist — komen later, als het team groeit en de vraagstukken dieper worden. Wij helpen je bepalen wat je in deze fase echt nodig hebt, in plaats van een te zware (en te dure) hire te plaatsen die zich gaat vervelen."
- Voorstel: "De eerste jurist in een scale-up is bijna nooit een specialist. Jullie zoeken een brede generalist die contracten, arbeidsrecht, privacy en commerciële vraagstukken aankan en die comfortabel is met onzekerheid en tempo. Specialisten, zoals een privacy officer of een M&A-jurist, komen later, als het team groeit en de vraagstukken dieper worden. We helpen bepalen wat jullie in deze fase nodig hebben, zodat jullie geen te zware en te dure hire doen die zich gaat vervelen."
- Waarom: Retorische kopvraag eruit. "Je" naar "jullie" (M5), streepjes (M1), "echt" (M3), "wij" (M2).

**19.4 Zuidas-advocaat** · `ScaleUpsZuidas.tsx`
- Huidig laatste zinnen: "Die mensen vind je niet op vacaturesites; ze zitten passief in een netwerk. Wij benaderen ze één-op-één en beoordelen vooraf of iemand de overstap echt wil maken en bij jullie fase past, zodat je geen plaatsing krijgt die binnen een jaar weer vertrekt."
- Voorstel: "Die mensen vind je niet op vacaturesites. Ze zitten passief in een netwerk. We benaderen ze één-op-één en beoordelen vooraf of iemand de overstap wil maken en bij jullie fase past. Zo verkleinen we de kans op een vroeg vertrek."
- Waarom: "Geen plaatsing die binnen een jaar vertrekt" is een belofte die de voorwaarden niet dekken (beslispunt D). "Echt" en "wij" eruit. Kop en de rest: ongewijzigd, passen al.

**19.5 Posities** · `ScaleUpsPosities.tsx`
- Intro huidig: "Van de eerste generalist tot een volwassen legal-team — wij werven op elk niveau dat bij jullie groeifase past." Voorstel: "Van de eerste generalist tot een volwassen legal-team: we werven op elk niveau dat bij jullie groeifase past." (M1, M2)
- Kaarten: ongewijzigd, passen al.

**19.6 Aanpak** · `ScaleUpsAanpak.tsx`
- Huidig: "Persoonlijke search, geen database-shortcuts. Een onderbouwde shortlist met alleen kandidaten die we zelf hebben gesproken. Begeleiding tot en met de eerste werkdag, en een vervangingsgarantie op aanvraag. No cure, no pay: je betaalt alleen bij een succesvolle ..."
- Voorstel: "Persoonlijke search, geen database-shortcuts. Een onderbouwde shortlist met alleen kandidaten die we zelf hebben gesproken. Begeleiding tot en met de eerste werkdag, en een vervangingsgarantie als die vooraf schriftelijk is afgesproken. No cure, no pay: jullie betalen alleen bij een succesvolle ..."
- Waarom: Garantie volgens art. 7 (D), "je" naar "jullie" (M5).

**19.7 FAQ** · `ScaleUpsFAQ.tsx`
- Ongewijzigd, passen al. Concreet en kort.

**19.8 Afsluitende CTA** · `ScaleUpsCTA.tsx`
- Huidig: H2 "Klaar om je legal-team te bouwen?" en "Een vrijblijvende intake, vertrouwelijk en zonder verplichtingen. We denken mee over wat je in deze fase nodig hebt."
- Voorstel: H2 "Een intake kost niets." en "Vertrouwelijk en zonder verplichtingen. We komen bij jullie langs en denken mee over wat jullie in deze fase nodig hebben."
- Waarom: Retorische vraag eruit en "je" naar "jullie". Knop "Plan een intake →" blijft.

---

## 20. Overige pagina's

**20.1 404-pagina** · `src/app/not-found.tsx`
- Huidig: H1 "Deze pagina bestaat niet." en "De link die je volgde is verbroken of de pagina is verplaatst. Geen zorgen — hieronder vind je waar je waarschijnlijk naar zocht."
- Voorstel: H1 ongewijzigd. Alinea: "De link die je volgde is verbroken of de pagina is verplaatst. Hieronder vind je waar je waarschijnlijk naar zocht."
- Waarom: "Geen zorgen" met streepje is vulling.
- Vier kaarten (Vacatures, Voor opdrachtgevers, Voor kandidaten, Contact) en de regel "Klopt er iets niet? Mail ons via storm@legal-talents.nl": ongewijzigd, passen al.

**20.2 Privacybeleid** · `src/app/privacy/page.tsx`
- Ongewijzigd: past al als juridisch document. Let op: de pagina gebruikt "u", de rest van de site "je" en "jullie". Dat is bij een privacyverklaring gangbaar, maar het is wel een keuze. Zie tegenstrijdigheden.

**20.3 Algemene voorwaarden** · `src/app/algemene-voorwaarden/page.tsx`
- Ongewijzigd: juridisch document. De voorwaarden zijn de bron voor de garantiebeloftes elders (art. 7.1 tot 7.3) en voor de extra kosten (art. 2.4).

---

## Meta titles en descriptions

Limieten: title ~60 tekens, description ~155. `!` achter een aantal betekent boven de limiet.

De site zet achter de meeste titles zelf ` | Legal Talents Recruitment` (28 tekens). Het eigen deel mag dan maximaal 32 tekens zijn. Is het langer, dan knipt `formatDocumentTitle` het af met een `…`. Hieronder staan de titles zoals Google ze te zien krijgt.

### Pagina's

**M1. Fallback (alle pagina's zonder eigen meta)** · `src/app/layout.tsx`
- Title huidig: `Legal Talents Recruitment` (25)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Legal Talents Recruitment verbindt juridische professionals met werkgevers die vooruit willen. Persoonlijke search, no cure no pay." (131)
- Description voorstel: "Legal recruitment voor advocaten, juristen, legal engineers en legal AI-specialisten. Persoonlijk en vertrouwelijk. No cure, no pay." (132)

**M2. Home** · `src/app/page.tsx`
- Title huidig: `Legal Recruitment: bereik 40.000 juristen | Legal Talents` (57)
- Title voorstel: `Legal recruitment voor de lange termijn | Legal Talents` (55)
- Description huidig: "Legal recruitment via persoonlijke search: wij verbinden advocaten en juristen met kantoren en corporates die vooruit willen. No cure, no pay." (142)
- Description voorstel: "Legal recruitment voor advocaten, juristen en legal AI-specialisten. We komen voor de intake langs en stellen alleen kandidaten voor die we zelf spraken." (153)

**M3. Vacatures** · `src/app/vacatures/page.tsx`
- Title huidig: `Juridische vacatures | Legal Talents Recruitment` (48)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Actuele juridische vacatures in de advocatuur en in-house. Vast werk via persoonlijk recruitment, met begeleiding tot en met je eerste werkdag." (143)
- Description voorstel: "Actuele juridische vacatures voor advocaten, juristen en legal engineers. We spreken je eerst en begeleiden je tot en na je eerste werkdag." (139)

**M4. Voor kandidaten** · `src/app/voor-kandidaten/page.tsx`
- Title huidig: `Voor juridisch werknemers | Legal Talents Recruitment` (53)
- Title voorstel: `Nieuwe juridische functie zoeken | Legal Talents Recruitment` (60)
- Description huidig: "Op zoek naar een nieuwe juridische functie? Wij krijgen doorlopend vacatures binnen. Staat er nu niks passends online? Laat je gegevens achter." (143)
- Description voorstel: "Nieuwe juridische functie? We spreken je eerst, bespreken alleen posities die passen en stellen je alleen voor met jouw akkoord. Kosteloos, vertrouwelijk." (154)

**M5. Voor opdrachtgevers** · `src/app/voor-opdrachtgevers/page.tsx`
- Title huidig: `Werving juridisch talent | Legal Talents Recruitment` (52)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Op zoek naar juridisch talent dat blijft? Werving & selectie via persoonlijk netwerk. No cure, no pay. Wij vinden de match die inhoudelijk én cultureel past." (157!)
- Description voorstel: "Werving juridisch talent dat blijft. Intake bij jullie op locatie, alleen kandidaten die we zelf uitgebreid spraken. No cure, no pay." (133)

**M6. Over ons** · `src/app/over-ons/page.tsx`
- Title huidig: `Over Ons | Legal Talents Recruitment` (36)
- Title voorstel: `Over ons | Legal Talents Recruitment` (36)
- Description huidig: "Opgericht door twee rechtenstudenten, nu specialist in legal recruitment voor starters, medior en senior juristen én legal tech. Maak kennis met ons." (149)
- Description voorstel: "Twee rechtenstudenten begonnen Legal Talents. Nu doen we legal recruitment voor juristen, legal engineers en legal AI-specialisten. Maak kennis met ons." (152)

**M7. Contact** · `src/app/contact/page.tsx`
- Title huidig: `Contact | Legal Talents Recruitment` (35)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Plan een vrijblijvende kennismaking met Legal Talents — vertrouwelijk, persoonlijk, op locatie of digitaal. Wij benaderen je huidige werkgever nooit." (149)
- Description voorstel: "Plan een kennismaking met Legal Talents, telefonisch, digitaal of op locatie. Vertrouwelijk: we benaderen je huidige werkgever nooit." (133)

**M8. Blog (overzicht)** · `src/app/blogs/page.tsx`
- Title huidig: `Blog | Legal Talents` (20)
- Title voorstel: `Blog over legal recruitment | Legal Talents` (43)
- Description huidig: "Artikelen over legal recruitment, de advocatuur en in-house carrières. Inzichten van Legal Talents voor juristen en werkgevers die verder willen." (145)
- Description voorstel: "Artikelen over legal recruitment, de advocatuur, in-house carrières en legal tech. Voor juristen en werkgevers." (111)

**M9. Juridisch recruiter** · `src/app/juridisch-recruiter/page.tsx`
- Title huidig: `Juridisch recruiter voor legal professionals | Legal Talents` (60)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Op zoek naar een juridisch recruiter? Legal Talents werft advocaten en juristen voor kantoren en inhouse teams. Specialistisch, landelijk, no cure no pay." (154)
- Description voorstel: "Juridisch recruiter voor kantoren en legal teams. Intake op locatie, elke kandidaat zelf gesproken, begeleiding na de eerste werkdag. No cure, no pay." (150)

**M10. Headhunter advocatuur** · `src/app/headhunter-advocatuur/page.tsx`
- Title huidig: `Headhunter advocatuur | Legal Talents Recruitment` (49)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Headhunter advocatuur voor kantoren en inhouse teams. Legal executive search voor senior juridisch talent — discreet, landelijk, no cure no pay." (144)
- Description voorstel: "Headhunter advocatuur voor kantoren en inhouse teams. Legal executive search voor senior juridisch talent. Discreet en landelijk. No cure, no pay." (146)

**M11. Bedrijfsjurist vacature** · `src/app/bedrijfsjurist-vacature/page.tsx`
- Title huidig: `Bedrijfsjurist vacature | Legal Talents Recruitment` (51)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Op zoek naar een bedrijfsjurist vacature? Legal Talents matcht juristen discreet met inhouse-rollen. Kennismaking kosteloos. Ook voor opdrachtgevers." (149)
- Description voorstel: "Bedrijfsjurist vacature zoeken? We spreken je eerst en stellen je alleen voor met jouw akkoord. Ook voor rollen die niet online staan. Kosteloos." (145)

**M12. Legal counsel vacature** · `src/app/legal-counsel-vacature/page.tsx`
- Title huidig: `Legal counsel vacature | Legal Talents Recruitment` (50)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Op zoek naar een legal counsel vacature? Legal Talents matcht discreet met inhouse-rollen, vaak buiten Indeed en LinkedIn. Kennismaking kosteloos." (146)
- Description voorstel: "Legal counsel vacature zoeken? We spreken je eerst en stellen je alleen voor met jouw akkoord. Ook rollen buiten Indeed en LinkedIn. Kosteloos." (143)

**M13. Compliance officer vacature** · `src/app/compliance-officer-vacature/page.tsx`
- Title huidig: `Compliance officer vacature | Legal Talents Recruitment` (55)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Op zoek naar een compliance officer vacature? Legal Talents matcht je discreet met rollen die vaak niet op Indeed of LinkedIn staan. Kennismaking kosteloos." (156!)
- Description voorstel: "Compliance officer vacature zoeken? We spreken je eerst en stellen je alleen voor met jouw akkoord. Ook rollen buiten Indeed en LinkedIn. Kosteloos." (148)

**M14. Advocaat recruitment** · `src/app/recruitment/advocaat/page.tsx`
- Title huidig: `Werving van advocaten | Legal Talents Recruitment` (49)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Werving van advocaten op alle niveaus — van stagiair tot partner. Specialist in juridische recruitment. Persoonlijk netwerk, no cure no pay." (140)
- Description voorstel: "Werving van advocaten, van stagiair tot partner. Intake op kantoor, alleen kandidaten die we zelf spraken. Persoonlijk netwerk, no cure, no pay." (144)

**M15. Bedrijfsjurist recruitment** · `src/app/recruitment/bedrijfsjurist/page.tsx`
- Title huidig: `Werving bedrijfsjuristen | Legal Talents Recruitment` (52)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Werving van bedrijfsjuristen en in-house counsel. Specialist in juridische recruitment voor corporates en mid-market. Persoonlijk netwerk, no cure no pay." (154)
- Description voorstel: "Werving van bedrijfsjuristen en in-house counsel voor corporates en mid-market. Intake op locatie, alleen kandidaten die we zelf spraken. No cure, no pay." (154)

**M16. Compliance officer recruitment** · `src/app/recruitment/compliance-officer/page.tsx`
- Title huidig: `Werving compliance officers | Legal Talents Recruitment` (55)
- Title voorstel: ongewijzigd, past al
- Description huidig: "No cure, no pay. Werving van compliance officers en AML-specialisten voor financiële instellingen, tech, healthcare en regulated markets." (137)
- Description voorstel: ongewijzigd, past al

**M17. General counsel recruitment** · `src/app/recruitment/general-counsel/page.tsx`
- Title huidig: `General Counsel werving | Legal Talents Recruitment` (51)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Een general counsel werven die juridische strategie én directieverantwoordelijkheid combineert? Persoonlijke search, no cure no pay." (132)
- Description voorstel: "General counsel werving via persoonlijke search. We komen voor de intake langs en stellen alleen kandidaten voor die we zelf spraken. No cure, no pay." (150)

**M18. Legal counsel recruitment** · `src/app/recruitment/legal-counsel/page.tsx`
- Title huidig: `Legal Counsel werving | Legal Talents Recruitment` (49)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Een legal counsel werven voor contracten, advies en compliance? Wij vinden de juiste jurist via persoonlijke search. No cure, no pay." (133)
- Description voorstel: "Legal counsel werving via persoonlijke search, voor contracten, advies en compliance. Alleen kandidaten die we zelf spraken. No cure, no pay." (141)

**M19. Legal engineer recruitment** · `src/app/recruitment/legal-engineer/page.tsx`
- Title huidig: `Werving legal engineers | Legal Talents Recruitment` (51)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Werving van Legal Engineers — de brug tussen recht en technologie. Specialist in juridische recruitment. Persoonlijk netwerk, no cure no pay." (141)
- Description voorstel: "Werving van legal engineers en legal AI-specialisten, de brug tussen recht en technologie. Persoonlijk netwerk. No cure, no pay." (128)

**M20. Scale-ups** · `src/app/scale-ups/page.tsx`
- Title huidig: `Recruitment voor scale-ups | Legal Talents Recruitment` (54)
- Title voorstel: ongewijzigd, past al
- Description huidig: "No cure, no pay. Je eerste jurist of general counsel werven voor je scale-up? Wij vinden talent dat past bij je snelheid en cultuur." (132)
- Description voorstel: "Recruitment voor scale-ups: jullie eerste jurist of general counsel. We toetsen op tempo en cultuur en spreken elke kandidaat zelf. No cure, no pay." (148)

**M21. Privacybeleid** · `src/app/privacy/page.tsx`
- Title huidig: `Privacybeleid | Legal Talents Recruitment` (41)
- Title voorstel: ongewijzigd, past al
- Description huidig: "Hoe Legal Talents Recruitment persoonsgegevens verwerkt onder de AVG: welke gegevens, waarvoor, hoe lang en wat jouw rechten zijn." (130)
- Description voorstel: ongewijzigd, past al

**M22. Algemene voorwaarden** · `src/app/algemene-voorwaarden/page.tsx`
- Title huidig: `Algemene Voorwaarden | Legal Talents Recruitment` (48)
- Title voorstel: `Algemene voorwaarden | Legal Talents Recruitment` (48)
- Description huidig: "De algemene voorwaarden van Legal Talents Recruitment voor werving, selectie en bemiddeling van juridisch talent." (113)
- Description voorstel: ongewijzigd, past al

**M23. 404** · `src/app/not-found.tsx`
- Title huidig: `Pagina niet gevonden | Legal Talents Recruitment` (48)
- Title voorstel: ongewijzigd, past al

Overlange huidige descriptions: Voor opdrachtgevers (157) en Compliance officer vacature (156). Beide zijn in het voorstel ingekort. Bij de vacatures zijn dat de senior-vacature in Eindhoven (161) en de concept-vacature in Den Haag (160). Compliance officer recruitment krijgt geen nieuwe description (137, past al).

### Vacatures (`content/vacatures/*.mdx`, front-matter)

De title van een vacature wordt `metaTitle`, of anders "title — plaats", of anders alleen `title`, en daarna afgekapt op 32 tekens. De drie Eindhoven-vacatures krijgen daardoor nu bijna dezelfde afgekapte title, en `legal-engineer-den-haag` is nog een concept (`status: draft`).

**V. Advocaat Financieel Recht & Ondernemingsrecht (2-4 jaar ervaring)** · `advocaat-financieel-en-ondernemingsrecht-eindhoven`
- Title huidig: `Advocaat Financieel Recht &… | Legal Talents Recruitment` (56)
- metaTitle voorstel: `Medior advocaat financieel recht`, geeft title `Medior advocaat financieel recht | Legal Talents Recruitment` (60)
- metaDescription huidig: "Specialistisch kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 2-4 jaar ervaring. Uitdagende dossiers, korte lijnen, geen hiërarchie." (167!)
- metaDescription voorstel: "Kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 2-4 jaar ervaring. Korte lijnen, geen hiërarchisch gedoe." (139)

**V. Advocaat Financieel Recht & Ondernemingsrecht (4+ jaar ervaring)** · `advocaat-financieel-en-ondernemingsrecht-senior-eindhoven`
- Title huidig: `Advocaat Financieel Recht &… | Legal Talents Recruitment` (56)
- metaTitle voorstel: `Senior advocaat financieel recht`, geeft title `Senior advocaat financieel recht | Legal Talents Recruitment` (60)
- metaDescription huidig: "Specialistisch kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 4+ jaar ervaring. Zelfstandig dossiers behandelen, korte lijnen." (161!)
- metaDescription voorstel: "Kantoor in Eindhoven zoekt een advocaat financieel recht en ondernemingsrecht met 4+ jaar ervaring. Zelfstandig dossiers behandelen, korte lijnen." (146)

**V. Advocaat Vastgoed (3-5 jaar ervaring)** · `advocaat-vastgoed-eindhoven`
- Title huidig: `Advocaat Vastgoed (3-5 jaar… | Legal Talents Recruitment` (56)
- metaTitle voorstel: `Advocaat vastgoed Eindhoven`, geeft title `Advocaat vastgoed Eindhoven | Legal Talents Recruitment` (55)
- metaDescription huidig: "Toonaangevend kantoor in Eindhoven zoekt een ervaren vastgoedadvocaat. Werken voor aannemers, projectontwikkelaars en woningcorporaties in een hecht team." (154)
- metaDescription voorstel: "Advocatenkantoor in Eindhoven zoekt een vastgoedadvocaat met 3-5 jaar ervaring. Werk voor aannemers, projectontwikkelaars en woningcorporaties." (143)

**V. AI Privacy & Governance Counsel** · `ai-privacy-governance-counsel`
- Title huidig: `AI Privacy & Governance Counsel | Legal Talents Recruitment` (59)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "AI Privacy & Governance Counsel in Midden-Nederland. Adviseer over AVG, de EU AI Act en AI-governance. Hybride, 32–40 uur, via Legal Talents Recruitment." (153)
- metaDescription voorstel: ongewijzigd, past al

**V. Interim Jurist** · `interim-jurist`
- Title huidig: `Interim jurist (doorlopend) | Legal Talents Recruitment` (55)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Interim jurist of legal counsel? Wij koppelen ervaren juristen aan tijdelijke opdrachten bij corporates, overheid en kantoren. Persoonlijk en snel." (147)
- metaDescription voorstel: "Interim jurist of legal counsel? We koppelen ervaren juristen aan tijdelijke opdrachten bij corporates, overheid en kantoren. We bellen zodra er iets past." (155)

**V. Juridisch Secretaresse** · `juridisch-secretaresse`
- Title huidig: `Juridisch secretaresse vacature | Legal Talents Recruitment` (59)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Juridisch secretaresse en toe aan een nieuwe stap? Wij zoeken doorlopend secretaresses voor advocatenkantoren en legal teams. Vertrouwelijk en persoonlijk." (155)
- metaDescription voorstel: "Juridisch secretaresse, toe aan een nieuwe stap? We zoeken doorlopend voor advocatenkantoren en legal teams. Je wordt alleen voorgesteld als jij dat wilt." (154)

**V. Legal Counsel** · `legal-counsel`
- Title huidig: `Legal Counsel (doorlopend) | Legal Talents Recruitment` (54)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Ben je legal counsel en klaar voor een volgende stap? Wij zoeken doorlopend legal counsels voor corporates en scale-ups. Vertrouwelijk en persoonlijk." (150)
- metaDescription voorstel: "Legal counsel, klaar voor een volgende stap? We zoeken doorlopend voor corporates en scale-ups. Je wordt alleen voorgesteld als jij dat wilt." (141)

**V. Legal Engineer** · `legal-engineer-amsterdam`
- Title huidig: `Legal Engineer — Amsterdam | Legal Talents Recruitment` (54)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Legal Engineer in Amsterdam bij een legal-tech bedrijf. Hybride rol tussen juridische praktijk en technologie: je begrijpt advocaten én snapt wat AI kan." (153)
- metaDescription voorstel: ongewijzigd, past al

**V. Legal Engineer Advocatenkantoor** · `legal-engineer-den-haag` (concept)
- Title huidig: `Legal Engineer Advocatenkantoor | Legal Talents Recruitment` (59)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Bouw de brug tussen AI, juridische praktijk en organisatie bij een toonaangevend advocaten- en notarissenkantoor. Nieuwe rol in Den Haag, € 3.343 - € 6.934 p/m." (160!)
- metaDescription voorstel: "Bouw de brug tussen AI, juridische praktijk en organisatie bij een advocaten- en notarissenkantoor in Den Haag. Nieuwe rol, € 3.343 - € 6.934 p/m." (146)

**V. Legal Operations Specialist** · `legal-operations-specialist`
- Title huidig: `Legal Operations Specialist | Legal Talents Recruitment` (55)
- metaTitle voorstel: ongewijzigd
- metaDescription huidig: "Legal Operations Specialist, 32–40 uur, hybride. Procesoptimalisatie, legal tech, data en vendor management voor meerdere opdrachtgevers." (137)
- metaDescription voorstel: ongewijzigd, past al

Een vacature zonder `metaDescription` valt terug op de `excerpt`. Alle vacatures hebben nu een eigen `metaDescription`.

---

## Plekken waar teksten elkaar tegenspreken

Deze lijst is gebaseerd op de huidige code. Per punt staat waar het speelt en welke keuze het voorstel maakt. De punten A tot en met J hierboven (sectie "Eerst beslissen") staan hier met hun tegenspraak. Punt 11 tot en met 14 komen daar nog bij.

1. **40.000 juristen versus persoonlijk netwerk (A).** Home-hero, de home-title, Over ons en de heroes van advocaat, bedrijfsjurist, compliance en legal engineer zeggen "wij bereiken maandelijks 40.000 juristen". Dezelfde pagina's zeggen elders "persoonlijk netwerk in plaats van database" en "geen massa-outreach". Een bereik van 40.000 leest als massa.
2. **Niveau (B).** Voor kandidaten en de FAQ's van opdrachtgevers en kandidaten zeggen "middel- tot senior niveau". De advocaatpagina zegt "van advocaat-stagiair tot partner", en vacatures bestaan voor juniors, medioren en seniors.
3. **Doorlooptijd (C).** Voor opdrachtgevers: 4 tot 10 weken. Advocaat: 4-8 en 8-16 weken. Bedrijfsjurist: 8-12 en 12-20. Compliance: 8-14 en 12-20. Legal engineer: 4-10. Het zijn verschillende rollen, maar de bovenste en onderste getallen verschillen te veel om zonder uitleg naast elkaar te staan.
4. **Garantie (D).** Pricing zegt "No risk: vervangingsgarantie op aanvraag, kosteloos opnieuw werven of de fee crediteren". Andere pagina's zeggen "vervangingsgarantie op aanvraag" (legal counsel en scale-ups). De algemene voorwaarden (art. 7) zeggen: alleen als vooraf schriftelijk afgesproken, en Legal Talents spant zich in om een vervanger te vinden. De fee wordt daar niet gecrediteerd.
5. **Retentie (E).** Advocaat, bedrijfsjurist en legal engineer beloven "ruim boven het marktgemiddelde" en "blijven gemiddeld langer staan". Nergens staat een getal of bron. De scale-ups-pagina belooft "geen plaatsing die binnen een jaar weer vertrekt", wat de voorwaarden niet dekken.
6. **Reactietermijn (F).** Contact: "binnen 24 uur". Sollicitatieformulier: "binnen 5 werkdagen". Waarden op Over ons: "7 dagen bereikbaar". Dat kan allemaal kloppen, maar de lezer ziet drie beloftes.
7. **Contactadres (G).** `marcel@legal-talents.nl` staat in de vacatures Legal Operations Specialist en AI Privacy & Governance Counsel. Footer, contactpagina, privacybeleid, schema en foutmeldingen gebruiken `storm@legal-talents.nl`.
8. **Legal Engineer Amsterdam (H).** De pagina over werving van legal engineers zegt "recent begeleidden wij de plaatsing van een Legal Engineer in Amsterdam". De vacature staat op de site als open en staat tegelijk op "on hold".
9. **Logostrook (I).** "Vertrouwd door o.a." staat boven zes logo's op 13 pagina's. Als niet alle zes opdrachtgevers zijn, is de kop onjuist.
10. **Aantal kandidaten (J).** De hero van opdrachtgevers zegt "drie kandidaten die passen". Elders is er een "onderbouwde shortlist" zonder aantal. Dat kan, zolang drie de standaard is.
11. **Salaris.** De FAQ op `/recruitment/bedrijfsjurist` geeft bedragen (€65k tot €150k en hoger). De FAQ op `/bedrijfsjurist-vacature` zegt letterlijk dat generieke bedragen op een landingspagina eerder misleiden dan helpen. De compliance-pagina geeft ook bedragen (tot ruim €170k). Eén lijn kiezen, zie 14.6 en 15.6.
12. **Gratis versus kosten.** Vacature- en kandidaatpagina's zeggen "kosteloos". Voorwaarden art. 2.4 noemen "bijkomende kosten". Dat gaat over opdrachtgevers, maar de teksten maken dat onderscheid niet altijd. Alleen een aandachtspunt, geen wijziging.
13. **Aanspreekvorm.** De hele site gebruikt "je" en "jullie". Privacybeleid en algemene voorwaarden gebruiken "u". Dat is gangbaar in juridische documenten, maar het valt op naast de rest.
14. **Wettelijke claims in de compliance-markttekst.** "Sinds 2024 zijn duizenden organisaties verplicht ..." (NIS2 en DORA), plus een uitspraak over een "individuele meldplicht" van MLRO's. De data en de juridische juistheid zijn niet gecontroleerd. Zie 15.3.

---

## Wat nu?

- Er is niets in de code gewijzigd.
- Geef akkoord per pagina (bijv. "pagina 3") of per blok (bijv. "4.7"). Voor de landingspagina's geldt dat de mechanische regels M1 tot en met M5 in één keer goedgekeurd kunnen worden en dan overal worden toegepast waar ze genoemd zijn.
- De beslispunten A tot en met J hebben antwoord nodig voordat ik de blokken uitvoer die ervan afhangen. De blokken zelf noemen de bijbehorende letter.
