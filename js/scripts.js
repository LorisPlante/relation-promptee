let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

const parent = document.getElementById("parent");
const follower = document.getElementById("follower");

// ---------- scroll down header desktop ----------

window.onscroll = function () {
  const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("headerDesktop").style.top = "0";
  } else {
    document.getElementById("headerDesktop").style.top = "-110px";
  }

  prevScrollPos = currentScrollPos;
};

// ---------- click burger header mobile ----------

burger = document.getElementById("burger");
burgerClose = document.getElementById("burgerClose");
ulMenuMobile = document.getElementById("ulMenuMobile");

burger.addEventListener("click", () => {
  ulMenuMobile.classList.toggle("top-[50px]");
  ulMenuMobile.classList.toggle("top-[-100%]");

  burger.classList.toggle("hidden");
  burger.classList.toggle("block");
  burgerClose.classList.toggle("hidden");
  burgerClose.classList.toggle("block");
});

burgerClose.addEventListener("click", () => {
  ulMenuMobile.classList.toggle("top-[50px]");
  ulMenuMobile.classList.toggle("top-[-100%]");

  burger.classList.toggle("hidden");
  burger.classList.toggle("block");
  burgerClose.classList.toggle("hidden");
  burgerClose.classList.toggle("block");
});

// ---------- swiper slide height ----------

document.addEventListener("DOMContentLoaded", function () {
  var zommSurSlide1 = document.getElementById("zommSurSlide1");
  var zommSurSlide2 = document.getElementById("zommSurSlide2");
  var zommSurSlide3 = document.getElementById("zommSurSlide3");

  // Trouvez la hauteur maximale
  var maxHeight = Math.max(zommSurSlide1.clientHeight, zommSurSlide2.clientHeight, zommSurSlide3.clientHeight);

  // Appliquez la hauteur maximale à toutes les divs
  zommSurSlide1.style.height = maxHeight + "px";
  zommSurSlide2.style.height = maxHeight + "px";
  zommSurSlide3.style.height = maxHeight + "px";
});

// ---------- eyes follows mouse ----------

document.addEventListener("mousemove", (e) => {
  const rect = parent.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const clampedX = Math.min(Math.max(offsetX - follower.clientWidth / 2, 0), rect.width - follower.clientWidth);
  const clampedY = Math.min(Math.max(offsetY - follower.clientHeight / 2, 0), rect.height - follower.clientHeight);

  follower.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
});
