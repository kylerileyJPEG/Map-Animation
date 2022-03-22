const busStops = [
    [-117.2531, 32.7252],
    [-117.2470, 32.7495],
    [-117.2570, 32.7963],
    [-117.2575, 32.8571],
    [-117.295425, 33.039139],
  ];
  
  mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZWNyaWxleTkyIiwiYSI6ImNsMHptbTNjcTJia3AzZW9wM21xeDF2dzgifQ.CgUGKqfcPVugDoUbSVQvcw';
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kylecriley92/cl12g8f97000s15ot8ft5zit4',
    center: [-117.2531, 32.7252],
    zoom: 14,
  });
  
    var marker = new mapboxgl.Marker()
        .setLngLat([-117.2531, 32.7252])
        .addTo(map);

  var counter = 0;  
  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }

  console.log()
  