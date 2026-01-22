
const ZakelijkeBeslissingenPage = () => {
  return (
    <div className="py-16 px-6 bg-[#F7F7F7]">
      <h1 className="text-3xl font-semibold text-center mb-12">
        Zakelijke beslissingen
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow leading-relaxed">

        {/* Introductie */}
        <p className="text-[#8A8A8A] mb-6">
          De meeste mensen met een zakelijk probleem hebben moeite daarbij hun persoonlijke intuïtie toe te laten.
          De eeuwige strijd tussen ratio en emotie. Bij mij kan je terecht om juist die intuïtie goed te leren gebruiken
          in het nemen van belangrijke zakelijke beslissingen. We bepalen samen een strategie op basis van wat je
          waarschijnlijk al aanvoelde, maar nooit expliciet hebt kunnen maken.
        </p>

        <p className="text-[#8A8A8A] mb-6">
          De consulten kunnen in Schiedam of op locatie gegeven worden, op afspraak.
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
          <strong>Begeleidingstraject zakelijke beslissingen:</strong><br />
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
              Een onderneemster ervaart door de coronaperiode dat haar zaak het financieel zwaar heeft 
              en ziet een faillissement op zich afkomen. Wat doet ze met haar voorraad? De verhuurder 
              wil het contract niet aanpassen en er loopt een juridische procedure.
              <br /><br />
              Haar vraag: Kan ik mijn zaak nog redden, wat moet ik met het huurcontract en de verhuurder doen?
              <br /><br />
              <strong>Met 3 consulten is het volgende bereikt:</strong><br />
              • De zaak blijft bestaan<br />
              • De onderneemster heeft een strategische partner gevonden<br />
              • De voorraad is verkocht aan een collega<br />
              • Het huurcontract is ontbonden
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

export default ZakelijkeBeslissingenPage;