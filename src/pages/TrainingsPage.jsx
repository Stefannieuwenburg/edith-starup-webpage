import React, { useEffect } from "react";

const TrainingsPage = () => {

  // ActiveCampaign script laden
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://centerpiedproductions.activehosted.com/f/embed.php?id=7";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Je Energie de Baas – De Basis</h1>
        <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
          Training voor meer energetische balans, bescherming en innerlijke kracht.
        </p>
      </section>

      {/* INTRO BLOK */}
      <section className="max-w-3xl mx-auto px-6 py-10 leading-relaxed text-lg space-y-6">

        <p>
          Voel je vaak leeg of overprikkeld na contact met anderen?
        </p>

        <p>
          Je begint de dag vol energie, maar eindigt uitgeput zonder precies te weten waarom.
          Alsof iemand aan je kracht heeft gezogen.
        </p>

        <p>
          Misschien merk je dat je energie van anderen overneemt of dat je overprikkeld raakt in drukke ruimtes.
          Na een dag werken, boodschappen doen of sociale afspraken voel je je moe, gespannen of zwaar.
        </p>

        <p>
          Je weet dat je gevoelig bent voor energie, maar niet hoe je jezelf kunt beschermen zonder je af te sluiten.
          Herkenbaar? Dan is deze training voor jou.
        </p>

        {/* Over de training */}
        <h2 className="text-2xl font-semibold mt-10">Over de training Je Energie de Baas – De Basis</h2>

        <p>
          Je Energie de Baas – De Basis is een praktische, ervaringsgerichte training in energetisch bewustzijn.
          Je leert voelen wat energie is, hoe het zich door je lichaam beweegt en hoe je jezelf energetisch kunt beschermen
          in het dagelijks leven.
        </p>

        <p>
          We werken met eenvoudige oefeningen om te gronden, opladen en zuiveren. Zo leer je om stevig in je eigen energie
          te blijven staan, ook als de wereld om je heen druk of intens is.
        </p>

        {/* Wat je leert */}
        <h2 className="text-2xl font-semibold mt-10">Wat je leert in deze energie‑training</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Wat energie is en hoe het zich in en om je lichaam bevindt.</li>
          <li>Hoe je onderscheid maakt tussen jouw energie en die van anderen.</li>
          <li>Wat resonantie en frequentie betekenen en hoe ze invloed hebben op je stemming en vitaliteit.</li>
          <li>Hoe je je energetische ruimte zuiver en beschermd houdt.</li>
          <li>Praktische oefeningen om te gronden, opladen en je energie te herstellen.</li>
        </ul>

        <p>
          Je gaat het niet alleen begrijpen, maar ook voelen en ervaren zodat je direct verschil merkt in je dagelijks leven.
        </p>

        {/* Resultaat */}
        <h2 className="text-2xl font-semibold mt-10">Resultaat: meer rust, kracht en helderheid</h2>

        <p>
          Na deze energetische training herken je meteen wat niet van jou is. Je staat stevig in je eigen energie,
          ook op drukke plekken. Je voelt je beschermd, lichter en meer in balans.
        </p>

        <p>
          Je bent minder vatbaar voor vermoeidheid of energielekken en je hebt een praktische toolkit om je energie te beheren,
          beschermen en versterken.
        </p>

        <p>
          Kortom: je ervaart meer rust, balans en innerlijke kracht van binnenuit.
        </p>

        {/* Voor wie */}
        <h2 className="text-2xl font-semibold mt-10">Voor wie is deze training?</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Als je hooggevoelig bent of snel energie van anderen oppikt.</li>
          <li>Als je vaak leeg of moe bent na sociale contacten.</li>
          <li>Als je wilt leren hoe je je energetische grenzen bewaakt.</li>
          <li>Als je meer balans, focus en rust wilt ervaren in je dagelijks leven.</li>
        </ul>

        {/* CTA */}
        <h2 className="text-2xl font-semibold mt-10">Klaar om je energie de baas te worden?</h2>

        <p>
          Gun jezelf de vrijheid om voluit te leven, zonder leeg te lopen op anderen.
          Leer hoe je jouw energie kunt beschermen, versterken en zuiver houden.
        </p>

        <p>
          Schrijf je hieronder in voor <strong>“Je Energie de Baas – De Basis”</strong> en ontdek hoe het voelt
          om stevig, zuiver en vol vertrouwen in je eigen kracht te staan.
        </p>

      </section>

      {/* FORMULIER */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">Inschrijven</h2>
        <p className="text-[#8A8A8A] max-w-xl mx-auto mb-10">
          Vul hieronder je gegevens in om je plek te reserveren.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="_form_7"></div>
        </div>
      </section>

    </div>
  );
};

export default TrainingsPage;