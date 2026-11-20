export const checks = [
    {
        id: 'ports',
        icon: '♧',
        title: 'Open Ports',
        description: 'List listening ports, their processes and associated services.',
        command: 'ss -tulpn'
    },
    {
        id: 'ssh',
        icon: '🔒',
        title: 'SSH Logins',
        description: 'Inspect SSH authentication settings and recent login activity.',
        command: 'last'
    },
    {
        id: 'services',
        icon: '⚙',
        title: 'Running Services',
        description: 'List currently active system services.',
        command: 'systemctl --type=service --state=running'
    },
    {
        id: 'tasks',
        icon: '▦',
        title: 'Scheduled Tasks',
        description: 'Inspect scheduled cron jobs and related tasks.',
        command: 'systemctl list-timers'
    },
    {
        id: 'permissions',
        icon: '■',
        title: 'File Permissions',
        description: 'Inspect important file ownership and permissions.',
        command: 'stat /etc/passwd /etc/shadow'
    },
    {
        id: 'systemd',
        icon: '▶',
        title: 'Systemd Services',
        description: 'Analyze systemd service configuration and security.',
        command: 'systemd-analyze security'
    },
    {
        id: 'changes',
        icon: '↻',
        title: 'Changes Since Last Scan',
        description: 'Compare the current scan with the previous local scan.',
        command: 'LinuxSystemDetector local comparison'
    }
];