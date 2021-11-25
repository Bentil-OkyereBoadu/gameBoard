var main = function() {
    $('.more-btn').on('click', event => {
      $(event.currentTarget).next().toggle();
    });

    $('.share').on('click', event => {
        $(event.currentTarget).next('.share-menu').toggle();
    })

    $('.notification').on('click', event => {
        $(event.currentTarget).css({
            color: 'green'
        })
    })
  };
  
  $(document).ready(main);