/*$(window).on('load',function(){
	setTimeout(function(){
        $('.se-pre-con').fadeOut('slow');
        $("#misresenas").slick();
    },1000);
});*/

$(document).ready(function () {

    AOS.init({
        duration: 500
    });    
$(".container-fluid1").find('.row').removeClass('row');
    if (navigator.appVersion.indexOf("Mac")!=-1){
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            $('body').addClass('safari');
        } else if (navigator.userAgent.search("Chrome") >= 0) {
            $('body').addClass('chrome');
        }
	}

    function splitColumn(){
        var isMobile = $(window).width() <= 768;
        var containerWidth = $('section').outerWidth();
        var halfContainer = containerWidth / 2 - $('.container-fluid').width() / 2;
        var column = $('.split-column').find('> .row > div');
        var columnfull = $('.split-column-full').find('> .row > div');
    
        if ($('section').hasClass('split-column')) {
            if (!isMobile) {
                column.css('padding-left', (halfContainer) + 'px');
                column.css('padding-right', '30px');
            } else {
                column.css('padding-left', '15px');
                column.css('padding-right', '15px');
            }
        }
    
        if ($('section').hasClass('split-column-full')) {
            if (!isMobile) {
                columnfull.css('padding-right', '30px');
                columnfull.css('padding-left', '30px');
            } else {
                columnfull.css('padding-right', '15px');
                columnfull.css('padding-left', '15px');
            }
        }
    }

    splitColumn();

    $(window).on('resize', function () {
        splitColumn();
    });

    var $slickElement = $('.team-carousel');
    var $status = $('.counter-info');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = ((currentSlide ? currentSlide : 0) + 1).toString().padStart(2, '0');
        $status.html('<span class="current-slide">' + i + '</span>/<span class="total-slides">' + (slick.slideCount).toString().padStart(2, '0') + '</span>');
    });

    $slickElement.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.awards-carousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });


var $slickQuote = $('.blockquote-carousel');
    var $statusQuote = $('.counter-info');

   /* $slickQuote.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = ((currentSlide ? currentSlide : 0) + 1).toString().padStart(2, '0');
        $statusQuote.html('<span class="current-slide">' + i + '</span> / <span class="total-slides">' + (slick.slideCount).toString().padStart(2, '0') + '</span>');
    });*/

    $slickQuote.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 2000
    });
    
   

    $('.general-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 10000,    
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">&#60;</button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">&#62;</button>',
        autoplay: true
    });
    
     $('.main-slider').slick({
  dots: true,
  infinite: true,
  arrows: false ,
  speed: 600,
  slidesToShow: 1,
  adaptiveHeight: true,
   autoplay: true
});
//if(drupalSettings.path.currentLanguage=="en")
//{
//$('#slick-slide03').find('.title').addClass('text-blue');

//}
//$("#slick-slide00").find(".container-fluid").remove();

 $("a.scrollLink").click(function(event) {
              event.preventDefault();
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top + -100},0,'linear');
            });
    
  
    

});

$(window).on('load', function () {
    $('.page-transition').fadeOut(300);
});

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height() - 200;

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('scroll', function () {
    var video = $('video');
    if(video.length){
        if ($(video).isInViewport()) {
            video[0].play();
        } else {
            video[0].pause();
        }
    }
});


window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);
function videoScroll() {
	if (document.querySelectorAll("video[autoplay]").length > 0) {
		var windowHeight = window.innerHeight,
			videoEl = document.querySelectorAll("video[autoplay]");

		for (var i = 0; i < videoEl.length; i++) {
			var thisVideoEl = videoEl[i],
				videoHeight = thisVideoEl.clientHeight,
				videoClientRect = thisVideoEl.getBoundingClientRect().top;

			if (
				videoClientRect <= windowHeight - videoHeight * 0.5 &&
				videoClientRect >= 0 - videoHeight * 0.5
			) {
				thisVideoEl.play();
			} else {
				thisVideoEl.pause();
			}
		}
	}
}

