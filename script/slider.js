$(".document").ready(function() {
    

    $(".sliderbig").slick({
        fade: true,
        asNavFor: ".slidermin",
    });

    $(".slidermin").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1, 
        arrows: false,
        focusOnSelect: true,
        asNavFor: ".sliderbig",
        responsive: [
            {
              breakpoint: 360,
              settings: "unslick"
            },
        ]
    });    

    
    $(".slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                arrows: false,
              }  
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false,
                }  
            },
            {
                breakpoint: 500,
                settings: "unslick",               
            },
        ]  
    });

    $(".slider-comment").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }  
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }  
            },
        ]  
    });


    $(".slider-thanks").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1, 
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                slidesToShow: 3,
              }  
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    dots: false,
                }  
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    dots: false,
                }  
            },
        ] 
    });

    $(".slider-vertical").slick({
        dots: false,
        infinite: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1, 
        focusOnSelect: true,
        asNavFor: ".slider-product",
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 8,
              }  
            }
        ] 
    });
    
    $(".slider-product").slick({
        dots: false,
        fade: true,
        asNavFor: ".slider-vertical",
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              }  
            }
        ] 
    });

    $(".tabs-slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                arrows: false,
              }  
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: false,
                }  
            },
            {
                breakpoint: 360,
                settings: "unslick",               
            },
        ]  
    });


    // $(".tabs__item").on("click", function() {
    //     // $(".one-tab-link").removeClass("tab-active");
    //     // $(this).addClass("tab-active");
    
    //     var clickedTitleDataId = $(this).attr("data-id"); //get data-id attribute of clicked title
    //     /*Find tab-content with same data-id attribute like clicked title*/
    //     $(".tabs_content").each(function() {
    //       var tabsContentDataId = $(this).attr("data-id");
    //       if (clickedTitleDataId == tabsContentDataId) {
    //         $(".tabs_content").css({ "z-index": "-1", position: "absolute" });
    //         $(this).css({ "z-index": "1", position: "relative" });
    //       }
    //     });
    // });
    
});