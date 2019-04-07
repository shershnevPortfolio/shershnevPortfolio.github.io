<?php 

add_action( 'wp_enqueue_scripts', 'theme_style' );
add_action(	'wp_enqueue_scripts' , 'theme_scripts');
add_action( 'after_setup_theme', 'theme_register_nav_menu' );
add_action( 'init', 'register_post_types' );
add_action( 'widgets_init', 'register_my_widgets' );
add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );





function my_navigation_template( $template, $class ){
	/*
	Вид базового шаблона:
	<nav class="navigation %1$s" role="navigation">
		<h2 class="screen-reader-text">%2$s</h2>
		<div class="nav-links">%3$s</div>
	</nav>
	*/

	return '
	<nav class="navigation %1$s" role="navigation">
		<div class="nav-links">%3$s</div>
	</nav>    
	';
}

// выводим 



function register_my_widgets(){
	register_sidebar( array(
		'name'          => 'Mainpage Sidebar',
		'id'            => "mainpage_sidebar",
	
	) );
}
 



function register_post_types(){
	register_post_type('blog', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'blog', // основное название для типа записи
			'singular_name'      => 'blog', // название для одной записи этого типа
			'add_new'            => 'Добавить статью', // для добавления новой записи
			'add_new_item'       => 'Добавление статьи', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование статью', // для редактирования типа записи
			'new_item'           => 'Новая статья', // текст новой записи
			'view_item'          => 'Смотреть статью', // для просмотра записи этого типа.
			'search_items'       => 'Искать статью', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено ', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Статьи', // название меню
		),
		'description'         => 'Наши статьи',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 4,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title', 'excerpt', 'thumbnail', 'editor','custom-fields'),  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array('category'),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
	register_post_type('sections', array(
		'label'  => null,
		'labels' => array(
			'name'               => 'sections', // основное название для типа записи
			'singular_name'      => 'sections', // название для одной записи этого типа
			'add_new'            => 'Добавить секцию', // для добавления новой записи\
			'add_new_item'       => 'Добавление секции', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование секции', // для редактирования типа записи
			'new_item'           => 'Новая секция', // текст новой записи
			'view_item'          => 'Смотреть секцию', // для просмотра записи этого типа.
			'search_items'       => 'Искать секцию', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено ', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Секции', // название меню
		),
		'description'         => 'Секции',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => true, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		'show_in_admin_bar'   => true, // по умолчанию значение show_in_menu
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 4,
		'menu_icon'           => null, 
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => array('title', 'excerpt', 'thumbnail', 'editor','custom-fields'),  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => array('category'),
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	) );
}




function theme_style() {


	if (is_page_template('contact.php')) {
		wp_enqueue_style('cotact', get_template_directory_uri() . '/assets/css/contact.css');	
	}

	if (is_home()) {
			wp_enqueue_style('index_subscribe', get_template_directory_uri() . '/assets/css/index_subscribe.css');
	}

	wp_enqueue_style('style', get_stylesheet_uri());
	wp_enqueue_style('items', get_template_directory_uri() . '/assets/css/items.css');
	wp_enqueue_style('reset', get_template_directory_uri() . '/assets/css/reset.css');

	if (is_home()) {
		wp_enqueue_style('media_queries', get_template_directory_uri() . '/assets/css/media_queries.css');

		
	}
	
	if(is_page_template('page-blog.php')) {
		wp_enqueue_style('media_queries', get_template_directory_uri() . '/assets/css/media_queries.css');
		
	}

	if (is_single() ) {
		
		wp_enqueue_style('products', get_template_directory_uri() . '/assets/css/products.css');	
	}
	}






	
function theme_scripts() {
	wp_deregister_script('jquery');
	wp_register_script('jquery' , '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
	wp_enqueue_script('jquery');


	wp_enqueue_script('storage' , get_template_directory_uri() . '/assets/js/jquery.storage.js', ['jquery'], null , false);

	if(is_page_template('page-cart.php')) {
		wp_enqueue_script('storage_out' , get_template_directory_uri() . '/assets/js/jquery.storage_out.js', ['jquery'], null , false);

	}

	if(is_category()) {
		wp_enqueue_script('main' , get_template_directory_uri() . '/assets/js/jquery.main.js', ['jquery'], null , false);		
	}


	if(is_page_template('page.php')) {
		wp_enqueue_script('main' , get_template_directory_uri() . '/assets/js/jquery.main.js', ['jquery'], null , false);	

	}		





	


}


function theme_register_nav_menu () {
	register_nav_menu( 'top', 'topMenu' );
	register_nav_menu( 'footer', 'footerMenu' ); 
	add_theme_support( 'post-thumbnails', array( 'post','blog', 'sections') );	


}

 ?>