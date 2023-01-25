
/* efeitos do bootstrap */
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



/* cards  */

// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading

window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// change the src of the content image to load the new high res photo
		content_image.src = image_url;
		
		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function() {
			// swap out the visible background image with the new fully downloaded photo
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}





/* botão do dark mode


const $html = document.querySelector("html")
const $checkbox = document.querySelector('switch')

$checkbox.addEventListener('change', function(){

    $html.classList.toggle('dark-mode')

}) 



const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})*/ 

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})





//evento de click para os projetos front-end 

$('.slider__nav__button--previous').click(function(){
    $('.slider__content').animate({scrollLeft: "-=800px"}, "slow");
  });
  
  $('.slider__nav__button--next').click(function(){
    $('.slider__content').animate({scrollLeft: "+=800px"}, "slow");
  });










//CERTIFICAÇÕES

$(function(){
    let current_view = 0;
    let count_views = $('.carrousel .screens li').length;
    
    // Methodes
    let switch_view = function(id){
        if(id >= 0  &&  id <= count_views)
            current_view = id;
        update_view();
    };
    let init_pagination = function() {
        for(let i=0; i<count_views; i++) {
            let page = $('<li/>');
            $(page).click(function() {switch_view(i);});
            $('.carrousel .pagination').append(page);
        }
    };
    let update_view = function(){
        // Calculate the current state
        let view0 = current_view;
        let view1 = current_view+1;
        let view2 = current_view+2;
        if(view0 <= 0) view0 = count_views;
        if(view2 > count_views) view2 = 1;
        $('.carrousel .screens li').removeClass('left right');
        $('.carrousel .screens li, .carrousel .pagination li').removeClass('active');
        $('.carrousel .screens li:nth-child('+view1+')').addClass('active');
        $('.carrousel .screens li:nth-child('+view0+')').addClass('left');
        $('.carrousel .screens li:nth-child('+view2+')').addClass('right');
        $('.carrousel .pagination li:nth-child('+view1+')').addClass('active');
    };
    $('.carrousel .screens li').click(function(e){
        let classes = $(e.target).attr('class');
        if(classes.includes('left')) {
            if(current_view==0)
                current_view = count_views-1;
            else
                current_view--;
        }
        else if(classes.includes('right')) {
            if(current_view == (count_views-1))
                current_view = 0;
            else
                current_view++;
        }
        update_view();
    });
    
    init_pagination();
    update_view();
});