function myFunction(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("open").style.visibility = "hidden";
  document.getElementById("navSection").style.height = "40%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("open").style.visibility = "visible";
  document.getElementById("navSection").style.height = "auto";
  document.body.style.overflow = "scroll";
}

function moveToAbout() {
  closeNav();
  $('body, html').animate({
    scrollTop: $('profile').offset.top
  }, '500');
}
function moveToSkills() {
  closeNav();
  $('body, html').animate({
    scrollTop: $('skills').offset.top
  }, '500');
}
function moveToEducation() {
  closeNav();
  $('body, html').animate({
    scrollTop: $('education').offset.top
  }, '500');
}
function moveToWork() {
  closeNav();
  $('body, html').animate({
    scrollTop: $('portfolio').offset.top
  }, '500');
}
function moveToContact() {
  closeNav();
  $('body, html').animate({
    scrollTop: $('contact').offset.top
  }, '500');
}
function moveToContact1() {
  $('body, html').animate({
    scrollTop: $('contact').offset.top
  }, '500');
}

$(document).ready(function(){
  $(window).scroll(function() {
		$('#ani').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1300) {
				$(this).addClass("slideUp");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide4').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide5').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide6').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1800) {
        $(this).show();
				$(this).addClass("slide");
			}
		});
	});

  $(window).scroll(function() {
    $('#overview').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1350) {
        $(this).addClass("slideRight");
      }
    });
  });
  $(window).scroll(function() {
		$('#year1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1350) {
				$(this).addClass("slideLeft");
			}
		});
	});
  $(window).scroll(function() {
		$('#year2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1350) {
				$(this).addClass("slideRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#year3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1350) {
				$(this).addClass("slideLeft");
			}
		});
	});

  $('contactBtn').click( function() {
    $('body, html').animate({
      scrollTop: $('.social').offset.top
    }, '500');
  });
});
