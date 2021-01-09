image_menu = document.querySelectorAll('.image_menu')
image_menu.forEach(menu_name => {
    menu_name.onmouseover= function() {
        parent = menu_name
        parent.children[1].classList.add('active')
        parent.children[1].onclick = function(){
            
            parent.children[1].classList.add('active')
            document.querySelectorAll('.menu_content').forEach(menu_cls=>{
                menu_cls.classList.remove('active')
            })
            document.querySelector('.'+ parent.getAttribute('data-value')).classList.add('active')

        }
    }
    menu_name.onmouseout= function() {
        parent = menu_name
        parent.children[1].classList.remove('active')
    }
});

///////////////////////////////////////////////////////////////


// start code of like menu item

menu_icon = document.querySelectorAll('.menu_content .info .right');
menu_icon.forEach(icon_parent=>{
    icon_parent.onclick = function(){
        icon_parent.children[0].classList.toggle('fas')
        icon_parent.children[0].classList.toggle('active')

    }
})

// end code of like menu item


////////////////////////////////////////////////////////////////




var select_Info_Of_Images = document.querySelectorAll(".menu_content .info .btn-food-details");
select_Info_Of_Images.forEach(info=>{
    info.addEventListener('click' ,  (infoClick) =>{

        // start definition
            Popup_overlay           = document.createElement('div');
            Popup_box               = document.createElement('div');
            
            Popup_image             = document.createElement('img');
            
            Popup_image_info        = document.createElement('div');

            Popup_img_heading       = document.createElement('h4');
            headding_text = info.parentNode.parentNode.parentNode.children[1].title
            Popup_img_heading_text  = document.createTextNode(headding_text)

            Popup_clear             = document.createElement('div');
            
            price_large         = document.createElement('p');
            text1 = info.parentNode.parentNode.parentNode.children[1].getAttribute('data-large')
            price_large_text  = document.createTextNode("Large Size:  " + text1 + " $")

            price_meduim        = document.createElement('p');
            text2 = info.parentNode.parentNode.parentNode.children[1].getAttribute('data-meduim')
            price_meduim_text  = document.createTextNode("Medium Size: " + text2 + " $")


            // start exit icon
                Popup_exist = document.createElement('div');
                Popup_icon_exist = document.createTextNode('X');
            // start exit icon    

        
        // end definition

        //////////////////////////////////////////////////

        // start adding attributes

            // add class to Popup_overlay:
            Popup_overlay.classList = 'menu_details';

            // add class to Popup_box:
            Popup_box.classList = 'row animation left';
            
            // add class to Popup_image:
            image_src = info.parentNode.parentNode.parentNode.children[1].src
            Popup_image.src = image_src


            // add class img_info to img_info
            Popup_image_info.classList = "image_info col-lg-6 col-xs-6";
            
            // add class Popup_img_heading
            Popup_img_heading.classList = 'heading_font'

            // add class clearfix to popup-clear
            Popup_clear.classList = "clearfix";

            // add class "exist" to Popup_exist ;
            Popup_exist.classList = "exist";

            // add class price_large , price_meduim
            price_large.classList = 'paragh_font';
            price_meduim.classList = 'paragh_font';
        
        // end adding attributes
        //////////////////////////////////////////////////////////////////////
        

        // start appending childern

            // append child Popup_overlay to body
            document.body.appendChild(Popup_overlay);

            //append child Popup_box-div to Popup_overlay
            Popup_overlay.appendChild(Popup_box);

            
            //append child Popup_image  to Popup_box
            Popup_box.appendChild(Popup_image);

            
            // append  img_info to Popup_box
            Popup_box.appendChild(Popup_image_info);
            
            // append headding to Popup_img_heading
            Popup_img_heading.appendChild(Popup_img_heading_text);
            Popup_image_info.appendChild(Popup_img_heading);

            // append headding to Popup_img_heading
            price_large.appendChild(price_large_text);
            Popup_image_info.appendChild(price_large);

            // append headding to Popup_img_heading
            price_meduim.appendChild(price_meduim_text);
            Popup_image_info.appendChild(price_meduim);




            Popup_image_info.appendChild(Popup_clear);
            
        
            // append popup exist to popup box
                //append child Popup_icon_exist  to Popup_exist
                Popup_exist.appendChild(Popup_icon_exist);

                // when click on Popup_exist, will hide puple
                Popup_exist.addEventListener('click' , function(){
                    Popup_overlay.style.display = "none";
                })
                //append child Popup_exist  to Popup_box
                Popup_box.appendChild(Popup_exist);

        

        // end appendeing childern

        // Popup_icon_exist 

        
        

        
        
    })

})    

/* end  our  New_Arrivals*/




