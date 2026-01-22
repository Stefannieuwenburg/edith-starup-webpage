import React from 'react'


const TrainingsPage = () => {
  return (
    <div className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-2">Trainingen</h2>
        <p className="text-lg text-[#8A8A8A]">Helder Inzicht voor uw Pad</p>
        <p className="max-w-2xl mx-auto mt-4 text-md">
          Jij zit zelf met vragen. Je zoekt pad. Moar zetten inzicht in. Is het je niet om Edith vragen bolck wet en schijf pad. En igan ken te buthumen een Edideren sen is gegrantend part lin line sued decortes vraag.
        </p>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Masterclass: De Interne Kompas <span className="text-sm text-[#8A8A8A]">(Advanced)</span></h3>
          <ul className="list-disc list-inside text-[#8A8A8A] text-sm mt-2">
            <li>Zelfreflectie en inzicht</li>
            <li>Groepsgesprekken & coaching</li>
            <li>Duur: 2 dagen</li>
            <li>Locatie: op locatie of online</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Training: Helder Leiderschap <span className="text-sm text-[#8A8A8A]">(Intermediate)</span></h3>
          <ul className="list-disc list-inside text-[#8A8A8A] text-sm mt-2">
            <li>Communicatie & besluitvorming</li>
            <li>Teammanagement</li>
            <li>Duur: 3 dagen</li>
            <li>Locatie: op locatie</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Workshop: De Krder-Luisteren <span className="text-sm text-[#8A8A8A]">(Beginner)</span></h3>
          <ul className="list-disc list-inside text-[#8A8A8A] text-sm mt-2">
            <li>Actief luisteren & empathie</li>
            <li>Rollenspellen & feedback</li>
            <li>Duur: 1 dag</li>
            <li>Locatie: online</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-6">
        <h4 className="text-lg font-medium mb-4">Inschrijven & Praktijktraining</h4>
        <p className="text-[#8A8A8A] max-w-xl mx-auto mb-6">
          Een zin drievoud van praktisch inzicht over het maje ervaring justinter praktijkspore ervaring – dit (in) – ethiek en reflectie.
        </p>
        <button className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">
          Bekijk Data & Meld Je Aan
        </button>
      </section>

      
    </div>
  );
};

export default TrainingsPage;
