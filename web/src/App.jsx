import { useState } from 'react';

import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import Info from './components/Info.jsx';

import { translations } from './data/translations.js';

function App() {
    const [language, setLanguage] = useState('fi');

    const t = translations[language];

    return (
        <div className="container">

            <div className="language-selector">
                <button
                    className={language === 'fi' ? 'active' : ''}
                    onClick={() => setLanguage('fi')}
                >
                    FI
                </button>

                <span>|</span>
                
                <button
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                >
                    EN
                </button>

            </div>

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