/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close');

/* Menu show */
if(navToggle){
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

/* Menu hidden */
if(navClose){
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
const navMenu = document.getElementById('nav__menu')
// When we click on each nav_link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
const header = document.getElementById('header')

// Add a class if the bottom offset is greater than 50 of the viewport
this.scrollY >= 50  ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()
   
   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_ge9t24f', 'template_loted2x', '#contact-form', 'W7OqT-EVo-zXVXJyg')
      .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully '

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()

      }, () => {
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)


/*<p class="contact__message" id="contact-message"></p>

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()
   
   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_ge9t24f', 'template_13ttcic', '#contact-form', 'W7OqT-EVo-zXVXJyg')
      .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully '

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()

      }, () => {
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) '
      })
}

contactForm.addEventListener('submit', sendEmail)*/
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
    
    }
    window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
const scrollDown = window.scrollY

sections. forEach(current =>{
const sectionHeight = current.offsetHeight,
sectionTop = current.offsetTop - 58,
sectionId = current.getAttribute('id'),
sectionsClass = document.querySelector('.nav_menu a[href *= ' + sectionId + ']')

if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
sectionsClass.classList.add('active-link')
}else{
sectionsClass.classList.remove('active-link')
}}
)
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
