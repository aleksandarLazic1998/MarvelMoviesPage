// Global variable because it is usen i more functions
let clicked = false;
// NavBar DropDown Menu function
function navBar() {
  const navBtn = document.getElementById('drop-down-nav-btn');
  const content = document.querySelector('.drop-down-div__content');
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
// This function was made to later refacturate it in another js fragment
navBar();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This function will add class .open to a span.burger that will make iut to rotate it and other..
function toggleMenuBar() {
  const burger = document.querySelector('.navigation__burger');
  const li = document.querySelectorAll('.left-ul-nav__li');

  let showMenu = false;
  burger.addEventListener('click', function () {
    if (!showMenu) {
      burger.classList.add('open');
      li.forEach(liItem => liItem.classList.add('open'));

      showMenu = true;
    } else {
      burger.classList.remove('open');
      li.forEach(liItem => liItem.classList.remove('open'));

      showMenu = false;
    }
  });
}
// For showing menu button
toggleMenuBar()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This Function set the year on the copyRigth span
function changeYear() {
  const year = document.getElementById('time');
  let timeYear = new Date().getFullYear();
  year.innerHTML = String(timeYear);
}
// For seting the year
changeYear();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This function will add liking and disliking functionality
function liking() {
  // This function will be called when the like or bookmark button and it will decide to like and bookmark or unlike and unbook based on the class names 
  function likeUnlike(element) {
    if (element.classList.value.endsWith('o')) {

      if (element.classList.value.includes('heart')) {
        element.style.color = 'red';
        element.classList.remove('fa-heart-o');
        element.classList.add('fa-heart');
      } else if (element.classList.value.includes('bookmark')) {
        element.style.color = 'black';
        element.classList.remove('fa-bookmark-o');
        element.classList.add('fa-bookmark');
      }
    } else if (!element.classList.value.endsWith('o')) {

      if (element.classList.value.includes('heart')) {
        element.style.color = 'black';
        element.classList.remove('fa-heart');
        element.classList.add('fa-heart-o');

      } else if (element.classList.value.includes('bookmark')) {
        element.classList.remove('fa-bookmark');
        element.classList.add('fa-bookmark-o');
      }
    }
  }

  // This function will change styles of css that will make icon look like they can like and dislike
  const icons = document.querySelectorAll('.icons');
  const like = document.querySelectorAll('i.fa-heart-o');
  const bookmark = document.querySelectorAll('i.fa-bookmark-o');

  // For each icon on the screen 
  icons.forEach(icon => {
    icon.addEventListener('click', function (event) {

      if (clicked === false) {

        likeUnlike(event.target);

        clicked = true;
      } else {
        likeUnlike(event.target);
        clicked = false;
      }
    });
  }, false);
}
// For Liking and disliking
liking();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This function will add functionality for opening image modulo and closing it
function modules() {
  let moduleImage = document.querySelectorAll('.module-image');
  let imageButton = document.querySelectorAll('.image-btn');

  // This function will be called for images Event Listener and it will add class to image that is clicked and all buttons
  function openImage(event) {
    let image = event;
    image.classList.add('open');
    for (let i = 0; i < imageButton.length; i++) {
      imageButton[i].classList.add('open');
    }
  }

  // This function will be called for images Event Listener and it will remove all classes from image and buttons
  function closeImageClick(event) {
    let image = event;
    image.classList.remove('open');
    for (let i = 0; i < imageButton.length; i++) {
      imageButton[i].classList.remove('open');
    }
  }

  // This function will be called in Event Lisener for buttons when the x btn is clicked and when the Escape button was pressed 
  // It will close opened image and button
  function closeAll() {
    for (let i = 0; i < imageButton.length; i++) {
      imageButton[i].classList.remove('open');
    }
    for (let i = 0; i < moduleImage.length; i++) {
      moduleImage[i].classList.remove('open');
    }
  }

  // Event Listener when you click the image
  imageButton.forEach(button => {
    button.addEventListener('click', function () {
      closeAll();
    });
  });

  // Event Listener when you press Escape key button 
  document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape') {
      closeAll();
    }
  });

  // Event Listener for Images
  moduleImage.forEach(images => {
    images.addEventListener('click', function (event) {
      if (clicked === false) {
        openImage(event.target);

        clicked = true;
      } else {
        closeImageClick(event.target);

        clicked = false;
      }
    });
  });
}
// For clicking and closing modules from images
modules();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////