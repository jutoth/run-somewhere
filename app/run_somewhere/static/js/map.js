console.log("Initializing map...");

const map = L.map('map').setView([51.505, -0.09], 13);

console.log("Adding tile layer...");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

document.getElementById('zoom').addEventListener('input', function() {
    console.log("Zoom level changed:", this.value);
    map.setZoom(this.value);
});

document.getElementById('layer').addEventListener('change', function() {
    console.log("Layer changed:", this.value);
    const layer = this.value;
    if (layer === 'satellite') {
        L.tileLayer('https://{s}.satellite.maps.api/{z}/{x}/{y}.png', {
            attribution: '© Satellite Imagery'
        }).addTo(map);
    } else {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    }
});
