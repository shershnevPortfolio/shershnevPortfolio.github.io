
<?php  
/*
Template Name: blog and products
Template Post Type: page
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
          <?php   if(have_posts()) {while(have_posts()){the_post(); ?>
                    
                <div id="add_to_cart_<?php echo the_ID() ?>_container" class="product_wrapper">
                        <div class="product_item">
                            <?php the_post_thumbnail() ?>
                            <div class="product_buttons">
                                <div style="width: 100%; height: 100%; position: absolute; background-color: black;
  opacity: .6; z-index: 1;"></div>
                                <a id="add_to_cart_<?php echo the_ID() ?>" class="shop__button product_button button" href="<?php the_permalink(); ?>">Add To Cart
                </a>
                                <a class="shop__button product_button " href="<?php the_permalink(); ?>">Quick View
                </a>
                            </div>
                        </div>
                        <div class="product_title ">
                            <h3> <?php the_title() ?>
              </h3>
                            <div class="price">
                              <div class="full_price_container <?php  the_field('is_sale') ?> semantic"> 
                                <span class="full_price valute">$</span>
                                <span class="full_price full_summ "><?php  the_field('full_price') ?>
                                </span>
                              </div>
                                <span class="sale_price sale_valute">$</span>
                                <span id="empty" class="sale_price summ"><?php  the_field('sale_price') ?>
                           
                        </span>
                            </div>
                        </div>
                    </div>
         



          <?php   }} ?>



   
    
  </section>

</div>
<div class="wrapper" style="margin: auto; margin-top: 25px;">
         <?php 
         $args = array(
  'show_all'     => false, // показаны все страницы участвующие в пагинации
  'end_size'     => 1,     // количество страниц на концах
  'mid_size'     => 1,     // количество страниц вокруг текущей
  'prev_next'    => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
  'prev_text'    => __('<'),
  'next_text'    => __('>'),
  'add_args'     => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
  'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
  'screen_reader_text' => __( 'Posts navigation' ),
);
the_posts_pagination($args); 
?>

</div>

<?php wp_footer(); ?>

</body>
</html>
