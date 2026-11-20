function Overview({ t }) {
    const checks = [
        {
            icon: '◉',
            title: t.openPorts,
            description: t.openPortsDescription
        },
        {
            icon: '🔒',
            title: t.sshLogins,
            description: t.sshDescription
        },
        {
            icon: '⚙',
            title: t.runningServices,
            description: t.servicesDescription
        },
        {
            icon: '▦',
            title: t.scheduledTasks,
            description: t.tasksDescription
        },
        {
            icon: '■',
            title: t.filePermissions,
            description: t.permissionsDescription
        },
        {
            icon: '▶',
            title: t.systemdServices,
            description: t.systemdDescription
        }
    ];

    return (
        <section className="overview" id="overview">

            <h2>{t.overview}</h2>

            <p>{t.overviewDescription}</p>

            <div className="grid">

                {checks.map((check, index) => (
                    <div className="card" key={index}>

                        <div className="card-icon">
                            {check.icon}
                        </div>

                        <h3>{check.title}</h3>

                        <p>{check.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Overview;