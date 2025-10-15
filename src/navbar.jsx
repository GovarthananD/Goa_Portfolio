import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Hero from "./hero";
import About from "./About";
import Projects from "./project";
import Contact from "./Contact";

export default function Navbar() {
    const [navBg, setNavBg] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Change navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to section smoothly
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setNavBg(true); // add navbar background on click
            setMobileOpen(false); // close mobile menu after click
        }
    };

    return (
        <div className="relative">
            {/* Navbar */}
            <nav
                className={`fixed w-full top-0 z-50 transition-colors duration-300 ${navBg ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <h1 className="text-2xl font-bold text-white">GOA</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
                        {["home", "about", "projects", "contact"].map((section) => (
                            <li
                                key={section}
                                className="cursor-pointer hover:text-indigo-400 transition capitalize"
                                onClick={() => handleScrollTo(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <HiX /> : <HiMenu />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? "max-h-64" : "max-h-0"
                        }`}
                >
                    <ul className="flex flex-col space-y-4 bg-black/90 backdrop-blur-md px-6 py-6 text-white text-lg font-medium">
                        {["home", "about", "projects", "contact"].map((section) => (
                            <li
                                key={section}
                                className="cursor-pointer hover:text-indigo-400 transition capitalize"
                                onClick={() => handleScrollTo(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>

            {/* Sections */}
            <section id="home">
                <Hero />
            </section>

            <section id="about">
            <About/>
            </section>

            <section id="projects" className="min-h-screen flex justify-center items-center">
        <Projects/>
            </section>

            <section id="contact" className="min-h-screen flex justify-center items-center bg-gray-700">
                <Contact/>
            </section>

        </div>
    );
}
