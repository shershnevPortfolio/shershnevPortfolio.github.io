<?php
/*
Template Name: порт фолио пост
Template Post Type: blog
*/
?>
<?php get_header() ?>


<?php $img = get_field('photo') ?>
                    <?php echo $img; ?>
  <!-- Content
   ================================================== -->
   <?php  if(have_posts()) : while (have_posts()) : the_post(); ?>
            <div style="margin: auto;" class="wrapper">   
          <article  class="blog_post inPage_post">
                    <div >       
                    
                    <img src="<?php echo $img['url']; ?>" alt = '"<?php echo $img['alt']; ?>'>
                    </div>
                    <div   class="article_description__container inPage_description">
                        <h1 class="blog_header"><a href="#">Lorem Dolor Amet Consectetur Dipisicing </a>
                </h1>
                        <?php the_content(); ?>
                
                       
                    </div>
                </article>
            </div>

  
<?php endwhile ?>
<?php endif    ?>




</body>
</html>






