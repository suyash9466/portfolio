// Smooth scroll for internal links (works on most browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    // allow regular external links (mailto, http) to behave normally
    const href = this.getAttribute("href");
    if(!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if(target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple lightbox: open certificate images in a new tab on click (quick & simple)
document.querySelectorAll('.cert-item img').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
