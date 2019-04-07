<?php get_header() ?>
<div class="wrapper wrapper_in_prod">   
<main class="main_in_product">  

                    <div  id="add_to_cart_<?php echo the_ID() ?>_container" class="product_wrapper product_page">
                        <div class="product_item">
                             <?php the_post_thumbnail() ?>
                        </div>
                        <div  class="product_title in_product_title">
                            <h1><?php the_title() ?>

                            </h1>
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    



                            </p>
                            <div class="price in_product_price">
                              <div class="full_price_container <?php  the_field('is_sale') ?> semantic"> 
                                <span class="full_price valute in_product_cost">$</span>
                                <span class="full_price full_summ in_product_cost "><?php  the_field('full_price') ?>
                                </span>
                              </div>
                                <span class="sale_price sale_valute in_product_cost">$</span>
                                <span id="empty" class="sale_price summ in_product_cost"><?php  the_field('sale_price') ?>
                                           
                                              </span>
                            </div>
                          

                        </div>
                    </div>

</main>
</div>
</body>
</html>