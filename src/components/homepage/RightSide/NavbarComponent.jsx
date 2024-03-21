import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <ul className="flex items-center justify-end gap-3 mb-5">
      <Link to="/about-us">
        <li>About Us</li>
      </Link>
      <li>|</li>
      <Link to="/contact-us">
        <li>Contact Us</li>
      </Link>
    </ul>
  );
};

export default NavbarComponent;
