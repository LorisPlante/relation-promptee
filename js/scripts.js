let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

// const parent = document.getElementById("parent");
// const follower = document.getElementById("follower");

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

// ---------------------------
// ---------- Quizz ----------
// ---------------------------

// ---------- qst1 ----------
function qstChoix1RepVrai() {
  document.getElementById("qstChoix1").classList.toggle("grid");
  document.getElementById("qstChoix1").classList.toggle("hidden");
  document.getElementById("qstChoix1Vrai").classList.toggle("grid");
  document.getElementById("qstChoix1Vrai").classList.toggle("hidden");
  document.getElementById("qstBtn1").classList.toggle("block");
  document.getElementById("qstBtn1").classList.toggle("hidden");
}
function qstChoix1RepFaux() {
  document.getElementById("qstChoix1").classList.toggle("grid");
  document.getElementById("qstChoix1").classList.toggle("hidden");
  document.getElementById("qstChoix1Faux").classList.toggle("grid");
  document.getElementById("qstChoix1Faux").classList.toggle("hidden");
  document.getElementById("qstBtn1").classList.toggle("block");
  document.getElementById("qstBtn1").classList.toggle("hidden");
}
function goToQst2() {
  document.getElementById("qstChoix2").classList.toggle("grid");
  document.getElementById("qstChoix2").classList.toggle("hidden");
  document.getElementById("qstChoix1Vrai").classList.remove("grid");
  document.getElementById("qstChoix1Faux").classList.remove("grid");
  document.getElementById("qstChoix1Vrai").classList.add("hidden");
  document.getElementById("qstChoix1Faux").classList.add("hidden");
  document.getElementById("qstBtn1").classList.toggle("block");
  document.getElementById("qstBtn1").classList.toggle("hidden");
  document.getElementById("qst1").classList.toggle("block");
  document.getElementById("qst1").classList.toggle("hidden");
  document.getElementById("qst2").classList.toggle("block");
  document.getElementById("qst2").classList.toggle("hidden");
}

// ---------- qst2 ----------
function qstChoix2RepVrai() {
  document.getElementById("qstChoix2").classList.toggle("grid");
  document.getElementById("qstChoix2").classList.toggle("hidden");
  document.getElementById("qstChoix2Vrai").classList.toggle("grid");
  document.getElementById("qstChoix2Vrai").classList.toggle("hidden");
  document.getElementById("qstBtn2").classList.toggle("block");
  document.getElementById("qstBtn2").classList.toggle("hidden");
}
function qstChoix2RepFaux() {
  document.getElementById("qstChoix2").classList.toggle("grid");
  document.getElementById("qstChoix2").classList.toggle("hidden");
  document.getElementById("qstChoix2Faux").classList.toggle("grid");
  document.getElementById("qstChoix2Faux").classList.toggle("hidden");
  document.getElementById("qstBtn2").classList.toggle("block");
  document.getElementById("qstBtn2").classList.toggle("hidden");
}
function backToQst1() {
  document.getElementById("qstChoix1").classList.toggle("grid");
  document.getElementById("qstChoix1").classList.toggle("hidden");
  document.getElementById("qstChoix2Vrai").classList.remove("grid");
  document.getElementById("qstChoix2Vrai").classList.add("hidden");
  document.getElementById("qstChoix2Faux").classList.remove("grid");
  document.getElementById("qstChoix2Faux").classList.add("hidden");
  document.getElementById("qstBtn2").classList.toggle("block");
  document.getElementById("qstBtn2").classList.toggle("hidden");
  document.getElementById("qst1").classList.toggle("block");
  document.getElementById("qst1").classList.toggle("hidden");
  document.getElementById("qst2").classList.toggle("block");
  document.getElementById("qst2").classList.toggle("hidden");
}
function goToQst3() {
  document.getElementById("qstChoix3").classList.toggle("grid");
  document.getElementById("qstChoix3").classList.toggle("hidden");
  document.getElementById("qstChoix2Vrai").classList.remove("grid");
  document.getElementById("qstChoix2Vrai").classList.add("hidden");
  document.getElementById("qstChoix2Faux").classList.remove("grid");
  document.getElementById("qstChoix2Faux").classList.add("hidden");
  document.getElementById("qstBtn2").classList.toggle("block");
  document.getElementById("qstBtn2").classList.toggle("hidden");
  document.getElementById("qst2").classList.toggle("block");
  document.getElementById("qst2").classList.toggle("hidden");
  document.getElementById("qst3").classList.toggle("block");
  document.getElementById("qst3").classList.toggle("hidden");
}

