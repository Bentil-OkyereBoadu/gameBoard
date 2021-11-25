var main = function() {
    $('.more-btn').on('click', event => {
      $(event.currentTarget).find('.more-menu').toggle();
    });

  };
  
  $(document).ready(main);