// start Menu links
//console.log(window.pageYOffset)
all_links = document.querySelectorAll('.menus_links h1');
all_links.forEach(link => {
    link.onclick = function(){
        content_of_link = link.getAttribute('data-link');
        // remove class active from all divs of content menus
        document.querySelectorAll('.menus_content_link > div').forEach(menus =>{
            menus.classList.remove('active');
        })

        // add class active to content menu of this link
        document.getElementById(content_of_link).classList.add('active')
        

        //
    }
});

// end Menu links


/////////////////////////////////////////////////////////

// start  reservation page
var icon_reserv = document.querySelectorAll('.reservation .row .recerv_content');
icon_reserv.forEach(icon=>{ 
    console.log(icon)
    icon.onclick = function(){
        value_reserv = icon.getAttribute('data-value')
        console.log(value_reserv)
        icon.children[1].classList.toggle('fa-sort-down');        

        if(icon.children[1].classList.contains('fa-sort-down')){
            document.querySelector('.reservation .row .'+value_reserv).style.display = 'block'

        }
        else{
            document.querySelector('.reservation .row .'+value_reserv).style.display = 'none'
            icon.children[1].classList.toggle('fa-sort-up');

        }
    }

})

// .fa-sort-up
// end reservation page






