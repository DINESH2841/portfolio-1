(function() {
    const themes = ['light', 'dark', 'black'];
    
    function getStoredTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    }

    function updateIcon(theme) {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;
        
        // Simple icon logic
        if (theme === 'light') btn.innerHTML = '<i class="fas fa-sun"></i>';
        else if (theme === 'dark') btn.innerHTML = '<i class="fas fa-moon"></i>';
        else btn.innerHTML = '<i class="fas fa-circle"></i>';
    }

    function toggleTheme() {
        const current = getStoredTheme();
        const nextIndex = (themes.indexOf(current) + 1) % themes.length;
        setTheme(themes[nextIndex]);
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        const stored = getStoredTheme();
        setTheme(stored);
        
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
            // Add utility classes for styling if missing
            btn.className = "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xl w-10 h-10 flex items-center justify-center";
            btn.style.color = 'var(--text)';
        }
    });
})();