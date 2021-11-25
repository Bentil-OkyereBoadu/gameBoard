var main = function() {
    $('.more-btn').on('click', event => {
      $(event.currentTarget).next().toggle();
    });

  };
  
  $(document).ready(main);