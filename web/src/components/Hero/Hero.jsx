import './CSS/main.css';

function Hero({ t }) {
    return (
        <section className="hero">

            <div className="logo">
                🐧
            </div>

            <h1>{t.title}</h1>

            <p className="subtitle">
                {t.subtitle}
            </p>


                <a
                    href="https://github.com/coderinna/LinuxSystemDetector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                >
                    <span>View Repository</span>
                    <span>↗</span>
                </a>

        </section>
    );
}

export default Hero;