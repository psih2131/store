
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


    //product-slider
    $('.last-view-sec__slider').slick({
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


    //slider card
    $('.card-big-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.card-nav-slider , .big-slider-popup , .smal-slider-popup',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
                    nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
                }
            },


        ]
    });
    $('.card-nav-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false,
        slidesToShow: 4,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div></div>',
        asNavFor: '.card-big-slider , .big-slider-popup , .smal-slider-popup',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                }
            },

        ]
    });
    $('.big-slider-popup').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        prevArrow: '<div class="ar_slier-popup prev-ar_slide"></div></div>',
        nextArrow: '<div class="ar_slier-popup next-ar_slide"></div></div>',
        asNavFor: '.card-big-slider , .card-nav-slider , .smal-slider-popup',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
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

    $('.smal-slider-popup').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.card-big-slider , .big-slider-popup , .card-nav-slider',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
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

    //comment open/close
    $('.post-body-sec__comment-row').on('click', function () {
        $('.post-body-sec__comment-wrapper').slideToggle(600, function () {
            if ($(this).is(':visible')) {
                $('.post-body-sec__comment-icon').addClass('actlang-comment')
            }
            else {
                $('.post-body-sec__comment-icon').removeClass('actlang-comment')
            }
        })
    })

    //comparsion table open/close
    $('.table-container__header').on('click', function () {
        $(this).closest('.table-container__element-tab').find('.table-container__body').slideToggle(600, function () {
            if ($(this).is(':visible')) {
                $(this).closest('.table-container__element-tab').find('.table-container__ar').addClass('ar-table-active')
            }
            else {
                $(this).closest('.table-container__element-tab').find('.table-container__ar').removeClass('ar-table-active')
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

                window.addEventListener('click', e => { // при клике в любом месте окна браузера
                    const target = e.target // находим элемент, на котором был клик
                    if (!target.closest('.popup-air') && !target.closest('.air-open-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                        currentAirPopup.classList.remove('air-popup_active');
                        closeAirConteiner()
                    }
                })

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
                window.addEventListener('click', e => { // при клике в любом месте окна браузера
                    const target = e.target // находим элемент, на котором был клик
                    if (!target.closest('.popup-air') && !target.closest('.air-open-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                        document.querySelector('.video-popup iframe').setAttribute('src', '')
                    }
                })
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

    //selector btn
    function selectorBtn() {
        let btn = document.querySelectorAll('.comparison-page-sec__selector-btn')
        if (btn.length > 0) {
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', function () {
                    if (btn[i].classList.contains("comparison-page-sec__selector-btn_active")) {
                        btn[i].classList.remove('comparison-page-sec__selector-btn_active')
                    }
                    else {
                        btn[i].classList.add('comparison-page-sec__selector-btn_active')
                    }
                })
            }
        }
    }
    selectorBtn()

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


    //activ fixed product btn
    function activFixBtn() {
        let allFixedBtn = document.querySelectorAll('.prod-fixed-btn');
        for (let i = 0; i < allFixedBtn.length; i++) {
            allFixedBtn[i].addEventListener('click', () => {
                allFixedBtn[i].classList.toggle('prod-fixed-btn_active')
            })
        }
    }
    activFixBtn();

    //card tab switch
    function tabSwitch() {
        const mediaQuery = window.matchMedia('(min-width: 750px)')
        if (mediaQuery.matches) {
            let tabNavElements = document.querySelectorAll('.card-nav ul li')
            let tabConteinerElements = document.querySelectorAll('.tab-claster__element')
            if (tabNavElements.length > 0) {
                for (let i = 0; i < tabNavElements.length; i++) {
                    tabNavElements[i].addEventListener('click', function () {
                        for (let x = 0; x < tabNavElements.length; x++) {
                            tabNavElements[x].classList.remove('card-nav_active')
                        }
                        for (let y = 0; y < tabConteinerElements.length; y++) {
                            tabConteinerElements[y].classList.remove('tab-claster__element_active')
                        }
                        tabNavElements[i].classList.add('card-nav_active')
                        tabConteinerElements[i].classList.add('tab-claster__element_active')
                    })
                }
            }
        }
        else {
            let allTabElements = document.querySelectorAll('.tab-claster__element');
            if (allTabElements.length > 0) {
                for (let i = 0; i < allTabElements.length; i++) {
                    let headerTab = allTabElements[i].querySelector('.sec-title_no-anim')
                    let bodyTab = allTabElements[i].querySelector('.tab-claster__element-conteiner')
                    headerTab.addEventListener('click', function () {
                        allTabElements[i].classList.toggle('bodyTab_mob-active')
                    })
                }
            }
        }

    }
    tabSwitch()

    //reviews rate star 
    function rateStar() {
        let allRevStar = document.querySelectorAll('.rate-inp-conteiner__row .rate-inp-conteiner__star')
        let rateInput = document.querySelector('.rate-inp-conteiner-value')
        if (allRevStar.length > 0) {
            for (let i = 0; i < allRevStar.length; i++) {
                allRevStar[i].addEventListener('click', function () {
                    let nevStopValue = i;
                    for (let x = 0; x < allRevStar.length; x++) {
                        allRevStar[x].classList.remove('rate-inp-conteiner__star_active')
                    }
                    for (let x = 0; x <= nevStopValue; x++) {
                        allRevStar[x].classList.add('rate-inp-conteiner__star_active')
                    }
                    rateInput.setAttribute('value', i + 1)
                })
            }
        }
    }
    rateStar();


    //one click load product price info
    function loadOneClickBuy() {
        let btnOneClick = document.querySelector('.one-click-btn')

        if (btnOneClick != null) {
            let productPrice = document.querySelector('.price-conteiner__current-price span').innerHTML
            let productImage = document.querySelector('.card-big-slider__element_main-image img').getAttribute('src')

            let popupPrice = document.querySelector('.product-info-popup__price-value')
            let popupImage = document.querySelector('.product-info-popup__image img')
            popupPrice.innerHTML = productPrice
            popupImage.setAttribute('src', productImage)
        }

    }
    loadOneClickBuy()


    //card
    function cardHeaderValueElement() {
        let allCartElements = document.querySelectorAll('.cart-element')
        let headerCounterBox = document.querySelector('.card__num');
        if (allCartElements.length > 0) {
            headerCounterBox.innerHTML = allCartElements.length
            renderLocalPriseCart();
            renderTotalPriceCart()
        }
        else {
            headerCounterBox.innerHTML = 0;
            renderTotalPriceCart()
        }
    }
    cardHeaderValueElement();

    function cartInputCounter() {
        let cartAllElements = document.querySelectorAll('.cart-element')

        for (let i = 0; i < cartAllElements.length; i++) {
            let maxBtn = cartAllElements[i].querySelector('.cart-element__max')
            let minBtn = cartAllElements[i].querySelector('.cart-element__min')
            let input = cartAllElements[i].querySelector('.cart-element__input-counter')
            let totatElementPrice = cartAllElements[i].querySelector('.cart-element__price span')

            maxBtn.addEventListener('click', function () {
                maxValue(input, totatElementPrice)
            })
            minBtn.addEventListener('click', function () {
                minValue(input, totatElementPrice)
            })
        }
    }
    cartInputCounter()

    function maxValue(input) {
        if (+input.value == 99) {
            input.value == 99
        }
        else {
            input.value = +input.value + 1
        }
        renderLocalPriseCart()
        renderTotalPriceCart()
    }

    function minValue(input) {
        if (+input.value == 1) {
            input.value == 1
        }
        else {
            input.value = +input.value - 1
        }
        renderLocalPriseCart()
        renderTotalPriceCart()
    }

    function renderLocalPriseCart() {
        let cartAllElements = document.querySelectorAll('.cart-element')
        if (cartAllElements.length > 0) {
            for (let i = 0; i < cartAllElements.length; i++) {
                let valueInp = cartAllElements[i].querySelector('.cart-element__input-counter').value;
                let price = cartAllElements[i].querySelector('.cart-element__price span');
                let singlElementPrice = price.getAttribute('data-singl-price');
                let currentPrice = +singlElementPrice * valueInp;
                price.innerHTML = currentPrice;
                price.setAttribute('data-totat-price', currentPrice);
            }
        }
    }

    function renderTotalPriceCart() {
        let cartAllElements = document.querySelectorAll('.cart-element')
        let totalPrice = document.querySelector('.total-price-cart')
        let currentValue = 0
        if (cartAllElements.length > 0) {
            for (let i = 0; i < cartAllElements.length; i++) {
                let productAllPrice = cartAllElements[i].querySelector('.cart-element__price span').getAttribute('data-totat-price');
                currentValue = +productAllPrice + +currentValue
            }
            totalPrice.innerHTML = currentValue
            totalPrice.setAttribute('data-totat-price', currentValue)
        }
        else {
            totalPrice.innerHTML = currentValue
            totalPrice.setAttribute('data-totat-price', currentValue)
        }
    }

    function delCartElement() {
        let cartAllElements = document.querySelectorAll('.cart-element')
        if (cartAllElements.length > 0) {
            for (let i = 0; i < cartAllElements.length; i++) {
                let delBtn = cartAllElements[i].querySelector('.cart-element__close')
                delBtn.addEventListener('click', function () {
                    cartAllElements[i].remove()
                    cardHeaderValueElement();
                })
            }
        }
    }
    delCartElement()




    //cart page counter
    function cartPageInputCounter() {
        let cartAllElements = document.querySelectorAll('.cart-element-x2')
        if (cartAllElements.length > 0) {
            for (let i = 0; i < cartAllElements.length; i++) {
                let maxBtn = cartAllElements[i].querySelector('.cart-element-x2__max')
                let minBtn = cartAllElements[i].querySelector('.cart-element-x2__min')
                let input = cartAllElements[i].querySelector('.cart-element-x2__counter-value')
                let priseOneElement = cartAllElements[i].querySelector('.cart-element-x2__counter-value').getAttribute('data-priceoneelement')
                let totatElementPrice = cartAllElements[i].querySelector('.cart-element-x2__price span')
                let currentPrice

                currentPrice = +input.value * +priseOneElement;
                totatElementPrice.innerHTML = currentPrice


                maxBtn.addEventListener('click', function () {
                    input.value = +input.value + 1
                    currentPrice = +input.value * +priseOneElement;
                    totatElementPrice.innerHTML = currentPrice
                })
                minBtn.addEventListener('click', function () {

                    if (+input.value == 1) {
                        input.value == 1
                    }
                    else {
                        input.value = +input.value - 1
                    }
                    currentPrice = +input.value * +priseOneElement;
                    totatElementPrice.innerHTML = currentPrice
                })
            }
        }
    }
    cartPageInputCounter()

    //cart page del element
    function delCartPage() {
        let cartAllElements = document.querySelectorAll('.cart-element-x2')
        if (cartAllElements.length > 0) {
            for (let i = 0; i < cartAllElements.length; i++) {
                let delBtn = cartAllElements[i].querySelector('.cart-element-x2__del')
                delBtn.addEventListener('click', function () {
                    cartAllElements[i].remove()
                })
            }
        }
    }
    delCartPage()



    //delivery tab city
    function cityTab() {
        let allMainClasters = document.querySelectorAll('.body-element-delivery__v1');
        if (allMainClasters.length > 0) {
            for (let i = 0; i < allMainClasters.length; i++) {
                let navBtn = allMainClasters[i].querySelectorAll('.body-element-delivery__header li')
                let bodyElement = allMainClasters[i].querySelectorAll('.body-element-delivery__body-element')
                for (let x = 0; x < navBtn.length; x++) {
                    navBtn[x].addEventListener('click', function () {
                        for (let y = 0; y < navBtn.length; y++) {
                            navBtn[y].classList.remove('body-element-delivery__v1_active')
                            bodyElement[y].classList.remove('body-element-delivery__body-element_active')
                        }
                        navBtn[x].classList.add('body-element-delivery__v1_active')
                        bodyElement[x].classList.add('body-element-delivery__body-element_active')
                    })
                }
            }
        }
    }
    cityTab()

    //delivery tab region
    function tabRegion() {
        let navElements = document.querySelectorAll('.delivery-location-sec__tab-element')
        let bodyElements = document.querySelectorAll('.body-element-delivery')
        if (navElements.length > 0) {
            for (let i = 0; i < navElements.length; i++) {
                navElements[i].addEventListener('click', function () {
                    for (let y = 0; y < navElements.length; y++) {
                        navElements[y].classList.remove('delivery-location-sec__tab-element-active')
                        bodyElements[y].classList.remove('body-element-delivery_active')
                    }
                    navElements[i].classList.add('delivery-location-sec__tab-element-active')
                    bodyElements[i].classList.add('body-element-delivery_active')
                })
            }
        }
    }
    tabRegion()




    //search map
    function searchMap() {
        let input = document.getElementById("searchMapCity");
        let filter = input.value.toUpperCase();
        let ul = document.getElementById("mapCity");
        let li = ul.getElementsByTagName("div");

        // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
        for (let i = 0; i < li.length; i++) {
            let h5 = li[i];
            if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    function startSearchMap() {
        let currentInput = document.querySelector('#searchMapCity')
        if (currentInput != null) {
            currentInput.addEventListener('keyup', searchMap);
        }
        else {
            return;
        }
    }
    startSearchMap()



    //select city map
    function selectCityMap() {
        let inputCity = document.getElementById("searchMapCity");
        let inputIcon = document.querySelector('.search-map__search-ic')
        let allCityList = document.querySelectorAll('.search-map__city')
        let bodyCityContainer = document.querySelector('.search-map__city_wrapper');
        let bodyServicesElement = document.querySelector('.city-services-location');
        let downBaner = document.querySelector('.search-map__down-baner')

        if (allCityList.length > 0) {
            for (let i = 0; i < allCityList.length; i++) {
                allCityList[i].addEventListener('click', function () {
                    let currentCityId = allCityList[i].getAttribute('data-cityid');
                    let currenServicesArrrayElement = document.querySelector(`.city-services-location__element[data-cityid="${currentCityId}"]`)
                    let allServicesElements = currenServicesArrrayElement.querySelectorAll('.element-service-box__list-element')

                    //скриваем города показываем сервисы
                    bodyCityContainer.classList.add('hide-city-container')
                    bodyServicesElement.classList.add('show-services-body')
                    currenServicesArrrayElement.classList.add('active-services-element')
                    downBaner.classList.add('down-baner-hide')

                    inputIcon.classList.add('active-city-select')
                    inputCity.readOnly = true;
                    inputCity.value = allCityList[i].innerHTML;

                    //перезагружаем карту и передаем все элементы с даными о каждом сервисе в карту
                    initMap(allServicesElements)

                    //сбрасываем карту
                    let closeAllServices = document.querySelector('.active-city-select')
                    closeAllServices.addEventListener('click', function () {
                        inputIcon.classList.remove('active-city-select')
                        bodyCityContainer.classList.remove('hide-city-container')
                        bodyServicesElement.classList.remove('show-services-body')
                        currenServicesArrrayElement.classList.remove('active-services-element')
                        downBaner.classList.remove('down-baner-hide')
                        inputCity.readOnly = false;
                        initMap()
                    })



                    for (let x = 0; x < allServicesElements.length; x++) {
                        //ценьрируем карту при клике по выбраному сервису
                        allServicesElements[x].addEventListener('click', function () {
                            let currentMapData = {
                                zoomServ: 13,
                                latServ: allServicesElements[x].getAttribute('data-latitude'),
                                lngServ: allServicesElements[x].getAttribute('data-longitude'),
                            }
                            let statusElement = false;
                            initMap(allServicesElements, currentMapData, statusElement)
                        })
                    }
                })
            }
        }

    }
    selectCityMap();



    //map
    function initMap(allServicesElements, currentMapData, statusElement) {
        if (document.getElementById('map1') != null) {
            let mainZoom = 10;
            let mainLat = 59.92759903686107;
            let mainLng = 30.36016410248643;



            if (statusElement == false) {
                if (currentMapData != undefined) {
                    mainZoom = +currentMapData.zoomServ;
                    mainLat = +currentMapData.latServ;
                    mainLng = +currentMapData.lngServ
                }
                else {
                    mainZoom = 11;
                    mainLat = 59.92759903686107;
                    mainLng = 30.36016410248643;
                }
            }
            else {
                if (allServicesElements != undefined) {
                    let latCenterx = +allServicesElements[0].getAttribute('data-latitude')
                    let lngCenterx = +allServicesElements[0].getAttribute('data-longitude')

                    mainZoom = 11;
                    mainLat = +latCenterx;
                    mainLng = +lngCenterx;
                }
            }


            var map = new google.maps.Map(document.getElementById('map1'), {
                center: { lat: mainLat, lng: mainLng },
                zoom: mainZoom,
                panControl: false,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                rotateControl: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#8ec3b9"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1a3646"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#4b6878"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#64779e"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#4b6878"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#334e87"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#283d6a"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#6f9ba5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#3C7680"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#304a7d"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#98a5be"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#2c6675"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#255763"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#b0d5ce"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#023e58"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#98a5be"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1d2c4d"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#283d6a"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3a4762"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#0e1626"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#4e6d70"
                            }
                        ]
                    }
                ]
            });

            if (allServicesElements != undefined) {
                for (let i = 0; i < allServicesElements.length; i++) {
                    // получаем значения для каждого сервиса на карте
                    let titleService = allServicesElements[i].innerHTML
                    let latService = +allServicesElements[i].getAttribute('data-latitude')
                    let lngService = +allServicesElements[i].getAttribute('data-longitude')


                    // создаем макреры
                    let marker = new google.maps.Marker({
                        map: map,
                        position: { lat: latService, lng: lngService },
                        title: titleService,
                        icon: {
                            url: "img/_src/map.png",
                            //scaledSize: new google.maps.Size(127, 127)
                        }
                    });
                    let info = new google.maps.InfoWindow({
                        content: '<h2 class="map_title">' + titleService + '</h2>'
                    });


                    marker.addListener('click', function () {
                        info.open(map, marker);
                    });


                }

            }
        }

        // map.setOptions({ styles: styles });
    }
    initMap()


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
            .add(".catalog-front-sec__title", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".catalog-conteiner__title", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".catalog-conteiner__nav-row", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".product-element", {
                delay: 150,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".pagination", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".subscribtion-sec__form", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".card-info-sec__slider", {
                delay: 100,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".card-info-sec__info", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".product-dop-info-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".main-news", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".news-page-sec__btn-row", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".post-body-sec__image", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".post-body-sec__text ", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-page-sec__big_image ", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-page-sec__sm-img ", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-page-sec__text-row", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".about-page-sec__lorg-img", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".form-container", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".comparison-page-sec__table-container", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".cart-page-sec__elements-container", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".cart-page-sec__contact-form", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".delivery-location-sec__tab-element", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".delivery-location-sec__body", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".delivery-baner-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".delivery-faq-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".delivery-rules-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".services-page-info-sec__element", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".services-page-info-sec__baner", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".services-map-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })
            .add(".services-faq-sec", {
                delay: 300,
                duration: 1000,
                animation: "fadeInUp"
            })


            .init()
            .recalcPosition()
    }

    animateController()

    //animation end

}, false);


