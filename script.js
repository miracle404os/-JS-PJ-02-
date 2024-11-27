const arrowLeft = document.querySelector(".prev");
const arrowRight = document.querySelector(".next");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");
const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');

const link = document.querySelectorAll(".step21-navigation__item");
const paginationCircles = [];

const textCity = document.querySelector('.subtitle2');
const city = ['Rostov-on-Don', 'Sochi', 'Rostov-on-Don'];

const textStyle = document.querySelector('.subtitle22');
const style = ['LCD admiral', 'Thieves', 'Patriotic'];

const textArea = document.querySelector('.subtitle3');
const texts = ['81 m2', '105 m2', '93 m2'];

const textTime = document.querySelector('.subtitle4');
const time = ['3.5 months', '4 months', '3 months'];



let currentSlideIndex = 0;


function changeText() {
  if (currentSlideIndex < 0) {
    currentSlideIndex = city.length - 1;
    currentSlideIndex = texts.length - 1;
    currentSlideIndex = time.length - 1;
    currentSlideIndex = style.length - 1;
  } else if (currentSlideIndex >= city.length) {
    currentSlideIndex = 0;
  }
  textCity.textContent = city[currentSlideIndex];
  textArea.textContent = texts[currentSlideIndex];
  textTime.textContent = time[currentSlideIndex];
  textStyle.textContent = style[currentSlideIndex];
}




function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);

}


function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => changeSlide(index));
    });
}


function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
    link[currentSlideIndex].classList.add("active_yellow");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
    link[currentSlideIndex].classList.remove("active_yellow");
}





function showSlide() {
    slides[currentSlideIndex].classList.add("block");

}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");

}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
    changeText();
}

function nextSlide() {
let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    } 
    changeSlide(newSlideIndex);
}


addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);




admiral.addEventListener('click', () => {
  admiral.classList.remove('active_grey');
  admiral.classList.add('active_yellow');
  thieves.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 0;
 changeSlide(slideIndex);
});

thieves.addEventListener('click', () => {
  thieves.classList.remove('active_grey');  
  thieves.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  patriotic.classList.add('active_grey');
  slideIndex = 1;
  changeSlide(slideIndex);
});

patriotic.addEventListener('click', () => {
  patriotic.classList.remove('active_grey');
  patriotic.classList.add('active_yellow');
  admiral.classList.add('active_grey');
  thieves.classList.add('active_grey');
  slideIndex = 2;
  changeSlide(slideIndex);
});



