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
$(document).ready(function(){
  $(window).scroll(function() {
		$('#ani').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1400) {
				$(this).addClass("stretchRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1375) {
				$(this).addClass("stretchRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1350) {
				$(this).addClass("stretchRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1325) {
				$(this).addClass("stretchRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide4').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1300) {
				$(this).addClass("stretchRight");
			}
		});
	});
  $(window).scroll(function() {
		$('#slide5').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1275) {
				$(this).addClass("stretchRight");
			}
		});
	});
});
