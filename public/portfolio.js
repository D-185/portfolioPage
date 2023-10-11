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
    if(navBar.style.display === 'block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
    }
}