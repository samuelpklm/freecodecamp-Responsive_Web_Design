let contador = 0;
$(document).ready(function(){

    // $("#calabera").


    $("#entrada img").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
                          
        $("#entrada img").attr("src","./pez grande.svg");  
        $("#entrada").attr("id","entrada2");            
        contador += 1;

        if(contador == 2){
            $("#entrada2").remove();
           $("#entrada3").css({"display": "flex"});
        }
     
    });

    $("#entrada3 img").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 

        $("#entrada3").remove();
        
        $("main").css({"display":"flex"});
    }); 
  
    $(".activar-pistas").click(function(){
        $(".pistas").slideDown();
    });

    $("#button").click(function(){
        // alert($("#email").val());
        if((($("#email").val())).toLowerCase() == "daniel"){
            $(".entrada-input .img").css({"backgroundImage":"url(./check/bookmark-check.svg)"}); 
            $(".entrada-input .img").css({"backgroundColor":"lawngreen"});
            $(".entrada-input .img").css({"display":"block"});
            $(".text-resp").text("Perfect");
            $(".text-resp").css({"color":"green"});
            $(".text-resp").css({"display":"block"});

            
         
            $(".tarjeta").css({"display":"flex"});
            $("#about-profeta").css({"display":"flex"});

            if(($(window).width()) <= 900){
                
                $(".tarjeta img").attr("src","./daniel en el foso de los leones horizontal.jpg");
            }
            var focalizar = $("#tarjeta-daniel").position().top;
            $('html,body').animate({scrollTop: focalizar}, 1000);
            
 
            
        }else{
            $(".entrada-input .img").css({"backgroundImage":"url(./check/bookmark-x.svg)"}); 
            $(".entrada-input .img").css({"backgroundColor":"lightcoral"});
            $(".entrada-input .img").css({"display":"block"});
            $(".text-resp").text("Wrong");
            $(".text-resp").css({"color":"red"});
            $(".text-resp").css({"display":"block"});
        }
    });

    $(".auxilio a").click(function(){
        $(".tarjeta").css({"display":"flex"});
        $("#about-profeta").css({"display":"flex"});

        var focalizar = $("#tarjeta-daniel").position().top;
            $('html,body').animate({scrollTop: focalizar}, 1000);
    });
    
    $(window).resize(function(){
        
        if(($(window).width()) <= 900){
            
            $(".tarjeta img").attr("src","./daniel en el foso de los leones horizontal.jpg");

        }else{
            $(".tarjeta img").attr("src","./daniel-entre-los-leones-gustave-dore.jpg");

        }
         
    }
    );

});

