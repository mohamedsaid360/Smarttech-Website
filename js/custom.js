function openNav() {
  const Sidenav = document.querySelector("#mySidenav");
  if (Sidenav.classList.contains("openSidenav")) {
   
    Sidenav.classList.remove("openSidenav");
  } else {
    Sidenav.classList.add("openSidenav");
  }
}

 

  function onLoad() {
    document.querySelector(".background-landing").style.transform = "scale(1.1)";
    document.querySelector(".landing-content h1").style.marginBottom = "2px";
       
  }
 