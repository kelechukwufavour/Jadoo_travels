document.addEventListener("DOMContentLoaded", function() {
    function loadSection(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error('Error loading section:', error));
    }

    loadSection('header', 'header.html');
    loadSection('hero', 'hero.html');
    loadSection('categories', 'categories.html');
    loadSection('destinations', 'destinations.html');
    loadSection('testimonials', 'testimonials.html');
    loadSection('partners', 'partners.html');
    loadSection('subscribe', 'subscribe.html');
    loadSection('footer', 'footer.html');
});
