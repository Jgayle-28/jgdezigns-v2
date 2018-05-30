///////////////////////////////////////
// HEADER
///////////////////////////////////////


// NAV SCRIPTS
///////////////////////////////////////
$(document).ready(function(){

  // OPEN - CLOSE NAV
  $('.nav-open').click(function(){
    $(this).toggleClass('active fadeOut');
    $('#menuSection').fadeToggle(700);
    // $('.menu').toggleClass('animate-open');
  });

  // CLOSE NAV WHEN LINK CLICKED
  $('.v19').on('click',function(){
    // $(this).css('color', 'rgba(0,222,212,.7)');
    $('.nav-open').toggleClass('active');
    $('#menuSection').fadeToggle(700);
    // $('.menu').toggleClass('animate-open');
  });

});


// ANIMATE MENU LETTERS
///////////////////////////////////////
function anim(targetedDiv) {
  var targetedLetter = $('#'+targetedDiv+' .rotate').text();
  var asciiValue = targetedLetter.charCodeAt(0); //Gets acii value
  var pointer = 65; //Ascii of 'A' (starting point)
  
  changeChar();

  // Converts pointer value into character i.e. 65 = A
  function changeChar() {
    if(pointer <= asciiValue) {
      $('#'+targetedDiv+' .rotate').text(String.fromCharCode(pointer));
      pointer++;
      // Call function after every 20ms
      setTimeout(changeChar, 20);
    } else {
      $(this).stop;
    }
  }
}


// SMOOTH SCROLL
///////////////////////////////////////

var scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function(e){
  e.preventDefault();
  $('body,html').delay(600).animate({
    scrollTop: $(this.hash).offset().top}, 1200);
  
});


// ANIMATED SLOGAN
///////////////////////////////////////
$(document).ready(function(){
  var $randomnmbr = $('.nbr');
  var $timer = 30;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["w", "h", "e", "r", "e", " ", 
                "d", "e", "s", "i", "g", "n", " ", 
                "c", "o", "m", "e", "s", " ", 
                "t", "o", " ", 
                "l", "i", "f", "e" ];

  $randomnmbr.each(function(){
    // Generate random number
    change = Math.round(Math.random()*100);
    // Set random number to the selected letter
    $(this).attr('data-change', change);
  });

  function random() {
    return Math.round(Math.random()*15);
  }

  function select() {
    return Math.round(Math.random()*$randomnmbr.length+1);
  }

  function value() {
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;

    $randomnmbr.each(function() {
      if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
        index = $('.ltr').index(this);
        $(this).html(letters[index]);
        $(this).removeClass('nbr');
      }
    });
  }

  $it = setInterval(value, $timer);

});


// PARALLAX / REVEAL.JS
///////////////////////////////////////
var rellax = new Rellax('.rellax', {
  // center: true
  callback: function(position) {
      // callback every position change
      // console.log(position);
  }
});


// FADE ELEMENTS AT TOP OF PAGE
///////////////////////////////////////
$(window).scroll(function() {
  // Setting: Start fading halfway up the page
  var startPos = .4;

  // Cache window object
  var $w = $(window);

  // Basically, we go through each element and check its relative position within the viewport
  $('.scrollFade').each(function() {

    // Get current relative position in viewport, based on the top edge
    var pos = $(this).offset().top - $w.scrollTop();

    // Get viewport height
    var vh = $w.height();

    if (pos < vh * startPos) {
      // If element has past the starting threshold, we fade it
      $(this).css('opacity', pos / (vh * startPos) * 1);
    } else {
      $(this).css('opacity', 1);
    }
  });
});

// ANIMATE ON SCROLL
///////////////////////////////////////
AOS.init({
  // duration: 1500,
});


///////////////////////////////////////
// WHY JG SCRIPTS
///////////////////////////////////////

// PARALLAX / BG MOUSEMOVE
///////////////////////////////////////
// $('.p-container').mousemove(function(e){
//   var moveX = (e.pageX * -1 / 15);
//   var moveY = (e.pageY * -1 / 15);
//   $(this).css('background-position', moveX + 'px ' + moveY + 'px');
// });

