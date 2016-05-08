// this is why i decided to go with: i simply eliminated a bunch of elements from the page to make it
// look a little less distracting for the user. the background color also changes on scrolldown

alert('Hello! This is the new layout!');

// make logo space and navigation smaller
$('.siteheader').css({"height":"36px"});
$('.siteheader__logo-link').css({"padding":"0"});
$('.hero__content').css({"background-color":"#fff"});

// for each hotel show only main image, hotel name, rating, main price, distance
// hide other elements, remove sidebar and item control bar

$('#js_itemlist_controls').hide();
$('.nav').remove();

$('#main_content').css({"background-color": "transparent"});
$('.centerwrapper').removeClass('centerwrapper centerwrapper--item clearfix').addClass('newCenter');

// change bg color
$('.js-main').removeClass('js-main main-wrap').addClass('newItem');

$('.container_itemlist').css({"background-color":"transparent"});
$('.centercol').css({"background-color":"transparent"});

// remove little elements in the item details
$('.bookmark').remove();
$('.item__mini-icon').remove();
$('.review__count').remove();
$('.item__deal-other').remove();
$('.item__flag').remove();
$('.btn').removeClass('icon-icn_arrow_deal');

// do not show footer
$('footer').remove();



// change background color on scrolldown
$(document).ready(function(){ 

	var scroll_position = 0,
    animation_start_position = 0,
    animation_end_position = 1000,
    // trivago colors ;)
    beginning_color = new $.Color('rgb(0,127,173)'), 
    ending_color = new $.Color('rgb(201,74,56)');
    $(document).scroll(function() {
        scroll_position = $(this).scrollTop(); 

        if(scroll_position >= animation_start_position && scroll_position <= animation_end_position ) { 

        	var percentScrolled = scroll_position / (animation_end_position - animation_start_position),
            newR = beginning_color.red() + ((ending_color.red() - beginning_color.red()) * percentScrolled),
            newG = beginning_color.green() + ((ending_color.green() - beginning_color.green()) * percentScrolled),
            newB = beginning_color.blue() + ((ending_color.blue() - beginning_color.blue()) * percentScrolled),
            newColor = new $.Color(newR, newG, newB);
            // or alternatively
            // var newColor = new $.Color('rgb(244, 143, 0)');
            
            $('.newItem').animate({backgroundColor: newColor}, 0);
        } else if (scroll_position > animation_end_position) {
             $('.newItem').animate({backgroundColor: ending_color}, 0);
        } else if (scroll_position < animation_start_position) {
             $('.newItem').animate({backgroundColor: beginning_color}, 0);
        } else { }
    });
});



// a couple more ideas included:
// display the map on the side with the item list, but then i figured it could look too overwhelming
// (also i could not get the map to load properly)
// $('#js_trv_map_container').removeClass('is-hidden').addClass('newMap');

// i also thought about displaying a 'tinder' version of the results, i.e. show one hotel at a time
// and then show the next one on swipe (well with left and right keys probably)
// i dont think it would have looked that great from a UX POV but this is the code i started to write:

// var arr = new Array(),
// i = 0,
// current = $('#js_itemlist').find('li:first'),
// arr = $('#js_itemlist > li');

// something like: 

// next_hotel = function(){ 
//          if (i < arr.length - 1){
//             i +=1;
//             $(current).hide();
//             current = $(current).next('li').fadeIn();
//          } else {
//             i = 0;
//             $(current).hide();
//             current = $('#js_itemlist').find('li:first').fadeIn();
//          };

// previous_hotel = function(){ 
//          if(i > 0 ){
//             i -= 1;
//             $(current).hide();
//             current = $(current).prev('li').fadeIn();
//          } else {
//             i = arr.length - 1;
//             $(current).hide();
//             current = $('#js_itemlist').find('li:nth-child(i)').fadeIn();
//          };

// i would remove all classes and create my own to display only the current item




