var showedNav = false;
function navSwitch()
{
    !showedNav?openNav():closeNav();
    showedNav=!showedNav;
    document.getElementsByClassName("ham")[0].classList.toggle('active')
}

function openNav() {
    console.log("opened")
    document.getElementById("myNav").style.height = "100%";
    document.getElementsByClassName("overlay-content")[0].style.display="block"
  }
  
  function closeNav() {
    document.getElementsByClassName("overlay-content")[0].style.display="none";
    document.getElementById("myNav").style.height = "80px";
  }