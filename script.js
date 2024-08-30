// Este script podría ser utilizado para agregar un mapa interactivo en la página
function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
    };
    var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
}
