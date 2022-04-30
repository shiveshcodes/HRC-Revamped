function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("openbtn").style.visibility="hidden";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("openbtn").style.visibility="visible";
  }
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    var reveals2 = document.querySelectorAll(".reveal2");
    
    for( var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if ((elementTop < windowHeight - elementVisible)){
            reveals[i].classList.add("active");
        }
        else{
            reveals[i].classList.remove("active");
        }
    }

    //reveals2[0].classList.add("active");
}

window.addEventListener("scroll", reveal);