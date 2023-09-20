window.onload = function() {
    setTimeout(function() {
      document.getElementById("nav-section").style.opacity = 1;
    }, 1000);
  };

const carouselSection = document.getElementById("carousel-section");


const navbar = document.getElementById("nav-section");
function updateNavbarOpacity() {
  const scrollPosition = window.scrollY;
  const carouselHeight = carouselSection.offsetHeight;
  if (scrollPosition < carouselHeight) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
}
window.addEventListener("scroll", updateNavbarOpacity);

updateNavbarOpacity();

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top >= 0 && rect.bottom <= windowHeight) ||
        (rect.bottom >= 0 && rect.top <= windowHeight)
    );
}

function handleScroll() {
    var elements = document.querySelectorAll('.section1');

    elements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top >= 0 && rect.bottom <= windowHeight) ||
        (rect.bottom >= 0 && rect.top <= windowHeight)
    );
}

function handleScroll2() {
    var elements = document.querySelectorAll('.section2');

    elements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', handleScroll2);
window.addEventListener('load', handleScroll2);
