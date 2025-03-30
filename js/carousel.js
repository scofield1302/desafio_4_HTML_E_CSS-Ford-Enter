//carousel.js

let carouselArr = [];

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
    
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._items = arr;
            Carousel.Next(); // Start
            Carousel._interval = setInterval(Carousel.Next, 2000);
        } else {
            console.error("Carousel precisa de um array de imagens válido.");
        }
    }

    static Next() {
        if (Carousel._items && Carousel._items.length > 0) {
            let item = Carousel._items[Carousel._sequence];
            document.getElementById("carousel").innerHTML = `<a href="${item.link}"><img src="./assets/${item.image}" alt="${item.title}" /></a>`;
            document.getElementById("carousel-title").innerText = item.title;
            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
}