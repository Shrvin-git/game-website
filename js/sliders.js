
export const initSliders = () => {
    let swiper1 = new Swiper('.swiper1', {

        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    let swiper2 = new Swiper('.swiper2', {

        loop: true,

        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        freeMode: true,

    });

    let swiper3 = new Swiper('.swiper3', {

        freeMode: true,
        loop: true,

        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },


    });

    let swiper4 = new Swiper('.swiper4', {

        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true, // ❌ چون خودش باعث delay بین loop میشه
        freeMode: true,
        freeModeMomentum: false,
        speed: 5000, // حرکت خیلی نرم و طولانی
      
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
    

        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },

    });

    let swiper5 = new Swiper('.swiper5', {

        freeMode: true,
        loop: true,

        breakpoints: {
            300: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },


    });

    let swiper6 = new Swiper('.swiper6', {

        loop: true,

        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}






