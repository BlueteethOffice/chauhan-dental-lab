document.addEventListener('DOMContentLoaded', function() {
  const navMenu = document.querySelector('.nav-menu');
  let menuToggle = document.getElementById('menuToggle');
  if (!navMenu || !menuToggle) return;

  // Clone menuToggle to strip any duplicate/conflicting event listeners
  const clonedMenuToggle = menuToggle.cloneNode(true);
  menuToggle.parentNode.replaceChild(clonedMenuToggle, menuToggle);
  menuToggle = clonedMenuToggle;

  // Extract links from the existing desktop menu
  const links = Array.from(navMenu.querySelectorAll('a')).filter(a => !a.classList.contains('mobile-git-link'));
  
  // Icon map for links based on text content
  const iconMap = {
    'home': 'fas fa-home',
    'about us': 'fas fa-info-circle',
    'our products': 'fas fa-tooth',
    'gallery': 'fas fa-image',
    'why us': 'fas fa-star',
    'why choose us': 'fas fa-star',
    'contact us': 'fas fa-phone'
  };

  // Create Backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  backdrop.id = 'drawerBackdrop';
  document.body.appendChild(backdrop);

  // Create Drawer Container
  const drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  drawer.id = 'mobileDrawer';

  // Build Drawer Header
  const headerHtml = `
    <div class="drawer-header">
      <div class="drawer-logo">
        <div class="logo-icon"><i class="fas fa-tooth"></i></div>
        <div class="logo-text">
          <strong>CHAUHAN</strong>
          <span>DENTAL LABORATORY</span>
        </div>
      </div>
      <button class="drawer-close" id="drawerClose">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  // Build Drawer Links List
  let linksHtml = '<div class="drawer-links">';
  links.forEach(link => {
    const text = link.textContent.trim();
    const href = link.getAttribute('href');
    const isActive = link.classList.contains('active') ? 'active' : '';
    const key = text.toLowerCase();
    const iconClass = iconMap[key] || 'fas fa-link';
    
    linksHtml += `
      <a href="${href}" class="drawer-link ${isActive}">
        <span class="drawer-link-icon-wrap"><i class="${iconClass}"></i></span>
        <span class="drawer-link-text">${text}</span>
        <i class="fas fa-chevron-right drawer-link-arrow"></i>
      </a>
    `;
  });
  linksHtml += '</div>';

  // Build Contact Section
  const contactHtml = `
    <div class="drawer-contact">
      <div class="drawer-contact-item">
        <span class="drawer-contact-icon"><i class="fas fa-phone"></i></span>
        <a href="tel:+919810350385">+91-9810350385</a>
      </div>
      <div class="drawer-contact-item">
        <span class="drawer-contact-icon"><i class="far fa-envelope"></i></span>
        <a href="mailto:support@chauhandentallaboratory.com">support@chauhandentallaboratory.com</a>
      </div>
    </div>
  `;

  // Build CTA Buttons
  const ctasHtml = `
    <div class="drawer-ctas">
      <a href="tel:+919810350385" class="drawer-btn drawer-btn-call"><i class="fas fa-phone"></i> Call Now</a>
      <a href="https://wa.me/919810350385" class="drawer-btn drawer-btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
    </div>
  `;

  // Build Footer
  const footerHtml = `
    <div class="drawer-footer">
      <i class="fas fa-shield-alt"></i>
      <span>Precision Crafted Dental Restorations for Modern Dentistry</span>
    </div>
  `;

  // Combine and append to drawer
  drawer.innerHTML = headerHtml + linksHtml + contactHtml + ctasHtml + footerHtml;
  document.body.appendChild(drawer);

  // Toggle Functionality with Advanced Mobile Scroll Lock
  let scrollPosition = 0;

  function openDrawer() {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }

  // Intercept the click on the header toggle button
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openDrawer();
  });

  // Close triggers
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Prevent clicks inside drawer from closing it
  drawer.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
