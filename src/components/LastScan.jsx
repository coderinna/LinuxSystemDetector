function LastScan() {
    return (
        <div className="sidebar-footer">
            <div className="last-scan">
                <div className="status-dot">
                    ✓
                </div>

                <div>
                    <div className="last-scan-title">
                        Last Scan:
                    </div>

                    <div className="last-scan-time">
                        Not yet scanned
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastScan;