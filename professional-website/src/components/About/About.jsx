import './About.css';
import resumePDF from '/src/assets/David Aispuro Resume.pdf'

function About() {
    function openResume() {
        window.open(resumePDF, '_blank');
    }

    return (
        <div className="about-container" id="about">
            <div className="about-label">About Me</div>

            <div className="about-bottom-content">
                <div className="personal-info">
                    <p>Personal Information:</p>
                    <ul> 
                        <li>Location: Palm Springs, CA</li>
                        <li>Age: 20</li>
                        <li>Email: daisp002@ucr.edu</li>
                    </ul>
                </div>

                <div className="interests-info">
                    <p>Interests:</p>
                    <ul> 
                        <li>Soccer</li>
                        <li>Gym</li>
                        <li>Coding</li>
                        <li>Video Games</li>
                    </ul>
                </div>

                <div className="career-info">
                    <p>Career Goals:</p>
                    <ul> 
                        <li>Game Developer</li>
                        <li>Software Engineer</li>
                        <li>Web Developer</li>
                    </ul>
                </div>

                <div className="resume-button">
                    <button className="resume" onClick={openResume}>Resume</button>
                </div>
            </div>
        </div>
    );
}

export default About;