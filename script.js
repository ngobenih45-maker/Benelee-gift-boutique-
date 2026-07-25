/*=========================================
Benelee Gift Boutique
Luxury Website Script
=========================================*/

// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        },1200);

    }

});

// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}

// ==============================
// STICKY HEADER
// ==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ==============================
// SCROLL TO TOP
// ==============================

const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==============================
// FADE-IN ANIMATION
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll(

".feature-card,.collection,.product-card,.why-card,.testimonial,.gallery-grid img,.contact-card"

);

hidden.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ==============================
// COUNTER ANIMATION
// ==============================

const counters=document.querySelectorAll(".counter h2");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace("+","").replace("%","");

let count=+counter.getAttribute("data-count")||0;

const increment=target/100;

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

counter.innerText=Math.ceil(count)+"+";

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});

// ==============================
// GALLERY HOVER
// ==============================

document.querySelectorAll(".gallery-grid img")

.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn,.btn-small")

.forEach(button=>{

button.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==============================
// CURRENT YEAR
// ==============================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log("Benelee Gift Boutique Loaded Successfully");