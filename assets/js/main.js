window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY);
};

document.addEventListener("DOMContentLoaded", function() {
    var savedScrollPosition = localStorage.getItem('scrollPosition');
    
    if (savedScrollPosition !== null) {
        window.scrollTo(0, savedScrollPosition);
        localStorage.removeItem('scrollPosition');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.hamburger_menu input');
    const navMenu = document.querySelector('.mob_menu');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        navMenu.classList.add('active_menu');
      } else {
        navMenu.classList.remove('active_menu');
      }
    });
});
function Accordion() {
    const btn = document.querySelectorAll(".accordion__btn");

    btn.forEach(i => {
    i.addEventListener("click", function() {
        const parent = i.parentNode;

        if (parent.classList.contains("active")) {
        parent.classList.remove("active")
        } else {
        document.querySelectorAll(".accordion__item").forEach((child) => child.classList.remove("active"))
        parent.classList.add("active")
        }
    })
    })
}
Accordion();

function AccordionSubMenu() {
    const btn = document.querySelectorAll(".icon_top_accordion_btn");

    btn.forEach(i => {
    i.addEventListener("click", function() {
        const parent = i.parentNode;

        if (parent.classList.contains("active_accordion_menu")) {
        parent.classList.remove("active_accordion_menu")
        } else {
        document.querySelectorAll(".mobmenu_accordion_item").forEach((child) => child.classList.remove("active_accordion_menu"))
        parent.classList.add("active_accordion_menu")
        }
    })
    })
}
AccordionSubMenu();

function toggleAccordion(accordionId) {
   
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.classList.remove('active_accordion');
    });
    document.getElementById(`${accordionId}Accordion`).classList.add('active_accordion');

}
function toggleButton(buttonId) {
    
    document.querySelectorAll('.accordion_filter_button').forEach(button => {
        button.classList.remove('active_button');
    });

    
    var clickedButton = document.getElementById(buttonId);
    clickedButton.classList.add('active_button');
}
