const BURGER = $("#burger_menu");
const SCROLL_MENU = $("#scrolling_menu");

BURGER.click(function(){
    $(this).toggleClass("bg-color-white");
SCROLL_MENU.slideToggle("slow"); // toggle change le display, on peut lui ajouter slow 
});

$(".arrow_left").click(function () {
    $(".arrow_rigth").show();
    let val = $(this).next($("div")).children(":first").css("left");
    val = val.replace("px","");
  
   if (val>-350) {$(this).next($("div")).children(":first").animate({left : "-=345px"}, 2000)}
   else $(".arrow_left").fadeOut()
})

$(".arrow_rigth").click(function () {
    $(".arrow_left").show("slow");
    let val = $(this).prev($("div")).children(":first").css("left");
    val = val.replace("px","");
   if (val<10){$(this).prev($("div")).children(":first").animate({left : "+=345px"}, 2000)}
   else $(".arrow_rigth").fadeOut()
   console.log($(this).prev($("div")).children(":first").css("left"));
 });


 $(window).scroll(function(){
console.log($(this).scrollTop());
if ($(this).scrollTop()> 1080){
$(".toBeFaded").eq(0).fadeIn(3000);
}
if ($(this).scrollTop()> 1300){
    $(".toBeFaded").eq(1).fadeIn(3000);
};
if ($(this).scrollTop()> 1650){
    $(".toBeFaded").eq(2).fadeIn(3000);
};
if ($(this).scrollTop()> 1970){
    $(".toBeFaded").eq(3).fadeIn(3000);
};



 });