import * as React from "react";
import { DIContext } from "@helpers";
const Logo = require("../../../assets/images/logo.svg") as string;

const Navbar: React.FC = () => {
  const dependencies = React.useContext(DIContext);
  const { translation } = dependencies;
  return (
    <div>
      <nav className="navbar navbar-expand-lg col-md-11 mx-auto navbar-light">
        <a className="navbar-brand" href="/signup">
          <img src={Logo} alt="reactangel1" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="mr-3 anchor-class anchor-class-login" href="/login">
                {translation.t("LOGIN")}
              </a>
            </li>

            <li className="nav-item ">
              <a className="ml-3 btns hovers" href="/signup">
                <span className="anchor-register-button anchor-class-login">
                  {translation.t("REGISTER_WITH_US")}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};
export default Navbar;
