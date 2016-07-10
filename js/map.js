const canvas = document.getElementById('mapCanvas');

const latlng = new google.maps.LatLng(33.956287, 131.245034);

const mapOptions = {
	zoom: 18,
	center: latlng
}

const map = new google.maps.Map(canvas, mapOptions);