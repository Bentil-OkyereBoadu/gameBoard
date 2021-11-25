var main = function() {
    $('.more-btn').on('click', event => {
      $(event.currentTarget).toggle('.more-menu');
    });
    
  };
  
  $(document).ready(main);