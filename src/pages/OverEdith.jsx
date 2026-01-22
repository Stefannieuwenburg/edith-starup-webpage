import edith from "../assets/edith.jpg";

const OverEdith = () => {
  return (
    <div id="Over-Edith" className="bg-[#F5F1EB] text-[#2C2C2C] min-h-screen font-sans py-16 px-6">

      <div className="max-w-5xl mx-auto">
 <h2 className="text-2xl font-semibold mb-4 text-md-center">Over Edith</h2>
        {/* FOTO LINKS + TEKST RECHTS */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">

          {/* Foto links */}
          <img
            src={edith}
            alt="Edith"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
          />

          {/* Tekst rechts */}
          <div className="md:w-2/3 text-lg leading-relaxed">
            <p className="mb-6">
              Het maakt mij blij als ik je heb kunnen helpen. Ik mag een verbindingskanaal zijn tussen jou en de wereld hierboven. 
              Wat je bij mij kunt vinden is een nuchtere, pragmatische kijk op het leven die mij eigen is, met hulp van de spirituele wereld. 
              Een gave die ik mijn hele leven heb gehad, verder heb leren ontwikkelen en inzet om mensen te helpen.
            </p>

            <p className="mb-6">
              Je komt bij mij met je verhaal, vraag of probleem. Ik help je graag met een nuchtere analytische blik. 
              De heldervoelendheid helpt mij om dingen eerder en beter te zien, horen of voelen. 
              Ik ben wars van zweverige poespas en geef een eerlijk en duidelijk advies. 
              Mijn doel is dat er resultaat behaald wordt waar je mee verder kunt!
            </p>
          </div>
        </div>

        {/* CV LINKS + WAT MIJ BEZIGHOUT RECHTS */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* CV Edith */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">CV Edith</h2>

            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>2014 - heden – Zelfstandig consultant en medium</li>
              <li>2004 - 2005 – Post HBO Zorgmanager</li>
              <li>1996 - 2000 – HBO Opleiding SHP Hulpverlener</li>
              <li>1995 - 2003 – Spirituele en Reiki opleidingen, cursussen</li>
              <li>1981 - 1995 – Zelfstandig Edelsmid</li>
              <li>1978 - 1981 – Opleiding Edelsmid</li>
            </ul>
          </div>

          {/* Wat mij bezighoudt */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Wat mij bezighoudt</h2>

            <p className="text-lg mb-6">
              Ik ben geboren in Schiedam als oudste van 3 kinderen. Vanaf mijn kinderjaren heb ik heldervoelende, -ziende en -horende 
              waarnemingen, niet wetende wat het was. Omdat ik een nogal nuchter karakter heb wist ik niet goed wat ik ermee aan moest. 
              Het was niet tastbaar en ik kon er ook niet over praten met familie.
            </p>

            <p className="text-lg mb-6">
              Rond mijn 6de kwam ik er achter wat deze mediamieke gaven inhielden. Niet door te lezen maar door ervaringen die ik had. 
              Kinderen en volwassenen kwamen zonder te vragen naar me toe en stortten hun verhaal bij me uit. 
              Ik kon niet altijd helpen maar doordat ik automatisch de emoties kon voelen wist ik hoe af te stemmen op de ander. 
              En zo begon mijn training in de praktijk.
            </p>

            <p className="text-lg mb-6">
              Mijn creativiteit bracht mij bij het Edelsmidvak, wat ik vele jaren heb uitgeoefend met liefde. 
              Rond mijn 35ste echter merkte ik een soort van onrust en voelde ik dat het tijd was om iets anders te gaan doen.
            </p>

            <p className="text-lg mb-6">
              Dit werd een nieuw avontuur als SPH hulpverlener in diverse functies. 
              De ervaringen met collega’s en cliënten waren van onschatbare waarde en een geweldige leerschool.
            </p>

            <p className="text-lg mb-6">
              Inmiddels had ik ook diverse cursussen en trainingen gevolgd in het verder ontwikkelen van mijn gave, 
              waaronder diverse Reiki opleidingen.
            </p>

            <p className="text-lg mb-6">
              Mijn gave heb ik altijd als ‘gewoon’ ervaren, het hoorde bij mij. Maar ik durfde er nog niet voor uit te komen. 
              Inmiddels was ik 50, de overgang begon en op een ochtend bij het ontwaken voelde ik dat er een ‘dikke jas’ aan emoties 
              was afgevallen. Dit gaf lucht om hardop uit te spreken wat ik altijd al wilde: mensen helpen! Maar nu op mijn manier.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OverEdith;