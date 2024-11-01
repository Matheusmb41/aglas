// Menu animação
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("#sp-header").addClass("menu-fixed");
    } else {
      $("#sp-header").removeClass("menu-fixed");
    }
  });

  // Abrir e fechar o menu na versão Mobile
  $(".hamburger").click(function () {
    $("nav ul li").toggle();
  });

  // Rolagem suave
  $("nav ul li a").click(function (e) {
    const target = $(this).attr("href");
    if (!target.startsWith("http")) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800
      );
    }
  });
});

// Projetos animação
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll("a.card");
  var background = document.querySelector(".background");

  var lastHoveredCardIndex = localStorage.getItem("lastHoveredCardIndex") || 0;

  var cardRect = cards[lastHoveredCardIndex].getBoundingClientRect();
  var x = cardRect.left + window.scrollX + cardRect.width / 2;
  var y = cardRect.top + window.scrollY + cardRect.height / 2;

  background.style.opacity = "0";

  cards.forEach(function (card, index) {
    card.addEventListener("mouseenter", function (e) {
      if (card.classList.contains("zoomed")) {
        return;
      }

      var rect = card.getBoundingClientRect();
      x = rect.left + window.scrollX + rect.width / 2;
      y = rect.top + window.scrollY + rect.height / 2;

      background.style.width = rect.width + "px";
      background.style.height = rect.height + "px";
      background.style.transform = `translate(${x - rect.width / 2}px, ${
        y - rect.height / 2
      }px)`;
      background.style.opacity = "1";
      background.style.top = "0%";
      background.style.left = "0%";
      background.style.transformOrigin = "center";
      localStorage.setItem("lastHoveredCardIndex", index);
    });
  });
});
