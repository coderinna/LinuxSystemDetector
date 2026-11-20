function Navigation({ checks, selectedCheck, onSelect }) {
    return (
        <nav className="navigation">
            {checks.map((check) => (
                <button
                    key={check.id}
                    className={`nav-item ${
                        selectedCheck.id === check.id
                            ? 'active'
                            : ''
                    }`}
                    onClick={() => onSelect(check)}
                >
                    <span className="nav-icon">
                        {check.icon}
                    </span>

                    <span>
                        {check.title}
                    </span>
                </button>
            ))}
        </nav>
    );
}

export default Navigation;