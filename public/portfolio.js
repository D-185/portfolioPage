// Typewriter effect code start
const textTemp = "ront-End Developer."
const speed = 100;
const typeWriter = document.getElementById('typeWriter');
let forward = true;
let charIndex = 0;

function typeEffect() {
    if (forward) {
        typeWriter.textContent += textTemp.charAt(charIndex);
        charIndex++;
        if (charIndex === textTemp.length) {
            forward = false;
        }
    } else {
        charIndex--;
        typeWriter.textContent = textTemp.substring(0, charIndex);
        if (charIndex === 0) {
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

// Typewriter effect code end


function toggleNavBar() {
    let navBar = document.querySelector('.navBar');
    if (navBar.style.display === 'flex') {
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




// contract from start
document.getElementById('contactForm').addEventListener('submit', function (event) {
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
// contract from end

//projectCards as an array start
function projectData() {
    const projectArray = [{
        id: 1,
        imgSrc: "./assets/image/html.jpg",
        imgAlt: "Html Card Image",
        cardHeader: "HTML Practice",
        cardDescription: "HTML practice page with all the html tags, html table ... etc.",
        techUsed: "html, css, javaScript",
        previewHref: "https://testfirebase-5f5a7.web.app/htmlPractice.html",
        codeHref: "https://github.com/D-185/htmlPractice/blob/main/public/htmlPractice.html"
    },
    {
        id: 2,
        imgSrc: "./assets/image/css.png",
        imgAlt: "Css Card Image",
        cardHeader: "CSS Practice",
        cardDescription: "CSS practice page with css property:- Border, ... ",
        techUsed: "html, css, javaScript",
        previewHref: "https://testfirebase-5f5a7.web.app/cssProperty.html",
        codeHref: "https://github.com/D-185/htmlPractice/blob/main/public/cssProperty.html"
    },
    {
        id: 3,
        imgSrc: "./assets/image/javaScript.jpg",
        imgAlt: "JavaScript Card Image",
        cardHeader: "JavaScript Practice",
        cardDescription: "JavasSript practice page with all ...",
        techUsed: "html, css, javaScript",
        previewHref: "#",
        codeHref: "#"
    },
    {
        id: 4,
        imgSrc: "./assets/image/reactImage.jpeg",
        imgAlt: "React Card Image",
        cardHeader: "React Practice",
        cardDescription: "React practice page ...",
        techUsed: "html, css, React",
        previewHref: "#",
        codeHref: "#"
    },
    {
        id: 5,
        imgSrc: "./assets/image/workInProgrss.png",
        imgAlt: "wrokInProgree Card Image",
        cardHeader: "Title:-",
        cardDescription: "",
        techUsed: "",
        previewHref: "#",
        codeHref: "#"
    },
    {
        id: 6,
        imgSrc: "./assets/image/workInProgrss.png",
        imgAlt: "wrokInProgree Card Image",
        cardHeader: "Title:-",
        cardDescription: "",
        techUsed: "",
        previewHref: "#",
        codeHref: "#"
    }
    ]

    let cardTemp = "";
    projectArray.map((item, index) => {
        cardTemp += `<div key=${index} class="colWrap">
          <div class="cardBorderAnimation">
            <div class="cardBorder">
              <div class="cardImage">
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
              </div>
              <div class="cardContent">
                <div class="cardHeader">${item.cardHeader}</div>
                <div class="cardDescription">Description:- ${item.cardDescription}
                </div>
                <div class="techUsed">Tech Stack:- ${item.techUsed}</div>
              </div>
              <div class="cardFooter">
                <a href=${item.previewHref} target="_blank">
                  Live Preview
                </a>
                <a href=${item.codeHref} target="_blank">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>`
    })
    let projectCardTemp = document.getElementById('projectCardsWrapId');
    projectCardTemp.innerHTML = cardTemp;

}
projectData();
//projectCards as an array end

//techStact icons start
function techStactIcon(){
    const techStactArray = [
        {
            id: 1,
            imgSrc: "./assets/image/html.svg",
            imgAlt: "Html Icon"
        },
        {
            id: 2,
            imgSrc: "./assets/image/css.svg",
            imgAlt: "Css Icon"
        },
        {
            id: 3,
            imgSrc: "./assets/image/js.svg",
            imgAlt: "JavaScript Icon"
        },
        {
            id: 4,
            imgSrc: "./assets/image/bootstrap.svg",
            imgAlt: "BootStrap Icon"
        },
        {
            id: 5,
            imgSrc: "./assets/image/git.svg",
            imgAlt: "Git Icon"
        },
        {
            id: 6,
            imgSrc: "./assets/image/github.svg",
            imgAlt: "Github Icon"
        },
        {
            id: 7,
            imgSrc: "./assets/image/vsCode.svg",
            imgAlt: "VsCode Icon"
        },
        {
            id: 8,
            imgSrc: "./assets/image/react.svg",
            imgAlt: "React Icon"
        },
    ]

    let techStactTemp = "";
    techStactArray.map((item, index) => {
        techStactTemp += `<div class="iconWrap">
        <img src=${item.imgSrc} alt=${item.imgAlt}>
      </div>`
    })
    let techStactIconTemp = document.getElementById('techStachId')
    techStactIconTemp.innerHTML = techStactTemp;
}
techStactIcon();
//techStact icons end