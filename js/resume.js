(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


$(function () {
  $("#BtmProjeto1").click(function () {

    var algumProjetoAtivo;

    if (!document.querySelector("#Projeto2").classList.contains("div-invisible")) {
      document.querySelector("#Projeto2").classList.toggle("div-invisible");
    }

    if (!document.querySelector("#Projeto3").classList.contains("div-invisible")) {
      document.querySelector("#Projeto3").classList.toggle("div-invisible");
    }

    document.querySelector("#Projeto1").classList.remove("div-invisible");
  })

  $("#BtmProjeto2").click(function () {

    if (!document.querySelector("#Projeto1").classList.contains("div-invisible")) {
      document.querySelector("#Projeto1").classList.toggle("div-invisible");
    }

    if (!document.querySelector("#Projeto3").classList.contains("div-invisible")) {
      document.querySelector("#Projeto3").classList.toggle("div-invisible");
    }


    document.querySelector("#Projeto2").classList.remove("div-invisible");
  })
  $("#BtmProjeto3").click(function () {
    if (!document.querySelector("#Projeto1").classList.contains("div-invisible")) {
      document.querySelector("#Projeto1").classList.toggle("div-invisible");
    }

    if (!document.querySelector("#Projeto2").classList.contains("div-invisible")) {
      document.querySelector("#Projeto2").classList.toggle("div-invisible");
    }

    document.querySelector("#Projeto3").classList.remove("div-invisible");
  })
});