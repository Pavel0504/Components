//Get all of the necessary elements
const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .fa-eye-slash");
const lock = document.querySelector(".pwd .fa-lock");
const overlay = document.querySelector(".pwd .overlay");

//Add a click event to the eye icon
eye.addEventListener("click", () => {
    //If the password is hidden...
    if(input.type === "password") {
        //...Show it
        input.type = "text";
        //Toggle between eye icons
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        //Change the color of the lock icon in 500ms
        setTimeout(() => {
            lock.style.color = "#111625";
        }, 500);
        //If the password is visible...
    } else {
        //...Hide it
        input.type = "password";
        //Toggle between eye icons
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        //Change the color of the lock icon
        lock.style.color = "dbdbdb"
    }
    //Toggle the overlay
    overlay.classList.toggle(overlay-cover);
});