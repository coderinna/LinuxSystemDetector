function Result({ result }) {
    return (
        <section className="panel result-panel">
            <div className="section-heading">
                <span className="success-icon">
                    ✓
                </span>

                Result:
            </div>

            <div className="terminal-output">
                {result ? (
                    <pre>{result.output}</pre>
                ) : (
                    <pre>
                        No check has been executed yet.
                    </pre>
                )}
            </div>
        </section>
    );
}

export default Result;