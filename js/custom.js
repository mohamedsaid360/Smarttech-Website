function openNav() {
  const Sidenav = document.querySelector("#mySidenav");
  if (Sidenav.classList.contains("openSidenav")) {
    Sidenav.classList.remove("openSidenav");
  } else {
    Sidenav.classList.add("openSidenav");
  }
}

function onLoad() {
  document.body.style.zoom = "90%";

  document.querySelector(".background-landing").style.transform = "scale(1.1)";
  document.querySelector(".landing-content h1").style.marginBottom = "2px";


}


document.addEventListener("scroll", function (e) {
  var animatedClasses = document.querySelectorAll(".animate");

  for (let i = 0; i < animatedClasses.length; i++) {
    var windowHeight = window.innerHeight;
    var AnSectionTop = animatedClasses[i].getBoundingClientRect().top;
    AnSectionPoint =0;
    // var top  = window.pageYOffset + window.innerHeight,
    // isVisible = top > animatedClasses[i].offsetTop;
    if (AnSectionTop < windowHeight - AnSectionPoint) {
      // debugger
      animatedClasses[i].classList.add("active");
    } else {
      animatedClasses[i].classList.remove("active");
    }
  }
});


// $(window).scroll(function () {
//   var hT = $('#customSoftware').offset().top,
//     hH = $('#customSoftware').outerHeight(),
//     wH = $(window).height(),
//     wS = $(this).scrollTop();
//   if (wS > (hT + hH - wH)) {
//     typeWriter();

//   }
// });

var i = 0;
var txt = `` ;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".active .custom-software h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
 
  typeWriter();
 
