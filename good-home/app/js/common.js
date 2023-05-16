//jquery scripts
$(function () {
    $('.main-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div>',
    });

    function formatSlideNumber(number) {
        return ("0" + (number + 1)).slice(-2);
    }

    $('.main-sec__slider.slider-category').on('afterChange', function (event, slick, currentSlide) {
        $('.counter-slider').text(formatSlideNumber(currentSlide));
    });

    $('.slider-types__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        prevArrow: '<div class="ar_slier prev-ar_slide"></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"></div>',
    });

    //slider project popup
    $('[data-fancybox="prodycts"]').fancybox({
        infobar: true,
        buttons: [
            "close"
        ],
    });

});


// vanila js scripts
window.addEventListener('load', function () {
    //change lang
    function changeLang() {
        let langElement = document.querySelectorAll('.lang-conteiner__element');
        for (let i = 0; i < langElement.length; i++) {
            langElement[i].addEventListener('click', function () {
                for (let x = 0; x < langElement.length; x++) {
                    langElement[x].classList.remove('lang-conteiner__element_active')
                }
                langElement[i].classList.add('lang-conteiner__element_active')
            })
        }
    }
    changeLang();

    //change switch btn
    function switchBtn() {
        let switchConteiner = document.querySelectorAll('.switch-conteiner');
        for (let i = 0; i < switchConteiner.length; i++) {
            switchConteiner[i].querySelector('.switch-btn').addEventListener('click', function () {
                switchConteiner[i].classList.toggle('active-switch')
            })
        }
    }
    switchBtn();

    //about more info
    function openmore() {
        let btMore = document.querySelector('.more-text__btn-open')
        let textConteiner = document.querySelector('.more-text')
        if (btMore !== null) {
            btMore.addEventListener('click', function () {
                textConteiner.classList.toggle('activ-more')
            })
        }

    }
    openmore()

    //del btn favourite
    function delFavourite() {
        let allFavourite = document.querySelectorAll('.favourite-box');
        for (let i = 0; i < allFavourite.length; i++) {
            allFavourite[i].querySelector('.favourite-box__wrapper').addEventListener('click', function () {
                allFavourite[i].classList.toggle('active-del')
            })
        }
    }
    delFavourite();

    //filtr style switch
    function switchFiltr() {
        let langElement = document.querySelectorAll('.favourites__ul-nav li');
        for (let i = 0; i < langElement.length; i++) {
            langElement[i].addEventListener('click', function () {
                for (let x = 0; x < langElement.length; x++) {
                    langElement[x].classList.remove('favourites__nav-active')
                }
                langElement[i].classList.add('favourites__nav-active')
            })
        }
    }
    switchFiltr()


    //add to favourite
    function switcFav() {
        let langElement = document.querySelectorAll(' .add-fav');
        for (let i = 0; i < langElement.length; i++) {
            langElement[i].addEventListener('click', function () {
                if (this.classList.contains('add-fav__active')) {
                    this.classList.remove('add-fav__active')
                }
                else {
                    this.classList.add('add-fav__active')
                }
            })
        }
    }
    switcFav()


    //viev password
    function viewPass() {
        let allPass = document.querySelectorAll('.password-input')

        for (let i = 0; i < allPass.length; i++) {
            allPass[i].querySelector('.input-box__eye-ico').addEventListener('click', function () {
                if (allPass[i].querySelector('input').getAttribute('type') == "password") {
                    allPass[i].querySelector('input').setAttribute("type", "text");
                    this.querySelector('img').setAttribute('src', 'img/_src/pass-eye-active.svg')
                }
                else {
                    allPass[i].querySelector('input').setAttribute("type", "password");
                    this.querySelector('img').setAttribute('src', 'img/_src/pass-eye.svg')
                }

            })
        }
    }
    viewPass()


    //open search
    function openSearch() {
        let searchOpenBtn = document.querySelector('.btn-search-open')
        let searchCloseBtn = document.querySelector('.form-search__close')
        let searchForm = document.querySelector('.form-search')
        if (searchOpenBtn !== null) {
            searchOpenBtn.addEventListener('click', () => {
                searchForm.classList.add('form-search_activ')
            })
            searchCloseBtn.addEventListener('click', () => {
                searchForm.classList.remove('form-search_activ')
            })
        }
    }
    openSearch()


    //project add slider num text 
    function projectSlideElement() {
        let allSliderElements = document.querySelectorAll('.project-top-sec__img');
        if (allSliderElements.length > 3) {
            let newElement = document.createElement('div')
            let currentValueSlide = allSliderElements.length - 3;
            newElement.classList.add('project-top-sec__img-value')
            newElement.innerHTML = `+${currentValueSlide}`
            allSliderElements[2].append(newElement)
        }

    }
    projectSlideElement();


    //confirm code enter
    function enterCode() {
        let allInp = document.querySelectorAll('.code-confirm-row__box input');
        let allNumBtn = document.querySelectorAll('.keys-wrapper__element')
        let dellBtn = document.querySelector('.keys-wrapper__element-del');
        let counterInp = 0;


        for (let i = 0; i < allNumBtn.length; i++) {
            allNumBtn[i].addEventListener('click', function () {
                let currentNum = +this.innerHTML;

                allInp[counterInp].value = currentNum
                if (counterInp == 3) {
                    counterInp = 0
                }
                else {
                    counterInp = counterInp + 1
                }

            })
        }

        if (dellBtn !== null) {
            dellBtn.addEventListener('click', function () {
                if (allInp[3].value.length) {
                    counterInp = 3;
                    allInp[counterInp].value = "";
                }
                else if (allInp[2].value.length) {
                    counterInp = 2;
                    allInp[counterInp].value = "";
                }
                else if (allInp[1].value.length) {
                    counterInp = 1;
                    allInp[counterInp].value = "";
                }
                else if (allInp[0].value.length) {
                    counterInp = 0;
                    allInp[counterInp].value = "";
                }
            })
        }

    }
    enterCode()


    //timer password
    function timerPassword() {
        if (document.getElementById("timer") !== null) {
            var minute = 1;
            var sec = 59;
            setInterval(function () {
                document.getElementById("timer").innerHTML =
                    minute + ":" + sec;
                sec--;
                if (sec == 00) {
                    minute--;
                    sec = 60;
                    if (minute == 0) {
                        minute = 5;
                    }
                }
            }, 1000);
        }
    };
    timerPassword();

    //video play
    function videoFunction() {
        let allVideos = document.querySelectorAll('.video-element')
        if (allVideos.length > 0) {
            for (let i = 0; i < allVideos.length; i++) {
                let currentBtn = allVideos[i].querySelector('.play-vid-btn')
                let currentPause = allVideos[i].querySelector('.pause-video')
                let currentVideo = allVideos[i].querySelector('.vipeo-player')
                let currentVideoTime = allVideos[i].querySelector('.about-video__time')
                setTimeout(function () {
                    let timestamp = currentVideo.duration;
                    let hours = Math.floor(timestamp / 60 / 60);
                    let minutes = Math.floor(timestamp / 60) - (hours * 60);
                    let seconds = Math.round(timestamp % 60);
                    let formatted = minutes + ':' + seconds;

                    currentVideoTime.innerHTML = formatted
                }, 300)
                function playfunc() {
                    allVideos[i].classList.add('play-style')
                    currentVideo.play()
                    currentVideo.setAttribute('controls', 'controls')
                }

                function pauseFunc() {
                    currentVideo.pause()
                }

                function stopfunc() {
                    allVideos[i].classList.remove('play-style')
                    currentVideo.pause();
                    currentVideo.currentTime = 0;
                    currentVideo.removeAttribute('controls')
                }

                currentBtn.addEventListener('click', playfunc)
                currentVideo.addEventListener('tab', pauseFunc)
                currentPause.addEventListener('click', stopfunc)

            }
        }
    }
    videoFunction();


    //photo file load
    function photoFileLoad() {
        let inpFile = document.querySelector('.photo-download__file');
        let image = document.querySelector('.main-profile-image')
        let imageWrapper = document.querySelector('.profile-sec__photo')
        let errorText = document.querySelector('.error-image ')
        if (inpFile !== null) {
            imageWrapper.addEventListener('click', () => {
                inpFile.click()
            })
            inpFile.addEventListener("change", function () {
                let valueInp = this.files;
                let f = valueInp[0];
                if (!f.type.match('image.*')) {
                    image.setAttribute('src', 'img/_src/photo-def.jpg')
                    errorText.classList.add('error-image_active')
                }
                else {
                    errorText.classList.remove('error-image_active')
                    let reader = new FileReader();
                    reader.onload = (function () {
                        return function (e) {
                            let currentSrc = e.target.result;
                            image.setAttribute('src', currentSrc)
                        };
                    })(f);
                    reader.readAsDataURL(f);
                }
            })
        }


    }
    photoFileLoad();


    //phone validation only namber
    function onlyNumInput() {
        let allPhoneInput = document.querySelectorAll('.type-num')
        for (let i = 0; i < allPhoneInput.length; i++) {
            let input = allPhoneInput[i];
            input.addEventListener('keydown', function (event) {
                187
                // Разрешаем: backspace, delete, tab и escape
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                    // Разрешаем: Ctrl+A
                    (event.keyCode == 65 && event.ctrlKey === true) ||

                    (event.keyCode == 187 && event.keyCode == 16) ||
                    // Разрешаем: home, end, влево, вправо
                    (event.keyCode >= 35 && event.keyCode <= 39)) {

                    // Ничего не делаем
                    return;
                } else {
                    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
                    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }
            });
        }
    }
    onlyNumInput();



}, false);


