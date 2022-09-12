$('.sl').slick({
    fade: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.sl2',
});

$('.sl2').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.sl',
    focusOnSelect: true,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 578,
            settings: {
              variableWidth: true,
              slidesToShow: 4,
              }
          },
        {
          breakpoint: 376,
          settings: {
            variableWidth: true,
            slidesToShow: 4,
            }
        }
    ]
});

// $('.sl2').slick('slickGoTo', 4);



$('.offers__carousel_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 578,
            settings: {
            //   variableWidth: true,
              slidesToShow: 1,
              arrows: false,
            }
          },
        {
          breakpoint: 376,
          settings: {
            // variableWidth: true,
            // slidesToShow: 4
            arrows: false,
          }
        }
    ]
});

$('.carousel__item_image').slick({
    arrows: false,
    dots: true,
    dragable: false,
    fade: true,
    swipe: false,
});

// маска инпута
$(function(){
  $("#phone").mask("+7 (999) 999-9999");
  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");
});



// чекбоксы

$(document).ready(function() {

    $.each($('checkbox'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
         }
    });
    $(document).on('click', '.checkbox', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop('checked',false);
            $(this).parent().find('#btn').prop('disabled',true);

        }else{
            $(this).find('input').prop('checked',true);
            $(this).parent().find('#btn').prop('disabled',false);
        }
        $(this).toggleClass('active');


        return false;
    });
});


// модальное окно
const popupLinks = document.querySelectorAll('.button'); /*.button = .popup-link*/
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');/*для фиксированных объектов */

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close'); /*.close = .close-popup */
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.modal')); /*.modal = .popup */
            e.preventDefault();
        });
    }
}
function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.modal.open');/* .modal.open = .popup.open */
        if (popupActive) {
            popupClose(popupActive, false);
        }else{
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.content')) { /*.reverse + .credit (.content) = .popup__content*/
                popupClose(e.target.closest('.modal'));/*.modal = .popup*/
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px'; /*пришлось вкатить боди вместо .wrapper*/

    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


// бургер меню

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__navigation').addClass('active');
        $('body').addClass('lock1');
    });

    $('.main-menu-close').click(function(event) {
        $('.header__navigation').removeClass('active');
        $('body').removeClass('lock1');
    });
});
