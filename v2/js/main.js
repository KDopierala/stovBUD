
    $('.header__btn').on( "click", function() {
        $('.header__nav-mobile').toggleClass('open')
    })

    $( ".header__link" ).on( "click", function() {
        $( ".header__link" ).removeClass("active")
        $( this ).addClass("active")
    });



