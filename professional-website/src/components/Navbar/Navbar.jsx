import './Navbar.css'

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className="nav-bar">
            <div className="hero-link" onClick={() => scrollToSection("hero")}>Hero</div>
            <div className="about-link" onClick={() => scrollToSection("about")}>About</div>
            <div className="education-link" onClick={() => scrollToSection("education")}>Education</div>
            <div className="experience-link" onClick={() => scrollToSection("experience")}>Experience</div>
            <div className="misc-link" onClick={() => scrollToSection("misc")}>Extracurricular</div>
            <div className="contact-link" onClick={() => scrollToSection("contact")}>Contact</div>
        </div>
    );
}

export default Navbar;
