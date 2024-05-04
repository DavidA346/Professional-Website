import './Experience.css'

function Experience() {
    return (
        <div className="experience-container">
            <div className="experience-container-title">Experience & Projects</div>

            <div className="experience-bottom-content">

                <div className="experience-left-content">
                    <div className="its-info">
                        <b>ITS Multimedia Operator</b> - <em>University of California, Riverside</em>  (2023 - Present)
                            <ul>
                                <li>Supported the IT department in handling technology rollout and maintenance</li>
                                <li>Troubleshooted Internet and wireless and wired network access problems</li>
                                <li>Assisted department setup equipment for meetings, events, and operations</li>
                            </ul>
                    </div>
                </div>

                <div className="project-right-content">
                    <div className="project-info">
                    <b>Soccer Pong</b> - <em>Game Development with raylib</em>
                    <ul>
                        <li>Developed a Soccer Pong game using the raylib game development library and C++, showcasing 
                            a combination of graphics programming and game logic.</li>
                        <li>Implemented features such as player controls, ball physics, and scoring mechanics to create an 
                            engaging and enjoyable gaming experience.</li>
                        <li>Gained insights into real-time rendering, collision detection, and event handling, contributing to a
                            comprehensive skill set in game development</li>
                        <li>Independently managed the project from conception to completion, showcasing initiative, 
                            problem-solving skills, and project management abilities.</li>
                    </ul>
                    <br />
                    <b>Chess Game</b> - <em>Terminal Based C++</em>
                    <ul>
                        <li>Developed a fully functional chess game implemented in C++ within the terminal environment</li>
                        <li>Utilized GitHub for collaborative version control, ensuring efficient code management and
                            seamless teamwork</li>
                        <li>Fostered effective communication and collaboration within the team to meet project deadlines and achieve project goals.</li>
                        <li>Demonstrated proficiency in utilizing Agile practices, such as sprint planning, daily stand-ups, and regular retrospectives, 
                            to enhance project efficiency and adaptability.</li>
                    </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience