    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

   const navButton = document.querySelector('button[aria-expanded]');
   function toggleNav({ target }) {
       const expanded = target.getAttribute('aria-expanded') === 'true' || false ;
       console.log(expanded);
       navButton.setAttribute('aria-expanded',!expanded)
   }

   navButton.addEventListener('click',toggleNav);
