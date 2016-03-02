$(function() {
  
  $("li").each(function(index) {
    var navItem = $(this).text().toLowerCase();;
    var re = new RegExp(navItem);
    console.log(re);
    if (re.test(window.location.href)) {
      $(this).addClass("button");
    } else if (/index/.test(window.location.href) && navItem === "menu") {
      $(this).addClass("button");
    }
  });

});