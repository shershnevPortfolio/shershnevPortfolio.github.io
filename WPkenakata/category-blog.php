
<?php  
/*
Template Name: blog_posts 
Template Post Type: page
*/
?>


<?php   get_header() ?>
<div style="margin: auto;" class="wrapper">   
<section  class="under_posts__container  main_page__products">
            <h1 class="semantic">Blog Posts</h1>
            <div style="flex-wrap: wrap;" class="column_products posts_page_column">
                    <?php 
                            // параметры по умолчанию
                                $posts = get_posts( array(
                                    'numberposts' => 8,
                                    'orderby'     => 'date',
                                    'order'       => 'DESC',
                                    'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                    'post_type'   => 'blog '
                                ) );

                                foreach( $posts as $post ){
                                    setup_postdata($post); ?>
                                     <article  class="blog_post post_page_post">
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
                          


                            <?php       
                                }

                                wp_reset_postdata(); // сбро


?>                  

               
                
 
        </section>
        </div>
    </div>
</div>

<?php   wp_footer() ?>