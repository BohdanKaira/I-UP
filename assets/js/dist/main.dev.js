"use strict";

window.onbeforeunload = function () {
  localStorage.setItem('scrollPosition', window.scrollY);
};

document.addEventListener("DOMContentLoaded", function () {
  var savedScrollPosition = localStorage.getItem('scrollPosition');

  if (savedScrollPosition !== null) {
    window.scrollTo(0, savedScrollPosition);
    localStorage.removeItem('scrollPosition');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('.hamburger_menu input');
  var navMenu = document.querySelector('.mob_menu');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      navMenu.classList.add('active_menu');
    } else {
      navMenu.classList.remove('active_menu');
    }
  });
});

function Accordion() {
  var btn = document.querySelectorAll(".accordion__btn");
  btn.forEach(function (i) {
    i.addEventListener("click", function () {
      var parent = i.parentNode;

      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        document.querySelectorAll(".accordion__item").forEach(function (child) {
          return child.classList.remove("active");
        });
        parent.classList.add("active");
      }
    });
  });
}

Accordion();

function AccordionSubMenu() {
  var btn = document.querySelectorAll(".icon_top_accordion_btn");
  btn.forEach(function (i) {
    i.addEventListener("click", function () {
      var parent = i.parentNode;

      if (parent.classList.contains("active_accordion_menu")) {
        parent.classList.remove("active_accordion_menu");
      } else {
        document.querySelectorAll(".mobmenu_accordion_item").forEach(function (child) {
          return child.classList.remove("active_accordion_menu");
        });
        parent.classList.add("active_accordion_menu");
      }
    });
  });
}

AccordionSubMenu();

function toggleAccordion(accordionId) {
  document.querySelectorAll('.accordion').forEach(function (accordion) {
    accordion.classList.remove('active_accordion');
  });
  document.getElementById("".concat(accordionId, "Accordion")).classList.add('active_accordion');
}

function toggleButton(buttonId) {
  document.querySelectorAll('.accordion_filter_button').forEach(function (button) {
    button.classList.remove('active_button');
  });
  var clickedButton = document.getElementById(buttonId);
  clickedButton.classList.add('active_button');
}