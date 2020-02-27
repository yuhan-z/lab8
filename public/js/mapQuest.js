function initMap() {
	L.mapquest.key = 'Ttf9ctMXTJ9eq1K1CAtmxl1FBVhUEb52';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.878800, -117.235915],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false,
	});

	L.marker([32.878800, -117.235915]).addTo(map);
}