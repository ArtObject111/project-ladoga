$(document).ready(function () {

    const reviewsSwiper = new Swiper('.reviews-swiper', {

        init: false,
        // loop: true,

        // // If we need pagination
        pagination: {
            el: '.container .swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-uniq',
            prevEl: '.swiper-button-prev-uniq',
        },
    });

    reviewsSwiper.on("slideChange afterInit", function () {
        let currentSlide = this.activeIndex + 1;
        document.querySelector('.reviews-counter').innerHTML = `
		<span class="counter__current">${currentSlide}</span>/<span class="counter__total">${this.slides.length}</span>`;
    });

    reviewsSwiper.init()

    const licenceSwiper = new Swiper('.licence-swiper', {

        slidesPerView: 4,

        navigation: {
            nextEl: '.swiper-button-next-licence',
            prevEl: '.swiper-button-prev-licence',
        },
    });

    const priceSwiper = new Swiper('.price-swiper', {

        slidesPerView: 2,

        navigation: {
            nextEl: '.swiper-button-next-price',
            prevEl: '.swiper-button-prev-price',
        },
    });

})
