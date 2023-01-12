
$(function () {
    $(document).scroll(function (e) {
        $(window).scrollTop() > 150 ? $('.top-btn').addClass('__body_up') : $('.top-btn').removeClass('__body_up');
    });
    //front slider
    function frontSlide() {
        $('.front-sec__slider').slick({
            infinite: true,
            speed: 1500,
            adaptiveHeight: true,
            slidesToScroll: 1,
            dots: true,
            slidesToShow: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<div class="ar_slierV2 prev-ar_slideV2"></div></div>',
            nextArrow: '<div class="ar_slierV2 next-ar_slideV2"></div></div>',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        autoplay: false,

                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        dots: false,
                        autoplay: false,
                    }
                },
            ]
        });
        $(function () {
            let allNavElement = document.querySelectorAll('.front-sec__slider .slick-dots li');

            for (let i = 0; i < allNavElement.length; i++) {
                let element = document.createElement('p')
                element.innerHTML = `${i + 1}`
                allNavElement[i].append(element)
            }


            if (window.matchMedia('(min-width: 1400px)').matches) {
                let vidthForntSec = $('.front-sec').width()
                let currentValue = vidthForntSec / 2 - 560;
                $('.front-sec__network').css({
                    'left': `-${currentValue - 30}px`
                })
                $('.front-sec .slick-dots').css({
                    'right': `-${currentValue - 30}px`
                })
            }
        })
    }
    frontSlide();


    //sale slider
    $('.sale-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    autoplay: false,
                    autoplaySpeed: 3000,
                    centerMode: true,
                    centerPadding: '142px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    autoplay: false,
                    autoplaySpeed: 3000,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },

        ]
    });


    //slider video reviews
    $('.video-rev-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 3,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                }
            },

        ]
    });

    //slider news
    $('.news-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 3,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            },


        ]
    });

    //text reviews news
    $('.text-reviews-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '124px',
        prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
        ]
    });


    //lang open close
    $('.lang-switch__btn').on('click', function () {
        $('.lang-switch__list').slideToggle(300, function () {
            if ($(this).is(':visible')) {
                $('.lang-switch__btn').addClass('actlang')
            }
            else {
                $('.lang-switch__btn').removeClass('actlang')
            }
        })
    })

});


