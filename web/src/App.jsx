import { useState } from 'react';

import Hero from './components/Hero/Hero.jsx';
import Overview from './components/Overview/Overview.jsx';
import Info from './components/Info/Info.jsx';
import LanguageSelector from './components/LanguageSelector/LanguageSelector.jsx';
import { translations } from './data/translations.js';

function App() {
    const [language, setLanguage] = useState('fi');

    const t = translations[language];

    return (
        <div className="container">
<LanguageSelector
    language={language}
    setLanguage={setLanguage}
/>
            <Hero t={t} />

            <Overview t={t} />

            <Info t={t} />

            <footer>
                {t.footer}
            </footer>

        </div>
    );
}

export default App;