$(document).ready(function(){
 
    $('.m_gnb>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

    $('.menu_bg').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 100 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});
