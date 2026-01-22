
import vuurtoren from "./assets/vuurtorenwave.jpg";
import edith from "./assets/edith.jpg";
import compass from "./assets/compass.jpg";
import './Style.css';

const HomePage = () => {
  return (
    <div className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">

    <section
  id="hero"
  className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden"
>
  {/* Afbeelding met custom focus */}
  <img
    src={vuurtoren}
    alt="Vuurtoren"
    className="absolute inset-0 w-full h-full object-cover object-[50%_25%]"
  />

  {/* Donkere overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Tekst */}
  <div className="relative z-10 px-6">
    <h2 className="text-4xl font-bold mb-4 text-white">
      Helder zicht met duidelijk bericht
    </h2>
    <p className="max-w-xl mx-auto text-lg text-white">
      Je zit met vragen en zou daar graag eens met iemand over praten.
      Je zoekt naar een rots in de branding, een baken, een helder zicht.
      Kortom je wilt een duidelijk antwoord.
    </p>
  </div>
</section>



      {/* Edith Intro */}
      <section id="intro" className="py-16 px-6 text-center">
        <img
          src={edith}
          alt="Edith Image"
          className="w-45 h-45 rounded-full mx-auto mb-4"
        />
        <p className="max-w-2xl mx-auto text-lg">
          Ik ben Edith, heldervoelend, -horend, -ziend en -wetend. Ik help je
          graag met persoonlijke en zakelijke vragen, geef je graag meer inzicht
          als je denkt vast te lopen. Mijn aanpak is nuchter en pragmatisch en
          ik kan je in een één op één gesprek sprongen vooruit helpen. Wat is je
          concrete vraag?
        </p>
      </section>

      {/* Services / Samen werken */}
      <section
        id="services"
        className="py-12 px-6 grid md:grid-cols-3 gap-8 text-center"
      >
        <div className="bg-white p-6 rounded shadow">
          <img
            src={compass}
            alt="Edith Image"
            className="w-21 h-21 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Helder advies …</h3>
          <p className="text-[#8A8A8A]">
            Doordat ik kan wijzen in de juiste richting, krijg je helder welke
            keuzes je kunt maken. Dit kan helpen bij het oplossen van problemen.
            Mijn antwoord of advies is niet altijd wat je wilt, wel wat nodig is
            om verder te komen.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <img
            src={compass}
            alt="Edith Image"
            className="w-21 h-21 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Geen zweverige poespas…</h3>
          <p className="text-[#8A8A8A]">
            No no-nonsense met een pragmatische duidelijke aanpak. Een consult
            kan de nodige emotie oproepen, ik heb als doel om met jou de zaken
            tot de werkelijkheid terug te brengen.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <img
            src={compass}
            alt="Edith Image"
            className="w-21 h-21 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Veilige plek …</h3>
          <p className="text-[#8A8A8A]">
            Veel mensen vinden het moeilijk om over persoonlijke emoties te
            praten. Je beslist zelf wat je wilt bespreken.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <img
            src={compass}
            alt="Edith Image"
            className="w-21 h-21 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Luisterend oor ...</h3>
          <p className="text-[#8A8A8A]">
            Ik luister en geef een duidelijk antwoord of advies op je vraag.
            Moeilijke situaties worden met respect besproken ook al zijn ze
            confronterend. Hierin kan ik ondersteunen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;