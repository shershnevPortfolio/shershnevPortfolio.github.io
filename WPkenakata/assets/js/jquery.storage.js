

    $(document).ready(function() {




        
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var clickId = localStorage.key(i);
            var value = localStorage[clickId];
            var inCart = document.getElementById(clickId);
            var AnotherCategory = document.getElementById(clickId + "_fetured");
            substring = "add_to_cart";
            if (clickId.indexOf(substring) !== -1) {

                var itemsInCart = document.getElementById('count_cart');
                var countItems = Number(itemsInCart.innerHTML) + 1;
                itemsInCart.innerHTML = countItems;
            }

            if (!inCart) {
                continue;
            }


        

            if (AnotherCategory) {
            document.getElementById(clickId + '_fetured').classList.add('remove_button');
            document.getElementById(clickId + '_fetured').style.setProperty('background-color', 'grey');
            document.getElementById(clickId + '_fetured').innerHTML = "Remove from cart"; 
         

            }

            document.getElementById(clickId).classList.add('remove_button');
            document.getElementById(clickId ).style.setProperty('background-color', 'grey');
            document.getElementById(clickId).innerHTML = "Remove from cart";

        }

        var child = document.getElementsByClassName('product_wrapper');
        if (child[0] !== undefined) {
          var quantityOfChild = child.length;
            var ChildWidth = child[0].offsetWidth;
            for (var i = 0; i < quantityOfChild; i++) {
                child[i].style.setProperty('width', ChildWidth + 'px');
        }

        
           
        }

    
        
        $('.button').click(function(e) {
            e.preventDefault();
            if ($(this).hasClass('remove_button')) {
                var clickId = $(this).attr('id');
              
                var pure = clickId.replace('_fetured', '');
                var withCategory = document.getElementById(pure + '_fetured');
                if (withCategory ){
                    withCategory.classList.remove('remove_button');
                    document.getElementById(pure + '_fetured').style.setProperty('background-color', '');
                    withCategory.innerHTML = "Add to cart";
                  
                    
                        
                }
                var nonCategory = document.getElementById(pure);
                if (nonCategory) {
                nonCategory.classList.remove('remove_button');
                document.getElementById(pure).style.setProperty('background-color', '');
                nonCategory.innerHTML = "Add to cart";
                           
                }

                
                document.getElementById('count_cart').innerHTML;
                var itemsInCart = document.getElementById('count_cart');
                var NumItemsInCart = Number(itemsInCart.innerHTML) - 1;
                itemsInCart.innerHTML = NumItemsInCart.toString();
                delete localStorage[pure];
            }
            else {
                var clickId = $(this).attr('id');
                var pure = clickId.replace('_fetured', '');
                var withCategory = document.getElementById(pure + '_fetured');
                if (withCategory ){
                    withCategory.style.setProperty('background-color', 'grey');
                    withCategory.classList.add('remove_button');
                    withCategory.innerHTML = "Remove from cart";
                  
                    
                        
                }
                var nonCategory = document.getElementById(pure);
                if (nonCategory) {
                nonCategory.classList.add('remove_button');
                nonCategory.innerHTML = "Remove from cart";
                nonCategory.style.setProperty('background-color', 'grey');
                
                

                }
              var itemsInCart = document.getElementById('count_cart');
                var NumItemsInCart = Number(itemsInCart.innerHTML) + 1;
                itemsInCart.innerHTML = NumItemsInCart.toString();
                var value = document.getElementById(clickId + "_container").innerHTML;
                var markup = value.toString();
                localStorage.setItem(pure, markup);
                
                

            }
      

    });


                 var a = document.getElementsByClassName('1');
       for (var i = 0 ; i <= a.length - 1; i++) {

            a[i].classList.remove('semantic');
        } 
         
        var wrapper = document.getElementsByClassName('wrapper');
        if (wrapper[1]) {
        var wrapperWidth = wrapper[1].offsetWidth;
       
        wrapper[1].style.setProperty('--wrapperWidthHalf', wrapperWidth * 0.49  + 'px');
        wrapper[1].style.setProperty('--wrapperWidth', wrapperWidth   + 'px');
    } 
window.onresize = function () {
   var wrapper = document.getElementsByClassName('wrapper');
     if (wrapper[1]) {
        var wrapperWidth = wrapper[1].offsetWidth;
        wrapper[1].style.setProperty('--wrapperWidthHalf', wrapperWidth * 0.49 + 'px');
        wrapper[1].style.setProperty('--wrapperWidth', wrapperWidth  + 'px');
        }
}

    


        });

