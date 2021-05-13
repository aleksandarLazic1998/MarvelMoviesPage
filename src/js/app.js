// NavBar DropDown Menu function
function navBar() {
  const navBtn = document.getElementById('drop-down-nav-btn');
  const content = document.querySelector('.drop-down-div-content')

  // This function will check if drodown button have display:none it will change it to block; and reverse.
  function showDropdown() {
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  navBtn.addEventListener('click', showDropdown);
}


// This function will add class .open to a span.burger that will make iut to rotate it and other..
function toggleMenuBar() {
  const burger = document.querySelector('.navigation-burger');
  let showMenu = false;
  burger.addEventListener('click', function () {
    if (!showMenu) {
      burger.classList.add('open');

      showMenu = true;
    } else {

      burger.classList.remove('open');
      showMenu = false;
    }
  });
}





// This function was made to later refacturate it in another js fragment
navBar();

// For showing menu button
toggleMenuBar()