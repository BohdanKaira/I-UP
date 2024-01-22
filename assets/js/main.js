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