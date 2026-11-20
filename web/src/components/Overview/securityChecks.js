export const getSecurityChecks = (t) => [
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