const ContactPage = () => {
  return (
    <div className="py-16 px-6 bg-[#F7F7F7]">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Contact
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">

        {/* Intro */}
        <h2 className="text-2xl font-semibold mb-4">Edith Samuels</h2>
        <p className="text-[#8A8A8A] mb-6 leading-relaxed">
          Helder zicht met duidelijk bericht.<br />
          Soms zit je met vragen. Er is niemand in je buurt die je kan helpen.
          Je zoekt naar een rots in de branding, een baken, een helder zicht.
        </p>

        {/* Diensten overzicht */}
        <h3 className="text-xl font-semibold mb-3">Diensten</h3>
        <ul className="text-[#8A8A8A] mb-8 space-y-1">
          <li>• Zakelijke beslissingen</li>
          <li>• Persoonlijk begeleidingstraject</li>
          <li>• Eén op één gesprek</li>
          <li>• Workshops</li>
          <li>• Trainingen</li>
        </ul>

        {/* Contact informatie */}
        <h3 className="text-xl font-semibold mb-3">Contact</h3>
        <p className="text-[#8A8A8A] mb-6">
          Je kunt mij bereiken door te mailen of mij te bellen.
        </p>

        <div className="space-y-2 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@edithsamuels.nl" className="text-[#D4B483] hover:underline">
              contact@edithsamuels.nl
            </a>
          </p>
          <p>
            <strong>Telefoon:</strong>{" "}
            <a href="tel:+31615430049" className="text-[#D4B483] hover:underline">
              +31 6 15 43 00 49
            </a>
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="mailto:contact@edithsamuels.nl"
            className="bg-[#D4B483] text-white px-6 py-3 rounded hover:bg-[#c3a06f] transition inline-block"
          >
            Stuur een bericht
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;