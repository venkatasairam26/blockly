import { useState } from "react";
import { Link } from "react-router-dom";


import "./index.css";

/* This is booastrap navbar code i was changed to react code :
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <div className="logo-container d-flex align-items-center">
                <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750864837/Logo_uvqufa.svg" alt="site logo" /> 
                <span>ANISH KUMAR SINHA</span>
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <button class="switch_theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <img src={themeBtnImg} alt="theme switch" />
            </button>
        </div>
    </div>
</nav>
*/

const Portfolio = () => {
    const [theme, setTheme] = useState("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [renderPage, setRenderPage] = useState("home");

    const logoImg = theme === "light"
        ? "https://res.cloudinary.com/dbbpvtoge/image/upload/v1750864837/Logo_uvqufa.svg"
        : "https://res.cloudinary.com/dbbpvtoge/image/upload/v1750868364/white-logo_hjkw4a.png";
    const themeBtnImg = theme === "light"
        ? "https://res.cloudinary.com/dbbpvtoge/image/upload/v1750864839/Moon_jbge5p.png"
        : "https://res.cloudinary.com/dbbpvtoge/image/upload/v1750867548/sun_pvmynv.png";

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const renderSocialLinksAndEmail = () => {
        return (
            <div className="social-links-email">
                <div className="social-links ">
                    <Link href="https://www.facebook.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/facebook_fzxa3l.png" alt="facebook" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/facebook-white_gvmxlf.png" alt="facebook" />}
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/insta-black_tu9ukz.png" alt="instagram" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/insta-white_i2tgmr.png" alt="instagram" />}
                    </Link>
                    <Link href="https://twitter.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920252/twitter_kuzx5w.png" alt="twitter" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/twitter-white_s5rfw5.png" alt="twitter" />}
                    </Link>
                    <Link href="https://github.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/git_iezoih.png" alt="github" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/git-white_tto5fy.png" alt="github" />}
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/linked-in_khvdaz.png" alt="linkedin" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/linked-in-white_wt1cem.png" alt="linkedin" />}
                    </Link>
                    <Link href="https://www.telegram.org/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/telegram_qpyqrm.png" alt="telegram" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/telegram-white_gb7vvy.png" alt="telegram" />}
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank" className="social-icon">
                        {theme === "light" ? <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920251/koo_vqvllu.png" alt="koo" /> : <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750920588/koo_white_cpyd9o.png" alt="koo" />}
                    </Link>

                </div>
                <div className="email-cont"><a target="_blank" className="email" href="mailto:sinhaanishkumar@outlook.com">sinhaanishkumar@outlook.com</a></div>
            </div>
        )
    }

    return (
        <div className={`app-container ${theme}`}>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-container">
                        <img src={logoImg} alt="site logo" className="logo-img" />
                        <span>ANISH KUMAR SINHA</span>
                    </div>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#" className={`nav-link ${renderPage === "home" ? 'active' : ''}`} onClick={() => setRenderPage("home")}>Home</a>
                        <a href="#" className={`nav-link ${renderPage === "about" ? 'active' : ''}`} onClick={() => setRenderPage("about")}>About</a>
                        <a href="#" className={`nav-link ${renderPage === "resume" ? 'active' : ''}`} onClick={() => setRenderPage("resume")}>Resume</a>
                        <a href="#" className={`nav-link ${renderPage === "skills" ? 'active' : ''}`} onClick={() => setRenderPage("skills")}>Skills</a>
                        <a href="#" className={`nav-link ${renderPage === "projects" ? 'active' : ''}`} onClick={() => setRenderPage("projects")}>Projects</a>
                        <a href="#" className={`nav-link ${renderPage === "contact" ? 'active' : ''}`} onClick={() => setRenderPage("contact")}>Contact</a>
                        <button className="switch_theme" onClick={toggleTheme}>
                            <img src={themeBtnImg} alt="theme switch" />
                        </button>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                        <span className={isMenuOpen ? 'open' : ''}></span>
                    </button>
                </div>
            </nav>

            {renderPage === "home" && <div className="content d-flex flex-row align-items-center justify-content-between">
                <div className="info ">
                    <h2>Hello!</h2>
                    <h1>
                        I’m <span>Anish</span>
                        <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750864835/Wave_xefxoq.svg" alt="wave" />
                    </h1>
                    <p className="info-p">UI/UX Designer, Front-End Developer & Thinker.<br />
                        Based in India.</p>
                    <div className="btn-container">
                        <button className="btn-cv">Download CV</button>
                        <button className="btn-contact">Get in Touch!</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750864840/person_yk3zxa.png" alt="person-img" />
                </div>
            </div>}

            {renderPage === "about" && <div className="about">
                <div className="about-left">

                </div>
                <div className="about-info">
                    <h2 className="about-info-h2"><b>T</b>his is it. ;</h2>
                    <p className="about-info-p">Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.<br/>

                    He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, <b>India.</b> Where he’s working as an independent creative. </p>

                    <p className="about-info-p">His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <b>3D floor plan.</b></p>

                    <p className="about-info-p">When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                </div>
                <div className="about-left-image">
                    <img src="https://res.cloudinary.com/dbbpvtoge/image/upload/v1750909384/hand_gqturc.png" alt="about-left-img" />
                </div>
            </div>}
            {renderSocialLinksAndEmail()}
        </div>
    );
};

export default Portfolio;