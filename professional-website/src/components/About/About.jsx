import './About.css';
import resumePDF from '/src/assets/David Aispuro Resume.pdf'

function About() {
    function openResume() {
        window.open(resumePDF, '_blank');
    }

    return (
        <div className="about-container">
            <div className="about-label">About</div>

            <div className="about-bottom-content">
                <p className="summary">I am a first-generation college student. I am Hispanic with both my parents being from Mexico.
                    I am from Cathedral City, CA, which is a small town right outside of Palm Springs. Some of my interests include: 
                    soccer, video games, working out, and watching shows. My main career goal is to become a Game Developer for a company
                    or becoming a Web Developer as these are the fields that really intrigue me.
                </p>

                <button className="resume" onClick={openResume}>Resume</button>
            </div>
        </div>
    );
}

export default About;