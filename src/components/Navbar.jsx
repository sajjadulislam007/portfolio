import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo(sajjad).svg";
import icons from "../icons";

//styles
import "../styles/_navbar.scss";

//Menu Items Array
const menuItems = ["all", "about", "projects", "media"];

const Navbar = () => {
    const [lebelPosition, setLebelPosition] = useState("");

    const handleMenuLebelAnimation = (e) => {
        menuItems.map((item, index) => {
            if (e.target.parentElement.classList.contains(item)) {
                setLebelPosition(item);
                console.log(index + 1);
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
                                        ? "68px"
                                        : lebelPosition === "projects"
                                        ? "150px"
                                        : lebelPosition === "media"
                                        ? "248px"
                                        : "10px",
                                width:
                                    lebelPosition === "all"
                                        ? "50px"
                                        : lebelPosition === "about"
                                        ? "75px"
                                        : lebelPosition === "projects"
                                        ? "90px"
                                        : lebelPosition === "media"
                                        ? "75px"
                                        : "50px",
                            }}
                        ></span>
                        {menuItems.map((menuItem) => (
                            <li
                                key={menuItem}
                                className={`${menuItem} item`}
                                onClick={handleMenuLebelAnimation}
                            >
                                <span
                                    className={`${
                                        lebelPosition ? "active" : ""
                                    }`}
                                >
                                    {menuItem}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <a href="mailto:sajjadul060@gmail.com" className="contact">
                    Contact {icons.email_black}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
