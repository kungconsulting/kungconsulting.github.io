(function ($) {
    $(document).ready(function () {

        /*------------------------------------------------
        Антиспам
        ------------------------------------------------*/
        $('.ajax_form').each(function () {
            $(this).append('<input type="text" name="org" value="" class="_org" style="visibility:hidden; height: 0; min-height: 0; width: 0; padding: 0; border:none;margin:0"/>');
        });

        /*------------------------------------------------
        last row fix
        ------------------------------------------------*/
        var flex_fix_class = $(".flex.last-row-fix > *:last-child").attr("class");
        flex_fix_block = '<div class="' + flex_fix_class + '"></div>';
        $('.flex.last-row-fix').append(flex_fix_block)
            .append(flex_fix_block)
            .append(flex_fix_block)
            .append(flex_fix_block)
            .append(flex_fix_block);
        /*------------------------------------------------*/
        /*Modal start*/
        /*------------------------------------------------*/

        $('.open_modal').click(function () {
            $('html').css('overflow', 'hidden').css('padding-right', '15px');

            var cls = $(this).attr('class').split(' ')[1]
            number = cls[cls.length - 1];
            console.log(number);

            $('.modalwrapper_' + number).css('overflow-y', 'scroll').attr('id', 'modalwrapper_active');
            $('#modal_' + number).fadeIn();
            $('.fon_modal_' + number).fadeIn();
            $('.modalwrapper_' + number).fadeIn();
            $('#modal_' + number).addClass('poehali');
        });

        $('.close_modal, .fon_modal').click(function () {

            var cls = $(this).attr('class').split(' ')[1]
            number = cls[cls.length - 1];
            console.log(number);

            $('.modalwrapper_' + number).css('overflow-y', '').attr('id', '');
            $('#modal_' + number).fadeOut();
            $('.fon_modal_' + number).fadeOut();
            $('.modalwrapper_' + number).fadeOut();
            $('#modal_' + number).removeClass('poehali');
            $('html').css('overflow', '').css('padding-right', '0');
        });

        /* ESC close*/
        $(document).on('keyup', function (evt) {
            if (evt.keyCode == 27) {
                $('.modalwrapper').css('overflow-y', '').attr('id', '');
                $('.modal, .fon_modal, .modalwrapper').fadeOut();
                $('.modal').removeClass('poehali');
                $('html').css('overflow', '').css('padding-right', '0');
            }
        });

        // prevent body scrolling on touch devices
        $('div[class*="open_modal"]').click(function () {
            var _overlay = document.getElementById('modalwrapper_active');
            var _clientY = null; // remember Y position on touch start

            _overlay.addEventListener('touchstart', function (event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    _clientY = event.targetTouches[0].clientY;
                }
            }, false);

            _overlay.addEventListener('touchmove', function (event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    disableRubberBand(event);
                }
            }, false);

            function disableRubberBand(event) {
                var clientY = event.targetTouches[0].clientY - _clientY;

                if (_overlay.scrollTop === 0 && clientY > 0) {
                    // element is at the top of its scroll
                    event.preventDefault();
                }

                if (isOverlayTotallyScrolled() && clientY < 0) {
                    //element is at the top of its scroll
                    event.preventDefault();
                }
            }

            function isOverlayTotallyScrolled() {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
                return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
            }
        });


        /*------------------------------------------------*/
        /*Modal end*/
        /*------------------------------------------------*/
        /*close DjMegaMenu whewn open Modal*/
        $(".dj-offcanvas-modules .open_modal").click(function () {
            $("body").removeClass('dj-offcanvas-open dj-offcanvas-anim');
        });

        $(".dj-offcanvas-modules .open_modal").click(function () {
            $("body").removeClass('dj-offcanvas-open dj-offcanvas-anim');
        });

        /*------------------------------------------------*/
        /*Modal end*/
        /*------------------------------------------------*/

        // FIXED MENU
        $(window).scroll(function () {
            if ($(window).width() >= '1221') {
                if (jQuery(document).scrollTop() > 90) {
                    $('body').addClass('min');
                } else {
                    $('body').removeClass('min');
                }
            }
            else {
                $('body').removeClass('min');
            }

        });


        // BANNER EFFECT
        $('body').mousemove(function (e) {
            var xP = e.clientX / $(window).width();
            var yP = e.clientY / $(window).height();
            $('.parallax').css('transform', 'translate(' + xP * 35 + 'px, ' + yP * 35 + 'px)')
            $('.parallax2').css('transform', 'translate(' + xP * 20 + 'px, ' + yP * 20 + 'px)')
        });

        $(".lang_switch li").click(function () {
            $('.lang_switch li').toggleClass('open');
        });


        // Zakazat KP
        $(".kp").click(function (e) {
            $('body').addClass("over_lay");
        });
        $(".closebtn").click(function (e) {
            $('body').removeClass("over_lay");
        });




        // MOBILE MENU
        $(".mobile-mainmenu-button").click(function () {
            $("body").addClass("mobile-mainmenu-active");
            $('.mobile-mainmenu li.parent.active > a').addClass("opened");
            $('.mobile-mainmenu li.active > .mobile-submenu').css('display', 'block');

        });

        $(".mobile-mainmenu-close").click(function () {
            $("body").removeClass("mobile-mainmenu-active");
        });

        $(document).mouseup(function (e) {
            var div = $(".mobile-mainmenu-outer");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $("body").removeClass("mobile-mainmenu-active");
            }
        });


        $(".mobile-mainmenu li.parent > a").click(function (e) {
            var hrefLenth = $(this).attr("href").length;

            if (!$(this).hasClass("opened")) {
                e.preventDefault()
                $(this).addClass("opened");
                $(this).next(".mobile-submenu").slideDown()
            } else {
                e.preventDefault();
                $(this).removeClass("opened");
                $(this).next(".mobile-submenu").slideUp()
            }

        });


        $('ul.tabs__caption > li:first-of-type, .tabs > .tabs__content:first-of-type').addClass('active');
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

        /*------------------------------------------------
        open | close button
        ------------------------------------------------*/

        $(".text_container .open").click(function () {
            $(this).siblings('.hidden_text').slideDown();
            $(this).siblings('.close').show();
            $(this).hide();
        })
        $(".text_container .close").click(function () {
            $(this).siblings('.hidden_text').slideUp();
            $(this).siblings('.open').show();
            $(this).hide();
        })

        // file 

        'use strict';

        ; (function (document, window, index) {
            var inputs = document.querySelectorAll('.inputfile');
            Array.prototype.forEach.call(inputs, function (input) {
                var label = input.nextElementSibling,
                    labelVal = label.innerHTML;

                input.addEventListener('change', function (e) {
                    var fileName = '';
                    if (this.files && this.files.length > 1)
                        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                    else
                        fileName = e.target.value.split('\\').pop();

                    if (fileName)
                        label.innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
                });

                // Firefox bug fix
                input.addEventListener('focus', function () { input.classList.add('has-focus'); });
                input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
            });
        }(document, window, 0));


    });
})(jQuery)