/*
var slideWrapper = $(".main-slider");

// When the slide is changing
function playPauseVideo(slick, control){
    var currentSlide, slideType, player, video;

    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];

    if (slideType === "video") {
        video = currentSlide.children("video").get(0);
        if (video != null) {
            if (control === "play"){
                video.play();
            } else {
                video.pause();
            }
        }
    }
}


// DOM Ready
$(function() {
  // Initialize
    slideWrapper.on("init", function(slick){
        slick = $(slick.currentTarget);
        setTimeout(function(){
        playPauseVideo(slick,"play");
        }, 1000);
         
    });
    slideWrapper.on("beforeChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"pause");
    });
    slideWrapper.on("afterChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"play");
    });

     

});



/*Main Banner Slick Slider js with auto play YouTube, Vimeo and HTML5 video */    
/*
var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;
// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}
// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        slideWrapper.slick('slickPause');
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        slideWrapper.slick('slickPause');
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
        slideWrapper.slick('slickPause');
      } else {
        video.pause();
      }
    }
  }
}
// Resize player
function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}  
// DOM Ready
$(window).on('load',function(){
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    resizePlayer(iframes, 16/9);
    
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });
  //start the slider
  slideWrapper.slick({
    fade:true,
    autoplaySpeed:4000,
    autoplay: true,
    lazyLoad:"progressive",
    speed:600,
    arrows:false,
    dots:true,
    adaptiveHeight: true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });
  
    $("#Video").bind("ended", function() {
    //TO DO: Your code goes here...
    console.log('Video Complete');
    slideWrapper.slick('slickPlay');
    var dataId = $('.slick-current').attr("data-slick-index");    
    dataId++;
    slideWrapper.slick('slickGoTo', dataId);
 });
  


  
  
            
});
// Resize event


$(window).on("resize.slickVideoPlayer", function(){  
  resizePlayer(iframes, 16/9);
});  

*/


/* landing page */


$(document).ready(function() {
  
  
  $(".text-outline").click(function() {
      $(".TabArrow").closest('li').removeClass( "TabArrowNavItem" );
      $(".text-outline").prev().removeClass( "TabArrow" );
    
      $(this).prev().addClass( "TabArrow" );
      $(".TabArrow").closest('li').addClass( "TabArrowNavItem" );
    
  
    });
  
  
    $(".text-outline.active").prev().addClass( "TabArrow" );
    $(".TabArrow").closest('li').addClass( "TabArrowNavItem" );

 


/* draggable carousel */
if($(window).width() >= 1024){
  $("#insideBus .carousel-inner").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      this.parent().carousel("next");
    },
    swipeRight: function () {
      this.parent().carousel("prev");
    },
    threshold: 0,
    tap: function (event, target) {
      window.location = $(this).find("#insideBus .carousel-item.active a").attr("href");
    },
    excludedElements: "label, button, input, select, textarea, .noSwipe"
  });
}


$(".scrollDown").on('click', function(event) {

  var offset = $(':target').offset();
// var scrollto = offset().target - 60;  

// if (this.hash !== "") {
//     event.preventDefault();
//     var hash = this.hash;
//     $('html, body').animate({
//       scrollTop: offset}, 800, function(){
//       window.location.hash = hash;
//     });
//   } 



  $(window).scrollTop( $target.offset().top - 0)

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  } 
});

  // add all to same gallery
  $(".tile a").attr("data-fancybox","mytile");
  // assign captions and title from alt-attributes of images:
  $(".tile a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
    $(".tile a").fancybox();
});

$(document).ready(function () {

  AOS.init({
      duration: 500
  });    

  var iconButton = $(".text-outline");
iconButton.on("click", function() {
    $('.tabRightImage').removeClass('aos-animate');
    setTimeout(function() {
        $('.tabRightImage').addClass('aos-animate');
    }, 100);
});


  $('.sliderNextPrev').slick({
    infinite: false,
    margin:7,
    // variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    autoplay:false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });

  $('.sliderNextPrev').on('afterChange', function(event, slick, currentSlide){
    if(currentSlide == 2){

          $('.sliderNextPrev').slick('slickGoTo',0);
        }
  });

  $('.sliderNextPrev').on('afterChange touchstart mousedown', function(event, slick, currentSlide){
    if(currentSlide == 3){

          $('.sliderNextPrev').slick('slickGoTo',0);
        }
  });

  $('.slideGrid').slick({
    infinite: false,

    slidesToShow: 3,
    arrows: false,
    dots:false,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots:true
        }
        },
        {
          breakpoint:1024,
          settings: {
            slidesToShow: 2,
            dots:true
          }
      }
    ]
  });
 



// JS needed ONLY for click stuff
// Presentation/scrolling/snapping can be done using only CSS

const scrollItem = document.querySelector(".tabLeft ul");
const panelItems = document.querySelectorAll(".tabLeft li");

const onItemClick = ({ target }) => {
target.scrollIntoView({
  behavior: "smooth",
  block: "nearest",
  inline: "start"
});

if (!target.classList.contains("active")) {
  disableActives(panelItems);
  target.classList.add("active");
}
};
panelItems.forEach(item => {
item.addEventListener("click", onItemClick);
});







});



