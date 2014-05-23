function toggleModal(element) {
  var el = $(element),
      open = $(".btn-disclaimer")
      close = $(".close-modal");

  open.click( function(e) {
    e.preventDefault();

    el.addClass('open-modal');
    $("html").addClass('overflow--hidden');
  });

  close.click( function(e) {
    e.preventDefault();

    el.removeClass('open-modal');
    $("html").removeClass('overflow--hidden');
  });
}

jQuery(document).ready(function($) {
  toggleModal(".disclaimer");
});
