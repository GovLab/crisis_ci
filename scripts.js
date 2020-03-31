$(document).ready(function() {
  var target = $('.how-banner').hide(),
      items = $('.how-banner').children(),
      counter = 0;
  function bannerFade() {
      target.fadeIn(2000).delay( 1500 ).fadeOut(2000,function() {
          bannerFade();
      }).html(items[counter++]);
      if (counter == items.length) {
          counter = 0;
      } 
  }
  bannerFade();
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

