var main = function() {
    //click more button to show siblings
    $('.more-btn').on('click', event => {
      $(event.currentTarget).siblings('.more-menu').toggle();
    });

    //showing the share menu when share is clicked
    $('.share').on('click', event => {
        $(event.currentTarget).next('.share-menu').toggle();
    })

    //turning notification bell icons to yellow
    $('.notification').on('click', event => {
        $(event.currentTarget).addClass('active');
    });

    $()

  };
  
  $(document).ready(main);