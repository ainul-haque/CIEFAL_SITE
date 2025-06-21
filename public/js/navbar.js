// Custom Navbar Mobile Menu Toggle

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.custom-navbar-toggler');
  const mobileMenu = document.querySelector('.custom-navbar-mobile-menu');
  const overlay = document.querySelector('.custom-navbar-overlay');
  const closeBtn = document.querySelector('.custom-navbar-close');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (toggler) {
    toggler.addEventListener('click', openMenu);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
}); 