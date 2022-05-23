import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg"
import classes from "./nav.module.css"

export default function Nav() {
    // const [click, setClick] = useState(false)
    // const [button, setButton] = useState(false)

    // const handleClick = () => setClick(!click)
    // const closeMobileMenu = () => setClick(false)

    // const showButton = () => {
    //     if (window.innerWidth <= 1352) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

    // useEffect(() => {
    //     showButton();
    //     window.addEventListener("resize", showButton)
    //     window.removeEventListener("resize", showButton)
    // }, []);

    return (
        <header className={classes.header}>
            <nav>
                <div><NavLink to="/memeboi" className={navData => navData.isActive ? classes.active : ""}>
                    <img src={logo} />
                </NavLink></div>
                <ul>
                    <li><NavLink to="/starboi" className={navData => navData.isActive ? classes.active : ""}>
                        StarBoi
                    </NavLink></li>
                    <li><NavLink to="/countyboi" className={navData => navData.isActive ? classes.active : ""}>
                        CountyBoi
                    </NavLink></li>
                    <li><NavLink to="/yeeeenaaaa" className={navData => navData.isActive ? classes.active : ""}>
                        YeeeeNaaaa
                    </NavLink></li>
                    <li><NavLink to="/addthings" className={navData => navData.isActive ? classes.active : ""}>
                        AddThings
                    </NavLink></li>
                    <li><NavLink to="/toplevelboi" className={navData => navData.isActive ? classes.active : ""}>
                        TopLevelBoi
                    </NavLink></li>
                    <li><NavLink to="/conditional" className={navData => navData.isActive ? classes.active : ""}>
                        Conditional
                    </NavLink></li>
                    <li><NavLink to="/windowboi" className={navData => navData.isActive ? classes.active : ""}>
                        WindowBoi
                    </NavLink></li>
                    <li><NavLink to="/formyboi" className={navData => navData.isActive ? classes.active : ""}>
                        FormyBoi
                    </NavLink></li>
                    <li><NavLink to="/formyrework" className={navData => navData.isActive ? classes.active : ""}>
                        FormyRework
                    </NavLink></li>
                    <li><NavLink to="/anotherformyboi" className={navData => navData.isActive ? classes.active : ""}>
                        AnotherFormyBoi
                    </NavLink></li>
                    <li><NavLink to="/userefprac" className={navData => navData.isActive ? classes.active : ""}>
                        UseRef
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}