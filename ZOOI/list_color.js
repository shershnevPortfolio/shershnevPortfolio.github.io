		$(function() {
  $("#selectBackground ul li a").click(function(e) {
    e.preventDefault();
    $("#selectBackground ul li a").removeClass('active');
    $(this).addClass('active');
  })
});

