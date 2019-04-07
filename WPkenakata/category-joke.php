 
<?php  
/*
Template Name: blog and products
Template Post Type: category
*/
?>


<?php get_header(); ?>
<div class="main_part">
  <aside class="semantic">
  	<div  class="aside_container">
  		
  	  <form>	
  	  	<i class="fas fa-search"></i>		
  	   
      </form>
  	<a href="" style=" color: white; ">asd</a>
  	</div>
  </aside>
  <section class="section">	
  	<h1 style="display: none;"></h1>
  						<div id="column"  class="column_products column_cart">
  						<?php 
  							// параметры по умолчанию
								$posts = get_posts( array(
									'numberposts' => 0,
									'category'    => 0,
									'orderby'     => 'date',
									'order'       => 'DESC',
									'include'     => array(),
									'exclude'     => array(),
									'meta_key'    => '',
									'meta_value'  =>'',
									'post_type'   => 'post',
									'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
								) );

								foreach( $posts as $post ){
									setup_postdata($post); ?>
					      <div id="add_to_cart_<?php echo the_ID() ?>_container" class="product_wrapper">
                        <div class="product_item">
                            <?php the_post_thumbnail() ?>
                            <div class="product_buttons">
                                <div style="width: 100%; height: 100%; position: absolute; background-color: black;
	opacity: .6; z-index: 1;"></div>
                                <a id="add_to_cart_<?php echo the_ID() ?>" class="shop__button product_button button" href="#">Add To Cart
								</a>
                                <a class="shop__button product_button " href="index.html">Quick View
								</a>
                            </div>
                        </div>
                        <div class="product_title ">
                            <h3> <?php the_title() ?>
							</h3>
                            <div class="price">
                              <div class="full_price_container  <?php  the_field('is_sale') ?> semantic"> 
                                <span class="full_price valute">$</span>
                                <span class="full_price full_summ"><?php  the_field('full_price') ?>
								                </span>
                              </div>
                                <span class="sale_price sale_valute">$</span>
                                <span id="empty" class="sale_price summ"><?php  the_field('sale_price') ?>
								           
											  </span>
                            </div>
                        </div>
                    </div>
						


							<?php  	  	
								}

								wp_reset_postdata(); // сбро


?>  						



				
					</div>
					

  	
  </section>
<?php 
the_posts_pagination(); 
?>

</div>

<?php wp_footer(); ?>

</body>
</html>
