import React, { useEffect, useState } from "react";

const Footer = () => {
    const [theme, setTheme] = useState("dark"); // Default to dark mode
    const [color, setColor] = useState("#682ae9");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleColorChange = event => {
        const newColor = event.target.value;
        setColor(newColor);
        document.documentElement.style.setProperty("--main", newColor);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-name">
                    COPY RIGHTS <span> @ DANI JOUNBLAT</span>
                </p>
                <div className="footer-social">
                    <a
                        href="https://github.com/DaniJounblat1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/img/svg/github-web.svg"
                            alt="GitHub"
                            className="github-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dani-jounblat-b80075301"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/svg/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a
                        href="https://www.instagram.com/bonmobp?igsh=MWlkczZhejEwdzBteg=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/svg/instagram.svg" alt="Instagram" />
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-button"
                    >
                        {theme === "light" ? (
                            <img src="/img/svg/dark.svg" alt="Dark Mode" />
                        ) : (
                            <img src="/img/svg/light.svg" alt="Light Mode" />
                        )}
                    </button>
                    <div className="color-picker">
                        <input
                            type="color"
                            id="colorInput"
                            value={color}
                            onChange={handleColorChange}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
