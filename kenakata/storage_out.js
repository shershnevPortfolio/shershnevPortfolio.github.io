
$(document).ready(function(){


for(var i=0, b=0 ,len=localStorage.length; i<len; i++) {
    var clickId = localStorage.key(i);
    var string = clickId,
    substring = "add_to_cart";
    if (string.indexOf(substring) !== -1   ) {
        var value = localStorage[clickId];
        var div = document.createElement("div");
        div.id = clickId + "_cart-item__container";
        div.className = "cart_item";
        document.getElementById('cart_container').appendChild(div);
        var str = localStorage.getItem(clickId.toString());
        document.getElementById(div.id).innerHTML = str;
        var input_container = document.createElement("div");
        input_container.className = "count_items_container";
        input_container.id = clickId + "_count_items_container";
        document.getElementById(clickId + "_cart-item__container").appendChild(input_container);
        var legend = document.createElement("legend");
        legend.id = clickId + "_legend";
        document.getElementById(clickId + "_count_items_container").appendChild(legend);
        var  toclone = document.getElementById('asd').cloneNode(true);
        toclone.id = 'input_' + b;
        input_container.appendChild(toclone);
        document.getElementById('input_' + b).classList.remove('semantic');
        var price_x_inputValue = document.createElement('div');
        price_x_inputValue.id = toclone.id + '_cost';
        price_x_inputValue.className = 'price_x_inputValue';
        document.getElementById(div.id).appendChild(price_x_inputValue);
        document.getElementById(price_x_inputValue.id).innerHTML = 0;
        var itemsInCart = document.getElementById('count_cart');
        var countItems = Number(itemsInCart.innerHTML) + 1;
        itemsInCart.innerHTML = countItems;
        var salePrice = document.getElementsByClassName('summ');
        salePrice[b].id = toclone.id + '_price';  
        let a =  $('#' + toclone.id).val()
        let c = $('#' + toclone.id + '_price').text();       
        $('#' + toclone.id + '_cost').text(a * c );
        z = Number($('.price_x_inputValue')[i].innerHTML);
        j = document.getElementById('total_summ');
        j.innerHTML =Number(j.innerHTML) +z;
        b++
    
    }
    

    
        
} 
      $('.product_input_2').on('input', function() {

        var id =  $(this).attr('id');
        var  k = document.getElementById(id + '_cost').innerHTML;
        var a =  $(this).val();
        var b = $('#' + id + '_price').text();
        $('#' + id + '_cost').text(a * b );
        var c = document.getElementById('total_summ');
        var g = Number(c.innerHTML) - Number(k) + a * b ;
        alert(k);
        c.innerHTML = g;
        

       
   
  
          

               


    });




});