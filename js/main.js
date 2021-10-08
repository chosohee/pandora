$(function(){
    new WOW().init();

    $(".m_menu").click(function(){
    //모바일 메뉴
        $("#mo_menu_area").addClass("active");
        })

        $(".icon-cancel").click(function(){
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
    })

    //pc메뉴 드롭
    $(".submenu").hide();
    $(".menulist").hover(function(){
        $(this).find(".submenu").stop().slideDown(300);
    },function(){
        $(this).find(".submenu").stop().slideUp(300);
    })


    var swiper = new Swiper(".con", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });


    //하단 비주얼 부분 슬라이드
    var swiper1 = undefined;
    var swiperOption = {
        slidesPerView:3,
        spaceBetween:20,
        loop: true,
        speed:1000,
    };

    function slideMake(){
        var winWidth=$(window).width();
        //화면의 너비 값을 변수에 할당하고,
        if(winWidth >= 1024 && swiper1 != undefined){
            swiper1.destroy();
            //슬라이드를 제거하는 명령 실행
            swiper1=undefined;
        }
        else if(winWidth < 1024 && swiper1 == undefined){
            swiper1 = new Swiper(".con2",swiperOption);
        }
    }

    slideMake();
    //위의 함수에서는 현재의 너비 상태만 측정하므로, 화면이 바뀌는 것은 감지 하지 못하므로, resize라는 명령어를 이용해서 화면이 바뀌는 것을 감지 하여 그때마다 함수를 실행
    $(window).resize(function(){
        slideMake();
    })


    $("div.top>img").click(function(){
        $("html, body").animate({
            scrollTop:0
        },900);
    });


})