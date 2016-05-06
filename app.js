alert('Hello! This is the new layout!');

var map = $('#js_bigMap');

// IDEA 0
// show 5 items like dribbble layout, mobile style, hide the rest. Show 5 more on click


$('.siteheader').css({"height":"36px"});
$('.siteheader__logo-link').css({"padding":"0"});
$('.hero__content').css({"background-color":"#fff"});

$('#js_itemlist_controls').hide();
// $('#js_leftcol').hide();
$('.nav').remove();

$('#main_content').css({"background-color": "transparent"});
$('.centerwrapper').removeClass('centerwrapper centerwrapper--item clearfix').addClass('newCenter');

// $('.item__image-gallery-entry').click(function(){
// 	$('.item__slideout').fadeIn('slow');
// })

// $('#js_trv_map_container').removeClass('is-hidden').addClass('newMap');

// $('#js_itemlist').removeClass('item-order itemlist hotellist').addClass('newItem');

$('.js-main').removeClass('js-main main-wrap').addClass('newItem');

$('.container_itemlist').css({"background-color":"transparent"});
$('.centercol').css({"background-color":"transparent"});

// $('#js_itemlist > li').removeClass('hotel').addClass('newHotel');

$('.bookmark').remove();
$('.item__mini-icon').remove();
$('.review__count').remove();
$('.item__deal-other').remove();
$('.item__flag').remove();
$('.btn').removeClass('icon-icn_arrow_deal');

$('footer').remove();

// function minimal(){
// 	$('#js_itemlist .hotel').each(function(i){
// 		var item = $(this),
// 		img = item.find('.item_image img').attr('src'),
// 		igInnerHtml += 
// 		'<div class="newItem"><div class="image">' +
// 		'<h2>' + item__name__copytext + '</h2>' +
// 		'<span>' + name__star + '</span>' +
//         '<a target="_blank" href="'+data.link+'"><img src="'+img+'"></a>' + 
//         '</div></div>'
//     });











$(document).ready(function(){ 
//using color plugin

	var scroll_pos = 0,
    animation_begin_pos = 0,
    animation_end_pos = 1000,
    beginning_color = new $.Color('rgb(0,127,173)'), 
    ending_color = new $.Color('rgb(201,74,56)');
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 

        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 

        	var percentScrolled = scroll_pos / (animation_end_pos - animation_begin_pos),
            newR = beginning_color.red() + ((ending_color.red() - beginning_color.red()) * percentScrolled),
            newG = beginning_color.green() + ((ending_color.green() - beginning_color.green()) * percentScrolled),
            newB = beginning_color.blue() + ((ending_color.blue() - beginning_color.blue()) * percentScrolled),
            newColor = new $.Color(newR, newG, newB);
            // var newColor = new $.Color('rgb(244, 143, 0)');
            
            $('.newItem').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('.newItem').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('.newItem').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});




// for each hotel show only main image, hotel name, rating, main price, maaaaaybe distance



