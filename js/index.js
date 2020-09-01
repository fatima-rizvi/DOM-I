const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Label the nav links
const firstLink = document.querySelector('a:nth-of-type(1)');
firstLink.textContent = "Services";

const secondLink = firstLink.nextElementSibling;
secondLink.textContent = "Product";

const thirdLink = secondLink.nextElementSibling;
thirdLink.textContent = "Vision";

const fourthLink = thirdLink.nextElementSibling;
fourthLink.textContent = "Features";

const fifthLink = fourthLink.nextElementSibling;
fifthLink.textContent = "About";

const sixthLink = fifthLink.nextElementSibling;
sixthLink.textContent = "Contact";

// Fill in the h1 element in the cta section
const headOne = document.querySelector('h1');
headOne.innerHTML = 'DOM<br> Is<br> Awesome';

// Fill in the button text in the cta section
const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

// Update cta image
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', 'img/header-img.png');

//Fill out all text-content
// Separate top and bottom content
const topContent = document.querySelector('.top-content');
const bottomContent = document.querySelector('.bottom-content');
//Separate text contents
const firstTextBox = topContent.querySelector('.text-content:nth-of-type(1)');
//console.log(firstTextBox);
const secondTextBox = topContent.querySelector('.text-content:nth-of-type(2)');
//console.log(secondTextBox);
const thirdTextBox = bottomContent.querySelector('.text-content:nth-of-type(1)');
//console.log(thirdTextBox);
const fourthTextBox = bottomContent.querySelector('.text-content:nth-of-type(2)');
//console.log(fourthTextBox);
const fifthTextBox = bottomContent.querySelector('.text-content:nth-of-type(3)');
//console.log(fifthTextBox);

//Separate the text-content h4's
const h4FirstCard = firstTextBox.querySelector('h4');
const h4SecondCard = secondTextBox.querySelector('h4');
const h4ThirdCard = thirdTextBox.querySelector('h4');
const h4FourthCard = fourthTextBox.querySelector('h4');
const h4FifthCard = fifthTextBox.querySelector('h4');

//Separate the text-content p's
const pFirstCard = firstTextBox.querySelector('p');
const pSecondCard = secondTextBox.querySelector('p');
const pThirdCard = thirdTextBox.querySelector('p');
const pFourthCard = fourthTextBox.querySelector('p');
const pFifthCard = fifthTextBox.querySelector('p');

//Fill in the h4's
h4FirstCard.textContent = 'Features';
h4SecondCard.textContent = 'About';
h4ThirdCard.textContent = 'Services';
h4FourthCard.textContent = 'Product';
h4FifthCard.textContent = 'Vision';

//Fill in the p's
pFirstCard.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pSecondCard.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pThirdCard.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pFourthCard.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pFifthCard.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Update middle-img
const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

//Separate the contact section
const contact = document.querySelector('.contact');
h4Contact = contact.querySelector('h4');
pOneContact = contact.querySelector('p:nth-of-type(1)');
pTwoContact = contact.querySelector('p:nth-of-type(2)');
pThreeContact = contact.querySelector('p:nth-of-type(3)');
//Fill out contact section
h4Contact.textContent = 'Contact';
pOneContact.innerHTML = '123 Way 456 Street<br>Somewhere, USA';
pTwoContact.textContent = '1 (888) 888-8888';
pThreeContact.textContent = 'sales@greatidea.io';


//Separate footer and fill in p with copyright
const footer = document.querySelector('footer');
const pFooter = footer.querySelector('p');
pFooter.textContent = 'Copyright Great Idea! 2018';


// Add new content

//Add links to the nav system

// .appendChild()
const nav = document.querySelector('nav');
let a = document.createElement('a');
a.textContent = "Gallery";
nav.appendChild(a);
// .prepend()
let a2 = document.createElement('a');
a2.textContent = "Home";
nav.prepend(a2);

//Change nav text to green
const allLinks = document.querySelectorAll('a');
//console.log(allLinks);
for (let i = 0; i < allLinks.length; i++){
  allLinks[i].style.color = 'green';
};

//Stretch
// Update styles for fun!

//Mess with the cta button
ctaButton.style.backgroundColor = 'green';
ctaButton.style.color = 'white';
ctaButton.style.borderRadius = '15px';

//Mess with some other stuff
contact.style.color = "maroon";
headOne.style.color = "purple";
headOne.style.textDecoration = "underline";

// make the button and flip the colors
const newButton = document.createElement('button');
newButton.textContent = ' Click me :) ';
nav.appendChild(newButton);
newButton.style.backgroundColor = "green";
newButton.style.color = "white";
newButton.style.borderRadius = '15px';
const body = document.querySelector('body');
function change () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  contact.style.color = "#ccff00";
  for (let i = 0; i < allLinks.length; i++){
    allLinks[i].style.color = '#90EE90';
  };
  ctaButton.style.backgroundColor = '#90EE90';
  ctaButton.style.color = 'navy';
  newButton.style.backgroundColor = "#90EE90";
  newButton.style.color = "navy";
  headOne.style.color = "#ccff00";
};
newButton.addEventListener('click', change);
