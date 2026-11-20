
import './css/LanguageSelector.css';

function LanguageSelector({ language, setLanguage }) {
    return (
        <div className="language-selector">
            <button
                className={language === 'fi' ? 'active' : ''}
                onClick={() => setLanguage('fi')}
                aria-label="Suomi"
            >
                <span className="flag">🇫🇮</span>
                <span>FI</span>
            </button>

            <button
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
                aria-label="English"
            >
                <span className="flag">🇬🇧</span>
                <span>EN</span>
            </button>
        </div>
    );
}

export default LanguageSelector;