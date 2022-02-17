$(document).ready(function(){
    //navbar drop
    $(".navbar .nav-item.dropdown").click(function(){
        $(this).slideClass("show")
        
    })

    $(".colseIcon").click(function(){
        $(".navbar-collapse").animate({"right":"-100%"},500)
        $(".navbar-collapse").removeClass("show")
    })

    $(".navbar-toggler").click(function(){
        $(".navbar-collapse").animate({"right":"0%"},500)
        $(".navbar-collapse").removeClass("show")
    })

})