$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});





/*var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
})

$(function() {
    $(selector).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});

var boolDirection = true;

function AnimateRotate(angle) {
    // caching the object for performance reasons
    var $elem = $('.box-item');

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: angle}, {
        duration: 2000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: function(){
            if(boolDirection)
            {
            AnimateRotate(0);
                boolDirection = false;
            }
            else
            {

                boolDirection=true;
            }
        }
    });
}
//AnimateRotate(360);


function drop() {
  $('.box-item')

  .animate({ top: "+=10" }, 700 )
}

drop();
$('.home .logo').fadeIn(3000);

function trans() {
  $('.box-item').transition({
    perspective: '300px',
    rotateY: '180deg'
  });
}

/*$('.box-item').mouseenter("slow",
  function () {
    $(this).transition({
      perspective: '500px',
      rotateY: '180deg'
    },1000);
    $(this).find('p').show(100);
  })
$('.box-item').mouseleave(
  function () {
      $(this).transition({
        perspective: '500px',
        rotateY: '0deg'
      },100);
  $(this).find('p').hide();


})*/



$('.box-item').hover(function () {

  $(this).css('transform', 'rotateY(180deg) perspective(500px)');
  $(this).find('p').show("slow");
 $(this).off("mouseenter","**");
 $(this).find('p').off("mouseenter","**");
  },function(){
    $(this).css('transform', 'rotateY(360deg) ');
    $(this).find('p').off("mouseleave","**");
    $(this).find('p').hide();
    $(this).off("mouseleave","**");
     })

//FILTER CATEGORIES//
  $("#drop-menu").on("click","li",function(){
    var id=$(this).attr("id");
    updateNewsItem(id);
  })

  function updateNewsItem(categoryName) {
     var dataSelectorval="label[title='"+categoryName+"']";
      $('.news-item').show().not($('.news-item').has(dataSelectorval)).hide()

  }


  var tx=  $("#search-form-1").attr("text");
  console.log(tx);
