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
// function toggleButton(buttonId) {
    
//     var button1 = document.getElementsByClassName('venturebutton');
//     var button2 = document.getElementById('qualifybutton');

    
//     var clickedButton = document.getElementById(buttonId);

    
//     clickedButton.classList.add('active_button');

    
//     if (buttonId === 'venturebutton') {
//         button2.classList.remove('active_button');
//     } else if (buttonId === 'qualifybutton') {
//         button1.classList.remove('active_button');
//     }
//     console.log(23);
// }
// function toggleClass(buttonId) {
//     var clickedButton = document.getElementById(buttonId);

    
//     clickedButton.classList.add('active_button');

    
//     var otherButtonId = (buttonId === 'venturebutton') ? 'qualifybutton' : 'venturebutton';
//     var otherButton = document.getElementById(otherButtonId);
//     otherButton.classList.remove('active_button');
// }