alert('Hello! This is the new layout!');

// make logo space and navigation smaller

$('.siteheader').css({"height":"36px"});
$('.siteheader__logo-link').css({"padding":"0"});
$('.hero__content').css({"background-color":"#fff"});

// for each hotel show only main image, hotel name, rating, main price, distance
// hide other elements

$('#js_itemlist_controls').hide();
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



// change background color on scrolldown

$(document).ready(function(){ 

	var scroll_position = 0,
    animation_start_pos = 0,
    animation_end_position = 1000,
    // trivago colors ;)
    beginning_color = new $.Color('rgb(0,127,173)'), 
    ending_color = new $.Color('rgb(201,74,56)');
    $(document).scroll(function() {
        scroll_position = $(this).scrollTop(); 

        if(scroll_position >= animation_start_pos && scroll_position <= animation_end_position ) { 

        	var percentScrolled = scroll_position / (animation_end_position - animation_start_pos),
            newR = beginning_color.red() + ((ending_color.red() - beginning_color.red()) * percentScrolled),
            newG = beginning_color.green() + ((ending_color.green() - beginning_color.green()) * percentScrolled),
            newB = beginning_color.blue() + ((ending_color.blue() - beginning_color.blue()) * percentScrolled),
            newColor = new $.Color(newR, newG, newB);
            // or alternatively
            // var newColor = new $.Color('rgb(244, 143, 0)');
            
            $('.newItem').animate({backgroundColor: newColor}, 0);
        } else if (scroll_position > animation_end_position) {
             $('.newItem').animate({backgroundColor: ending_color}, 0);
        } else if (scroll_position < animation_start_pos) {
             $('.newItem').animate({backgroundColor: beginning_color}, 0);
        } else { }
    });
});




