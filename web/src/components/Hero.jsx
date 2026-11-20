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

            <a href="#overview" className="button">
                {t.explore}
            </a>

        </section>
    );
}

export default Hero;