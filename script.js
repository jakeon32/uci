// Simple slideshow and mobile menu logic
(function(){
  // slideshow
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

  // mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  function openMenu(){
    mobileMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded','true');
    mobileMenu.setAttribute('aria-hidden','false');
  }
  function hideMenu(){
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
    mobileMenu.setAttribute('aria-hidden','true');
  }
  if(menuToggle){menuToggle.addEventListener('click', ()=>{ const isOpen = mobileMenu.classList.contains('open'); isOpen?hideMenu():openMenu(); });}
  if(closeMenu){closeMenu.addEventListener('click', hideMenu);}

  // close mobile menu when clicking outside
  document.addEventListener('click', (e)=>{
    if(!mobileMenu.classList.contains('open')) return;
    if(!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) hideMenu();
  });
})();
