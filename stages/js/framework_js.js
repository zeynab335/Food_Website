///////////////////////////////////////////////////////////////
// start form action
var form_acion = document.querySelectorAll(".form_acion")
form_acion.forEach(input=>{
    input.onfocus = function(){
        input.style.border = 'none';
        input.style.boxShadow = 'none';
        input.style.borderBottom='4px solid #dddcd8'
        input.style.background = 'none'
        input_attr = input.getAttribute('placeholder');
        input.setAttribute('placeholder',' ')
        
    }
    input.onblur = function(){
        input.style.border = '1px solid #dddcd8'
        
        input.style.backgroundColor = '#dddcd8'

        input.setAttribute('placeholder',input_attr)

    }
})

// end form action
////////////////////////////////////////////////////////////////


// start color option 

color_option_li = document.querySelectorAll('.color_option_ul li');

color_option_li.forEach(color_li=>{
    // set color_li to background li 
    color_value = color_li.getAttribute('data-value');
    color_li.style.backgroundColor = color_value;
    
    color_li.onclick = function(){
        color_value = color_li.getAttribute('data-value');
        document.querySelectorAll('.heading_font').forEach(item=>{
            item.style.color = color_value
        });
        document.querySelectorAll('.backgro_btn').forEach(item=>{
            item.style.backgroundColor = color_value
        });
    }
})

color_option_icon = document.querySelector('.color_option_icon')

color_option_icon.onclick = function(){
    color_option_icon.parentNode.children[1].classList.toggle('active')
    color_option_icon.classList.toggle('active');

}

// end color option
//////////////////////////////////////////////////////////


// start dark mode

dark_mode_icon = document.querySelector('.dark_option')
var active = 0
dark_mode_icon.onclick = function(){
    dark_mode_icon.childNodes[0].classList.toggle('fa-spin');
    dark_mode_icon.classList.toggle('active');
    
    var dark_paes = document.querySelectorAll('body,.about,.our-chiefs,hr');
    for (var i = 0; i < dark_paes.length; i++){
        console.log(dark_paes[i])
        dark_paes[i].classList.toggle('dark-background');
    }
    document.querySelectorAll('hr').forEach(hr=>{
        hr.classList.toggle('dark-items')
    })

    document.querySelectorAll('.menus_content_link > div').forEach(menu_div=>{
        menu_div.classList.toggle('dark-items')
    })

    document.querySelectorAll('.all_menus .info').forEach(menu_div=>{
        menu_div.classList.add('dark-items')
        menu_div.addEventListener('mouseemter',function(){
            menu_div.classList.toggle('hover')
        })
    })


}

// end dark mode


///////////////////////////////////////////////////////

/* start loading */

window.onload = setInterval(function(){
    
    document.getElementById('loading').style.display = 'none';
    
},2000) 

/* end loading */