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

    if (window.matchMedia('(max-width: 767px)').matches) {
        const licenceSwiper = new Swiper('.licence-swiper', {

            slidesPerView: 2,

            pagination: {
                el: '.slider-container .swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next-licence',
                prevEl: '.swiper-button-prev-licence',
            },
        });
    } else {
        const licenceSwiper = new Swiper('.licence-swiper', {

            slidesPerView: 4,

            navigation: {
                nextEl: '.swiper-button-next-licence',
                prevEl: '.swiper-button-prev-licence',
            },
        });
    }

    // const licenceSwiper = new Swiper('.licence-swiper', {
    //
    //     slidesPerView: 4,
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next-licence',
    //         prevEl: '.swiper-button-prev-licence',
    //     },
    // });

    // const priceSwiper = new Swiper('.price-swiper', {
    //
    //     slidesPerView: 2,
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next-price',
    //         prevEl: '.swiper-button-prev-price',
    //     },
    // });

    if (window.matchMedia('(max-width: 767px)').matches) {
        const priceSwiper = new Swiper('.price-swiper', {

            slidesPerView: 1,

            navigation: {
                nextEl: '.swiper-button-next-price',
                prevEl: '.swiper-button-prev-price',
            },
        });
    } else {
        const priceSwiper = new Swiper('.price-swiper', {

            slidesPerView: 2,

            navigation: {
                nextEl: '.swiper-button-next-price',
                prevEl: '.swiper-button-prev-price',
            },
        });
    }

    $('.header__burger, .mobile__item-menu').click((e) => {
        $('.header__burger, .wrapper-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.content-wrapper').click((e) => {
        $('.header__burger, .wrapper-menu').removeClass('active');
        $('body').removeClass('lock');
    })

    // $(window).on('scroll', (e) => {
    //     console.log(e);
    //     if (e.originalEvent.wheelDelta >= 0) {
    //         $('.header').removeClass('hidden')
    //         console.log('Scroll up');
    //     } else {
    //         $('.header').addClass('hidden')
    //         console.log('Scroll down');
    //     }
    // })

    // let body = document.querySelector('body');

    $('body').on('scroll', (e) => {
        console.log(e)
        let scrollTop = document.querySelector('body').scrollHeight;
        console.log(scrollTop);

        let headerWrapper = document.querySelector('.header-wrapper');
        console.log(headerWrapper);

        if(scrollTop >= 100){
            headerWrapper.classList.add('hide');
            console.log('down')
        }else{
            headerWrapper.classList.remove('hide');
            console.log(up)
        }
    });


})

//Вызов функции и обработка события resize zoom

const setZoom = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {

        const licenceSwiper = new Swiper('.licence-swiper', {

            slidesPerView: 2,

            pagination: {
                el: '.slider-container .swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next-licence',
                prevEl: '.swiper-button-prev-licence',
            },
        });

        const priceSwiper = new Swiper('.price-swiper', {

            slidesPerView: 1,

            navigation: {
                nextEl: '.swiper-button-next-price',
                prevEl: '.swiper-button-prev-price',
            },
        });

    } else {

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

    }
}

window.addEventListener('resize', setZoom);
