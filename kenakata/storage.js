

$(document).ready(function() {

     window.onresize = function () {
    var product = document.getElementsByClassName('product_wrapper');   
    if (!product) {
        var quantityOfChild = document.getElementsByClassName('product_wrapper').length;
    var ChildWidth = document.getElementsByClassName('product_img')[0].offsetWidth;

    for (var i = 0; i < quantityOfChild; i++) {
        document.getElementsByClassName('product_wrapper')[i].style.setProperty('width', ChildWidth + 'px');

    }


    } 
        }



    for (var i = 0, len = localStorage.length; i < len; i++) {
        var clickId = localStorage.key(i);
        var value = localStorage[clickId];
        var inCart = document.getElementById(clickId);
        substring = "add_to_cart";
        if (clickId.indexOf(substring) !== -1) {

            var itemsInCart = document.getElementById('count_cart');
            var countItems = Number(itemsInCart.innerHTML) + 1;
            itemsInCart.innerHTML = countItems;
        }

        if (!inCart) {
            continue;
        }

        document.getElementById(clickId).classList.add('remove_button');
        document.getElementById(clickId).innerHTML = "Remove from cart";

    }

    /*var h = document.getElementById('empty').textContent; 
          
           alert(Number(h));*/
      var product = document.getElementsByClassName('product_wrapper');  
      if (!product) {
        var quantityOfChild = document.getElementsByClassName('product_wrapper').length;
    var ChildWidth = document.getElementsByClassName('product_img')[0].offsetWidth;
    for (var i = 0; i < quantityOfChild; i++) {
        document.getElementsByClassName('product_wrapper')[i].style.setProperty('width', ChildWidth + 'px');

    }
      }
    
    $('.button').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('remove_button')) {
            var clickId = $(this).attr('id');
            var itemsInCart = document.getElementById('count_cart').innerHTML;
            /* document.getElementById('count_cart').innerHTML = Number(itemsInCart) - 1;*/
            $(this).removeClass('remove_button');
            $(this).text('Add To Cart');
            document.getElementById('count_cart').innerHTML;
            var itemsInCart = document.getElementById('count_cart');
            var NumItemsInCart = Number(itemsInCart.innerHTML) - 1;
            itemsInCart.innerHTML = NumItemsInCart.toString();
            localStorage.setItem('itemsInCart', NumItemsInCart.toString());
            delete localStorage[clickId];
        }
        else {
            var clickId = $(this).attr('id');
            $(this).addClass('remove_button');
            document.getElementById(clickId).innerHTML = "Remove from cart";
            $(this).addClass("none");
            $(this).addClass('deleteId')
            var value = document.getElementById(clickId + "_container").innerHTML;
            var markup = value.toString();
            localStorage.setItem(clickId.toString(), markup);
            $(this).removeClass("none");
            $(this).removeClass("deleteId");
            $('.deleteId').removeAttr('id');
            document.getElementById('count_cart').innerHTML
            var itemsInCart = document.getElementById('count_cart');
            var NumItemsInCart = Number(itemsInCart.innerHTML) + 1;
            itemsInCart.innerHTML = NumItemsInCart.toString();
            localStorage.setItem('itemsInCart', NumItemsInCart.toString());

        }
    });

   $('.color').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('fa-bars')) {
            $('.nav__item_media').removeClass('semantic');
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-times'); 
        }

        else {
            $('.nav__item_media').addClass('semantic');
            $(this).addClass('fa-bars');
            $(this).removeClass('fa-times');

        }
        

    });


 $('#subscribe').on('submit' , function(e){
        e.preventDefault()
 /*        Тут должен быть AJAX отправка формы,но этот пример я выложу на гитхаб
         там он всеравно работать не будет*/ 

    });

    $('.email_button').click(function (e) {
        e.preventDefault();
       $('#subscribe').trigger('submit');
   
    });




            
$('.product_wrapper').mouseenter( function(){
    var product_buttons = $(this).find('.product_buttons');
    product_buttons.css('display', 'flex'); 


} ).mouseleave( function(){
    var product_buttons = $(this).find('.product_buttons');
    product_buttons.css('display', 'none');



} ).click(function(){
    var product_buttons = $(this).find('.product_buttons');
    if ($(window).width() < 750) {
     if (product_buttons.hasClass('show')) {
        product_buttons.css('display', 'none');
        product_buttons.removeClass('show');
        
     }   

     else {
        product_buttons.css('display', 'flex');
        product_buttons.addClass('show');
     }
}

});

$('#contact_form').submit(function(){
    
   var city =  $( "input[name*='city']" ).val();
   var tel = $( "input[name*='tel']" ).val();
   
    if (isNaN(tel)) {
        return;
    }
    if (isNaN(city)) {
        return;
    }

/*
    тут должен быть AJAX запрос,но он не будет
    работать на GitHub. Суть такова - если одно
    из значений if вернет true(неправильно заполненна форма),
    то до запроса не дойдет и форма не уйдет в БД или на почту*/



});

});
















