$(document).on('click', 'i.fa-times', function() {
  $(".modal-wrapper").hide();
});

$("body").keydown(function(e) {
  if(e.which == 37) { // left     
      $("a.previous").trigger("click");
  }
  else if(e.which == 39) { // right     
      $("a.next").trigger("click");
  }
  else if(e.which == 27) { // esc   
      $(".modal-wrapper").hide();
  }
});

$(document).on('click', 'a.controls', function() {
  var index = $(this).attr('href');
  var src = $('ul#photo-grid li:nth-child('+ index +') img').attr('src');
  $('.modal img').attr('src', src);

  //increment and decrement that next and previous button index
  var newPrevIndex = parseInt(index) - 1;
  var newNextIndex = parseInt(newPrevIndex) + 2;
   
  if($(this).hasClass('previous')){
      $(this).attr('href', newPrevIndex);
      $('a.next').attr('href', newNextIndex);
  }else{
      $(this).attr('href', newNextIndex);
      $('a.previous').attr('href', newPrevIndex);
  }

  //hide arrows if first or last image
  var total = $('ul#photo-grid li').length + 1;
  //hide next button
  if(total === newNextIndex){
      $('a.next').hide();
  }else{
      $('a.next').show()
  }
  //hide previous button
  if(newPrevIndex === 0){
      $('a.previous').hide();
  }else{
      $('a.previous').show()
  }

 return false;
});

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
    var img = '<div class="modal"><img src="' + src + '"/></div>';

    var index = $(this).parent('li').index();
    var rightArrow = '<a class="controls next" href="'+ (index+2) + '"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>';
    var leftArrow = '<a class="controls previous" href="' + (index) + '"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>';
    var closeIcon = '<i class="fa fa-times" aria-hidden="true"></i>';

    var html = closeIcon + leftArrow + img + rightArrow;

    //give img and show the model
    $(".modal-wrapper").html(html).show();
    //this will hide or show the correct arrows:
    $('a.controls').trigger('click');
  });

  //hide modal
  // $(".modal-wrapper").on("click", function() {
  //   $(".modal-wrapper").hide();
  // });

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