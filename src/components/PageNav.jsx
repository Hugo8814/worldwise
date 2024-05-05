import { NavLink } from "react-router-dom";
import stlyes from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    <nav className={stlyes.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={stlyes.ctaLink}>
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
