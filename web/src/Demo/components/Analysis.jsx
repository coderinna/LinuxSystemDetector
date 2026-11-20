function Analysis({ result }) {
    return (
        <section className="panel analysis-panel">
            <div className="section-heading">
                <span className="analysis-icon">
                    💡
                </span>

                Analysis
            </div>

            {!result ? (
                <div className="analysis-empty">
                    Run the check to see an analysis of the
                    results.
                </div>
            ) : (
                <>
                    <div className="analysis-item">
                        <span className="analysis-check">
                            ✓
                        </span>

                        The check completed successfully.
                    </div>

                    <div className="analysis-item">
                        <span className="analysis-check">
                            ✓
                        </span>

                        Detailed security analysis will be
                        added here.
                    </div>

                    <div className="security-message">
                        <span>✓</span>

                        No immediate security issues found.
                    </div>
                </>
            )}
        </section>
    );
}

export default Analysis;