window.addEventListener('load', function () {
    //popups start
    // <div class="popup-air galery-conteiner" data-air="test">
    // 		<div class="galery-popup">
    // 		</div>
    // 	</div>
    // 	<button class="air-open-btn" data-popup-current="galery">galery</button>
    // 	<button class="air-open-btn" data-popup-current="test">test</button>
    function popupAir() {
        const footerElement = document.querySelector('footer');
        if (!footerElement) {
            alert('dont find teg footer')
        }
        else {
            let airElements = document.querySelectorAll('.popup-air');
            if (airElements.length > 0) {
                let airBtnOpen = document.querySelectorAll('.air-open-btn');
                createAirPopups()

                for (let i = 0; i < airBtnOpen.length; i++) {
                    airBtnOpen[i].onclick = openAirPopup
                }
            }
            else {
                return
            }

            function createAirPopups() {
                let airConteiner = document.createElement("div");
                airConteiner.classList.add('air-conteiner');

                for (let i = 0; i < airElements.length; i++) {
                    let airCloseIcon = document.createElement("div");
                    airCloseIcon.classList.add('air-close');
                    airElements[i].appendChild(airCloseIcon)
                    airConteiner.appendChild(airElements[i])

                }
                footerElement.after(airConteiner)
            }

            function openAirPopup() {
                let currentAirPopupBtn = this.getAttribute('data-popup-current');
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`);
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })
            }

            function openAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.add('air-conteiner_active');
            }

            function closeAllAirPopups(allPopups) {
                for (let i = 0; i < allPopups.length; i++) {
                    allPopups[i].classList.remove('air-popup_active');
                }
            }
            function closeAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.remove('air-conteiner_active');
            }
        }

    }
    popupAir()
    //popups end

    //video onload
    function videoLoad() {
        let videoBtn = document.querySelectorAll('.video-btn');
        for (let i = 0; i < videoBtn.length; i++) {
            videoBtn[i].addEventListener('click', function () {
                let videoUrl = this.getAttribute('data-video-src');
                let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
                document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
                closeVideoBtn.addEventListener('click', function () {
                    setTimeout(function () {
                        document.querySelector('.video-popup iframe').setAttribute('src', '')
                    }, 800)
                });
            })
        }
    }
    videoLoad()


    //search open close
    function openCloseSearch() {
        let searchBox = document.querySelector('.search-box');
        let closeSearch = document.querySelector('.search-box__close');
        let searchIc = document.querySelector('.search-ic');

        searchIc.addEventListener('click', function (event) {
            searchBox.classList.add('search-box_active')
            event.preventDefault()
        })
        closeSearch.addEventListener('click', function () {
            searchBox.classList.remove('search-box_active')
        })
    }
    openCloseSearch()


    //animations start
    function animateController() {
        new Skroll({
            mobile: true,
        })
            .add(".front-sec__slider", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".front-sec__info", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".network-row-main__link", {
                delay: 100,
                duration: 500,
                animation: "fadeInUp"
            })
            .add(".sec-title", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".sale-slider__element-wrapper", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".tw-element", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".category-sec__btn-wrapper", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".video-rev-sec__element", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-sec__text", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-sec__image", {
                delay: 400,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".formula-element", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".formula-sec__btn-wrapper", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".text-reviews-sec__element", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".advantages-sec__check", {
                delay: 200,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".advantages-sec__advantages", {
                delay: 400,
                duration: 1000,
                animation: "fadeInUp"
            })


            .init()
            .recalcPosition()
    }

    animateController()

    //animation end


    // animation scroll link
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    //search location
    function search() {
        let input = document.getElementById("inputSearch");
        let filter = input.value.toUpperCase();
        let ul = document.getElementById("list");
        let li = ul.getElementsByTagName("li");

        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let i = 0; i < li.length; i++) {
            let h5 = li[i].getElementsByTagName("h5")[0];
            if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                document.querySelector('.search__down').classList.remove('hedesearch')
            } else {
                li[i].style.display = "none";
                document.querySelector('.search__down').classList.add('hedesearch')
            }
        }
    }
    function startSearch() {
        let currentInput = document.querySelector('#inputSearch')
        if (currentInput != null) {
            currentInput.addEventListener('keyup', search);
        }
        else {
            return;
        }
    }
    startSearch()

    //select location
    function selectLocation() {
        let allLocation = document.querySelectorAll('.city-select__list li')
        let currentLocation = document.querySelector('.current-city')
        let currentPopupLocation = document.querySelector('.city-select__current-loc-popup span')
        for (let i = 0; i < allLocation.length; i++) {
            allLocation[i].addEventListener('click', () => {
                currentLocation.innerHTML = allLocation[i].querySelector('h5').innerHTML
                currentPopupLocation.innerHTML = allLocation[i].querySelector('h5').innerHTML
            })
        }
    }
    selectLocation()

    //open location
    function openCloseLocation() {
        let openBtn = document.querySelector('.city-select')
        let openBtnMob = document.querySelector('.current-city')
        let locationConteiner = document.querySelector('.city-select__all')
        let closeLocationConteiner = document.querySelector('.close-loc')
        let allElementsLoc = document.querySelectorAll('.city-select__list li')

        const mediaQuery = window.matchMedia('(min-width: 750px)')
        const mediaQueryMob = window.matchMedia('(min-width: 250px)')
        if (mediaQuery.matches) {
            openBtn.addEventListener('mouseenter', () => {
                locationConteiner.classList.add('activ-search')
            })
            openBtn.addEventListener('mouseleave', () => {
                locationConteiner.classList.remove('activ-search')
            })
        }
        if (mediaQueryMob.matches) {
            openBtnMob.addEventListener('click', () => {
                locationConteiner.classList.add('activ-search')
            })
            closeLocationConteiner.addEventListener('click', () => {
                locationConteiner.classList.remove('activ-search')
            })
            for (let i = 0; i < allElementsLoc.length; i++) {
                allElementsLoc[i].addEventListener('click', () => {
                    locationConteiner.classList.remove('activ-search')
                })
            }

        }

    }
    openCloseLocation()

    //open close burger
    function openCloseBurger() {
        let burgerOpenBtn = document.querySelector('.burger')
        let burgerCloseBtn = document.querySelector('.burger-meny__close')
        let burgerMeny = document.querySelector('.burger-meny');
        burgerOpenBtn.addEventListener('click', () => {
            burgerMeny.classList.add('burger-meny_active')
        })
        burgerCloseBtn.addEventListener('click', () => {
            burgerMeny.classList.remove('burger-meny_active')
        })
    }
    openCloseBurger()

    //open close burger sub meny
    function subMenyOpen() {
        let hasChildren = document.querySelectorAll('.burger-meny__nav .burger-meny__has-children');
        for (let i = 0; i < hasChildren.length; i++) {
            hasChildren[i].addEventListener('click', () => {
                hasChildren[i].classList.toggle('has-children_activ')
            })
        }
    }
    subMenyOpen();



}, false);


