$(document).ready(() => {
  const width = $(window).width();

  $(".bgImg,.phoneImg").delay(300).fadeIn(1000),
    (function anime() {
      $(".phoneImg").animate(
        {
          top: "+=10px",
          right: "+=10px",
        },
        1000,
        () => {
          $(".phoneImg").animate(
            {
              top: "-=10px",
              right: "-=10px",
            },
            1000,
            anime
          );
        }
      );
    })();
});
