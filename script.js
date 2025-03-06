const encryptedLink =
  "https://e26525m1t4dh5f-ages-m4-m1e.hop.clickbank.net?cbpage=tsl";

document.querySelectorAll("[data-product]").forEach((link) => {
  link.href = encryptedLink;
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    window.open(encryptedLink, "_self");
  });
});

function redirectToHoplink() {
  window.open(encryptedLink, "_self");
}

document
  .getElementById("button_see_more")
  .addEventListener("click", redirectToHoplink);

let hasScrolled = false;
document.addEventListener("scroll", () => {
  if (!hasScrolled) {
    if (window.scrollY > 100) {
      redirectToHoplink();
      hasScrolled = true;
    }
  }
});
