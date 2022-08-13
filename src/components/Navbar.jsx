import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo(sajjad).svg";

//styles
import "../styles/_navbar.scss";

//Menu Items Array
const menuItems = ["all", "about", "projects", "media"];

const Navbar = () => {
    const [lebelPosition, setLebelPosition] = useState("");

    const handleMenuLebelAnimation = (e) => {
        menuItems.map((item) => {
            if (e.target.parentElement.classList.contains(item)) {
                setLebelPosition(item);
            }
        });
    };

    return (
        <nav>
            <div className="content">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="mainMenu">
                    <ul className="menu">
                        <span
                            className="label"
                            style={{
                                left:
                                    lebelPosition === "all"
                                        ? "10px"
                                        : lebelPosition === "about"
                                        ? "72px"
                                        : lebelPosition === "projects"
                                        ? "165px"
                                        : lebelPosition === "media"
                                        ? "280px"
                                        : "10px",
                                width:
                                    lebelPosition === "all"
                                        ? "60px"
                                        : lebelPosition === "about"
                                        ? "90px"
                                        : lebelPosition === "projects"
                                        ? "110px"
                                        : lebelPosition === "media"
                                        ? "90px"
                                        : "60px",
                            }}
                        ></span>
                        {menuItems.map((menuItem) => (
                            <li
                                key={menuItem}
                                className={`${menuItem} item`}
                                onClick={handleMenuLebelAnimation}
                            >
                                <span>{menuItem}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <a href="mailto:sajjadul060@gmail.com" className="contact">
                    Gen in Touch
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
