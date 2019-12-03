import './header.sass';

export default initLayout => {
  $('.burger').on('click', function() {
      $('.header-navigation__inner').slideToggle(400);
      $('header-navigation__inner').toggleClass('header-navigation__inner--margined');

  });
}



