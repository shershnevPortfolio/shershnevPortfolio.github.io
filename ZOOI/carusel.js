$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  	  items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,1],
      pagination: false,
      loop: false,

	  
 
  });
 
});


$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#press-carosel");
	
	// Запускаем плагин карусели
	carousel.owlCarousel({
		//singleItem: true, // Показывать только 1 блок на всю ширину
		
		// Количество отображающихся блоков в зависимости от устройства (ширины экрана)
		// Количество блоков на больших экранах
		items:4 ,
		// 5 блоков на компьютерах (экран от 1400px до 901px)
		itemsDesktop : [1400,4],
		// 3 блока на маленьких компьютерах (экран от 900px до 601px)
		itemsDesktopSmall : [900,3],
		// 2 элемента на планшетах (экран от 600 до 480 пикселей)
		itemsTablet: [600,2],
		// Настройки для телефона отключены, в этом случае будут
		// использованы настройки планшета
		itemsMobile : false ,

		// Точки под каруселью
		pagination: false,
		rewindSpeed:100,
		paginationSpeed:100,
		
	});

	// Назад
	// При клике на "Назад"
	$('#js-prev').click(function () {
	
		// Запускаем перемотку влево
		carousel.trigger('owl.prev');
	
		return false;
	});
	
	// Вперед
	// При клике на "Вперед"
	$('#js-next').click(function () {
	
		// Запускаем перемотку вправо
		carousel.trigger('owl.next');
	
		return false;
	});
});



$(document).ready(function() {
 
  $("#owl-awards").owlCarousel({
  	  items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,1],
      pagination: false,
      loop: false,

	  
 
  });
 
});
