$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } /*else {
        $(tag).removeClass("visible");
      }*/
    }
  });
  function SpotifySour() {
    window.open("https://open.spotify.com/album/6s84u2TUpR3wdUv4NgKA2j");
  }
  function DriversLicense() {
    lwindow.open("https://www.youtube.com/watch?v=f_rYWBle1_4");
  }