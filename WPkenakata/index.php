<?php get_header(); ?>	
<?php echo $kenakataIMG; ?> 
<div style="background-image:url('<?php echo get_the_post_thumbnail_url( 135, full ); ?>')" class="slider">
    <div class="wrapper">

 <?php $the_query = get_post('135' );?>

         <article style="position: relative; z-index: 2;" class="section_wrapper__item">

             
            <h2> <?php echo  $the_query->post_title; ?></h2>
            <p><?php echo  $the_query->post_content; ?></p>
            <a class="shop__button" href="vk.com">Shop Now
                </a>
           <?php echo  get_the_post_thumbnail( $post_id = 135, $size = 'full', $attr = '' ) ?>
        </article>

   

     
          </div>
</div>
<div class="main_page_products_container horizontal__centr ">
    <div class="wrapper section_wrapper">
        <section class="main_page__products">
            <h2>New Products
                </h2>
            <div class="show_products">
                <div class="column_products">   
                        <?php   
                            // параметры по умолчанию
                $posts = get_posts( array(
                  'numberposts' => 8,
                  'orderby'     => 'date',
                  'order'       => 'DESC',
                  'post_type'   => 'post',
                  'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                ) );

                ?>
                  <?php $i = 0; ?> 
                <?php   
                foreach( $posts as $post ){setup_postdata($post); $i++?>
                  <?php if ($i <= 4) { ?>
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



               <?php  } ?>
                      
                  
                  <?php  if ($i == 4) { ?>
                      </div>
                      <div class="column_products"> 
                          

                    <?php   } ?>
                  <?php if($i > 4) { ?>
                         <div id="add_to_cart_<?php echo the_ID() ?>_container_fetured" class="product_wrapper">
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

                <?php      
                }}
                 
                wp_reset_postdata(); // сброс



            
                           ?>   

            </div>
        </div>

            <div class="horizontal__centr">
                <a href="" class="brows_all_button" style="">BROWS ALL ITEMS
                    </a>
            </div>
        </section>
    </div>
</div>
<div class="insert get_smth_bg horizontal__centr">
    <div class="wrapper">
        <h2 class="insert_head">Get something you love</h2>
        <a class="shop__button insert__button" href="vk.com">Shop Now
            </a>
    </div>
</div>
<div class="main_page_products_container fetured_product_container_height horizontal__centr ">
    <div class="wrapper section_wrapper">
        <section class="main_page__products fetured_products">
            <h2>Fetured Products
                </h2>
            <div class="show_products show_fetured">
                <div class="column_products fetured_column">
                            <?php 
                                    $posts = get_posts( array(
                                        'numberposts' => 4,
                                        'category_name'    => 'fetured',
                                        'orderby'     => 'date',
                                        'order'       => 'DESC',
                                        'post_type'   => 'post',
                                        'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                    ) );

                                    foreach( $posts as $post ){ setup_postdata($post); ?>

                                        <div id="add_to_cart_<?php echo the_ID() ?>_fetured_container" class="product_wrapper">
                        <div class="product_item">
                            <?php the_post_thumbnail() ?>
                            <div class="product_buttons">
                                <div style="width: 100%; height: 100%; position: absolute; background-color: black;
  opacity: .6; z-index: 1;"></div>
                                <a id="add_to_cart_<?php echo the_ID() ?>_fetured" class="shop__button product_button button" href="#">Add To Cart
                </a>
                                <a class="shop__button product_button " href="index.html">Quick View
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

                                <?php                                          
                                    }

                                    wp_reset_postdata(); 

                             ?>
                     </div> 
              </div> 
            <div class="horizontal__centr">
                <a href="" class="brows_all_button" style="">BROWS ALL ITEMS
                    </a>
            </div>
        </section>
    </div>
</div>
<div class="posts_container  horizontal__centr">
    <div class="wrapper">
        <section class="under_posts__container  main_page__products">
            <h2>Blog Posts</h2>
            <div class="column_products">
                <?php $i = 0; ?>
            <?php 
                            // параметры по умолчанию
                                $posts = get_posts( array(
                                    'numberposts' => 4,
                                    'orderby'     => 'date',
                                    'order'       => 'DESC',
                                    'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                    'post_type'   => 'blog '
                                ) );

                                foreach( $posts as $post ){
                                    setup_postdata($post); $i++?>
                                    <?php if ($i <= 2 ){ ?>
                                        
                          
                                     <article  class="blog_post ">
                    <a href="<?php  the_permalink() ?>">
                    <?php the_post_thumbnail() ?>
                    </a>
                    <div class="article_description__container">
                        <h3>
                            <a href="<?php  the_permalink() ?>"><?php the_title() ?>
                  </a>
                        </h3>
                        <p><?php  the_excerpt() ?>  
                </p>
                        <div class="read_more">
                            <a style="display: inline-block;" href="<?php  the_permalink() ?>" title="read all article">
                                <span class="read_more_link">Read more 
                  </span>
                                <i class="fas fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </article>
                          
                <?php } ?>
                <?php if($i == 2){ ?>
                    </div>
                    <div class="column_products">

                    <?php } ?>
                    <?php if($i > 2){ ?>
                               <article  class="blog_post ">
                    <a href="<?php  the_permalink() ?>">
                    <?php the_post_thumbnail() ?>
                    </a>
                    <div class="article_description__container">
                        <h3>
                            <a href="<?php  the_permalink() ?>"><?php the_title() ?>
                  </a>
                        </h3>
                        <p><?php  the_excerpt() ?>  
                </p>
                        <div class="read_more">
                            <a style="display: inline-block;" href="<?php  the_permalink() ?>" title="read all article">
                                <span class="read_more_link">Read more 
                  </span>
                                <i class="fas fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </article>
            <?php } ?>
                            <?php 

                                    }

                                wp_reset_postdata(); // сбро


?>                 
</div>
<div>




            <div class="horizontal__centr">
                <a href="" class="brows_all_button" style="">BROWS ALL ITEMS
                    </a>
            </div>
        </section>
    </div>
</div>
<?php get_sidebar();?>
<?php $the_subcribe_post = get_post('167' );?>
<div style="min-height: 400px;  align-items: center;" class="subscribe_container horizontal__centr">
    <article class="subscribe">
        <h2 class="subscribe_header"><?php echo  $the_subcribe_post->post_title; ?>
            </h2>
        <p><?php echo  $the_subcribe_post->post_content; ?>
            </p>
        <!-- <form style="width: 400px; display: flex; justify-content: space-between;">
            <input class="  "  type="email" name="email" placeholder="Your email address">
            <a class="shop__button email_button">Subscribe</a>
        </form> -->
        <?php echo do_shortcode('[ninja_form id=2]'); ?>
    </article>
</div>
<?php get_footer(); ?>



