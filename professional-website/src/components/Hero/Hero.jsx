import './Hero.css'
import profilePicture from '/src/assets/profile-image.png'

function Hero() {
    return(
        <div className="hero-container">
            <div className="content-container">
                <div className="left-content">
                    <p className='name'>David Aispuro</p>
                    <p className='description'>I am an undergraduate student at the University of California-Riverside majoring in Computer Science. I hope to earn my degree and obtain a career in Game Development or 
                        Web Development.
                    </p>
                </div>

                <div className="right-content">
                    <img src={profilePicture} alt="Profile Picture" />
                </div>
            </div>
       </div>

    );
}

export default Hero