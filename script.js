// Animate sections on scroll
const animatedElements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});
animatedElements.forEach(el => observer.observe(el));

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if(window.scrollY > 400) backToTop.classList.remove("hidden");
  else backToTop.classList.add("hidden");
});
backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
