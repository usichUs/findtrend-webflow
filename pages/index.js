const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const switchOutter = document.querySelector(".subscription__switch-outter");
const switchInner = document.querySelector(".subscription__switch-inner");

const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");

switchOutter.addEventListener("click", () => {
  switchInner.classList.toggle("on");
  yearly.classList.toggle("active");
  monthly.classList.toggle("active");
});
