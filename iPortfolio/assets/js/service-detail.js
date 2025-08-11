document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const body = item.querySelector(".accordion-body");

      // Close other items if open
      document.querySelectorAll(".accordion-item").forEach((el) => {
        if (el !== item) {
          el.querySelector(".accordion-body").style.maxHeight = null;
          el.classList.remove("active");
        }
      });

      // Toggle current item
      if (item.classList.contains("active")) {
        body.style.maxHeight = null;
        item.classList.remove("active");
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        item.classList.add("active");
      }
    });
  });
});
