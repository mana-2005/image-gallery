$(document).ready(function () {
  $('.gallery-item').fadeIn();

  $('.filter-btn').click(function () {
    const category = $(this).data('filter');

    if (category === 'all') {
      $('.gallery-item').fadeIn();
    } else {
      $('.gallery-item').hide();
      $('.gallery-item').filter(function () {
        return $(this).data('category') === category;
      }).fadeIn();
    }
  });
});
