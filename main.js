
// smooth scroll
$(document).ready(function () {
 $(".navbar .nav-link").on('click', function (event) {

  if (this.hash !== "") {

   event.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
    scrollTop: $(hash).offset().top
   }, 700, function () {
    window.location.hash = hash;
   });
  }
 });
});

const tabs = document.querySelectorAll('[data-target]'),
 tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
 tab.addEventListener("click", () => {
  const target = document.querySelector(tab.dataset.target)

  tabContent.forEach(tabContents => {
   tabContents.classList.remove('skills__active')
  })

  target.classList.add('skills__active')


  tabs.forEach(tab => {
   tab.classList.remove('skills__active')
  })

  tab.classList.add('skills__active')
 })
})

// protfolio filters

$(window).on("load", function () {
 var t = $(".portfolio-container");
 t.isotope({
  filter: ".new",
  animationOptions: {
   duration: 750,
   easing: "linear",
   queue: !1
  }
 }), $(".filters a").click(function () {
  $(".filters .active").removeClass("active"), $(this).addClass("active");
  var i = $(this).attr("data-filter");
  return t.isotope({
   filter: i,
   animationOptions: {
    duration: 750,
    easing: "linear",
    queue: !1
   }
  }), !1
 });
});

// Skills
document.addEventListener("DOMContentLoaded", function () {
 const progressBars = document.querySelectorAll('.progress-bar');
 const skillSection = document.querySelector('#skill');

 const skillColors = {
  'html': '#e34c26',
  'css': '#264de4',
  'php': '#787cb5',
  'javascript': '#f0db4f',
  'angular js': '#dd0031',
  'wordpress': '#21759b'
 };

 function fillProgressBar(bar, value) {
  let currentWidth = 0;
  const updateWidth = () => {
   currentWidth++;
   bar.style.width = `${currentWidth}%`;
   if (currentWidth < value) {
    requestAnimationFrame(updateWidth);
   }
  };
  requestAnimationFrame(updateWidth);
 }

 const options = {
  root: null,
  threshold: 0.1
 };

 const callback = (entries, observer) => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    progressBars.forEach(bar => {
     const value = bar.getAttribute('aria-valuenow');
     const skillName = bar.parentElement.previousElementSibling.children[0].innerText.trim().toLowerCase();
     bar.style.backgroundColor = skillColors[skillName];
     bar.style.width = 0; // ابدأ بعرض 0
     setTimeout(() => {
      fillProgressBar(bar, value);
     }, 500); // يمكنك تعديل الزمن هنا لتأخير بداية التحريك
    });
    observer.disconnect(); // إيقاف المراقبة بعد التحريك
   }
  });
 };

 const observer = new IntersectionObserver(callback, options);
 observer.observe(skillSection);
});

// contact form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
 let parent = this.parentNode;
 parent.classList.add("focus");
}

function blurFunc() {
 let parent = this.parentNode;
 if (this.value == "") {
  parent.classList.remove("focus");
 }
}

inputs.forEach((input) => {
 input.addEventListener("focus", focusFunc);
 input.addEventListener("blur", blurFunc);
})