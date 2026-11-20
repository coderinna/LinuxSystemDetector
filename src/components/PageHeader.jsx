function PageHeader({ selectedCheck }) {
    return (
        <header className="page-header">
            <div className="page-icon">
                {selectedCheck.icon}
            </div>

            <div>
                <h1>
                    {selectedCheck.title}
                </h1>

                <p>
                    {selectedCheck.description}
                </p>
            </div>
        </header>
    );
}

export default PageHeader;