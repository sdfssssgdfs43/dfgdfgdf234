function set_nav_bar (path_logo, flag){
    if (flag===1){
      $(document).ready(function(){       
      var scroll_start = 0;
      var startchange = $('#startchange');
      var offset = startchange.offset();
       if (startchange.length){
          $(document).scroll(function() { 
             scroll_start = $(this).scrollTop();
               if ($(window).width() > 768){
                 if(scroll_start > offset.top) {
                     $(".navbar-default").css('background-color', '#fff');
                     $('.in').css('background-color', '#FFF');
                     $(".wpglobus_flag .navbar .nav > li > a").css('color', '#0E0B2F');
                     $(".wpglobus_flag > a").css('color', '#0E0B2F');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
                  } else {
                     $('.navbar-default').css('background-color', 'transparent');
                     $('.in').css('background-color', 'transparent');
                     $(".navbar .nav > li > a").css('color', '#fff');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-01.svg");
                  }
               } else {
                   if(scroll_start > offset.top) {
                     $(".navbar-default").css('background-color', '#fff');
                     $('.in').css('background-color', '#FFF');
                     $(".navbar .nav > li > a").css('color', '#0E0B2F');
                     $(".wpglobus_flag  > a").css('color', '#0E0B2F');
                     $(".icon-bar").css('background-color', '#0E0B2F');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
                  } else {
                     $('.navbar-default').css('background-color', 'transparent');
                     $('.in').css('background-color', '#0E0B2F');
                     $(".navbar .nav > li > a").css('color', '#fff');
                     $(".icon-bar").css('background-color', '#fff');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-01.svg");
                  }
               }
             
 
          });
 
           }
 
       });
 
   }
   else
   {
     $(".navbar-default").css('background-color', '#fff');
     $(".in").css('background-color', '#fff');
     $(".navbar .nav > li > a").css('color', '#0E0B2F');
     $(".icon-bar").css('background-color', '#0E0B2F');
     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
   }
 }
 
 function set_nav_bar_2 (path_logo, flag){
    if (flag===1){
      $(document).ready(function(){       
      var scroll_start = 0;
      var startchange = $('#startchange');
      var offset = startchange.offset();
       if (startchange.length){
          $(document).scroll(function() { 
             scroll_start = $(this).scrollTop();
               if ($(window).width() > 768){
                 if(scroll_start > offset.top) {
                     $(".navbar-default").css('background-color', '#fff');
                     $(".navbar .nav > li > a").css('color', '#0E0B2F');
                     $(".wpglobus_flag").css('color', '#0E0B2F');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
                  } else {
                     $('.navbar-default').css('background-color', 'transparent');
                     $(".navbar .nav > li > a").css('color', '#fff');
                     $(".wpglobus_flag").css('color', '#fff');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-01.svg");
                  }
               } else {
                   if(scroll_start > offset.top) {
                     $(".navbar-default").css('background-color', '#fff');
                     $(".icon-bar").css('background-color', '#0E0B2F');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
                  } else {
                     $('.navbar-default').css('background-color', 'transparent');
                     $(".icon-bar").css('background-color', '#fff');
                     $("#logo").attr('src', path_logo + "/img/logo_wp-01.svg");
                  }
               }
          });
 
           }
 
       });
 
   }
   else
   {
     $(".navbar-default").css('background-color', '#fff');
     $(".close").css('color', '#0E0B2F');
     $(".navbar .nav > li > a").css('color', '#0E0B2F');
     $(".wpglobus_flag").css('color', '#0E0B2F');
     $(".menu").css('background-color', '#fff');
     $(".icon-bar").css('background-color', '#0E0B2F');
     $("#logo").attr('src', path_logo + "/img/logo_wp-dark.svg");
   }
 }