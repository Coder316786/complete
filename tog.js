// const hamb = document.querySelector(".hamb")
// const navMenu = document.querySelector(".nav-menu")

// hamb.addEventListener("click",() => {
//     hamb.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })



// const hamb = document.querySelector(".hamb");
// const navMenu = document.querySelector(".nav-menu");

// hamb.addEventListener("click", () => {
//   hamb.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });


const hamb = document.querySelector(".hamberger");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", () => {
hamb.classList.toggle("active");  // Toggle the 'active' class for hamburger
 navMenu.classList.toggle("active");  // Toggle the 'active' class for nav menu
});


let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');

document.querySelectorAll('.btn[data-action="add-to-cart"]').forEach(button => {
  button.addEventListener('click', () => {
    // Update cart count
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Add bounce animation
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 500);
  });
});


let cartCoun = localStorage.getItem('cartCount') || 0;

// And update the click handler to include
localStorage.setItem('cartCount', cartCount);