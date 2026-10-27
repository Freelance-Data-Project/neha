document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-subscribe]");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (typeof fbq === "function") {
        fbq("track", "Subscribe");
      }
    });
  });
});
