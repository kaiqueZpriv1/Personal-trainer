const burgerElement = document.querySelector(".burger")
const closeElement = document.querySelector(".close")

const menuElement = document.querySelector("#menu-mobile")
burgerElement.addEventListener('click', function(event) {
   

        menuElement.style.width = "65%";
    const visibleClose = closeElement.style.display = "none"

    if(visibleClose) {
        closeElement.style.display = "block"
        closeElement.addEventListener("click", () => {
            burgerElement.style.display = "block"
            closeElement.style.display = "none"
            menuElement.style.width = "0";
        })
        burgerElement.style.display = "none"
    } else {
        closeElement.style.display = "block"
        burgerElement.style.display = "none"
    }

})

