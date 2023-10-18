const textTemp = "ront-End Developer."
const speed = 100;
const typeWriter = document.getElementById('typeWriter');
let forward = true;
let charIndex = 0;

function typeEffect() {
    if (forward) {
        typeWriter.textContent += textTemp.charAt(charIndex);
        charIndex++;
        if(charIndex === textTemp.length){
            forward = false;
        }
    } else {
        charIndex--;
        typeWriter.textContent = textTemp.substring(0, charIndex);
        if (charIndex === 0){
            forward = true;
        }
    }
    setTimeout(typeEffect, speed);
}

typeEffect();

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});


function toggleNavBar(){
    let navBar = document.querySelector('.navBar');
    if(navBar.style.display === 'flex') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
        navBar.style.flexDirection = "column";
    }
}


// Get references to the popup and button elements
const openPopupButton = document.getElementById('openPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupContainer = document.getElementById('popupContainer');

// Open the popup when the button is clicked
openPopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});

// Close the popup when the close button is clicked or when clicking outside the popup
closePopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});





document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Display an alert with the form data
            alert("Form Data:\n" + JSON.stringify(formObject, null, 2));
        });

