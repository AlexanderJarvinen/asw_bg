import { AnchorLink } from "react-anchor-navigation";
import './Header.css';
import { useState } from "react";
import { SerbianFlag, EnglishFlag, RussianFlag } from "../components/flags/FlagIcons.tsx";
import {LOCALES} from "../helpers/i18n/locales.ts";

export const Header = ({ list, setLocale }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav>
            <a href="/" className="brandName">
                <img src="./logo.jpg" className="logo"/>
            </a>
            <div className={
                `navigation-bar ${isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"}`
            }>
                { list.map((item) => (
                    <li key={item.id} onClick={() => {
                        setIsNavExpanded(false)
                    }}>
                        <AnchorLink href={`#${item.id}`} activeClassName="selected">{item.title}</AnchorLink>
                    </li>
                )) }
            </div>
            <div className="languages">
                <span className="language"  onClick={() => {
                    setLocale(LOCALES.SERBIAN)
                }}><SerbianFlag  /></span>
                <span className="language" onClick={() => {
                    setLocale(LOCALES.ENGLISH)
                }}><EnglishFlag /></span>
                <span className="language" onClick={() => {
                    setLocale(LOCALES.RUSSIAN)
                }}><RussianFlag /></span>
            </div>

            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </nav>

    );
}
