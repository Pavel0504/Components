//initialize Tilt JS
VanillaTilt.init(
    document.querySelectorAll(".js-tilt"), {
        max: 25,
        speed: 400,
});

//Get the li elements
const sizes = document.querySelectorAll(".size");

//Add a click event to each
for(let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", () => {
        //Remove active style from all
        for(let j = 0; j < sizes.length; j++) {
            sizes[j].classList.remove("active");
        }
        //Add active style to the clicked one
        sizes[i].classList.toggle("active");
    });
}