// HOVER DIV ANIMATE 
///////////////////////////////////////

// BOX-1
$(function() {
  $('.why-jg__container-box-text-1').hover(function() {
    $('.img-box-img-al-1').css({
      'opacity': 0,
      'margin-left':0,
      'height': '1rem',
      'width': '1rem'});

      $('.img-box-img-ar-1').css({
        'opacity': 0,
        'margin-left':0,
        'height': '1rem',
        'width': '1rem'});
      $('.img-box-img-1').css('transform','translateY(-3px) scale(1.1)');  
    }, 
    function() {
    // on mouseout, reset the background colour
    $('.img-box-img-al-1').css({
      'opacity': 1,
      'margin-left':'-4rem',
      'height': '4rem',
      'width': '4rem'});

      $('.img-box-img-ar-1').css({
        'opacity': 1,
        'margin-left':'4rem',
        'height': '4rem',
        'width': '4rem'});
      $('.img-box-img-1').css('transform','translateY(3px) scale(1)');  

  });
});

// BOX-2
$(function() {
  $('.why-jg__container-box-text-2').hover(function() {
    $('.img-box-img-al-2').css({
      'opacity': 0,
      'margin-left':0,
      'height': '1rem',
      'width': '1rem'});

      $('.img-box-img-ar-2').css({
        'opacity': 0,
        'margin-left':0,
        'height': '1rem',
        'width': '1rem'});
      $('.img-box-img-2').css('transform','translateY(-3px) scale(1.1)');  
    }, 
    function() {
    // on mouseout, reset the background colour
    $('.img-box-img-al-2').css({
      'opacity': 1,
      'margin-left':'-4rem',
      'height': '4rem',
      'width': '4rem'});

      $('.img-box-img-ar-2').css({
        'opacity': 1,
        'margin-left':'4rem',
        'height': '4rem',
        'width': '4rem'});
      $('.img-box-img-2').css('transform','translateY(3px) scale(1)');  

  });
});

// BOX-3
$(function() {
  $('.why-jg__container-box-text-3').hover(function() {
    $('.img-box-img-al-3').css({
      'opacity': 0,
      'margin-left':0,
      'height': '1rem',
      'width': '1rem'});

      $('.img-box-img-ar-3').css({
        'opacity': 0,
        'margin-left':0,
        'height': '1rem',
        'width': '1rem'});
      $('.img-box-img-3').css('transform','translateY(-3px) scale(1.1)');  
    }, 
    function() {
    // on mouseout, reset the background colour
    $('.img-box-img-al-3').css({
      'opacity': 1,
      'margin-left':'-4rem',
      'height': '4rem',
      'width': '4rem'});

      $('.img-box-img-ar-3').css({
        'opacity': 1,
        'margin-left':'4rem',
        'height': '4rem',
        'width': '4rem'});
      $('.img-box-img-3').css('transform','translateY(3px) scale(1)');  

  });
});

// BOX-4
$(function() {
  $('.why-jg__container-box-text-4').hover(function() {
    $('.img-box-img-al-4').css({
      'opacity': 0,
      'margin-left':0,
      'height': '1rem',
      'width': '1rem'});

      $('.img-box-img-ar-4').css({
        'opacity': 0,
        'margin-left':0,
        'height': '1rem',
        'width': '1rem'});
      $('.img-box-img-4').css('transform','translateY(-3px) scale(1.1)');  
    }, 
    function() {
    // on mouseout, reset the background colour
    $('.img-box-img-al-4').css({
      'opacity': 1,
      'margin-left':'-4rem',
      'height': '4rem',
      'width': '4rem'});

      $('.img-box-img-ar-4').css({
        'opacity': 1,
        'margin-left':'4rem',
        'height': '4rem',
        'width': '4rem'});
      $('.img-box-img-4').css('transform','translateY(3px) scale(1)');  

  });
});


// VIDEO PLAYBACK RATE
///////////////////////////////////////
const vid = document.querySelector('video');
vid.playbackRate = 0.3;