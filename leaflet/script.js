$(document).ready(function(){
  let map = L.map('map',{
    center: [23.74581, 90.39347],
    zoom: 15
  });
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  //Zoom change from input field
  $(".zoomInput").on("keyup", function(){
    let zoomLevel = Number(this.value);
    map.setZoom(zoomLevel);
  });

  //Input value change when zooming
  map.on("zoom", function(){
    $(".zoomInput").val(map.getZoom());
  })

  //Remove zoom control when checkbox checked
  $("#zoom-control").on('click', function(){
    if($(this).is(':checked')){
      map.removeControl(map.zoomControl);
    }
    else{
      map.addControl(map.zoomControl);
    }
  });

  //Remove attribution when checkbox checked
  $("#attribution").on('click', function(){
    if($(this).is(':checked')){
      alert('hi')
    }
    else{
      map.addAttribution();
    }
  });
});