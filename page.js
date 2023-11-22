$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
             $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");


$("#conTeam1").hover(function(){$(".links1").fadeIn( );
      },function(){$(".links1").fadeOut();
        });
        $("#conTeam2").hover(function(){$(".links2").fadeIn( );
      },function(){$(".links2").fadeOut();
        });
        $("#conTeam3").hover(function(){$(".links3").fadeIn( );
    },function(){$(".links3").fadeOut();
      })
      $("#conTeam4").hover(function(){$(".links4").fadeIn( );
    },function(){$(".links4").fadeOut();
      });

});




