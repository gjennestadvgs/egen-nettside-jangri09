    document.getElementById('menuButton').addEventListener('click', function() {
        var menuContent = document.getElementById('menuContent');
        if (menuContent.classList.contains('hidden')) {
            menuContent.classList.remove('hidden');
        } else {
            menuContent.classList.add('hidden');
        }
    });