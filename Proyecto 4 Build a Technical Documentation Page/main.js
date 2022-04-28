$(document).ready(function(){

        $("a").click(function(){
            $("a").css({"color":"#000"});
            $(this).css({"color":"rgb(53, 167, 243)"});

            if($(window).width() <= 750){
                $("nav").slideUp();
            }
        });

         $("li").click(function(){
             $("li").css({"backgroundColor":"#FFF"})
             $(this).css({"backgroundColor":"rgba(0,0,0,0.1)"});
         });

         $("#bars").click(function(){
            $("nav").slideToggle();
        });

        $(window).resize(function(){
        
            if(($(window).width()) <= 750){
                $("nav").slideUp();  
            }else{
                $("nav").slideDown();   
            }
        });
    });
