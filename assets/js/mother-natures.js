$(function() {
  
  // switch green box depending on which page you are viewing
  // possibly make button class present but hidden to avoid choppy entrance
  $("li").each(function(index) {
    var navItem = $(this).text().toLowerCase();;
    var re = new RegExp(navItem);
    if (re.test(window.location.href)) {
      $(this).addClass("button");
    } else if (/index/.test(window.location.href) && navItem === "home") {
      $(this).addClass("button");
    }
  });

  //footer icons to display phone numbers and email on click
  $(".fa-envelope-o").on("click", function() {
    $("#phone").hide();
    $("#mail").toggle();
  });

  $(".fa-phone").on("click", function() {
    $("#mail").hide();
    $("#phone").toggle();
  });

  //photo viewer modal
  $("#photo-grid li img").on("click", function() {
    var src = $(this).attr('src');
    var img = '<img src="' + src + '"/>';

    //give img and show the model
    $(".modal").html(img);
    $(".modal-wrapper").show();
  });

  //hide modal
  $(".modal-wrapper").on("click", function() {
    $(".modal-wrapper").hide();
  });

});

//google maps API
var map1;
var map2;
var map3;
var myLatLng;
function initMap() {
  var mapRothesayAve = {lat: 45.299253, lng: -66.038516}
  var mapMacallister = {lat: 45.307627, lng: -66.014442}
  var mapBrunswick = {lat: 45.274205, lng: -66.060968}
  map1 = new google.maps.Map(document.getElementById("map-rothesay-ave"), {
    center: mapRothesayAve,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: mapRothesayAve,
    map: map1
  });

  map2 = new google.maps.Map(document.getElementById("map-mcallister"), {
    center: mapMacallister,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: mapMacallister,
    map: map2
  });

  map3 = new google.maps.Map(document.getElementById("map-brunswick"), {
    center: mapBrunswick,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: mapBrunswick,
    map: map3
  });
}