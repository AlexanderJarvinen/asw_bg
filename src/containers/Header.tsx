import { AnchorLink } from "react-anchor-navigation";
import './Header.css';
import { useState } from "react";
import { SerbianFlag, EnglishFlag, RussianFlag } from "../components/flags/FlagIcons.tsx";

export const Header = ({ list }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav>
            <a href="/" className="brandName">
                <img src="./logo.jpg" className="logo"/>
            </a>
            <div className="navigation-menu">
                { list.map((item) => (
                    <li key={item.id}>
                        <AnchorLink href={`#${item.id}`} activeClassName="selected">{item.title}</AnchorLink>
                    </li>
                )) }
            </div>
            <div className="languages">
                <span className="language" ><SerbianFlag  /></span>
                <span className="language" ><EnglishFlag /></span>
                <span className="language" ><RussianFlag /></span>
            </div>

            <button className="hamburger">
                {/* icon from heroicons.com */}
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
