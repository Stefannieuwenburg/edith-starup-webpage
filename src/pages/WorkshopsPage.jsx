import React, { useEffect } from "react";

const WorkshopsPage = () => {

  // ActiveCampaign script laden
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://centerpiedproductions.activehosted.com/f/embed.php?id=5";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="workshops" className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Workshop Je Energie in Beweging</h1>
        <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
          Ontdek hoe jouw energie beweegt, waar het vastloopt en hoe je deze natuurlijke stroom weer activeert.
        </p>
      </section>

      {/* INTRO BLOK */}
      <section className="max-w-3xl mx-auto px-6 py-10 leading-relaxed text-lg space-y-6">
        <p>
          Voel je je soms leeg, gespannen of uit verbinding met jezelf zonder precies te weten waarom?
          Je bent niet de enige. Veel mensen merken dat ze energie verliezen in hun dagelijkse leven,
          maar weten niet goed wat hun lichaam eigenlijk probeert te vertellen.
        </p>

        <p>
          Tijdens deze workshop van 2,5 uur ontdek je hoe energie in jouw lichaam beweegt,
          waar het soms vastloopt en hoe je die natuurlijke stroom weer kunt activeren.
          Door middel van ademhaling, aandacht en eenvoudige lichaamsgerichte oefeningen leer je subtieler voelen
          wat er in je speelt — fysiek, mentaal en emotioneel.
        </p>

        <p>
          De workshop biedt je niet alleen inzicht, maar ook praktische tools om meer rust, balans en vitaliteit
          te ervaren in je dagelijks leven. Je hoeft geen ervaring te hebben, alleen de wens om beter in je vel te zitten
          en te begrijpen wat jouw energie nodig heeft.
        </p>

        <p>
          We creëren een veilige en ontspannen omgeving waarin je mag onderzoeken, ervaren en weer thuiskomen in jezelf.
          Kom zoals je bent en ontdek hoe het voelt als jouw energie weer vrij kan stromen.
        </p>

        <p className="font-semibold text-xl">
          Klaar om weer écht te voelen?
        </p>

        <p>
          Gun jezelf een moment van rust, inzicht en hernieuwde energie.
          Schrijf je hieronder in voor <strong>“Workshop Je Energie in Beweging”</strong> en geef jouw lichaam en geest
          de aandacht die ze verdienen.
        </p>
      </section>

      {/* FORMULIER */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">Inschrijven</h2>
        <p className="text-[#8A8A8A] max-w-xl mx-auto mb-10">
          Vul hieronder je gegevens in om je plek te reserveren.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="_form_5"></div>
        </div>
      </section>

    </div>
  );
};

export default WorkshopsPage;