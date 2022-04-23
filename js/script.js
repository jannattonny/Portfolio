$(function(){
  $('#bar1').barfiller({

      // color of bar
      barColor: '#702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar2').barfiller({

      // color of bar
      barColor: '#702666 ',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar3').barfiller({

      // color of bar
      barColor: ' #702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar4').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar5').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar6').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar7').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar8').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    $('#bar9').barfiller({

      // color of bar
      barColor: '##702666',
    
      // shows a tooltip
      tooltip: true,
    
      // duration in ms
      duration: 1000,
    
      // re-animate on resize
      animateOnResize: true,
    
      // custom symbol
      symbol: "%"
      
    });
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
    });
    new VenoBox({
    selector: '.my-video-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
    });
     
    $('.team-main').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow:".arrow-left",
      nextArrow:".arrow-right",
      pauseOnHover:false,
      centerMode:true,
      centerPadding:'0px',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              centerMode:false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
              centerMode:false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              centerMode:false,
          },
        },
        
         ],
    

      
    });


 
    $(window).scroll(function(){
      var top= $(this).scrollTop();
    if( top > 400){
      $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }

      if (top>500){
        $(".back-to-top").fadeIn(200)
      }
      else{
        $(".back-to-top").fadeOut(200)
      }

    });
    $(".back-to-top").click(function(){
      $("html,body") .animate({scrollTop: 0},1000)
    });
//scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
event.preventDefault();
$('html,body').animate({
  scrollTop: $(this.hash).offset().top - 40
}, 1000);
});
$(window).on('scroll', function () {
var scrollTop = $(this).scrollTop();
scrollLink.each(function () {
  var sectionhead = $(this.hash).offset().top - 400;
  if (scrollTop >= sectionhead) {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  }
});
});

require(['skrollr'], function(skrollr){
  var s = skrollr.init();
});




})
