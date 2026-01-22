const ServicePage = () => {
  return (
    <div className="py-16 px-6 bg-[#F7F7F7]">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Wat kan ik voor jou doen?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">

        {/* Workshops */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Workshops</h3>
          <p className="text-[#8A8A8A] mb-4">
            <strong>Workshop Je Energie in Beweging</strong><br />
            Voel je je soms leeg, gespannen of uit verbinding met jezelf zonder precies te weten waarom?
            Veel mensen merken dat ze energie verliezen in hun dagelijkse leven, maar weten niet goed
            wat hun lichaam eigenlijk probeert te vertellen. Tijdens deze workshop van 2,5 uur ontdek je […]
          </p>
          <button  className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">Lees meer</button>

            
          
        </div>

        {/* Trainingen */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Trainingen</h3>
          <p className="text-[#8A8A8A] mb-4">
            <strong>Je Energie de Baas</strong><br />
            De basistraining voor meer energetische balans, bescherming en innerlijke kracht.
            Voel je vaak leeg of overprikkeld na contact met anderen? Je begint de dag vol energie,
            maar eindigt uitgeput zonder precies te weten waarom. Misschien neem je energie van anderen over […]
          </p>
         <button  className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">Lees meer</button>
        </div>

        {/* Zakelijke beslissingen */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Zakelijke beslissingen</h3>
          <p className="text-[#8A8A8A] mb-4">
            De meeste mensen met een zakelijk probleem hebben moeite daarbij hun persoonlijke intuïtie toe te laten.
            Bij mij kan je terecht om een strategie te bespreken en ik kan je leren hoe jij je intuïtie juist goed
            kunt gebruiken in het nemen van belangrijke beslissingen.
          </p>
         <button  className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">Lees meer</button>
        </div>

        {/* Persoonlijk begeleidingstraject */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Persoonlijk begeleidingstraject</h3>
          <p className="text-[#8A8A8A] mb-4">
            Een probleem kan ook te groot of te ingewikkeld zijn. Dan raad ik je aan om voor een uitgebreider
            begeleidingstraject te kiezen. We kunnen stap voor stap werken aan jouw vraag en er is ruimte om
            dieper op zaken in te gaan en meerdere vragen te stellen.
          </p>
          <button  className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">Lees meer</button>
        </div>

        {/* Eén op één gesprek */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Eén op één gesprek</h3>
          <p className="text-[#8A8A8A] mb-4">
            Je loopt vast en hebt vragen rondom een probleem dat je moet oplossen. Herken je dit?
            Wil je snel inzicht en helderheid, boek dan een één op één gesprek van 50 minuten.
            Dit kan face to face, via videobellen of telefonisch.
          </p>
         <button  className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition">Lees meer</button>
        </div>

      </div>
    </div>
  );
};

export default ServicePage;