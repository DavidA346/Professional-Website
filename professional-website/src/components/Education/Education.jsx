import './Education.css'

function Education() {
    return(
        <div className="education-container" id="education">
            <div className="container-title">Education & Skills</div>

            <div className="education-bottom-content">

                <div className="education-left-content">
                    <div className="ucr-info">
                        <p>University of California - Riverside <br />
                            Fall 2021 - Present
                        </p>
                        <p>Major: Computer Science</p>
                        <p>Relevant Coursework:</p>
                        <ul>
                            <li>Data Structures & Algorithms</li>
                            <li>Software Construction</li>
                            <li>Web Development</li>
                            <li>Logic Design</li>
                            <li>Linear Algebra</li>
                        </ul>

                    </div>

                    <div className="high-school-info">
                        <p>Cathedral City High School <br />
                            August 2017 - June 2021
                        </p>
                        <p>GPA: 4.556</p>
                    </div>
                </div>

                <div className="skills-right-content">
                    <div className="skills-content">
                        <img className="skill-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="C++ Logo" />
                        <img className="skill-logo" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" />
                        <img className="skill-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="HTML Logo" />
                        <img className="skill-logo" src="https://i.imgflip.com/6ejuoo.png" alt="CSS Logo" />
                        <img className="skill-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png" alt="Javascript Logo" />
                        <img className="skill-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python Logo" />
                        <img className="skill-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" />
                    </div>
                </div>

            </div>
            
       </div>

    );
}

export default Education