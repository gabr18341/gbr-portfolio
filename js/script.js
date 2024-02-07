// change letter animation *********************************************
let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// circle skills animation *********************************************
const circles = document.querySelectorAll(".circle");


//************* skills selector ***********/

// project filters section
var mixer = mixitup(".portfolio-gallery");

// active menu ******************
let menuLis = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLis.forEach((sec) => sec.classList.remove("active"));
  menuLis[len].classList.add("active");
  // sticky header ********************************
  const stickyHeader = document.querySelector("header");
  stickyHeader.classList.toggle("sticky", window.scrollY > 50 );
   // احصل على ارتفاع النوافذ والتمرير الرأسي الحالي
   var windowHeight = window.innerHeight;
   var scrollY = window.scrollY || window.pageYOffset;

   // احصل على العنصر المستهدف (قسم المهارات)
   var skillsSection = document.getElementById('skills');

   // احصل على موقع العنصر بالنسبة لأعلى الصفحة
   var skillsSectionOffsetTop = skillsSection.offsetTop;

   // احسب الموقع الذي يجب أن يصل إليه المستخدم لتنفيذ الكود
   var triggerPosition = skillsSectionOffsetTop - windowHeight + 600;

   // قارن بين الموقع الحالي للتمرير والموقع المطلوب لتنفيذ الكود
   if (scrollY > triggerPosition && scrollY < triggerPosition + 200) {
       // هنا يمكنك تنفيذ الكود الخاص بك
       circles.forEach((ele) => {
        var dots = ele.getAttribute("data-dots");
        var marked = ele.getAttribute("data-percent");
        var percent = Math.floor((dots * marked) / 100);
        var points = "";
        var rotate = 360 / dots;
        for (var i = 0; i < dots; i++) {
          points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        ele.innerHTML = points;
        const pointsMarked = ele.querySelectorAll(".points");
        for (var i = 0; i < percent; i++) {
          pointsMarked[i].classList.add("marked");
        }
      });
   }
  // if (window.scrollY > 800 && window.scrollY < 850) {
    
  // }
}
activeMenu();

window.addEventListener("scroll", activeMenu);

// toggle icon header ********************************
let menuIcon = document.getElementById('menu-icon')
let navbarList = document.querySelector('.navlist')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbarList.classList.toggle('open')
}
window.onscroll = () => {
  menuIcon.classList.remove('bx-x')
  navbarList.classList.remove('open')
}

// parallax ********************************
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items');
    } else {
      entry.target.classList.remove('show-items');
    }
  })
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el)=> observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el)=> observer.observe(el));

const scrollLeft = document.querySelectorAll('.scroll-left');
scrollLeft.forEach((el)=> observer.observe(el));

const scrollRight = document.querySelectorAll('.scroll-right');
scrollRight.forEach((el)=> observer.observe(el));
