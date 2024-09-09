const dateTimeElement = document.getElementById('datetime');
const now = new Date();
dateTimeElement.textContent = now.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}) + ' ' + now.toLocaleTimeString('es-ES');