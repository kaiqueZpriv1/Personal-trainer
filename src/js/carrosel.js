const imageCarrosel = [
	{
		id: 0,
		image: "./src/img/imgCarrosel/galeria1.jpg",
	},
	{
		id: 1,
		image: "./src/img/imgCarrosel/galeria2.jpg",
	},
	{
		id: 2,
		image: "./src/img/imgCarrosel/galeria3.jpg",
	},
	{
		id: 3,
		image: "./src/img/imgCarrosel/galeria4.jpg",
	},
	{
		id: 4,
		image: "./src/img/imgCarrosel/galeria5.jpg",
	},
	{
		id: 5,
		image: "./src/img/imgCarrosel/galeria6.jpg",
	},
];
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
function InnerCarrossel() {
    imageCarrosel.forEach(iCarrosel => {

        carouselInner.innerHTML += `
             <img src="`+iCarrosel.image+`">
        `;

    })
}
InnerCarrossel();
var prevButton = carousel.querySelector(".carousel-prev");
var nextButton = carousel.querySelector(".carousel-next");
var slideWidth = carousel.clientWidth;
var currentIndex = 0;
var intervalId;
function startAutoplay() {
	intervalId = setInterval(function () {
		nextSlide();
	}, 3000); // Intervalo de 3 segundos entre cada slide (ajuste conforme necessário)
}
function stopAutoplay() {
	clearInterval(intervalId);
}
function nextSlide() {
	currentIndex = (currentIndex + 1) % carouselInner.children.length;
	carouselInner.style.transform =
		"translateX(" + -currentIndex * slideWidth + "px)";
}
function prevSlide() {
	currentIndex =
		(currentIndex - 1 + carouselInner.children.length) %
		carouselInner.children.length;
	carouselInner.style.transform =
		"translateX(" + -currentIndex * slideWidth + "px)";
}
prevButton.addEventListener("click", function () {
	prevSlide();
	stopAutoplay();
});
nextButton.addEventListener("click", function () {
	nextSlide();
	stopAutoplay();
});
carousel.addEventListener("mouseenter", function () {
	stopAutoplay();
});
carousel.addEventListener("mouseleave", function () {
	startAutoplay();
});
startAutoplay();
