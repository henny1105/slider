var $slider = $(".slider"); 
var $slider2 = $(".slider2");
var $txtSlider = $(".txtSlide"); 
var $prev = $(".btnPrev"); 
var $next = $(".btnNext"); 
var speed =500; 
var enableClick = true; 
 
init($slider); 
init($slider2); 
init($txtSlider); 
 
var len = $slider2.find("li").length; 
 
 
function init(el){
    el.css({
        width: 100 * len +"%",
        marginLeft:"-100%"
    });  
    el.find("li").css({
        width: 100 / len +"%"
    });
    el.find("li").last().prependTo(el); 
}
 
 
$next.on("click" ,function(e){
    e.preventDefault(); 
 
    if(enableClick){
        next($slider);
        next($slider2);
        next($txtSlider);
        enableClick = false; 
    } 
}); 
 
$prev.on("click", function(e){
    e.preventDefault(); 
    if(enableClick){
        prev($slider);
        prev($slider2);
        prev($txtSlider);
        enableClick = false; 
    }   
}); 
 
function next(el){
    el.animate({ marginLeft : "-200%"},speed, function(){
        el.css({marginLeft: "-100%"});
        el.find("li").first().appendTo(el);
        enableClick = true; 
    });
}
 
function prev(el){
    el.animate({marginLeft:
        "0%"},500,function(){
            el.css({marginLeft:"-100%"});
            el.find("li").last().prependTo(el);
            enableClick = true; 
        });
}