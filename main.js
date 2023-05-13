$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

var first = {
    "arcgis": "100%",
    "qgis": "100%",
    "R": "90%",
    "python": "80%",
    "SQL": "85%"
  };
  
  var multiply = 4;
  
  $.each( first, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  })
  

  var second = {
    "html": "95%",
    "javascript": "93%",
    "openlayers": "92%",
    "leaflet": "91%",
    "mapbox": "91%",
    "geoserver": "90%",
    "postgis":"90%"
  };
  
  var multiply = 4;
  
  $.each( second, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });

  var third = {
    "creativity": "100%",
    "motivation": "100%",
    "vector": "100%",
    "dataset": "100%",
    "detail": "100%",
    "problem":"100%"
  };
  
  var multiply = 4;
  
  $.each( third, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });



  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}