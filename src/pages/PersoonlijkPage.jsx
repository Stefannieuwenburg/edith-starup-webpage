const PersoonlijkPage = () => {
  return (
    <div className="py-16 px-6 bg-[#F7F7F7]">
      <h1 className="text-3xl font-semibold text-center mb-12">
        Persoonlijk begeleidingstraject
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow leading-relaxed">

        {/* Introductie */}
        <p className="text-[#8A8A8A] mb-6">
          Een probleem kan ook te groot of te ingewikkeld zijn. Dan raad ik je aan om voor een uitgebreider
          begeleidingstraject te kiezen. We maken dan samen een stappenplan om te werken aan jouw situatie,
          vraag en ontwikkeling. Er is uitgebreid gelegenheid om dieper op de zaken in te gaan. Hiermee krijgen
          we veel meer informatie boven water en daarmee inzicht in jouw situatie.
        </p>

        <p className="text-[#8A8A8A] mb-6">
          De consulten worden in Schiedam gegeven waarbij je op afspraak bij mij langskomt.
        </p>

        <p className="text-[#8A8A8A] mb-6">
          De tijdsduur is per begeleidingsconsult maximaal 80 minuten.
        </p>

        <p className="text-[#8A8A8A] mb-10">
          Je krijgt een voorstel met een offerte zodat je van tevoren weet waar je aan toe bent.
        </p>

        {/* Tarieven */}
        <h2 className="text-2xl font-semibold mb-4">Tarieven</h2>

        <p className="text-[#8A8A8A] mb-4">
          <strong>Begeleidingstraject sessie op locatie Schiedam:</strong><br />
          Op afspraak van ma t/m vr: 10.00 – 16.00 uur<br />
          Tarieven op aanvraag (coaching ca. 80 minuten)
        </p>

        <p className="text-[#8A8A8A] mb-4">
          Bovengenoemde tijden en tarieven zijn indicaties.
        </p>

        <p className="text-[#8A8A8A] mb-4">
          Bij gecompliceerde situaties of vragen die om afwijkende tijden of locaties vragen,
          wordt er maatwerk geleverd. Dit wordt altijd vooraf besproken en schriftelijk vastgelegd.
        </p>

        <p className="text-[#8A8A8A] mb-10">
          Alle bovengenoemde tarieven zijn excl. BTW.
        </p>

        <p className="text-[#8A8A8A] mb-10">
          Voor het wijzigen of annuleren van een afspraak geldt een termijn van 2 werkdagen voor telefonische consulten
          en 5 werkdagen voor persoonlijke consulten i.v.m. reservering van de locatie.
        </p>

        {/* Cases */}
        <h2 className="text-2xl font-semibold mb-6">Cases</h2>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Case 1 */}
          <div className="bg-[#FAFAFA] p-6 rounded shadow flex-1">
            <h3 className="text-xl font-semibold mb-2 text-[#D4B483]">Case 1</h3>
            <p className="text-[#8A8A8A] leading-relaxed">
              Een ondernemer heeft een jarenlang conflict met de huisbank om een groot bedrag.
              Er zijn diverse mensen bij betrokken en een voorstel tot een oplossing is aangeboden.
              Zijn vragen waren: Wat moet ik doen, wat gaat er gebeuren, hoe lang gaat het nog duren,
              wat kan ik verwachten qua bedrag?
              <br /><br />
              Het consult betrof de inhoud van het bemiddelingstraject tussen de ondernemer, de bank
              en overige betrokkenen. De inzet van het gesprek was hoe strategisch te handelen tijdens
              het traject. Het doel was het uiteindelijke bedrag te bepalen.
              <br /><br />
              <strong>Tijdsinvestering:</strong> 4 consulten<br />
              <strong>Resultaat:</strong> Het beoogde bedrag waar de ondernemer recht op had werd door
              de bank voldaan binnen de 2 maanden die ik heb benoemd in het consult.
            </p>
          </div>

          {/* Case 2 */}
          <div className="bg-[#FAFAFA] p-6 rounded shadow flex-1">
            <h3 className="text-xl font-semibold mb-2 text-[#D4B483]">Case 2</h3>
            <p className="text-[#8A8A8A] leading-relaxed">
              Een vrouw heeft verdriet, kiest steeds de verkeerde man (zegt ze), wil scheiden maar is privé
              en zakelijk met haar echtgenoot verbonden. De echtgenoot werkt niet mee en de kinderen weten niet
              wat ze ermee aan moeten.
              <br /><br />
              Haar vragen: Wat moet ik doen, hoe zit het met mijn kinderen, wat gaat hij doen, hoe maak ik mijn toekomst?
              Ik ben bang!
              <br /><br />
              Omdat dit een zeer ingewikkelde situatie is met veel vragen, kiest deze dame voor begeleidingstraject‑sessies.
              De leidraad was: duidelijkheid krijgen in alles wat er speelt, punt voor punt. Er was ruimte voor emoties,
              maar altijd met een duidelijk doel.
              <br /><br />
              <strong>Tijdsinvestering:</strong> één jaar, 1x per maand consult<br />
              <strong>Resultaat:</strong> De scheidingspapieren zijn getekend, het huis staat te koop en zij zoekt een nieuw huis.
              Ze praat met haar kinderen en werkt actief aan zichzelf en haar keuzes.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition inline-block"
          >
            Neem contact op
          </a>
        </div>

      </div>
    </div>
  );
};

export default PersoonlijkPage;