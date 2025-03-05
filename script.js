const texts = {
  title: "Revive Your Nails and Radiant Skin Naturally – Try It Today!",
  subtitle:
    "Want beautiful, strong nails and healthy skin without harsh chemicals? Discover a natural, at-home treatment using cutting-edge nanotechnology to fight common issues and boost resilience. It’s simple, affordable, and works from the comfort of your home. Click below to explore this easy solution now! Results may vary – consult a professional before use. This is an affiliate review.",
};

document.getElementById("text_title").textContent = texts.title;
document.getElementById("text_subtitle").textContent = texts.subtitle;

const encryptedLink =
  "https://e26525m1t4dh5f-ages-m4-m1e.hop.clickbank.net?cbpage=tsl";

document.querySelectorAll("[data-product]").forEach((link) => {
  link.href = encryptedLink;
});

// Configure o redirecionamento pelo clique na imagem e no texto diretamente
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
      hasScrolled = true; // Impede redirecionamentos adicionais
    }
  }
});
