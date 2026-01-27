import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        id="contact"
        className="bg-white py-6 text-center text-sm text-[#8A8A8A] flex flex-col sm:flex-row justify-center gap-2"
      >
        <span>
          &copy; {new Date().getFullYear()} Edith Samuels. Alle rechten voorbehouden.
        </span>

        <Link
          to="/privacybeleid"
          className="text-[#8A8A8A] underline hover:text-black transition"
        >
          Privacybeleid
        </Link>
      </footer>
    </div>
  );
};

export default Footer;