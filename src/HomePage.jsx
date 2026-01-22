
import vuurtoren from "./assets/vuurtorenwave.jpg"
import edith from "./assets/edith.jpg"
// import weeg from "./assets/weeg.png"
// import oor from "./assets/oor.png"
import compass from "./assets/compass.jpg"
import './Style.css'


const HomePage = () => {
  return (
    <div className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white py-6 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Edith Samuels MEDIUM</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Over Edith</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Aanbod</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-38 px-6 bg-cover bg-center" style={{ backgroundImage: `url(${vuurtoren})` }}>
        <h2 className="text-4xl font-bold mb-4 text-white">Helder zicht met duidelijk bericht</h2>
        <p className="max-w-xl mx-auto text-lg text-white">
         Je zit met vragen en zou daar graag eens met iemand over praten. Je zoekt naar een rots in de branding, een baken, een helder zicht. Kortom je wilt een duidelijk antwoord.
        </p>
      </section>

      {/* Edith Intro */}
      <section className="py-16 px-6 text-center">
        <img src={edith} alt="Edith Image"  className="w-45 h-45 rounded-full mx-auto mb-4" />
        <p className="max-w-2xl mx-auto text-lg">
         Ik ben Edith, heldervoelend, -horend, -ziend en -wetend. Ik help je graag met persoonlijke en zakelijke vragen, geef je graag meer inzicht als je denkt vast te lopen. Mijn aanpak is nuchter en pragmatisch en ik kan je in een één op één gesprek sprongen vooruit helpen. Wat is je concrete vraag?
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded shadow">
           <img src={compass} alt="Edith Image"  className="w-21 h-21  mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Helder advies …</h3>
          <p className="text-[#8A8A8A]">Doordat ik kan wijzen in de juiste richting, krijg je helder welke keuzes je kunt maken. Dit kan helpen bij het oplossen van problemen. Mijn antwoord of advies is niet altijd wat je wilt, wel wat nodig is om verder te komen.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
           <img src={compass}  alt="Edith Image"  className="w-21 h-21  mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Geen zweverige poespas…</h3>
          <p className="text-[#8A8A8A]">No no-nonsense met een pragmatische duidelijke aanpak. Een consult kan de nodige emotie oproepen, ik heb als doel om met jou de zaken tot de werkelijkheid terug te brengen.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
           <img src={compass} alt="Edith Image"  className="w-21 h-21  mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Veilig plek …</h3>
          <p className="text-[#8A8A8A]">Veel mensen vinden het moeilijk om over persoonlijke emoties te praten. Je beslist zelf wat je wilt bespreken.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
           <img src={compass} alt="Edith Image"  className="w-21 h-21  mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Luisterend oor ...</h3>
          <p className="text-[#8A8A8A]">Ik luister en geef een duidelijk antwoord of advies op je vraag. Moeilijke situaties worden met respect besproken ook al zijn ze confronterend. Hierin kan ik ondersteunen.</p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;