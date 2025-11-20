// Simple slideshow and mobile menu logic
(function(){
  // slideshow
  function initSlideshow() {
    const slides = Array.from(document.querySelectorAll('.hero-slides .slide'));
    let current = 0;
    if(slides.length){
      slides[current].classList.add('visible');
      setInterval(()=>{
        slides[current].classList.remove('visible');
        current = (current + 1) % slides.length;
        slides[current].classList.add('visible');
      }, 6000);
    }
  }

  // mobile menu
  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    const handleOutsideClick = (e) => {
      // if the click is not the menu and not the toggle button, hide the menu
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        hideMenu();
      }
    };

    function openMenu(){
      mobileMenu.classList.add('open');
      menuToggle.setAttribute('aria-expanded','true');
      mobileMenu.setAttribute('aria-hidden','false');
      // Add listener when menu is open
      document.addEventListener('click', handleOutsideClick);
    }

    function hideMenu(){
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
      mobileMenu.setAttribute('aria-hidden','true');
      // Remove listener when menu is closed
      document.removeEventListener('click', handleOutsideClick);
    }

    if(menuToggle){
      menuToggle.addEventListener('click', (e)=>{
        e.stopPropagation(); // prevent the outside click handler from firing immediately
        const isOpen = mobileMenu.classList.contains('open');
        isOpen ? hideMenu() : openMenu();
      });
    }

    if(closeMenu){
      closeMenu.addEventListener('click', hideMenu);
    }

    // Close menu when any menu link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', hideMenu);
    });
  }

  // Initialize slideshow immediately (doesn't depend on components)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlideshow);
  } else {
    initSlideshow();
  }

  // Initialize mobile menu after components are loaded
  document.addEventListener('componentsLoaded', initMobileMenu);
})();
