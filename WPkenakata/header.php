<!DOCTYPE html>
<html lang="en">
<head>
	<title>KENAKATA</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

	
	
<?php wp_head(); ?>
</head>
<body>	
	<header class="top_header">	
		<div  class="wrapper">
			<div class="logo">
					<a href="<?php bloginfo(url);  ?>">
						KENAKATA
					</a>
			</div>
			<nav  class="nav__header__item">
				  <?php wp_nav_menu(array(
                  'theme_location' => 'top',
                  'container' => null,
                  'menu_class' => 'nav__item',
                  'menu_id' => null



            )) ?>

				 <div class="cart">
					<a href = "<?php echo get_page_link(38) ?>" id="open_cart" href="cart.html">
						<i class="fas fa-shopping-bag"></i>
						<div id="count_cart" class="cart_items_counter">
							0
						</div>
					</a>
				</div>
 			</nav>
 		</div>
	</header> 	
	