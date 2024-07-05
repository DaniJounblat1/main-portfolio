import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
        <section className="projects">
            <h1 className="mainTitle">Projects</h1>
            <div className="project">
                <img src="/img/portfolio.jpg" alt="Portfolio Space Theme" />
                <div className="details">
                    <a
                        href="https://github.com/DaniJounblat1/nextjs-portfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <h2>Portfolio Space Theme</h2>
                    <a
                        href="https://danijounblat.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
            <div className="project">
                <img src="/img/samsung.jpg" alt="Samsung E-Commerce" />
                <div className="details">
                    <a
                        href="https://github.com/DaniJounblat1/php-samsung-website.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <h2>Samsung E-Commerce</h2>
                    <a
                        href="https://samsungdemo.kesug.com/?i=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
