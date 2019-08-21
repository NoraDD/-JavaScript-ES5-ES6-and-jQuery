$(document).ready(function() {
  var itemsLength = $(".cards_container .item").length;

  var current = 1;

  $(".total_slide").text(itemsLength);

  $(".current_slide").text(current);

  $(".cardSlider .btn_prev").on("click", function() {
    if (current > 1) {
      current = current - 1;
      showSLide(current);
    } else {
      current = itemsLength;
      showSLide(current);
    }
  });

  $(".cardSlider .btn_next").on("click", function() {
    if (current !== itemsLength) {
      current = current + 1;
      showSLide(current);
    } else {
      current = 1;
      showSLide(current);
    }
  });

  function showSLide(slideNumber) {
    $(".cards_container .item").removeClass("active");
    $('div[data-id="' + slideNumber + '"]').addClass("active");

    $(".current_slide").text(slideNumber);
  }
});
