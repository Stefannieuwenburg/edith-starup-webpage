
import vuurtoren from "./assets/vuurtorenwave.jpg";
import edith from "./assets/edith.jpg";
import './Style.css';

const HomePage = () => {
  return (
    <div className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">

      {/* HERO */}
      <section
        id="hero"
        className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <img
          src={vuurtoren}
          alt="Vuurtoren"
          className="absolute inset-0 w-full h-full object-cover object-[50%_25%]"
        />

        <div className="absolute inset-0 bg-black/40"></div>

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

      {/* INTRO */}
      <section id="intro" className="py-16 px-6 text-center">
        <img
          src={edith}
          alt="Edith"
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

      {/* SERVICES */}
      <section
        id="services"
        className="py-12 px-6 grid md:grid-cols-3 gap-8 text-center"
      >

        {/* Helder advies */}
        <div className="bg-white p-6 rounded shadow">
          <div className="w-21 h-21 mx-auto mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="20" stroke="#2C2C2C" strokeWidth="2" />
              <polygon points="32,20 38,32 32,44 26,32" stroke="#2C2C2C" fill="none" strokeWidth="2" />
              <circle cx="32" cy="32" r="2" fill="#2C2C2C" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Helder advies …</h3>
          <p className="text-[#8A8A8A]">
            Doordat ik kan wijzen in de juiste richting, krijg je helder welke
            keuzes je kunt maken. Dit kan helpen bij het oplossen van problemen.
            Mijn antwoord of advies is niet altijd wat je wilt, wel wat nodig is
            om verder te komen.
          </p>
        </div>

        {/* Geen zweverige poespas */}
        <div className="bg-white p-6 rounded shadow">
          <div className="w-21 h-21 mx-auto mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="20" stroke="#2C2C2C" strokeWidth="2" />
              <path d="M24 32L30 38L40 26" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Geen zweverige poespas…</h3>
          <p className="text-[#8A8A8A]">
            No no-nonsense met een pragmatische duidelijke aanpak. Een consult
            kan de nodige emotie oproepen, ik heb als doel om met jou de zaken
            tot de werkelijkheid terug te brengen.
          </p>
        </div>

        {/* Veilige plek */}
        <div className="bg-white p-6 rounded shadow">
          <div className="w-21 h-21 mx-auto mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 14L22 18V30C22 38 26.5 44 32 48C37.5 44 42 38 42 30V18L32 14Z"
                stroke="#2C2C2C"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M28.5 30C27 27.5 30 25.5 32 27.5C34 25.5 37 27.5 35.5 30C34 32.5 32 34 32 34C32 34 30 32.5 28.5 30Z"
                stroke="#2C2C2C"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Veilige plek …</h3>
          <p className="text-[#8A8A8A]">
            Veel mensen vinden het moeilijk om over persoonlijke emoties te
            praten. Je beslist zelf wat je wilt bespreken.
          </p>
        </div>

        {/* Luisterend oor — NIEUWE ICON */}
        <div className="bg-white p-6 rounded shadow">
          <div className="w-21 h-21 mx-auto mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">

              {/* Oorschelp */}
              <path
                d="M28 24C28 20 31 18 34 18C37 18 40 20.5 40 25C40 29.5 38 31.5 38 34C38 37 36 39 33.5 39C31 39 29.5 37.5 29.5 35"
                stroke="#2C2C2C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Binnenoor */}
              <path
                d="M34 24C36 26 36 28 34.5 30"
                stroke="#2C2C2C"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Spreekwolkje */}
              <rect
                x="40"
                y="24"
                width="12"
                height="9"
                rx="3"
                stroke="#2C2C2C"
                strokeWidth="2"
              />
              <path
                d="M42 33L40 36"
                stroke="#2C2C2C"
                strokeWidth="2"
                strokeLinecap="round"
              />

            </svg>
          </div>
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