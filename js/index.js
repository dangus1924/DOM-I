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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll("nav a");
navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";

//Tasks 3
navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";

const image = document.createElement("img");
const imageTwo = document.createElement("img");
image.src = "https://sankimetal.com/wp-content/uploads/2018/01/bg-green-header-02.jpg";
imageTwo.src = "https://sankimetal.com/wp-content/uploads/2018/01/bg-green-header-02.jpg";
image.style.height = "50px"
image.style.width = "15%"
imageTwo.style.height = "50px"
imageTwo.style.width = "100%"

document.querySelector("nav").appendChild(image);
document.querySelector("footer").prepend(imageTwo);


const headerImg = document.getElementById("cta-img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const domAwe = document.querySelectorAll("h1");
domAwe[0].innerHTML = "Dom <br> is <br> Awesome";

const button = document.querySelectorAll("button");
button[0].innerHTML = "Get Started";

const textHead = document.querySelectorAll("h4");
textHead[0].innerHTML = "Features";
textHead[1].innerHTML = "About";
textHead[2].innerHTML = "Services";
textHead[3].innerHTML = "Product";
textHead[4].innerHTML = "Vision";
textHead[5].innerHTML = "Contact";

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const descrip = document.querySelectorAll(".text-content p");
descrip[0].innerText = siteContent["main-content"]["features-content"];
descrip[1].innerText = siteContent["main-content"]["about-content"];
descrip[2].innerText = siteContent["main-content"]["services-content"];
descrip[3].innerText = siteContent["main-content"]["product-content"];
descrip[4].innerText = siteContent["main-content"]["vision-content"];

const contact = document.querySelectorAll("p");
contact[5].innerHTML = "123 Way 456 street <br> Somewhere, USA <br><br> 1 (888) 888-8888 <br><br> sales@greatidea.io"

const foot = document.querySelectorAll("p");
foot[6].innerHTML = "<br><br>Copyright Great Idea! 2018"
foot[6].style.textAlign = "center"
