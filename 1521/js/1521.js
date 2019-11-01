$(document).ready(function() {
    window.addEventListener('.swiper-button-next', function(event) { event.preventDefault(); }, { passive: false });
    window.addEventListener('.swiper-button-prev', function(event) { event.preventDefault(); }, { passive: false });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: window.innerWidth > 768 ? 5 : 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }
    });
});