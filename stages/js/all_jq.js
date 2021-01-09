// strat scrolltop functions of all pages in homepage jq
function scrollTop_Pages(scroll_page){
    $('.'+scroll_page).click(function(){
        $(this).parent().siblings().children().removeClass('active')

        $(this).addClass('active')
        console.log($(this).parent().siblings().children())

        $('html, body').animate({
            scrollTop: $('#'+scroll_page).offset().top
        },1500);
    })
}

scrollTop_Pages('head')
scrollTop_Pages('portfo')
scrollTop_Pages('Menu')
scrollTop_Pages('chef')
scrollTop_Pages('about_us')
scrollTop_Pages('reserv')
scrollTop_Pages('contact')



function scrollTop_all_pages(page,scroll_page){
    $('.'+page).click(function(){
        $('html, body').animate({
            scrollTop: $('#'+scroll_page).offset().top
        },1500);
    })   
}
// in food pages
scrollTop_all_pages('pizza_image','pizza')
scrollTop_all_pages('burger_image','burger')
scrollTop_all_pages('pasta_image','pasta')

// in drink pages
scrollTop_all_pages('coffe_image','coffe')
scrollTop_all_pages('juices_image','juices')
scrollTop_all_pages('ice_cream_image','ice_cream')

// end scrolltop functions of all pages in homepage jq