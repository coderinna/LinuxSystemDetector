function CommandPanel({ selectedCheck, onRun }) {
    function copyCommand() {
        navigator.clipboard.writeText(selectedCheck.command);
    }

    return (
        <section className="panel command-panel">
            <div className="panel-title">
                <span>⌄</span>
                Command to run:
            </div>

            <div className="command-box">
                <span className="terminal-prompt">
                    $
                </span>

                <code>
                    {selectedCheck.command}
                </code>

                <button
                    className="copy-button"
                    title="Copy command"
                    onClick={copyCommand}
                >
                    ▣
                </button>
            </div>

            <button
                className="run-button"
                onClick={onRun}
            >
                <span>▶</span>
                Run Check
            </button>
        </section>
    );
}

export default CommandPanel;