$(function(){
    $('.header__current').on('click', function(){
        $(this).toggleClass('active')
        $('.header__dropdown').toggleClass('active')
    })

    $('.header__currents, .header__drop').on({
        mouseenter: function(){
            $(this).next('.header__drop').addClass('active')
            $(this).prev('.header__currents').addClass('active')
            $(this).addClass('active')
        },
        mouseleave: function(){
            $(this).next('.header__drop').removeClass('active')
            $(this).prev('.header__currents').removeClass('active')
            $(this).removeClass('active')
        },
    })

    $('.questions__current').on('click', function(){
        $(this).next('.questions__content').toggleClass('active')
        $(this).toggleClass('active')
    })

    $('.header-btn').on('click', function(){
        $('.mobile-menu').addClass('active')
    })

    $('.mobile-menu__close').on('click', function(){
        $('.mobile-menu').removeClass('active')
    })

    $('.mobile-menu__current img').on('click', function(){
        $(this).parent().parent('.mobile-menu__drop').toggleClass('active')
    })

    let sum = $('.calculator__content span')

    $('.calculator__add').on('click', function(){
        let result = sum.text() * 1;
        result++;
        $('.calculator__content span').text(result)
        $('.calculator__amount').val(result)

    })

    $('.calculator__take').on('click', function(){
        let result = sum.text() * 1;
        if(result <= 1)  result = 1;
        else result--;

        $('.calculator__content span').text(result)

        $('.calculator__amount').val(result)
    })


    // QUARTER

    let sums = $('.calculator__quarter .calculator__content span')

    $('.calculator__quarter .calculator__multiple').on('click', function(){
        let result = sums.text() * 1;
        result += 10;
        $('.calculator__quarter .calculator__content span').text(result)
        $('.calculator__quarter .calculator__amount').val(result)

    })

    $('.calculator__quarter .calculator__takeout').on('click', function(){
        let result = sums.text() * 1;
        if(result <= 1)  result = 10;
        else result -= 10;

        $('.calculator__quarter .calculator__content span').text(result)

        $('.calculator__quarter .calculator__amount').val(result)
    })


    $('.service__target').on({
        mouseenter: function(){
            $(this).next('.service__content').addClass('active')
        },
        mouseleave: function(){
            $(this).next('.service__content').removeClass('active')
        },
    })

 
    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Ваша заявка принята!");
                location.reload(true);
            });
            return false;
        });
    
    });
        


});

// MASKING 

let maskedPhones = document.querySelectorAll("input[type='tel']");
for (var i = 0; i < maskedPhones.length; i++) {
    new IMask(maskedPhones[i], {
        mask: '+{7}(000) 000 00 00',
        placeholder: {
            show: 'always'
        }
    });
}