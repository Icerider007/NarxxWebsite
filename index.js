document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navbarLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const links = document.querySelectorAll('.navbar-links a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});

