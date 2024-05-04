import './Footer.css';

function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-title">Contact Me</div>
            <div className="footer-bottom-content">
                <span className="contact-email">Email: <a href="mailto:daisp002@ucr.edu">daisp002@ucr.edu</a></span>
                <div className="contact-logos">
                    <a href="https://github.com/DavidA346" target="_blank"><img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png" className="small-image" alt="Github Icon" /></a> 
                    <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bj6RtslwZRHS6oUCAnh%2BPcQ%3D%3D" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-color-icon-2048x2048-f46hbtvj.png" className="small-image" alt="LinkedIn Icon" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
