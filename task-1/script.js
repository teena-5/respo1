// Loader hide after page loaded
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Toggle menu on small screens
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// Optional: close menu when a nav link is clicked (on mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

// Simple form validation on submit
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();

  if(!name || !email || !phone) {
    alert('Please fill in all fields.');
    return;
  }

  if(!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you for contacting us, ${name}! We'll get back to you soon.`);
  this.reset();
});

function validateEmail(email) {
  // Basic email regex
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
