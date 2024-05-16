document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([4.60971, -74.08175], 15); // Reemplaza con la latitud y longitud de tu dirección

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([4.60971, -74.08175]).addTo(map) // Reemplaza con la latitud y longitud de tu dirección
        .bindPopup('ReforHome')
        .openPopup();

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado.');
    });
});
