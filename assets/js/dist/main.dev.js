"use strict";

// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
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