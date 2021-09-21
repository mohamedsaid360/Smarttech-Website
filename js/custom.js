
// make header fixed on scroll
window.onscroll = function () { myFunction() };
var header = document.getElementById("SmarttechHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("scrollable-header");
  } else {
    header.classList.remove("scrollable-header");
  }
}


function openNav() {
  const Sidenav = document.querySelector("#mySidenav");
  if (Sidenav.classList.contains("openSidenav")) {
    Sidenav.classList.remove("openSidenav");
  } else {
    Sidenav.classList.add("openSidenav");
  }
}



$(document).ready(function () {
  document.body.style.zoom = "90%";

  $("#ServicesMinus").on("mouseover", function () {

    document.querySelector("#ServicesMinus .services-minus").style.display = "block";
  });
  $("#ServicesMinus").on("mouseout", function () {

    document.querySelector("#ServicesMinus .services-minus").style.display = "none";
  });



  var scrollingSection = localStorage.getItem("scrollingSection");
  InnerScroll(scrollingSection);
});


document.addEventListener("scroll", function (e) {




  var animatedClasses = document.querySelectorAll(".animate");

  for (let i = 0; i < animatedClasses.length; i++) {
    var windowHeight = window.innerHeight;
    var AnSectionTop = animatedClasses[i].getBoundingClientRect().top;
    AnSectionPoint = 0;
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

function goToProductDetails(projectId) {
  debugger
  localStorage.setItem("projectId", projectId);
  window.open('../pages/productDetails.html', "_self");
}

function GoToAbout() {
  localStorage.setItem("scrollingSection", "about")
}

function GoToContactUs() {
  localStorage.setItem("scrollingSection", "contact")
}


function InnerScroll(section) {
  var percent;
  var dividedPercent;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    dividedPercent = 78;
  } else {
    dividedPercent = 100;

  }

  if (section == "contact") {
    percent = 820;


  } else if (section == "about") {
    percent = 120;
  }



  localStorage.removeItem("scrollingSection");
  var windowHeight = window.innerHeight;
  var percentPixel = windowHeight * (percent / dividedPercent); // calculate the amount of pixel off a percentage
  // debugger;
  $("html, body").animate(
    {
      scrollTop: percentPixel,
    },
    800,
    function () { }
  );
}
