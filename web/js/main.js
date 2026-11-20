const components = [
    {
        id: 'hero',
        file: './components/hero.html'
    },
    {
        id: 'overview',
        file: './components/overview.html'
    },
    {
        id: 'info',
        file: './components/info.html'
    }
];

async function loadComponents() {
    for (const component of components) {
        const response = await fetch(component.file);

        if (!response.ok) {
            throw new Error(
                `Failed to load ${component.file}`
            );
        }

        const html = await response.text();

        document.getElementById(component.id).innerHTML = html;
    }

    const { setLanguage, initializeLanguage } =
        await import('./language.js');

    initializeLanguage();
}

loadComponents().catch(error => {
    console.error('Component loading error:', error);
});