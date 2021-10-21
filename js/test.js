$(function(){

    $('header').load('../inc/header.html');
    $('footer').load('../inc/footer.html');
        
    $(".m_menu").click(function(){

        //모바일 메뉴
            $("#mo_menu_area").addClass("active");
            })
    
            $(".mo_menu_header>i").click(function(){
                $("#mo_menu_area").removeClass("active");
            })
    
            $(".main_header").click(function(){
            let index_num=$(".main_header").index(this);
            if($(".mo_sub_list:eq("+index_num+") .sublist").css("display")!="block"){
                $(".sublist").slideUp();
                $(".menu_drop .plus").css("transform","rotate(0deg)");
                $(".mo_sub_list:eq("+index_num+") .sublist").slideDown();
                $(".mo_sub_list:eq("+index_num+") .main_header .menu_drop .plus").css("transform", "rotate(-90deg)");
            }
            else{
                $(".mo_sub_list:eq("+index_num+") .sublist").slideUp();
                $(".main_header:eq("+index_num+") .menu_drop .plus").css("transform", "rotate(0deg)");
            }
            
        })
    
        // 서브메뉴 드롭
        $(".sub_menu").hide();
        $(".header_menu").click(function(){
            let index_num = $(".header_menu").index(this);
            $(".sub_menu:eq("+index_num+")").stop().slideToggle(300);
            $(".header_menu>h2:eq("+index_num+")");
        });

        // pc메뉴드롭

        $(".submenu").hide();
        $(".menulist").hover(function(){
            $(this).find(".submenu").stop().slideDown(300);
        },function(){
            $(this).find(".submenu").stop().slideUp(300);
        });


        // 탑버튼
        $(".top").click(function(){
            $("html, body").animate({
                scrollTop:0
            },900);
        });
    
        
});