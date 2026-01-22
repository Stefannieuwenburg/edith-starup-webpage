const Testimonials = () => {
  return (
    <div className="py-16 px-6 bg-[#F7F7F7]">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Wat vinden mensen van mij?
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded shadow text-center">
          <span className="text-5xl text-[#D4B483] font-bold block mb-4">""</span>
          <p className="text-[#8A8A8A]">
            Ik voel me veilig en op mijn gemak bij Edith, ze neemt altijd de tijd.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded shadow text-center">
          <span className="text-5xl text-[#D4B483] font-bold block mb-4">""</span>
          <p className="text-[#8A8A8A]">
            Edith zegt het straight en windt er geen doekjes om. Ik waardeer die directheid,
            daar heb ik wat aan.
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded shadow text-center">
          <span className="text-5xl text-[#D4B483] font-bold block mb-4">""</span>
          <p className="text-[#8A8A8A]">
            Als ik de waarheid wil horen bel ik jou, je bent altijd zo onomwonden eerlijk.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;