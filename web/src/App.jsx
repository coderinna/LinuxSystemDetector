
import { useState } from 'react';
import { Routes, Route, Link  } from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx';
import Overview from './components/Overview/Overview.jsx';
import Info from './components/Info/Info.jsx';
import LanguageSelector from './components/LanguageSelector/LanguageSelector.jsx';
import ProjectPreview from './components/ProjectPreview/ProjectPreview.jsx';
import Demo from './Demo/App.jsx';

import './css/demo.css';

import { translations } from './data/translations.js';

function Home() {
    const [language, setLanguage] = useState('fi');
    const t = translations[language];

    return (
        <div className="container">
            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />
      
   <Link to="/demo/" className="demo-button">
    <span className="demo-button-icon">▶</span>
    <span>Katso sovelluksen demo</span>
    <span className="demo-button-arrow">→</span>
</Link>
            <Hero t={t} />
      
            <ProjectPreview />
            <Overview t={t} />
            <Info t={t} />

            <footer>{t.footer}</footer>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo/" element={<Demo />} />
        </Routes>
    );
}

export default App;