// ---------- qst3 ----------
function qstChoix3RepVrai() {
  document.getElementById("qstChoix3").classList.toggle("grid");
  document.getElementById("qstChoix3").classList.toggle("hidden");
  document.getElementById("qstChoix3Vrai").classList.toggle("grid");
  document.getElementById("qstChoix3Vrai").classList.toggle("hidden");
  document.getElementById("qstBtn3").classList.toggle("block");
  document.getElementById("qstBtn3").classList.toggle("hidden");
}
function qstChoix3RepFaux() {
  document.getElementById("qstChoix3").classList.toggle("grid");
  document.getElementById("qstChoix3").classList.toggle("hidden");
  document.getElementById("qstChoix3Faux").classList.toggle("grid");
  document.getElementById("qstChoix3Faux").classList.toggle("hidden");
  document.getElementById("qstBtn3").classList.toggle("block");
  document.getElementById("qstBtn3").classList.toggle("hidden");
}
function backToQst2() {
  document.getElementById("qstChoix2").classList.toggle("grid");
  document.getElementById("qstChoix2").classList.toggle("hidden");
  document.getElementById("qstChoix3Vrai").classList.remove("grid");
  document.getElementById("qstChoix3Vrai").classList.add("hidden");
  document.getElementById("qstChoix3Faux").classList.remove("grid");
  document.getElementById("qstChoix3Faux").classList.add("hidden");
  document.getElementById("qst2").classList.toggle("block");
  document.getElementById("qst2").classList.toggle("hidden");
  document.getElementById("qst3").classList.toggle("block");
  document.getElementById("qst3").classList.toggle("hidden");
  document.getElementById("qstBtn3").classList.toggle("block");
  document.getElementById("qstBtn3").classList.toggle("hidden");
}
function goToRecap() {
  document.getElementById("qstChoixRecap").classList.toggle("grid");
  document.getElementById("qstChoixRecap").classList.toggle("hidden");
  document.getElementById("qstChoix3Vrai").classList.remove("grid");
  document.getElementById("qstChoix3Vrai").classList.add("hidden");
  document.getElementById("qstChoix3Faux").classList.remove("grid");
  document.getElementById("qstChoix3Faux").classList.add("hidden");
  document.getElementById("qstBtn3").classList.toggle("block");
  document.getElementById("qstBtn3").classList.toggle("hidden");
  document.getElementById("qst3").classList.toggle("block");
  document.getElementById("qst3").classList.toggle("hidden");
  document.getElementById("qstRecap").classList.toggle("block");
  document.getElementById("qstRecap").classList.toggle("hidden");
  document.getElementById("qstBtnRecommencer").classList.toggle("block");
  document.getElementById("qstBtnRecommencer").classList.toggle("hidden");
}

// ---------- recap ----------
function recommencerQuizz() {
  document.getElementById("qstChoix1").classList.toggle("grid");
  document.getElementById("qstChoix1").classList.toggle("hidden");
  document.getElementById("qstChoixRecap").classList.toggle("grid");
  document.getElementById("qstChoixRecap").classList.toggle("hidden");
  document.getElementById("qstChoix3Vrai").classList.remove("grid");
  document.getElementById("qstChoix3Vrai").classList.add("hidden");
  document.getElementById("qstChoix3Faux").classList.remove("grid");
  document.getElementById("qstChoix3Faux").classList.add("hidden");
  document.getElementById("qstRecap").classList.toggle("block");
  document.getElementById("qstRecap").classList.toggle("hidden");
  document.getElementById("qst1").classList.toggle("block");
  document.getElementById("qst1").classList.toggle("hidden");
  document.getElementById("qstBtnRecommencer").classList.toggle("block");
  document.getElementById("qstBtnRecommencer").classList.toggle("hidden");
}

// ---------- que'st ce qu'une ia ----------

function ia1() {
  document.getElementById("contentIA1").classList.add("block");
  document.getElementById("contentIA1").classList.remove("hidden");
  document.getElementById("contentIA2").classList.add("hidden");
  document.getElementById("contentIA2").classList.remove("block");
  document.getElementById("contentIA3").classList.add("hidden");
  document.getElementById("contentIA3").classList.remove("block");
}
function ia2() {
  document.getElementById("contentIA1").classList.add("hidden");
  document.getElementById("contentIA1").classList.remove("block");
  document.getElementById("contentIA2").classList.add("block");
  document.getElementById("contentIA2").classList.remove("hidden");
  document.getElementById("contentIA3").classList.add("hidden");
  document.getElementById("contentIA3").classList.remove("block");
}
function ia3() {
  document.getElementById("contentIA1").classList.add("hidden");
  document.getElementById("contentIA1").classList.remove("block");
  document.getElementById("contentIA2").classList.add("hidden");
  document.getElementById("contentIA2").classList.remove("block");
  document.getElementById("contentIA3").classList.add("block");
  document.getElementById("contentIA3").classList.remove("hidden");
}

// ---------- eyes follows mouse ----------

// document.addEventListener("mousemove", (e) => {
//   const rect = parent.getBoundingClientRect();
//   const offsetX = e.clientX - rect.left;
//   const offsetY = e.clientY - rect.top;

//   const clampedX = Math.min(Math.max(offsetX - follower.clientWidth / 2, 0), rect.width - follower.clientWidth);
//   const clampedY = Math.min(Math.max(offsetY - follower.clientHeight / 2, 0), rect.height - follower.clientHeight);

//   follower.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
// });
