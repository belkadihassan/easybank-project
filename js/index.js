
const width = $(window).width()

$(document).ready(()=>{
    $('.bgImg,.phoneImg').delay(300).fadeIn(1000),
    (function anime(){
    $('.phoneImg').animate({
        top:"+=10px",
        right: "+=10px"
    },1000,()=>{
        $('.phoneImg').animate({
            top:"-=10px",
            right:"-=10px"
        },1000,anime)
    })
})();
})