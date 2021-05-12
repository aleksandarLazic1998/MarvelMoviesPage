
// NavBar DropDown Menu function
function navBar(){
    const navBtn = document.getElementById('drop-down-nav-btn');
   const content = document.querySelector('.drop-down-div-content')
   
   // This function will check if drodown button have display:none it will change it to block; and reverse.
   function showDropdown(){
       if (content.style.display === "none") {
           content.style.display = "block";
         } else {
           content.style.display = "none";
         }
   }
   
   navBtn.addEventListener('click',showDropdown);
   }
   
   // This function was made to later reacturate it in another js fragment
   navBar();