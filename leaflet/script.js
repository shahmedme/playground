let lvl,
    map = L.map('map', {
      center: [23.74753, 90.39256],
      zoom: 16
    })
  
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

map.on('zoom', function(){
  lvl = map.getZoom();
  document.getElementById('zmlvl').value = lvl;
})

function changeZoom(){
  lvl = Number(document.getElementById('zmlvl').value);
  map.setZoom(lvl);
}

$(document).ready(function(){
    $('#zmlvl').on('change', function(){
        changeZoom();
    });
});